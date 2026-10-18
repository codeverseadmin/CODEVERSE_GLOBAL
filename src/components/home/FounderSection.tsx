'use client';

import { siteConfig } from '@/lib/data/site';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="founder-heading"
      className="section-padding bg-[#040407] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div
        aria-hidden="true"
        className="radial-glow w-[500px] h-[500px] bg-violet-600/10 bottom-[-100px] right-[-100px] pointer-events-none"
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio Insignia / Monogram Artifact (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div
              className="group relative aspect-square max-w-[340px] w-full rounded-3xl border border-white/[0.08] bg-[#08080E] flex flex-col items-center justify-between p-8 text-center shadow-2xl hover:border-violet-500/30 transition-all duration-500"
              role="img"
              aria-label="CODEVERSE Studio Insignia and Verification Seal"
            >
              {/* Corner Coordinate Badges */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-white/30 pb-2 border-b border-white/[0.04]">
                <span>CV // INSIGNIA</span>
                <span>EST. 2024</span>
              </div>

              {/* Glowing Monogram Emblem */}
              <div className="my-auto relative flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-violet-950/40 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                  }}
                  aria-hidden="true"
                >
                  <span className="text-3xl font-bold tracking-tight text-white font-mono">
                    CV
                  </span>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-base font-semibold text-white tracking-wide">CODEVERSE</p>
                  <p className="text-xs font-mono text-violet-300/80 mt-1">Founder-Led Digital Studio</p>
                </div>
              </div>

              {/* Bottom Verification Seal */}
              <div className="w-full pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/40">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AUTHENTICATED
                </span>
                <span>LEARN &bull; CODE &bull; GROW</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-xs font-mono text-violet-300 w-fit">
              <Sparkles size={12} className="text-violet-400" />
              <span>THE STUDIO IDENTITY</span>
            </div>

            <h2 id="founder-heading" className="text-display-md text-[var(--color-text-primary)]">
              Built by engineers who care about{' '}
              <em className="not-italic font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300">
                what gets shipped.
              </em>
            </h2>

            <div className="flex flex-col gap-4 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
              {founder.bio ? (
                <p>{founder.bio}</p>
              ) : (
                <>
                  <p>
                    CODEVERSE was founded on a simple conviction: that modern digital products
                    suffer from an unnecessary divorce between aesthetic vision and technical craftsmanship.
                    Too many agencies create flashy visual designs that buckle under real-world
                    traffic, or build generic software that lacks identity.
                  </p>
                  <p>
                    By maintaining an active internal laboratory alongside client engagements, we test
                    architectural patterns on our own products before bringing them to client systems.
                    This dual discipline keeps our engineering instincts sharp, our dependencies minimal,
                    and our client partnerships deeply focused on lasting value.
                  </p>
                </>
              )}
            </div>

            {/* Founder Signoff (Strictly Founder, CODEVERSE — never CEO) */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  {founder.name || 'CODEVERSE Technical Leadership'}
                </p>
                <p className="text-xs font-mono text-violet-300/80 mt-0.5">
                  {founder.title}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span>[DIRECT ACCESS &bull; NO INTERMEDIARIES]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
