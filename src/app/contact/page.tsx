import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle, ArrowUpRight, ArrowRight, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/utils/metadata';
import { siteConfig, whatsappUrl, mailtoUrl } from '@/lib/data/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with CODEVERSE — email, WhatsApp, or start a project enquiry.',
  path: '/contact',
});

export default function ContactPage() {
  const hasWhatsApp = !!siteConfig.contact.whatsapp;
  const hasEmail = !!siteConfig.contact.email;

  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="contact-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Get in Touch</p>
          <h1 id="contact-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            Let&apos;s start a{' '}
            <em className="not-italic gradient-text-violet">conversation.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Whether you have a project in mind, a question about our services, or just want to
            understand whether CODEVERSE might be the right fit — we&apos;re straightforward to reach.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section aria-label="Contact options" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {/* Project enquiry */}
            <Link
              href="/start-a-project"
              className="group flex flex-col gap-4 p-6 rounded-2xl border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/5 hover:bg-[var(--color-violet)]/10 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(139,92,246,0.2)' }}
                aria-hidden="true"
              >
                <ArrowRight size={18} className="text-[var(--color-violet-light)]" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-violet-light)] transition-colors">
                  Start a Project
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Use our structured project enquiry form to tell us about your requirements in detail.
                </p>
              </div>
            </Link>

            {/* Email */}
            {hasEmail ? (
              <a
                href={mailtoUrl(siteConfig.contact.email, 'Enquiry from CODEVERSE website')}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(6,182,212,0.15)' }}
                  aria-hidden="true"
                >
                  <Mail size={18} className="text-[var(--color-cyan)]" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-cyan)] transition-colors">
                    Email
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>
            ) : (
              <a
                href={mailtoUrl('hello@codeverse.digital', 'Enquiry from CODEVERSE website')}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(6,182,212,0.15)' }}
                  aria-hidden="true"
                >
                  <Mail size={18} className="text-[var(--color-cyan)]" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-cyan)] transition-colors">
                    Email
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    hello@codeverse.digital
                  </p>
                </div>
              </a>
            )}

            {/* WhatsApp or Studio Response Channel */}
            {hasWhatsApp ? (
              <a
                href={whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.15)' }}
                  aria-hidden="true"
                >
                  <MessageCircle size={18} className="text-[var(--color-emerald)]" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-emerald)] transition-colors flex items-center gap-1.5">
                    WhatsApp
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Send us a message directly on WhatsApp for quick technical inquiries.
                  </p>
                </div>
              </a>
            ) : (
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.15)' }}
                  aria-hidden="true"
                >
                  <Clock size={18} className="text-[var(--color-emerald)]" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5">
                    Rapid Response
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    We review and reply to all structured project enquiries within 1–2 business days.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="max-w-2xl">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              For detailed project enquiries, the{' '}
              <Link href="/start-a-project" className="text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors">
                project enquiry form
              </Link>{' '}
              gives us the context we need to respond usefully. For general questions, email or WhatsApp works well.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
