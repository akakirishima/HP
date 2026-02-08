// Blog page
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { posts } from "../data/posts";

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

      <div className="blog-list">
        {posts.map((post, i) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="blog-card animate-fade-in-up"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <h3 className="blog-title">
              {language === 'ja' ? post.title_ja : language === 'ko' ? post.title_ko : post.title_en}
            </h3>
            <p className="blog-excerpt">
              {language === 'ja' ? post.excerpt_ja : language === 'ko' ? post.excerpt_ko : post.excerpt_en}
            </p>
            <span className="blog-link">
              {t('blog_read_more')}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
