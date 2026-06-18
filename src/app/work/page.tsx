'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { Button } from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const webCaseStudies = [
  {
    title: 'Fox Mechanical Air Services',
    category: 'Web Design & Development',
    image: 'fox-mechanical',
    summary: 'Custom single-page site for a 30-year family-owned HVAC company in Arlington, TX. Fast, honest positioning with a strong emergency-call CTA hierarchy built for mobile-first DFW homeowners.',
    href: '/work',
    problem: 'No web presence in a competitive local market — losing service calls and free estimate leads to competitors with polished sites.',
    result: 'Deployed to Vercel in under 2 weeks. Built trust signals, 24/7 emergency CTA placement, sticky call buttons, and a contact form — ready for the Texas summer rush.',
    thumbnailBg: 'linear-gradient(135deg, #041E42 0%, #071f44 60%, #0d2a5c 100%)',
    thumbnailLabel: 'Fox Mechanical Air Services — HVAC · Arlington, TX',
  },
  {
    title: 'Faithful Flavas',
    category: 'Web Design + Shopify Theme',
    image: 'faithful-flavas',
    summary: 'Heritage-driven food & wellness brand from DFW. Custom HTML preview site plus a complete Shopify Online Store 2.0 theme — warm, soulful, and built entirely from scratch to match a deeply intentional brand.',
    href: '/work',
    problem: 'Needed a complete design layer rebuild and a client-facing preview for stakeholder review — without touching live products, checkout, or payments.',
    result: '33-file Shopify OS 2.0 theme (Liquid + JSON + CSS), full brand guidelines with design tokens (CSS variables + JSON), and a standalone HTML preview site. Delivered as a complete handoff package.',
    thumbnailBg: 'linear-gradient(135deg, #2B1D1A 0%, #3d2820 60%, #4a3228 100%)',
    thumbnailLabel: 'Faithful Flavas — Food & Wellness · DFW, TX',
  },
  {
    title: 'More Projects Coming',
    category: 'Web Design & Development',
    image: 'coming-soon',
    summary: 'Additional case studies are being documented. Get in touch to see specific examples relevant to your industry or project type.',
    href: '/contact',
    problem: 'Need to see more examples?',
    result: 'I\'ll walk you through relevant projects on a discovery call — no pressure, just a real conversation.',
    thumbnailBg: 'linear-gradient(135deg, #1B2A4A 0%, #253d6e 100%)',
  },
];

const signageCaseStudies = [
  {
    title: 'Multi-Location Storefront Program',
    category: 'Storefront Signage',
    image: 'signage-project-1',
    summary: 'Coordinated exterior signage for a regional brand across multiple DFW locations — from design through fabrication, permitting, and installation.',
    href: '/contact',
    problem: 'Brand consistency was breaking down across locations as the company scaled.',
    result: 'Unified signage system deployed on-spec and on schedule. Full documentation for future location rollouts.',
    thumbnailBg: 'linear-gradient(135deg, #2a1a0e 0%, #3d2510 100%)',
    thumbnailLabel: 'Multi-Location Storefront — DFW Region',
  },
  {
    title: 'National Brand Rollout',
    category: 'Multi-Location Brand Program',
    image: 'signage-project-2',
    summary: 'Project management for a nationwide signage program spanning dozens of locations across the US. Coordinated vendors, timelines, and quality control at scale.',
    href: '/contact',
    problem: 'Complex multi-state rollout with tight grand opening deadlines and inconsistent local vendor quality.',
    result: 'All locations delivered on-spec. Standardized vendor briefing process developed for ongoing rollouts.',
    thumbnailBg: 'linear-gradient(135deg, #1a2a1a 0%, #253825 100%)',
    thumbnailLabel: 'National Brand Rollout — Multiple States',
  },
  {
    title: 'Interior Brand Environment',
    category: 'Interior Signage & Branding',
    image: 'signage-project-3',
    summary: 'Interior signage, culture walls, and ADA-compliant wayfinding for a corporate office environment. Design through installation, coordinated with GC and ownership.',
    href: '/contact',
    problem: 'New office space had no brand identity — generic finishes with no visual connection to the company culture.',
    result: 'Complete interior brand environment installed on opening day. ADA compliant throughout.',
    thumbnailBg: 'linear-gradient(135deg, #1a1a2a 0%, #252538 100%)',
    thumbnailLabel: 'Interior Brand Environment — Corporate Office',
  },
];

export default function WorkPage() {
  useScrollAnimation();

  return (
    <>
      {/* ─── Page Header ─────────────────────────────────── */}
      <section className="grid-motif-bg pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 fade-up-element">Portfolio</p>
          <h1
            className="text-display text-white mb-6 fade-up-element delay-100"
            style={{ maxWidth: '18ch' }}
          >
            Our Work
          </h1>
          <p
            className="text-midgrey leading-relaxed fade-up-element delay-200"
            style={{ fontSize: '17px', maxWidth: '55ch' }}
          >
            Every project is a business problem we solve with design and technology. Here&apos;s a
            selection of what we&apos;ve built.
          </p>
        </div>
      </section>

      {/* ─── Web Design Work ─────────────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">Digital</p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-navy"
              style={{ letterSpacing: '-0.03em' }}
            >
              Web Design &amp; Development
            </h2>
            <p className="text-slate mt-4" style={{ maxWidth: '55ch' }}>
              Custom websites designed and built from scratch. Each one solving a real business
              problem — not just looking good.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webCaseStudies.map((study, i) => (
              <div
                key={i}
                className="fade-up-element"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Brand & Signage Work ─────────────────────────── */}
      <Section theme="navy" gridMotif>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">Physical</p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Brand &amp; Signage Work
            </h2>
            <p className="text-midgrey leading-relaxed" style={{ maxWidth: '65ch', fontSize: '16px' }}>
              Before building websites, we built brands you could see from the street. Multi-location
              programs, nationwide rollouts, international installs — from a single storefront to
              hundreds of locations, we&apos;ve managed it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {signageCaseStudies.map((study, i) => (
              <div
                key={i}
                className="fade-up-element"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>

          <div className="border border-gold/30 bg-gold/5 p-8 mb-10 fade-up-element">
            <p className="text-white/90 leading-relaxed" style={{ maxWidth: '70ch' }}>
              Our signage experience spans local businesses, regional chains, and national brands —
              with installations across the United States and internationally. The same project
              management discipline that keeps a 50-location rollout on schedule is what keeps your
              website project on time and on budget.
            </p>
          </div>

          <div className="fade-up-element">
            <p className="text-midgrey text-sm mb-4">Need your brand to look this good online too?</p>
            <Button variant="primary" href="/contact" size="md">
              Let&apos;s talk about your project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
