'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Cpu,
  ArrowRight,
  Terminal,
  Activity,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { StatusBadge } from '@/components/ui/Badge';
import { getLabsProjects } from '@/lib/data/projects';

const ARCHITECTURE_NODES = [
  {
    id: 'edge',
    label: 'Edge Compute & SSR',
    stage: '01 / INGESTION',
    icon: Zap,
    accent: '#06B6D4',
    metric: '< 45ms TTFB',
    description:
      'Distributed edge runtimes deliver server-rendered HTML at global CDN points of presence, eliminating layout shifts and client-side waterfalls before assets reach the browser.',
    specs: ['Edge Caching', 'Zero Hydration Shift', 'HTTP/3 Protocol', 'Security Headers'],
  },
  {
    id: 'typesafe',
    label: 'Type-Safe App Mesh',
    stage: '02 / CONTRACT',
    icon: ShieldCheck,
    accent: '#8B5CF6',
    metric: '100% Strict TS',
    description:
      'End-to-end data contracts enforce validation from server APIs to UI components. Runtime schema verification prevents runtime exceptions and silent data corruptions.',
    specs: ['Strict TypeScript', 'Zero-Any Policy', 'Immutable State', 'React 19 RSC'],
  },
  {
    id: 'runtime',
    label: 'Systems & Tooling Engine',
    stage: '03 / RUNTIME',
    icon: Terminal,
    accent: '#10B981',
    metric: 'AST-Level Parsing',
    description:
      'Demonstrated in our Java Visualizer project: We parse abstract syntax trees and track JVM memory heap allocation step by step, validating computer science fundamentals.',
    specs: ['AST Traversal', 'Call Stack Tracking', 'Heap Inspection', 'Step Debugger'],
  },
  {
    id: 'telemetry',
    label: 'Resilient Infrastructure',
    stage: '04 / RELIABILITY',
    icon: Activity,
    accent: '#F59E0B',
    metric: 'Layered Defense',
    description:
      'In-memory anti-spoofing rate limiters, isolated trusted-proxy providers, and transactional email fallbacks ensure operational resilience under unexpected traffic spikes.',
    specs: ['Proxy Isolation', 'Rate Limiting', 'Honeypot Traps', 'Zero PII Leaks'],
  },
];

export default function LabsSection() {
  const [selectedNode, setSelectedNode] = useState(0);
  const activeNode = ARCHITECTURE_NODES[selectedNode];
  const labsProjects = getLabsProjects();

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="section-padding bg-[#040407] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Grid Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <Cpu size={13} className="text-cyan-400" />
              <span>ENGINEERING BLUEPRINT &bull; CODEVERSE LABS</span>
            </div>
            <h2 id="engineering-heading" className="text-display-lg text-[var(--color-text-primary)]">
              Engineering discipline meets{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300">
                experimental craft.
              </em>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We do not treat web development as skin-deep styling. Our studio develops original
              systems software and runtime tools, infusing client projects with genuine engineering
              depth and architectural resilience.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.03] text-sm font-semibold text-white transition-all duration-300 shrink-0"
          >
            <span>Inspect All Lab Products</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Signature Interactive System Architecture Visualizer */}
        <div className="mb-20 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#08080E] shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-3">
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block">
                INTERACTIVE ARCHITECTURAL MATRIX
              </span>
              <h3 className="text-lg md:text-xl font-medium text-white">
                How CODEVERSE Constructs Resilient Systems
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM PROTOCOL ACTIVE
            </span>
          </div>

          {/* Connected Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-6">
            {ARCHITECTURE_NODES.map((node, idx) => {
              const isSelected = selectedNode === idx;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(idx)}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-white/[0.06] border-white/30 shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                  style={{
                    borderColor: isSelected ? node.accent : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/40">{node.stage}</span>
                    <Icon size={14} style={{ color: node.accent }} />
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-white mb-1">
                    {node.label}
                  </h4>
                  <span
                    className="text-[11px] font-mono font-medium block"
                    style={{ color: node.accent }}
                  >
                    {node.metric}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Terminal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-5 md:p-6 rounded-xl bg-[#040408] border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeNode.accent }}
                  />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    {activeNode.label} &mdash; Architectural Rationale
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-xs">
                {activeNode.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.03] border border-white/[0.08] text-white/80"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Labs Projects Cards */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-white mb-2">
              Proprietary Labs &amp; Products
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Concrete evidence of hands-on software development and user-facing innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labsProjects.map((project) => (
              <article
                key={project.slug}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[#07070B] hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono text-cyan-400">
                      LABS INITIATIVE // {project.year || '2025'}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h4 className="text-xl md:text-2xl font-semibold text-white group-hover:text-violet-200 transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 font-light">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] border border-white/[0.06] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
