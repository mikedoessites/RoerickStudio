'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Metadata } from 'next';

export default function AboutPage() {
  useScrollAnimation();

  const credentials = [
    'Background in signage project management spanning local, national, and international brand programs',
    'Multi-location brand rollouts: design through fabrication, permitting, and installation',
    'Custom web design and development for businesses across industries — HVAC, food & wellness, retail, and more',
    'Direct client contact on every project — no account managers, no middlemen',
    'Project delivery on time and on spec — every time',
  ];

  return (
    <>
      {/* ─── Header ──────────────────────────────────────── */}
      <section className="grid-motif-bg pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 fade-up-element">About</p>
          <h1
            className="text-display text-white mb-4 fade-up-element delay-100"
            style={{ maxWidth: '20ch' }}
          >
            About Roerick Studio
          </h1>
          <p className="text-gold font-medium fade-up-element delay-200" style={{ fontSize: '18px', letterSpacing: '-0.01em' }}>
            Built by someone who&apos;s been there.
          </p>
        </div>
      </section>

      {/* ─── The Story ────────────────────────────────────── */}
      <Section theme="parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="fade-up-element">
              <p className="eyebrow mb-6">The Story</p>
              <div className="flex flex-col gap-6 text-slate leading-relaxed" style={{ fontSize: '16px' }}>
                <p>
                  Before Roerick Studio, there was the signage industry. Years of managing complex brand
                  programs for businesses of every size — coordinating multi-location installs, navigating
                  vendor relationships, hitting tight timelines, and making sure the brand looked right
                  whether you were looking at it from across a parking lot or standing directly in front
                  of the storefront.
                </p>
                <p>
                  That work requires precision. You learn quickly that a deadline isn&apos;t flexible when
                  a crew is scheduled, permits have been pulled, and a client&apos;s grand opening is in
                  two days. You learn to communicate clearly, manage complexity, and deliver what you said
                  you would deliver.
                </p>
                <p>
                  After years of building brands in the physical world, I saw a gap: businesses with sharp
                  storefronts and weak websites. Or great websites with no visual consistency in the real
                  world. Two completely separate agencies handling two completely separate things — and
                  nobody making sure it all added up to a coherent brand.
                </p>
                <p>
                  I started Roerick Studio to close that gap — building websites with the same precision
                  and accountability that a large signage program demands.
                </p>
                <p>
                  When you work with Roerick Studio, you work directly with me. I manage the project, I
                  do the design, I write the code. You always know where your project stands, you always
                  have a direct line, and you never wonder who actually did the work.
                </p>
                <p>
                  The signage background isn&apos;t a footnote. It&apos;s what makes the web work better
                  — because I understand brand consistency across every touchpoint, not just the screen.
                </p>
                <div className="border-l-2 border-gold pl-6 mt-4">
                  <p className="text-navy font-medium text-lg" style={{ letterSpacing: '-0.01em' }}>
                    — Michael Roerick, Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-up-element delay-200">
              <div
                className="aspect-[4/5] bg-navy/10 border border-navy/20 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                aria-label="[PLACEHOLDER — founder photo]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                <span className="font-mono text-xs text-midgrey border border-midgrey/30 px-3 py-1 relative z-10">
                  [PLACEHOLDER — Founder Photo]
                </span>
                <span className="caption text-midgrey relative z-10">Michael Roerick</span>
                <div className="absolute inset-0 opacity-5">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="absolute w-full border-t border-gold" style={{ top: `${n * 20}%` }} />
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-navy">
                <p className="eyebrow text-gold/70 mb-3">Quick Facts</p>
                <ul className="flex flex-col gap-2">
                  {[
                    'Founder & sole principal',
                    'Background in signage project management',
                    'Multi-location programs across the US and internationally',
                    'Custom web design & development',
                  ].map((fact) => (
                    <li key={fact} className="text-white/80 text-sm flex gap-2">
                      <span className="text-gold flex-shrink-0">→</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Credentials ──────────────────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 fade-up-element">Track Record</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 fade-up-element delay-100" style={{ letterSpacing: '-0.03em' }}>
              A track record of doing the work.
            </h2>
            <p className="text-slate mb-10 leading-relaxed fade-up-element delay-200">
              Not inflated numbers or vague claims — just an honest account of what we&apos;ve built and who we&apos;ve done it for.
            </p>
            <ul className="flex flex-col gap-4 mb-12">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-4 p-5 border border-navy/10 bg-parchment fade-up-element" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-mono text-gold text-xs mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-slate text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <div className="fade-up-element">
              <Button variant="primary" href="/contact" size="lg">Let&apos;s work together</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <Section theme="navy" gridMotif>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 fade-up-element" style={{ letterSpacing: '-0.03em' }}>
            Ready to work together?
          </h2>
          <p className="text-midgrey mb-8 fade-up-element delay-100">
            Tell me about your project. I&apos;ll get back to you within 24 hours.
          </p>
          <div className="fade-up-element delay-200">
            <Button variant="primary" href="/contact" size="lg">Get a Free Quote</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
