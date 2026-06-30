'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-[padding,box-shadow] duration-300 ease-out ${
          scrolled
            ? 'py-3 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'py-5'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            aria-label="Roerick Studio — Home"
          >
            <Logo variant="light" size={36} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-sans text-sm tracking-wide transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-navy ${
                    pathname === link.href
                      ? 'text-gold font-medium'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button variant="primary" href="/contact" size="sm">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-px bg-white transition-transform duration-200 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-transform duration-200 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-deepink/80"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-navy border-b border-white/10 pt-20 pb-8 px-6 transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-lg font-sans tracking-wide border-b border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    pathname === link.href ? 'text-gold font-medium' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button variant="primary" href="/contact" size="md" fullWidth>
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
