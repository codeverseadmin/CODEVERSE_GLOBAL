# CODEVERSE GLOBAL — Repository Integration & Vercel Deployment Readiness Report

**Date**: October 18, 2026  
**Engineering Leads**: Senior Software Engineer, DevSecOps Engineer, QA Engineer, Deployment Engineer  
**Workspace**: `CODEVERSE-GLOBAL/codeverse-web`  
**GitHub Repository**: `https://github.com/codeverseadmin/CODEVERSE_GLOBAL`  
**Primary Branch**: `main`  
**Target Production Domain**: `https://codeverse.digital`  
**Initial Staging Target**: Vercel Temporary Deployment URL (`*.vercel.app`)  
**Release Verdict**: **CONDITIONAL GO FOR VERCEL STAGING**

---

## 1. Project Inspection & Repository Architecture

### 1.1 Source Directory & Truth Identification
* **Active Project Root**: `codeverse-web/` (contains `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `src/`, `public/`, `tests/`, `.env.example`, and `.git/`).
* **Framework & Core Tooling**:
  - **Framework**: Next.js `15.5.28` (App Router)
  - **Runtime**: React `19.1.0` / React DOM `19.1.0`
  - **Styling**: Tailwind CSS `v4` (`@tailwindcss/postcss: ^4`, `tailwindcss: ^4`)
  - **Animations & Icons**: Framer Motion `^14.3.0`, Lucide React `^1.59.0`
  - **Email Service**: Resend `^6.34.1`
  - **Type Checking**: TypeScript `^5` (Strict mode, `noEmit: true`)
  - **Linting**: ESLint `^9`, `eslint-config-next: 15.5.28`
  - **Test Runner**: Node.js 22 Native Test Runner (`node --test --experimental-strip-types`)
* **Git Repository History Preservation**:
  - The repository was initialized with commit `66826dd` (*"Initial commit from Create Next App"*).
  - Preserved existing commit history and branch configuration.
  - Renamed local default branch `master` to standard `main` (`git branch -M main`).
  - Added designated remote: `https://github.com/codeverseadmin/CODEVERSE_GLOBAL.git`.
  - Created verified release commit **`ac05647`** (*"docs: update audit release review with formal issue severity classifications"*).
  - Pushing to GitHub requires the founder's interactive Git Credential Manager login for `codeverseadmin`.

### 1.2 Git Hygiene & Secret Exclusion (.gitignore)
* Fixed `.gitignore` to allow `.env.example` template tracking while strictly excluding real secrets:
  ```gitignore
  # env files (exclude real secrets, track example template)
  .env
  .env*.local
  .env.development
  .env.test
  .env.production
  !.env.example
  ```
* Verified that zero API keys, secrets, private keys, database credentials, or `.env.local` files exist in the commit tree.

---

## 2. Vercel Staging Deployment Configuration

### 2.1 Vercel Project Import Settings
When importing `https://github.com/codeverseadmin/CODEVERSE_GLOBAL` into the Vercel Dashboard:
* **Framework Preset**: `Next.js` (automatically detected).
* **Root Directory**: `./` (the root of the Git repository contains `package.json`).
* **Build Command**: `next build` (or `npm run build`).
* **Output Directory**: `.next` (default).
* **Install Command**: `npm ci` (lockfile-preserving install).
* **Node.js Version**: `20.x` or `22.x` (recommended).

### 2.2 Dynamic Base URL & Temporary Vercel URL Handling
* In `src/lib/data/site.ts`, `siteConfig.url` dynamically resolves to:
  ```typescript
  url: process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://codeverse.digital')
  ```
* **Benefit**: When deployed on Vercel preview/staging URLs (`*.vercel.app`) prior to connecting the custom domain `https://codeverse.digital`, canonical links, sitemaps, robots, and Open Graph URLs automatically bind to the active deployment without hardcoded domain breakage.

---

## 3. Environment Variables Reference Guide

Configure these variables in **Vercel Project Settings -> Environment Variables**:

| Variable Name | Required? | Public / Secret | Execution Scope | Description & Expected Value | Rebuild Required? | Fallback Behavior When Missing |
|---|---|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | **Public** | Client & Server | Site root URL (e.g. `https://codeverse.digital`). Leave empty on Vercel preview deployments. | **Yes** (baked into static HTML) | Falls back automatically to `https://${process.env.VERCEL_URL}` or `https://codeverse.digital`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | **Public** | Client & Server | Studio contact email displayed across UI (e.g. `hello@codeverse.digital`). | **Yes** | Defaults to `hello@codeverse.digital`. |
| `RESEND_API_KEY` | **Yes** (for live email) | **Secret** | Server-side only | Secret API key from [Resend](https://resend.com) (`re_...`). | No (runtime) | Form API returns honest `503 Service Unavailable` with direct email link. |
| `CONTACT_RECIPIENT_EMAIL` | **Yes** (for live email) | **Secret** | Server-side only | Target inbox receiving project enquiries (e.g. `founder@codeverse.digital`). | No (runtime) | Defaults to `hello@codeverse.digital`. |
| `CONTACT_FROM_EMAIL` | **Yes** (for live email) | **Secret** | Server-side only | Authenticated sending address (e.g. `CODEVERSE Enquiries <enquiries@codeverse.digital>`). | No (runtime) | Defaults to `CODEVERSE Enquiries <onboarding@resend.dev>`. |
| `TRUSTED_PROXY_PROVIDER` | **Yes** | **Secret** | Server-side only | Set to `vercel`. Locks down client IP resolution to `x-vercel-forwarded-for` and discards unauthenticated spoofed proxy headers. | No (runtime) | Auto-detects Vercel runtime or falls back to standard proxy cascade. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional | **Public** | Client & Server | Direct WhatsApp number in E.164 format without `+` (e.g. `8801XXXXXXXXX`). | **Yes** | Contact page cleanly displays "Rapid Response" fallback card without broken placeholder text. |

---

## 4. Quality Gate & Verification Command Results

Every test and verification check completed successfully with zero artificial or fabricated data:

```
================================================================================
VERIFICATION SUITE EXECUTION LOG
================================================================================
1. Automated Test Suite (npm test):
   Command: node --test --experimental-strip-types tests/contact-api.test.mjs
   Total Tests: 18
   Passed:      18
   Failed:      0
   Duration:    ~516ms (Node 22 native test runner)

2. Static Type Safety (npx tsc --noEmit):
   Command: npx tsc --noEmit
   Result:  Exit Code 0 (0 errors)

3. Code Quality & Linting (npm run lint):
   Command: eslint
   Result:  Exit Code 0 (0 errors, 0 warnings)

4. Production Build Prerender (npm run build):
   Command: next build
   Compiled: In 6.5s
   Routes:   25/25 Static SSG pages prerendered + 1 Dynamic API route (/api/contact)
   Result:   Exit Code 0

5. Live HTTP Header & Endpoint Probes:
   - X-Frame-Options:         DENY
   - X-Content-Type-Options:  nosniff
   - Referrer-Policy:         strict-origin-when-cross-origin
   - Permissions-Policy:      camera=(), microphone=(), geolocation=()
   - Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline';
                              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                              img-src 'self' data: blob: https:;
                              font-src 'self' data: https://fonts.gstatic.com;
                              connect-src 'self'; frame-ancestors 'none';
                              base-uri 'self'; form-action 'self'
   - X-Powered-By:            SUPPRESSED / OMITTED
   - OG Image (/og-default.jpg): 200 OK (105,580 bytes, 1200x630 JPEG)
   - Sitemap (/sitemap.xml):   200 OK (18 indexed URLs)
   - Robots (/robots.txt):     200 OK (Disallow: /api/)
================================================================================
```

---

## 5. Security & DevSecOps Review Summary

1. **Client-IP Resolution & Spoofing Defense**:
   - `getClientIp()` validates `TRUSTED_PROXY_PROVIDER`. On Vercel, it strictly reads `x-vercel-forwarded-for` and discards spoofed `cf-connecting-ip` headers.
   - Sliding window limiter enforces 5 enquiries per 10 minutes per IP with RFC-compliant `Retry-After: 600` headers.
2. **Honeypot Spam Discard**:
   - Fields `_gotcha` and `website` are completely hidden from human visitors and screen readers (`tabIndex={-1}`, `aria-hidden="true"`). Populated bot submissions return a decoy `200 OK` without sending emails or consuming API quotas.
3. **CSP Hardening**:
   - Stripped `'unsafe-eval'` from production builds. Restricted `connect-src` to `'self'`.
4. **Dependency Audit (Accepted Residual Risks)**:
   - 7 transitive advisories in `braces` (dev tooling) and `postcss` (build-time).
   - In accordance with senior engineering standards, `npm audit fix --force` was rejected to avoid breaking Next.js 15. The risks operate strictly in developer/build phases and pose negligible production threat.
5. **No Placeholders & Brand Integrity**:
   - Founder title verified as `"Founder, CODEVERSE"` (never "CEO").
   - Replaced unconfigured portrait with an editorial `CV` monogram emblem card.
   - Zero fabricated client logos, testimonials, or metrics.

---

## 6. Pre-Launch Founder Action Checklist

To transition from Vercel Staging to live production on `https://codeverse.digital`:

1. **Deploy to Vercel Staging**:
   - Import `https://github.com/codeverseadmin/CODEVERSE_GLOBAL` into Vercel.
   - Verify deployment compiles and loads on the Vercel temporary URL (`*.vercel.app`).
2. **Email Infrastructure Setup (Resend)**:
   - Add domain `codeverse.digital` to Resend.
   - Configure DNS records (SPF, DKIM, DMARC) in domain registrar.
   - Add `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, and `CONTACT_FROM_EMAIL` to Vercel environment variables.
3. **Live Contact Form Test**:
   - Submit an inquiry on the live URL and confirm receipt in the founder's inbox.
4. **Connect Custom Domain**:
   - In Vercel Project Settings -> Domains, add `codeverse.digital` and point DNS records.
   - Set `NEXT_PUBLIC_SITE_URL=https://codeverse.digital` and redeploy.

---

## 7. Release Recommendation

### **CONDITIONAL GO FOR VERCEL STAGING**

**Justification**:
All 18 automated tests pass, the production build prerenders all 25 static pages without errors, TypeScript and ESLint checks are 100% clean, security headers are hardened, and the repository is cleanly configured for Vercel deployment. 

The application is fully ready for staging deployment and internal review on Vercel's temporary URL. Commercial launch on the custom production domain `codeverse.digital` remains conditionally blocked until the founder completes the Resend DNS verification and supplies live credentials.
