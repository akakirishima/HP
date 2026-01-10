import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();
  return (
    <main>
      <h1>{t('blog_title')}</h1>
      <p>{t('blog_desc')}</p>
    </main>
  );
}
