import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/data/projects';
import { buildMetadata } from '@/lib/utils/metadata';
import { StatusBadge } from '@/components/ui/Badge';
import ProjectVisualMockup from '@/components/work/ProjectVisualMockup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="pt-24">
      {/* Back */}
      <div className="container-xl pt-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All projects
        </Link>
      </div>

      {/* Header */}
      <section aria-labelledby="project-heading" className="section-padding-sm">
        <div className="container-xl max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <StatusBadge status={project.status} />
            <span className="text-xs text-[var(--color-text-muted)]">{project.category}</span>
            {project.year && <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>}
            {project.role && <span className="text-xs text-[var(--color-text-muted)]">{project.role}</span>}
          </div>

          <h1 id="project-heading" className="text-display-lg text-[var(--color-text-primary)] mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[var(--color-emerald)] border border-[var(--color-emerald)]/30 rounded-lg hover:bg-[var(--color-emerald)]/10 transition-colors duration-200"
            >
              View live project
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      {/* Cover Visual Preview */}
      <div className="container-xl mb-16">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl p-2 bg-[#06060A]">
          <ProjectVisualMockup
            slug={project.slug}
            title={project.title}
            className="min-h-[340px] md:min-h-[460px]"
          />
        </div>
      </div>

      {/* Case study content */}
      <section aria-label="Case study" className="container-xl max-w-3xl pb-24">
        <div className="flex flex-col gap-12">
          {/* Summary */}
          <div>
            <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
              Overview
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge */}
          {project.challenge && (
            <div>
              <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                The Challenge
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div>
              <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                The Solution
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                Deliverables
              </h2>
              <ul role="list" className="flex flex-col gap-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet)] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-[var(--color-text-primary)]">
              Have a similar project in mind?
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Let&apos;s talk about what you&apos;re building.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200 shadow-lg shadow-violet-900/25 shrink-0"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
