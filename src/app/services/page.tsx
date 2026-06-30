'use client';

import React from 'react';
import { Section } from '@/components/Section';
import { PricingCard } from '@/components/PricingCard';
import { Button } from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const pricingTiers = [
  {
    tier: 'Starter',
    price: '$500',
    features: [
      'Single page, fully custom design',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
    ],
    featured: false,
  },
  {
    tier: 'Pro',
    price: '$750–$1,000',
    badge: 'Most Popular',
    features: [
      'Multi-page site',
      'Scroll animations',
      'Reviews section',
      'Services section',
      'Contact form',
      'Full SEO setup',
    ],
    featured: true,
  },
  {
    tier: 'Premium',
    price: '$1,200–$1,500',
    features: [
      'Everything in Pro',
      'Domain purchase & setup',
      'Netlify deployment',
      'Google Analytics setup',
      '30 days post-launch support',
    ],
    featured: false,
  },
];

const brandFeatures = [
  { label: 'Storefront Signage', detail: 'Electrical, painted, and dimensional' },
  { label: 'ADA Compliant Signage', detail: 'Meeting all regulatory requirements' },
  { label: 'Window Graphics & Decals', detail: 'Cut vinyl, printed graphics, perforated film' },
  { label: 'Interior Signage & Values Displays', detail: 'Reception, conference, culture walls' },
  { label: 'Small-Format Print & Marketing Materials', detail: 'Cards, brochures, leave-behinds' },
  { label: 'Full Signage Packages', detail: 'Design through fabrication and installation' },
  { label: 'Multi-Location Project Management', detail: 'Local, nationwide, and international' },
  { label: 'Signage Removal & Disposal', detail: 'Safe, coordinated removal of old signage' },
];

const retainerPlans = [
  {
    name: 'Basic',
    price: '$75/mo',
    features: ['Up to 1 hr edits/mo', 'Uptime monitoring'],
  },
  {
    name: 'Standard',
    price: '$150/mo',
    features: ['Up to 2 hrs edits/mo', 'Monthly analytics report', 'Priority response'],
  },
  {
    name: 'Growth',
    price: '$250/mo',
    features: ['Up to 4 hrs edits/mo', 'SEO updates', 'Google Business Profile management', 'Monthly report'],
  },
];

const addOns = [
  { service: 'Domain purchase & setup', price: '$50 + domain cost (~$12/yr)' },
  { service: 'Google Analytics setup', price: '$75 one-time' },
  { service: 'Google Business Profile setup', price: '$100 one-time' },
  { service: 'Extra revision round', price: '$50/round' },
  { service: 'Rush delivery (under 48hrs)', price: '+$150' },
  { service: 'Additional page added later', price: '$100–$200/page' },
  { service: 'Logo design (basic)', price: '$150–$300' },
];

export default function ServicesPage() {
  useScrollAnimation();

  return (
    <>
      {/* ─── Web Design Hero ──────────────────────────────── */}
      <section className="grid-motif-bg pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 fade-up-element">Services</p>
          <h1 className="text-display text-white mb-6 fade-up-element delay-100" style={{ maxWidth: '18ch' }}>
            Web Design &amp; Development
          </h1>
          <p className="text-midgrey leading-relaxed fade-up-element delay-200" style={{ fontSize: '17px', maxWidth: '60ch' }}>
            Custom websites built from the ground up to convert visitors into customers. No page builders,
            no cookie-cutter templates — every pixel is deliberate and every line of code serves a purpose.
          </p>
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────── */}
      <Section theme="parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 fade-up-element">
            <p className="eyebrow mb-3">Investment</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy" style={{ letterSpacing: '-0.03em' }}>
              Choose your starting point
            </h2>
            <p className="text-slate mt-4" style={{ maxWidth: '55ch' }}>
              Every project is scoped and priced based on your specific goals. These tiers are starting
              frameworks — not rigid boxes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-12">
            {pricingTiers.map((tier, i) => (
              <div key={tier.tier} className="fade-up-element" style={{ transitionDelay: `${i * 100}ms` }}>
                <PricingCard
                  tier={tier.tier}
                  price={tier.price}
                  badge={'badge' in tier ? tier.badge : undefined}
                  features={tier.features}
                  featured={tier.featured}
                  cta={tier.price === 'Custom Pricing' ? "Let's Talk" : 'Get Started'}
                />
              </div>
            ))}
          </div>
          <div className="text-center fade-up-element">
            <p className="text-slate mb-4">Not sure which fits?</p>
            <Button variant="primary" href="/contact" size="md">Let&apos;s talk about your project</Button>
          </div>
        </div>
      </Section>

      {/* ─── Brand Presence ───────────────────────────────── */}
      <Section theme="navy" gridMotif id="brand-presence">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-4">Physical Branding</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.03em', maxWidth: '22ch' }}>
              Brand Presence — Signage &amp; Physical Branding
            </h2>
            <p className="text-midgrey leading-relaxed" style={{ maxWidth: '65ch', fontSize: '16px' }}>
              The capability that sets Roerick Studio apart: we don&apos;t just design for screens. We
              design for every surface your brand appears on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {brandFeatures.map((feature, i) => (
              <div key={feature.label} className="p-6 border border-white/10 bg-white/[0.03] fade-up-element" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-8 h-px bg-gold mb-4" />
                <h3 className="font-bold text-white text-sm mb-1" style={{ letterSpacing: '-0.01em' }}>{feature.label}</h3>
                <p className="text-midgrey text-xs leading-relaxed">{feature.detail}</p>
              </div>
            ))}
          </div>
          <div className="border border-gold/30 bg-gold/5 p-8 lg:p-10 mb-10 fade-up-element">
            <p className="text-white/90 leading-relaxed" style={{ fontSize: '16px', maxWidth: '70ch' }}>
              Managing signage across dozens of locations means delivering on-spec, on-time, every time.
              That same discipline is what you get when we build your website.
            </p>
          </div>
          <div className="fade-up-element">
            <Button variant="primary" href="/contact" size="md">Discuss your signage project</Button>
          </div>
        </div>
      </Section>

      {/* ─── Retainers ────────────────────────────────────── */}
      <Section theme="white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">After Launch</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy" style={{ letterSpacing: '-0.03em' }}>Ongoing Support</h2>
            <p className="text-slate mt-4" style={{ maxWidth: '55ch' }}>
              A great website is never truly finished. Keep it fast, secure, and growing with a monthly plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {retainerPlans.map((plan, i) => (
              <div key={plan.name} className="border border-navy/15 bg-parchment p-8 fade-up-element" style={{ transitionDelay: `${i * 100}ms`, boxShadow: '0 4px 24px rgba(27,42,74,0.06)' }}>
                <p className="eyebrow mb-2">{plan.name}</p>
                <p className="font-bold text-navy mb-6" style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>{plan.price}</p>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate">
                      <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 fade-up-element">
            <Button variant="primary" href="/contact" size="md">Discuss a support plan</Button>
          </div>
        </div>
      </Section>

      {/* ─── À La Carte Add-Ons ───────────────────────────── */}
      <Section theme="navy" gridMotif>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 fade-up-element">
            <p className="eyebrow mb-3">Standalone</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: '-0.03em' }}>Individual Services</h2>
            <p className="text-midgrey mt-4" style={{ maxWidth: '55ch' }}>
              Need just one thing? These are available as standalone services or added to any package.
            </p>
          </div>
          <div className="max-w-2xl fade-up-element delay-100">
            {addOns.map((item, i) => (
              <div
                key={item.service}
                className="flex items-center justify-between gap-6 py-4 border-b border-white/10"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-white/80 text-sm">{item.service}</span>
                <span className="font-mono text-gold text-xs whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 fade-up-element">
            <Button variant="primary" href="/contact" size="md">Get a custom quote</Button>
          </div>
        </div>
      </Section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <Section theme="gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 fade-up-element" style={{ letterSpacing: '-0.03em' }}>
            Ready to get started?
          </h2>
          <p className="text-navy/70 mb-8 fade-up-element delay-100">Free consultation. No pressure. Let&apos;s figure out what you need.</p>
          <div className="fade-up-element delay-200">
            <Button variant="navy" href="/contact" size="lg">Get a Free Quote</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
