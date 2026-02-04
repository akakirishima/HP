import type { ComponentType, LazyExoticComponent } from 'react';
import { lazy } from 'react';
import type { TranslationKeys } from '../i18n/translations';
import HomePage from '../pages/home';
import WorkPage from '../pages/work';
import BlogPage from '../pages/blog';
import PortfolioPage from '../pages/portfolio';
import ContactPage from '../pages/contact';
const BlogDetailPage = lazy(() => import('../pages/blog/[id]'));
const ProjectDetailPage = lazy(() => import('../pages/projects/[id]'));

export type RouteConfig = {
  path: string;
  title: string;
  titleKey?: TranslationKeys;
  navLabelKey?: TranslationKeys;
  nav?: boolean;
  seoImage?: string;
  Component: ComponentType | LazyExoticComponent<ComponentType>;
};

export const routes: RouteConfig[] = [
  { path: '/', title: 'Home', titleKey: 'nav_home', navLabelKey: 'nav_home', nav: true, seoImage: '/og/home.svg', Component: HomePage },
  { path: '/work', title: 'Work', titleKey: 'work_title', navLabelKey: 'nav_work', nav: true, seoImage: '/og/work.svg', Component: WorkPage },
  { path: '/blog', title: 'Blog', titleKey: 'blog_title', navLabelKey: 'nav_blog', nav: true, seoImage: '/og/blog-index.svg', Component: BlogPage },
  { path: '/blog/:id', title: 'Blog Detail', Component: BlogDetailPage },
  {
    path: '/portfolio',
    title: 'Portfolio',
    titleKey: 'portfolio_title',
    navLabelKey: 'nav_portfolio',
    nav: true,
    seoImage: '/og/portfolio.svg',
    Component: PortfolioPage
  },
  { path: '/contact', title: 'Contact', titleKey: 'contact_title', navLabelKey: 'nav_contact', nav: true, seoImage: '/og/contact.svg', Component: ContactPage },
  { path: '/projects/:id', title: 'Project Detail', Component: ProjectDetailPage },
];

export type NavRoute = RouteConfig & { nav: true; navLabelKey: TranslationKeys };

export const navRoutes = routes.filter((route): route is NavRoute => route.nav === true);
