export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/merve-eksi-66375995/",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/merveeksi6117",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@merve-eksi-rhenvox",
  },
] as const;

export type SocialId = (typeof SOCIAL_LINKS)[number]["id"];
