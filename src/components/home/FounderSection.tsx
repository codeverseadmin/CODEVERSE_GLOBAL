import { siteConfig } from '@/lib/data/site';

export default function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section
      aria-labelledby="founder-heading"
      className="section-padding"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Studio Insignia / Monogram */}
          <div
            className="aspect-square max-w-sm w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col items-center justify-center gap-4 mx-auto lg:mx-0 p-8 text-center"
            role="img"
            aria-label="CODEVERSE Studio Insignia"
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl shadow-violet-950/20"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}
              aria-hidden="true"
            >
              <span className="text-3xl font-bold tracking-tight text-[var(--color-violet-light)]">
                CV
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">CODEVERSE</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Founder-Led Digital Studio</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-label text-[var(--color-violet-light)]">The Studio</p>

            <h2 id="founder-heading" className="text-display-md text-[var(--color-text-primary)]">
              Built by someone who cares about{' '}
              <em className="not-italic gradient-text-violet">what gets shipped.</em>
            </h2>

            <div className="flex flex-col gap-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {founder.bio ? (
                <p>{founder.bio}</p>
              ) : (
                <>
                  <p>
                    CODEVERSE was founded with a single guiding principle: to build digital
                    experiences and software systems that are genuinely useful, elegantly
                    engineered, and built to endure beyond launch day.
                  </p>
                  <p>
                    The studio unites bespoke client technology services with internal product
                    incubation. Working simultaneously on client solutions and proprietary software
                    keeps our engineering standards high, our architectural instincts sharp, and
                    our solutions grounded in real operational utility.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {founder.name || 'CODEVERSE Technical Leadership'}
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                {founder.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
