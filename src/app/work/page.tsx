import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/utils/metadata';
import { getPublishedProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import ProjectVisualMockup from '@/components/work/ProjectVisualMockup';

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
        <div className="container-xl max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>PORTFOLIO &bull; PRODUCTION CASE STUDIES</span>
          </div>
          <h1 id="work-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            Projects built with{' '}
            <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
              rigor and purpose.
            </em>
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed font-light">
            A selection of verified projects across client technology and proprietary lab initiatives.
            Each engagement is engineered from the ground up for performance, brand identity, and lasting utility.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section aria-label="Project portfolio" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col rounded-3xl border border-white/[0.08] bg-[#07070B] hover:border-violet-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-950/20"
                aria-label={`View case study: ${project.title}`}
              >
                {/* Visual Interface Preview */}
                <div className="p-4 bg-[#040407] border-b border-white/[0.06]">
                  <ProjectVisualMockup
                    slug={project.slug}
                    title={project.title}
                    className="min-h-[240px] md:min-h-[280px]"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-3 p-6 md:p-8 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <StatusBadge status={project.status} />
                        <span className="text-xs font-mono text-white/40">{project.category}</span>
                      </div>
                      {project.year && (
                        <span className="text-xs font-mono text-white/40">{project.year}</span>
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-violet-200 transition-colors duration-200 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-white/[0.03] text-white/70 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-300 group-hover:text-white transition-colors">
                      Inspect
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </div>
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
