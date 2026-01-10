import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './canvas/AnimatedBackground';
import PageEffects from './PageEffects';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  links?: { href: string; label: string }[];
  activeHref?: string;
  route?: string;
};

export default function Layout({ children, title = 'My App', links = [], activeHref, route }: LayoutProps) {
  return (
    <div className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <AnimatedBackground />
      <PageEffects route={route} />
      <div className="content-layer" style={{ position: 'relative', zIndex: 1, display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Header title={title} links={links} activeHref={activeHref} />
        <main style={{ flex: 1 }}>
          <div className="container">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
