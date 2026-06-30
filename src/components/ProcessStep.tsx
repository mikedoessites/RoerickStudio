import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export function ProcessStep({
  step,
  title,
  description,
  className = '',
  theme = 'dark',
}: ProcessStepProps) {
  const titleColor = theme === 'dark' ? 'text-white' : 'text-navy';
  const descColor = theme === 'dark' ? 'text-midgrey' : 'text-slate';

  return (
    <div className={`flex flex-col gap-3 min-w-[200px] ${className}`}>
      <div className="flex items-center gap-3">
        <span
          className="font-mono font-bold text-gold"
          style={{ fontSize: '10px', letterSpacing: '0.15em' }}
          aria-hidden="true"
        >
          {String(step).padStart(2, '0')}
        </span>
        <div className="flex-1 h-px bg-gold/20" />
      </div>
      <h3
        className={`font-bold ${titleColor}`}
        style={{ fontSize: '16px', letterSpacing: '-0.01em' }}
      >
        {title}
      </h3>
      <p className={`${descColor} leading-relaxed`} style={{ fontSize: '14px' }}>
        {description}
      </p>
    </div>
  );
}
