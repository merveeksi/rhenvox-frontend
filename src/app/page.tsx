import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { HomeSelectedWork } from "@/components/home/selected-work";
import { HomeCapabilities } from "@/components/home/capabilities";
import { HomeProcess } from "@/components/home/process";
import { HomeAbout } from "@/components/home/about-rhenvox";
import { HomeFinalCta } from "@/components/home/final-cta";
import { OrganizationJsonLd } from "@/components/json-ld";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <HomeSelectedWork />
        <HomeCapabilities />
        <HomeProcess />
        <HomeAbout />
        <HomeFinalCta />
      </main>
      <Footer />
    </>
  );
}
