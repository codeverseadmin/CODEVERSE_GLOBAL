import type { Service } from '@/types/service';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Website Design & Development',
    shortTitle: 'Websites',
    description:
      'Distinctive, performant websites built for real business goals.',
    longDescription:
      'We design and develop business websites, corporate presences, landing pages, and portfolio experiences that communicate clearly, perform well, and reflect the quality of your brand. Every project is approached with care for design, usability, and the specific outcomes you need.',
    features: [
      'Business & corporate websites',
      'Landing pages and campaign sites',
      'Portfolio and showcase sites',
      'Website redesigns',
      'Responsive, mobile-first implementation',
      'Performance optimisation',
    ],
    icon: 'Monitor',
    href: '/services/web-development',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce & Digital Commerce',
    shortTitle: 'E-commerce',
    description:
      'Online stores and shopping experiences built to convert.',
    longDescription:
      'We build e-commerce experiences that make it easy for your customers to discover, evaluate, and purchase — whether you are launching your first online store or rethinking an existing one. We select appropriate platforms and build custom storefronts depending on the scale and requirements of your business.',
    features: [
      'Online store design and development',
      'Product catalogue and filtering',
      'Custom storefront experiences',
      'Third-party platform integrations',
      'Checkout and payment flow',
      'Post-purchase and order management',
    ],
    icon: 'ShoppingBag',
    href: '/services/ecommerce',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software & Web Applications',
    shortTitle: 'Custom Software',
    description:
      'Purpose-built applications for your specific operational needs.',
    longDescription:
      'When off-the-shelf tools do not fit, we build software that does. From business dashboards and internal tools to customer portals and booking systems, we design and develop custom web applications that solve specific operational problems with clarity and reliability.',
    features: [
      'Business dashboards and reporting tools',
      'Customer and staff portals',
      'Booking and management systems',
      'Administrative interfaces',
      'API design and integration',
      'Custom web application development',
    ],
    icon: 'Code2',
    href: '/services/custom-software',
  },
  {
    slug: 'ai-solutions',
    title: 'AI & Intelligent Solutions',
    shortTitle: 'AI Solutions',
    description:
      'Practical AI integration that adds genuine value to your product or workflow.',
    longDescription:
      'We help businesses integrate AI capabilities into their websites, applications, and internal workflows in ways that are practical, maintainable, and aligned with real business objectives. We focus on usefulness over novelty.',
    features: [
      'AI API integrations',
      'AI-powered website features',
      'Business workflow automation',
      'Intelligent internal tools',
      'Custom AI-enabled applications',
      'Evaluation of AI fit for your requirements',
    ],
    icon: 'Sparkles',
    href: '/services/ai-solutions',
  },
  {
    slug: 'maintenance',
    title: 'Ongoing Development & Support',
    shortTitle: 'Maintenance',
    description:
      'Reliable, ongoing partnership for your digital presence.',
    longDescription:
      'We provide ongoing development and support engagements for businesses that need a trusted technical partner rather than a one-off vendor. This includes regular maintenance, feature enhancements, performance improvements, and technical support.',
    features: [
      'Website maintenance and updates',
      'Feature enhancements',
      'Performance monitoring and improvement',
      'Technical support and guidance',
      'Ongoing development retainers',
      'Security updates and health checks',
    ],
    icon: 'Wrench',
    href: '/services/maintenance',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getPrimaryServices(): Service[] {
  return services.filter((s) => s.slug !== 'maintenance');
}
