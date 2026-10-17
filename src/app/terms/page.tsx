import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for the CODEVERSE website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section aria-labelledby="terms-heading" className="section-padding">
        <div className="container-xl max-w-3xl">
          <p className="text-label text-[var(--color-violet-light)] mb-4">Legal</p>
          <h1 id="terms-heading" className="text-display-md text-[var(--color-text-primary)] mb-8">
            Terms of Use
          </h1>

          <div className="flex flex-col gap-8 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <section aria-labelledby="terms-acceptance">
              <h2 id="terms-acceptance" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                1. Acceptance
              </h2>
              <p>
                By accessing this website, you agree to these terms. If you do not agree,
                please do not use this website.
              </p>
            </section>

            <section aria-labelledby="terms-content">
              <h2 id="terms-content" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                2. Website content
              </h2>
              <p>
                The content on this website is provided for general information about CODEVERSE
                and its services. We aim to keep the information accurate and current. We make
                no guarantees about completeness or accuracy.
              </p>
            </section>

            <section aria-labelledby="terms-ip">
              <h2 id="terms-ip" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                3. Intellectual property
              </h2>
              <p>
                The CODEVERSE name, visual identity, and website content are the property of
                CODEVERSE. You may not reproduce or use them without permission.
              </p>
              <p className="mt-2">
                Client project work described on this website remains subject to the
                intellectual property terms agreed in the relevant client engagement.
              </p>
            </section>

            <section aria-labelledby="terms-liability">
              <h2 id="terms-liability" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                4. Limitation of liability
              </h2>
              <p>
                CODEVERSE is not liable for any direct or indirect loss arising from your use
                of this website or reliance on its content.
              </p>
            </section>

            <section aria-labelledby="terms-links">
              <h2 id="terms-links" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                5. External links
              </h2>
              <p>
                This website may contain links to external websites. We are not responsible for
                the content or practices of those sites.
              </p>
            </section>

            <section aria-labelledby="terms-changes">
              <h2 id="terms-changes" className="text-base font-semibold text-[var(--color-text-primary)] mb-3">
                6. Changes
              </h2>
              <p>
                These terms may be updated as the website or our services change. Continued
                use of this website constitutes acceptance of the current terms.
              </p>
            </section>

            <p className="text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
              Last reviewed: October 2026. These terms are a starting point and should be
              reviewed by appropriate legal counsel before being treated as final and binding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
