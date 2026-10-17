import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/utils/metadata';
import { siteConfig } from '@/lib/data/site';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'About CODEVERSE — a founder-led digital technology studio combining client services with original product development.',
  path: '/about',
});

const VALUES = [
  {
    title: 'Useful over impressive',
    description: 'We care more about whether something works well for its users than whether it looks good in a portfolio.',
  },
  {
    title: 'Clarity in communication',
    description: 'We explain decisions, document what we build, and keep clients informed throughout the process.',
  },
  {
    title: 'Design and engineering as one discipline',
    description: 'We consider the visual and technical dimensions of a problem at the same time, not in isolation.',
  },
  {
    title: 'Honest scope definition',
    description: 'We define clearly what a project includes, what it excludes, and what decisions remain open.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="about-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">About CODEVERSE</p>
          <h1 id="about-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            A studio built on{' '}
            <em className="not-italic gradient-text-violet">careful work.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            CODEVERSE is a founder-led digital technology studio. We design and develop websites,
            e-commerce experiences, custom web applications, and intelligent software solutions
            for businesses that care about quality.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section aria-labelledby="founder-about-heading" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Studio Insignia / Monogram */}
            <div
              className="aspect-square max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col items-center justify-center gap-4 mx-auto lg:mx-0 p-8 text-center"
              role="img"
              aria-label="CODEVERSE Studio Insignia"
            >
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl shadow-violet-950/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
                aria-hidden="true"
              >
                <span className="text-3xl font-bold tracking-tight text-[var(--color-violet-light)]">CV</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">CODEVERSE</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Founder-Led Digital Studio</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <h2 id="founder-about-heading" className="text-display-md text-[var(--color-text-primary)]">
                The{' '}
                <em className="not-italic gradient-text-violet">Founder</em>
              </h2>

              <div className="flex flex-col gap-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {siteConfig.founder.bio ? (
                  <p>{siteConfig.founder.bio}</p>
                ) : (
                  <>
                    <p>
                      CODEVERSE was founded with the intention of doing things properly — taking
                      the time to understand a brief before proposing a solution, and building things
                      that hold up beyond the initial launch.
                    </p>
                    <p>
                      The studio operates at the intersection of client services and original product
                      development. Client work funds and informs the products. The products deepen the
                      product thinking that benefits client work.
                    </p>
                    <p>
                      Every technology project is architected with obsessive attention to craft,
                      accessibility, modern performance, and business outcomes.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-2 border-t border-[var(--color-border)]">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {siteConfig.founder.name || 'CODEVERSE Technical Leadership'}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                  {siteConfig.founder.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container-xl">
          <div className="mb-12">
            <p className="text-label text-[var(--color-violet-light)] mb-4">How We Work</p>
            <h2 id="values-heading" className="text-display-md text-[var(--color-text-primary)] max-w-lg">
              The principles we hold on every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section aria-labelledby="structure-heading" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Studio Structure</p>
          <h2 id="structure-heading" className="text-display-md text-[var(--color-text-primary)] mb-6">
            Two areas, one identity.
          </h2>
          <div className="flex flex-col gap-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-3">
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">CODEVERSE — Client Services</h3>
              <p>Our primary commercial identity. We work with businesses to design and develop websites, e-commerce solutions, custom software, and intelligent applications.</p>
            </div>
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-3">
              <h3 className="text-base font-semibold text-[var(--color-text-primary)]">CODEVERSE Labs — Original Products</h3>
              <p>A dedicated area for products, experiments, and interactive tools developed under the CODEVERSE identity. Each product is described with its actual development status.</p>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
                View Labs projects
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Work with us" className="section-padding-sm border-t border-[var(--color-border)]">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Want to work with us?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Tell us about your project and we&apos;ll explore how we can help.
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
