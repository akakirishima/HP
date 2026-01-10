import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePage() {
  const { t, language } = useLanguage();

  return (
    <div className="page-home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}
      >
        {/* Accent bar */}
        <div
          className="animate-fade-in-up"
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #004098, #4DA7E0, #6366f1)',
            borderRadius: '2px',
            marginBottom: '2rem'
          }}
        />

        {/* Main Title with Gradient */}
        <h1
          className="hero__title gradient-text animate-fade-in-up animate-delay-1"
          style={{
            fontSize: language === 'ja' ? 'clamp(2.5rem, 8vw, 5rem)' : 'clamp(2rem, 7vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            whiteSpace: 'pre-line',
            letterSpacing: language === 'ja' ? '0.02em' : '-0.03em',
          }}
        >
          {t(language === 'ja' ? 'hero_title_ja' : 'hero_title_en')}
        </h1>

        {/* Subtitle */}
        <p
          className="hero__subtitle animate-fade-in-up animate-delay-2"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            marginBottom: '3rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.08em',
            color: '#666',
            fontWeight: 500
          }}
        >
          {t('hero_subtitle')}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animate-delay-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#/portfolio" className="btn btn-primary">
            {language === 'ja' ? '作品を見る' : 'View Portfolio'}
          </a>
          <a href="#/contact" className="btn btn-outline">
            {language === 'ja' ? 'お問い合わせ' : 'Contact Me'}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hero__scroll animate-bounce"
          style={{
            marginTop: 'auto',
            paddingTop: '4rem',
            fontSize: '0.75rem',
            color: '#004098',
            letterSpacing: '0.2em',
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>SCROLL</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* News / Topics Section */}
      <section className="section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <h2 className="section-title">
          {language === 'ja' ? '最新情報' : 'Latest News'}
        </h2>

        <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { date: '2026.01.10', text: language === 'ja' ? 'ウェブサイトをリニューアルしました' : 'Website has been renewed' },
              { date: '2026.01.08', text: language === 'ja' ? '新しいプロジェクトを公開しました' : 'New project released' },
              { date: '2026.01.05', text: language === 'ja' ? 'ポートフォリオを更新しました' : 'Portfolio updated' },
            ].map((item, i) => (
              <li
                key={i}
                className="animate-fade-in-up"
                style={{
                  padding: '1.25rem 0',
                  borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  animationDelay: `${0.1 * i}s`
                }}
              >
                <span style={{ fontSize: '0.9rem', color: '#004098', fontWeight: 600, fontFamily: 'Inter', minWidth: '100px' }}>
                  {item.date}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section (NEW) */}
      <section className="section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <h2 className="section-title">
          {language === 'ja' ? 'スキル' : 'Skills'}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '2rem' }}>
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
