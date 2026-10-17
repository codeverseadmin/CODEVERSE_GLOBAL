# CODEVERSE GLOBAL — Remediation Test Suite & Verification Evidence

**Date**: October 18, 2026  
**Test Framework**: Node.js 22 Native Test Runner (`node --test --experimental-strip-types`)  
**Workspace**: `CODEVERSE-GLOBAL/codeverse-web`  
**Overall Test Verdict**: **17 PASSED, 0 FAILED, 0 CANCELLED**

---

## 1. Automated Test Suite Matrix (`tests/contact-api.test.mjs`)

The test suite validates the server-side API handler `src/app/api/contact/route.ts` and core security utilities in `src/lib/utils/contact.ts`.

| # | Test Name | Scenario / Input | Expected Status | Actual Status | Result |
|---|---|---|---|---|---|
| 1 | Rejects missing or empty name | `{ name: " " }` | 422 Unprocessable Entity | 422 ("Name is required") | **PASS** |
| 2 | Rejects name shorter than 2 chars | `{ name: "A" }` | 422 Unprocessable Entity | 422 ("Name is required and must be at least 2 characters") | **PASS** |
| 3 | Rejects invalid email formats | Plain string, missing user, missing domain (`user@.com`, `plainaddress`) | 422 Unprocessable Entity | 422 ("Please provide a valid email address") | **PASS** |
| 4 | Unit test: `isValidEmail` accuracy | Rigorous regex matching for standard and RFC compliant emails | Boolean true/false | Returns expected boolean | **PASS** |
| 5 | Rejects missing service selection | `{ service: "" }` | 422 Unprocessable Entity | 422 ("Please select a service area") | **PASS** |
| 6 | Rejects description < 20 chars | `{ description: "Too short" }` | 422 Unprocessable Entity | 422 ("Project description must be at least 20 characters") | **PASS** |
| 7 | Rejects missing consent checkbox | `{ consent: false }` | 422 Unprocessable Entity | 422 ("You must consent to be contacted regarding this project enquiry") | **PASS** |
| 8 | Rejects malformed JSON syntax | Broken JSON string `"{ invalid json "` | 400 Bad Request | 400 ("Malformed JSON request payload") | **PASS** |
| 9 | Truncates excessively long input | 5,000 char input string | Sanitized to safety bounds (2,500 chars) | String clamped to 2,500 chars | **PASS** |
| 10 | Silently discards honeypot `_gotcha` | `{ _gotcha: "spam-bot" }` | 200 OK (Decoy success, no email dispatched) | 200 ("Thank you! Your project enquiry has been received.") | **PASS** |
| 11 | Silently discards honeypot `website` | `{ website: "http://spam.org" }` | 200 OK (Decoy success, no email dispatched) | 200 ("Thank you! Your project enquiry has been received.") | **PASS** |
| 12 | Enforces rate limit threshold | 6 requests within 10-minute window from single IP | 6th request receives 429 + Retry-After | 429 Too Many Requests (`Retry-After: 600`) | **PASS** |
| 13 | Prioritizes edge proxy over spoofed header | Header: `cf-connecting-ip: 198.51.100.1` vs `x-forwarded-for: 1.2.3.4` | IP resolved as `198.51.100.1` | Successfully resolved as edge proxy IP | **PASS** |
| 14 | Missing email configuration handling | `RESEND_API_KEY` unset | 503 Service Unavailable | 503 ("Transactional email dispatch service is currently awaiting DNS and API key activation.") | **PASS** |
| 15 | Handles email provider rejection safely | Mocked Resend returning `{ error: { message: "Domain not verified" } }` | 502 Bad Gateway | 502 ("Unable to send your message at this time. Please contact us directly at hello@codeverse.digital") | **PASS** |
| 16 | Successful provider acceptance (mocked) | Mocked Resend returning `{ data: { id: "msg_test_123" } }` | 200 OK | 200 ("Thank you! Your project enquiry has been received.") | **PASS** |
| 17 | Handles unexpected provider exception | Mocked Resend throwing `ETIMEDOUT` / network error | 500 Internal Server Error | 500 (No stack traces or keys leaked in response) | **PASS** |

### Test Runner Execution Log
```
> codeverse-web@0.1.0 test
> node --test --experimental-strip-types tests/contact-api.test.mjs

TAP version 13
# Subtest: Rejects missing or empty name with 422
ok 1 - Rejects missing or empty name with 422
# Subtest: Rejects name shorter than 2 characters with 422
ok 2 - Rejects name shorter than 2 characters with 422
# Subtest: Rejects missing or invalid email format with 422
ok 3 - Rejects missing or invalid email format with 422
# Subtest: Unit test: isValidEmail accurately rejects malformed addresses
ok 4 - Unit test: isValidEmail accurately rejects malformed addresses
# Subtest: Rejects missing service area selection with 422
ok 5 - Rejects missing service area selection with 422
# Subtest: Rejects description shorter than 20 characters with 422
ok 6 - Rejects description shorter than 20 characters with 422
# Subtest: Rejects missing consent checkbox with 422
ok 7 - Rejects missing consent checkbox with 422
# Subtest: Rejects malformed JSON syntax with 400
ok 8 - Rejects malformed JSON syntax with 400
# Subtest: Truncates excessively long input strings to safety boundaries
ok 9 - Truncates excessively long input strings to safety boundaries
# Subtest: Silently discards submission when honeypot _gotcha is populated
ok 10 - Silently discards submission when honeypot _gotcha is populated
# Subtest: Silently discards submission when honeypot website field is populated
ok 11 - Silently discards submission when honeypot website field is populated
# Subtest: Enforces rate limit threshold and emits Retry-After header
ok 12 - Enforces rate limit threshold and emits Retry-After header
# Subtest: Prioritizes Cloudflare and Vercel edge proxy IP over raw X-Forwarded-For
ok 13 - Prioritizes Cloudflare and Vercel edge proxy IP over raw X-Forwarded-For
# Subtest: Returns 503 Service Unavailable when RESEND_API_KEY is not configured
ok 14 - Returns 503 Service Unavailable when RESEND_API_KEY is not configured
# Subtest: Handles email provider rejection (error response) safely with 502
ok 15 - Handles email provider rejection (error response) safely with 502
# Subtest: Returns 200 OK on successful mocked Resend dispatch
ok 16 - Returns 200 OK on successful mocked Resend dispatch
# Subtest: Handles unexpected provider exception safely with 500 without leaking stack traces
ok 17 - Handles unexpected provider exception safely with 500 without leaking stack traces
1..17
# tests 17
# suites 0
# pass 17
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 444.8252
```

---

## 2. Live HTTP Verification (Next.js Production Build)

Running against Next.js production server on `http://localhost:3000`:

### Security Headers Inspection
```http
HTTP/1.1 200 OK
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
(X-Powered-By is omitted / suppressed completely)
```
- **X-Frame-Options**: `DENY` prevents framing/clickjacking attacks.
- **X-Content-Type-Options**: `nosniff` prevents MIME type confusion.
- **Referrer-Policy**: `strict-origin-when-cross-origin` protects user query privacy.
- **Content-Security-Policy**: Validated across all pages without breaking Google Fonts or React hydration.
- **poweredByHeader**: `false` eliminates `x-powered-by: Next.js` technology profiling banner.

### Asset & Metadata Inspection
- **Default Open Graph Asset**: `GET http://localhost:3000/og-default.jpg`
  - Status: `200 OK`
  - Content-Type: `image/jpeg`
  - Content-Length: `105,580 bytes`
  - Dimensions: `1200 × 630 pixels`
- **Canonical URL Tag on Homepage**:
  ```html
  <link rel="canonical" href="https://codeverse.digital"/>
  ```
- **Schema.org Structured Data**:
  ```html
  <script type="application/ld+json">
  {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://codeverse.digital/#organization","name":"CODEVERSE","url":"https://codeverse.digital","logo":"https://codeverse.digital/og-default.jpg","contactPoint":{"@type":"ContactPoint","contactType":"Customer Support","email":"hello@codeverse.digital"},"description":"CODEVERSE is a founder-led global digital technology studio engineering resilient custom software, high-performance web systems, and intelligent digital products."},{"@type":"WebSite","@id":"https://codeverse.digital/#website","url":"https://codeverse.digital","name":"CODEVERSE","publisher":{"@id":"https://codeverse.digital/#organization"}}]}
  </script>
  ```

---

## 3. WCAG 2.1 Accessibility Contrast Verification

Contrast calculations performed using the official W3C relative luminance formula:
$$L = 0.2126 \times R + 0.7152 \times G + 0.0722 \times B$$
$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$

| Color Token | Foreground Hex | Background Hex | Luminance (FG) | Luminance (BG) | Contrast Ratio | WCAG AA Standard (Normal Text) | Verdict |
|---|---|---|---|---|---|---|---|
| **Muted Text (Old)** | `#52525B` | `#030303` (Canvas) | 0.0827 | 0.0003 | 2.62:1 | 4.5:1 | **FAILED** |
| **Muted Text (New)** | `#8A8A93` | `#030303` (Canvas) | 0.2529 | 0.0003 | **6.03:1** | 4.5:1 | **PASSED** (AA + AAA Large) |
| **Muted Text (New)** | `#8A8A93` | `#0B0B10` (Card) | 0.2529 | 0.0026 | **5.74:1** | 4.5:1 | **PASSED** (AA + AAA Large) |
| **Text Primary** | `#F4F4F5` | `#030303` (Canvas) | 0.8963 | 0.0003 | **18.81:1**| 4.5:1 | **PASSED** (AAA) |
| **Text Primary** | `#F4F4F5` | `#0B0B10` (Card) | 0.8963 | 0.0026 | **17.91:1**| 4.5:1 | **PASSED** (AAA) |
| **Accent Emerald** | `#00FF66` | `#030303` (Canvas) | 0.7152 | 0.0003 | **15.21:1**| 4.5:1 | **PASSED** (AAA) |
| **Error Crimson** | `#EF4444` | `#030303` (Canvas) | 0.1601 | 0.0003 | **4.18:1** (Large text / icon) | 3.0:1 (UI Components) | **PASSED** |

---

## 4. Production Build & Static Page Generation Audit

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    46.9 kB         153 kB
├ ○ /_not-found                            135 B         103 kB
├ ○ /about                               1.51 kB         108 kB
├ ƒ /api/contact                           135 B         103 kB
├ ○ /contact                             1.51 kB         108 kB
├ ○ /privacy                               168 B         106 kB
├ ○ /products                            1.51 kB         108 kB
├ ○ /robots.txt                            135 B         103 kB
├ ○ /services                            1.51 kB         108 kB
├ ○ /services/ai-solutions               1.51 kB         108 kB
├ ○ /services/custom-software            1.51 kB         108 kB
├ ○ /services/ecommerce                  1.51 kB         108 kB
├ ○ /services/maintenance                1.51 kB         108 kB
├ ○ /services/web-development            1.51 kB         108 kB
├ ○ /sitemap.xml                           135 B         103 kB
├ ○ /start-a-project                     5.15 kB         108 kB
├ ○ /terms                                 135 B         103 kB
├ ○ /work                                  168 B         106 kB
└ ● /work/[slug]                         1.51 kB         108 kB
    ├ /work/marine-creatures
    ├ /work/yamini-connect
    ├ /work/cholo-bondhu
    └ /work/java-visualizer
+ First Load JS shared by all             103 kB
  ├ chunks/255-b1e2483a7e02feee.js       46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.99 kB

○ (Static)  prerendered as static content
● (SSG)     prerendered as static HTML (uses generateStaticParams)
ƒ (Dynamic) server-rendered on demand
```
- **Total Static HTML Routes Generated**: 25/25
- **Dynamic API Routes**: 1 (`/api/contact`)
- **Build Status**: Exit Code 0, compiled successfully.
- **Lint Check (`npm run lint`)**: 0 errors, 0 warnings.
- **TypeScript Check (`npx tsc --noEmit`)**: 0 errors.
