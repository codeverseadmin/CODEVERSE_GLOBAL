'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSystemSpecimen from './HeroSystemSpecimen';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[92dvh] flex flex-col justify-center pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-white/[0.08] bg-[#07070B]"
    >
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Positioning (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/80 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>FOUNDER-LED DIGITAL TECHNOLOGY STUDIO</span>
              <span className="text-white/30 hidden sm:inline">&bull;</span>
              <span className="text-violet-300 hidden sm:inline">Learn &bull; Code &bull; Grow</span>
            </motion.div>

            {/* Authoritative Editorial Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-lg text-white font-medium tracking-tight mb-6 leading-[1.08]"
            >
              We build software and digital experiences for teams who value{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                craft over novelty.
              </span>
            </motion.h1>

            {/* Concrete, Specific Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8 font-light"
            >
              We design and engineer bespoke web platforms, custom operational systems, and
              proprietary developer tools. You work directly with the founder and lead engineers
              who build your code&mdash;no account managers, no disposable templates.
            </motion.p>

            {/* Action Pathways */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="/start-a-project"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all duration-300 shadow-xl shadow-violet-900/30 hover:-translate-y-0.5"
              >
                <span>Discuss a Project</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-white/90 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                <span>Inspect Verified Work</span>
              </Link>
            </motion.div>

            {/* Honest Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-white/50"
            >
              <span className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 size={13} className="text-emerald-400" /> Direct Engineer Access
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 size={13} className="text-emerald-400" /> 100% Client Code Ownership
              </span>
              <span className="text-white/20">&bull;</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 size={13} className="text-emerald-400" /> Sub-Second Performance
              </span>
            </motion.div>
          </div>

          {/* Right Column: Live System Architectural Specimen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroSystemSpecimen />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
