'use client';

import { useState } from 'react';
import { Search, FileCode2, Palette, Terminal, Rocket } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    label: 'Technical Discovery',
    icon: Search,
    description:
      'We unpack your business objectives, technical constraints, user expectations, and performance targets before writing a line of code.',
    deliverable: 'Architecture Matrix & Scope Brief',
  },
  {
    number: '02',
    title: 'Define',
    label: 'Specification Contract',
    icon: FileCode2,
    description:
      'We establish firm milestone commitments, technical specifications, and API data contracts so there are no surprises or moving targets.',
    deliverable: 'Milestone Roadmap & API Contract',
  },
  {
    number: '03',
    title: 'Design',
    label: 'Interface & Motion',
    icon: Palette,
    description:
      'We craft the visual direction, responsive grids, typography hierarchies, and interaction choreographies tailored to your brand identity.',
    deliverable: 'Figma High-Fidelity & Design Tokens',
  },
  {
    number: '04',
    title: 'Develop',
    label: 'Production Build',
    icon: Terminal,
    description:
      'We engineer the system with clean Next.js/React code, strict TypeScript types, optimized assets, and comprehensive testing suites.',
    deliverable: 'Type-Safe Codebase & Automated Tests',
  },
  {
    number: '05',
    title: 'Deliver',
    label: 'Deploy & Verify',
    icon: Rocket,
    description:
      'We execute zero-downtime production deployments, configure edge caching and security headers, and verify end-to-end functionality.',
    deliverable: 'Vercel Edge Launch & Handover Docs',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      aria-labelledby="process-heading"
      className="section-padding bg-[#030306] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>DELIVERY METHODOLOGY &bull; 5 PHASES</span>
            </div>
            <h2 id="process-heading" className="text-display-lg text-[var(--color-text-primary)]">
              A process engineered for{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                absolute clarity.
              </em>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mt-3 leading-relaxed font-light">
              We eliminate ambiguity through structured milestones, transparent communication, and
              regular testable deliverables at each phase of engagement.
            </p>
          </div>
        </div>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {STEPS.map((step, i) => {
            const isCurrent = activeStep === i;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white/[0.05] border-violet-500/40 shadow-xl shadow-violet-950/20'
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
                        isCurrent
                          ? 'bg-violet-500/20 text-violet-300'
                          : 'bg-white/[0.03] text-white/40'
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
                  <span className="text-[10px] font-mono text-cyan-300/80 block uppercase tracking-wider">
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
