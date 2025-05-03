"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { applyThemeClass } from '@/lib/theme-utils';

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // hydration hatalarını önlemek için client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Force apply theme classes to HTML
  useEffect(() => {
    if (mounted && resolvedTheme) {
      applyThemeClass(resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyThemeClass(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors hover:bg-rhenvox-surface"
      aria-label="Tema değiştir"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5 text-rhenvox-text" />
      ) : (
        <Moon className="h-5 w-5 text-rhenvox-text" />
      )}
    </button>
  );
} 