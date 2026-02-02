export type NewsItem = {
  date: string;
  text_ja: string;
  text_en: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '2026.01.10',
    text_ja: 'ウェブサイトをリニューアルしました',
    text_en: 'Website has been renewed',
  },
  {
    date: '2026.01.08',
    text_ja: '新しいプロジェクトを公開しました',
    text_en: 'New project released',
  },
  {
    date: '2026.01.05',
    text_ja: 'ポートフォリオを更新しました',
    text_en: 'Portfolio updated',
  },
];
