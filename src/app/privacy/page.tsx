import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Notice',
  description: 'Privacy notice for the CODEVERSE website — how we handle enquiry data and what services we use.',
  path: '/privacy',
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section aria-labelledby="privacy-heading" className="section-padding">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Legal</p>
          <h1 id="privacy-heading" className="text-display-md text-[var(--color-text-primary)] mb-8">
            Privacy Notice
          </h1>

          <div className="prose-content flex flex-col gap-8 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <section aria-labelledby="privacy-intro">
              <h2 id="privacy-intro" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                1. Who we are
              </h2>
              <p>
                CODEVERSE is a digital technology studio. This privacy notice explains how we
                handle information submitted through this website. If you have questions, contact
                us at the address provided on our{' '}
                <Link href="/contact" className="text-[var(--color-violet-light)] hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-collect">
              <h2 id="privacy-collect" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                2. Information we collect
              </h2>
              <p>When you submit a project enquiry through this website, we collect:</p>
              <ul className="list-disc list-inside mt-2 flex flex-col gap-1 text-[var(--color-text-secondary)]">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your company name (if provided)</li>
                <li>Details about your project requirements</li>
                <li>Your approximate budget and timeline preferences (if provided)</li>
                <li>How you heard about us (if provided)</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information, create user accounts, or retain browsing
                data beyond standard server logs.
              </p>
            </section>

            <section aria-labelledby="privacy-use">
              <h2 id="privacy-use" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                3. How we use your information
              </h2>
              <p>We use your submission to:</p>
              <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
                <li>Review and respond to your project enquiry</li>
                <li>Communicate about your project requirements</li>
              </ul>
              <p className="mt-3">
                We do not use your information for marketing without your explicit consent. We
                do not sell or share your information with third parties except as necessary to
                deliver our services (for example, email delivery services).
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                4. Data retention
              </h2>
              <p>
                Enquiry data is retained for the duration of our communications and for a
                reasonable period thereafter for business record-keeping. If you would like your
                data removed, please contact us directly.
              </p>
            </section>

            <section aria-labelledby="privacy-services">
              <h2 id="privacy-services" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                5. Third-party services
              </h2>
              <p>
                This website may use third-party services for hosting and email delivery. These
                services are chosen with data protection in mind. We will update this notice to
                name specific services as they are configured.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                6. Your rights
              </h2>
              <p>
                You have the right to request access to, correction of, or deletion of
                information we hold about you. To exercise these rights, contact us through
                the details on our{' '}
                <Link href="/contact" className="text-[var(--color-violet-light)] hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-updates">
              <h2 id="privacy-updates" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                7. Updates to this notice
              </h2>
              <p>
                This privacy notice will be updated as our services evolve. Material changes
                will be noted on this page. This notice reflects the current implementation of
                this website.
              </p>
            </section>

            <p className="text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
              Last reviewed: October 2026. This notice does not constitute legal advice. If
              you operate in a regulated industry or jurisdiction with specific compliance
              requirements, obtain appropriate legal guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
