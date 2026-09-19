import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact | Rhenvox",
  description:
    "Contact Rhenvox about a product or technical project at hello@rhenvox.com.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
