'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Terminal } from 'lucide-react';
import { siteConfig, whatsappUrl, mailtoUrl } from '@/lib/data/site';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section
      id="contact-cta"
      aria-labelledby="final-cta-heading"
      className="section-padding border-t border-white/[0.08] relative overflow-hidden bg-[#030305]"
    >
      {/* Background illumination */}
      <div
        aria-hidden="true"
        className="radial-glow w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-violet-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Availability Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium text-emerald-300 uppercase tracking-wide">
              OPEN FOR SELECT Q4/Q1 COMMISSIONS
            </span>
          </motion.div>

          {/* Cinematic Editorial Heading */}
          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-xl text-[var(--color-text-primary)] font-medium tracking-tight"
          >
            Ready to engineer{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300 block sm:inline">
              what&apos;s next?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-light"
          >
            Tell us about the digital experience, web application, or software platform you are
            planning. We review every brief thoroughly and reply with clear next steps.
          </motion.p>

          {/* Action Pathways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/start-a-project"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all duration-300 shadow-xl shadow-violet-900/40 hover:shadow-violet-900/60 hover:-translate-y-0.5"
            >
              <span>Initiate Project Brief</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {siteConfig.contact.whatsapp ? (
              <a
                href={whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white rounded-xl border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all duration-300"
              >
                <MessageCircle size={18} className="text-emerald-400" aria-hidden="true" />
                <span>Direct WhatsApp</span>
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                <span>Direct Contact</span>
              </Link>
            )}
          </motion.div>

          {/* Telemetry Contact Strip */}
          {siteConfig.contact.email && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-white/50"
            >
              <Terminal size={12} className="text-violet-400" />
              <span>DIRECT DISPATCH:</span>
              <a
                href={mailtoUrl(siteConfig.contact.email, 'Project Consultation — CODEVERSE GLOBAL')}
                className="text-violet-300 hover:text-white transition-colors underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
