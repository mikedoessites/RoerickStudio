import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get a free quote from Roerick Studio. Let's talk about your web design or brand presence project. Response within 24 hours.",
  openGraph: {
    title: "Let's Talk | Roerick Studio",
    description: "Get a free quote. Tell us about your project and we'll respond within 24 hours.",
  },
  twitter: {
    title: "Let's Talk | Roerick Studio",
    description: "Get a free quote. Response within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
