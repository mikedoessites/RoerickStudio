import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
  placeholder?: boolean;
}

export function TestimonialCard({
  quote,
  name,
  company,
  role,
  placeholder = false,
}: TestimonialCardProps) {
  return (
    <div
      className="relative flex flex-col gap-6 p-8 lg:p-10 bg-white/5 border border-white/10"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
    >
      {placeholder && (
        <span className="caption text-gold/60 mb-0">[PLACEHOLDER — replace with real testimonial]</span>
      )}

      <div aria-hidden="true">
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <path
            d="M0 18V10.5C0 4.5 3.6 1.2 10.8 0L11.4 1.5C8.4 2.1 6.6 3.3 6 5.1C5.4 6.9 5.4 8.7 6 10.5H10.8V18H0ZM13.2 18V10.5C13.2 4.5 16.8 1.2 24 0L24.6 1.5C21.6 2.1 19.8 3.3 19.2 5.1C18.6 6.9 18.6 8.7 19.2 10.5H24V18H13.2Z"
            fill="#C9A84C"
            opacity="0.4"
          />
        </svg>
      </div>

      <p className="text-white/90 leading-relaxed italic text-base">&ldquo;{quote}&rdquo;</p>

      <div className="mt-auto flex flex-col gap-1">
        <p className="font-bold text-white text-sm">{name}</p>
        <p className="text-midgrey text-xs font-mono">
          {role} · {company}
        </p>
      </div>
    </div>
  );
}
