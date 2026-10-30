import Image from "next/image";
import { projects } from "@/content/portfolio";

export function ProjectList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`portfolio-projects${compact ? " portfolio-projects-compact" : ""}`}>
      {projects.map(project => (
        <article key={project.id} className="portfolio-project">
          <div className="portfolio-project-image">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 700px) 100vw, (max-width: 1216px) 45vw, 500px"
            />
          </div>
          <div className="portfolio-project-copy">
            <h3>{project.title}</h3>
            {compact ? <p className="portfolio-project-summary">{project.summary}</p> : null}
            <ul className="tags" aria-label={`${project.title} technologies`}>
              {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
            {!compact && <>
              <ul className="experience-highlights">
                {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
              {project.githubUrl ? <a className="text-link portfolio-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a> : null}
            </>}
          </div>
        </article>
      ))}
    </div>
  );
}
