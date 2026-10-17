# CODEVERSE GLOBAL — Production Live Activation & Deployment Checklist

**Target Production Domain**: `https://codeverse.digital`  
**Hosting Target**: Vercel / Cloudflare Edge / Persistent Node.js Container  
**Document Purpose**: Actionable, step-by-step pre-launch deployment instructions for the Founder and DevOps Lead.

---

## 1. Domain DNS & HTTPS Infrastructure

| # | Step | Target Record | Expected Value / Configuration | Owner | Status |
|---|---|---|---|---|---|
| 1.1 | **Root Domain A/CNAME** | `codeverse.digital` | Point to Vercel/Hosting CNAME (`cname.vercel-dns.com` or server IP). | Founder / DevOps | **PENDING** |
| 1.2 | **WWW Subdomain CNAME** | `www.codeverse.digital` | CNAME pointing to `codeverse.digital` (or redirecting to root). | Founder / DevOps | **PENDING** |
| 1.3 | **SSL / TLS Certificate** | HTTPS on `codeverse.digital` | Automatic Let's Encrypt / Cloudflare Edge Certificate. Mode: Full (Strict). | Founder / DevOps | **PENDING** |
| 1.4 | **HSTS Enforcement** | HTTPS response header | Verify `Strict-Transport-Security` header is sent over HTTPS. | DevOps | **PENDING** |

---

## 2. Transactional Email DNS Verification (Resend)

To ensure reliable inbox delivery and prevent project enquiries from being rejected as spam or spoofing, configure the following DNS records in the domain registrar:

| # | Record Type | Hostname / Name | Target Value | Purpose | Status |
|---|---|---|---|---|---|
| 2.1 | **TXT (SPF)** | `codeverse.digital` | `v=spf1 include:amazonses.com ~all` *(or exact Resend SPF record)* | Authorizes Resend mail servers to send on behalf of `codeverse.digital`. | **PENDING** |
| 2.2 | **CNAME (DKIM 1)** | `resend._domainkey` | Value generated in Resend Dashboard | Cryptographic signature verifying message authenticity. | **PENDING** |
| 2.3 | **CNAME (DKIM 2)** | `resend2._domainkey` | Value generated in Resend Dashboard | Secondary DKIM key rotation. | **PENDING** |
| 2.4 | **CNAME (DKIM 3)** | `resend3._domainkey` | Value generated in Resend Dashboard | Tertiary DKIM key rotation. | **PENDING** |
| 2.5 | **TXT (DMARC)** | `_dmarc.codeverse.digital` | `v=DMARC1; p=none; rua=mailto:dmarc@codeverse.digital` | Establishes domain policy and delivery reporting. | **PENDING** |

> [!IMPORTANT]
> DNS record values must be copied directly from your verified [Resend Dashboard](https://resend.com/domains) after adding `codeverse.digital`. Do not modify or guess key values.

---

## 3. Production Environment Variables Configuration

Configure the following variables in your hosting provider's dashboard (e.g. Vercel Project Settings -> Environment Variables, or Railway Environment Variables). 

> [!CAUTION]
> Never commit secrets or API keys to Git. Only paste them into the encrypted hosting dashboard.

| Variable Name | Required? | Example Value | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | `https://codeverse.digital` | Canonical site root used for SEO, sitemaps, and Open Graph previews. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | **Yes** | `hello@codeverse.digital` | Public business email rendered in footer and contact cards. |
| `RESEND_API_KEY` | **Yes** | `re_xxxxxxxxxxxxxxxxxxxx` | Secret API key generated in Resend dashboard with email-sending permissions. |
| `CONTACT_RECIPIENT_EMAIL` | **Yes** | `founder@codeverse.digital` | Mailbox where client enquiries submitted via `/start-a-project` will be delivered. |
| `CONTACT_FROM_EMAIL` | **Yes** | `CODEVERSE Enquiries <enquiries@codeverse.digital>` | Verified sender address matching the authenticated sending domain. |
| `TRUSTED_PROXY_PROVIDER` | **Yes** | `vercel` (or `cloudflare`) | Locks down rate-limiting IP resolution to the authenticated hosting edge proxy. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`| Optional | `8801XXXXXXXXX` (E.164 no `+`) | If provided, displays direct WhatsApp card. If empty, displays fallback card. |

---

## 4. Live Contact Form End-to-End Verification

Before announcing public availability, conduct a live test of the enquiry pipeline:

| Step | Action | Expected Result | Verified By | Status |
|---|---|---|---|---|
| 4.1 | Visit `https://codeverse.digital/start-a-project` in a browser. | Page loads cleanly over HTTPS with zero console errors. | QA / Founder | **PENDING** |
| 4.2 | Fill out form with a valid real email owned by the founder team. | Form inputs accept text, service selection works, character counter updates. | QA / Founder | **PENDING** |
| 4.3 | Submit the project enquiry. | Loading spinner activates; button disables; returns green success notification. | QA / Founder | **PENDING** |
| 4.4 | Inspect the recipient inbox (`CONTACT_RECIPIENT_EMAIL`). | Notification arrives within 60 seconds with styled HTML table and plaintext summary. | Founder | **PENDING** |
| 4.5 | Inspect email headers in recipient inbox. | SPF = PASS, DKIM = PASS, DMARC = PASS; not filtered into Junk/Spam folder. | DevOps / Founder | **PENDING** |
| 4.6 | Verify repeated submissions limit. | Attempt 6 rapid submissions from the same IP; 6th attempt receives 429 Too Many Requests. | QA | **PENDING** |

---

## 5. Founder Branding & Editorial Sign-Off

| Item | Decision / Action | Current State | Approved? |
|---|---|---|---|
| 5.1 | **Founder Biography** | Editorial studio copy celebrating craftsmanship, architecture rigor, and client partnership. | Current copy is polished and truthful. Founder can optionally personalize with approved bio. | [ ] Approved [ ] Update |
| 5.2 | **Founder Portrait Photo** | Editorial `CV` monogram emblem card with animated glowing emerald border. | Current card is visually complete. Founder can optionally provide a 1000×1000px headshot. | [ ] Approved [ ] Provide photo |
| 5.3 | **WhatsApp Direct Line** | Fallback "Rapid Response" studio commitment card linking to `/start-a-project`. | If dedicated WhatsApp line is ready, populate `NEXT_PUBLIC_WHATSAPP_NUMBER`. | [ ] Leave as fallback [ ] Add number |

---

## 6. Physical Device & Browser Quality Assurance

Because local automated testing was restricted to headless Node and container execution, human visual testing on physical hardware must be performed prior to public announcement:

| Device / Browser | Target Resolution | Key Areas to Check | Status |
|---|---|---|---|
| **Apple iPhone (Safari)** | 390 × 844 px (Mobile) | Hamburger navigation drawer, touch targets, inquiry form input zoom. | **PENDING** |
| **Android (Chrome)** | 412 × 915 px (Mobile) | Contrast readability under bright sunlight, sticky header behavior. | **PENDING** |
| **Apple iPad / Tablet** | 820 × 1180 px (Tablet) | Grid layout transitions from single-column to multi-column. | **PENDING** |
| **MacBook / Windows (Chrome/Edge)**| 1920 × 1080 px (Desktop) | Performance of radial background gradients, hover micro-animations. | **PENDING** |
| **Screen Reader (VoiceOver / NVDA)**| N/A | Verify honeypot fields are completely invisible to assistive technology. | **PENDING** |

---

## 7. Sign-Off Authorization

| Role | Name | Signature / Approval Date | Launch Recommendation |
|---|---|---|---|
| **Senior Production Engineer** | AI Engineering Agent | October 18, 2026 | **CONDITIONAL GO** (Ready for Staging & Live DNS Configuration) |
| **DevOps / Infrastructure Lead** | | | [ ] GO [ ] NO-GO |
| **Founder / Studio Principal** | | | [ ] GO [ ] NO-GO |
