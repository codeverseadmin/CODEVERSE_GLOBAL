import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl, mailtoUrl } from '@/lib/data/site';

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="section-padding border-t border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="radial-glow w-[500px] h-[500px] bg-[var(--color-violet)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      />

      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
          <p className="text-label text-[var(--color-violet-light)]">Let&apos;s Work Together</p>

          <h2
            id="final-cta-heading"
            className="text-display-lg text-[var(--color-text-primary)]"
          >
            Have something{' '}
            <em className="not-italic gradient-text-violet">worth building?</em>
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto">
            Tell us what you&apos;re working on. Let&apos;s explore how CODEVERSE can help
            you move it forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200 shadow-xl shadow-violet-900/30 w-full sm:w-auto justify-center"
            >
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            {siteConfig.contact.whatsapp ? (
              <a
                href={whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Get in Touch
              </Link>
            )}
          </div>

          {siteConfig.contact.email && (
            <p className="text-sm text-[var(--color-text-muted)]">
              Or email us at{' '}
              <a
                href={mailtoUrl(siteConfig.contact.email)}
                className="text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
