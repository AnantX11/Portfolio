export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
  iconName: string;
  level: string; // e.g. "95%" or "Elite"
  percentage: number; // e.g. 95 (used for progress bar drawing)
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  bullets: string[];
}

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  skillsAssociated: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  statement: string;
  avatar: string;
}

export interface ProcessStep {
  step: string; // e.g. "01"
  phase: string; // e.g. "Discovery"
  title: string;
  description: string;
  duration: string;
}

export interface ProposalResult {
  conceptName: string;
  tagline: string;
  elevatorPitch: string;
  colorPalette: {
    primary: string;
    secondary: string;
    background: string;
    ambience: string;
  };
  designDirection: {
    typography: string;
    interactiveFocus: string;
    visualMood: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  techStack: string[];
  isFallback?: boolean;
}
