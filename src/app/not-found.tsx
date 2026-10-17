import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — CODEVERSE',
};

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-16">
      <div className="container-xl max-w-2xl text-center flex flex-col gap-6">
        <span className="text-label text-[var(--color-violet-light)]">404</span>
        <h1 className="text-display-lg text-[var(--color-text-primary)]">
          Page not found
        </h1>
        <p className="text-base text-[var(--color-text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--color-text-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] transition-all duration-200"
          >
            View our work
          </Link>
        </div>
      </div>
    </div>
  );
}
