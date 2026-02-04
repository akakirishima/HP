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
    id: 'part-time-lavie-en-rose',
    title_ja: 'アルバイト：ラヴィアンローズ（宮崎パフェバー）',
    title_en: 'Part-time: Lavie en Rose (Miyazaki Parfait Bar)',
    date: '2026-03-01',
    excerpt_ja: '接客とチームワークを通じて学んだこと、日々の改善の積み重ね。',
    excerpt_en: 'What I learned through customer service, teamwork, and daily improvements.',
    content_ja: [
      'ラヴィアンローズ（宮崎パフェバー）でのアルバイトを通じて、接客の基本とチーム連携の重要性を学びました。',
      '忙しい時間帯でも丁寧な対応を維持するため、動線や声かけのルールを整理して効率化しました。',
      '小さな改善の積み重ねが、サービス品質に直結することを実感できた経験でした。'
    ],
    content_en: [
      'My part-time work at Lavie en Rose (a parfait bar in Miyazaki) taught me the fundamentals of customer service and teamwork.',
      'To keep quality high during busy hours, I streamlined workflows and clarified communication rules.',
      'This experience showed me how small, consistent improvements directly raise service quality.'
    ],
    tags: ['Part-time', 'Service', 'Teamwork'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'part-time-wowd-plus',
    title_ja: 'アルバイト：WOW’D PLUS',
    title_en: 'Part-time: WOW’D PLUS',
    date: '2026-02-01',
    excerpt_ja: '現場での対応力と、安定して成果を出すための工夫。',
    excerpt_en: 'On-site responsiveness and practices that help deliver consistent results.',
    content_ja: [
      'WOW’D PLUSでのアルバイトでは、現場での臨機応変な対応力が求められました。',
      'ミスを減らすためにチェックリストを作成し、作業の標準化を意識しました。',
      '安定して成果を出すために、準備と確認の重要性を再認識しました。'
    ],
    content_en: [
      'At WOW’D PLUS, I learned to respond quickly and flexibly to on-site situations.',
      'To reduce mistakes, I created checklists and worked to standardize tasks.',
      'This role reinforced how preparation and verification enable consistent results.'
    ],
    tags: ['Part-time', 'Operations'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'part-time-round1',
    title_ja: 'アルバイト：ラウンドワン',
    title_en: 'Part-time: Round1',
    date: '2024-09-01',
    excerpt_ja: '接客・運営の経験から得た、現場での優先順位の付け方。',
    excerpt_en: 'How I learned to prioritize tasks through customer service and operations.',
    content_ja: [
      'ラウンドワンでのアルバイトでは、複数の業務を並行して進める場面が多くありました。',
      '状況に応じて優先順位を付け、最優先タスクを見極める力が身につきました。',
      'ピーク時の対応やチーム連携を通して、判断力と協調性が鍛えられました。'
    ],
    content_en: [
      'At Round1, I frequently handled multiple tasks in parallel.',
      'I learned how to prioritize based on the situation and identify the most urgent tasks.',
      'Peak-hour operations and team coordination improved my decision-making and collaboration.'
    ],
    tags: ['Part-time', 'Customer Service'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'part-time-smolt',
    title_ja: 'アルバイト：smolt',
    title_en: 'Part-time: smolt',
    date: '2023-03-01',
    excerpt_ja: '社会人基礎力を身につけるきっかけになった初めてのアルバイト。',
    excerpt_en: 'My first part-time job and a foundation for professional basics.',
    content_ja: [
      'smoltでのアルバイトは、社会人としての基礎を学ぶ最初の経験でした。',
      '時間厳守や報連相など、基本的な姿勢を身につけることができました。',
      'この経験が、その後の活動全体の土台になっています。'
    ],
    content_en: [
      'My part-time job at smolt was my first experience learning professional basics.',
      'I built habits around punctuality and clear reporting/communication.',
      'This experience became the foundation for my later activities.'
    ],
    tags: ['Part-time', 'Basics'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'award-gikyu-expo-qualifier',
    title_ja: '技育博 予選通過',
    title_en: 'Gikyu Expo Qualifier',
    date: '2025-04-01',
    excerpt_ja: '予選通過までのプロセスと、チームでの進め方の振り返り。',
    excerpt_en: 'How we approached the qualifier and what we learned as a team.',
    content_ja: [
      '技育博の予選通過は、限られた時間で成果を出すための工夫が鍵でした。',
      '要件を素早く整理し、実装と検証を小さく回すことで完成度を高めました。',
      'チーム内の役割分担と共有の質が結果に直結することを実感しました。'
    ],
    content_en: [
      'Qualifying for Gikyu Expo required efficient execution within limited time.',
      'We improved quality by clarifying requirements early and iterating in small cycles.',
      'Clear role division and communication directly impacted our results.'
    ],
    tags: ['Award', 'Hackathon', 'Team'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'award-gikyu-camp-vol23',
    title_ja: '技育CAMPハッカソン vol.23 参加',
    title_en: 'Gikyu CAMP Hackathon vol.23',
    date: '2025-02-01',
    excerpt_ja: '短期間での開発・意思決定のスピードを意識した参加記録。',
    excerpt_en: 'A record focused on fast development and decision-making under time constraints.',
    content_ja: [
      '技育CAMPハッカソン vol.23 では、短期間での開発と意思決定のスピードを意識しました。',
      '最小構成で価値を伝えるため、機能を絞り込みました。',
      '限られた時間の中での集中力と判断力が磨かれた経験です。'
    ],
    content_en: [
      'At Gikyu CAMP Hackathon vol.23, I focused on fast development and decision-making.',
      'We narrowed scope to deliver a clear core value quickly.',
      'It was a valuable experience for sharpening focus under constraints.'
    ],
    tags: ['Hackathon', 'Experience'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'award-miyazaki-hackathon-2nd',
    title_ja: '第二回 宮崎ハッカソン 最優秀賞',
    title_en: '2nd Miyazaki Hackathon — Grand Prize',
    date: '2024-09-25',
    excerpt_ja: '課題設定からプロトタイプ完成までの短期集中の学び。',
    excerpt_en: 'Key lessons from fast problem framing to prototype delivery.',
    content_ja: [
      '第二回 宮崎ハッカソンでは、課題設定とプロトタイプ設計に注力しました。',
      '短期間でも「誰の何を解決するか」を明確にすることで、実装の質が上がることを実感しました。',
      '結果として最優秀賞をいただき、大きな自信につながりました。'
    ],
    content_en: [
      'At the 2nd Miyazaki Hackathon, we focused on problem framing and prototype design.',
      'Clarifying “who” and “what to solve” early improved implementation quality.',
      'Winning the grand prize became a major confidence boost.'
    ],
    tags: ['Award', 'Hackathon'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'award-miyazaki-ds-competition',
    title_ja: '宮崎大学データサイエンスコンペ 最優秀賞',
    title_en: 'Miyazaki Univ. Data Science Competition — Grand Prize',
    date: '2024-02-29',
    excerpt_ja: 'データの見方・分析の手順を整理して評価につなげた経験。',
    excerpt_en: 'How structured analysis and clear interpretation led to strong results.',
    content_ja: [
      '宮崎大学データサイエンスコンペでは、データの前処理と分析の手順を整理しました。',
      '仮説を立てて検証する流れを明確にし、結果の説明可能性を重視しました。',
      '分析の筋道が評価につながり、最優秀賞を受賞しました。'
    ],
    content_en: [
      'In the Miyazaki University Data Science Competition, I structured preprocessing and analysis steps.',
      'I emphasized a clear hypothesis→validation flow and interpretability of results.',
      'That approach contributed to winning the grand prize.'
    ],
    tags: ['Award', 'Data Science'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'award-miyazaki-hackathon-1st',
    title_ja: '宮崎ハッカソン 最優秀賞',
    title_en: 'Miyazaki Hackathon — Grand Prize',
    date: '2024-02-16',
    excerpt_ja: '短期間でのチーム開発と発表に集中した記録。',
    excerpt_en: 'A focused record of teamwork, fast development, and pitching.',
    content_ja: [
      '宮崎ハッカソンでは、短期間での開発と発表に集中しました。',
      'タスク分担と短いフィードバックループで完成度を上げることを意識しました。',
      '最優秀賞を受賞し、チームで成果を出す経験の価値を再認識しました。'
    ],
    content_en: [
      'At the Miyazaki Hackathon, we focused on rapid development and presentation.',
      'Clear task division and tight feedback loops improved quality.',
      'Winning the grand prize reinforced the value of teamwork and execution.'
    ],
    tags: ['Award', 'Hackathon'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'step3-suncheon',
    title_ja: '韓国・順天大学校 STEP3 短期派遣留学の記録',
    title_en: 'Study Abroad at Sunchon National University (STEP3)',
    date: '2024-08-28',
    excerpt_ja: '8日間の短期派遣で学んだこと、現地での気づき、英語環境での学びの振り返り。',
    excerpt_en: 'Reflections on an 8-day study abroad program, insights from local experiences, and learning in an English environment.',
    content_ja: [
      '2024年8月に、韓国・順天大学校のSTEP3短期派遣留学に参加しました。期間は8日間と短いながらも、集中して学びと交流に取り組めたのが大きな収穫でした。',
      '英語での授業やディスカッションに参加し、言語面の課題を実感しつつも、自分の意見を整理して伝える力が伸びたと感じます。',
      '現地の学生との交流を通じて、学習スタイルや価値観の違いに触れられたことも印象的でした。短期でも「異文化に飛び込む体験」は大きな学びになります。',
      'この経験を通じて、今後の学習や研究でも「実践の場で使う」意識を持って学ぶ大切さを再認識しました。'
    ],
    content_en: [
      'In August 2024, I joined the STEP3 short-term program at Sunchon National University in Korea. Although it was only 8 days, it was intense and highly rewarding.',
      'Participating in English lectures and discussions highlighted my language challenges, but also helped me improve how I organize and communicate ideas.',
      'Connecting with local students gave me a fresh perspective on different learning styles and values. Even a short program can provide meaningful cross-cultural learning.',
      'This experience reminded me to keep a practical, real-world mindset in future study and research.'
    ],
    tags: ['Study Abroad', 'Korea', 'Learning'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'ali-6920',
    title_ja: 'ALI 6920（Academic Research）オンライン受講の学び',
    title_en: 'Lessons from ALI 6920 (Academic Research) Online Sessions',
    date: '2024-03-15',
    excerpt_ja: 'IUPのオンラインプログラムで取り組んだアカデミックリサーチの学びとアウトプットの振り返り。',
    excerpt_en: 'A recap of the academic research sessions in the IUP online program and key takeaways.',
    content_ja: [
      '2024年3月にIUP（ALI）の「ALI 6920（Academic Research）」をオンラインで受講しました。実施日は3/1、3/8、3/15の3回です。',
      '学術的な文章の構成、根拠の示し方、引用の扱いなど、リサーチの基礎を集中的に学べたことが大きな収穫でした。',
      '短時間のセッションでも、問いの立て方や論理の組み立て方に対する意識が変わったのは大きいです。',
      '今後の研究やアウトプットでも、根拠と構造を意識して伝える姿勢を継続していきます。'
    ],
    content_en: [
      'In March 2024, I attended the “ALI 6920 (Academic Research)” sessions online through IUP (ALI). The sessions were held on 3/1, 3/8, and 3/15.',
      'The biggest takeaway was learning the fundamentals of academic writing: structure, evidence, and proper citation practices.',
      'Even in short sessions, my approach to forming research questions and building arguments improved.',
      'I plan to carry these skills into future research and writing, focusing on clarity and evidence-based structure.'
    ],
    tags: ['Study Abroad', 'Academic', 'Research'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'iup-ali-online',
    title_ja: 'IUP（ALI）オンライン留学の体験と学び',
    title_en: 'My Experience in the IUP (ALI) Online Study Abroad Program',
    date: '2024-03-29',
    excerpt_ja: 'Virtual classesでの学び、言語面の課題、オンライン留学の良さをまとめました。',
    excerpt_en: 'A summary of virtual classes, language challenges, and what worked well in an online study abroad program.',
    content_ja: [
      '2024年2月〜3月にかけて、米国IUP（Indiana University of Pennsylvania）のALIオンライン留学を受講しました。',
      'オンラインであっても、英語環境に身を置くことで「聞いて理解する」「自分の言葉で返す」力が鍛えられたと感じます。',
      '時差や学習環境の調整など難しさもありましたが、短期集中で学べたのは大きなメリットでした。',
      '対面留学とは違う形でも、目的を持って学ぶことで十分に価値のある経験になると実感しました。'
    ],
    content_en: [
      'From February to March 2024, I participated in the ALI online study abroad program at IUP (Indiana University of Pennsylvania).',
      'Even in a virtual setting, learning in an English environment improved my listening and response skills.',
      'Managing time zones and study conditions was challenging, but the short, focused format made learning efficient.',
      'I realized that online study abroad can still be highly valuable when approached with clear goals.'
    ],
    tags: ['Study Abroad', 'Online', 'English'],
    image: '/og/blog-performance.svg'
  },
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
