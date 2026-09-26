export type Project = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  image?: { src: string; alt: string; width: number; height: number };
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

type TimelineEntry = { title: string; organization: string; period: string; description?: string };
type Profile = {
  name: string;
  role: string;
  introduction: string;
  bio: string[];
  skills: { category: string; items: string[] }[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  contentReady: boolean;
};

// Replace these explicit placeholders with your supplied content before launch.
export const profile: Profile = {
  name: "Your name",
  role: "Developer portfolio",
  introduction: "A home for my work, experience, and the things I’m learning along the way.",
  bio: [],
  skills: [],
  experience: [],
  education: [],
  contentReady: false,
};

// Editorial order is preserved. Set featured: true for up to three home-page cards.
export const projects: Project[] = [];

export const contactLinks = [
  ...(profile.email ? [{ label: "Email", href: `mailto:${profile.email}` }] : []),
  ...(profile.githubUrl ? [{ label: "GitHub", href: profile.githubUrl }] : []),
  ...(profile.linkedinUrl ? [{ label: "LinkedIn", href: profile.linkedinUrl }] : []),
];
