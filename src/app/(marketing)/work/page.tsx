import type { Metadata } from "next";
import { WorkIndex } from "@/components/work/work-index";

export const metadata: Metadata = {
  title: "Work | Rhenvox",
  description: "Selected product work from Rhenvox, limited to work that can be shown publicly.",
};

export default function WorkPage() {
  return <WorkIndex />;
}
