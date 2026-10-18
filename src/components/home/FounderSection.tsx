'use client';

import { siteConfig } from '@/lib/data/site';
import { CheckCircle2 } from 'lucide-react';

export default function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="founder-heading"
      className="section-padding bg-[#06060B] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio Insignia Artifact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              className="group relative aspect-square max-w-[340px] w-full rounded-3xl border border-white/10 bg-[#090910] flex flex-col items-center justify-between p-8 text-center shadow-2xl hover:border-white/20 transition-all duration-300"
              role="img"
              aria-label="CODEVERSE Studio Insignia and Verification Seal"
            >
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-white/40 pb-3 border-b border-white/[0.06]">
                <span>CV // STUDIO SEAL</span>
                <span>AUTHENTICATED</span>
              </div>

              {/* Monogram Emblem */}
              <div className="my-auto relative flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl bg-gradient-to-br from-violet-900/40 via-cyan-900/30 to-black border border-white/20 group-hover:scale-105 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <span className="text-3xl font-bold tracking-tight text-white font-mono">
                    CV
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-base font-semibold text-white tracking-wide">CODEVERSE</p>
                  <p className="text-xs font-mono text-white/50 mt-1">Founder-Led Digital Studio</p>
                </div>
              </div>

              <div className="w-full pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> VERIFIED STATUS
                </span>
                <span>EST. 2024</span>
              </div>
            </div>
          </div>

          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>THE FOUNDER-LED ETHOS</span>
            </div>

            <h2 id="founder-heading" className="text-display-md text-white font-medium">
              Direct accountability from the people who{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                actually write your code.
              </span>
            </h2>

            <div className="flex flex-col gap-4 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
              {founder.bio ? (
                <p>{founder.bio}</p>
              ) : (
                <>
                  <p>
                    CODEVERSE was founded on a simple conviction: when you hire a technology studio,
                    you should speak directly with the people designing and coding your application.
                    In conventional agencies, project scope is sold by sales executives, managed by
                    non-technical coordinators, and delegated to junior contractors.
                  </p>
                  <p>
                    At CODEVERSE, the founder and senior engineering leads remain directly involved
                    in every architectural choice, database schema, and interface interaction.
                    By testing runtime patterns in our internal laboratory (*CODEVERSE Labs*) before
                    deploying them to client systems, we ensure every solution is durable, performant,
                    and built to last well beyond launch day.
                  </p>
                </>
              )}
            </div>

            {/* Founder Credentials (Strictly Founder, CODEVERSE — no CEO title) */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  {founder.name || 'CODEVERSE Technical Leadership'}
                </p>
                <p className="text-xs font-mono text-violet-300 mt-0.5">
                  {founder.title}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span>[DIRECT COMMISSIONS &bull; NO INTERMEDIARIES]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
