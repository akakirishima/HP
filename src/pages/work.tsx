// Work page
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";

type Category =
  | 'education'
  | 'research'
  | 'study_abroad'
  | 'clubs'
  | 'part_time'
  | 'awards_other';

type ClubGroup = 'dotcube' | 'wanderfogel';

type Experience = {
  category: Category;
  clubGroup?: ClubGroup;
  date_ja: string;
  date_en: string;
  title_ja: string;
  title_en: string;
  desc_ja: string;
  desc_en: string;
  href?: string;
};

const experiences: Experience[] = [
  {
    category: 'education',
    date_ja: '2028-03（予定）',
    date_en: 'Mar 2028 (Planned)',
    title_ja: '修士修了（28卒予定）',
    title_en: 'Master’s Degree Completion (Planned)',
    desc_ja: '修士課程修了予定',
    desc_en: 'Planned master’s completion',
    href: '/blog/education-masters-completion-plan',
  },
  {
    category: 'research',
    date_ja: '2026-04 〜 2028-03（予定）',
    date_en: 'Apr 2026 – Mar 2028 (Planned)',
    title_ja: '修士課程（Thi Thi Zin 研究室）',
    title_en: 'Master’s Program (Thi Thi Zin Lab)',
    desc_ja: 'Thi Thi Zin 研究室 所属予定',
    desc_en: 'Planned lab membership',
    href: '/blog/research-masters-plan',
  },
  {
    category: 'research',
    date_ja: '2025-04 〜 2026-03（学部4年）',
    date_en: 'Apr 2025 – Mar 2026',
    title_ja: 'Thi Thi Zin 研究室 配属',
    title_en: 'Thi Thi Zin Lab',
    desc_ja: '学部4年研究室配属',
    desc_en: 'Lab assignment in senior year',
    href: '/blog/research-thi-thi-zin',
  },
  {
    category: 'part_time',
    date_ja: '2025-04 〜 2026-03（大学4年）',
    date_en: 'Apr 2025 – Mar 2026',
    title_ja: 'アルバイト：ラヴィアンローズ（宮崎パフェバー）',
    title_en: 'Part-time: Lavie en Rose (Miyazaki Parfait Bar)',
    desc_ja: 'アルバイト',
    desc_en: 'Part-time job',
    href: '/blog/part-time-lavie-en-rose',
  },
  {
    category: 'awards_other',
    date_ja: '2025-04',
    date_en: 'Apr 2025',
    title_ja: '技育博 予選通過',
    title_en: 'Gikyu Expo Qualifier',
    desc_ja: 'サポーターズ主催',
    desc_en: 'Supporters Inc. event',
    href: '/blog/award-gikyu-expo-qualifier',
  },
  {
    category: 'awards_other',
    date_ja: '2025-02',
    date_en: 'Feb 2025',
    title_ja: '技育CAMPハッカソン vol.23 参加',
    title_en: 'Gikyu CAMP Hackathon vol.23',
    desc_ja: 'サポーターズ主催',
    desc_en: 'Supporters Inc. event',
    href: '/blog/award-gikyu-camp-vol23',
  },
  {
    category: 'part_time',
    date_ja: '2024-10 〜 2026-03（大学3年〜4年）',
    date_en: 'Oct 2024 – Mar 2026',
    title_ja: 'アルバイト：WOW’D PLUS',
    title_en: 'Part-time: WOW’D PLUS',
    desc_ja: 'アルバイト',
    desc_en: 'Part-time job',
    href: '/blog/part-time-wowd-plus',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2024-11-09 〜 2024-11-10',
    date_en: 'Nov 9–10, 2024',
    title_ja: '由布岳 班PW',
    title_en: 'Yufu-dake Team PW',
    desc_ja: 'ワンダーフォーゲル部 山行',
    desc_en: 'Wanderfogel club trip',
    href: '/blog/mountain-yufu',
  },
  {
    category: 'awards_other',
    date_ja: '2024-09-24 〜 2024-09-25',
    date_en: 'Sep 24–25, 2024',
    title_ja: '第二回 宮崎ハッカソン 最優秀賞',
    title_en: '2nd Miyazaki Hackathon — Grand Prize',
    desc_ja: '主催：カラビナテクノロジー',
    desc_en: 'Hosted by Carabiner Technology',
    href: '/blog/award-miyazaki-hackathon-2nd',
  },
  {
    category: 'study_abroad',
    date_ja: '2024-08-21 〜 2024-08-28',
    date_en: 'Aug 21–28, 2024',
    title_ja: '韓国・順天大学校 STEP3 短期派遣留学',
    title_en: 'Short-term Study Abroad: Sunchon National University (STEP3)',
    desc_ja: '8日間',
    desc_en: '8 days',
    href: '/blog/step3-suncheon',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2024-05-18 〜 2024-05-19',
    date_en: 'May 18–19, 2024',
    title_ja: '開聞岳 登山',
    title_en: 'Kaimon-dake Hike',
    desc_ja: 'ワンダーフォーゲル部 山行',
    desc_en: 'Wanderfogel club trip',
    href: '/blog/mountain-kaimon',
  },
  {
    category: 'study_abroad',
    date_ja: '2024-03-01 / 2024-03-08 / 2024-03-15',
    date_en: 'Mar 1 / 8 / 15, 2024',
    title_ja: 'ALI 6920（Academic Research）実施日',
    title_en: 'ALI 6920 (Academic Research) Sessions',
    desc_ja: 'IUP（ALI）オンライン留学',
    desc_en: 'IUP (ALI) online program',
    href: '/blog/ali-6920',
  },
  {
    category: 'awards_other',
    date_ja: '2024-02-29',
    date_en: 'Feb 29, 2024',
    title_ja: '宮崎大学データサイエンスコンペ 最優秀賞',
    title_en: 'Miyazaki Univ. Data Science Competition — Grand Prize',
    desc_ja: '宮崎大学主催',
    desc_en: 'Hosted by Miyazaki University',
    href: '/blog/award-miyazaki-ds-competition',
  },
  {
    category: 'awards_other',
    date_ja: '2024-02-15 〜 2024-02-16',
    date_en: 'Feb 15–16, 2024',
    title_ja: '宮崎ハッカソン 最優秀賞',
    title_en: 'Miyazaki Hackathon — Grand Prize',
    desc_ja: '主催：カラビナテクノロジー',
    desc_en: 'Hosted by Carabiner Technology',
    href: '/blog/award-miyazaki-hackathon-1st',
  },
  {
    category: 'study_abroad',
    date_ja: '2024-02-12 〜 2024-03-29',
    date_en: 'Feb 12 – Mar 29, 2024',
    title_ja: 'IUP（ALI）オンライン留学',
    title_en: 'IUP (ALI) Online Study Abroad',
    desc_ja: '米国 IUP / Virtual classes',
    desc_en: 'Indiana University of Pennsylvania / virtual classes',
    href: '/blog/iup-ali-online',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2023-08-17 〜 2023-08-20',
    date_en: 'Aug 17–20, 2023',
    title_ja: '立山（夏合宿）',
    title_en: 'Tateyama (Summer Camp)',
    desc_ja: 'ワンダーフォーゲル部 山行',
    desc_en: 'Wanderfogel club trip',
    href: '/blog/mountain-tateyama',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2023-05-27 〜 2023-05-28',
    date_en: 'May 27–28, 2023',
    title_ja: '釈迦岳（大分・福岡）山行',
    title_en: 'Shaka-dake (Oita/Fukuoka) Hike',
    desc_ja: 'ワンダーフォーゲル部 山行',
    desc_en: 'Wanderfogel club trip',
    href: '/blog/mountain-shaka',
  },
  {
    category: 'clubs',
    clubGroup: 'dotcube',
    date_ja: '2023-04 〜 2024-03（大学2年）',
    date_en: 'Apr 2023 – Mar 2024',
    title_ja: '学祭「宮大タワーバトル」制作・出展',
    title_en: 'University Festival: “Miyazaki Tower Battle”',
    desc_ja: '来場200人',
    desc_en: '200 visitors',
    href: '/blog/festival-miyazaki-tower-battle',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2023-03-27 〜 2023-03-31',
    date_en: 'Mar 27–31, 2023',
    title_ja: '屋久島・宮之浦岳（春合宿）',
    title_en: 'Yakushima / Miyanoura-dake (Spring Camp)',
    desc_ja: 'ワンダーフォーゲル部 合宿',
    desc_en: 'Wanderfogel club camp',
    href: '/blog/mountain-yakushima-miyanoura',
  },
  {
    category: 'part_time',
    date_ja: '2023-03 〜 2024-09（大学2年〜3年）',
    date_en: 'Mar 2023 – Sep 2024',
    title_ja: 'アルバイト：ラウンドワン',
    title_en: 'Part-time: Round1',
    desc_ja: 'アルバイト',
    desc_en: 'Part-time job',
    href: '/blog/part-time-round1',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2022-10-29 〜 2022-10-30',
    date_en: 'Oct 29–30, 2022',
    title_ja: '白髪岳 PW',
    title_en: 'Shiraga-dake PW',
    desc_ja: 'ワンダーフォーゲル部 山行',
    desc_en: 'Wanderfogel club trip',
    href: '/blog/mountain-shiraga',
  },
  {
    category: 'clubs',
    clubGroup: 'dotcube',
    date_ja: '2022-04 〜 2023-03（大学1年）',
    date_en: 'Apr 2022 – Mar 2023',
    title_ja: '学祭でKinectゲーム制作に挑戦',
    title_en: 'University Festival: Kinect Game Challenge',
    desc_ja: '来場5人',
    desc_en: '5 visitors',
    href: '/blog/festival-kinect',
  },
  {
    category: 'part_time',
    date_ja: '2022-04 〜 2023-03（大学1年）',
    date_en: 'Apr 2022 – Mar 2023',
    title_ja: 'アルバイト：smolt',
    title_en: 'Part-time: smolt',
    desc_ja: 'アルバイト',
    desc_en: 'Part-time job',
    href: '/blog/part-time-smolt',
  },
  {
    category: 'clubs',
    clubGroup: 'dotcube',
    date_ja: '2022-04 〜（期間不明）',
    date_en: 'Apr 2022 – (Unknown)',
    title_ja: '学生団体 dotcube（執行部）',
    title_en: 'Student Org: dotcube (Executive)',
    desc_ja: '執行部で部を牽引',
    desc_en: 'Executive team member',
    href: '/blog/club-dotcube',
  },
  {
    category: 'clubs',
    clubGroup: 'dotcube',
    date_ja: '（時期不明）',
    date_en: '(Unknown)',
    title_ja: 'dotcube AI活用HP作成講座 講師',
    title_en: 'dotcube AI Website Workshop Instructor',
    desc_ja: '小学生向け講座',
    desc_en: 'Workshop for elementary students',
    href: '/blog/club-dotcube-workshop',
  },
  {
    category: 'clubs',
    clubGroup: 'wanderfogel',
    date_ja: '2022-04 〜（期間不明）',
    date_en: 'Apr 2022 – (Unknown)',
    title_ja: '宮崎大学ワンダーフォーゲル部 所属',
    title_en: 'Miyazaki Univ. Wanderfogel Club',
    desc_ja: '山行・合宿に参加',
    desc_en: 'Trips and camps',
    href: '/blog/club-wanderfogel',
  },
  {
    category: 'education',
    date_ja: '2022-04 〜 2026-03',
    date_en: 'Apr 2022 – Mar 2026',
    title_ja: '宮崎大学 工学部 情報通信工学プログラム 在籍',
    title_en: 'Miyazaki University (Engineering / ICT Program)',
    desc_ja: '工学部 工学科',
    desc_en: 'Faculty of Engineering',
    href: '/blog/education-miyazaki-university',
  },
  {
    category: 'education',
    date_ja: '2019-04 〜 2022-03',
    date_en: 'Apr 2019 – Mar 2022',
    title_ja: '小城高校',
    title_en: 'Ogi High School',
    desc_ja: '入学 → 卒業（ストレート進学）',
    desc_en: 'Entered and graduated',
    href: '/blog/education-high-school',
  },
  {
    category: 'education',
    date_ja: '2016-04 〜 2019-03',
    date_en: 'Apr 2016 – Mar 2019',
    title_ja: '三日月中学高',
    title_en: 'Mikazuki Junior/Senior High',
    desc_ja: '入学 → 卒業（ストレート進学）',
    desc_en: 'Entered and graduated',
    href: '/blog/education-junior-high',
  },
  {
    category: 'education',
    date_ja: '2010-04 〜 2016-03',
    date_en: 'Apr 2010 – Mar 2016',
    title_ja: '三日月小学校',
    title_en: 'Mikazuki Elementary School',
    desc_ja: '入学 → 卒業（ストレート進学）',
    desc_en: 'Entered and graduated',
    href: '/blog/education-elementary',
  },
  {
    category: 'education',
    date_ja: '2007-04 〜 2010-03',
    date_en: 'Apr 2007 – Mar 2010',
    title_ja: '三日月幼稚園',
    title_en: 'Mikazuki Kindergarten',
    desc_ja: '卒園（ストレート進学）',
    desc_en: 'Graduated',
    href: '/blog/education-kindergarten',
  },
  {
    category: 'education',
    date_ja: '2003-07-02',
    date_en: 'Jul 2, 2003',
    title_ja: '出生',
    title_en: 'Born',
    desc_ja: '誕生',
    desc_en: 'Birth',
    href: '/blog/education-birth',
  },
];

export default function WorkPage() {
  const { t, language } = useLanguage();
  const categories: { id: Category; label_ja: string; label_en: string }[] = [
    { id: 'education', label_ja: '学歴', label_en: 'Education' },
    { id: 'research', label_ja: '研究', label_en: 'Research' },
    { id: 'study_abroad', label_ja: '留学', label_en: 'Study Abroad' },
    { id: 'clubs', label_ja: '部活', label_en: 'Clubs' },
    { id: 'part_time', label_ja: 'アルバイト', label_en: 'Part-time' },
    { id: 'awards_other', label_ja: '受賞・その他', label_en: 'Awards & Other' },
  ];

  const defaultSelected: Category[] = ['education', 'awards_other', 'research', 'study_abroad'];
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(defaultSelected);
  const [selectedClubGroups, setSelectedClubGroups] = useState<ClubGroup[]>([
    'dotcube',
    'wanderfogel',
  ]);
  const [presetMode, setPresetMode] = useState<'core' | 'all' | null>('core');

  const filteredExperiences = useMemo(() => {
    if (selectedCategories.length === 0) return [];
    return experiences.filter((exp) => {
      if (!selectedCategories.includes(exp.category)) return false;
      if (exp.category !== 'clubs') return true;
      if (!exp.clubGroup) return true;
      return selectedClubGroups.includes(exp.clubGroup);
    });
  }, [selectedCategories, selectedClubGroups]);

  return (
    <main className="section page page--medium">
      <h1 className="section-title animate-fade-in-up">
        {t('work_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('work_desc')}
      </p>

      <section className="category-chips">
        <div className="chip-controls">
          <button
            type="button"
            className={`chip chip--ghost ${presetMode === 'core' ? 'chip--active' : ''}`}
            onClick={() => {
              if (presetMode === 'core') {
                setSelectedCategories([]);
                setPresetMode(null);
                return;
              }
              setSelectedCategories(defaultSelected);
              setSelectedClubGroups(['dotcube', 'wanderfogel']);
              setPresetMode('core');
            }}
          >
            {language === 'ja' ? '主要のみ' : 'Core Only'}
          </button>
          <button
            type="button"
            className={`chip chip--ghost ${presetMode === 'all' ? 'chip--active' : ''}`}
            onClick={() => {
              if (presetMode === 'all') {
                setSelectedCategories([]);
                setPresetMode(null);
                return;
              }
              setSelectedCategories(categories.map((c) => c.id));
              setSelectedClubGroups(['dotcube', 'wanderfogel']);
              setPresetMode('all');
            }}
          >
            {language === 'ja' ? '全て' : 'All'}
          </button>
        </div>
        {categories.map((cat) => {
          const isActive = selectedCategories.includes(cat.id);
          const isClubs = cat.id === 'clubs';

          return (
            <div key={cat.id} className="chip-group">
              <button
                type="button"
                className={`chip ${isActive ? 'chip--active' : ''}`}
              onClick={() => {
                setSelectedCategories((prev) => {
                  if (prev.includes(cat.id)) {
                    return prev.filter((c) => c !== cat.id);
                  }
                  return [...prev, cat.id];
                });
                setPresetMode(null);
              }}
            >
                {language === 'ja' ? cat.label_ja : cat.label_en}
              </button>

              {isClubs && isActive && (
                <div className="chip-group__children">
                  {[
                    { id: 'dotcube' as const, label_ja: 'Dotcube', label_en: 'Dotcube' },
                    { id: 'wanderfogel' as const, label_ja: 'ワンダーフォーゲル', label_en: 'Wanderfogel' },
                  ].map((group) => {
                    const isGroupActive = selectedClubGroups.includes(group.id);
                    return (
                      <button
                        key={group.id}
                        type="button"
                        className={`chip ${isGroupActive ? 'chip--active' : ''}`}
                          onClick={() => {
                            setSelectedClubGroups((prev) => {
                              if (prev.includes(group.id)) {
                                return prev.filter((c) => c !== group.id);
                              }
                              return [...prev, group.id];
                            });
                            setPresetMode(null);
                          }}
                        >
                        {language === 'ja' ? group.label_ja : group.label_en}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <div className="timeline">
        {filteredExperiences.length === 0 ? (
          <div className="timeline-empty">
            {language === 'ja'
              ? '表示するカテゴリが選択されていません。'
              : 'No categories selected.'}
          </div>
        ) : (
          filteredExperiences.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item ${exp.href ? 'timeline-item--link' : ''}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {exp.href ? (
                exp.href.startsWith('/') ? (
                  <Link to={exp.href} className="timeline-link">
                    <div className="timeline-date">
                      {language === 'ja' ? exp.date_ja : exp.date_en}
                    </div>
                    <div className="timeline-title">
                      {language === 'ja' ? exp.title_ja : exp.title_en}
                    </div>
                    <div className="timeline-desc">
                      {language === 'ja' ? exp.desc_ja : exp.desc_en}
                    </div>
                  </Link>
                ) : (
                  <a href={exp.href} className="timeline-link" target="_blank" rel="noopener noreferrer">
                    <div className="timeline-date">
                      {language === 'ja' ? exp.date_ja : exp.date_en}
                    </div>
                    <div className="timeline-title">
                      {language === 'ja' ? exp.title_ja : exp.title_en}
                    </div>
                    <div className="timeline-desc">
                      {language === 'ja' ? exp.desc_ja : exp.desc_en}
                    </div>
                  </a>
                )
              ) : (
                <>
                  <div className="timeline-date">
                    {language === 'ja' ? exp.date_ja : exp.date_en}
                  </div>
                  <div className="timeline-title">
                    {language === 'ja' ? exp.title_ja : exp.title_en}
                  </div>
                  <div className="timeline-desc">
                    {language === 'ja' ? exp.desc_ja : exp.desc_en}
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

    </main>
  );
}
