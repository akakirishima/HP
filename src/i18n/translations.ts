export type Language = 'ja' | 'en' | 'ko' | 'zh';

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
    | 'contact_status_unconfirmed'
    | 'contact_direct_email'
    | 'home_cta_portfolio'
    | 'home_cta_contact'
    | 'home_news_title'
    | 'content_notice_en_fallback'
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
    | 'nav_language'
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
        contact_status_unconfirmed: '送信を受け付けましたが、送信結果を確認できませんでした。必要に応じてメールでもご連絡ください。',
        contact_direct_email: 'または直接メールでも受け付けています：',
        home_cta_portfolio: '作品を見る',
        home_cta_contact: 'お問い合わせ',
        home_news_title: '最新情報',
        content_notice_en_fallback: '※ 一部のコンテンツ（ブログ本文・実績詳細など）は現在英語表示です。',
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
        nav_language: '言語',
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
        contact_status_unconfirmed: 'Your message was submitted, but delivery could not be verified. Please email directly if needed.',
        contact_direct_email: 'Or reach out directly via email:',
        home_cta_portfolio: 'View Portfolio',
        home_cta_contact: 'Contact Me',
        home_news_title: 'Latest News',
        content_notice_en_fallback: '* Some content (for example, blog bodies and project details) is currently shown in English.',
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
        nav_language: 'Language',
        loading: 'Loading...',
        footer_copyright: '© {year} My Portfolio. All Rights Reserved.',
    },
    ko: {
        site_title: '나의 포트폴리오',
        nav_home: '홈',
        nav_work: '경력',
        nav_blog: '블로그',
        nav_portfolio: '포트폴리오',
        nav_contact: '문의',
        hero_title: '창의성을,\n형태로 만들다.',
        hero_subtitle: '웹 개발자 / UI 디자이너',
        hero_scroll: 'SCROLL',
        work_title: '경력',
        work_desc: '지금까지의 경력과 프로젝트 경험을 소개합니다.',
        blog_title: '블로그',
        blog_desc: '기술과 디자인에 대한 생각, 일상의 배움을 정리합니다.',
        blog_read_more: '자세히 보기 →',
        blog_not_found_title: '게시물을 찾을 수 없습니다',
        blog_back: '← 블로그 목록으로',
        portfolio_title: '포트폴리오',
        portfolio_desc: '제작한 웹사이트와 애플리케이션의 갤러리.',
        contact_title: '문의',
        contact_desc: '의뢰나 상담이 있으시면 편하게 연락해주세요.',
        contact_company_label: '회사명',
        contact_label_name: '이름',
        contact_label_email: '이메일',
        contact_label_message: '메시지',
        contact_placeholder_name: '홍길동',
        contact_placeholder_message: '문의 내용을 입력해주세요...',
        contact_send: '보내기',
        contact_sending: '전송 중...',
        contact_status_success: '전송되었습니다. 감사합니다!',
        contact_status_error: '전송에 실패했습니다. 입력 내용을 확인해주세요.',
        contact_status_config_error: '전송 대상이 설정되어 있지 않습니다.',
        contact_status_unconfirmed: '전송 요청은 접수되었지만 결과를 확인할 수 없습니다. 필요하면 이메일로도 연락해 주세요.',
        contact_direct_email: '또는 이메일로 직접 문의하세요:',
        home_cta_portfolio: '작업 보기',
        home_cta_contact: '문의하기',
        home_news_title: '최신 소식',
        content_notice_en_fallback: '※ 일부 콘텐츠(블로그 본문, 프로젝트 상세 등)는 현재 영어로 표시됩니다.',
        home_skills_title: '스킬',
        profile_role: '웹 개발자 / UI 디자이너',
        profile_name: '키리시마',
        profile_image_alt: '프로필',
        profile_bio: '도쿄에서 활동하는 웹 개발자입니다. 사용성과 아름다움을 겸비한 디지털 프로덕트를 만드는 데 열정을 가지고 있습니다.',
        profile_expand: '더 보기',
        profile_collapse: '닫기',
        profile_detail: '대학 연구를 통해 데이터 분석과 시각화에 흥미를 갖게 되었고, 이를 계기로 웹 개발의 세계에 들어왔습니다. 프론트엔드 기술을 중심으로 사용자 경험을 극대화하는 인터페이스 설계를 강점으로 삼고 있습니다.',
        profile_view_resume: '경력 보기',
        skill_frontend: '프론트엔드',
        skill_backend: '백엔드',
        skill_design: '디자인',
        skill_tools: '도구',
        project_not_found_title: '프로젝트를 찾을 수 없습니다',
        project_back: '← 포트폴리오로 돌아가기',
        project_live_preview: '라이브 미리보기',
        project_open_new_tab: '새 탭에서 열기',
        project_about: '프로젝트 소개',
        project_challenges: '기술적 도전 / 어려움',
        project_visit_site: '사이트 보기 →',
        nav_toggle: '메뉴 열기/닫기',
        nav_language: '언어',
        loading: '로딩 중...',
        footer_copyright: '© {year} My Portfolio. 모든 권리 보유.',
    },
    zh: {
        site_title: '我的作品集',
        nav_home: '首页',
        nav_work: '经历',
        nav_blog: '博客',
        nav_portfolio: '作品集',
        nav_contact: '联系',
        hero_title: '将创意，\n化为现实。',
        hero_subtitle: 'Web 开发者 / UI 设计师',
        hero_scroll: '滚动',
        work_title: '经历',
        work_desc: '介绍我迄今为止的职业经历与项目经验。',
        blog_title: '博客',
        blog_desc: '记录关于技术与设计的思考，以及日常学习心得。',
        blog_read_more: '阅读更多 →',
        blog_not_found_title: '未找到文章',
        blog_back: '← 返回博客列表',
        portfolio_title: '作品集',
        portfolio_desc: '我制作的网站与应用程序作品展示。',
        contact_title: '联系',
        contact_desc: '欢迎随时联系我，洽谈合作或咨询。',
        contact_company_label: '公司',
        contact_label_name: '姓名',
        contact_label_email: '邮箱',
        contact_label_message: '留言',
        contact_placeholder_name: '张三',
        contact_placeholder_message: '请输入您的留言...',
        contact_send: '发送',
        contact_sending: '发送中...',
        contact_status_success: '已发送，感谢您的联系！',
        contact_status_error: '发送失败，请检查输入内容。',
        contact_status_config_error: '联系端点尚未配置。',
        contact_status_unconfirmed: '已提交发送请求，但无法确认送达结果。如有需要，请通过邮件直接联系。',
        contact_direct_email: '或者也可以直接发送邮件：',
        home_cta_portfolio: '查看作品',
        home_cta_contact: '联系我',
        home_news_title: '最新动态',
        content_notice_en_fallback: '※ 部分内容（如博客正文、项目详情）目前仅提供英文。',
        home_skills_title: '技能',
        profile_role: 'Web 开发者 / UI 设计师',
        profile_name: 'Kirishima',
        profile_image_alt: '个人头像',
        profile_bio: '我是一名常驻东京的 Web 开发者，热衷于打造兼具易用性与美感的数字产品。',
        profile_expand: '了解更多',
        profile_collapse: '收起',
        profile_detail: '在大学研究中，我对数据分析与可视化产生兴趣，由此走入 Web 开发领域。专注前端技术，擅长设计最大化用户体验的界面。',
        profile_view_resume: '查看经历',
        skill_frontend: '前端',
        skill_backend: '后端',
        skill_design: '设计',
        skill_tools: '工具',
        project_not_found_title: '未找到项目',
        project_back: '← 返回作品集',
        project_live_preview: '在线预览',
        project_open_new_tab: '在新标签页打开',
        project_about: '关于项目',
        project_challenges: '技术挑战',
        project_visit_site: '访问网站 →',
        nav_toggle: '切换菜单',
        nav_language: '语言',
        loading: '加载中...',
        footer_copyright: '© {year} My Portfolio. 保留所有权利。',
    }
};
