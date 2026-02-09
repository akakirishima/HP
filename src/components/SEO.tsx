import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
};

export default function SEO({
    title,
    description,
    image = "/og-default.svg",
    url
}: SEOProps) {
    const { language } = useLanguage();
    const defaultDescription =
        language === 'ja'
            ? "Web開発者Kirishimaのポートフォリオサイトです。制作実績やブログを掲載しています。"
            : language === 'ko'
            ? "웹 개발자 Kirishima의 포트폴리오 사이트입니다. 제작 실적과 블로그 글을 소개합니다."
            : language === 'zh'
            ? "这是 Web 开发者 Kirishima 的作品集网站，收录项目作品与博客文章。"
            : "Kirishima's portfolio site featuring projects and blog posts about web development.";
    const resolvedDescription = description ?? defaultDescription;
    const siteTitle = "Kirishima's Portfolio";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined;
    const normalizedSiteUrl = siteUrl?.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : normalizedSiteUrl || '');
    const buildAbsoluteUrl = (value?: string) => {
        if (!value) return undefined;
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        if (!normalizedSiteUrl) return value;
        const normalizedPath = value.startsWith('/') ? value : `/${value}`;
        return `${normalizedSiteUrl}${normalizedPath}`;
    };
    const ogImage = buildAbsoluteUrl(image);

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={resolvedDescription} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={resolvedDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {currentUrl && <meta property="og:url" content={currentUrl} />}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={resolvedDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {currentUrl && <link rel="canonical" href={currentUrl} />}
        </Helmet>
    );
}
