import { Helmet } from 'react-helmet-async';

type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
};

export default function SEO({
    title,
    description = "Web開発者Kirishimaのポートフォリオサイトです。制作実績やブログを掲載しています。",
    image = "/og-default.svg",
    url
}: SEOProps) {
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
            <meta name="description" content={description} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {currentUrl && <meta property="og:url" content={currentUrl} />}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {currentUrl && <link rel="canonical" href={currentUrl} />}
        </Helmet>
    );
}
