import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Service } from '@/types/service';

interface ServicePageLayoutProps {
  service: Service;
  children?: React.ReactNode;
}

export default function ServicePageLayout({ service, children }: ServicePageLayoutProps) {
  return (
    <div className="pt-24">
      {/* Back */}
      <div className="container-xl pt-6 pb-0">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All services
        </Link>
      </div>

      {/* Header */}
      <section aria-labelledby="service-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">{service.category ?? service.shortTitle}</p>
          <h1 id="service-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            {service.title}
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="service-features-heading" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <h2 id="service-features-heading" className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
            What this includes
          </h2>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet)] shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-[var(--color-text-secondary)]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extra content slot */}
      {children}

      {/* CTA */}
      <section aria-label="Start a project enquiry" className="section-padding-sm border-t border-[var(--color-border)]">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Interested in {service.shortTitle}?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Tell us what you&apos;re working on and we&apos;ll outline the right approach.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200 shrink-0 shadow-lg shadow-violet-900/25"
          >
            Start a Project
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
