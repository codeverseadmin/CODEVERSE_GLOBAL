'use client';

import {
  MessageSquare,
  Layers,
  Target,
  Zap,
  Box,
  ShieldCheck,
} from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: 'Direct Technical Contact',
    description:
      'You communicate directly with the software engineers and designers building your application—never account managers or non-technical coordinators.',
    tag: 'NO MIDDLEMEN',
  },
  {
    icon: Layers,
    title: 'Synthesized Design & Engineering',
    description:
      'We do not design in a vacuum and hand off unrealistic Figma files. Interface aesthetics and database architectures are developed together from day one.',
    tag: 'HYBRID WORKFLOW',
  },
  {
    icon: Target,
    title: 'Bespoke Architecture Only',
    description:
      'We reject cookie-cutter themes and generic templates. Every technical stack, database schema, and component is chosen for your specific operational scale.',
    tag: 'ZERO BOILERPLATE',
  },
  {
    icon: Zap,
    title: 'Sub-Second Performance',
    description:
      'We prioritize Core Web Vitals, asset budgets, and minimal JavaScript overhead. Our web applications load quickly and run smoothly across all devices.',
    tag: 'LIGHTNING FAST',
  },
  {
    icon: Box,
    title: 'Active Internal R&D',
    description:
      'Through CODEVERSE Labs, we build original tools like Java Visualizer. This ongoing product incubation keeps our software instincts and engineering standards high.',
    tag: 'HANDS-ON R&D',
  },
  {
    icon: ShieldCheck,
    title: '100% Repository Sovereignty',
    description:
      'You receive full, unrestricted ownership of your code repository, design tokens, and infrastructure configurations. No vendor lock-in or proprietary traps.',
    tag: 'FULL SOVEREIGNTY',
  },
];

export default function WhyCodeverse() {
  return (
    <section
      aria-labelledby="why-codeverse-heading"
      className="section-padding bg-[#050509] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STUDIO PRINCIPLES // WHY CLIENTS TRUST US</span>
            </div>
            <h2 id="why-codeverse-heading" className="text-display-lg text-white">
              Engineering standards that govern{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                every engagement.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We take on a limited number of client commissions at any one time, ensuring every
              project receives rigorous technical attention and founder-level accountability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#090910] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] text-white">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">
                    {tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2.5">
                  {title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
