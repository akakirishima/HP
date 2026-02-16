import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
  const markdown = language === 'ja' ? post.content_ja : language === 'ko' ? post.content_ko : post.content_en;

  return (
    <main className="section page page--medium">
      <SEO title={title} description={description} url={canonical} image={post.image} />
      <Link to="/blog" className="blog-back">
        {t('blog_back')}
      </Link>
      {language === 'zh' && (
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {t('content_notice_en_fallback')}
        </p>
      )}

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
          <ReactMarkdown
            skipHtml
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
