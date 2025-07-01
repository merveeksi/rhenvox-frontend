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
  
  // Don't render toggle until hydration completes to avoid mismatch
  if (!mounted) {
    return null;
  }
  
  const currentTheme = theme || resolvedTheme || "dark";
  const isDark = currentTheme === "dark";

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 