import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  businessName?: string;
  need: string;
  budget?: string;
  timeline?: string;
  message: string;
}

function formatEmailBody(body: ContactFormData): string {
  return `
New inquiry from ${body.name}
────────────────────────────────────

Name:         ${body.name}
Email:        ${body.email}
Business:     ${body.businessName || '(not provided)'}
Need:         ${body.need}
Budget:       ${body.budget || '(not specified)'}
Timeline:     ${body.timeline || '(not specified)'}

Message:
${body.message}

────────────────────────────────────
Sent via roerickstudio.com
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    if (!body.name || !body.email || !body.need || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, project type, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'noreply@roerickstudio.com',
        to: 'michael@roerickstudio.com',
        replyTo: body.email,
        subject: `New inquiry from ${body.name}${body.businessName ? ` — ${body.businessName}` : ''}`,
        text: formatEmailBody(body),
      });
    } else {
      // Dev fallback: log to console
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
