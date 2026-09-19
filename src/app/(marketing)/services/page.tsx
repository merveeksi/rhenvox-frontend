import { ServicesPage } from "@/components/services/services-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Software product development across web, mobile and backend/API, including practical AI integrations inside products.",
  path: "/services",
});

export default function ServicesRoute() {
  return <ServicesPage />;
}
