import type { Metadata } from "next";
import { internships } from "@/content/portfolio";
import { ExperienceList } from "@/components/experience-list";
import { ContactSection } from "@/components/site-shell";

export const metadata: Metadata = { title: "Work", description: "Internship experience in database development, cloud systems, and software engineering at Lockheed Martin Canada, the Department of National Defense, and the National Research Council of Canada.", alternates: { canonical: "/work" } };

export default function Work() {
  return <><section className="page-heading"><p className="eyebrow">Learning through experience</p><h1>The <span className="serif-word">work.</span></h1></section><section className="work-section" aria-labelledby="experience-title"><div className="section-heading compact"><h2 id="experience-title">Internship experience</h2><span className="small-label">{String(internships.length).padStart(2, "0")} roles</span></div><ExperienceList /></section><ContactSection /></>;
}
