import { AboutPage } from "@/components/about/about-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Rhenvox LTD is a founder-led software company registered in the United Kingdom and operated from Türkiye.",
  path: "/about",
});

export default function AboutRoute() {
  return <AboutPage />;
}
