import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const experiences = [
  {
    date_ja: '2024年 - 現在',
    date_en: '2024 - Present',
    title_ja: 'フリーランス Web開発者',
    title_en: 'Freelance Web Developer',
    desc_ja: 'React/Next.jsを用いたWebアプリケーション開発、UI/UXデザイン、技術コンサルティング',
    desc_en: 'Web application development with React/Next.js, UI/UX design, and technical consulting',
  },
  {
    date_ja: '2022年 - 2024年',
    date_en: '2022 - 2024',
    title_ja: 'スタートアップ フロントエンドエンジニア',
    title_en: 'Frontend Engineer at Startup',
    desc_ja: 'SaaSプロダクトのフロントエンド開発をリード。Vue.jsからReactへの移行プロジェクトを主導',
    desc_en: 'Led frontend development for SaaS products. Spearheaded migration from Vue.js to React',
  },
  {
    date_ja: '2020年 - 2022年',
    date_en: '2020 - 2022',
    title_ja: 'Web制作会社 デザイナー/エンジニア',
    title_en: 'Designer/Engineer at Web Agency',
    desc_ja: 'コーポレートサイトやECサイトのデザイン・実装を担当。20以上のプロジェクトに参画',
    desc_en: 'Designed and developed corporate and e-commerce websites. Participated in 20+ projects',
  },
  {
    date_ja: '2020年',
    date_en: '2020',
    title_ja: '大学卒業 (情報工学専攻)',
    title_en: 'University Graduation (Computer Science)',
    desc_ja: 'Webテクノロジーと人工知能を専門に研究。卒業プロジェクトで学内賞を受賞',
    desc_en: 'Specialized in web technologies and AI. Won university award for graduation project',
  },
];

export default function WorkPage() {
  const { t, language } = useLanguage();

  return (
    <main className="section" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 6rem' }}>
      <h1 className="section-title animate-fade-in-up">
        {t('work_title')}
      </h1>
      <p className="animate-fade-in-up animate-delay-1" style={{ color: '#666', marginBottom: '3rem', marginTop: '1rem' }}>
        {t('work_desc')}
      </p>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="timeline-item"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            <div className="timeline-date">
              {language === 'ja' ? exp.date_ja : exp.date_en}
            </div>
            <div className="timeline-title">
              {language === 'ja' ? exp.title_ja : exp.title_en}
            </div>
            <div className="timeline-desc">
              {language === 'ja' ? exp.desc_ja : exp.desc_en}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
