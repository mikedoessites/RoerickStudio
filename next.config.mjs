/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevent MIME sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer policy
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // HSTS — 2 years, include subdomains, request preload
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Disable unused browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  // CSP:
  // - next/font self-hosts fonts (no external font domains needed)
  // - 'unsafe-inline' required for Next.js inline styles (no nonce used here)
  // - 'unsafe-eval' only needed in dev; blocked in prod
  // - cdn.sanity.io allowed for future image loading via next/image remotePatterns
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",   // Next.js inlines hydration scripts
      "style-src 'self' 'unsafe-inline'",    // Tailwind/Next.js inline styles
      "font-src 'self'",                      // next/font self-hosts — no external font CDN
      "img-src 'self' data: https://cdn.sanity.io",
      "connect-src 'self'",                   // API routes only
      "frame-ancestors 'none'",               // belt-and-suspenders with X-Frame-Options
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
