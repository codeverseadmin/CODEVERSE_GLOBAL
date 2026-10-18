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
      className="section-padding border-t border-[var(--color-border)] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="radial-glow w-[600px] h-[600px] bg-violet-600/10 top-[20%] right-[-10%] pointer-events-none"
      />

      <div className="container-xl relative z-10">
        {/* Section Header with Studio Telemetry */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>CASE STUDIES &bull; VOLUME 2024–2025</span>
            </div>
            <h2 id="selected-work-heading" className="text-display-lg text-[var(--color-text-primary)]">
              Work that proves{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                our craft.
              </em>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mt-3 leading-relaxed">
              Every project represents a distinct technical challenge, a customized architectural
              solution, and an unwavering commitment to design and engineering rigor.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.03] text-sm font-semibold text-white transition-all duration-300 shrink-0"
          >
            <span>Explore All Work</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Asymmetrical Editorial Project Showcase */}
        <div className="flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#07070B] hover:border-violet-500/30 p-6 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Visual Mockup Container (7 cols on desktop) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative transform transition-transform duration-500 group-hover:scale-[1.01]">
                      <ProjectVisualMockup
                        slug={project.slug}
                        title={project.title}
                      />
                    </div>
                  </div>

                  {/* Editorial Details (5 cols on desktop) */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Telemetry metadata header */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                      <StatusBadge status={project.status} />
                      <span className="text-white/40">/</span>
                      <span className="text-violet-300/80">{project.category}</span>
                      {project.year && (
                        <>
                          <span className="text-white/40">/</span>
                          <span className="text-white/50">{project.year}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white group-hover:text-violet-200 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Tagline / Summary */}
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
                      {project.summary}
                    </p>

                    {/* Technology tags */}
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.03] text-white/70 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action link */}
                    <div className="pt-3 flex items-center gap-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors duration-200 group/link"
                        aria-label={`View detailed case study for ${project.title}`}
                      >
                        <span>Inspect Case Study</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                          aria-label={`Open live demonstration of ${project.title} in a new tab`}
                        >
                          <span>Live System</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                    </div>
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
