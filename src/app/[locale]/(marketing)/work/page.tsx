import { WorkIndex } from "@/components/work/work-index";
import { localizedMetadata } from "@/lib/seo";

export const generateMetadata = localizedMetadata({
  title: "Work",
  description: "Selected product work from Rhenvox, limited to work that can be shown publicly.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkIndex />;
}
