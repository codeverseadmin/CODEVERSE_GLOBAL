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
    title: 'Website Design & Development',
    category: 'Digital Flagships & Portals',
    icon: Monitor,
    accent: '#8B5CF6',
    description:
      'We design and engineer bespoke websites, corporate digital flagships, and editorial portfolios that combine cinematic aesthetics with sub-second performance and clean semantic structure.',
    deliverables: [
      'Bespoke visual architecture & typography',
      'Mobile-first responsive engineering',
      'Sub-second Core Web Vitals optimization',
      'Accessible semantic structure (WCAG AA)',
      'Custom headless CMS or markdown integrations',
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    href: '/services/web-development',
  },
  {
    id: 'ecommerce',
    index: '02',
    title: 'E-commerce & Digital Commerce',
    category: 'Conversion & Transaction Systems',
    icon: ShoppingBag,
    accent: '#06B6D4',
    description:
      'High-conversion online stores and frictionless shopping experiences built to turn interest into transactions, with customized product catalogues and secure checkout architectures.',
    deliverables: [
      'Custom storefront design & interaction',
      'High-performance product catalogue & filtering',
      'Secure payment gateway & checkout flows',
      'Inventory & order management integrations',
      'Conversion rate & checkout performance tuning',
    ],
    techStack: ['Shopify Storefront API', 'Stripe', 'Next.js', 'PostgreSQL', 'Edge Cache'],
    href: '/services/ecommerce',
  },
  {
    id: 'custom-software',
    index: '03',
    title: 'Custom Software & Web Applications',
    category: 'Operational Systems & Workflows',
    icon: Code2,
    accent: '#10B981',
    description:
      'Purpose-built business platforms, internal dashboards, booking systems, and client portals engineered when off-the-shelf software falls short of your operational complexity.',
    deliverables: [
      'Full-stack system architecture & database design',
      'Interactive executive dashboards & analytics',
      'Granular role-based authentication (RBAC)',
      'Reliable REST & GraphQL API implementations',
      'Automated background jobs & data pipelines',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'REST / GraphQL', 'Docker'],
    href: '/services/custom-software',
  },
  {
    id: 'ai-solutions',
    index: '04',
    title: 'AI & Intelligent Solutions',
    category: 'Applied Machine Intelligence',
    icon: Sparkles,
    accent: '#A78BFA',
    description:
      'Practical AI integrations and automated agentic pipelines that deliver concrete business utility—avoiding speculative hype in favor of measurable workflow acceleration.',
    deliverables: [
      'LLM & vector database integration (RAG)',
      'Automated document ingestion & extraction',
      'Intelligent conversational search interfaces',
      'Custom business logic workflow automation',
      'Rigorous model evaluation & cost controls',
    ],
    techStack: ['OpenAI / Anthropic APIs', 'LangChain', 'Pinecone', 'Python', 'Node.js'],
    href: '/services/ai-solutions',
  },
  {
    id: 'maintenance',
    index: '05',
    title: 'Ongoing Development & Support',
    category: 'Systems Continuity & Retainers',
    icon: Wrench,
    accent: '#38BDF8',
    description:
      'A dedicated technical partnership ensuring your web applications and digital infrastructure remain secure, performant, and continuously updated as your business expands.',
    deliverables: [
      'Continuous performance monitoring & optimization',
      'Proactive dependency & security patch audits',
      'Iterative feature rollouts & backlog execution',
      'Guaranteed response times & SLA commitments',
      'Direct communication with lead engineers',
    ],
    techStack: ['CI/CD Automation', 'Vercel / AWS', 'Sentry', 'GitHub Actions', 'Docker'],
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
      className="section-padding bg-[#07070A] border-y border-white/[0.08] relative overflow-hidden"
    >
      {/* Background illumination */}
      <div
        aria-hidden="true"
        className="radial-glow w-[500px] h-[500px] bg-violet-600/10 top-1/2 left-[-100px] -translate-y-1/2 pointer-events-none"
      />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>STUDIO DISCIPLINES &bull; CORE CAPABILITIES</span>
            </div>
            <h2 id="services-heading" className="text-display-lg text-[var(--color-text-primary)]">
              Services engineered for{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                enduring impact.
              </em>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] max-w-xl mt-3 leading-relaxed">
              We design and construct digital products with meticulous attention to architecture,
              usability, and business longevity. Select an area below to inspect our deliverables.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors duration-200 shrink-0"
          >
            <span>View All Service Specifications</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Interactive Studio Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Tabs (5 cols) */}
          <div
            role="tablist"
            aria-label="Studio Services"
            className="lg:col-span-5 flex flex-col gap-2.5"
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
                  className={`group relative text-left p-4 md:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/[0.06] border-violet-500/50 shadow-lg shadow-violet-950/20'
                      : 'bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-xs font-mono font-semibold transition-colors ${
                        isSelected ? 'text-violet-300' : 'text-white/40 group-hover:text-white/70'
                      }`}
                    >
                      {service.index}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`text-sm md:text-base font-medium transition-colors ${
                          isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </span>
                      <span className="text-[11px] font-mono text-white/40">{service.category}</span>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'text-white/30 group-hover:text-white/60'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Detail Workstation (7 cols) */}
          <div
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="p-6 md:p-9 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0A0A10] shadow-2xl relative overflow-hidden"
              >
                {/* Visual accent top edge */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${activeService.accent} 0%, transparent 100%)`,
                  }}
                />

                {/* Service Metadata Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `color-mix(in srgb, ${activeService.accent} 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${activeService.accent} 30%, transparent)`,
                      }}
                    >
                      <activeService.icon size={20} style={{ color: activeService.accent }} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block">
                        Discipline {activeService.index}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium text-white">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]"
                    style={{ color: activeService.accent }}
                  >
                    {activeService.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-light">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-8">
                  <span className="text-xs font-mono text-white/60 block mb-3 uppercase tracking-wider">
                    Core Architectural Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0"
                          style={{ color: activeService.accent }}
                        />
                        <span className="text-xs text-white/80 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Matrix */}
                <div className="mb-8 pt-4 border-t border-white/[0.06]">
                  <span className="text-xs font-mono text-white/60 block mb-2.5 uppercase tracking-wider">
                    Technology &amp; Standards:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.03] border border-white/[0.06] text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/start-a-project?service=${activeService.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all shadow-md shadow-violet-900/30"
                  >
                    <span>Commission This Service</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  <Link
                    href={activeService.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/80 border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-colors"
                  >
                    <span>Full Specification</span>
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
