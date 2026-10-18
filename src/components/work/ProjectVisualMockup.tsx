'use client';

import { Activity, Wifi, Play } from 'lucide-react';

interface ProjectVisualMockupProps {
  slug: string;
  title: string;
  className?: string;
}

export default function ProjectVisualMockup({ slug, title, className = '' }: ProjectVisualMockupProps) {
  switch (slug) {
    case 'marine-creatures':
      return (
        <div
          className={`relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden bg-gradient-to-br from-[#02131D] via-[#051C2C] to-[#01080E] border border-cyan-500/20 p-5 md:p-6 flex flex-col justify-between select-none ${className}`}
          role="img"
          aria-label="Marine Creatures — Editorial Digital Showcase Mockup"
        >
          {/* Oceanic contour lines */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.25) 0%, transparent 50%)',
            }}
          />

          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between pb-4 border-b border-cyan-500/15 text-xs font-mono text-cyan-300/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/20" />
              <span className="ml-2 text-[11px] text-cyan-200/90 hidden sm:inline">marine-creatures.digital</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] text-cyan-300">
                DEPTH: 2,450M
              </span>
            </div>
          </div>

          {/* Visual Showcase Content */}
          <div className="relative z-10 my-auto py-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400/90 block mb-1">
              Bioluminescent Oceanic Archive
            </span>
            <h4 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
              The Abyssal Ecosystem
            </h4>
            <p className="text-xs md:text-sm text-cyan-100/70 max-w-sm mb-4 leading-relaxed">
              Curated taxonomic visual records, depth telemetry, and fluid micro-interactions engineered for exploratory immersion.
            </p>

            {/* Specimen cards */}
            <div className="grid grid-cols-2 gap-2 max-w-xs text-[11px] font-mono">
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20">
                <span className="text-cyan-400 block text-[9px]">SPECIES INDEX</span>
                <span className="text-white font-medium">Bathyphysa siberia</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20">
                <span className="text-emerald-400 block text-[9px]">LIGHT EMISSION</span>
                <span className="text-white font-medium">470nm Cyan Wave</span>
              </div>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="flex items-center justify-between pt-3 border-t border-cyan-500/15 text-[10px] font-mono text-cyan-300/60">
            <span>HABITAT: PACIFIC DEEP TRENCH</span>
            <span className="text-emerald-400">● 60 FPS FLUID MOTION</span>
          </div>
        </div>
      );

    case 'yamini-connect':
      return (
        <div
          className={`relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0B0914] via-[#120E22] to-[#07060D] border border-violet-500/20 p-5 md:p-6 flex flex-col justify-between select-none ${className}`}
          role="img"
          aria-label="Yamini Connect — Collaborative Platform Interface Mockup"
        >
          {/* Subtle network grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Platform Console Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-violet-500/20 text-xs font-mono text-violet-300/80">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-violet-400" />
              <span className="text-[11px] font-semibold text-white">YAMINI // CONNECT</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
              <Wifi size={10} />
              <span>SOCKET: ACTIVE (18ms)</span>
            </div>
          </div>

          {/* Main App Workstation Canvas */}
          <div className="relative z-10 my-auto py-3 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60 font-mono text-[11px]">ACTIVE WORKSTREAM: #COMMUNICATION-CORE</span>
              <span className="text-violet-400 font-mono text-[11px]">NODE 04 / 08</span>
            </div>

            {/* Simulated Live Messages / Collaboration Thread */}
            <div className="flex flex-col gap-2">
              <div className="p-3 rounded-lg bg-violet-950/30 border border-violet-500/20 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-600/40 text-violet-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                  YC
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">Direct Channel Sync</span>
                    <span className="text-[9px] font-mono text-white/40">10:42:19</span>
                  </div>
                  <p className="text-[11px] text-white/70">Workflow pipeline dispatches triggered without latency.</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-600/30 text-cyan-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                  DB
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">Database Replication</span>
                    <span className="text-[9px] font-mono text-emerald-400">SYNCED</span>
                  </div>
                  <p className="text-[11px] text-white/70">Custom state architecture maintains zero dropouts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-violet-500/20 text-[10px] font-mono text-violet-300/60">
            <span>ROLE-BASED AUTH &bull; FULL-STACK API</span>
            <span className="text-violet-300">REACT + NODE.JS</span>
          </div>
        </div>
      );

    case 'cholo-bondhu':
      return (
        <div
          className={`relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden bg-gradient-to-br from-[#120B06] via-[#1A100A] to-[#0A0502] border border-amber-500/20 p-5 md:p-6 flex flex-col justify-between select-none ${className}`}
          role="img"
          aria-label="Cholo Bondhu — CODEVERSE Labs Original Product Mockup"
        >
          {/* Radar Circles */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-amber-500/10 pointer-events-none flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-amber-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-amber-500/30 animate-pulse bg-amber-500/5" />
            </div>
          </div>

          {/* Product Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-amber-500/20 text-xs font-mono text-amber-300/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-[11px] font-semibold text-white">CHOLO BONDHU &bull; LABS</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-[10px] text-amber-300">
              PROTOTYPE V0.4
            </span>
          </div>

          {/* Content Body */}
          <div className="relative z-10 my-auto py-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/90 block mb-1">
              Social Connectivity Engine
            </span>
            <h4 className="text-2xl font-serif italic text-white mb-2">
              Meaningful Real-Time Presence
            </h4>
            <p className="text-xs text-amber-100/70 max-w-sm mb-4 leading-relaxed">
              An original social proximity application built to foster genuine human connections through intentional digital design.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-xs font-mono text-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PEER PROXIMITY MESH: OPERATIONAL</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-3 border-t border-amber-500/20 text-[10px] font-mono text-amber-300/60">
            <span>INCUBATED IN CODEVERSE LABS</span>
            <span className="text-amber-400">IN DEVELOPMENT</span>
          </div>
        </div>
      );

    case 'java-visualizer':
      return (
        <div
          className={`relative w-full h-full min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden bg-gradient-to-br from-[#051118] via-[#091824] to-[#03090F] border border-cyan-500/30 p-5 md:p-6 flex flex-col justify-between font-mono select-none ${className}`}
          role="img"
          aria-label="Java Visualizer — Interactive Code Execution Environment Mockup"
        >
          {/* IDE Window Controls */}
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[11px] text-cyan-200 ml-2">QuickSortVisualizer.java</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-[10px] text-cyan-300">
                <Play size={10} className="text-emerald-400" />
                <span>STEP 04/12</span>
              </span>
            </div>
          </div>

          {/* Code Execution Workspace */}
          <div className="my-auto py-2.5 text-[11px] leading-relaxed flex flex-col gap-1">
            <div className="text-white/40">1  public class QuickSort &#123;</div>
            <div className="text-white/40">2    public void sort(int[] arr, int low, int high) &#123;</div>
            <div className="text-white/40">3      if (low &lt; high) &#123;</div>
            {/* Active Highlighted Line */}
            <div className="flex items-center gap-2 bg-cyan-950/60 -mx-2 px-2 py-0.5 rounded border-l-2 border-cyan-400 text-cyan-200">
              <span className="text-cyan-400 font-bold">&gt; 4</span>
              <span>int pi = partition(arr, low, high);</span>
              <span className="ml-auto text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded">
                PIVOT: arr[4] = 72
              </span>
            </div>
            <div className="text-white/40">5        sort(arr, low, pi - 1);</div>
            <div className="text-white/40">6        sort(arr, pi + 1, high);</div>
            <div className="text-white/40">7      &#125;</div>
            <div className="text-white/40">8    &#125;</div>
          </div>

          {/* Stack & Heap Telemetry Inspector */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-cyan-500/20 text-[10px]">
            <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/20">
              <span className="text-cyan-400 block text-[9px]">CALL STACK</span>
              <span className="text-white">main() &rarr; sort() &rarr; partition()</span>
            </div>
            <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/20">
              <span className="text-emerald-400 block text-[9px]">ARRAY HEAP</span>
              <span className="text-white">[14, 28, 42, 65, 72, 91]</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[280px] rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-border)] flex items-center justify-center p-6">
          <span className="text-xl font-bold text-violet-400">{title}</span>
        </div>
      );
  }
}
