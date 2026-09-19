import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/services-page";

export const metadata: Metadata = {
  title: "Services | Rhenvox",
  description:
    "Software product development across web, mobile and backend/API, including practical AI integrations inside products.",
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
