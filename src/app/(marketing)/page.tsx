import { HeroGradient } from "@/components/hero-gradient";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomePage() {
  return (
    <>
      <HeroGradient />
      <ThemeSwitcher />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rhenvox-turquoise/10 via-rhenvox-indigo/10 to-rhenvox-purple/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
            Let's unlock your next big product together
          </p>
          <Button>Book a free 30-minute consultation</Button>
        </div>
      </section>
    </>
  );
} 