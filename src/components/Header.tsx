import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { navRoutes } from '../data/routes';

type HeaderProps = {
  title?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
  activeHref?: string;
};

export default function Header({ left, right, activeHref }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = navRoutes;

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on navigation
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <>
      <header
        className="header"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container">
          <div className="header__inner" style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'space-between', padding: '0 8px' }}>
            <div className="header__left">{left}</div>
            <h1 className="header__title" style={{ margin: 0, fontSize: '1.25rem', color: '#004098', fontWeight: 700, letterSpacing: '0.05em' }}>
              {t('site_title')}
            </h1>

            {/* Desktop Navigation */}
            <nav className="nav nav--desktop" aria-label="Main navigation">
              {links.map((l) => {
                const isActive = activeHref === l.path || (l.path !== '/' && activeHref?.startsWith(l.path));
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      marginRight: 24,
                      color: isActive ? '#004098' : '#333',
                      textDecoration: 'none',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      display: 'inline-block',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#004098'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isActive ? '#004098' : '#333'}
                  >
                    {t(l.navLabelKey)}
                  </Link>
                );
              })}

              <button
                onClick={toggleLanguage}
                style={{
                  background: 'transparent',
                  border: '1px solid #004098',
                  color: '#004098',
                  borderRadius: '100px',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  marginLeft: '12px',
                  fontSize: '0.8rem',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#004098';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#004098';
                }}
              >
                {language === 'ja' ? 'EN' : 'JP'}
              </button>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <div className="header__right">{right}</div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav
        className={`nav nav--mobile ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        id="mobile-menu"
      >
        {links.map((l) => {
          const isActive = activeHref === l.path || (l.path !== '/' && activeHref?.startsWith(l.path));
          return (
            <Link
              key={l.path}
              to={l.path}
              className={isActive ? 'active' : ''}
              aria-current={isActive ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              {t(l.navLabelKey)}
            </Link>
          );
        })}
        <button
          onClick={() => { toggleLanguage(); handleLinkClick(); }}
          style={{
            marginTop: '24px',
            background: 'transparent',
            border: '1px solid #fff',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '1.2rem'
          }}
        >
          Switch to {language === 'ja' ? 'English' : '日本語'}
        </button>
      </nav>
    </>
  );
}
