import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Roerick Studio and founder Michael Roerick. Built on a background in signage and physical brand programs — bringing that same precision to web design.',
  openGraph: {
    title: 'About | Roerick Studio',
    description: 'Built by someone who\'s been there. Signage background meets web design discipline.',
  },
  twitter: {
    title: 'About | Roerick Studio',
    description: 'Built by someone who\'s been there. Signage background meets web design discipline.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
