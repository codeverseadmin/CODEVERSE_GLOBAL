export type ProjectStatus = 'live' | 'in-development' | 'experiment' | 'completed';

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  technologies: string[];
  status: ProjectStatus;
  cover: ProjectImage;
  gallery?: ProjectImage[];
  liveUrl?: string;
  featured: boolean;
  publishable: boolean;
  outcomes?: string[];
  role?: string;
  year?: number;
}
