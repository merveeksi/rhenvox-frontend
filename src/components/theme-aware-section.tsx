"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeAwareSectionProps {
  children: React.ReactNode;
  className?: string;
  lightBg?: string;
  darkBg?: string;
}

export function ThemeAwareSection({ 
  children, 
  className = "", 
  lightBg = "bg-rhenvox-surface",
  darkBg = "bg-rhenvox-surface"
}: ThemeAwareSectionProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with neutral styling during SSR
    return <section className={`py-24 ${darkBg} ${className}`}>{children}</section>;
  }

  return (
    <section className={`py-24 ${resolvedTheme === 'light' ? lightBg : darkBg} ${className}`}>
      {children}
    </section>
  );
} 