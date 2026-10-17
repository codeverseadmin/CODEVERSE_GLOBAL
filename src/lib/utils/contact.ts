import { NextRequest } from 'next/server.js';

/**
 * Contact Form & Request Protection Utilities for CODEVERSE.
 */

// ── In-Memory Rate Limiter (Single-instance / Development fallback) ───────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
export const RATE_LIMIT_MAX = 5;             // max 5 submissions
export const RATE_LIMIT_WINDOW_MS = 600_000; // 10 minutes

/** Reset in-memory rate limits (used exclusively in automated tests) */
export function resetRateLimitForTesting(): void {
  rateLimitMap.clear();
}

/**
 * Resolves the client IP address with priority given to authenticated proxy headers.
 *
 * SECURITY ARCHITECTURE NOTE:
 * Header priority alone is NOT proof of trust if the application is reachable
 * directly without passing through the designated edge proxy. In production:
 * - If deployed behind Cloudflare: set TRUSTED_PROXY_PROVIDER="cloudflare" and
 *   ensure origin firewall only accepts Cloudflare IP ranges.
 * - If deployed on Vercel: set TRUSTED_PROXY_PROVIDER="vercel" (or auto-detected via process.env.VERCEL).
 * - If behind Nginx/Caddy: set TRUSTED_PROXY_PROVIDER="nginx" and ensure Nginx strips
 *   incoming client headers and sets `proxy_set_header X-Real-IP $remote_addr;`.
 */
export function getClientIp(req: NextRequest): string {
  const provider = (process.env.TRUSTED_PROXY_PROVIDER || (process.env.VERCEL ? 'vercel' : '')).toLowerCase();

  if (provider === 'cloudflare') {
    const cfIp = req.headers.get('cf-connecting-ip');
    if (cfIp && cfIp.trim()) return cfIp.trim();
  } else if (provider === 'vercel') {
    const vercelIp = req.headers.get('x-vercel-forwarded-for');
    if (vercelIp && vercelIp.trim()) return vercelIp.split(',')[0].trim();
  } else if (provider === 'nginx' || provider === 'proxy') {
    const realIp = req.headers.get('x-real-ip');
    if (realIp && realIp.trim()) return realIp.trim();
  }

  // Fallback cascade for local testing and multi-environment default support
  // 1. Cloudflare Connecting IP
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp && cfIp.trim()) return cfIp.trim();

  // 2. Vercel client IP
  const vercelIp = req.headers.get('x-vercel-forwarded-for');
  if (vercelIp && vercelIp.trim()) return vercelIp.split(',')[0].trim();

  // 3. X-Real-IP
  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) return realIp.trim();

  // 4. X-Forwarded-For: Extract first hop IP
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor && forwardedFor.trim()) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  return '127.0.0.1';
}

/** Check if IP has exceeded the allowed rate threshold */
export function checkRateLimit(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
    return { limited: true, retryAfter };
  }

  entry.count += 1;
  return { limited: false, retryAfter: 0 };
}

/** Sanitises input string and enforces maximum character limits */
export function sanitise(value: unknown, maxLength = 100): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

/** Validates email according to standard format */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
