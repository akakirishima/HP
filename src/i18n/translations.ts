export type Language = 'ja' | 'en';

export type TranslationKeys =
    | 'site_title'
    | 'nav_home'
    | 'nav_work'
    | 'nav_blog'
    | 'nav_portfolio'
    | 'nav_contact'
    | 'hero_title_ja'
    | 'hero_title_en'
    | 'hero_subtitle'
    | 'hero_scroll'
    | 'work_title'
    | 'work_desc'
    | 'blog_title'
    | 'blog_desc'
    | 'portfolio_title'
    | 'portfolio_desc'
    | 'contact_title'
    | 'contact_desc'
    | 'footer_copyright';

export const translations: Record<Language, Record<TranslationKeys, string>> = {
    ja: {
        site_title: 'My Portfolio',
        nav_home: 'ホーム',
        nav_work: '経歴',
        nav_blog: 'ブログ',
        nav_portfolio: '作品集',
        nav_contact: 'お問い合わせ',
        hero_title_ja: '創造性を、\nかたちにする。',
        hero_title_en: 'Create with Passion.',
        hero_subtitle: 'Web Developer / UI Designer',
        hero_scroll: 'SCROLL',
        work_title: '経歴',
        work_desc: 'これまでのキャリアとプロジェクト経験を紹介します。',
        blog_title: 'ブログ',
        blog_desc: '技術やデザインに関する考察、日々の学びを綴ります。',
        portfolio_title: '作品集',
        portfolio_desc: '制作したWebサイトやアプリケーションのギャラリー。',
        contact_title: 'お問い合わせ',
        contact_desc: 'お仕事のご依頼やご相談はこちらからお気軽にどうぞ。',
        footer_copyright: '© 2026 My Portfolio. All Rights Reserved.',
    },
    en: {
        site_title: 'My Portfolio',
        nav_home: 'Home',
        nav_work: 'Work',
        nav_blog: 'Blog',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        hero_title_ja: 'Shaping Creativity.',
        hero_title_en: 'Create with Passion.',
        hero_subtitle: 'Web Developer / UI Designer',
        hero_scroll: 'SCROLL',
        work_title: 'Work',
        work_desc: 'My professional career and project experiences.',
        blog_title: 'Blog',
        blog_desc: 'Thoughts on technology, design, and daily learnings.',
        portfolio_title: 'Portfolio',
        portfolio_desc: 'A gallery of websites and applications I have created.',
        contact_title: 'Contact',
        contact_desc: 'Feel free to reach out for inquiries or collaborations.',
        footer_copyright: '© 2026 My Portfolio. All Rights Reserved.',
    }
};
