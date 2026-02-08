export type Project = {
    id: string;
    title: string;
    desc_ja: string;
    desc_en: string;
    desc_ko: string;
    longDesc_ja: string;
    longDesc_en: string;
    longDesc_ko: string;
    challenges_ja: string[];
    challenges_en: string[];
    challenges_ko: string[];
    tags: string[];
    color: string;
    liveUrl?: string; // URL for iframe embed
    repoUrl?: string;
    year: string;
    image?: string;
};

export const projects: Project[] = [
    {
        id: 'deepself-tree',
        title: 'DeepSelf Tree',
        desc_ja: '自己分析を深掘りするための分岐型ツール。質問に答えていくことで自分自身を発見できる。',
        desc_en: 'A branching tool for deep self-analysis. Discover yourself by answering thought-provoking questions.',
        desc_ko: '자기 분석을 깊게 하기 위한 분기형 도구. 질문에 답하며 자신을 발견할 수 있습니다.',
        longDesc_ja: `DeepSelf Treeは、就活や自己理解のための「分岐型自己分析ツール」です。

ユーザーが入力した回答に対して深掘りの質問が次々と生成され、ツリー構造で自分の思考を可視化できます。
一人で使うだけでなく、共有機能でリンクを送ることで、友人やメンターからも質問してもらえる「共同自己分析」が可能です。`,
        longDesc_en: `DeepSelf Tree is a "branching self-analysis tool" designed for job hunting and self-understanding.

When users input their answers, follow-up questions are generated one after another, allowing them to visualize their thoughts in a tree structure.
Beyond solo use, the sharing feature enables "collaborative self-analysis" where friends and mentors can also ask questions via a shared link.`,
        longDesc_ko: `DeepSelf Tree는 취업 준비와 자기 이해를 위한 '분기형 자기 분석 도구'입니다.

사용자가 입력한 답변에 대해 심화 질문이 연속적으로 생성되어 트리 구조로 사고를 시각화할 수 있습니다.
혼자 사용하는 것뿐 아니라 공유 기능으로 링크를 보내면 친구나 멘토가 질문을 추가하는 '공동 자기 분석'이 가능합니다.`,
        challenges_ja: [
            'ツリー構造のデータ設計と再帰的レンダリングの実装が複雑だった',
            'Supabaseのリアルタイム同期とRLS（Row Level Security）の設計に苦労した',
            '共有機能のゲストアクセス権限管理が難しかった',
            'モバイル対応のツリー表示で、見やすさとインタラクションのバランス調整に時間がかかった'
        ],
        challenges_en: [
            'Designing the tree data structure and implementing recursive rendering was complex',
            'Struggled with Supabase real-time sync and RLS (Row Level Security) design',
            'Managing guest access permissions for the sharing feature was challenging',
            'Balancing readability and interaction for mobile tree display took significant time'
        ],
        challenges_ko: [
            '트리 구조 데이터 설계와 재귀 렌더링 구현이 복잡했다',
            'Supabase 실시간 동기화와 RLS(Row Level Security) 설계에 어려움이 있었다',
            '공유 기능의 게스트 접근 권한 관리가 어려웠다',
            '모바일 트리 표시에서 가독성과 인터랙션의 균형을 맞추는 데 시간이 걸렸다'
        ],
        tags: ['React', 'TypeScript', 'Supabase'],
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        liveUrl: 'https://v0-self-analysis-tool.vercel.app',
        year: '2026',
        image: '/og/project-deepself-tree.svg'
    },
    {
        id: 'portfolio-site',
        title: 'Portfolio Site',
        desc_ja: 'モダンなデザインと多言語対応を備えたポートフォリオサイト。',
        desc_en: 'A modern portfolio website with multilingual support and stunning animations.',
        desc_ko: '모던한 디자인과 다국어 지원을 갖춘 포트폴리오 사이트.',
        longDesc_ja: `このサイト自体がこのプロジェクトです！

東大松尾研究室のWebサイトを参考に、アカデミックかつ先進的な印象を与えるデザインを目指しました。
日本語・英語の切り替え、グラデーションを活かしたUI、Three.jsによる背景アニメーションなどを実装しています。`,
        longDesc_en: `This site itself is this project!

I aimed to create a design that gives an academic yet cutting-edge impression, inspired by the University of Tokyo's Matsuo Lab website.
Features include Japanese/English switching, gradient-based UI, and background animations using Three.js.`,
        longDesc_ko: `이 사이트 자체가 이 프로젝트입니다!

도쿄대 마쓰오 연구실 웹사이트를 참고해 학구적이면서도 진보적인 인상을 주는 디자인을 목표로 했습니다.
일본어/영어 전환, 그라데이션 UI, Three.js 배경 애니메이션 등을 구현했습니다.`,
        challenges_ja: [
            '国際化(i18n)の設計で、型安全性を保ちながらシンプルな実装を目指した',
            'Three.jsのシェーダーでパフォーマンスと見た目のバランス調整',
            'レスポンシブ対応でハンバーガーメニューの挙動調整'
        ],
        challenges_en: [
            'Designed i18n while maintaining type safety with a simple implementation',
            'Balanced performance and visuals with Three.js shaders',
            'Adjusted hamburger menu behavior for responsive design'
        ],
        challenges_ko: [
            '국제화(i18n) 설계에서 타입 안정성을 유지하며 단순한 구현을 목표로 했다',
            'Three.js 셰이더에서 성능과 비주얼의 균형 조정',
            '반응형 대응에서 햄버거 메뉴 동작을 조정'
        ],
        tags: ['React', 'Vite', 'Three.js', 'i18n'],
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        year: '2026',
        image: '/og/project-portfolio-site.svg'
    },
    {
        id: 'task-manager-pro',
        title: 'Task Manager Pro',
        desc_ja: 'チーム向けのタスク管理アプリ。リアルタイム同期とカンバンボード機能を搭載。',
        desc_en: 'A team task management app with real-time sync and Kanban board features.',
        desc_ko: '팀을 위한 작업 관리 앱. 실시간 동기화와 칸반 보드 기능을 탑재.',
        longDesc_ja: `チームでの業務効率化を目的としたタスク管理アプリケーションです。

カンバン形式のドラッグ＆ドロップ、リアルタイム同期、期限通知、ダッシュボード分析などの機能を備えています。`,
        longDesc_en: `A task management application designed to improve team productivity.

Features include Kanban-style drag & drop, real-time sync, deadline notifications, and dashboard analytics.`,
        longDesc_ko: `팀의 업무 효율화를 목표로 한 작업 관리 애플리케이션입니다.

칸반 드래그 앤 드롭, 실시간 동기화, 마감 알림, 대시보드 분석 기능을 갖추었습니다.`,
        challenges_ja: [
            'ドラッグ＆ドロップのライブラリ選定と実装',
            'Firebaseのリアルタイムリスナーの最適化',
            '通知システムのスケジューリング'
        ],
        challenges_en: [
            'Selecting and implementing the drag & drop library',
            'Optimizing Firebase real-time listeners',
            'Scheduling the notification system'
        ],
        challenges_ko: [
            '드래그 앤 드롭 라이브러리 선정과 구현',
            'Firebase 실시간 리스너 최적화',
            '알림 시스템 스케줄링'
        ],
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        year: '2025',
        image: '/og/project-task-manager-pro.svg'
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        desc_ja: 'スケーラブルなECプラットフォーム。決済統合とダッシュボード分析機能を実装。',
        desc_en: 'A scalable e-commerce platform with payment integration and analytics dashboard.',
        desc_ko: '확장 가능한 이커머스 플랫폼. 결제 통합과 대시보드 분석 기능을 구현.',
        longDesc_ja: `個人事業主向けのECプラットフォームです。

Stripe決済統合、商品管理、注文履歴、売上分析ダッシュボードなどを実装しています。`,
        longDesc_en: `An e-commerce platform for small business owners.

Features Stripe payment integration, product management, order history, and sales analytics dashboard.`,
        longDesc_ko: `개인 사업자를 위한 이커머스 플랫폼입니다.

Stripe 결제 통합, 상품 관리, 주문 내역, 매출 분석 대시보드 등을 구현했습니다.`,
        challenges_ja: [
            'Stripe Webhookの実装とテスト',
            'PostgreSQLでの複雑なクエリ最適化',
            'セキュリティ(XSS, CSRF)対策'
        ],
        challenges_en: [
            'Implementing and testing Stripe Webhooks',
            'Optimizing complex PostgreSQL queries',
            'Security measures (XSS, CSRF prevention)'
        ],
        challenges_ko: [
            'Stripe Webhook 구현과 테스트',
            'PostgreSQL 복잡한 쿼리 최적화',
            '보안 대책(XSS, CSRF)'
        ],
        tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
        color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        year: '2024',
        image: '/og/project-ecommerce-platform.svg'
    },
    {
        id: 'ai-chat-assistant',
        title: 'AI Chat Assistant',
        desc_ja: 'GPTベースのAIチャットアシスタント。コンテキストを理解した自然な会話を実現。',
        desc_en: 'A GPT-based AI chat assistant with context-aware natural conversations.',
        desc_ko: 'GPT 기반 AI 채팅 어시스턴트. 문맥을 이해한 자연스러운 대화를 구현.',
        longDesc_ja: `OpenAI APIを活用したAIチャットアシスタントです。

会話履歴を保持し、文脈を理解した自然な対話が可能です。RAG（検索拡張生成）による社内ドキュメント参照機能も実装。`,
        longDesc_en: `An AI chat assistant powered by OpenAI API.

Maintains conversation history for context-aware natural dialogue. Also features RAG (Retrieval Augmented Generation) for internal document reference.`,
        longDesc_ko: `OpenAI API를 활용한 AI 채팅 어시스턴트입니다.

대화 기록을 유지해 문맥을 이해한 자연스러운 대화를 제공합니다. RAG(검색 확장 생성)로 사내 문서 참조 기능도 구현했습니다.`,
        challenges_ja: [
            'プロンプトエンジニアリングの試行錯誤',
            'トークン数制限への対応',
            'RAGのベクトル検索精度向上'
        ],
        challenges_en: [
            'Trial and error in prompt engineering',
            'Handling token limit constraints',
            'Improving RAG vector search accuracy'
        ],
        challenges_ko: [
            '프롬프트 엔지니어링 시행착오',
            '토큰 제한 대응',
            'RAG 벡터 검색 정확도 개선'
        ],
        tags: ['Python', 'OpenAI', 'React'],
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        year: '2025',
        image: '/og/project-ai-chat-assistant.svg'
    },
    {
        id: 'design-system',
        title: 'Design System',
        desc_ja: '企業向けのコンポーネントライブラリとデザインシステム。',
        desc_en: 'A comprehensive component library and design system for enterprises.',
        desc_ko: '기업을 위한 컴포넌트 라이브러리와 디자인 시스템.',
        longDesc_ja: `企業内で統一されたUIを実現するためのデザインシステムです。

Storybookでコンポーネントをドキュメント化し、Figmaとの連携でデザイナーとの協業を効率化しています。`,
        longDesc_en: `A design system to achieve unified UI across the enterprise.

Components are documented with Storybook, and Figma integration streamlines collaboration with designers.`,
        longDesc_ko: `기업 내에서 통일된 UI를 구현하기 위한 디자인 시스템입니다.

Storybook으로 컴포넌트를 문서화하고, Figma 연동으로 디자이너 협업을 효율화했습니다.`,
        challenges_ja: [
            'コンポーネントのAPI設計（props設計）',
            'アクセシビリティ(a11y)への対応',
            'バージョン管理とBreaking Changesの扱い'
        ],
        challenges_en: [
            'Component API design (props design)',
            'Accessibility (a11y) compliance',
            'Version management and handling Breaking Changes'
        ],
        challenges_ko: [
            '컴포넌트 API 설계(props 설계)',
            '접근성(a11y) 대응',
            '버전 관리와 Breaking Changes 처리'
        ],
        tags: ['Storybook', 'Figma', 'TypeScript'],
        color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        year: '2024',
        image: '/og/project-design-system.svg'
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find(p => p.id === id);
}
