'use client';

import { useState } from 'react';
import { Search, FileCode2, Palette, Terminal, Rocket } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    label: 'Technical Discovery',
    icon: Search,
    description:
      'We analyze your operational objectives, user requirements, data structures, and performance targets before drafting architecture.',
    deliverable: 'Scope Matrix & Technical Brief',
  },
  {
    number: '02',
    title: 'Specification',
    label: 'Contract & Milestones',
    icon: FileCode2,
    description:
      'We define clear milestones, data models, and deliverable commitments so you know exactly what is being built, when, and for what cost.',
    deliverable: 'Milestone Roadmap & API Contract',
  },
  {
    number: '03',
    title: 'Design',
    label: 'Interface Systems',
    icon: Palette,
    description:
      'We craft the visual direction, component tokens, responsive layouts, and interaction choreographies tailored to your brand identity.',
    deliverable: 'High-Fidelity Components & Tokens',
  },
  {
    number: '04',
    title: 'Engineering',
    label: 'Production Build',
    icon: Terminal,
    description:
      'We implement the application with strict TypeScript, clean component structures, asset optimizations, and comprehensive automated tests.',
    deliverable: 'Type-Safe Codebase & Automated Tests',
  },
  {
    number: '05',
    title: 'Deployment',
    label: 'Launch & Handover',
    icon: Rocket,
    description:
      'We configure production edge hosting, SSL, security headers, and caching rules, handing over 100% of repository access and documentation.',
    deliverable: 'Edge Deployment & Full Handover',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      aria-labelledby="process-heading"
      className="section-padding bg-[#07070B] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>DELIVERY ROADMAP // FIVE STRUCTURED PHASES</span>
            </div>
            <h2 id="process-heading" className="text-display-lg text-white">
              A delivery methodology structured for{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                predictable outcomes.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We eliminate uncertainty through fixed milestones, direct engineering communication,
              and regular working software demonstrations at every phase.
            </p>
          </div>
        </div>

        {/* 5-Phase Horizontal Explorer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {STEPS.map((step, i) => {
            const isCurrent = activeStep === i;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white/[0.06] border-white/30 shadow-lg'
                    : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isCurrent ? 'text-violet-300' : 'text-white/40'
                      }`}
                    >
                      PHASE {step.number}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isCurrent ? 'bg-white/10 text-white' : 'text-white/30'
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-cyan-300/80 block uppercase tracking-wider">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
