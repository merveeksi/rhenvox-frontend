/**
 * Apply theme class to HTML element
 * Ensures the theme is correctly applied to the root element
 */
export function applyThemeClass(theme: string | undefined): void {
  if (!theme) return;
  
  try {
    // First remove both classes
    document.documentElement.classList.remove('light', 'dark');
    // Then add the current theme
    document.documentElement.classList.add(theme);
    // Store in localStorage for persistence
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Error applying theme class:', error);
  }
}

/**
 * Get theme from localStorage or system preference
 */
export function getInitialTheme(): string {
  try {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    
    // Fall back to system preference if available
    if (typeof window !== 'undefined' && window.matchMedia) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? 'dark' : 'light';
    }
  } catch (error) {
    console.error('Error getting initial theme:', error);
  }
  
  // Default to dark theme if all else fails
  return 'dark';
} 