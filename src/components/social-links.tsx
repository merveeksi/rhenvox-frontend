"use client";

import { useI18n } from "@/lib/i18n";
import { SOCIAL_LINKS } from "@/lib/social";

export function SocialLinks({ className = "rv-social-links" }: { className?: string }) {
  const { t } = useI18n();

  return (
    <nav className={className} aria-label={t("footer.social")}>
      <ul>
        {SOCIAL_LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
