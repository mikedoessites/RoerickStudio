'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  businessName: '',
  need: '',
  budget: '',
  timeline: '',
  message: '',
};

const inputClass =
  'w-full bg-white border border-navy/20 px-4 py-3 text-navy placeholder-midgrey text-sm font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-opacity';

const labelClass = 'block font-mono text-xs uppercase tracking-widest text-midgrey mb-2';

export default function ContactPage() {
  useScrollAnimation();

  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ─── Header ──────────────────────────────────────── */}
      <section className="grid-motif-bg pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 fade-up-element">Contact</p>
          <h1
            className="text-display text-white mb-6 fade-up-element delay-100"
            style={{ maxWidth: '18ch' }}
          >
            Let&apos;s Talk About Your Project
          </h1>
          <p
            className="text-midgrey leading-relaxed fade-up-element delay-200"
            style={{ fontSize: '17px', maxWidth: '60ch' }}
          >
            Fill out the form below and I&apos;ll get back to you within 24 hours. No pressure, no
            sales pitch — just a real conversation about what you need.
          </p>
        </div>
      </section>

      {/* ─── Form Section ─────────────────────────────────── */}
      <Section theme="parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {success ? (
                <div className="bg-navy p-10 text-center fade-up-element">
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border border-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12l5 5L19 7"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-bold text-white mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Message received.
                  </h2>
                  <p className="text-midgrey">
                    Thanks! I&apos;ve got your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6 fade-up-element"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessName" className={labelClass}>
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your business or organization"
                      className={inputClass}
                      autoComplete="organization"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="need" className={labelClass}>
                        What do you need? <span className="text-gold">*</span>
                      </label>
                      <select
                        id="need"
                        name="need"
                        required
                        value={form.need}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="web-design">Web Design</option>
                        <option value="brand-presence">Brand Presence (Signage)</option>
                        <option value="both">Both</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000–$10,000</option>
                        <option value="10k-25k">$10,000–$25,000</option>
                        <option value="25k-plus">$25,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelClass}>
                      Ideal Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={form.timeline}
                      onChange={handleChange}
                      placeholder='e.g. "Q1 2025", "ASAP", "Flexible"'
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell me about your project <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you trying to accomplish? What's the business problem you're solving? Any details you can share help me respond more usefully."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {error && (
                    <div className="p-4 border border-red-400/40 bg-red-50 text-red-700 text-sm font-mono">
                      {error}
                    </div>
                  )}

                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={loading}
                      fullWidth
                    >
                      {loading ? 'Sending…' : 'Send Inquiry'}
                    </Button>
                    <p className="text-midgrey text-xs font-mono mt-3 text-center">
                      I respond to every inquiry within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8 fade-up-element delay-200">
              <div>
                <p className="eyebrow mb-4">Direct Contact</p>
                <a
                  href="mailto:michael@roerickstudio.com"
                  className="text-navy font-medium hover:text-gold transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold text-sm"
                >
                  michael@roerickstudio.com
                </a>
              </div>

              <div className="border-t border-navy/15 pt-8">
                <p className="eyebrow mb-4">What happens next</p>
                <ol className="flex flex-col gap-4" role="list">
                  {[
                    'I read your inquiry and respond within 24 hours.',
                    "We schedule a 30-minute call to talk through your project.",
                    "You get a clear proposal — scope, timeline, price.",
                    "We start when you're ready.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <span className="font-mono text-gold text-xs mt-0.5 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-navy/15 pt-8">
                <p className="eyebrow mb-4">Good fit for</p>
                <ul className="flex flex-col gap-2 text-sm text-slate">
                  {[
                    'Local businesses ready to compete online',
                    'Multi-location brands needing consistency',
                    'Startups building their first real site',
                    'Businesses with both digital and physical needs',
                    'Anyone who wants to work directly with the builder',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
