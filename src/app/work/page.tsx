import type { Metadata } from "next";
import { projects } from "@/content/portfolio";
import { ProjectCard, ProjectEmptyState } from "@/components/project-card";
import { ContactSection } from "@/components/site-shell";

export const metadata: Metadata = { title: "Work", description: "Explore development projects, the ideas behind them, and the technologies used to build them.", alternates: { canonical: "/work" } };

export default function Work() {
  return <><section className="page-heading"><p className="eyebrow">Ideas into reality</p><h1>The <span className="serif-word">work.</span></h1><p className="page-intro">A collection of projects, experiments, and lessons learned along the way.</p></section><section className="work-section" aria-labelledby="projects-title"><div className="section-heading compact"><h2 id="projects-title">All projects</h2><span className="small-label">{String(projects.length).padStart(2, "0")} projects</span></div>{projects.length ? <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div> : <ProjectEmptyState />}</section><ContactSection /></>;
}
