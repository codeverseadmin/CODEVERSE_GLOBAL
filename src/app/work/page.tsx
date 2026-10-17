import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getPublishedProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description: 'The CODEVERSE project portfolio — websites, e-commerce, custom software, and original products.',
  path: '/work',
});

export default function WorkPage() {
  const projects = getPublishedProjects();

  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="work-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Portfolio</p>
          <h1 id="work-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            Projects built with{' '}
            <em className="not-italic gradient-text-violet">care and purpose.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            A selection of projects from our client work and original product development. Each represents a specific problem, a considered solution, and a genuine contribution.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section aria-label="Project portfolio" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] overflow-hidden transition-all duration-300"
                aria-label={`View case study: ${project.title}`}
              >
                {/* Cover placeholder */}
                <div
                  className="aspect-video bg-[var(--color-surface-3)] flex items-center justify-center"
                  role="img"
                  aria-label={project.cover.alt}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.2)' }}
                    >
                      <span className="text-2xl font-bold text-[var(--color-violet-light)]">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)]">{project.title}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-5 md:p-6">
                  <div className="flex items-center gap-2">
                    <StatusBadge status={project.status} />
                    <span className="text-xs text-[var(--color-text-muted)]">{project.category}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-full bg-[var(--color-surface-3)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)]">No projects available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
