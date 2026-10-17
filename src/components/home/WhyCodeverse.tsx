import { MessageSquare, Layers, Target, ClipboardList, Zap, Box } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: 'Direct communication',
    description:
      'You work directly with the people building your product. No account managers acting as intermediaries.',
  },
  {
    icon: Layers,
    title: 'Design and engineering together',
    description:
      'We consider how something looks and how it works at the same time, not in sequence.',
  },
  {
    icon: Target,
    title: 'Solutions tailored to your requirements',
    description:
      'We do not apply the same template to every client. We understand the specific need and build for it.',
  },
  {
    icon: ClipboardList,
    title: 'Clear scope and milestones',
    description:
      'We define what is in scope, what is not, and what each milestone involves before work begins.',
  },
  {
    icon: Zap,
    title: 'Focus on usability and performance',
    description:
      'We build things that work well and work fast, not just things that look impressive in a demo.',
  },
  {
    icon: Box,
    title: 'Experience building original products',
    description:
      'We build our own products under CODEVERSE Labs, which deepens our understanding of product thinking.',
  },
];

export default function WhyCodeverse() {
  return (
    <section
      aria-labelledby="why-codeverse-heading"
      className="section-padding bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-xl">
        <div className="mb-14">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Why CODEVERSE</p>
          <h2 id="why-codeverse-heading" className="text-display-lg text-[var(--color-text-primary)] max-w-xl">
            Principles we hold to on{' '}
            <em className="not-italic gradient-text-violet">every project.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-border-hover)] transition-colors duration-200"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(139,92,246,0.1)' }}
                aria-hidden="true"
              >
                <Icon size={18} className="text-[var(--color-violet-light)]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
