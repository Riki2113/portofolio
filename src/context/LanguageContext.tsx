"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, TranslationKey } from "@/lib/i18n";

type Language = "ID" | "EN";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>("ID");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    setIsTransitioning(true);
    
    // Wait for the fade-out animation to finish
    setTimeout(() => {
      setLangState(newLang);
      
      // Give React a tiny bit of time to render the new text before starting fade-in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
