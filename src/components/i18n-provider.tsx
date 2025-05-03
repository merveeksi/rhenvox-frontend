"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

// Supported languages
export type Locale = 'en' | 'tr';

// i18n context type
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

// Create context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Import dictionaries
import { en } from '@/lib/i18n/dictionaries/en';
import { tr } from '@/lib/i18n/dictionaries/tr';

const dictionaries = {
  en,
  tr,
};

// Provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  // Load locale from localStorage on client side
  useEffect(() => {
    setMounted(true);
    try {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'tr')) {
        setLocaleState(savedLocale);
      }
    } catch (error) {
      console.error('Error loading locale from localStorage:', error);
    }
  }, []);

  // Set locale and save to localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('locale', newLocale);
    } catch (error) {
      console.error('Error saving locale to localStorage:', error);
    }
  };

  // Translate function
  const t = (key: string): string => {
    // Split the key by dot notation (e.g., 'navbar.home')
    const keys = key.split('.');
    
    // Get the current dictionary
    const dict = dictionaries[locale];
    
    // Navigate through the dictionary using the keys
    let value: any = dict;
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    // Return the translation or the key if not found
    return value || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use i18n
export function useI18n() {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  
  return context;
} 