# CODEVERSE GLOBAL — Production Launch Checklist

**Target Brand**: CODEVERSE (`codeverse.digital`)  
**Tagline**: *Learn • Code • Grow*  
**Auditor**: Senior Technical Review Team & CTO Advisory  
**Date**: October 2026  
**Status**: CONDITIONAL GO (Action Required on P0 Items)

---

## Priority Levels
- **P0 — Critical Blockers**: Mandatory fixes before opening the website to the public or advertising commercial services.
- **P1 — Required Before / Immediately After Launch**: High-priority configuration and operational safeguards.
- **P2 — Improvements**: Architecture hardening, SEO enrichments, and accessibility compliance.
- **P3 — Optional Polish**: Developer experience, test suites, and progressive enhancements.

---

## P0 — Critical Launch Blockers (Must Complete Before Launch)

| ID | Item | Owner | Completion Criterion | Verification Method | Status |
|---|---|---|---|---|---|
| **P0-1** | Implement Real Email Delivery in `/api/contact` | Engineering Lead | Install `resend` package, uncomment and implement API dispatch in `src/app/api/contact/route.ts`, configure verified sender domain in Resend. | Submit synthetic form on `/start-a-project`; verify receipt in designated inbox; verify provider error logging. | ❌ INCOMPLETE (Stubbed) |
| **P0-2** | Configure Verified Domain DNS Records (SPF, DKIM, DMARC) | DevOps / Domain Owner | Add TXT and CNAME records provided by Resend to DNS zone at domain registrar. | Run `dig TXT codeverse.digital` and verify green status in Resend domain dashboard. | ❌ PENDING OWNER |
| **P0-3** | Populate Founder Identity & Approved Copy | Founder / Creative Lead | Update `src/lib/data/site.ts` with approved founder name, professional biography, and add portrait image asset. | Verify `/about` and `/` render real biography and photo with no "to be added" placeholder copy. | ❌ INCOMPLETE (Placeholders Present) |
| **P0-4** | Create and Add Default Open Graph Image (`/og-default.jpg`) | Creative / Design | Place a branded 1200×630px JPG image at `codeverse-web/public/og-default.jpg`. | Run `curl -I https://codeverse.digital/og-default.jpg` (or local test) and verify 200 OK. | ❌ INCOMPLETE (404 Missing) |
| **P0-5** | Secure Rate Limiting Against Header Spoofing | Engineering Lead | Remove reliance on untrusted raw `x-forwarded-for` header or enforce platform reverse-proxy IP resolution (e.g., Cloudflare / Vercel trusted header). | Run `test_ip_spoof.ps1`; verify spoofed IP cannot bypass rate limit without authentic proxy authorization. | ❌ INCOMPLETE (Spoofable) |
| **P0-6** | Configure Production `.env.local` on Hosting Server | DevOps / Founder | Set `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_CONTACT_EMAIL` in host environment variables. | Verify environment variables load in server runtime without exposure to client bundle. | ❌ PENDING HOST CONFIG |

---

## P1 — Required Before or Immediately After Launch

| ID | Item | Owner | Completion Criterion | Verification Method | Status |
|---|---|---|---|---|---|
| **P1-1** | Configure WhatsApp Number or Cleanly Hide Placeholder Card | Marketing / Founder | Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to valid E.164 number in `.env.local`, or conditionally hide the card if WhatsApp is unmonitored. | Visit `/contact`; verify card either deep-links to WhatsApp or is cleanly hidden. | ❌ PENDING CONFIG |
| **P1-2** | Implement Form Honeypot Spam Trap | Frontend Engineer | Add hidden input (`<input type="text" name="_gotcha" tabIndex={-1} className="hidden" />`) and reject non-empty submissions in API route. | Send POST request with `_gotcha` populated; verify API returns 200/400 without delivering email. | ❌ INCOMPLETE |
| **P1-3** | Add Security Headers in `next.config.ts` | Engineering Lead | Add `poweredByHeader: false` and headers array (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, CSP). | Inspect response headers on deployed endpoint; verify absence of `X-Powered-By` and presence of security headers. | ❌ INCOMPLETE |
| **P1-4** | Add Canonical Link Tag to Root Layout | Frontend Engineer | Add `alternates: { canonical: '/' }` in `src/app/layout.tsx`. | Inspect `<head>` on homepage; verify `<link rel="canonical" href="https://codeverse.digital/" />` is rendered. | ❌ INCOMPLETE |
| **P1-5** | Add Schema.org JSON-LD Structured Data | SEO Engineer | Add `<script type="application/ld+json">` for `Organization` and `ProfessionalService` in root layout. | Validate HTML output using Google Rich Results Test tool. | ❌ INCOMPLETE |

---

## P2 — Architecture & Quality Improvements

| ID | Item | Owner | Completion Criterion | Verification Method | Status |
|---|---|---|---|---|---|
| **P2-1** | Fix Color Contrast on Muted Text Tokens | UI Designer | Adjust `--color-text-muted` in `globals.css` from `#666666` to `#8a8a8a` to achieve >= 4.5:1 contrast against `#080808` canvas. | Re-run `check_contrast.ps1`; verify all normal text tokens pass WCAG AA (>= 4.5:1). | ❌ INCOMPLETE (3.49:1) |
| **P2-2** | Replace Raw Anchor Tags in Privacy Notice | Frontend Engineer | Replace `<a href="/contact">` with Next.js `<Link href="/contact">` in `src/app/privacy/page.tsx`. | Click link in browser; verify soft client-side SPA navigation without full document reload. | ❌ INCOMPLETE |
| **P2-3** | Implement Distributed Rate Limiting (Upstash / Redis) | DevOps | Replace in-memory `Map` with Upstash Redis or edge KV store for serverless scalability. | Simulate concurrent requests across multiple serverless lambdas. | ❌ PENDING (In-Memory Only) |
| **P2-4** | Add Real Project Cover Imagery in `/public/projects/` | Design Lead | Provide high-resolution WebP/JPG project showcase mockups and replace temporary stylized monogram cards. | Inspect `/work` and case study pages; verify real project UI imagery loads. | ⚠️ ACCEPTABLE FOR LAUNCH (Clean Monograms) |

---

## P3 — Polish & Long-Term Engineering

| ID | Item | Owner | Completion Criterion | Verification Method | Status |
|---|---|---|---|---|---|
| **P3-1** | Configure Automated Testing Framework | QA Lead | Install Vitest / React Testing Library; configure `npm test` script in `package.json` with tests for form validation and data utilities. | Run `npm test`; verify test suite passes in CI/CD pipeline. | ❌ INCOMPLETE |
| **P3-2** | Configure End-to-End Browser Testing | QA Lead | Install Playwright; write E2E tests for mobile menu toggle, dropdown navigation, and enquiry submission flow. | Run `npx playwright test`; verify automated passes across desktop and mobile browsers. | ❌ INCOMPLETE |
| **P3-3** | Review Transitive Dependencies from `npm audit` | Engineering Lead | Monitor upstream Next.js and ESLint releases for patches to transitive `postcss` and `braces` vulnerabilities. | Run `npm audit --omit=dev`; verify production runtime bundle remains clean. | ⚠️ MONITORED |
