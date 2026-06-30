import React from 'react';

interface SectionProps {
  theme: 'navy' | 'parchment' | 'white' | 'deepink' | 'gold';
  className?: string;
  children: React.ReactNode;
  id?: string;
  gridMotif?: boolean;
}

const themeClasses = {
  navy: 'bg-navy text-white',
  parchment: 'bg-parchment text-navy',
  white: 'bg-white text-navy',
  deepink: 'bg-deepink text-white',
  gold: 'bg-gold text-navy',
};

export function Section({ theme, className = '', children, id, gridMotif }: SectionProps) {
  return (
    <section
      id={id}
      className={`${themeClasses[theme]} ${gridMotif ? 'grid-motif-bg' : ''} py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
