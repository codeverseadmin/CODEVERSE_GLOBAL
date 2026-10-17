const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We take time to understand your business, your users, your objectives, and your constraints before proposing anything.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We agree on scope, deliverables, budget, and milestones so that expectations are clear from the start.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We develop the visual direction and user experience — establishing how the product looks, feels, and behaves.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'We implement, test, and refine — building the solution with care for quality, performance, and correctness.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'We deploy, hand over, and provide the support agreed in scope — making sure you can move forward with confidence.',
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="section-padding"
    >
      <div className="container-xl">
        <div className="mb-14">
          <p className="text-label text-[var(--color-violet-light)] mb-4">How We Work</p>
          <h2 id="process-heading" className="text-display-lg text-[var(--color-text-primary)] max-w-xl">
            A process built around{' '}
            <em className="not-italic gradient-text-violet">clarity.</em>
          </h2>
        </div>

        {/* Steps — horizontal timeline on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-col gap-4 group">
              {/* Connector line + step number */}
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                <div className="flex items-center w-full md:flex-col md:items-start">
                  <div
                    className="w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center border border-[var(--color-violet)]/40 bg-[var(--color-violet)]/10 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold text-[var(--color-violet-light)]">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden md:block h-px flex-1 mx-3"
                      style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.05) 100%)' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
