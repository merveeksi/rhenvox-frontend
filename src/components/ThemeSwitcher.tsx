"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only run on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null on first render to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const currentTheme = theme || resolvedTheme || 'dark';
  const isDark = currentTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full transition-colors hover:bg-rhenvox-surface"
      aria-label="Tema değiştir"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-rhenvox-text" />
      ) : (
        <Moon className="h-5 w-5 text-rhenvox-text" />
      )}
    </button>
  );
} 