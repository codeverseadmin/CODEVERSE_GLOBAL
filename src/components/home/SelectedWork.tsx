'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import ProjectVisualMockup from '@/components/work/ProjectVisualMockup';
import { motion } from 'framer-motion';

export default function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="section-padding border-b border-white/[0.08] relative overflow-hidden bg-[#06060A]"
    >
      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>VERIFIED PORTFOLIO // REAL WORK ONLY</span>
            </div>
            <h2 id="selected-work-heading" className="text-display-lg text-white">
              Demonstrated work,{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                not invented case studies.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We let real code and concrete design speak for themselves. Below are authenticated
              engagements and active internal tools developed under the CODEVERSE identity.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-sm font-semibold text-white transition-all shrink-0"
          >
            <span>Browse Full Directory</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Editorial Project Showcase Spreads */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 md:p-10 rounded-3xl border border-white/[0.08] bg-[#0A0A10] hover:border-white/20 transition-all shadow-xl"
              >
                {/* Visual Viewport Container (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectVisualMockup
                    slug={project.slug}
                    title={project.title}
                    className="shadow-2xl"
                  />
                </div>

                {/* Narrative Details (5 cols) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between h-full gap-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    {/* Metadata Strip */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-white/50 mb-3">
                      <StatusBadge status={project.status} />
                      <span>&bull;</span>
                      <span className="text-white/80">{project.category}</span>
                      {project.year && (
                        <>
                          <span>&bull;</span>
                          <span>{project.year}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-violet-200 transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light mb-6">
                      {project.summary}
                    </p>

                    {/* Challenge & Solution Summary */}
                    {project.challenge && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 text-xs leading-relaxed flex flex-col gap-2">
                        <div>
                          <span className="font-mono text-white/50 uppercase block text-[10px]">THE NEED</span>
                          <span className="text-white/80">{project.challenge}</span>
                        </div>
                        {project.solution && (
                          <div className="pt-2 border-t border-white/[0.06]">
                            <span className="font-mono text-white/50 uppercase block text-[10px]">THE ARCHITECTURE</span>
                            <span className="text-white/80">{project.solution}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Deliverables / Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.03] border border-white/[0.08] text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
                      aria-label={`Read full case study for ${project.title}`}
                    >
                      <span>Read Architectural Case Study</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300"
                      >
                        <span>Open Deployment</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
