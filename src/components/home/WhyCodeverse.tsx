'use client';

import {
  MessageSquare,
  Layers,
  Target,
  Zap,
  Box,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: 'Direct Engineering Access',
    description:
      'You collaborate directly with the software engineers and designers building your application—no junior intermediaries or account management telephone games.',
    tag: 'NO MIDDLEMEN',
  },
  {
    icon: Layers,
    title: 'Simultaneous Design & Code',
    description:
      'We do not design in an unrealistic bubble and toss Figma files over the fence. Aesthetics and engineering architecture are conceived together from day one.',
    tag: 'HYBRID WORKFLOW',
  },
  {
    icon: Target,
    title: 'Tailored System Architecture',
    description:
      'We reject cookie-cutter themes and generic site builders. Every technical stack and database schema is purpose-selected for your specific scale.',
    tag: 'ZERO BOILERPLATE',
  },
  {
    icon: Zap,
    title: 'Sub-Second Performance',
    description:
      'We obsess over Core Web Vitals, asset budgets, and TTFB. Our applications are engineered to load instantly, reduce bounce rates, and rank decisively.',
    tag: 'LIGHTNING FAST',
  },
  {
    icon: Box,
    title: 'Proprietary Labs Incubation',
    description:
      'We maintain active internal software products under CODEVERSE Labs, ensuring we battle-test architectural patterns before recommending them to clients.',
    tag: 'HANDS-ON R&D',
  },
  {
    icon: ShieldCheck,
    title: '100% Client Code Ownership',
    description:
      'You receive full, unrestricted ownership of your repository, design tokens, and infrastructure configurations. No vendor lock-in or proprietary traps.',
    tag: 'FULL SOVEREIGNTY',
  },
];

export default function WhyCodeverse() {
  return (
    <section
      aria-labelledby="why-codeverse-heading"
      className="section-padding bg-[#050508] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>THE CODEVERSE ADVANTAGE &bull; RIGOR &bull; INTEGRITY</span>
            </div>
            <h2 id="why-codeverse-heading" className="text-display-lg text-[var(--color-text-primary)]">
              Principles we hold to on{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                every engagement.
              </em>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mt-3 leading-relaxed font-light">
              We are deliberately selective with the projects we take on. This allows us to focus
              uncompromising attention on technical quality and measurable outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description, tag }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-[#08080D] hover:border-violet-500/30 hover:bg-[#0B0B12] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 border border-violet-500/20 text-violet-300 group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">
                    {tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2.5 group-hover:text-violet-200 transition-colors">
                  {title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
