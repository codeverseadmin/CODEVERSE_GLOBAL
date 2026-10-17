'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
  referral: string;
  consent: boolean;
  _gotcha?: string;
}

interface FormErrors {
  [key: string]: string;
}

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service area' },
  { value: 'web-development', label: 'Website Design & Development' },
  { value: 'ecommerce', label: 'E-commerce & Digital Commerce' },
  { value: 'custom-software', label: 'Custom Software & Web Applications' },
  { value: 'ai-solutions', label: 'AI & Intelligent Solutions' },
  { value: 'maintenance', label: 'Ongoing Development & Support' },
  { value: 'unsure', label: 'Not sure yet' },
];

const BUDGET_OPTIONS = [
  { value: '', label: 'Select a range' },
  { value: 'discuss', label: 'I would like to discuss' },
  { value: 'under-1k', label: 'Under £1,000' },
  { value: '1k-3k', label: '£1,000 – £3,000' },
  { value: '3k-7k', label: '£3,000 – £7,000' },
  { value: '7k-15k', label: '£7,000 – £15,000' },
  { value: '15k-plus', label: '£15,000+' },
];

const TIMELINE_OPTIONS = [
  { value: '', label: 'Select a timeframe' },
  { value: 'flexible', label: 'Flexible' },
  { value: 'under-1m', label: 'Within 1 month' },
  { value: '1-3m', label: '1–3 months' },
  { value: '3-6m', label: '3–6 months' },
  { value: '6m-plus', label: '6+ months' },
];

const initialState: FormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  description: '',
  budget: '',
  timeline: '',
  referral: '',
  consent: false,
  _gotcha: '',
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.service) errors.service = 'Please select a service area.';
  if (!data.description.trim()) errors.description = 'Please describe your project.';
  if (data.description.trim().length < 20) errors.description = 'Please provide a bit more detail (at least 20 characters).';
  if (!data.consent) errors.consent = 'Please confirm you have read the privacy notice.';
  return errors;
}

const labelClass = 'block text-sm font-medium text-[var(--color-text-primary)] mb-1.5';
const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-violet)] transition-colors duration-150';
const errorClass = 'mt-1.5 flex items-center gap-1.5 text-xs text-red-400';

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(initialState);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.message || 'Something went wrong. Please try again or contact us directly.');
        setStatus('error');
      }
    } catch {
      setServerError('Unable to send your message. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle2 size={40} className="text-[var(--color-emerald)]" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Enquiry received
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-md">
          Thank you for reaching out. We&apos;ll review your project details and respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project enquiry form"
      className="flex flex-col gap-6"
    >
      {serverError && (
        <div role="alert" className="flex items-start gap-3 p-4 rounded-lg bg-red-950/30 border border-red-800/40">
          <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-300">{serverError}</p>
        </div>
      )}

      {/* Honeypot field — hidden from normal interaction and screen readers, traps automated spam bots */}
      <div
        className="opacity-0 absolute -left-[9999px] h-0 w-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        tabIndex={-1}
      >
        <label htmlFor="_gotcha">Leave this field blank</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData._gotcha || ''}
          onChange={handleChange}
        />
      </div>

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span aria-label="required" className="text-[var(--color-violet-light)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
            style={{ borderColor: errors.name ? 'rgb(248 113 113)' : '' }}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorClass}>
              <AlertCircle size={12} aria-hidden="true" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Business email <span aria-label="required" className="text-[var(--color-violet-light)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
            style={{ borderColor: errors.email ? 'rgb(248 113 113)' : '' }}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errorClass}>
              <AlertCircle size={12} aria-hidden="true" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>
          Company or business name <span className="text-[var(--color-text-muted)] font-normal">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service area <span aria-label="required" className="text-[var(--color-violet-light)]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          aria-required="true"
          aria-describedby={errors.service ? 'service-error' : undefined}
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: errors.service ? 'rgb(248 113 113)' : '' }}
        >
          {SERVICE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className={errorClass}>
            <AlertCircle size={12} aria-hidden="true" /> {errors.service}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>
          Project description <span aria-label="required" className="text-[var(--color-violet-light)]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          aria-required="true"
          aria-describedby={errors.description ? 'description-error' : 'description-hint'}
          value={formData.description}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us what you're working on, what you need, and any relevant context..."
          className={inputClass}
          style={{ borderColor: errors.description ? 'rgb(248 113 113)' : '', resize: 'vertical' }}
        />
        {errors.description ? (
          <p id="description-error" role="alert" className={errorClass}>
            <AlertCircle size={12} aria-hidden="true" /> {errors.description}
          </p>
        ) : (
          <p id="description-hint" className="mt-1.5 text-xs text-[var(--color-text-muted)]">
            Include objectives, any technical requirements, and what a successful outcome looks like.
          </p>
        )}
      </div>

      {/* Row: Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className={labelClass}>Approximate budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            {BUDGET_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>Desired timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClass}
          >
            {TIMELINE_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" className={labelClass}>
          How did you hear about us? <span className="text-[var(--color-text-muted)] font-normal">(optional)</span>
        </label>
        <input
          id="referral"
          name="referral"
          type="text"
          value={formData.referral}
          onChange={handleChange}
          placeholder="e.g. Google, a referral, social media..."
          className={inputClass}
        />
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 accent-[var(--color-violet)] shrink-0"
          />
          <label htmlFor="consent" className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            I have read the{' '}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] underline transition-colors duration-150"
            >
              privacy notice
            </a>{' '}
            and understand how my information will be used.{' '}
            <span aria-label="required" className="text-[var(--color-violet-light)]">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className={`${errorClass} mt-2`}>
            <AlertCircle size={12} aria-hidden="true" /> {errors.consent}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-disabled={status === 'submitting'}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] disabled:opacity-60 disabled:pointer-events-none transition-colors duration-200 shadow-lg shadow-violet-900/25"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} aria-hidden="true" className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              Send Enquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
