import type { Project } from '@/types/project';

/**
 * Central project data store.
 *
 * IMPORTANT:
 * - Populate only from verified, approved information.
 * - Do NOT invent metrics, client names, or business outcomes.
 * - Set publishable: false for any project not yet cleared for public display.
 * - Cover images reference files in /public/projects/<slug>/
 *   Use a neutral placeholder until real assets are available.
 */

export const projects: Project[] = [
  {
    slug: 'marine-creatures',
    title: 'Marine Creatures',
    category: 'Website Design & Development',
    tagline: 'An immersive digital showcase for marine life.',
    summary:
      'A visually rich website dedicated to showcasing marine life, combining editorial design with engaging content presentation.',
    challenge:
      'Create a compelling online presence that communicates the beauty and importance of marine ecosystems through thoughtful design.',
    solution:
      'Developed a full-featured website with editorial-style layouts, rich imagery, and clear information hierarchy to engage and inform visitors.',
    deliverables: [
      'Responsive website design',
      'Content architecture',
      'Visual design system',
      'Frontend development',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'completed',
    cover: {
      src: '/projects/marine-creatures/cover.jpg',
      alt: 'Marine Creatures website — hero section showcasing marine life',
      width: 1600,
      height: 900,
    },
    liveUrl: '',
    featured: true,
    publishable: true,
    role: 'Design & Development',
    year: 2024,
  },
  {
    slug: 'yamini-connect',
    title: 'Yamini Connect',
    category: 'Custom Web Application',
    tagline: 'A platform built for meaningful connection.',
    summary:
      'A bespoke web platform developed to facilitate connections and communications for Yamini Connect, tailored to their specific operational requirements.',
    challenge:
      'Design and build a platform that meets the unique workflow and communication needs of the organisation.',
    solution:
      'Delivered a custom web application with purpose-built features, clear interface design, and reliable technical implementation.',
    deliverables: [
      'Application architecture',
      'UI/UX design',
      'Full-stack development',
      'Testing and deployment',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
    status: 'completed',
    cover: {
      src: '/projects/yamini-connect/cover.jpg',
      alt: 'Yamini Connect platform interface',
      width: 1600,
      height: 900,
    },
    liveUrl: '',
    featured: true,
    publishable: true,
    role: 'Design & Development',
    year: 2024,
  },
  {
    slug: 'cholo-bondhu',
    title: 'Cholo Bondhu',
    category: 'CODEVERSE Labs',
    tagline: 'An original product built under the CODEVERSE identity.',
    summary:
      'Cholo Bondhu is an original digital product developed by CODEVERSE. Further details will be published as the product matures.',
    technologies: ['React', 'TypeScript'],
    status: 'in-development',
    cover: {
      src: '/projects/cholo-bondhu/cover.jpg',
      alt: 'Cholo Bondhu — product in development',
      width: 1600,
      height: 900,
    },
    liveUrl: '',
    featured: true,
    publishable: true,
    role: 'Product Design & Development',
    year: 2025,
  },
  {
    slug: 'java-visualizer',
    title: 'Java Visualizer',
    category: 'CODEVERSE Labs',
    tagline: 'Learn Java through interactive visual execution.',
    summary:
      'An interactive tool that visualises Java program execution step by step, designed to help learners understand how code behaves at runtime.',
    challenge:
      'Make the abstract mechanics of Java program execution concrete and approachable for students and self-learners.',
    solution:
      'Built an interactive visualisation environment where users can step through Java code and observe variable states, call stacks, and output in real time.',
    deliverables: [
      'Interactive visualisation engine',
      'Step-by-step execution mode',
      'Clean learner-focused interface',
    ],
    technologies: ['React', 'TypeScript', 'Java'],
    status: 'in-development',
    cover: {
      src: '/projects/java-visualizer/cover.jpg',
      alt: 'Java Visualizer — interactive code execution tool',
      width: 1600,
      height: 900,
    },
    liveUrl: '',
    featured: true,
    publishable: true,
    role: 'Product Design & Development',
    year: 2025,
  },
];

/** Return only publishable projects */
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.publishable);
}

/** Return only featured & publishable projects */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.publishable);
}

/** Find a project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.publishable);
}

/** Return all publishable slugs (used for static params) */
export function getAllProjectSlugs(): string[] {
  return projects.filter((p) => p.publishable).map((p) => p.slug);
}

/** Return only CODEVERSE Labs original products */
export function getLabsProjects(): Project[] {
  return projects.filter((p) => p.publishable && p.category === 'CODEVERSE Labs');
}
