"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/work", label: t("navbar.work") },
    { href: "/services", label: t("navbar.services") },
    { href: "/about", label: t("navbar.about") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const linkClass = (href: string) =>
    cn("rv-nav-link", pathname === href && "is-active");

  return (
    <header className={cn("rv-header", scrolled && "is-scrolled", mobileMenuOpen && "is-open")}>
      <nav className="rv-header-bar" aria-label={t("navbar.primary")}>
        <Logo />

        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          <div className="flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="rv-header-tools">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <Link href="/contact" className="rv-nav-cta">
            {t("navbar.getInTouch")}
          </Link>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-md p-2 text-rhenvox-text transition-colors hover:text-rhenvox-accent"
            aria-label={mobileMenuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? "mobile-navigation" : undefined}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div id="mobile-navigation" className="rv-nav-drawer md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(linkClass(link.href), "py-2.5")}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-rhenvox-border/70 pt-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <Link href="/contact" className="rv-nav-cta" onClick={() => setMobileMenuOpen(false)}>
                {t("navbar.getInTouch")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
