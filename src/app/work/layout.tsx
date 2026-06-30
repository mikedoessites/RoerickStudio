import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Portfolio of web design, development, and brand presence projects from Roerick Studio. See how we solve real business problems with design and technology.',
  openGraph: {
    title: 'Work | Roerick Studio',
    description: 'Portfolio of web and brand presence projects. Real business problems solved with design and technology.',
  },
  twitter: {
    title: 'Work | Roerick Studio',
    description: 'Portfolio of web and brand presence projects.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
