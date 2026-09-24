import { ServicesPage } from "@/components/services/services-page";
import { localizedMetadata } from "@/lib/seo";

export const generateMetadata = localizedMetadata({
  title: "Services",
  description:
    "Software product development across web, mobile and backend/API, including practical AI integrations inside products.",
  path: "/services",
});

export default function ServicesRoute() {
  return <ServicesPage />;
}
