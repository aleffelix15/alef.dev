import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { ptBR, type Translations } from './pt-br';
import { en } from './en';

export type Language = 'pt-br' | 'en';

const dictionaries: Record<Language, Translations> = { 'pt-br': ptBR, 'en': en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Language {
  // 1. Check localStorage
  const saved = localStorage.getItem('language') as Language | null;
  if (saved && dictionaries[saved]) return saved;
  
  // 2. Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('pt')) return 'pt-br';
  
  // 3. Fallback to English
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'pt-br' ? 'pt-BR' : 'en';
  };
  
  useEffect(() => {
    document.documentElement.lang = language === 'pt-br' ? 'pt-BR' : 'en';
  }, [language]);
  
  const t = useMemo(() => dictionaries[language], [language]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
