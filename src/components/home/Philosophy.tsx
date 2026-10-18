'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles, Terminal } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    title: 'Architectural Intention',
    description:
      'We write software designed for resilience, speed, and maintainable abstractions—never disposable templates or speculative bloat.',
    icon: Terminal,
  },
  {
    number: '02',
    title: 'Editorial Restraint',
    description:
      'True visual distinction is born from contrast, disciplined typography, and purposeful motion—never superficial ornament.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Commercial Purpose',
    description:
      'Every interface and system we ship is measured against real human utility, operational efficiency, and lasting commercial trust.',
    icon: Sparkles,
  },
];

export default function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="section-padding relative overflow-hidden bg-[#030305]"
    >
      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 md:gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-violet-300 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>Studio Ethos &bull; Learn &bull; Code &bull; Grow</span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              id="philosophy-heading"
              className="text-display-lg text-[var(--color-text-primary)] font-light leading-tight tracking-tight"
            >
              Technology only creates value when it is engineered with{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                clarity and intent.
              </em>
            </p>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-light"
          >
            We bridge the gap between creative visual direction and rigorous systems engineering.
            No layers of account management. No generic themes. Direct collaboration between client
            ambition and hands-on builders.
          </motion.p>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-[#07070B] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-violet-400 font-semibold">
                      {pillar.number}
                    </span>
                    <Icon size={16} className="text-white/40" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
