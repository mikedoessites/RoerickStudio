import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// ─── Schema ──────────────────────────────────────────────────────────────────

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  businessName: z.string().max(150).optional(),
  need: z.enum(['web-design', 'brand-presence', 'both', 'not-sure']),
  budget: z.enum(['under-5k', '5k-10k', '10k-25k', '25k-plus', 'not-sure', '']).optional(),
  timeline: z.string().max(100).optional(),
  message: z.string().min(1).max(5000),
  // Calculator context (optional — only present when arriving from calculator)
  source: z.string().max(50).optional(),
  businessType: z.string().max(50).optional(),
  leadsLost: z.string().max(20).optional(),
  revenueLost: z.string().max(20).optional(),
  // Honeypot — must be empty; bots fill it, humans don't see it
  website: z.string().max(0, 'Bot detected').optional(),
});

type ContactFormData = z.infer<typeof ContactSchema>;

// ─── Rate limiting (in-memory, per serverless instance) ──────────────────────
// Not a substitute for Upstash/Redis in high-traffic scenarios, but adequate
// for a low-volume contact form where each submission is a genuine lead.

const RATE_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT = 3;             // max 3 submissions per IP per window

const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (ipTimestamps.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (times.length >= RATE_LIMIT) return true;
  times.push(now);
  ipTimestamps.set(ip, times);
  return false;
}

// ─── Email formatting ─────────────────────────────────────────────────────────

// Strip newlines from values used in email headers to prevent header injection.
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim();
}

function formatEmailBody(body: ContactFormData): string {
  const calculatorSection =
    body.source === 'brand-presence-calculator'
      ? `\nCalculator context:\n  Business type: ${body.businessType ?? 'n/a'}\n  Leads lost/mo: ${body.leadsLost ?? 'n/a'}\n  Revenue lost/mo: ${body.revenueLost ? `$${body.revenueLost}` : 'n/a'}\n`
      : '';

  return `
New inquiry from ${body.name}
────────────────────────────────────

Name:         ${body.name}
Email:        ${body.email}
Business:     ${body.businessName || '(not provided)'}
Need:         ${body.need}
Budget:       ${body.budget || '(not specified)'}
Timeline:     ${body.timeline || '(not specified)'}
${calculatorSection}
Message:
${body.message}

────────────────────────────────────
Sent via roerickstudio.com
  `.trim();
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Rate limit by IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment before trying again.' },
      { status: 429 }
    );
  }

  try {
    const raw = await request.json();
    const result = ContactSchema.safeParse(raw);

    if (!result.success) {
      const firstError = result.error.issues[0];
      // Honeypot triggered
      if (firstError?.path[0] === 'website') {
        // Return 200 to bots so they think it worked
        return NextResponse.json({ success: true }, { status: 200 });
      }
      return NextResponse.json(
        { error: firstError?.message ?? 'Invalid submission.' },
        { status: 400 }
      );
    }

    const body = result.data;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'noreply@roerickstudio.com',
        to: 'michael@roerickstudio.com',
        // sanitizeHeader prevents CRLF injection in replyTo / subject
        replyTo: sanitizeHeader(body.email),
        subject: sanitizeHeader(
          `New inquiry from ${body.name}${body.businessName ? ` — ${body.businessName}` : ''}`
        ),
        text: formatEmailBody(body),
      });
    } else {
      // Dev fallback: log to console when RESEND_API_KEY is not set
      console.log('─── New Contact Inquiry (RESEND_API_KEY not set) ───');
      console.log(formatEmailBody(body));
      console.log('────────────────────────────────────────────────────');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
