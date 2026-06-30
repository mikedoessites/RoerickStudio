import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roerickstudio.com'),
  title: {
    default: 'Roerick Studio — Web Design & Brand Presence',
    template: '%s | Roerick Studio',
  },
  description:
    'Roerick Studio builds custom websites and brand presence for businesses that want to grow. From digital to physical — screens to storefronts.',
  openGraph: {
    siteName: 'Roerick Studio',
    type: 'website',
    locale: 'en_US',
    url: 'https://roerickstudio.com',
    title: 'Roerick Studio — Web Design & Brand Presence',
    description:
      'Custom websites and brand presence for businesses that want to grow. We design for screens AND storefronts.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roerick Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roerick Studio — Web Design & Brand Presence',
    description:
      'Custom websites and brand presence for businesses that want to grow.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
