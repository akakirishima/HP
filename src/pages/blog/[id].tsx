import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getPostById } from '../../data/posts';
import SEO from '../../components/SEO';

export default function BlogDetailPage() {
  const { language, t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || '');

  if (!post) {
    return (
      <main className="section page page--tight" style={{ padding: '4rem 1.5rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          {t('blog_not_found_title')}
        </h1>
        <Link to="/blog" className="btn btn-outline">
          {t('blog_back')}
        </Link>
      </main>
    );
  }

  const title = language === 'ja' ? post.title_ja : post.title_en;
  const description = language === 'ja' ? post.excerpt_ja : post.excerpt_en;
  const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  const normalized = siteUrl?.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const canonical = normalized ? `${normalized}/blog/${post.id}` : undefined;

  return (
    <main className="section page page--medium">
      <SEO title={title} description={description} url={canonical} image={post.image} />
      <Link to="/blog" className="blog-back">
        {t('blog_back')}
      </Link>

      <div className="blog-detail">
        <div className="blog-meta">
          <span className="blog-date">{post.date}</span>
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <h1 className="blog-title">{title}</h1>
        <div className="blog-content">
          {(language === 'ja' ? post.content_ja : post.content_en).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
