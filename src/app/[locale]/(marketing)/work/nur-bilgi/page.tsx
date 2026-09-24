import { NurBilgiCaseStudy } from "@/components/work/nur-bilgi-case-study";
import { localizedMetadata } from "@/lib/seo";

export const generateMetadata = localizedMetadata({
  title: "Nur Bilgi — Work",
  description:
    "Nur Bilgi is a web and mobile knowledge product built by Rhenvox, including Q&A tools, Quran content, prayer information, and related utilities.",
  path: "/work/nur-bilgi",
});

export default function NurBilgiWorkPage() {
  return <NurBilgiCaseStudy />;
}
