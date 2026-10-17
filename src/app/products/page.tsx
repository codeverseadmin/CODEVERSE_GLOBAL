import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getLabsProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'CODEVERSE Labs',
  description: 'Original products and experiments built by CODEVERSE — interactive tools, digital products, and software built under our own identity.',
  path: '/products',
});

export default function ProductsPage() {
  const labsProjects = getLabsProjects();

  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="labs-page-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">CODEVERSE Labs</p>
          <h1 id="labs-page-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            We don&apos;t just build for others.{' '}
            <em className="not-italic gradient-text-violet">We build what comes next.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            CODEVERSE Labs is the home of our original products, experiments, and interactive tools.
            These are ideas we believe in enough to build ourselves — each at its own stage, each
            displayed with its actual status.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section aria-label="Labs products" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labsProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-[var(--color-violet-light)]">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Cover placeholder */}
                <div
                  className="aspect-video rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-border)] flex items-center justify-center"
                  role="img"
                  aria-label={`${project.title} visual preview — to be added`}
                >
                  <span className="text-xs text-[var(--color-text-muted)]">Preview — to be added</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                      {project.title}
                    </h2>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    aria-label={`Learn more about ${project.title}`}
                  >
                    Learn more
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-emerald)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                      aria-label={`Open ${project.title} — opens in a new tab`}
                    >
                      View live
                      <ArrowRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {labsProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)]">Products coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Distinction note */}
      <section aria-label="About Labs" className="section-padding-sm border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-[var(--color-text-primary)]">CODEVERSE Labs</strong> is distinct from our client services.
              Projects listed here are original products developed under the CODEVERSE identity.
              Each entry shows its accurate status — In Development, Live, or Experiment —
              and is described honestly without unsupported claims.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
