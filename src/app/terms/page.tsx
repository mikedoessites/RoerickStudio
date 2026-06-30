import React from 'react';
import type { Metadata } from 'next';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Roerick Studio LLC.',
};

const sections = [
  {
    title: 'Services',
    content:
      '[PLACEHOLDER — Describe the services covered by this agreement, how they are delivered, and what is included/excluded. Include language around project scope, change orders, and client responsibilities.]',
  },
  {
    title: 'Payment',
    content:
      '[PLACEHOLDER — Describe payment terms: deposit requirements (typically 50% upfront), payment schedule, accepted payment methods, late payment consequences, and refund policy.]',
  },
  {
    title: 'Intellectual Property',
    content:
      '[PLACEHOLDER — Clarify ownership of work product: when IP transfers to the client (typically upon final payment), what Roerick Studio retains (the right to display in portfolio), and any third-party assets or licenses included in the deliverables.]',
  },
  {
    title: 'Limitation of Liability',
    content:
      "[PLACEHOLDER — Include standard limitation of liability language: Roerick Studio's total liability is capped at the amount paid for the applicable project; exclusion of consequential, indirect, and incidental damages. Have your attorney review and finalize this section.]",
  },
  {
    title: 'Governing Law',
    content:
      '[PLACEHOLDER — Specify the governing law and jurisdiction for disputes. Example: "This agreement shall be governed by the laws of the State of [State], without regard to conflict of law principles."]',
  },
  {
    title: 'Termination',
    content:
      '[PLACEHOLDER — Describe conditions under which either party may terminate the agreement, what happens to work completed to date, and any kill fees or refund structure upon early termination.]',
  },
  {
    title: 'Warranties & Disclaimers',
    content:
      '[PLACEHOLDER — Include standard disclaimer language: services are provided "as is," no guarantee of specific business outcomes (traffic, revenue, leads), and client responsibility for the accuracy of content provided.]',
  },
  {
    title: 'Entire Agreement',
    content:
      '[PLACEHOLDER — State that this document, along with any signed proposal or statement of work, constitutes the entire agreement between the parties and supersedes all prior discussions.]',
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="grid-motif-bg pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">Legal</p>
          <h1
            className="text-display text-white mb-4"
            style={{ maxWidth: '18ch' }}
          >
            Terms of Service
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
              The sections below are structural placeholders only. Do not publish this page until each
              section has been written and reviewed by a licensed attorney.
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
              Questions about these terms? Contact{' '}
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
