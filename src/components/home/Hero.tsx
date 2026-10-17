'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="radial-glow w-[600px] h-[600px] bg-[var(--color-violet)] top-[-10%] left-[10%] opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="radial-glow w-[400px] h-[400px] bg-[var(--color-cyan)] bottom-[10%] right-[5%] opacity-[0.07]"
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-xl relative z-10 py-24 md:py-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-violet)]/30 bg-[var(--color-violet)]/5 mb-8"
          >
            <Sparkles size={13} className="text-[var(--color-violet-light)]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[var(--color-violet-light)] tracking-wide uppercase">
              Digital Experiences &amp; Technology Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-display-xl text-[var(--color-text-primary)] mb-6"
          >
            Ideas deserve{' '}
            <em className="not-italic gradient-text-violet">
              more than
            </em>
            <br />
            ordinary.
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            custom={0.22}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl"
          >
            We design and develop digital experiences, custom software, and
            intelligent solutions that help businesses move forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.34}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200 shadow-xl shadow-violet-900/30"
            >
              Explore Our Work
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] transition-all duration-200"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--color-border)]" />
        </motion.div>
      </div>
    </section>
  );
}
