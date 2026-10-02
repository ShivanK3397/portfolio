import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { ContactSection } from "@/components/site-shell";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Malicious Link Checker, a React and Flask application that uses machine learning to classify URLs as malicious or benign.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return <>
    <section className="page-heading">
      <p className="eyebrow">Turning my ideas into reality</p>
      <h1>The <span className="serif-word">projects.</span></h1>
      {/* <p className="page-intro">Things I’ve built, the problems they solve, and what goes into making them work.</p> */}
    </section>
    <section className="work-section" aria-labelledby="projects-title">
      <div className="section-heading compact">
        <h2 id="projects-title">Selected projects</h2>
        <span className="small-label">{String(projects.length).padStart(2, "0")} {projects.length === 1 ? "project" : "projects"}</span>
      </div>
      <ProjectList />
    </section>
    <ContactSection />
  </>;
}
