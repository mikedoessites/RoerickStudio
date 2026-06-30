import React from 'react';

interface LogoProps {
  variant: 'light' | 'dark';
  size?: number;
  showWordmark?: boolean;
}

export function Logo({ variant, size = 48, showWordmark = true }: LogoProps) {
  const rFill = variant === 'light' ? '#FFFFFF' : '#1B2A4A';
  const wordmarkColor = variant === 'light' ? '#FFFFFF' : '#1B2A4A';

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect x="1" y="1" width="46" height="46" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <line x1="1" y1="17" x2="47" y2="17" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
        <line x1="1" y1="31" x2="47" y2="31" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
        <line x1="17" y1="1" x2="17" y2="47" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
        <line x1="31" y1="1" x2="31" y2="47" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
        <rect x="15" y="12" width="3.5" height="24" fill={rFill} />
        <path
          d="M18.5 12 H26 Q32 12 32 19 Q32 26 26 26 H18.5"
          fill="none"
          stroke={rFill}
          strokeWidth="3.5"
        />
        <line
          x1="25"
          y1="26"
          x2="33"
          y2="36"
          stroke="#C9A84C"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
      </svg>
      {showWordmark && (
        <span
          className="font-sans font-bold tracking-widest uppercase select-none"
          style={{
            color: wordmarkColor,
            fontSize: `${Math.round(size * 0.27)}px`,
            letterSpacing: '0.18em',
            lineHeight: 1,
          }}
        >
          ROERICK STUDIO
        </span>
      )}
    </div>
  );
}
