// Project detail page
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import { getProjectById } from "../../data/projects";
import SEO from '../../components/SEO';

export default function ProjectDetailPage() {
    const { language, t } = useLanguage();
    const { id } = useParams<{ id: string }>(); // Get project ID from URL parameter
    const project = getProjectById(id || '');
    const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined;
    const normalized = siteUrl?.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

    if (!project) {
        return (
            <main className="section page page--tight" style={{ padding: '4rem 1.5rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    {t('project_not_found_title')}
                </h1>
                <Link to="/portfolio" className="btn btn-outline">
                    {t('project_back')}
                </Link>
            </main>
        );
    }

    const title = project.title;
    const description = language === 'ja' ? project.desc_ja : project.desc_en;
    const canonical = normalized ? `${normalized}/projects/${project.id}` : undefined;

    return (
        <main className="page page--detail">
            <SEO title={title} description={description} url={canonical} image={project.image} />
            {/* Back Button */}
            <Link
                to="/portfolio"
                className="animate-fade-in"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#004098',
                    marginBottom: '2rem',
                    fontWeight: 500
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {t('project_back')}
            </Link>

            {/* Header */}
            <div className="animate-fade-in-up" style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <h1 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: 0 }}>
                        {project.title}
                    </h1>
                    <span style={{
                        padding: '4px 12px',
                        background: 'var(--c-bg-sub)',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        color: '#666'
                    }}>
                        {project.year}
                    </span>
                </div>

                <p style={{ fontSize: '1.15rem', color: '#666', marginBottom: '1.5rem' }}>
                    {language === 'ja' ? project.desc_ja : project.desc_en}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Live Preview */}
            {project.liveUrl && (
                <section className="animate-fade-in-up animate-delay-1" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
                        {t('project_live_preview')}
                    </h2>
                    <div
                        className="glass-card"
                        style={{
                            padding: '0',
                            overflow: 'hidden',
                            borderRadius: '16px'
                        }}
                    >
                        {/* Browser Chrome */}
                        <div style={{
                            padding: '12px 16px',
                            background: 'rgba(0,0,0,0.02)',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <span style={{ width: '12px', height: '12px', background: '#ff5f56', borderRadius: '50%' }}></span>
                                <span style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }}></span>
                                <span style={{ width: '12px', height: '12px', background: '#27ca40', borderRadius: '50%' }}></span>
                            </div>
                            <div style={{
                                flex: 1,
                                background: 'rgba(0,0,0,0.04)',
                                borderRadius: '6px',
                                padding: '6px 12px',
                                fontSize: '0.85rem',
                                color: '#666',
                                fontFamily: 'monospace'
                            }}>
                                {project.liveUrl.replace('https://', '')}
                            </div>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '6px 12px',
                                    background: 'var(--c-primary)',
                                    color: 'white',
                                    borderRadius: '6px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}
                            >
                                {t('project_open_new_tab')}
                            </a>
                        </div>
                        {/* Iframe */}
                        <iframe
                            src={project.liveUrl}
                            style={{
                                width: '100%',
                                height: '600px',
                                border: 'none',
                                display: 'block'
                            }}
                            title={`${project.title} ${t('project_live_preview')}`}
                            loading="lazy"
                        />
                    </div>
                </section>
            )}

            {/* About */}
            <section className="animate-fade-in-up animate-delay-2" style={{ marginBottom: '3rem' }}>
                <h2 className="section-title">
                    {t('project_about')}
                </h2>
                <div
                    className="card"
                    style={{
                        padding: '2rem',
                        marginTop: '1.5rem',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.9
                    }}
                >
                    {language === 'ja' ? project.longDesc_ja : project.longDesc_en}
                </div>
            </section>

            {/* Challenges */}
            <section className="animate-fade-in-up animate-delay-3">
                <h2 className="section-title">
                    {t('project_challenges')}
                </h2>
                <div className="card" style={{ padding: '2rem', marginTop: '1.5rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 2 }}>
                        {(language === 'ja' ? project.challenges_ja : project.challenges_en).map((challenge, i) => (
                            <li key={i} style={{ marginBottom: '0.75rem' }}>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Actions */}
            <div className="animate-fade-in-up" style={{ marginTop: '3rem', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        {t('project_visit_site')}
                    </a>
                )}
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        GitHub
                    </a>
                )}
            </div>
        </main>
    );
}
