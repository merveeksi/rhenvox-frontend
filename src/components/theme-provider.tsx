"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({ 
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof NextThemesProvider>) {
  // State to track hydration
  const [mounted, setMounted] = useState(false);

  // Initialize theme on client
  useEffect(() => {
    setMounted(true);
    
    // Apply theme from localStorage or default
    try {
      const savedTheme = localStorage.getItem("theme") || "dark";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(savedTheme);
    } catch (e) {
      console.error("Error initializing theme:", e);
    }
  }, []);

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
} 