import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/portfolio";
import { ProjectList } from "@/components/project-list";
import { ExperienceList } from "@/components/experience-list";
import { ContactSection } from "@/components/site-shell";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {

  return <><section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{profile.role}</p><h1>A little about me<br />and <span className="serif-word">what I do.</span></h1><p className="hero-intro">Hi, I’m {profile.name}. {profile.introduction}</p><div className="hero-actions"><Link className="button" href="/work">View my work <span aria-hidden="true">↗</span></Link><Link className="button" href="/projects">View projects <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about">A little about me <span aria-hidden="true">→</span></Link></div></div><div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-center">*</div><span className="art-coordinate coordinate-top">IDEAS → CODE</span><span className="art-coordinate coordinate-bottom">ALWAYS A WORK IN PROGRESS</span><span className="art-cross">+</span></div></section><section className="work-section" aria-labelledby="selected-work"><div className="section-heading"><div><p className="eyebrow">A closer look</p><h2 id="selected-work">Work experience<span className="brand-dot">.</span></h2></div><Link href="/work" className="text-link">Full experience <span aria-hidden="true">↗</span></Link></div><ExperienceList compact /></section><section className="work-section" aria-labelledby="home-projects"><div className="section-heading"><div><p className="eyebrow">Turning Ideas into reality</p><h2 id="home-projects">Projects<span className="brand-dot">.</span></h2></div></div><ProjectList compact /><Link href="/projects" className="button projects-view-button">View projects <span aria-hidden="true">↗</span></Link></section><ContactSection /></>;
}
