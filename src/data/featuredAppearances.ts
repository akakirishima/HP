import type { Language } from '../i18n/translations';

type LocalizedText = Record<Language, string>;

export type FeaturedAppearance = {
  date: string;
  source: string;
  title: LocalizedText;
  description: LocalizedText;
  href: string;
};

export const featuredAppearances: FeaturedAppearance[] = [
  {
    date: '2025.04.21',
    source: 'サポーターズ公式note',
    title: {
      ja: '技育博 2025 レポート',
      en: 'Gikyu Expo 2025 Report',
      ko: '기큐 박람회 2025 리포트',
      zh: '技育博 2025 报告',
    },
    description: {
      ja: 'もの創りをする学生が集まる交流イベント「技育博 2025」の当日レポート。',
      en: 'A report from Gikyu Expo 2025, an event where student makers gathered to showcase their work.',
      ko: '학생 메이커들이 작품을 선보이고 교류한 「기큐 박람회 2025」 현장 리포트입니다.',
      zh: '学生创作者展示作品并交流的「技育博 2025」活动报道。',
    },
    href: 'https://note.supporterz.jp/n/n64ddd0708b48',
  },
  {
    date: '2025.01.06',
    source: 'つの未来財団',
    title: {
      ja: '未来クリエイターズ育成講座 in 都農',
      en: 'Future Creators Workshop in Tsuno',
      ko: '미래 크리에이터 양성 강좌 in 쓰노',
      zh: '未来创作者培养讲座 in 都农',
    },
    description: {
      ja: '宮崎大学 dotcube のメンバーが講師を務めた、小中学生向けホームページ作成体験講座。',
      en: 'A website-building workshop for elementary and junior high school students, taught by Miyazaki University dotcube members.',
      ko: '미야자키대학교 dotcube 멤버들이 강사로 참여한 초중학생 대상 홈페이지 제작 체험 강좌입니다.',
      zh: '宫崎大学 dotcube 成员担任讲师，面向中小学生的网页制作体验讲座。',
    },
    href: 'https://tsuno-foundation.or.jp/news/challenge/20250106_1322.html',
  },
  {
    date: '2024.09',
    source: '宮崎大学 セカテンみやざき',
    title: {
      ja: 'STEP3 韓国短期派遣留学プログラム',
      en: 'STEP3 Short-term Study Abroad in Korea',
      ko: 'STEP3 한국 단기 파견 유학 프로그램',
      zh: 'STEP3 韩国短期派遣留学项目',
    },
    description: {
      ja: '韓国・順天大学校で環境問題や文化体験を学んだ、8日間の短期派遣留学プログラム。',
      en: 'An eight-day short-term study abroad program at Sunchon National University covering environmental topics and Korean culture.',
      ko: '한국 순천대학교에서 환경 문제와 한국 문화를 배운 8일간의 단기 파견 유학 프로그램입니다.',
      zh: '在韩国顺天大学校学习环境议题与韩国文化的 8 天短期派遣留学项目。',
    },
    href: 'https://www.miyazaki-u.ac.jp/sekaten/notices/2024/09/content.html',
  },
  {
    date: '2022.11.24',
    source: 'YouTube / sinji登山部',
    title: {
      ja: '【登山】台風後の白髪岳はどうなっているの？登れるの？',
      en: 'Hiking Shiragadake After a Typhoon',
      ko: '태풍 후 시라가다케 등산 영상',
      zh: '台风后的白发岳登山视频',
    },
    description: {
      ja: '白髪岳登山の様子が紹介された YouTube 動画。',
      en: 'A YouTube video featuring a hike on Shiragadake after a typhoon.',
      ko: '태풍 후 시라가다케 등산 모습을 소개한 YouTube 영상입니다.',
      zh: '介绍台风后白发岳登山情况的 YouTube 视频。',
    },
    href: 'https://www.youtube.com/watch?v=RpBZWrJG-oo',
  },
];
