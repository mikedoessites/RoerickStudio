import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web design, development, and brand presence services from Roerick Studio. Custom websites starting at $3,500. Signage and physical branding for multi-location businesses.',
  openGraph: {
    title: 'Services | Roerick Studio',
    description:
      'Custom websites and signage programs for businesses that want to grow.',
  },
  twitter: {
    title: 'Services | Roerick Studio',
    description: 'Custom websites and signage programs for businesses that want to grow.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
