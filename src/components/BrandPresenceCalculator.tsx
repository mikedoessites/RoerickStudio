'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type BusinessType = 'hvac' | 'restaurant' | 'retail' | 'professional' | 'dental' | 'church';

interface BusinessConfig {
  label: string;
  monthlyLeads: number;    // avg leads a healthy business gets per month
  avgJobValue: number;     // average revenue per lead/customer
  conversionRate: number;  // lead-to-customer rate
}

const BUSINESS_CONFIGS: Record<BusinessType, BusinessConfig> = {
  hvac:         { label: 'HVAC / Home Services',        monthlyLeads: 80,  avgJobValue: 850,  conversionRate: 0.30 },
  restaurant:   { label: 'Restaurant / Food Brand',     monthlyLeads: 200, avgJobValue: 45,   conversionRate: 0.60 },
  retail:       { label: 'Retail Storefront',           monthlyLeads: 150, avgJobValue: 110,  conversionRate: 0.25 },
  professional: { label: 'Professional Services',       monthlyLeads: 40,  avgJobValue: 2200, conversionRate: 0.20 },
  dental:       { label: 'Dental / Medical Practice',   monthlyLeads: 60,  avgJobValue: 1400, conversionRate: 0.35 },
  church:       { label: 'Church / Nonprofit',          monthlyLeads: 30,  avgJobValue: 0,    conversionRate: 0.40 },
};

interface Gap {
  id: string;
  label: string;
  leadsImpact: number;  // % of monthly leads lost due to this gap
}

const GAPS: Gap[] = [
  { id: 'no_website',       label: 'No website (or a "coming soon" page)',        leadsImpact: 0.35 },
  { id: 'outdated_site',    label: 'Website looks outdated or hasn\'t changed in 2+ years', leadsImpact: 0.20 },
  { id: 'not_mobile',       label: 'Site isn\'t mobile-friendly',                leadsImpact: 0.15 },
  { id: 'slow_site',        label: 'Site loads slowly (5+ seconds)',              leadsImpact: 0.10 },
  { id: 'no_google',        label: 'Not on Google Business / Maps',               leadsImpact: 0.25 },
  { id: 'poor_reviews',     label: 'Few or no online reviews',                   leadsImpact: 0.12 },
  { id: 'no_social',        label: 'Little or no social media presence',         leadsImpact: 0.08 },
  { id: 'bad_signage',      label: 'Outdated or missing storefront signage',      leadsImpact: 0.10 },
  { id: 'no_cta',           label: 'Hard to contact you online (no clear CTA)',   leadsImpact: 0.12 },
];

function calcEstimate(type: BusinessType, gaps: Set<string>) {
  const config = BUSINESS_CONFIGS[type];
  // Sum impact percentages, cap at 85% to avoid implying they have zero leads
  const totalImpact = Math.min(
    GAPS.filter((g) => gaps.has(g.id)).reduce((sum, g) => sum + g.leadsImpact, 0),
    0.85
  );
  const leadsLost = Math.round(config.monthlyLeads * totalImpact);
  const revenueLost =
    config.avgJobValue > 0
      ? Math.round(leadsLost * config.avgJobValue * config.conversionRate)
      : 0;
  return { leadsLost, revenueLost };
}

export default function BrandPresenceCalculator() {
  const router = useRouter();
  const [businessType, setBusinessType] = useState<BusinessType | ''>('');
  const [selectedGaps, setSelectedGaps] = useState<Set<string>>(new Set());

  const hasType = businessType !== '';
  const estimate = hasType ? calcEstimate(businessType as BusinessType, selectedGaps) : null;
  const hasAnyGap = selectedGaps.size > 0;

  function toggleGap(id: string) {
    setSelectedGaps((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleCta() {
    if (!estimate || !businessType) return;
    const params = new URLSearchParams({
      businessType,
      leadsLost: String(estimate.leadsLost),
      revenueLost: String(estimate.revenueLost),
    });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <div className="bg-parchment border border-navy/10 p-8 lg:p-12">
      {/* Step 1 — Business type */}
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Step 1</p>
        <p className="font-sans font-semibold text-navy mb-5" style={{ fontSize: '16px', letterSpacing: '-0.01em' }}>
          What kind of business are you?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {(Object.entries(BUSINESS_CONFIGS) as [BusinessType, BusinessConfig][]).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setBusinessType(key)}
              className={[
                'px-4 py-3 text-left border text-sm font-sans transition-opacity',
                businessType === key
                  ? 'border-gold bg-navy text-white'
                  : 'border-navy/20 bg-white text-navy hover:border-gold/60',
              ].join(' ')}
            >
              {cfg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Gaps checklist */}
      {hasType && (
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Step 2</p>
          <p className="font-sans font-semibold text-navy mb-5" style={{ fontSize: '16px', letterSpacing: '-0.01em' }}>
            Check everything that applies to your business right now.
          </p>
          <div className="flex flex-col gap-3">
            {GAPS.map((gap) => {
              const checked = selectedGaps.has(gap.id);
              return (
                <label
                  key={gap.id}
                  className={[
                    'flex items-start gap-3 p-4 border cursor-pointer transition-opacity select-none',
                    checked ? 'border-gold/60 bg-white' : 'border-navy/15 bg-white hover:border-gold/30',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'mt-0.5 flex-shrink-0 w-4 h-4 border flex items-center justify-center',
                      checked ? 'border-gold bg-gold' : 'border-navy/30 bg-transparent',
                    ].join(' ')}
                  >
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4l3 3 5-6" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleGap(gap.id)}
                  />
                  <span className="text-sm text-navy leading-snug">{gap.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Estimate output */}
      {hasType && hasAnyGap && estimate && (
        <div className="border border-gold/40 bg-navy p-8 mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Your Estimate</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-mono text-xs text-midgrey mb-1 uppercase tracking-widest">Leads lost / month</p>
              <p className="font-sans font-bold text-white" style={{ fontSize: '40px', letterSpacing: '-0.03em', lineHeight: 1 }}>
                ~{estimate.leadsLost}
              </p>
            </div>
            {estimate.revenueLost > 0 && (
              <div>
                <p className="font-mono text-xs text-midgrey mb-1 uppercase tracking-widest">Revenue left on the table</p>
                <p className="font-sans font-bold text-gold" style={{ fontSize: '40px', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  ~${estimate.revenueLost.toLocaleString()}
                </p>
              </div>
            )}
          </div>
          <p className="text-midgrey text-xs leading-relaxed" style={{ maxWidth: '56ch' }}>
            Directional estimate based on industry benchmarks for{' '}
            {BUSINESS_CONFIGS[businessType as BusinessType].label.toLowerCase()} businesses. Actual
            impact varies — but the direction is almost never wrong.
          </p>
        </div>
      )}

      {/* CTA */}
      {hasType && hasAnyGap && estimate && (
        <button
          onClick={handleCta}
          className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-sans font-semibold text-sm tracking-tight hover:bg-goldlight transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Let&apos;s fix this → Get a free quote
        </button>
      )}

      {hasType && !hasAnyGap && (
        <p className="text-midgrey text-sm font-mono">
          Check any gaps above to see your estimate.
        </p>
      )}
    </div>
  );
}
