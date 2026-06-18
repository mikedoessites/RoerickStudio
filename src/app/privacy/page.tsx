import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Roerick Studio LLC.',
};

const sections = [
  {
    title: 'Information We Collect',
    content:
      '[PLACEHOLDER — List the types of data collected: contact form submissions (name, email, business name, project details), analytics data (via Google Analytics or similar), cookies. Specify what is collected automatically vs. provided voluntarily.]',
  },
  {
    title: 'How We Use Your Information',
    content:
      '[PLACEHOLDER — Explain the purposes: responding to inquiries, delivering contracted services, improving the website. State clearly that you do not sell personal data to third parties.]',
  },
  {
    title: 'Cookies',
    content:
      '[PLACEHOLDER — Describe cookies used: session cookies, analytics cookies (Google Analytics), any third-party embed cookies. Note whether users can opt out and how (browser settings, cookie banner if applicable).]',
  },
  {
    title: 'Third-Party Services',
    content:
      '[PLACEHOLDER — List any third-party services that may process user data: Google Analytics, hosting provider (Vercel), email service provider, CRM. Link to their privacy policies where possible.]',
  },
  {
    title: 'Data Retention',
    content:
      '[PLACEHOLDER — Describe how long you retain contact form data and other personal information, and the criteria used to determine retention periods.]',
  },
  {
    title: 'Your Rights',
    content:
      '[PLACEHOLDER — Describe user rights based on applicable law: right to access, correct, or delete personal data. Include how to make a request (email address). If serving EU/UK users, address GDPR rights.]',
  },
  {
    title: 'Security',
    content:
      '[PLACEHOLDER — Briefly describe the security measures taken to protect personal data. Note that no method is 100% secure and provide appropriate disclaimers.]',
  },
  {
    title: 'Contact',
    content:
      '[PLACEHOLDER — Provide contact details for privacy-related questions: michael@roerickstudio.com or a designated privacy contact.]',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="grid-motif-bg pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Legal</p>
          <h1
            className="text-display text-white mb-4"
            style={{ maxWidth: '18ch' }}
          >
            Privacy Policy
          </h1>
          <p className="text-midgrey text-sm font-mono">Last updated: January 1, 2024</p>
        </div>
      </section>

      <Section theme="white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="p-6 border-2 border-gold/40 bg-gold/5 mb-12">
            <p className="font-bold text-navy mb-2">Important Notice</p>
            <p className="text-slate text-sm leading-relaxed">
              <strong>[PLACEHOLDER — Replace with actual legal copy reviewed by your attorney before publishing.]</strong>{' '}
              The sections below are structural placeholders only. Do not publish this page until
              each section has been written and reviewed by a licensed attorney.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="font-bold text-navy mb-4"
                  style={{ fontSize: '20px', letterSpacing: '-0.02em' }}
                >
                  {section.title}
                </h2>
                <p className="text-slate leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-navy/10 mt-16 pt-8">
            <p className="text-midgrey text-sm">
              Privacy questions? Contact{' '}
              <a
                href="mailto:michael@roerickstudio.com"
                className="text-gold hover:text-goldlight underline underline-offset-2"
              >
                michael@roerickstudio.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
