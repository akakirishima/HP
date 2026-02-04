export type Language = 'ja' | 'en';

export type TranslationKeys =
    | 'site_title'
    | 'nav_home'
    | 'nav_work'
    | 'nav_blog'
    | 'nav_portfolio'
    | 'nav_contact'
    | 'hero_title'
    | 'hero_subtitle'
    | 'hero_scroll'
    | 'work_title'
    | 'work_desc'
    | 'blog_title'
    | 'blog_desc'
    | 'blog_read_more'
    | 'blog_not_found_title'
    | 'blog_back'
    | 'portfolio_title'
    | 'portfolio_desc'
    | 'contact_title'
    | 'contact_desc'
    | 'contact_company_label'
    | 'contact_label_name'
    | 'contact_label_email'
    | 'contact_label_message'
    | 'contact_placeholder_name'
    | 'contact_placeholder_message'
    | 'contact_send'
    | 'contact_sending'
    | 'contact_status_success'
    | 'contact_status_error'
    | 'contact_status_config_error'
    | 'contact_direct_email'
    | 'home_cta_portfolio'
    | 'home_cta_contact'
    | 'home_news_title'
    | 'home_skills_title'
    | 'profile_role'
    | 'profile_name'
    | 'profile_image_alt'
    | 'profile_bio'
    | 'profile_expand'
    | 'profile_collapse'
    | 'profile_detail'
    | 'profile_view_resume'
    | 'skill_frontend'
    | 'skill_backend'
    | 'skill_design'
    | 'skill_tools'
    | 'project_not_found_title'
    | 'project_back'
    | 'project_live_preview'
    | 'project_open_new_tab'
    | 'project_about'
    | 'project_challenges'
    | 'project_visit_site'
    | 'nav_toggle'
    | 'nav_switch_to_en'
    | 'nav_switch_to_ja'
    | 'loading'
    | 'footer_copyright';

export const translations: Record<Language, Record<TranslationKeys, string>> = {
    ja: {
        site_title: 'My Portfolio',
        nav_home: 'ホーム',
        nav_work: '経歴',
        nav_blog: 'ブログ',
        nav_portfolio: '作品集',
        nav_contact: 'お問い合わせ',
        hero_title: '創造性を、\nかたちにする。',
        hero_subtitle: 'Web Developer / UI Designer',
        hero_scroll: 'SCROLL',
        work_title: '経歴',
        work_desc: 'これまでのキャリアとプロジェクト経験を紹介します。',
        blog_title: 'ブログ',
        blog_desc: '技術やデザインに関する考察、日々の学びを綴ります。',
        blog_read_more: '続きを読む →',
        blog_not_found_title: '記事が見つかりません',
        blog_back: '← ブログ一覧へ',
        portfolio_title: '作品集',
        portfolio_desc: '制作したWebサイトやアプリケーションのギャラリー。',
        contact_title: 'お問い合わせ',
        contact_desc: 'お仕事のご依頼やご相談はこちらからお気軽にどうぞ。',
        contact_company_label: '会社名',
        contact_label_name: 'お名前',
        contact_label_email: 'メールアドレス',
        contact_label_message: 'メッセージ',
        contact_placeholder_name: '山田 太郎',
        contact_placeholder_message: 'お問い合わせ内容をご記入ください...',
        contact_send: '送信する',
        contact_sending: '送信中...',
        contact_status_success: '送信しました。ありがとうございます！',
        contact_status_error: '送信に失敗しました。入力内容を確認してください。',
        contact_status_config_error: '送信先が未設定です。',
        contact_direct_email: 'または直接メールでも受け付けています：',
        home_cta_portfolio: '作品を見る',
        home_cta_contact: 'お問い合わせ',
        home_news_title: '最新情報',
        home_skills_title: 'スキル',
        profile_role: 'Web Developer / UI Designer',
        profile_name: '霧島',
        profile_image_alt: 'プロフィール',
        profile_bio: '東京を拠点に活動するWebデベロッパーです。使いやすさと美しさを兼ね備えたデジタルプロダクトを作ることに情熱を注いでいます。',
        profile_expand: 'もっと詳しく',
        profile_collapse: '閉じる',
        profile_detail: '大学での研究を通じてデータ分析と可視化に興味を持ち、Web開発の世界に入りました。フロントエンド技術を中心に、ユーザー体験を最大化するインターフェース設計を得意としています。',
        profile_view_resume: '経歴を見る',
        skill_frontend: 'フロントエンド',
        skill_backend: 'バックエンド',
        skill_design: 'デザイン',
        skill_tools: 'ツール',
        project_not_found_title: 'プロジェクトが見つかりません',
        project_back: '← 作品集に戻る',
        project_live_preview: 'ライブプレビュー',
        project_open_new_tab: '新しいタブで開く',
        project_about: 'プロジェクトについて',
        project_challenges: '技術的チャレンジ / 苦労話',
        project_visit_site: 'サイトを見る →',
        nav_toggle: 'メニューを開閉',
        nav_switch_to_en: 'Switch to English',
        nav_switch_to_ja: 'Switch to 日本語',
        loading: '読み込み中...',
        footer_copyright: '© {year} My Portfolio. All Rights Reserved.',
    },
    en: {
        site_title: 'My Portfolio',
        nav_home: 'Home',
        nav_work: 'Work',
        nav_blog: 'Blog',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        hero_title: 'Create with Passion.',
        hero_subtitle: 'Web Developer / UI Designer',
        hero_scroll: 'SCROLL',
        work_title: 'Work',
        work_desc: 'My professional career and project experiences.',
        blog_title: 'Blog',
        blog_desc: 'Thoughts on technology, design, and daily learnings.',
        blog_read_more: 'Read more →',
        blog_not_found_title: 'Post Not Found',
        blog_back: '← Back to Blog',
        portfolio_title: 'Portfolio',
        portfolio_desc: 'A gallery of websites and applications I have created.',
        contact_title: 'Contact',
        contact_desc: 'Feel free to reach out for inquiries or collaborations.',
        contact_company_label: 'Company',
        contact_label_name: 'Name',
        contact_label_email: 'Email',
        contact_label_message: 'Message',
        contact_placeholder_name: 'John Doe',
        contact_placeholder_message: 'Write your message here...',
        contact_send: 'Send Message',
        contact_sending: 'Sending...',
        contact_status_success: 'Message sent. Thank you!',
        contact_status_error: 'Failed to send. Please check your input.',
        contact_status_config_error: 'Contact endpoint is not configured.',
        contact_direct_email: 'Or reach out directly via email:',
        home_cta_portfolio: 'View Portfolio',
        home_cta_contact: 'Contact Me',
        home_news_title: 'Latest News',
        home_skills_title: 'Skills',
        profile_role: 'Web Developer / UI Designer',
        profile_name: 'Kirishima',
        profile_image_alt: 'Profile',
        profile_bio: 'A Web Developer based in Tokyo. Passionate about creating digital products that combine usability and aesthetics.',
        profile_expand: 'More About Me',
        profile_collapse: 'Close',
        profile_detail: 'I became interested in data analysis and visualization through my university research, which led me into the world of web development. Specializing in frontend technologies, I excel at designing interfaces that maximize user experience.',
        profile_view_resume: 'View Full Resume',
        skill_frontend: 'Frontend',
        skill_backend: 'Backend',
        skill_design: 'Design',
        skill_tools: 'Tools',
        project_not_found_title: 'Project Not Found',
        project_back: '← Back to Portfolio',
        project_live_preview: 'Live Preview',
        project_open_new_tab: 'Open in New Tab',
        project_about: 'About This Project',
        project_challenges: 'Technical Challenges',
        project_visit_site: 'Visit Site →',
        nav_toggle: 'Toggle menu',
        nav_switch_to_en: 'Switch to English',
        nav_switch_to_ja: 'Switch to 日本語',
        loading: 'Loading...',
        footer_copyright: '© {year} My Portfolio. All Rights Reserved.',
    }
};
