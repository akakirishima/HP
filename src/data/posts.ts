export type BlogPost = {
  id: string;
  title_ja: string;
  title_en: string;
  date: string;
  excerpt_ja: string;
  excerpt_en: string;
  content_ja: string[];
  content_en: string[];
  tags: string[];
  image?: string;
};

export const posts: BlogPost[] = [
  {
    id: 'designing-for-ai',
    title_ja: 'AI時代のUI設計',
    title_en: 'Designing UI for the AI Era',
    date: '2026-02-15',
    excerpt_ja: 'AI機能を組み込む際の情報設計と、ユーザーの期待値を調整するためのUIガイドライン。',
    excerpt_en: 'UI guidelines for setting user expectations when adding AI-driven features.',
    content_ja: [
      'AI機能を導入すると、ユーザーは「何ができるか」を過度に期待しがちです。まずは機能範囲を明確にし、入力例や制約条件を示すことで安心感を与える必要があります。',
      '回答の信頼性を担保するため、根拠や参考情報へのリンクを用意すると、説明責任を果たしやすくなります。',
      '最後に、失敗ケースのUIも重要です。曖昧な回答に対しては「再入力」「要約」「他の切り口を試す」などの導線を必ず用意します。'
    ],
    content_en: [
      'When you introduce AI features, users tend to overestimate what the system can do. Clarify the boundaries early and provide input examples and constraints to build trust.',
      'To improve reliability, include references or links that explain why the AI produced a result. This makes the output more accountable and transparent.',
      'Finally, design for failure. If the output is vague, offer clear next steps like “refine input,” “summarize,” or “try another angle.”'
    ],
    tags: ['UI/UX', 'AI', 'Product'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'performance-first-portfolio',
    title_ja: 'ポートフォリオを高速化する3つの工夫',
    title_en: '3 Tactics to Speed Up a Portfolio Site',
    date: '2026-01-28',
    excerpt_ja: '画像・アニメーション・構成の整理で、体験を損なわずに軽量化する方法。',
    excerpt_en: 'How to keep a portfolio fast by tuning images, motion, and layout.',
    content_ja: [
      'まずはLCP（Largest Contentful Paint）を意識し、ヒーロー画像や主要テキストの表示を最優先にします。',
      'アニメーションは「優先順位」と「条件付き表示」を設けることで、体験を損なわず負荷を下げられます。',
      '最後に、不要なJSやスタイルの整理が重要です。使っていないコンポーネントは削除し、CSSを整理します。'
    ],
    content_en: [
      'Prioritize LCP by rendering hero visuals and primary copy first.',
      'Add conditions to animations (e.g., reduced motion or mobile checks) so you keep the wow factor without hurting performance.',
      'Finally, remove unused JS and styles. Slimming down the bundle often gives the biggest win.'
    ],
    tags: ['Performance', 'Frontend'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'design-system-consistency',
    title_ja: 'デザインシステムで一貫性を保つ',
    title_en: 'Keeping Consistency with Design Systems',
    date: '2025-12-12',
    excerpt_ja: 'UIの一貫性と開発効率を両立するために必要な設計ルール。',
    excerpt_en: 'Rules that keep UI consistent and improve dev velocity.',
    content_ja: [
      'デザインシステムは「誰が使っても同じ品質になる」ことが重要です。命名規則とガイドラインを整備し、迷いを減らします。',
      '特に余白、色、タイポグラフィはトークン化し、各チームが同じ言語で話せるようにします。',
      '最後に、更新ルールを設けてBreaking Changesの影響範囲を明確にします。'
    ],
    content_en: [
      'A design system should deliver consistent quality regardless of who uses it. Clear naming and documentation reduce ambiguity.',
      'Spacing, color, and typography should be tokenized so teams share the same vocabulary.',
      'Define a release process for breaking changes so teams can plan updates confidently.'
    ],
    tags: ['Design System', 'UI/UX'],
    image: '/og/blog-design-system.svg'
  }
];

export const getPostById = (id: string) => posts.find((post) => post.id === id);
