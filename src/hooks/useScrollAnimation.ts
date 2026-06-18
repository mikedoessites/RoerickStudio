'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up-element');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: reveal any elements that never triggered (e.g. above fold or bottom of page)
    const fallback = setTimeout(() => {
      document.querySelectorAll('.fade-up-element:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return ref;
}
