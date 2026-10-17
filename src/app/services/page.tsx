import Link from 'next/link';
import { Monitor, ShoppingBag, Code2, Sparkles, Wrench, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'CODEVERSE offers website design & development, e-commerce, custom software, AI solutions, and ongoing development support.',
  path: '/services',
});

const SERVICES = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Business websites, corporate presences, landing pages, portfolios, and redesigns built to communicate clearly and perform reliably.',
    href: '/services/web-development',
    accent: 'var(--color-violet)',
    features: ['Business & corporate websites', 'Landing pages', 'Portfolio sites', 'Website redesigns', 'Responsive implementation'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce & Digital Commerce',
    description:
      'Online stores and shopping experiences built to make purchasing straightforward for your customers.',
    href: '/services/ecommerce',
    accent: 'var(--color-cyan)',
    features: ['Online store design', 'Product catalogues', 'Custom storefronts', 'Platform integrations', 'Checkout flows'],
  },
  {
    icon: Code2,
    title: 'Custom Software & Web Applications',
    description:
      'Bespoke dashboards, portals, booking systems, and administrative tools built for specific operational requirements.',
    href: '/services/custom-software',
    accent: 'var(--color-emerald)',
    features: ['Business dashboards', 'Customer portals', 'Booking systems', 'Admin interfaces', 'API integrations'],
  },
  {
    icon: Sparkles,
    title: 'AI & Intelligent Solutions',
    description:
      'Practical AI integrations, workflow automation, and intelligent features that create real value for your product or business.',
    href: '/services/ai-solutions',
    accent: 'var(--color-violet)',
    features: ['AI API integrations', 'AI-powered features', 'Workflow automation', 'Intelligent tools', 'Custom AI applications'],
  },
  {
    icon: Wrench,
    title: 'Ongoing Development & Support',
    description:
      'Reliable, ongoing technical partnership for businesses that need continued development and maintenance beyond initial delivery.',
    href: '/services/maintenance',
    accent: 'var(--color-cyan)',
    features: ['Website maintenance', 'Feature enhancements', 'Performance improvements', 'Technical support', 'Development retainers'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="services-page-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">What We Do</p>
          <h1 id="services-page-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            Services that move your{' '}
            <em className="not-italic gradient-text-violet">business forward.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            We design and develop websites, e-commerce experiences, custom software, and intelligent
            solutions. Every engagement is scoped to your specific requirements — we don&apos;t
            apply the same package to every project.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section aria-label="Service details" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="flex flex-col gap-8">
            {SERVICES.map(({ icon: Icon, title, description, href, accent, features }, i) => (
              <article
                key={href}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-300 group"
              >
                {/* Icon + title */}
                <div className={`lg:col-span-2 flex flex-col gap-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)` }}
                    aria-hidden="true"
                  >
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                    {title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-2"
                    style={{ color: accent }}
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn more
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

                {/* Features */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: accent }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Start a project" className="section-padding-sm border-t border-[var(--color-border)]">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Not sure which service fits?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Tell us what you need to accomplish and we&apos;ll suggest the right approach.
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
