'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JavaVisualizerWorkbench from './JavaVisualizerWorkbench';
import { getLabsProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';

export default function LabsSection() {
  const labsProjects = getLabsProjects();

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="section-padding bg-[#050509] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>CODEVERSE LABS // SYSTEMS ENGINEERING PROOF</span>
            </div>
            <h2 id="engineering-heading" className="text-display-lg text-white">
              Engineering depth demonstrated through{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                active software products.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We do not treat engineering as a cosmetic afterthought. Through CODEVERSE Labs, we
              incubate proprietary runtime developer tools and distributed software. Below is a live
              interactive demonstration of our <strong>Java Visualizer</strong> engine.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-sm font-semibold text-white transition-all shrink-0"
          >
            <span>All Lab Initiatives</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Live Interactive Engineering Tool Demonstration */}
        <div className="mb-16">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider block">
                INTERACTIVE PRODUCT SIMULATION
              </span>
              <h3 className="text-lg md:text-xl font-medium text-white">
                Java Visualizer &mdash; Runtime Bytecode &amp; Stack Frame Debugger
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
              Use Step Forward to advance execution
            </span>
          </div>

          <JavaVisualizerWorkbench />
        </div>

        {/* Lab Products Directory */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-1">
              CURRENT INTERNAL INITIATIVES
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Proprietary Products in Incubation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labsProjects.map((project) => (
              <article
                key={project.slug}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#0A0A10] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-400">LABS INITIATIVE</span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h4>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-white/[0.03] border border-white/[0.06] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
