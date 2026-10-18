'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  ShoppingBag,
  Code2,
  Sparkles,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_DATA = [
  {
    id: 'web-development',
    index: '01',
    title: 'Digital Flagships & Bespoke Websites',
    category: 'Digital Experiences & Portals',
    icon: Monitor,
    accent: '#7C3AED',
    summary:
      'We design and build bespoke business websites, corporate flagships, and portfolio experiences engineered to communicate authority and convert visitors.',
    deliverables: [
      'Editorial visual direction and typography system',
      'Mobile-first responsive frontend development',
      'Sub-second Core Web Vitals performance tuning',
      'Accessible semantic structure (WCAG AA compliant)',
      'Headless CMS or static markdown content integration',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    href: '/services/web-development',
  },
  {
    id: 'ecommerce',
    index: '02',
    title: 'Conversion-Engineered E-Commerce',
    category: 'Digital Commerce Systems',
    icon: ShoppingBag,
    accent: '#06B6D4',
    summary:
      'Online shopping experiences designed to eliminate checkout friction, manage complex product catalogues, and drive measurable transaction volume.',
    deliverables: [
      'Custom storefront design and user experience',
      'High-speed product filtering and search indexing',
      'Frictionless checkout and payment gateway integrations',
      'Inventory, order webhook, and logistics routing',
      'Mobile conversion optimization and analytics setup',
    ],
    techStack: ['Shopify Storefront API', 'Stripe', 'Next.js', 'PostgreSQL'],
    href: '/services/ecommerce',
  },
  {
    id: 'custom-software',
    index: '03',
    title: 'Custom Software & Operational Applications',
    category: 'Business Systems & Dashboards',
    icon: Code2,
    accent: '#10B981',
    summary:
      'Purpose-built business platforms, customer portals, booking systems, and internal operational dashboards engineered when generic SaaS tools fall short.',
    deliverables: [
      'Custom database schema and full-stack application architecture',
      'Role-based access control (RBAC) and security isolation',
      'Executive reporting dashboards with real-time analytics',
      'Robust REST & GraphQL API implementations',
      'Automated background jobs and event data pipelines',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'REST / GraphQL'],
    href: '/services/custom-software',
  },
  {
    id: 'ai-solutions',
    index: '04',
    title: 'Applied AI Integrations & Automation',
    category: 'Intelligent Workflow Tools',
    icon: Sparkles,
    accent: '#A78BFA',
    summary:
      'Pragmatic machine intelligence integrated directly into existing workflows—focusing on concrete business utility rather than speculative novelty.',
    deliverables: [
      'LLM API integrations and Retrieval-Augmented Generation (RAG)',
      'Automated document parsing, extraction, and indexing',
      'Intelligent conversational customer support interfaces',
      'Custom business logic automation and alerting triggers',
      'Cost controls, prompt evaluation, and error handling',
    ],
    techStack: ['OpenAI / Anthropic APIs', 'LangChain', 'Python', 'Vector DBs'],
    href: '/services/ai-solutions',
  },
  {
    id: 'maintenance',
    index: '05',
    title: 'Ongoing Technical Partnership & Retainers',
    category: 'Systems Continuity & SLA',
    icon: Wrench,
    accent: '#38BDF8',
    summary:
      'A dedicated technical partnership for companies requiring ongoing feature development, proactive performance audits, and guaranteed engineering support.',
    deliverables: [
      'Continuous uptime and Core Web Vitals monitoring',
      'Proactive dependency and security vulnerability audits',
      'Iterative feature development and backlog execution',
      'Guaranteed response SLAs with direct engineer access',
      'Quarterly architectural reviews and optimization passes',
    ],
    techStack: ['CI/CD Automation', 'Vercel / Edge', 'GitHub Actions', 'Sentry'],
    href: '/services/maintenance',
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = SERVICES_DATA[activeTab];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-[#07070C] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>CAPABILITIES // FIVE CORE DISCIPLINES</span>
            </div>
            <h2 id="services-heading" className="text-display-lg text-white">
              Disciplines structured around{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                operational reality.
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed font-light">
              We do not sell generic packages. Every engagement is architected around your specific
              technical constraints, operational workflows, and commercial goals.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-sm font-semibold text-white transition-all shrink-0"
          >
            <span>View Full Specifications</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Architectural Service Dossier Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Discipline Index (5 cols) */}
          <div
            role="tablist"
            aria-label="Studio Disciplines"
            className="lg:col-span-5 flex flex-col gap-2"
          >
            {SERVICES_DATA.map((service, index) => {
              const isSelected = activeTab === index;
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setActiveTab((index + 1) % SERVICES_DATA.length);
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setActiveTab((index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
                    }
                  }}
                  className={`group relative text-left p-4 md:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/[0.06] border-white/30 shadow-lg'
                      : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isSelected ? 'text-violet-300' : 'text-white/40'
                      }`}
                    >
                      {service.index}
                    </span>
                    <div>
                      <h3
                        className={`text-sm md:text-base font-medium transition-colors ${
                          isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span className="text-[11px] font-mono text-white/40 block mt-0.5">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'text-white bg-white/10' : 'text-white/30'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Specification Dossier (7 cols) */}
          <div
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-9 rounded-3xl border border-white/10 bg-[#0A0A10] shadow-2xl relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                      DISCIPLINE {activeService.index} SPECIFICATION
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {activeService.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-white/70">
                    {activeService.category}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light mb-6">
                  {activeService.summary}
                </p>

                {/* Scope & Deliverables */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-white/50 uppercase block mb-3">
                    CORE DELIVERABLES &amp; ARCHITECTURAL OUTPUTS
                  </span>
                  <div className="flex flex-col gap-2">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-white/80 leading-relaxed"
                      >
                        <CheckCircle2 size={14} className="mt-0.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="pt-4 border-t border-white/[0.08] mb-6">
                  <span className="text-xs font-mono text-white/50 uppercase block mb-2">
                    PRIMARY TECHNOLOGY STANDARDS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.03] border border-white/[0.08] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/start-a-project?service=${activeService.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all shadow-lg shadow-violet-900/30"
                  >
                    <span>Commission This Discipline</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href={activeService.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <span>Inspect Specification</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
