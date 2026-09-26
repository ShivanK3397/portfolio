import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects } from "@/content/portfolio";
import { ProjectCard, ProjectEmptyState } from "@/components/project-card";
import { ContactSection } from "@/components/site-shell";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const featured = projects.filter(project => project.featured).slice(0, 3);
  return <><section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{profile.role}</p><h1>A little curiosity.<br />A lot of <span className="serif-word">possibility.</span></h1><p className="hero-intro">Hi, I’m {profile.name}. {profile.introduction}</p><div className="hero-actions"><Link className="button" href="/work">View my work <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about">A little about me <span aria-hidden="true">→</span></Link></div></div><div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-center">*</div><span className="art-coordinate coordinate-top">IDEAS → CODE</span><span className="art-coordinate coordinate-bottom">ALWAYS A WORK IN PROGRESS</span><span className="art-cross">+</span></div></section><section className="work-section" aria-labelledby="selected-work"><div className="section-heading"><div><p className="eyebrow">A closer look</p><h2 id="selected-work">Selected work<span className="brand-dot">.</span></h2></div><Link href="/work" className="text-link">All projects <span aria-hidden="true">↗</span></Link></div>{featured.length ? <div className="project-grid">{featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div> : <ProjectEmptyState />}</section><ContactSection /></>;
}
