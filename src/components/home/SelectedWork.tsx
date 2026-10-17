import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="section-padding border-t border-[var(--color-border)]"
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects we've"
            titleItalic="built with care"
            id="selected-work-heading"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 shrink-0"
          >
            View all work
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Project grid — alternating layout */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-all duration-300 group ${i % 2 === 1 ? '' : ''}`}
            >
              {/* Info */}
              <div className={`flex flex-col gap-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span className="text-xs text-[var(--color-text-muted)]">{project.category}</span>
                  {project.year && (
                    <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
                  )}
                </div>

                <h3 className="text-display-md text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {project.summary}
                </p>

                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-[var(--color-surface-3)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 mt-2"
                  aria-label={`View case study for ${project.title}`}
                >
                  View case study
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>

              {/* Cover placeholder */}
              <div
                className={`aspect-video rounded-xl overflow-hidden bg-[var(--color-surface-3)] border border-[var(--color-border)] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                aria-label={project.cover.alt}
                role="img"
              >
                <div className="flex flex-col items-center gap-3 text-center p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(139,92,246,0.15)' }}
                    aria-hidden="true"
                  >
                    <span className="text-xl font-bold text-[var(--color-violet-light)]">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {project.title}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
