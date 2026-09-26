"use client";

import { useI18n } from "@/lib/i18n";
import { SOCIAL_LINKS, type SocialId } from "@/lib/social";

function SocialIcon({ id }: { id: SocialId }) {
  if (id === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#0A66C2" />
        <path
          fill="#fff"
          d="M7.05 9.4H4.7v9.7h2.35V9.4zM5.88 4.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM19.3 13.35c0-2.65-1.41-3.9-3.3-3.9-1.52 0-2.2.84-2.58 1.42V9.4h-2.35v9.7h2.35v-5.4c0-.28.02-.57.1-.77.24-.57.77-1.17 1.67-1.17 1.18 0 1.65.9 1.65 2.22v5.12h2.46v-5.75z"
        />
      </svg>
    );
  }

  if (id === "x") {
    return (
      <svg className="rv-social-x" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.16l-4.71-6.23-5.4 6.23H3.24l7.73-8.84L1.25 2.25h6.32l4.25 5.62 6.42-5.62zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3 3 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.81a3 3 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8z"
      />
      <path fill="#fff" d="M9.75 15.57V8.43L15.82 12l-6.07 3.57z" />
    </svg>
  );
}

export function SocialLinks({
  className = "rv-social-links",
  icons = false,
  external = false,
}: {
  className?: string;
  icons?: boolean;
  external?: boolean;
}) {
  const { t } = useI18n();

  return (
    <nav className={className} aria-label={t("footer.social")}>
      <ul>
        {SOCIAL_LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              {icons ? (
                <SocialIcon id={item.id} />
              ) : (
                <>
                  {item.label}
                  {external ? (
                    <span aria-hidden="true" className="rv-external-mark">
                      ↗
                    </span>
                  ) : null}
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
