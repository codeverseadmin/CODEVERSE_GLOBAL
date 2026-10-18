'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { siteConfig, whatsappUrl, mailtoUrl } from '@/lib/data/site';

export default function FinalCTA() {
  return (
    <section
      id="contact-cta"
      aria-labelledby="final-cta-heading"
      className="section-padding relative overflow-hidden bg-[#040407]"
    >
      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#08080F] p-8 md:p-14 shadow-2xl flex flex-col items-center text-center gap-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>COMMISSIONS // ACCEPTING Q4/Q1 ENGAGEMENTS</span>
          </div>

          {/* Heading */}
          <h2
            id="final-cta-heading"
            className="text-display-lg text-white font-medium tracking-tight"
          >
            Have a project that requires{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
              rigorous engineering?
            </span>
          </h2>

          <p className="text-base md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-light">
            Tell us about your digital platform, custom software application, or upcoming redesign.
            We review every brief personally and reply within two business days with concrete next steps.
          </p>

          {/* What to expect checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl text-left text-xs font-mono text-white/70">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>2-day brief review</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>Direct engineer scoping</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>Clear fixed milestones</span>
            </div>
          </div>

          {/* Action Pathways */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
            <Link
              href="/start-a-project"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all duration-200 shadow-xl shadow-violet-900/30 hover:-translate-y-0.5"
            >
              <span>Initiate Project Brief</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {siteConfig.contact.whatsapp ? (
              <a
                href={whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white/90 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                <MessageCircle size={18} className="text-emerald-400" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white/90 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                <span>Direct Contact Details</span>
              </Link>
            )}
          </div>

          {/* Email dispatch strip */}
          {siteConfig.contact.email && (
            <div className="pt-4 border-t border-white/[0.08] w-full flex items-center justify-center gap-2 text-xs font-mono text-white/50">
              <Mail size={13} className="text-white/40" />
              <span>DIRECT INBOX:</span>
              <a
                href={mailtoUrl(siteConfig.contact.email, 'Project Consultation — CODEVERSE GLOBAL')}
                className="text-white/90 hover:text-violet-300 transition-colors underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
