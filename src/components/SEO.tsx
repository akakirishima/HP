import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

type SEOProps = {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
};

const DEFAULT_SITE_URL = 'https://hp-six-beryl.vercel.app';
const SITE_TITLE = 'akakirishima';
const PROFILE_IMAGE_URL = `${DEFAULT_SITE_URL}/github-avatar.png`;
const GITHUB_URL = 'https://github.com/akakirishima';

const seoCopy: Record<Language, { homeTitle: string; description: string; structuredDescription: string }> = {
    ja: {
        homeTitle: `${SITE_TITLE} | 宮崎のProduct-minded Engineer`,
        description:
            '宮崎でWeb開発・アプリ開発・AI研究に取り組むProduct-minded Engineer、akakirishimaのポートフォリオサイトです。赤霧島としても検索される制作実績やブログを掲載しています。',
        structuredDescription:
            '宮崎でWeb開発、アプリ開発、AI研究に取り組むProduct-minded Engineer。',
    },
    en: {
        homeTitle: `${SITE_TITLE} | Product-minded Engineer in Miyazaki`,
        description:
            "akakirishima is a Miyazaki-based Product-minded Engineer working on web development, app development, and AI research. This portfolio is also searchable as 赤霧島.",
        structuredDescription:
            'A Miyazaki-based Product-minded Engineer working on web development, app development, and AI research.',
    },
    ko: {
        homeTitle: `${SITE_TITLE} | 미야자키의 Product-minded Engineer`,
        description:
            'akakirishima는 미야자키에서 웹 개발, 앱 개발, AI 연구에 참여하는 Product-minded Engineer입니다. 이 포트폴리오는 赤霧島로도 검색할 수 있습니다.',
        structuredDescription:
            '미야자키에서 웹 개발, 앱 개발, AI 연구에 참여하는 Product-minded Engineer.',
    },
    zh: {
        homeTitle: `${SITE_TITLE} | 宫崎的 Product-minded Engineer`,
        description:
            'akakirishima 是在宫崎从事 Web 开发、应用开发与 AI 研究的 Product-minded Engineer。这个作品集也可以通过 赤霧島 搜索到。',
        structuredDescription:
            '在宫崎从事 Web 开发、应用开发与 AI 研究的 Product-minded Engineer。',
    },
};

export default function SEO({
    title,
    description,
    image = "/og-default.svg",
    url
}: SEOProps) {
    const { language } = useLanguage();
    const copy = seoCopy[language];
    const defaultDescription = copy.description;
    const resolvedDescription = description ?? defaultDescription;
    const fullTitle = title ? `${title} | ${SITE_TITLE}` : copy.homeTitle;
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? DEFAULT_SITE_URL;
    const normalizedSiteUrl = siteUrl?.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
    const currentPath = typeof window !== 'undefined'
        ? `${window.location.pathname}${window.location.search}`
        : '/';
    const currentUrl = url || (normalizedSiteUrl ? `${normalizedSiteUrl}${currentPath === '/' ? '' : currentPath}` : '');
    const buildAbsoluteUrl = (value?: string) => {
        if (!value) return undefined;
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        if (!normalizedSiteUrl) return value;
        const normalizedPath = value.startsWith('/') ? value : `/${value}`;
        return `${normalizedSiteUrl}${normalizedPath}`;
    };
    const ogImage = buildAbsoluteUrl(image);
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${DEFAULT_SITE_URL}/#person`,
                name: SITE_TITLE,
                alternateName: '赤霧島',
                url: `${DEFAULT_SITE_URL}/`,
                image: PROFILE_IMAGE_URL,
                sameAs: [GITHUB_URL],
                jobTitle: 'Product-minded Engineer',
                description: copy.structuredDescription,
                homeLocation: {
                    '@type': 'Place',
                    name: 'Miyazaki, Japan',
                },
                knowsAbout: ['Web development', 'App development', 'AI research', 'React', 'TypeScript'],
            },
            {
                '@type': 'WebSite',
                '@id': `${DEFAULT_SITE_URL}/#website`,
                name: SITE_TITLE,
                alternateName: '赤霧島',
                url: `${DEFAULT_SITE_URL}/`,
                description: defaultDescription,
                inLanguage: ['ja', 'en', 'ko', 'zh'],
                publisher: {
                    '@id': `${DEFAULT_SITE_URL}/#person`,
                },
                areaServed: {
                    '@type': 'Place',
                    name: 'Miyazaki, Japan',
                },
            },
        ],
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={resolvedDescription} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={resolvedDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {currentUrl && <meta property="og:url" content={currentUrl} />}
            <meta property="og:site_name" content={SITE_TITLE} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={resolvedDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {currentUrl && <link rel="canonical" href={currentUrl} />}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
    );
}
