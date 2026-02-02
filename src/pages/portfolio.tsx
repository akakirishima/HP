// Portfolio page
import { useLanguage } from "../contexts/LanguageContext";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  const { t, language } = useLanguage();

  return (
    <main className="section page page--wide">
      <h1 className="section-title animate-fade-in-up">
        {t('portfolio_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('portfolio_desc')}
      </p>

      <div className="card-grid">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card animate-fade-in-up"
            style={{
              animationDelay: `${0.1 * i}s`,
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
          >
            {/* Image/Header Area */}
            <div
              className="project-card__image"
              style={{ background: project.color }}
            >
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>
                {project.title.charAt(0)}
              </span>
            </div>

            {/* Content */}
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">
                {language === 'ja' ? project.desc_ja : project.desc_en}
              </p>
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
