/**
 * Central site configuration.
 * Update these values before launch.
 * Do NOT hard-code contact details anywhere else in the codebase.
 */

export const siteConfig = {
  name: 'CODEVERSE',
  tagline: 'Learn • Code • Grow',
  descriptor: 'Digital Experiences & Technology Solutions',
  description:
    'CODEVERSE is a founder-led digital technology studio that designs and develops websites, e-commerce experiences, custom web applications, and intelligent software solutions.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://codeverse.digital'),

  // ─── Contact ────────────────────────────────────────────────────────────────
  // Replace placeholder values with real details before publishing.
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@codeverse.digital',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '', // E.164 format, e.g. "8801XXXXXXXXX"
    whatsappMessage: 'Hi, I found CODEVERSE online and I\'d like to discuss a project.',
  },

  // ─── Social ─────────────────────────────────────────────────────────────────
  // Leave as empty string to hide a link.
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
  },

  // ─── Founder ────────────────────────────────────────────────────────────────
  founder: {
    name: 'Founder', // Replace with actual name when approved
    title: 'Founder, CODEVERSE',
    bio: '', // Replace with approved biography
    photo: '', // Replace with approved photograph path
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Build a WhatsApp deep-link URL */
export function whatsappUrl(number: string, message: string): string {
  if (!number) return '#';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/** Build a mailto: link */
export function mailtoUrl(email: string, subject = ''): string {
  if (!email) return '#';
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
