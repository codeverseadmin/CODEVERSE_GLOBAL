import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig, whatsappUrl, mailtoUrl } from '@/lib/data/site';

function GithubIcon({ size = 15, ...props }: { size?: number; [key: string]: unknown }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 15, ...props }: { size?: number; [key: string]: unknown }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 15, ...props }: { size?: number; [key: string]: unknown }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function InstagramIcon({ size = 15, ...props }: { size?: number; [key: string]: unknown }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 15, ...props }: { size?: number; [key: string]: unknown }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

const SERVICES_LINKS = [
  { label: 'Website Design & Development', href: '/services/web-development' },
  { label: 'E-commerce', href: '/services/ecommerce' },
  { label: 'Custom Software', href: '/services/custom-software' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Ongoing Support', href: '/services/maintenance' },
];

const WORK_LINKS = [
  { label: 'All Projects', href: '/work' },
  { label: 'CODEVERSE Labs', href: '/products' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Start a Project', href: '/start-a-project' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const socialIcons: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const socialLabels: Record<string, string> = {
  github: 'CODEVERSE on GitHub',
  linkedin: 'CODEVERSE on LinkedIn',
  twitter: 'CODEVERSE on Twitter / X',
  instagram: 'CODEVERSE on Instagram',
  youtube: 'CODEVERSE on YouTube',
};

export default function Footer() {
  const activeSocials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      {/* ── Main Footer Grid ── */}
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" aria-label="CODEVERSE — home" className="inline-flex">
              <span className="font-bold text-xl tracking-tight text-[var(--color-text-primary)]">
                CODE<span className="text-[var(--color-violet)]">VERSE</span>
              </span>
            </Link>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              A founder-led digital technology studio designing and developing websites, e-commerce experiences, custom software, and intelligent solutions.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              {siteConfig.contact.email && (
                <a
                  href={mailtoUrl(siteConfig.contact.email)}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-violet-light)] transition-colors duration-200"
                >
                  <Mail size={14} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              )}
              {siteConfig.contact.whatsapp && (
                <a
                  href={whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-violet-light)] transition-colors duration-200"
                >
                  WhatsApp
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Social */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3">
                {activeSocials.map(([key, url]) => {
                  const Icon = socialIcons[key];
                  return Icon ? (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLabels[key]}
                      className="flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-colors duration-200"
                    >
                      <Icon size={15} aria-hidden="true" />
                    </a>
                  ) : null;
                })}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label text-[var(--color-text-muted)]">Services</h3>
            <ul role="list" className="flex flex-col gap-2.5">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label text-[var(--color-text-muted)]">Work</h3>
            <ul role="list" className="flex flex-col gap-2.5">
              {WORK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-label text-[var(--color-text-muted)]">Company</h3>
            <ul role="list" className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Footer Bottom Bar ── */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} CODEVERSE. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {siteConfig.descriptor}
          </p>
        </div>
      </div>
    </footer>
  );
}
