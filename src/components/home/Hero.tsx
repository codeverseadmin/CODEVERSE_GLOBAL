'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveGridCanvas from './InteractiveGridCanvas';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-24 md:pt-28 pb-12"
    >
      {/* Interactive generative engineering mesh background */}
      <InteractiveGridCanvas />

      {/* Atmospheric ambient glow layers */}
      <div
        aria-hidden="true"
        className="radial-glow w-[550px] md:w-[750px] h-[550px] md:h-[750px] bg-[var(--color-violet)] top-[-15%] left-[5%] md:left-[15%] opacity-[0.14] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="radial-glow w-[380px] md:w-[500px] h-[380px] md:h-[500px] bg-[var(--color-cyan)] bottom-[5%] right-[2%] md:right-[10%] opacity-[0.09] pointer-events-none"
      />

      {/* Engineering Corner Registration Markers */}
      <div
        aria-hidden="true"
        className="hidden lg:flex items-center justify-between container-xl absolute top-28 inset-x-0 mx-auto px-6 pointer-events-none text-[11px] font-mono text-white/20 select-none"
      >
        <span>+ COORD: 23.8103° N // 90.4125° E</span>
        <span>SYS.STATUS: 200_OK [STABLE] +</span>
      </div>

      <div className="container-xl relative z-10 my-auto py-12 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Studio Telemetry Capsule */}
          <motion.div variants={fadeUp} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/20 backdrop-blur-md shadow-inner shadow-violet-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-wide text-violet-200 uppercase">
                STUDIO STATUS: AVAILABLE FOR COMMISSIONS
              </span>
              <span className="hidden sm:inline-block text-white/30 text-xs">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300/80">
                <Sparkles size={11} aria-hidden="true" />
                Learn • Code • Grow
              </span>
            </div>
          </motion.div>

          {/* Cinematic Editorial Headline */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-display-xl text-[var(--color-text-primary)] mb-6 md:mb-8 tracking-tight font-medium"
          >
            <span className="block">WE ENGINEER</span>
            <span className="block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300 pr-2">
              WHAT&apos;S NEXT.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-8 md:mb-10 max-w-3xl font-light"
          >
            From distinctive digital experiences to intelligent software systems, we turn ambitious
            ideas into thoughtfully engineered solutions built to endure.
          </motion.p>

          {/* Technical Telemetry Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 md:gap-4 mb-10 text-xs font-mono text-white/70"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08]">
              <Cpu size={13} className="text-violet-400" aria-hidden="true" />
              <span>Full-Stack Engineering</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08]">
              <Layers size={13} className="text-cyan-400" aria-hidden="true" />
              <span>Editorial Design Systems</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08]">
              <Terminal size={13} className="text-emerald-400" aria-hidden="true" />
              <span>Proprietary Labs &amp; Products</span>
            </div>
          </motion.div>

          {/* Action Pathways */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <Link
              href="/start-a-project"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all duration-300 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#selected-work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-[var(--color-text-primary)] rounded-xl border border-white/10 hover:border-violet-400/40 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-sm"
            >
              <span>Explore Selected Work</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Bottom Cue */}
      <div className="container-xl relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-[var(--color-text-muted)]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>EST. DIGITAL STUDIO // GLOBAL ENGAGEMENTS</span>
        </div>

        <a
          href="#selected-work"
          className="group inline-flex items-center gap-2 hover:text-white transition-colors"
          aria-label="Scroll down to inspect selected work"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="inline-block w-4 h-px bg-white/20 group-hover:w-8 group-hover:bg-violet-400 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
}
