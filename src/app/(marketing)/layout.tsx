import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </>
  );
} 