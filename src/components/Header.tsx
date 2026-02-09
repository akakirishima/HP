import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { navRoutes } from '../data/routes';
import type { Language } from '../i18n/translations';

type HeaderProps = {
  title?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
  activeHref?: string;
};

export default function Header({ left, right, activeHref }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previousBodyOverflowRef = useRef<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const languageOptions: { code: Language; shortLabel: string; label: string }[] = [
    { code: 'ja', shortLabel: 'JP', label: '日本語' },
    { code: 'en', shortLabel: 'EN', label: 'English' },
    { code: 'ko', shortLabel: 'KR', label: '한국어' },
    { code: 'zh', shortLabel: 'ZH', label: '简体中文' },
  ];

  const links = navRoutes;

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!mobileMenuOpen) {
      if (previousBodyOverflowRef.current !== null) {
        document.body.style.overflow = previousBodyOverflowRef.current;
        previousBodyOverflowRef.current = null;
      }
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (previousBodyOverflowRef.current !== null) {
        document.body.style.overflow = previousBodyOverflowRef.current;
        previousBodyOverflowRef.current = null;
      } else {
        document.body.style.overflow = '';
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on navigation
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
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

              <div
                role="group"
                aria-label={t('nav_language')}
                style={{
                  display: 'inline-flex',
                  border: '1px solid #004098',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  marginLeft: '12px'
                }}
              >
                {languageOptions.map((option, index) => {
                  const isActive = language === option.code;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => handleLanguageSelect(option.code)}
                      aria-pressed={isActive}
                      title={option.label}
                      style={{
                        background: isActive ? '#004098' : 'transparent',
                        color: isActive ? '#fff' : '#004098',
                        border: 'none',
                        borderRight: index < languageOptions.length - 1 ? '1px solid #004098' : 'none',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = '#004098';
                          e.currentTarget.style.color = '#fff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#004098';
                        }
                      }}
                    >
                      {option.shortLabel}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={t('nav_toggle')}
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
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <div style={{ color: '#bbb', fontSize: '0.9rem', letterSpacing: '0.08em', marginBottom: '12px' }}>
            {t('nav_language')}
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {languageOptions.map((option) => {
              const isActive = language === option.code;
              return (
                <button
                  key={`mobile-${option.code}`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => { handleLanguageSelect(option.code); handleLinkClick(); }}
                  style={{
                    background: isActive ? '#fff' : 'transparent',
                    border: '1px solid #fff',
                    color: isActive ? '#000' : '#fff',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
