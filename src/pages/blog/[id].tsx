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

  const title = language === 'ja' ? post.title_ja : language === 'ko' ? post.title_ko : post.title_en;
  const description = language === 'ja' ? post.excerpt_ja : language === 'ko' ? post.excerpt_ko : post.excerpt_en;
  const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  const normalized = siteUrl?.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const canonical = normalized ? `${normalized}/blog/${post.id}` : undefined;

  const renderParagraph = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={`link-${index}`} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      return <span key={`text-${index}`}>{part}</span>;
    });
  };

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
          {(language === 'ja' ? post.content_ja : language === 'ko' ? post.content_ko : post.content_en).map((paragraph, i) => (
            <p key={i}>{renderParagraph(paragraph)}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
