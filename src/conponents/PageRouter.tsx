import React, { useEffect, useMemo, useState } from 'react';
import Layout from './Layout';

type PageEntry = {
  route: string;
  title: string;
  Component: React.ComponentType<unknown>;
};

function toTitle(name: string) {
  const base = name.replace(/[-_]/g, ' ');
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function getHashPath() {
  const h = window.location.hash || '#/';
  const path = h.replace(/^#/, '');
  return path || '/';
}

export default function PageRouter() {
  // Eagerly import all TSX pages under src/pages
  const modules = import.meta.glob('../pages/**/*.tsx', { eager: true }) as Record<string, { default: React.ComponentType<unknown>, Component?: React.ComponentType<unknown> }>;

  const pages: PageEntry[] = useMemo(() => {
    const list = (Object.entries(modules)
      .map(([path, mod]) => {
        const rel = path.replace(/^\.\.\/pages\//, '').replace(/\.(t|j)sx?$/, '');

        // Handle dynamic routes: [id] -> :id pattern (but we'll handle it differently)
        // For now, skip files with [id] as they are dynamic
        if (rel.includes('[')) {
          return null;
        }

        let route = '/' + rel;
        route = route.replace(/\/(index)$/i, '/');
        route = route.replace(/\/$/, '');
        if (route === '') route = '/';
        const leaf = rel.split('/').pop() || 'home';
        const title = toTitle(leaf.toLowerCase() === 'index' ? (rel.split('/')[rel.split('/').length - 2] || 'home') : leaf);
        const Component = (mod && (mod.default || mod.Component)) as React.ComponentType<unknown>;
        if (!Component) return null;
        return { route, title, Component } as PageEntry;
      })
      .filter(Boolean)) as PageEntry[];

    const dedup = new Map<string, PageEntry>();
    for (const p of list) dedup.set(p.route, p);
    return Array.from(dedup.values()).sort((a, b) => (a.route > b.route ? 1 : -1));
  }, [modules]);

  const [path, setPath] = useState<string>(() => getHashPath());

  useEffect(() => {
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Check for dynamic project route: /projects/:id
  const isProjectRoute = path.startsWith('/projects/') && path.length > '/projects/'.length;

  // Get the dynamic page component
  const ProjectDetailModule = modules['../pages/projects/[id].tsx'];
  const ProjectDetailComponent = ProjectDetailModule?.default as React.ComponentType<unknown> | undefined;

  // Find matching static page or fallback
  let active = pages.find((p) => p.route === path);
  let Content: React.ComponentType<unknown>;

  if (isProjectRoute && ProjectDetailComponent) {
    // Use the dynamic project detail page
    Content = ProjectDetailComponent;
  } else if (active) {
    Content = active.Component;
  } else {
    // Fallback to home or first page
    active = pages.find((p) => p.route === '/') || pages[0];
    Content = active?.Component ?? (() => <div>ページが見つかりません</div>);
  }

  // Build nav links (exclude dynamic routes from nav)
  const NavLinks = pages
    .filter(p => !p.route.startsWith('/projects'))
    .map((p) => ({ href: `#${p.route}`, label: p.title }));

  const activeHref = `#${path}`;

  return (
    <Layout title="My App" links={NavLinks} activeHref={activeHref} route={path}>
      <Content />
    </Layout>
  );
}
