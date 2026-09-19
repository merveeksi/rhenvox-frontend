import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About | Rhenvox",
  description:
    "Rhenvox LTD is a founder-led software company registered in the United Kingdom and operated from Türkiye.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
