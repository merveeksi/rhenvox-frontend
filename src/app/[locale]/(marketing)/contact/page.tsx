import { ContactPage } from "@/components/contact/contact-page";
import { localizedMetadata } from "@/lib/seo";

export const generateMetadata = localizedMetadata({
  title: "Contact",
  description:
    "Contact Rhenvox about a product or technical project at hello@rhenvox.com.",
  path: "/contact",
});

export default function ContactRoute() {
  return <ContactPage />;
}
