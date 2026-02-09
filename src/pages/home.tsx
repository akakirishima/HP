import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";
import { newsItems } from '../data/news';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const isCjk = language === 'ja' || language === 'ko' || language === 'zh';

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero">
        {/* Accent bar */}
        <div className="hero__accent animate-fade-in-up" />

        {/* Main Title with Gradient */}
        <h1
          className="hero__title gradient-text animate-fade-in-up animate-delay-1"
          style={{
            fontSize: isCjk ? 'clamp(2.5rem, 8vw, 5rem)' : 'clamp(2rem, 7vw, 4.5rem)',
            letterSpacing: isCjk ? '0.02em' : '-0.03em',
          }}
        >
          {t('hero_title')}
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-in-up animate-delay-2">
          {t('hero_subtitle')}
        </p>

        {/* CTA Button */}
        <div className="hero__cta animate-fade-in-up animate-delay-3">
          <Link to="/portfolio" className="btn btn-primary">
            {t('home_cta_portfolio')}
          </Link>
          <Link to="/contact" className="btn btn-outline">
            {t('home_cta_contact')}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll animate-bounce">
          <span>{t('hero_scroll')}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Profile Section (NEW) */}
      <section className="section-profile">
        <div className="profile-container animate-fade-in-up">
          <div className="profile-image-wrapper">
            <img src="/profile.svg" alt={t('profile_image_alt')} className="profile-image" />
          </div>
          <div className="profile-content">
            <h2 className="profile-name">
              {t('profile_name')}
            </h2>
            <p className="profile-role">
              {t('profile_role')}
            </p>
            <p className="profile-bio">
              {t('profile_bio')}
            </p>

            <button
              className="btn btn-outline"
              onClick={() => setIsProfileExpanded(!isProfileExpanded)}
              style={{ padding: '8px 24px', fontSize: '0.9rem' }}
            >
              {isProfileExpanded ? t('profile_collapse') : t('profile_expand')}
            </button>

            <div className={`profile-expanded ${isProfileExpanded ? 'open' : ''}`}>
              <p className="profile-detail-text">
                {t('profile_detail')}
              </p>
              <Link to="/work" className="btn btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
                {t('profile_view_resume')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News / Topics Section */}
      <section className="section page page--detail" style={{ padding: '4rem 1.5rem' }}>
        <h2 className="section-title">
          {t('home_news_title')}
        </h2>
        {language === 'zh' && (
          <p style={{ color: '#666', marginTop: '0.75rem', marginBottom: '0' }}>
            {t('content_notice_en_fallback')}
          </p>
        )}

        <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem' }}>
          <ul className="news-list">
            {newsItems.map((item, i) => (
              <li
                key={item.date}
                className="news-item animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <span className="news-date">
                  {item.date}
                </span>
                <span className="news-text">
                  {language === 'ja' ? item.text_ja : language === 'ko' ? item.text_ko : item.text_en}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section (NEW) */}
      <section className="section page page--detail" style={{ padding: '0 1.5rem 6rem' }}>
        <h2 className="section-title">
          {t('home_skills_title')}
        </h2>

        <div className="skills-grid">
          {[
            { title: t('skill_frontend'), items: ['React', 'TypeScript', 'Next.js', 'Vue.js'] },
            { title: t('skill_backend'), items: ['Node.js', 'Python', 'PostgreSQL', 'Firebase'] },
            { title: t('skill_design'), items: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'] },
            { title: t('skill_tools'), items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
          ].map((skill, i) => (
            <div
              key={skill.title}
              className="card animate-fade-in-up"
              style={{ padding: '1.5rem', animationDelay: `${0.1 * i}s` }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#004098', marginBottom: '1rem' }}>
                {skill.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skill.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
