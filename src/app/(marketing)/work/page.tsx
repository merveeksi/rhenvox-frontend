import { WorkIndex } from "@/components/work/work-index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description: "Selected product work from Rhenvox, limited to work that can be shown publicly.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkIndex />;
}
