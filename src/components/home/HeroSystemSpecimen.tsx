'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSystemSpecimen() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'vitals' | 'projects'>('architecture');

  return (
    <div className="w-full rounded-2xl md:rounded-3xl border border-white/10 bg-[#0A0A10] overflow-hidden shadow-2xl relative">
      {/* Instrument Top Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#0E0E18] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-white/90">
            STUDIO ENGINE SPECIMEN
          </span>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06] text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'architecture' ? 'bg-violet-600 text-white font-medium' : 'text-white/60 hover:text-white'
            }`}
          >
            Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vitals')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'vitals' ? 'bg-cyan-600 text-white font-medium' : 'text-white/60 hover:text-white'
            }`}
          >
            Vitals
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'projects' ? 'bg-emerald-600 text-white font-medium' : 'text-white/60 hover:text-white'
            }`}
          >
            Portfolio
          </button>
        </div>
      </div>

      {/* Body Content Depending on Active Tab */}
      <div className="p-6 md:p-8 min-h-[320px] flex flex-col justify-between">
        {activeTab === 'architecture' && (
          <div className="flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-white/50">&#47;&#47; CORE ENGINEERING STACK</span>
              <span className="text-violet-400">NEXT.JS 15 + REACT 19</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-white block font-semibold">Edge SSR Runtime</span>
                  <span className="text-[11px] text-white/50">HTML streamed from closest CDN node</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 text-[10px] border border-emerald-500/30">
                  38ms TTFB
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-white block font-semibold">Strict Data Contracts</span>
                  <span className="text-[11px] text-white/50">TypeScript without &apos;any&apos; + Zod validation</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 text-[10px] border border-cyan-500/30">
                  Type-Safe
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-white block font-semibold">Zero-Hydration Bloat</span>
                  <span className="text-[11px] text-white/50">Lean 103kB initial JavaScript bundle</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 text-[10px] border border-violet-500/30">
                  Optimized
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-white/40 flex items-center justify-between">
              <span>SECURITY: Strict CSP &amp; Edge Rate Limiting</span>
              <span className="text-emerald-400">Verified Clean</span>
            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="flex flex-col gap-4 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
              <span className="text-white/50">&#47;&#47; CORE WEB VITALS TARGETS</span>
              <span className="text-cyan-400">MEASURED STANDARDS</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col justify-between">
                <span className="text-xs text-white/60">Time to First Byte</span>
                <span className="text-2xl font-bold text-cyan-300 mt-2">&lt; 50ms</span>
                <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 size={10} /> Fast Edge Delivery
                </span>
              </div>

              <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 flex flex-col justify-between">
                <span className="text-xs text-white/60">Largest Contentful Paint</span>
                <span className="text-2xl font-bold text-violet-300 mt-2">0.6s</span>
                <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 size={10} /> Instant Visuals
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <span className="text-xs text-white/60">Cumulative Layout Shift</span>
                <span className="text-2xl font-bold text-white mt-2">0.00</span>
                <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 size={10} /> Stable Geometry
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                <span className="text-xs text-white/60">Accessibility Index</span>
                <span className="text-2xl font-bold text-white mt-2">WCAG AA</span>
                <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 size={10} /> High Contrast
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-white/50">&#47;&#47; RECENT CLIENT &amp; LAB CODE</span>
              <Link href="/work" className="text-violet-300 hover:text-white flex items-center gap-1">
                View All <ArrowRight size={11} />
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/work/marine-creatures"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    Marine Creatures
                  </span>
                  <span className="text-[11px] text-white/50 block">Digital Showcase &bull; Next.js</span>
                </div>
                <span className="text-[10px] text-emerald-400">Completed</span>
              </Link>

              <Link
                href="/work/yamini-connect"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-white font-medium group-hover:text-violet-300 transition-colors">
                    Yamini Connect
                  </span>
                  <span className="text-[11px] text-white/50 block">Bespoke Web Platform &bull; React</span>
                </div>
                <span className="text-[10px] text-emerald-400">Completed</span>
              </Link>

              <Link
                href="/work/java-visualizer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    Java Visualizer
                  </span>
                  <span className="text-[11px] text-white/50 block">Computer Science Engine &bull; Labs</span>
                </div>
                <span className="text-[10px] text-amber-400">In Development</span>
              </Link>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-white/40">
          <span>CODEVERSE STUDIO // FOUNDER-LED</span>
          <span className="text-violet-400">NO INTERMEDIARIES</span>
        </div>
      </div>
    </div>
  );
}
