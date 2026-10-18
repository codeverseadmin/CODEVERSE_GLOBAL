'use client';

import { Terminal, Users, ShieldCheck } from 'lucide-react';

const STANDARDS = [
  {
    number: '01',
    title: 'Zero-Waterfall Synthesis',
    description:
      'We never separate visual design from technical architecture. User interfaces and data structures are developed in tandem from the first sprint.',
    icon: Terminal,
  },
  {
    number: '02',
    title: 'Direct Engineer Access',
    description:
      'You talk directly to the engineers and designers building your system. No account managers, sales intermediaries, or game of telephone.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Full Client Sovereignty',
    description:
      'Every repository, component library, and cloud infrastructure credential belongs 100% to you. We reject vendor lock-in or proprietary traps.',
    icon: ShieldCheck,
  },
];

export default function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="section-padding bg-[#040407] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>STUDIO MANIFESTO // HOW WE THINK</span>
          </div>

          <h2
            id="philosophy-heading"
            className="text-display-lg text-white font-medium tracking-tight"
          >
            Digital products succeed when design and code are{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
              authored together.
            </span>
          </h2>

          <p className="text-base md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-light">
            Traditional agencies often build flashy visual mockups that collapse under real traffic.
            Conventional IT consultancies build reliable software wrapped in sterile interfaces.
            CODEVERSE exists to eliminate that compromise.
          </p>
        </div>

        {/* 3 Core Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STANDARDS.map((standard) => {
            const Icon = standard.icon;
            return (
              <div
                key={standard.number}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#08080E] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-violet-300 font-bold">
                      STANDARD {standard.number}
                    </span>
                    <Icon size={16} className="text-white/40" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2.5">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                    {standard.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
