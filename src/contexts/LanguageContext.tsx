// eslint-disable-next-line react-refresh/only-export-components
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../i18n/translations';
import type { Language, TranslationKeys } from '../i18n/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKeys) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Get initial language from localStorage or browser preference, default to 'ja'
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('app_language') as Language;
            if (saved && (saved === 'ja' || saved === 'en')) return saved;

            const browserLang = navigator.language;
            return browserLang.startsWith('en') ? 'en' : 'ja';
        }
        return 'ja';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('app_language', lang);
        // Determine the lang attribute for html tag
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: TranslationKeys): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
