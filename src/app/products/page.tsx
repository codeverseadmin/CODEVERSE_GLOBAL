import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getLabsProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import { ArrowRight, Cpu, ArrowUpRight } from 'lucide-react';
import ProjectVisualMockup from '@/components/work/ProjectVisualMockup';

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
        <div className="container-xl max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <Cpu size={13} className="text-cyan-400" />
            <span>INCUBATION // CODEVERSE LABS</span>
          </div>
          <h1 id="labs-page-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            We don&apos;t just build for others.{' '}
            <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300">
              We build what comes next.
            </em>
          </h1>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed font-light">
            CODEVERSE Labs is the incubator for our proprietary software tools, experimental algorithms,
            and developer platforms. These internal ventures sharpen our systems instincts and directly
            inform our client engagements.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section aria-label="Labs products" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labsProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-3xl border border-white/[0.08] bg-[#07070B] hover:border-violet-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                {/* Visual Preview */}
                <div className="p-4 bg-[#040407] border-b border-white/[0.06]">
                  <ProjectVisualMockup
                    slug={project.slug}
                    title={project.title}
                    className="min-h-[260px] md:min-h-[300px]"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-cyan-400">LABS R&amp;D</span>
                      <StatusBadge status={project.status} />
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-violet-200 transition-colors duration-200 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-white/[0.03] border border-white/[0.06] text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors duration-200"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        <span>Specifications</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300"
                          aria-label={`Open ${project.title} (opens in new tab)`}
                        >
                          <span>Live</span>
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
