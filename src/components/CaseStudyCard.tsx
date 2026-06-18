import React from 'react';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  category: string;
  image: string;
  summary: string;
  href: string;
  problem?: string;
  result?: string;
  thumbnailBg?: string;
  thumbnailLabel?: string;
}

export function CaseStudyCard({
  title,
  category,
  image,
  summary,
  href,
  problem,
  result,
  thumbnailBg,
  thumbnailLabel,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-parchment border border-navy/10 overflow-hidden hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-opacity"
      style={{ boxShadow: '0 4px 24px rgba(27,42,74,0.08)' }}
    >
      <div
        className="relative aspect-[16/9] overflow-hidden"
        style={{ background: thumbnailBg ?? 'linear-gradient(135deg, #1B2A4A 0%, #253d6e 100%)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-8">
          {thumbnailLabel ? (
            <span
              className="font-bold text-white/90 tracking-tight"
              style={{ fontSize: 'clamp(13px, 2vw, 17px)', letterSpacing: '-0.02em', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              {thumbnailLabel}
            </span>
          ) : (
            <span className="font-mono text-xs text-white/30 border border-white/15 px-3 py-1">
              {category}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6 lg:p-8 flex flex-col gap-3">
        <span className="eyebrow">{category}</span>
        <h3
          className="font-bold text-navy leading-snug group-hover:text-gold transition-opacity"
          style={{ fontSize: '18px', letterSpacing: '-0.02em' }}
        >
          {title}
        </h3>
        <p className="text-slate text-sm leading-relaxed">{summary}</p>

        {(problem || result) && (
          <div className="mt-2 flex flex-col gap-2 border-t border-navy/10 pt-4">
            {problem && (
              <div>
                <span className="caption block mb-1">Problem</span>
                <p className="text-slate text-xs leading-relaxed">{problem}</p>
              </div>
            )}
            {result && (
              <div>
                <span className="caption block mb-1">Result</span>
                <p className="text-gold text-xs leading-relaxed font-medium">{result}</p>
              </div>
            )}
          </div>
        )}

        <span className="font-mono text-xs uppercase tracking-widest text-gold mt-2">
          View Case Study →
        </span>
      </div>
    </Link>
  );
}
