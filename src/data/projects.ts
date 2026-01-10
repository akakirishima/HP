export type Project = {
    id: string;
    title: string;
    desc_ja: string;
    desc_en: string;
    longDesc_ja: string;
    longDesc_en: string;
    challenges_ja: string[];
    challenges_en: string[];
    tags: string[];
    color: string;
    liveUrl?: string; // URL for iframe embed
    repoUrl?: string;
    year: string;
};

export const projects: Project[] = [
    {
        id: 'deepself-tree',
        title: 'DeepSelf Tree',
        desc_ja: '自己分析を深掘りするための分岐型ツール。質問に答えていくことで自分自身を発見できる。',
        desc_en: 'A branching tool for deep self-analysis. Discover yourself by answering thought-provoking questions.',
        longDesc_ja: `DeepSelf Treeは、就活や自己理解のための「分岐型自己分析ツール」です。

ユーザーが入力した回答に対して深掘りの質問が次々と生成され、ツリー構造で自分の思考を可視化できます。
一人で使うだけでなく、共有機能でリンクを送ることで、友人やメンターからも質問してもらえる「共同自己分析」が可能です。`,
        longDesc_en: `DeepSelf Tree is a "branching self-analysis tool" designed for job hunting and self-understanding.

When users input their answers, follow-up questions are generated one after another, allowing them to visualize their thoughts in a tree structure.
Beyond solo use, the sharing feature enables "collaborative self-analysis" where friends and mentors can also ask questions via a shared link.`,
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
        tags: ['React', 'TypeScript', 'Supabase'],
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        liveUrl: 'https://v0-self-analysis-tool.vercel.app',
        year: '2026'
    },
    {
        id: 'portfolio-site',
        title: 'Portfolio Site',
        desc_ja: 'モダンなデザインと多言語対応を備えたポートフォリオサイト。',
        desc_en: 'A modern portfolio website with multilingual support and stunning animations.',
        longDesc_ja: `このサイト自体がこのプロジェクトです！

東大松尾研究室のWebサイトを参考に、アカデミックかつ先進的な印象を与えるデザインを目指しました。
日本語・英語の切り替え、グラデーションを活かしたUI、Three.jsによる背景アニメーションなどを実装しています。`,
        longDesc_en: `This site itself is this project!

I aimed to create a design that gives an academic yet cutting-edge impression, inspired by the University of Tokyo's Matsuo Lab website.
Features include Japanese/English switching, gradient-based UI, and background animations using Three.js.`,
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
        tags: ['React', 'Vite', 'Three.js', 'i18n'],
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        year: '2026'
    },
    {
        id: 'task-manager-pro',
        title: 'Task Manager Pro',
        desc_ja: 'チーム向けのタスク管理アプリ。リアルタイム同期とカンバンボード機能を搭載。',
        desc_en: 'A team task management app with real-time sync and Kanban board features.',
        longDesc_ja: `チームでの業務効率化を目的としたタスク管理アプリケーションです。

カンバン形式のドラッグ＆ドロップ、リアルタイム同期、期限通知、ダッシュボード分析などの機能を備えています。`,
        longDesc_en: `A task management application designed to improve team productivity.

Features include Kanban-style drag & drop, real-time sync, deadline notifications, and dashboard analytics.`,
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
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        year: '2025'
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        desc_ja: 'スケーラブルなECプラットフォーム。決済統合とダッシュボード分析機能を実装。',
        desc_en: 'A scalable e-commerce platform with payment integration and analytics dashboard.',
        longDesc_ja: `個人事業主向けのECプラットフォームです。

Stripe決済統合、商品管理、注文履歴、売上分析ダッシュボードなどを実装しています。`,
        longDesc_en: `An e-commerce platform for small business owners.

Features Stripe payment integration, product management, order history, and sales analytics dashboard.`,
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
        tags: ['Vue.js', 'Node.js', 'PostgreSQL'],
        color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        year: '2024'
    },
    {
        id: 'ai-chat-assistant',
        title: 'AI Chat Assistant',
        desc_ja: 'GPTベースのAIチャットアシスタント。コンテキストを理解した自然な会話を実現。',
        desc_en: 'A GPT-based AI chat assistant with context-aware natural conversations.',
        longDesc_ja: `OpenAI APIを活用したAIチャットアシスタントです。

会話履歴を保持し、文脈を理解した自然な対話が可能です。RAG（検索拡張生成）による社内ドキュメント参照機能も実装。`,
        longDesc_en: `An AI chat assistant powered by OpenAI API.

Maintains conversation history for context-aware natural dialogue. Also features RAG (Retrieval Augmented Generation) for internal document reference.`,
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
        tags: ['Python', 'OpenAI', 'React'],
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        year: '2025'
    },
    {
        id: 'design-system',
        title: 'Design System',
        desc_ja: '企業向けのコンポーネントライブラリとデザインシステム。',
        desc_en: 'A comprehensive component library and design system for enterprises.',
        longDesc_ja: `企業内で統一されたUIを実現するためのデザインシステムです。

Storybookでコンポーネントをドキュメント化し、Figmaとの連携でデザイナーとの協業を効率化しています。`,
        longDesc_en: `A design system to achieve unified UI across the enterprise.

Components are documented with Storybook, and Figma integration streamlines collaboration with designers.`,
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
        tags: ['Storybook', 'Figma', 'TypeScript'],
        color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        year: '2024'
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find(p => p.id === id);
}
