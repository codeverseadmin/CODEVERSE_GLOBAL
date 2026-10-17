import Link from 'next/link';
import { Monitor, ShoppingBag, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const SERVICES = [
  {
    icon: Monitor,
    title: 'Websites & Digital Experiences',
    description:
      'We build websites that communicate clearly, perform reliably, and create a lasting impression — from business sites and landing pages to complete digital redesigns.',
    href: '/services/web-development',
    accent: 'var(--color-violet)',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce & Digital Commerce',
    description:
      'Online stores and shopping experiences built to convert — product discovery, storefront design, checkout flows, and relevant platform integrations.',
    href: '/services/ecommerce',
    accent: 'var(--color-cyan)',
  },
  {
    icon: Code2,
    title: 'Custom Software & Business Systems',
    description:
      'Dashboards, portals, booking systems, and bespoke web applications for businesses that need software built to their specific operational requirements.',
    href: '/services/custom-software',
    accent: 'var(--color-emerald)',
  },
  {
    icon: Sparkles,
    title: 'AI & Intelligent Solutions',
    description:
      'Practical AI integrations and workflow automation that add genuine value — whether that is an intelligent feature in your product or a more efficient internal process.',
    href: '/services/ai-solutions',
    accent: 'var(--color-violet)',
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="section-padding bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="What We Do"
            title="Services built for"
            titleItalic="real outcomes"
            id="services-heading"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 shrink-0"
          >
            All services
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map(({ icon: Icon, title, description, href, accent }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)` }}
                aria-hidden="true"
              >
                <Icon size={20} style={{ color: accent }} />
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto"
                style={{ color: accent }}
                aria-hidden="true"
              >
                Learn more
                <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>

        {/* Maintenance callout */}
        <div className="mt-5 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Ongoing Development &amp; Support</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Reliable maintenance and continued development for businesses that need a trusted long-term partner.
            </p>
          </div>
          <Link
            href="/services/maintenance"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 shrink-0"
          >
            Learn more
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
