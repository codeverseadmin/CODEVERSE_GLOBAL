import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getLabsProjects } from '@/lib/data/projects';
import { StatusBadge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function LabsSection() {
  const labsProjects = getLabsProjects();

  return (
    <section
      aria-labelledby="labs-heading"
      className="section-padding bg-[var(--color-surface)] border-y border-[var(--color-border)]"
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="CODEVERSE Labs"
            title="We don't just build for others."
            titleItalic="We build what comes next."
            id="labs-heading"
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200 shrink-0"
          >
            View all products
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {labsProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-border-hover)] transition-all duration-300 group"
            >
              {/* Icon placeholder */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
                aria-hidden="true"
              >
                <span className="text-xl font-bold text-[var(--color-violet-light)]">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-violet-light)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn more
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-emerald)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    aria-label={`Open ${project.title} (opens in a new tab)`}
                  >
                    View live
                    <ArrowRight size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
