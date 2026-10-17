import test from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server.js';
import { Resend } from 'resend';

// Import route handler
import { POST } from '../src/app/api/contact/route.ts';

// Import contact protection and validation utilities
import {
  getClientIp,
  checkRateLimit,
  sanitise,
  isValidEmail,
  resetRateLimitForTesting,
  RATE_LIMIT_MAX,
} from '../src/lib/utils/contact.ts';

function createRequest(body, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');

  const requestOptions = {
    method: options.method || 'POST',
    headers,
  };

  if (body !== undefined) {
    requestOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
  }

  const url = options.url || 'http://localhost:3000/api/contact';
  return new NextRequest(url, requestOptions);
}

const validPayload = {
  name: 'Sarah Connor',
  email: 'sarah@example.com',
  company: 'Cyberdyne Systems',
  service: 'custom-software',
  description: 'We require a resilient, high-security dashboard application for our operations team.',
  budget: '7k-15k',
  timeline: '1-3m',
  referral: 'Clutch / Referral',
  consent: true,
  _gotcha: '',
};

test.beforeEach(() => {
  resetRateLimitForTesting();
});

// ── 1. Required Form Field Validation ─────────────────────────────────────────

test('Rejects missing or empty name with 422', async () => {
  const req = createRequest({ ...validPayload, name: ' ' }, { headers: { 'x-real-ip': '192.0.2.1' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 422);
  assert.match(data.message, /Name is required/i);
});

test('Rejects name shorter than 2 characters with 422', async () => {
  const req = createRequest({ ...validPayload, name: 'A' }, { headers: { 'x-real-ip': '192.0.2.2' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 422);
  assert.match(data.message, /Name is required/i);
});

test('Rejects missing or invalid email format with 422', async () => {
  const invalidEmails = ['plainaddress', '@missingusername.com', 'user@.com', 'user@domain'];
  for (const email of invalidEmails) {
    const req = createRequest({ ...validPayload, email }, { headers: { 'x-real-ip': '192.0.2.3' } });
    const res = await POST(req);
    const data = await res.json();

    assert.equal(res.status, 422, `Expected 422 for email: ${email}`);
    assert.match(data.message, /valid email address/i);
  }
});

test('Unit test: isValidEmail accurately rejects malformed addresses', () => {
  assert.equal(isValidEmail('sarah@example.com'), true);
  assert.equal(isValidEmail('plainaddress'), false);
  assert.equal(isValidEmail('user@.com'), false);
  assert.equal(isValidEmail('@domain.com'), false);
});

test('Rejects missing service area selection with 422', async () => {
  const req = createRequest({ ...validPayload, service: '' }, { headers: { 'x-real-ip': '192.0.2.4' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 422);
  assert.match(data.message, /Service area selection is required/i);
});

test('Rejects description shorter than 20 characters with 422', async () => {
  const req = createRequest({ ...validPayload, description: 'Too short' }, { headers: { 'x-real-ip': '192.0.2.5' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 422);
  assert.match(data.message, /Project description is required/i);
});

test('Rejects missing consent checkbox with 422', async () => {
  const req = createRequest({ ...validPayload, consent: false }, { headers: { 'x-real-ip': '192.0.2.6' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 422);
  assert.match(data.message, /Consent to the privacy notice is required/i);
});

// ── 2. Payload Validation & Sanitization ──────────────────────────────────────

test('Rejects malformed JSON syntax with 400', async () => {
  const req = createRequest('{ invalid json syntax', { headers: { 'x-real-ip': '192.0.2.7' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 400);
  assert.match(data.message, /Invalid request body/i);
});

test('Truncates excessively long input strings to safety boundaries', () => {
  const longString = 'a'.repeat(200);
  const sanitisedName = sanitise(longString, 100);
  assert.equal(sanitisedName.length, 100);

  const longDesc = 'd'.repeat(10000);
  const sanitisedDesc = sanitise(longDesc, 5000);
  assert.equal(sanitisedDesc.length, 5000);
});

// ── 3. Honeypot Spam Trap ────────────────────────────────────────────────────

test('Silently discards submission when honeypot _gotcha is populated', async () => {
  const botPayload = { ...validPayload, _gotcha: 'https://spam-domain.com' };
  const req = createRequest(botPayload, { headers: { 'x-real-ip': '192.0.2.8' } });
  const res = await POST(req);
  const data = await res.json();

  // Returns decoy 200 so bots do not learn or mutate payloads
  assert.equal(res.status, 200);
  assert.match(data.message, /received/i);
});

test('Silently discards submission when honeypot website field is populated', async () => {
  const botPayload = { ...validPayload, website: 'bot-link' };
  const req = createRequest(botPayload, { headers: { 'x-real-ip': '192.0.2.9' } });
  const res = await POST(req);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.match(data.message, /received/i);
});

// ── 4. Rate Limiting and Header Resolution ────────────────────────────────────

test('Enforces rate limit threshold and emits Retry-After header', async () => {
  const testIp = '198.51.100.1';

  // Perform RATE_LIMIT_MAX allowed requests
  for (let i = 0; i < RATE_LIMIT_MAX; i++) {
    const { limited } = checkRateLimit(testIp);
    assert.equal(limited, false, `Request ${i + 1} should be permitted`);
  }

  // Next request must be rate limited
  const { limited, retryAfter } = checkRateLimit(testIp);
  assert.equal(limited, true);
  assert.ok(retryAfter > 0);

  // Verify HTTP status 429 and Retry-After header via POST handler
  const req = createRequest(validPayload, { headers: { 'cf-connecting-ip': testIp } });
  const res = await POST(req);
  assert.equal(res.status, 429);
  assert.ok(res.headers.get('Retry-After'));
});

test('Prioritizes Cloudflare and Vercel edge proxy IP over raw X-Forwarded-For', () => {
  const req = createRequest({}, {
    headers: {
      'cf-connecting-ip': '203.0.113.195',
      'x-real-ip': '198.51.100.5',
      'x-forwarded-for': '10.0.0.1, 10.0.0.2',
    },
  });

  const resolvedIp = getClientIp(req);
  assert.equal(resolvedIp, '203.0.113.195');
});

test('Enforces trusted proxy provider isolation when TRUSTED_PROXY_PROVIDER is set', () => {
  const origProvider = process.env.TRUSTED_PROXY_PROVIDER;
  try {
    process.env.TRUSTED_PROXY_PROVIDER = 'vercel';
    const req = createRequest({}, {
      headers: {
        'cf-connecting-ip': '1.1.1.1', // Attacker attempting CF header spoofing on Vercel
        'x-vercel-forwarded-for': '198.51.100.25',
      },
    });

    const resolvedIp = getClientIp(req);
    // Must ignore cf-connecting-ip and pick the authentic vercel header
    assert.equal(resolvedIp, '198.51.100.25');
  } finally {
    if (origProvider !== undefined) {
      process.env.TRUSTED_PROXY_PROVIDER = origProvider;
    } else {
      delete process.env.TRUSTED_PROXY_PROVIDER;
    }
  }
});

// ── 5. Email Provider Integration ────────────────────────────────────────────

test('Returns 503 Service Unavailable when RESEND_API_KEY is not configured', async () => {
  const origKey = process.env.RESEND_API_KEY;
  const origRecipient = process.env.CONTACT_RECIPIENT_EMAIL;

  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_RECIPIENT_EMAIL;

  try {
    const req = createRequest(validPayload, { headers: { 'x-real-ip': '192.0.2.50' } });
    const res = await POST(req);
    const data = await res.json();

    assert.equal(res.status, 503);
    assert.match(data.message, /not currently configured/i);
  } finally {
    if (origKey) process.env.RESEND_API_KEY = origKey;
    if (origRecipient) process.env.CONTACT_RECIPIENT_EMAIL = origRecipient;
  }
});

const dummyResend = new Resend('dummy_init_key');
const EmailsClass = dummyResend.emails.constructor;

test('Handles email provider rejection (error response) safely with 502', async (t) => {
  process.env.RESEND_API_KEY = 're_test_dummy_key';
  process.env.CONTACT_RECIPIENT_EMAIL = 'founders@codeverse.digital';

  // Mock Resend Emails send method to simulate domain rejection error
  t.mock.method(EmailsClass.prototype, 'send', async () => ({
    data: null,
    error: { message: 'Domain codeverse.digital is not verified in Resend dashboard.' },
  }));

  try {
    const req = createRequest(validPayload, { headers: { 'x-real-ip': '192.0.2.51' } });
    const res = await POST(req);
    const data = await res.json();

    assert.equal(res.status, 502);
    assert.match(data.message, /Unable to deliver message through email provider/i);
  } finally {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_RECIPIENT_EMAIL;
  }
});

test('Returns 200 OK on successful mocked Resend dispatch', async (t) => {
  process.env.RESEND_API_KEY = 're_test_dummy_key';
  process.env.CONTACT_RECIPIENT_EMAIL = 'founders@codeverse.digital';

  // Mock Resend Emails send method to simulate successful provider acceptance
  t.mock.method(EmailsClass.prototype, 'send', async (payload) => {
    assert.equal(payload.to[0], 'founders@codeverse.digital');
    assert.equal(payload.replyTo, 'sarah@example.com');
    assert.match(payload.subject, /Sarah Connor/);
    return {
      data: { id: 'msg_test_acceptance_98765' },
      error: null,
    };
  });

  try {
    const req = createRequest(validPayload, { headers: { 'x-real-ip': '192.0.2.52' } });
    const res = await POST(req);
    const data = await res.json();

    assert.equal(res.status, 200);
    assert.match(data.message, /received/i);
  } finally {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_RECIPIENT_EMAIL;
  }
});

test('Handles unexpected provider exception safely with 500 without leaking stack traces', async (t) => {
  process.env.RESEND_API_KEY = 're_test_dummy_key';
  process.env.CONTACT_RECIPIENT_EMAIL = 'founders@codeverse.digital';

  // Mock Resend Emails send method to simulate network/socket timeout
  t.mock.method(EmailsClass.prototype, 'send', async () => {
    throw new Error('ETIMEDOUT: Connection refused to api.resend.com:443');
  });

  try {
    const req = createRequest(validPayload, { headers: { 'x-real-ip': '192.0.2.53' } });
    const res = await POST(req);
    const data = await res.json();

    assert.equal(res.status, 500);
    assert.match(data.message, /unexpected error occurred/i);
    // Ensure internal socket details are NOT exposed to the client
    assert.doesNotMatch(data.message, /ETIMEDOUT/);
  } finally {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_RECIPIENT_EMAIL;
  }
});
