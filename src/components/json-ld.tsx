import { SITE_URL } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/lib/social";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rhenvox",
  legalName: "Rhenvox LTD",
  url: SITE_URL,
  email: "hello@rhenvox.com",
  sameAs: SOCIAL_LINKS.map((item) => item.href),
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
