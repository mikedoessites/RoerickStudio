'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ProcessStep } from '@/components/ProcessStep';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import BrandPresenceCalculator from '@/components/BrandPresenceCalculator';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const pillars = [
  {
    title: 'Founder Accountability',
    description:
      'You work directly with Michael, start to finish. No handoffs to junior designers, no lost context.',
  },
  {
    title: 'Project-Management Rigor',
    description:
      'Decades of managing complex signage installs taught us to deliver on time and on spec. That discipline carries into every web project.',
  },
  {
    title: 'Digital + Physical Unity',
    description:
      'Most agencies only know screens. We know screens AND storefronts — so your brand stays consistent everywhere your customers see it.',
  },
  {
    title: 'Custom, Never Templated',
    description:
      'Every site is built from scratch for your business. The result looks like you, not like everyone else.',
  },
];

const processSteps = [
  { step: 1, title: 'Discovery', description: 'We learn your business, goals, and audience.' },
  { step: 2, title: 'Proposal', description: 'You get a clear scope, timeline, and price. No surprises.' },
  { step: 3, title: 'Onboarding', description: 'We gather assets, lock in the plan, and kick off.' },
  { step: 4, title: 'Design & Build', description: 'We design, you review. We build, you approve.' },
  { step: 5, title: 'Launch', description: 'We handle the technical launch. Your site goes live.' },
  { step: 6, title: 'Support & Grow', description: 'Ongoing care plans and growth retainers available.' },
];

const placeholderWork = [
  {
    title: 'Fox Mechanical Air Services',
    category: 'Web Design & Development',
    image: 'fox-mechanical',
    summary: 'Custom single-page site for a 30-year family-owned HVAC company in Arlington, TX. Built to convert emergency calls and free estimate requests from DFW homeowners.',
    href: '/work',
    problem: 'No web presence in a competitive market — losing leads to competitors with polished sites.',
    result: 'Custom site deployed to Vercel in under 2 weeks. Strong mobile CTA hierarchy, trust signals, and 24/7 emergency call prompts throughout.',
    thumbnailBg: 'linear-gradient(135deg, #041E42 0%, #071f44 60%, #0d2a5c 100%)',
    thumbnailLabel: 'Fox Mechanical Air Services — HVAC · Arlington, TX',
  },
  {
    title: 'Faithful Flavas',
    category: 'Web Design & Development + Shopify',
    image: 'faithful-flavas',
    summary: 'Heritage-driven food & wellness brand from DFW. Custom HTML preview site plus a complete Shopify OS 2.0 theme — warm, soulful, and built entirely from scratch.',
    href: '/work',
    problem: 'Needed a design layer rebuild and a client-facing preview — without touching live products, checkout, or payments.',
    result: '33-file Shopify OS 2.0 theme, full brand guidelines with design tokens, and a standalone HTML preview site — delivered as a complete handoff package.',
    thumbnailBg: 'linear-gradient(135deg, #2B1D1A 0%, #3d2820 60%, #4a3228 100%)',
    thumbnailLabel: 'Faithful Flavas — Food & Wellness · DFW, TX',
  },
  {
    title: 'St. Barnabas United Methodist Church',
    category: 'Web Design & Development',
    image: 'sbumc',
    summary: 'Full website rebuild for a historic UMC congregation in Arlington, TX. Multi-page site covering worship, ministries, events, giving, and community connection.',
    href: '/work',
    problem: 'Outdated site that didn\'t reflect the church\'s vibrant community or make it easy for visitors to find service times, connect, or give.',
    result: 'Modern multi-page site with ministry pages, sermon section, events calendar integration, and clear connection pathways — live at sbumc-preview.vercel.app.',
    thumbnailBg: 'linear-gradient(135deg, #1a2a1a 0%, #1e3a2a 60%, #243d2e 100%)',
    thumbnailLabel: 'St. Barnabas United Methodist Church — Arlington, TX',
  },
];

const testimonials = [
  {
    quote: 'Client testimonials coming soon. Reach out to request references — I\'m happy to connect you with past clients directly.',
    name: 'Roerick Studio',
    company: '',
    role: 'Launching 2026',
    placeholder: true,
  },
];

export default function HomePage() {
  useScrollAnimation();

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative grid-motif-bg pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg
            width="520"
            height="520"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity="0.04"
          >
            <rect x="1" y="1" width="46" height="46" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
            <line x1="1" y1="17" x2="47" y2="17" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
            <line x1="1" y1="31" x2="47" y2="31" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
            <line x1="17" y1="1" x2="17" y2="47" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
            <line x1="31" y1="1" x2="31" y2="47" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
            <rect x="15" y="12" width="3.5" height="24" fill="#FFFFFF" />
            <path d="M18.5 12 H26 Q32 12 32 19 Q32 26 26 26 H18.5" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="25" y1="26" x2="33" y2="36" stroke="#C9A84C" strokeWidth="3.5" strokeLinecap="square" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 fade-up-element">WEB DESIGN · BRAND PRESENCE · RESULTS</p>
            <h1 className="text-display text-white mb-6 fade-up-element delay-100">
              Websites that bring your business more customers.
            </h1>
            <p
              className="text-midgrey leading-relaxed mb-10 fade-up-element delay-200"
              style={{ fontSize: '17px', maxWidth: '60ch' }}
            >
              We design and build custom websites for businesses that want to grow — and because we come
              from the world of signage and physical branding, we make sure your brand looks just as sharp
              on the street as it does on the screen.
            </p>
            <div className="flex flex-wrap gap-4 fade-up-element delay-300">
              <Button variant="primary" href="/contact" size="lg">Get a Free Quote</Button>
              <Button variant="ghost" href="/work" size="lg">See Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Strip ──────────────────────────────────── */}
      <Section theme="parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-slate text-sm mb-10 fade-up-element">
            Trusted by businesses from local startups to multi-location national brands.
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {[
              { name: 'Fox Mechanical', sub: 'HVAC · Arlington, TX' },
              { name: 'Faithful Flavas', sub: 'Food & Wellness · DFW' },
              { name: 'Your Business', sub: 'Could be here' },
            ].map((client, n) => (
              <div
                key={client.name}
                className="px-6 h-14 bg-navy/8 border border-navy/15 flex flex-col items-center justify-center fade-up-element"
                style={{ transitionDelay: `${n * 80}ms`, minWidth: '160px' }}
              >
                <span className="font-bold text-navy text-xs tracking-tight">{client.name}</span>
                <span className="caption text-midgrey/70 mt-0.5" style={{ fontSize: '9px' }}>{client.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Services Overview ────────────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy" style={{ letterSpacing: '-0.03em' }}>
              Two things. Done exceptionally.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="fade-up-element delay-100">
              <Card
                theme="navy"
                title="Web Design & Development"
                description="Custom websites built to convert visitors into customers. No templates, no shortcuts — just clean code and intentional design that works."
                accentLabel="Digital"
                href="/services"
              />
            </div>
            <div className="fade-up-element delay-200">
              <Card
                theme="parchment"
                title="Brand Presence"
                description="From storefront signage to interior graphics, we make sure your brand is unmistakable in person. The rare studio that handles digital AND physical."
                accentLabel="Physical"
                href="/services#brand-presence"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Why Roerick Studio ───────────────────────────── */}
      <Section theme="navy" gridMotif>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">The Difference</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>
              Why Roerick Studio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-8 border border-white/10 bg-white/[0.03] fade-up-element"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-gold" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-gold/20" />
                </div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: '18px', letterSpacing: '-0.02em' }}>
                  {pillar.title}
                </h3>
                <p className="text-midgrey leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Process Teaser ───────────────────────────────── */}
      <Section theme="parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">Our Process</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy" style={{ letterSpacing: '-0.03em' }}>
              How We Work
            </h2>
          </div>
          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-8 lg:grid lg:grid-cols-6 min-w-max lg:min-w-0">
              {processSteps.map((s, i) => (
                <div key={s.step} className="fade-up-element" style={{ transitionDelay: `${i * 80}ms` }}>
                  <ProcessStep step={s.step} title={s.title} description={s.description} theme="light" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 fade-up-element">
            <Button variant="primary" href="/services" size="md">See the full process</Button>
          </div>
        </div>
      </Section>

      {/* ─── Featured Work ─────────────────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 fade-up-element">
            <div>
              <p className="eyebrow mb-3">Portfolio</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy" style={{ letterSpacing: '-0.03em' }}>
                Recent Work
              </h2>
            </div>
            <Button variant="primary" href="/work" size="sm">View all work</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderWork.map((item, i) => (
              <div key={i} className="fade-up-element" style={{ transitionDelay: `${i * 100}ms` }}>
                <CaseStudyCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Testimonials ──────────────────────────────────── */}
      <Section theme="navy" gridMotif>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">Social Proof</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="fade-up-element" style={{ transitionDelay: `${i * 100}ms` }}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Brand Presence Calculator ────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 fade-up-element">
            <p className="eyebrow mb-3">WEB DESIGN · BRAND PRESENCE · FREE TOOL</p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-navy mb-5 fade-up-element"
              style={{ letterSpacing: '-0.03em', maxWidth: '22ch' }}
            >
              What&apos;s an outdated presence actually costing you?
            </h2>
            <p
              className="text-slate leading-relaxed fade-up-element delay-100"
              style={{ fontSize: '16px', maxWidth: '65ch', lineHeight: '1.7' }}
            >
              You don&apos;t need a marketing report to know something&apos;s off — a slow trickle of calls,
              customers who say they &ldquo;didn&apos;t know you existed,&rdquo; a website that hasn&apos;t changed since
              2019. What&apos;s harder to see is the number behind it. Pick your industry, check off what&apos;s
              missing, and get a directional estimate of the leads and revenue an outdated web and
              storefront presence is likely costing you every month — built from real industry
              benchmarks, not guesswork.
            </p>
          </div>
          <div className="fade-up-element delay-200">
            <BrandPresenceCalculator />
          </div>
        </div>
      </Section>

      {/* ─── Closing CTA Band ─────────────────────────────── */}
      <Section theme="gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-display text-navy mb-4 fade-up-element" style={{ letterSpacing: '-0.03em' }}>
            Ready to build something great?
          </h2>
          <p className="text-navy/70 text-lg mb-10 fade-up-element delay-100" style={{ maxWidth: '50ch', margin: '0 auto 2.5rem' }}>
            Let&apos;s talk about your project. Free consultation, no pressure.
          </p>
          <div className="fade-up-element delay-200">
            <Button variant="navy" href="/contact" size="lg">Get a Free Quote</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
