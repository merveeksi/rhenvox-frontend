/**
 * Helper for theme related functionality
 * These functions are designed to work with next-themes without manipulating the DOM directly
 */

/**
 * Get theme as a boolean indicator (true = dark, false = light)
 */
export function isDarkTheme(theme: string | undefined): boolean {
  return theme === 'dark';
}

/**
 * Get proper color classes based on current theme
 */
export function getThemeColorClass(darkClass: string, lightClass: string, theme: string | undefined): string {
  return theme === 'dark' ? darkClass : lightClass;
}

/**
 * Get theme from localStorage 
 * This is only for reading, not setting - let next-themes handle the setting
 */
export function getStoredTheme(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    return localStorage.getItem('theme');
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
    return null;
  }
}