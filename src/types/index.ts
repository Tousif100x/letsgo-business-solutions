export interface ShowcaseConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDesc: string;
  status: 'active' | 'coming-soon';
  path: string;
  image: string;
  businessPains: string[];
  solutionsShowcased: string[];
  features: {
    title: string;
    iconName: string; // Lucide icon component name
  }[];
  badgeText?: string;
}

export interface SectorConfig {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  activeCount: number;
  status: 'active' | 'coming-soon';
  image: string;
  tintClass: string;
  accentTint: string;
  mood: string;
  showcases: ShowcaseConfig[];
}

export interface RealProjectConfig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  technologies: string[];
  features: {
    title: string;
    description: string;
  }[];
  screenshots: string[]; // local media paths (e.g. /media/projects/eyecare/screenshots/1.png)
  screenRecordings: string[]; // local MP4 recording paths (e.g. /media/projects/eyecare/recordings/demo.mp4)
  liveDemoUrl: string;
  gitHubUrl?: string;
  qrCodePath?: string;
}

export interface AutomationConfig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  technologies: string[];
  features: {
    title: string;
    description: string;
  }[];
  screenshots: string[]; // local media paths (e.g. /media/automation/cyber-spice-cafe/screenshots/1.png)
  screenRecordings: string[]; // local MP4 recording paths
  liveDemoUrl: string;
  capabilities: string[];
  qrCodePath?: string;
  isConcept?: boolean;
}

export interface LeadContext {
  contextType: 'sector' | 'showcase' | 'project' | 'automation' | 'general';
  contextName?: string;
}
