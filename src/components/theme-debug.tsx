"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClasses, setHtmlClasses] = useState('');
  
  useEffect(() => {
    setMounted(true);
    
    // Update HTML classes for debugging
    const updateHtmlClasses = () => {
      setHtmlClasses(document.documentElement.className);
    };
    
    updateHtmlClasses();
    const observer = new MutationObserver(updateHtmlClasses);
    observer.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 bg-rhenvox-surface rounded-lg shadow-lg text-sm">
      <div>Theme state: {theme}</div>
      <div>Resolved theme: {resolvedTheme}</div>
      <div>HTML classes: {htmlClasses}</div>
      <div className="flex gap-2 mt-2">
        <button 
          onClick={() => setTheme('light')}
          className="px-2 py-1 bg-white text-black rounded"
        >
          Force Light
        </button>
        <button 
          onClick={() => setTheme('dark')}
          className="px-2 py-1 bg-black text-white rounded"
        >
          Force Dark
        </button>
      </div>
    </div>
  );
} 