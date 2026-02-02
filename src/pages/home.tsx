import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";
import { newsItems } from '../data/news';

export default function HomePage() {
  const { t, language } = useLanguage();

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
            fontSize: language === 'ja' ? 'clamp(2.5rem, 8vw, 5rem)' : 'clamp(2rem, 7vw, 4.5rem)',
            letterSpacing: language === 'ja' ? '0.02em' : '-0.03em',
          }}
        >
          {t(language === 'ja' ? 'hero_title_ja' : 'hero_title_en')}
        </h1>

        {/* Subtitle */}
        <p className="hero__subtitle animate-fade-in-up animate-delay-2">
          {t('hero_subtitle')}
        </p>

        {/* CTA Button */}
        <div className="hero__cta animate-fade-in-up animate-delay-3">
          <Link to="/portfolio" className="btn btn-primary">
            {language === 'ja' ? '作品を見る' : 'View Portfolio'}
          </Link>
          <Link to="/contact" className="btn btn-outline">
            {language === 'ja' ? 'お問い合わせ' : 'Contact Me'}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll animate-bounce">
          <span>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Profile Section (NEW) */}
      <section className="section-profile">
        <div className="profile-container animate-fade-in-up">
          <div className="profile-image-wrapper">
            <img src="/profile.svg" alt="Profile" className="profile-image" />
          </div>
          <div className="profile-content">
            <h2 className="profile-name">
              {language === 'ja' ? '霧島' : 'Kirishima'}
            </h2>
            <p className="profile-role">
              Web Developer / UI Designer
            </p>
            <p className="profile-bio">
              {language === 'ja'
                ? '東京を拠点に活動するWebデベロッパーです。使いやすさと美しさを兼ね備えたデジタルプロダクトを作ることに情熱を注いでいます。'
                : 'A Web Developer based in Tokyo. Passionate about creating digital products that combine usability and aesthetics.'}
            </p>
            <Link to="/about" className="btn btn-outline" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
              {language === 'ja' ? 'もっと詳しく' : 'More About Me'}
            </Link>
          </div>
        </div>
      </section>

      {/* News / Topics Section */}
      <section className="section page page--detail" style={{ padding: '4rem 1.5rem' }}>
        <h2 className="section-title">
          {language === 'ja' ? '最新情報' : 'Latest News'}
        </h2>

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
                  {language === 'ja' ? item.text_ja : item.text_en}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section (NEW) */}
      <section className="section page page--detail" style={{ padding: '0 1.5rem 6rem' }}>
        <h2 className="section-title">
          {language === 'ja' ? 'スキル' : 'Skills'}
        </h2>

        <div className="skills-grid">
          {[
            { title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js'] },
            { title: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Firebase'] },
            { title: 'Design', items: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'] },
            { title: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
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
