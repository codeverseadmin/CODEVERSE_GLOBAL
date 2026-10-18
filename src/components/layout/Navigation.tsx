'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Website Design & Development',
        href: '/services/web-development',
        description: 'Bespoke digital flagships, portfolios & landing pages',
      },
      {
        label: 'E-commerce & Digital Commerce',
        href: '/services/ecommerce',
        description: 'Conversion-engineered storefronts & checkout systems',
      },
      {
        label: 'Custom Software & Web Apps',
        href: '/services/custom-software',
        description: 'Bespoke dashboards, portals & internal platforms',
      },
      {
        label: 'AI & Intelligent Solutions',
        href: '/services/ai-solutions',
        description: 'Practical LLM, vector search & workflow automations',
      },
      {
        label: 'Ongoing Development & Support',
        href: '/services/maintenance',
        description: 'Dedicated long-term technical engineering retainers',
      },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'Labs', href: '/products' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Scroll detection & progress bar calculation
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(winScroll > 20);
    };

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Keyboard handling for escape
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
          ? 'bg-[#030305]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
          : 'bg-transparent'
      )}
    >
      {/* Scroll Progress Indicator Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 transition-all duration-75 ease-out z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        aria-label="Main navigation"
        className="container-xl flex items-center justify-between h-16 md:h-20"
      >
        {/* Brand Wordmark & Studio Monogram */}
        <Link
          href="/"
          aria-label="CODEVERSE — Home"
          className="flex items-center gap-3 group shrink-0"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-violet-950/60 border border-violet-500/30 text-xs font-mono font-bold text-violet-300 group-hover:border-violet-400 transition-colors"
            aria-hidden="true"
          >
            CV
          </div>
          <span
            className="font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-violet-200 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            CODE<span className="text-[var(--color-violet)]">VERSE</span>
          </span>
        </Link>

        {/* Live Studio Telemetry Capsule (Center) */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>STUDIO ONLINE</span>
          <span className="text-white/20">|</span>
          <span className="text-white/40">23.8° N · 90.4° E</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul role="list" className="hidden md:flex items-center gap-1.5">
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
                    'flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive(link.href)
                      ? 'text-white bg-white/[0.06]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={cn(
                      'transition-transform duration-200 opacity-60',
                      servicesOpen && 'rotate-180 opacity-100 text-violet-400'
                    )}
                  />
                </button>

                {/* Services Dropdown Panel */}
                {servicesOpen && (
                  <div
                    id="services-menu"
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-88 bg-[#09090F]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden p-2.5 z-50"
                  >
                    <div className="flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="flex flex-col gap-0.5 px-3.5 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-150 group"
                        >
                          <span className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors duration-150">
                            {child.label}
                          </span>
                          <span className="text-xs text-white/50 leading-snug">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-white/[0.06] mt-2 pt-2 px-1">
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.04] text-xs font-mono text-violet-300 hover:text-white transition-colors"
                      >
                        <span>VIEW ALL SERVICE ARCHITECTURES</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
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
                    'px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive(link.href)
                      ? 'text-white bg-white/[0.06]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/start-a-project"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all duration-300 shadow-md shadow-violet-900/30 hover:shadow-violet-900/50"
          >
            <span>Start a Project</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-0 top-16 bg-[#040407]/98 backdrop-blur-2xl z-40 overflow-y-auto border-t border-white/[0.08]"
        >
          <nav aria-label="Mobile navigation" className="container-xl py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col gap-1 mb-2">
                  <div className="px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-widest text-violet-300">
                    Services
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex flex-col gap-0.5 px-3.5 py-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                    >
                      <span className="text-sm font-medium text-white">{child.label}</span>
                      <span className="text-xs text-white/50">{child.description}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-3 text-base font-medium rounded-xl transition-colors',
                    isActive(link.href)
                      ? 'text-white bg-white/[0.06]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
              <Link
                href="/start-a-project"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-semibold text-white rounded-xl bg-[var(--color-violet)] hover:bg-[var(--color-violet-dark)] transition-all shadow-lg shadow-violet-900/30"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white/70 hover:text-white rounded-xl border border-white/10 hover:bg-white/[0.03] transition-colors"
              >
                Direct Contact &amp; Channels
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
