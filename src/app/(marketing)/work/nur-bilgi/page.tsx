import type { Metadata } from "next";
import { NurBilgiCaseStudy } from "@/components/work/nur-bilgi-case-study";

export const metadata: Metadata = {
  title: "Nur Bilgi — Work | Rhenvox",
  description:
    "Nur Bilgi is a web and mobile knowledge product built by Rhenvox, including Q&A tools, Quran content, prayer information, and related utilities.",
};

export default function NurBilgiWorkPage() {
  return <NurBilgiCaseStudy />;
}
