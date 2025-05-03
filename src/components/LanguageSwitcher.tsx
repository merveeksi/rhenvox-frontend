"use client";

import { useState, useEffect } from 'react';
import { useI18n, Locale } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLocale: Locale = locale === 'en' ? 'tr' : 'en';
    setLocale(newLocale);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-rhenvox-surface flex items-center space-x-1"
      aria-label={t('navbar.toggleLanguage')}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">{locale.toUpperCase()}</span>
    </button>
  );
} 