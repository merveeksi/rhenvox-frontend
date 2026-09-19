import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-rhenvox-bg px-4 pb-16 pt-24 md:px-6">
        <div className="legal-doc mx-auto max-w-prose text-[0.95rem] leading-relaxed text-rhenvox-text">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
