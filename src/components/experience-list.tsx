import { internships } from "@/content/portfolio";

export function ExperienceList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`experience-list${compact ? " experience-compact" : ""}`}>
      {internships.map(internship => (
        <li key={internship.id}>
          <article className="experience-entry">
            <div className="experience-meta">
              <p className="experience-period">{internship.period}</p>
              {internship.current && <span className="current-role"><span aria-hidden="true" />Current role</span>}
            </div>
            <div className="experience-content">
              <h3>{internship.title}</h3>
              <p className="experience-employer">{internship.organization}</p>
              <p className="experience-location">{internship.location}</p>
              {!compact && <ul className="experience-highlights">{internship.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
