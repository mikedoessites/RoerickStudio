import React from 'react';
import { Button } from './Button';

interface PricingCardProps {
  tier: string;
  price: string;
  badge?: string;
  features: string[];
  featured?: boolean;
  cta?: string;
  ctaHref?: string;
}

export function PricingCard({
  tier,
  price,
  badge,
  features,
  featured = false,
  cta = 'Get Started',
  ctaHref = '/contact',
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 lg:p-10 h-full ${
        featured
          ? 'bg-navy border-2 border-gold text-white scale-[1.02] lg:scale-105 z-10'
          : 'bg-white border border-slate/15 text-navy'
      }`}
      style={{
        boxShadow: featured
          ? '0 8px 40px rgba(201,168,76,0.2), 0 2px 8px rgba(0,0,0,0.3)'
          : '0 4px 24px rgba(27,42,74,0.08)',
      }}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-deepink font-mono text-xs font-bold px-4 py-1.5 uppercase tracking-widest whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <p className={`eyebrow mb-2 ${featured ? 'text-gold' : 'text-gold'}`}>{tier}</p>
        <p
          className={`font-bold leading-tight ${featured ? 'text-white' : 'text-navy'}`}
          style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
        >
          {price}
        </p>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="0.5" y="0.5" width="13" height="13" stroke="#C9A84C" strokeWidth="0.75" />
                <path d="M3 7l3 3 5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </span>
            <span className={`text-sm leading-relaxed ${featured ? 'text-midgrey' : 'text-slate'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? 'primary' : 'secondary'}
        href={ctaHref}
        size="md"
        fullWidth
      >
        {cta}
      </Button>
    </div>
  );
}
