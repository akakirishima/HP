export type NewsItem = {
  date: string;
  text_ja: string;
  text_en: string;
  text_ko: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '2026.01.10',
    text_ja: 'ウェブサイトをリニューアルしました',
    text_en: 'Website has been renewed',
    text_ko: '웹사이트를 새롭게 단장했습니다',
  },
  {
    date: '2026.01.08',
    text_ja: '新しいプロジェクトを公開しました',
    text_en: 'New project released',
    text_ko: '새 프로젝트를 공개했습니다',
  },
  {
    date: '2026.01.05',
    text_ja: 'ポートフォリオを更新しました',
    text_en: 'Portfolio updated',
    text_ko: '포트폴리오를 업데이트했습니다',
  },
];
