import Image from "next/image";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card"><div className={`project-visual tone-${index % 3}`}>
    {project.image ? <Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} sizes="(max-width: 700px) 100vw, 50vw" /> : <div className="project-monogram" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.title}</strong></div>}
    </div><div className="project-details"><h3>{project.title}</h3><p>{project.summary}</p><ul className="tags" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul><div className="project-links">{project.demoUrl && <a href={project.demoUrl}>Live project <span aria-hidden="true">↗</span></a>}{project.repositoryUrl && <a href={project.repositoryUrl}>Source code <span aria-hidden="true">↗</span></a>}</div></div></article>;
}

export function ProjectEmptyState() {
  return <div className="empty-projects"><span className="empty-symbol" aria-hidden="true">⌘</span><div><h3>Good work deserves a good story.</h3><p>Project stories are on their way. Check back soon.</p></div><span className="small-label">Work in progress</span></div>;
}
