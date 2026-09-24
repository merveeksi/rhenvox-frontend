export const LOCALES = ["en", "tr"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "tr";
}

export function localize(path: string, locale: Locale): string {
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const bare = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const queryIndex = bare.indexOf("?");
  const query = queryIndex >= 0 ? bare.slice(queryIndex) : "";
  const pathname = queryIndex >= 0 ? bare.slice(0, queryIndex) : bare;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const stripped = normalized.replace(/^\/(en|tr)(?=\/|$)/, "") || "/";
  const prefix = stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
  return `${prefix}${query}${hash}`;
}

export function localeFromPath(pathname: string | null): Locale | null {
  const segment = pathname?.split("/")[1];
  return isLocale(segment) ? segment : null;
}
