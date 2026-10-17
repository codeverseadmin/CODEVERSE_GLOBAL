import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import ProjectInquiryForm from '@/components/forms/ProjectInquiryForm';

export const metadata: Metadata = buildMetadata({
  title: 'Start a Project',
  description: 'Tell us about your project. CODEVERSE will review your enquiry and respond with the next steps.',
  path: '/start-a-project',
});

export default function StartAProjectPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section aria-labelledby="project-form-heading" className="section-padding-sm">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Start a Project</p>
          <h1 id="project-form-heading" className="text-display-lg text-[var(--color-text-primary)] mb-6">
            Tell us what you&apos;re{' '}
            <em className="not-italic gradient-text-violet">working on.</em>
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Fill in the details below and we&apos;ll review your requirements. We typically
            respond within two business days with an outline of how we might approach the project.
          </p>
        </div>
      </section>

      {/* Form */}
      <section aria-label="Project enquiry form" className="section-padding border-t border-[var(--color-border)]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ProjectInquiryForm />
            </div>

            {/* Sidebar */}
            <aside aria-label="What to expect" className="lg:col-span-2">
              <div className="sticky top-24 flex flex-col gap-6">
                <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-4">
                  <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">What to expect</h2>
                  <ul role="list" className="flex flex-col gap-3">
                    {[
                      'We review your enquiry within two business days.',
                      'We respond with questions or an initial approach, not a generic pitch.',
                      'We discuss scope, timeline, and budget clearly before any commitment.',
                      'All information you share is handled with care and not shared with third parties.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="w-5 h-5 rounded-full border border-[var(--color-violet)]/40 bg-[var(--color-violet)]/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold text-[var(--color-violet-light)]"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    Not ready to fill in a form? You can also reach us by{' '}
                    <a
                      href="/contact"
                      className="text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      email or WhatsApp
                    </a>
                    .
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
