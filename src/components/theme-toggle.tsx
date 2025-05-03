"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  // Only run on client to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Force apply the theme from localStorage or default
  React.useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem("theme") || "dark";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme);
    }
  }, [mounted, setTheme]);
  
  const toggleTheme = React.useCallback(() => {
    const currentTheme = theme || resolvedTheme || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    // Update HTML classes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    
    // Store in localStorage
    localStorage.setItem("theme", newTheme);
    
    // Update next-themes
    setTheme(newTheme);
  }, [theme, resolvedTheme, setTheme]);
  
  // Don't render toggle until hydration completes to avoid mismatch
  if (!mounted) {
    return null;
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] theme-toggle-icon light-icon" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] theme-toggle-icon dark-icon" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 