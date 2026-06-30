import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  theme?: 'navy' | 'parchment' | 'white';
  href?: string;
  accentLabel?: string;
  className?: string;
}

export function Card({
  title,
  description,
  theme = 'white',
  href,
  accentLabel,
  className = '',
}: CardProps) {
  const themeStyles = {
    navy: 'bg-navy text-white border border-white/10',
    parchment: 'bg-parchment text-navy border border-navy/10',
    white: 'bg-white text-navy border border-slate/10',
  };

  const inner = (
    <div
      className={`rounded-none p-8 lg:p-10 flex flex-col gap-4 h-full group ${themeStyles[theme]} ${className}`}
      style={{
        boxShadow:
          theme === 'navy'
            ? '0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)'
            : '0 4px 24px rgba(27,42,74,0.08), 0 1px 4px rgba(27,42,74,0.04)',
      }}
    >
      {accentLabel && (
        <span className="eyebrow">{accentLabel}</span>
      )}
      <h3
        className={`font-bold text-xl leading-snug ${theme === 'navy' ? 'text-white' : 'text-navy'}`}
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h3>
      <p className={`leading-relaxed ${theme === 'navy' ? 'text-midgrey' : 'text-slate'}`}>
        {description}
      </p>
      {href && (
        <div className="mt-auto pt-4">
          <span
            className={`font-mono text-xs uppercase tracking-widest ${theme === 'navy' ? 'text-gold' : 'text-gold'} group-hover:text-goldlight transition-opacity`}
          >
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
        {inner}
      </Link>
    );
  }

  return inner;
}
