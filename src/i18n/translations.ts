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
    | 'home_featured_title'
    | 'home_featured_desc'
    | 'home_featured_link'
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
        site_title: 'akakirishima',
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
        blog_desc: '外部サイトで紹介された活動をまとめています。',
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
        contact_status_config_error: '送信先の設定が未設定または不正です。',
        contact_status_unconfirmed: '送信しました',
        contact_direct_email: 'または直接メールでも受け付けています：',
        home_cta_portfolio: '作品を見る',
        home_cta_contact: 'お問い合わせ',
        home_news_title: '最新情報',
        home_featured_title: '掲載・参加実績',
        home_featured_desc: '外部メディアや大学・団体サイトで紹介された活動をまとめています。',
        home_featured_link: '記事を見る →',
        content_notice_en_fallback: '※ 一部のコンテンツ（ブログ本文・実績詳細など）は現在英語表示です。',
        home_skills_title: 'スキル',
        profile_role: 'Product-minded Engineer',
        profile_name: 'akakirishima',
        profile_image_alt: 'プロフィール',
        profile_bio: 'ものづくりを通じて、人に喜んでもらえる体験をつくることが好きです。\n\nWeb開発、アプリ開発、AI研究に取り組みながら、「何を使うか」ではなく「何を届けるか」を大切にしています。',
        profile_expand: 'もっと詳しく',
        profile_collapse: '閉じる',
        profile_detail: '幼い頃から、ものづくりを通じて人に喜んでもらうことが好きでした。\n\n大学ではWeb開発、アプリ開発、AI研究に取り組み、ハッカソンやチーム開発を通じて、技術そのものよりも「誰に、どんな体験を届けるか」を大切にするようになりました。\n\n現在は、新生児の非接触モニタリング研究や、日々の記録を楽しく継続できるアプリ「Hello New Me」の開発に取り組んでいます。\n\n何を使うかではなく、何を届けるか。 その視点で価値提供を目指す、Product-minded Engineerです。',
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
        footer_copyright: '© {year} akakirishima. All Rights Reserved.',
    },
    en: {
        site_title: 'akakirishima',
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
        blog_desc: 'Activities introduced on external websites.',
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
        contact_status_config_error: 'Contact endpoint is missing or invalid.',
        contact_status_unconfirmed: 'Message submitted. Google Forms does not allow delivery verification from the browser. Please check the responses sheet.',
        contact_direct_email: 'Or reach out directly via email:',
        home_cta_portfolio: 'View Portfolio',
        home_cta_contact: 'Contact Me',
        home_news_title: 'Latest News',
        home_featured_title: 'Featured Activities',
        home_featured_desc: 'Activities introduced by external media, university pages, and organization websites.',
        home_featured_link: 'View article →',
        content_notice_en_fallback: '* Some content (for example, blog bodies and project details) is currently shown in English.',
        home_skills_title: 'Skills',
        profile_role: 'Product-minded Engineer',
        profile_name: 'akakirishima',
        profile_image_alt: 'Profile',
        profile_bio: 'I like creating experiences that make people happy through building products.\n\nWhile working on web development, app development, and AI research, I value not just what technology to use, but what experience to deliver.',
        profile_expand: 'More About Me',
        profile_collapse: 'Close',
        profile_detail: 'Since childhood, I have enjoyed making things that bring joy to other people.\n\nAt university, I have worked on web development, app development, and AI research. Through hackathons and team development, I came to value not only the technology itself, but who it serves and what kind of experience it delivers.\n\nI am currently working on research in non-contact newborn monitoring and developing Hello New Me, an app that makes daily reflection easier and more enjoyable to continue.\n\nNot just what to use, but what to deliver. With that perspective, I aim to create value as a Product-minded Engineer.',
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
        footer_copyright: '© {year} akakirishima. All Rights Reserved.',
    },
    ko: {
        site_title: 'akakirishima',
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
        blog_desc: '외부 사이트에 소개된 활동을 정리했습니다.',
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
        contact_status_config_error: '전송 대상 설정이 없거나 올바르지 않습니다.',
        contact_status_unconfirmed: '전송되었습니다. Google Forms 특성상 브라우저에서 전송 결과를 확인할 수 없습니다. 응답 시트를 확인해 주세요.',
        contact_direct_email: '또는 이메일로 직접 문의하세요:',
        home_cta_portfolio: '작업 보기',
        home_cta_contact: '문의하기',
        home_news_title: '최신 소식',
        home_featured_title: '소개된 활동',
        home_featured_desc: '외부 미디어, 대학, 단체 사이트에 소개된 활동을 정리했습니다.',
        home_featured_link: '기사 보기 →',
        content_notice_en_fallback: '※ 일부 콘텐츠(블로그 본문, 프로젝트 상세 등)는 현재 영어로 표시됩니다.',
        home_skills_title: '스킬',
        profile_role: 'Product-minded Engineer',
        profile_name: 'akakirishima',
        profile_image_alt: '프로필',
        profile_bio: '만드는 일을 통해 사람들에게 기쁜 경험을 전하는 것을 좋아합니다.\n\n웹 개발, 앱 개발, AI 연구에 참여하며 무엇을 쓰는가보다 어떤 경험을 전달하는가를 중요하게 생각합니다.',
        profile_expand: '더 보기',
        profile_collapse: '닫기',
        profile_detail: '어릴 때부터 무언가를 만들어 사람들을 기쁘게 하는 것을 좋아했습니다.\n\n대학에서는 웹 개발, 앱 개발, AI 연구에 참여했고, 해커톤과 팀 개발을 통해 기술 그 자체보다 누구에게 어떤 경험을 전달할지를 더 중요하게 생각하게 되었습니다.\n\n현재는 신생아 비접촉 모니터링 연구와, 매일의 기록을 즐겁게 이어갈 수 있는 앱 「Hello New Me」 개발에 참여하고 있습니다.\n\n무엇을 쓰는지가 아니라 무엇을 전달하는가. 그 관점으로 가치를 만들고자 하는 Product-minded Engineer입니다.',
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
        footer_copyright: '© {year} akakirishima. 모든 권리 보유.',
    },
    zh: {
        site_title: 'akakirishima',
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
        blog_desc: '整理外部网站介绍过的活动。',
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
        contact_status_config_error: '联系端点未设置或配置无效。',
        contact_status_unconfirmed: '已提交发送。由于 Google Forms 的限制，浏览器无法确认送达结果。请在响应表中确认。',
        contact_direct_email: '或者也可以直接发送邮件：',
        home_cta_portfolio: '查看作品',
        home_cta_contact: '联系我',
        home_news_title: '最新动态',
        home_featured_title: '报道与参与经历',
        home_featured_desc: '整理外部媒体、大学与机构网站介绍过的活动。',
        home_featured_link: '查看文章 →',
        content_notice_en_fallback: '※ 部分内容（如博客正文、项目详情）目前仅提供英文。',
        home_skills_title: '技能',
        profile_role: 'Product-minded Engineer',
        profile_name: 'akakirishima',
        profile_image_alt: '个人头像',
        profile_bio: '我喜欢通过制作产品，为他人带来开心的体验。\n\n在 Web 开发、应用开发和 AI 研究中，我重视的不只是使用什么技术，而是交付什么样的体验。',
        profile_expand: '了解更多',
        profile_collapse: '收起',
        profile_detail: '从小我就喜欢通过制作东西让别人开心。\n\n在大学期间，我参与了 Web 开发、应用开发和 AI 研究。通过黑客松和团队开发，我逐渐意识到，比起技术本身，更重要的是为谁带来怎样的体验。\n\n目前，我正在参与新生儿非接触式监测研究，并开发一款让日常记录更容易持续、更有乐趣的应用「Hello New Me」。\n\n重要的不是使用什么技术，而是交付什么价值。我希望以这样的视角，成为一名 Product-minded Engineer。',
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
        footer_copyright: '© {year} akakirishima. 保留所有权利。',
    }
};
