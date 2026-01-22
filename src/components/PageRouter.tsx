import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import SEO from './SEO';

// Auto-import pages
const modules = import.meta.glob('../pages/**/*.tsx', { eager: true }) as Record<string, { default: React.ComponentType<unknown> }>;

// Helper to convert filename to route path and title
const getPageInfo = (path: string) => {
  const rel = path.replace(/^\.\.\/pages\//, '').replace(/\.(t|j)sx?$/, '');

  if (rel.includes('[')) return null; // Skip dynamic routes for automatic list

  let route = '/' + rel;
  route = route.replace(/\/(index)$/i, '/');
  route = route.replace(/\/$/, '');
  if (route === '') route = '/';

  const leaf = rel.split('/').pop() || 'home';
  const titleBase = leaf.toLowerCase() === 'index' ? (rel.split('/')[rel.split('/').length - 2] || 'Home') : leaf;
  const title = titleBase.charAt(0).toUpperCase() + titleBase.slice(1);

  return { route, title };
};

const pages = Object.entries(modules)
  .map(([path, mod]) => {
    const info = getPageInfo(path);
    if (!info) return null;
    return {
      route: info.route,
      title: info.title,
      Component: mod.default
    };
  })
  .filter((p): p is { route: string; title: string; Component: React.ComponentType<unknown> } => Boolean(p))
  .sort((a, b) => (a.route > b.route ? 1 : -1));

// Import dynamic project detail page manually
const ProjectDetailModule = modules['../pages/projects/[id].tsx'];
const ProjectDetailComponent = ProjectDetailModule?.default;

export default function PageRouter() {
  const location = useLocation();

  // Navigation links for Layout
  const navLinks = pages
    .filter(p => !p.route.startsWith('/projects'))
    .map(p => ({ href: p.route, label: p.title }));

  return (
    <Layout title="My App" links={navLinks} activeHref={location.pathname} route={location.pathname}>
      <Routes>
        {pages.map(({ route, title, Component }) => (
          <Route
            key={route}
            path={route}
            element={
              <>
                <SEO title={title} url={window.location.origin + route} />
                <Component />
              </>
            }
          />
        ))}
        {/* Dynamic Route for Projects */}
        {ProjectDetailComponent && (
          <Route
            path="/projects/:id"
            element={
              <>
                <SEO title="Project Detail" />
                <ProjectDetailComponent />
              </>
            }
          />
        )}
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
