"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();
  
  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get translated nav links
  const navLinks = [
    { href: "/", label: t('navbar.home') },
    { href: "/about", label: t('navbar.about') },
    { href: "/services", label: t('navbar.services') },
    { href: "/portfolio", label: t('navbar.portfolio') },
    { href: "/blog", label: t('navbar.blog') },
    { href: "/careers", label: t('navbar.careers') },
    { href: "/contact", label: t('navbar.contact') },
  ];

  // Avoid rendering different HTML on server vs client
  if (!mounted) {
    return (
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md py-4 px-4 md:px-8 bg-rhenvox-bg/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-rhenvox-text hover:text-rhenvox-sky transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button>{t('navbar.getInTouch')}</Button>
          </div>
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md hover:bg-rhenvox-surface"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md py-4 px-4 md:px-8 bg-rhenvox-bg/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-rhenvox-text hover:text-rhenvox-sky transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Theme Switcher */}
          <ThemeSwitcher />
          
          <Button>{t('navbar.getInTouch')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-rhenvox-surface"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg p-4 bg-rhenvox-bg/95 border-t border-rhenvox-surface">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-rhenvox-text hover:text-rhenvox-turquoise py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-rhenvox-surface">
              {/* Mobile Language Switcher */}
              <LanguageSwitcher />
              
              {/* Mobile Theme Switcher */}
              <ThemeSwitcher />
              
              <Button onClick={() => setMobileMenuOpen(false)}>
                {t('navbar.getInTouch')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 