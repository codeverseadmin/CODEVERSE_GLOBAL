# CODEVERSE GLOBAL — Accepted Technical & Operational Risks

**Date**: October 18, 2026  
**Auditor**: Senior Production Engineer  
**Document Purpose**: Formal engineering record of residual risks, technical trade-offs, and compensating controls accepted for the initial production launch.

---

## 1. Risk Register Overview

| Risk ID | Category | Severity | Likelihood | Title | Status |
|---|---|---|---|---|---|
| **RISK-01** | Dependencies | Moderate | Low | Transitive Dev Vulnerability in `braces` (GHSA-vfj7-8cjw-p6xm) | **ACCEPTED** |
| **RISK-02** | Dependencies | Moderate | Negligible | Transitive Build-Time Vulnerability in `postcss` (GHSA-qx2v-qp2m-jg93) | **ACCEPTED** |
| **RISK-03** | Architecture | Low | Low | Single-Instance In-Memory Rate Limiting Under Auto-Scale | **ACCEPTED** |
| **RISK-04** | Security | Low | Low | Content Security Policy Retention of `'unsafe-inline'` for SSG | **ACCEPTED** |
| **RISK-05** | Accessibility| Low | Very Low | Manual Screen-Reader Hardware Testing Pending Physical Device Pass | **ACCEPTED** |

---

## 2. Detailed Risk Analysis & Compensating Controls

### RISK-01: Transitive Dev-Dependency Vulnerability in `braces`
* **Vulnerability Reference**: GHSA-vfj7-8cjw-p6xm (CVSS 7.5, High)
* **Affected Package**: `braces <=3.0.3`
* **Dependency Tree**:
  ```
  eslint-config-next@15.5.28
  └── @next/eslint-plugin-next
      └── fast-glob
          └── micromatch
              └── braces@3.0.3
  ```
* **Vulnerability Description**: Deeply nested brace expansion patterns in glob expressions can trigger stack-exhaustion Denial of Service.
* **Why Accepted**:
  - The dependency is strictly inside `devDependencies` under ESLint tooling.
  - It is executed solely during local developer linting (`npm run lint`) or CI/CD pipelines.
  - The vulnerable code is never bundled, served, or executed in the production Next.js runtime.
  - Remediation via `npm audit fix --force` would downgrade `eslint-config-next` across a major version to `14.2.35`, which conflicts with Next.js 15 App Router syntax.
* **Compensating Controls**:
  - ESLint runs only on trusted developer code in local or protected CI environments.
  - Zero external user input is passed to glob expansion patterns.
* **Revisit Trigger**: Re-evaluate when Next.js releases a patch release bumping the transitive glob parser to a patched version.

---

### RISK-02: Transitive Build-Time Vulnerability in `postcss`
* **Vulnerability Reference**: GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849 (CVSS 7.5, High)
* **Affected Package**: `postcss <=8.5.22`
* **Dependency Tree**:
  ```
  next@15.5.28
  └── node_modules/next/node_modules/postcss
  ```
* **Vulnerability Description**: Malicious `sourceMappingURL` comments in untrusted CSS stylesheets can allow arbitrary `.map` file disclosure or unescaped style injection during PostCSS compilation.
* **Why Accepted**:
  - PostCSS is bundled internally by Next.js and executes exclusively at build time (`npm run build`).
  - CODEVERSE does not accept, parse, or compile user-submitted CSS stylesheets. All CSS processed by PostCSS originates from local repository files (`src/app/globals.css`).
  - Fixing this advisory requires upgrading to `next: 16.4.2` (an unreleased Canary/Major release), which would introduce catastrophic breaking changes to production stability.
* **Compensating Controls**:
  - Build pipeline parses only version-controlled static CSS.
  - Source maps are excluded or protected in production bundles.
* **Revisit Trigger**: Upgrade Next.js when a stable v15.5 patch release incorporating updated PostCSS dependencies is published.

---

### RISK-03: Single-Instance In-Memory Rate Limiting
* **Vulnerability Reference**: SEC-02
* **Affected Component**: `src/lib/utils/contact.ts` (`rateLimitMap`)
* **Vulnerability Description**: The rate limiter stores request timestamps in an in-memory JavaScript `Map`. In a serverless deployment (such as Vercel Functions or AWS Lambda) where concurrent lambdas scale horizontally, request counts are isolated to each individual execution instance.
* **Why Accepted**:
  - For the initial launch phase of CODEVERSE, expected inbound contact volume is modest (<50 enquiries/day).
  - Introducing an external Redis cluster (e.g. Upstash) introduces additional recurring service costs, operational maintenance, and network round-trip latency for each submission.
  - The existing multi-field honeypot trap (`_gotcha`, `website`) and strict client payload boundary validations mitigate automated bot spam before rate limiting is even reached.
* **Compensating Controls**:
  - Anti-spoofing client IP resolution (`getClientIp()`) validates edge headers (`x-vercel-forwarded-for`, `cf-connecting-ip`) when `TRUSTED_PROXY_PROVIDER` is set.
  - Submissions populating honeypot fields are discarded immediately without consuming rate limits or email provider quotas.
  - The rate-limiting logic is isolated in `checkRateLimit()`, enabling a seamless drop-in transition to `@upstash/ratelimit` if traffic demands.
* **Revisit Trigger**: High traffic surges, distributed bot attacks exceeding 50 requests/hour, or migration to a multi-region auto-scaling cluster.

---

### RISK-04: Retention of `'unsafe-inline'` in Content Security Policy
* **Vulnerability Reference**: SEC-03
* **Affected Component**: `next.config.ts` (`Content-Security-Policy`)
* **Vulnerability Description**: The Content Security Policy retains `'unsafe-inline'` in `script-src` and `style-src`.
* **Why Accepted**:
  - `'unsafe-eval'` was successfully removed from production mode (`NODE_ENV === 'production'`).
  - Next.js App Router relies on inline hydration chunks (`self.__next_f.push(...)`) and inline JSON-LD structured data scripts to prerender static HTML (SSG).
  - Removing `'unsafe-inline'` would require per-request cryptographic nonces, which disables Next.js Static Site Generation (SSG) and forces all 25 marketing pages to render dynamically (SSR) on every hit, significantly increasing server latency and compute costs.
* **Compensating Controls**:
  - `connect-src` is strictly locked to `'self'`, preventing unauthorized external exfiltration of sensitive data.
  - `object-src 'none'`, `base-uri 'self'`, and `form-action 'self'` prevent DOM hijacking.
  - React 19's built-in JSX escaping prevents Cross-Site Scripting (XSS) from user-controlled inputs.
* **Revisit Trigger**: When Next.js introduces official support for static hash-based nonces for SSG pages in a future framework update.

---

### RISK-05: Manual Screen-Reader Hardware Testing Pending Physical Device Pass
* **Vulnerability Reference**: A11Y-02
* **Affected Component**: Accessibility / Screen-Reader Experience
* **Vulnerability Description**: Testing in local container sandbox environments restricted headless browser audio/accessibility engine verification.
* **Why Accepted**:
  - All DOM semantic elements, ARIA attributes (`aria-hidden="true"`, `aria-label`, `aria-describedby`), and color contrast ratios (6.03:1 on canvas, 5.74:1 on card) have been mathematically and structurally validated.
  - The site conforms to WCAG 2.1 AA specifications in static analysis.
* **Compensating Controls**:
  - Semantic HTML (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`) used throughout.
  - All form controls possess visible, programmatic `<label>` associations.
  - Visual focus outlines are preserved across all interactive elements.
* **Revisit Trigger**: Physical device pass using Apple VoiceOver (iOS/macOS) and NVDA (Windows) prior to marketing campaigns.
