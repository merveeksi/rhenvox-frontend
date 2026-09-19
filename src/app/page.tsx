import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/hero";
import { HomeSelectedWork } from "@/components/home/selected-work";
import { HomeCapabilities } from "@/components/home/capabilities";
import { HomeProcess } from "@/components/home/process";
import { HomeAbout } from "@/components/home/about-rhenvox";
import { HomeFinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
