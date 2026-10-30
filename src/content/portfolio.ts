export type Internship = {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
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
  name: "Shivan Kathir",
  resumeUrl: "/shivans-resume.pdf",
  email: "shivan.kathir@gmail.com",
  githubUrl: "https://github.com/ShivanK3397",
  linkedinUrl: "https://www.linkedin.com/in/shivan-kathir-08aa5a2b6/",
  role: "Developer portfolio",
  introduction: "This is a hub for the work I’ve done, the projects I’ve built, and the things I’ve learned along the way.",
  bio: [
    `Hi. I’m Shivan, a fourth-year student studying computer science at the University of Ottawa, with a passion for software development.`,
    "Throughout my degree and past internships, I’ve gained experience with a variety of technologies. These include programming languages such as Python, Java, C++, and JavaScript; SQL and NoSQL database management systems, including MySQL, MSSQL, and MongoDB; cloud platforms such as AWS and Azure, and containerization tools like Docker and Kubernetes.",
  ],
  skills: [
    { category: "Programming languages", items: ["Python", "Java", "C++", "JavaScript"] },
    { category: "Databases", items: ["MySQL", "MSSQL", "MongoDB"] },
    { category: "Cloud & containers", items: ["AWS", "Azure", "Docker", "Kubernetes"] },
  ],
  experience: [],
  education: [],
  contentReady: false,
};

// Reverse chronological order, shared by Home and Work.
export const internships: Internship[] = [
  {
    id: "lockheed-martin",
    title: "Database Developer Intern",
    organization: "Lockheed Martin Canada",
    location: "Ottawa, Ontario",
    period: "Sept 2026 – Present",
    current: true,
    highlights: ["Current intern at Lockheed Martin Canada."],
  },
  {
    id: "national-defense",
    title: "Cloud Systems Analyst Intern",
    organization: "Department of National Defense",
    location: "Ottawa, Ontario",
    period: "Jan 2026 – Aug 2026",
    highlights: [
      "Assisted with the installation of Windchill (PLM software) on Azure, including configuring the Oracle Database and integrating Microsoft Entra ID for LDAP authentication.",
      "Assisted in migrating a SharePoint 2019 site to SharePoint Online, successfully transferring 7,000+ files while maintaining data integrity and minimizing downtime.",
      "Engineered a Python automation script to parse and analyze user login data from Excel, generating a targeted list of inactive accounts and reducing the time spent removing them by 75%.",
      
    ],
  },
  {
    id: "national-research-council",
    title: "Software Engineer Intern",
    organization: "National Research Council of Canada",
    location: "Ottawa, Ontario",
    period: "May 2025 – Dec 2025",
    highlights: [
      "Developed a full-stack web application using React, TypeScript, and Tailwind on the frontend, and Node.js, MSSQL, and Microsoft Graph on the backend, delivering a production-ready tool by the end of the term.",
      "Architected and deployed a cloud-hosted Azure SQL database from an ERD diagram, ensuring secure and scalable data storage.",
      "Implemented Microsoft Entra SSO authentication with role-based access control, enhancing security and ensuring compliance.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  image: { src: string; alt: string; width: number; height: number };
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "malicious-link-checker",
    title: "Malicious Link Checker",
    summary: "A full-stack React and Flask application that uses machine learning to classify URLs as malicious or benign.",
    technologies: ["React", "TypeScript", "Scikit-Learn", "Flask", "Pandas", "AWS Amplify", "Render"],
    highlights: [
      "Developed a full-stack web application using React and Flask that uses machine learning to classify URLs as malicious or benign.",
      "Trained a Decision Tree classifier with Scikit-Learn, achieving 96% accuracy on a dataset of 130,000+ URLs.",
      "Built a data pipeline with Pandas to extract 22 URL-based features, transforming raw URL data into structured data for model training.",
      "Deployed the frontend on AWS Amplify and the backend on Render, implementing CI/CD pipelines for automated deployments.",
    ],
    image: {
      src: "/projects/malicious-link-checker.png",
      alt: "Malicious Link Checker interface showing a submitted URL classified as malware.",
      width: 1916,
      height: 907,
    },
    githubUrl: "https://github.com/ShivanK3397/Malicious-Link-Checker",
  },
  {
    id: "jarvis",
    title: "Jarvis | Voice-Controlled AI Desktop Assistant",
    summary: "A Windows desktop assistant that uses voice and text interaction with a Gemini-powered AI agent to answer questions and carry out browser tasks.",
    technologies: ["Electron", "React", "TypeScript", "Python", "LiveKit Agents", "Gemini", "Playwright"],
    highlights: [
      "Built a Windows desktop assistant that uses voice and text interaction with a Gemini-powered AI agent to answer questions and carry out browser tasks.",
      "Integrated a persistent Playwright browser for web navigation and interaction, with approval flows for important actions.",
      "Developed the desktop app with Electron, React, and TypeScript, connected to a Python backend using LiveKit Agents and Gemini.",
    ],
    image: {
      src: "/projects/jarvis.png",
      alt: "Jarvis desktop assistant showing a voice listening state and conversation panel.",
      width: 1446,
      height: 768,
    },
    githubUrl: "https://github.com/ShivanK3397/AI-Voice-Assistant",
  },
];

export const contactLinks = [
  ...(profile.email ? [{ label: "Email", href: `mailto:${profile.email}` }] : []),
  ...(profile.githubUrl ? [{ label: "GitHub", href: profile.githubUrl }] : []),
  ...(profile.linkedinUrl ? [{ label: "LinkedIn", href: profile.linkedinUrl }] : []),
];
