import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantClasses = {
  primary:
    'bg-gold text-deepink font-bold hover:bg-goldlight active:bg-golddark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
  secondary:
    'border border-navy text-navy hover:bg-navy hover:text-white active:bg-navy/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  ghost:
    'text-white hover:text-gold active:text-golddark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy underline-offset-4 hover:underline',
  navy:
    'bg-navy text-white font-bold hover:bg-navy/80 active:bg-deepink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-gold',
};

export function Button({
  variant,
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-sans font-medium tracking-wide transition-transform transition-opacity duration-150 ease-out ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
