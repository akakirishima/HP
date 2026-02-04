import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import SEO from './SEO';
import { routes } from '../data/routes';
import { useLanguage } from '../contexts/LanguageContext';

const siteUrl = import.meta.env.VITE_SITE_URL;

const buildUrl = (path: string) => {
  if (!siteUrl || path.includes(':')) return undefined;
  const normalized = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  return path === '/' ? normalized : `${normalized}${path}`;
};

export default function PageRouter() {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <Layout title="My App" activeHref={location.pathname} route={location.pathname}>
      <Routes>
        {routes.map(({ path, title, titleKey, Component, seoImage }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div className="page page--medium">{t('loading')}</div>}>
                {!path.includes(':') && <SEO title={titleKey ? t(titleKey) : title} url={buildUrl(path)} image={seoImage} />}
                <Component />
              </Suspense>
            }
          />
        ))}
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
