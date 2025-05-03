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
      <main className="min-h-screen pt-28 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
} 