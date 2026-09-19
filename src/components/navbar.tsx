"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { ShimmerButton } from "./magicui/shimmer-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/work", label: t("navbar.work") },
    { href: "/services", label: t("navbar.services") },
    { href: "/about", label: t("navbar.about") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const linkClass = (href: string) =>
    cn(
      "text-sm transition-colors",
      pathname === href
        ? "text-rhenvox-text font-medium"
        : "text-rhenvox-muted hover:text-rhenvox-text"
    );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-rhenvox-border bg-rhenvox-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          {mounted && (
            <>
              <LanguageSwitcher />
              <ThemeSwitcher />
            </>
          )}
          <ShimmerButton href="/contact">
            <span>{t("navbar.getInTouch")}</span>
          </ShimmerButton>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => mounted && setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-rhenvox-text hover:bg-rhenvox-surface-muted"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mounted && mobileMenuOpen && (
        <div className="border-t border-rhenvox-border bg-rhenvox-bg px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(linkClass(link.href), "py-2")}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-rhenvox-border pt-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <ShimmerButton href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <span>{t("navbar.getInTouch")}</span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
