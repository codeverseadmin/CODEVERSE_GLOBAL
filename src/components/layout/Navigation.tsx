'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Website Design & Development', href: '/services/web-development', description: 'Business sites, landing pages & portfolios' },
      { label: 'E-commerce & Digital Commerce', href: '/services/ecommerce', description: 'Online stores & shopping experiences' },
      { label: 'Custom Software & Apps', href: '/services/custom-software', description: 'Dashboards, portals & custom systems' },
      { label: 'AI & Intelligent Solutions', href: '/services/ai-solutions', description: 'AI integrations & workflow automation' },
      { label: 'Ongoing Development & Support', href: '/services/maintenance', description: 'Maintenance & continued development' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'Labs', href: '/products' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Keyboard handling for services dropdown and mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setServicesOpen(false);
      setMobileOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Click outside to close services dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-xl flex items-center justify-between h-16 md:h-18"
      >
        {/* ── Wordmark ── */}
        <Link
          href="/"
          aria-label="CODEVERSE — home"
          className="flex items-center gap-2 group shrink-0"
        >
          <span
            className="font-bold text-xl tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            CODE<span className="text-[var(--color-violet)]">VERSE</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul
          role="list"
          className="hidden md:flex items-center gap-1"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} ref={servicesRef} className="relative">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                    isActive(link.href)
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  )}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={cn('transition-transform duration-200', servicesOpen && 'rotate-180')}
                  />
                </button>

                {/* Services dropdown */}
                {servicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors duration-150 group"
                        >
                          <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-violet-light)] transition-colors duration-150">
                            {child.label}
                          </span>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[var(--color-border)] p-2">
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors duration-150 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      >
                        View all services
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                    isActive(link.href)
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200 shadow-lg shadow-violet-900/30"
          >
            Start a Project
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors duration-150"
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed inset-0 top-16 bg-[var(--color-bg)] z-40 overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="container-xl py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mt-4 mb-1">
                    Services
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex flex-col gap-0.5 px-3 py-3 rounded-lg hover:bg-[var(--color-surface)] transition-colors duration-150"
                    >
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">
                        {child.label}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {child.description}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-3 text-base font-medium rounded-lg transition-colors duration-150',
                    isActive(link.href)
                      ? 'text-[var(--color-text-primary)] bg-[var(--color-surface)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <Link
                href="/start-a-project"
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white rounded-lg bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-colors duration-200"
              >
                Start a Project
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-4 py-3 mt-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface)] transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
