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
    image = "/favicon.png",
    url
}: SEOProps) {
    const siteTitle = "Kirishima's Portfolio";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = url || typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
}
