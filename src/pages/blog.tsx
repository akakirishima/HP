// Blog page
import { useLanguage } from "../contexts/LanguageContext";
import { featuredAppearances } from "../data/featuredAppearances";

export default function BlogPage() {
  const { t, language } = useLanguage();

  return (
    <main className="section page page--medium">
      <h1 className="section-title animate-fade-in-up">
        {t('blog_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('blog_desc')}
      </p>
      {language === 'zh' && (
        <p style={{ color: '#666', marginTop: '-2rem', marginBottom: '2rem' }}>
          {t('content_notice_en_fallback')}
        </p>
      )}

      <div className="blog-list">
        {featuredAppearances.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="blog-card animate-fade-in-up"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="blog-meta">
              <span className="blog-date">{item.date}</span>
              <div className="blog-tags">
                <span className="tag">{item.source}</span>
              </div>
            </div>
            <h3 className="blog-title">
              {item.title[language]}
            </h3>
            <p className="blog-excerpt">
              {item.description[language]}
            </p>
            <span className="blog-link">
              {t('home_featured_link')}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
