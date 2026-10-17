import { NextRequest, NextResponse } from 'next/server.js';
import { Resend } from 'resend';
import {
  getClientIp,
  checkRateLimit,
  sanitise,
  isValidEmail,
} from '../../../lib/utils/contact.ts';

/**
 * Project enquiry form submission handler for CODEVERSE.
 *
 * Security & Architecture:
 * - Real email delivery integrated via Resend.
 * - Honeypot spam trap (_gotcha field) silently discards automated bot traffic.
 * - Multi-header client IP resolution with reverse-proxy priority.
 * - Rate limiting (5 requests per 10-minute sliding window) with Retry-After header.
 * - Strict length boundaries and regex validation on all user input.
 * - Safe error handling: zero credential or internal trace leakage.
 */

export async function POST(req: NextRequest) {
  // ── 1. Rate Limiting ────────────────────────────────────────────────────────
  const ip = getClientIp(req);
  const { limited, retryAfter } = checkRateLimit(ip);

  if (limited) {
    return NextResponse.json(
      { message: 'Too many submissions. Please wait a moment and try again.' },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfter) },
      }
    );
  }

  // ── 2. Request Body Parsing ─────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ message: 'Invalid request payload.' }, { status: 400 });
  }

  // ── 3. Honeypot Validation ──────────────────────────────────────────────────
  // If the hidden honeypot field is filled, silently discard bot submission
  const gotcha = typeof body._gotcha === 'string' ? body._gotcha.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';
  const honeypot = gotcha || website;

  if (honeypot.length > 0) {
    // Return decoy 200 OK so automated bots do not mutate attack payloads
    return NextResponse.json(
      { message: 'Thank you! Your project enquiry has been received.' },
      { status: 200 }
    );
  }

  // ── 4. Field Validation & Length Enforcements ───────────────────────────────
  const name = sanitise(body.name, 100);
  const email = sanitise(body.email, 254);
  const service = sanitise(body.service, 50);
  const description = sanitise(body.description, 5000);
  const consent = body.consent === true;

  if (!name || name.length < 2) {
    return NextResponse.json({ message: 'Name is required (minimum 2 characters).' }, { status: 422 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ message: 'A valid email address is required.' }, { status: 422 });
  }
  if (!service) {
    return NextResponse.json({ message: 'Service area selection is required.' }, { status: 422 });
  }
  if (!description || description.length < 20) {
    return NextResponse.json({ message: 'Project description is required (minimum 20 characters).' }, { status: 422 });
  }
  if (!consent) {
    return NextResponse.json({ message: 'Consent to the privacy notice is required.' }, { status: 422 });
  }

  // Optional fields with bounded lengths
  const company = sanitise(body.company, 100);
  const budget = sanitise(body.budget, 50);
  const timeline = sanitise(body.timeline, 50);
  const referral = sanitise(body.referral, 100);

  // ── 5. Email Dispatch via Resend ────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'CODEVERSE Enquiries <onboarding@resend.dev>';

  if (!apiKey || !recipientEmail) {
    // Missing provider credentials — never claim fake success
    return NextResponse.json(
      { message: 'Email service is not currently configured. Please contact hello@codeverse.digital directly.' },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New Project Enquiry: ${name} [${service}]`,
      text:
        `CODEVERSE — New Project Enquiry\n` +
        `========================================\n\n` +
        `Client Name:  ${name}\n` +
        `Email:        ${email}\n` +
        `Company:      ${company || 'Not provided'}\n` +
        `Service Area: ${service}\n` +
        `Budget:       ${budget || 'To discuss'}\n` +
        `Timeline:     ${timeline || 'Flexible'}\n` +
        `Referral:     ${referral || 'Not provided'}\n\n` +
        `Project Description:\n` +
        `----------------------------------------\n` +
        `${description}\n\n` +
        `Submitted At: ${new Date().toISOString()}\n`,
    });

    if (error) {
      // Provider rejected submission (e.g. unverified domain or invalid API key)
      console.error('[CODEVERSE Contact API] Resend rejected dispatch:', error.message);
      return NextResponse.json(
        { message: 'Unable to deliver message through email provider. Please contact us directly at hello@codeverse.digital.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Thank you! Your project enquiry has been received.' },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown dispatch error';
    console.error('[CODEVERSE Contact API] Unexpected dispatch exception:', errorMessage);
    return NextResponse.json(
      { message: 'An unexpected error occurred while delivering your message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}
