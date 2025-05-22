"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Globe } from "@/components/magicui/globe";
import { OrbitingStars } from "@/components/magicui/orbiting-stars";
import { CustomScrollbar } from "@/components/magicui/custom-scrollbar";

export function HeroGradient() {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();

  return (
    <>
      <CustomScrollbar />
      <section className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${resolvedTheme === 'light' ? 'bg-[#E4D5F8]' : 'bg-rhenvox-bg'}`}>
        {/* Background with globe sphere */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rhenvox-bg via-rhenvox-bg to-[#13172E] opacity-80"></div>
          
          {/* Large globe sphere in background - similar to dora.run */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[1600px] max-h-[1600px] opacity-70 flex items-center justify-center">
              <Globe />
              <OrbitingStars />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${resolvedTheme === 'light' ? 'text-[#4A137C]' : ''}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-sky to-rhenvox-indigo">
                  {t('heroGradient.title') || "Build, Scale, Innovate"}
                </span>
                <br /> {t('heroGradient.subtitle') || "with Rhenvox"}
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl max-w-2xl mb-10 ${resolvedTheme === 'light' ? 'text-[#4A137C]' : 'text-rhenvox-muted'}`}
            >
              {t('heroGradient.description') || "Premium software engineering, AI R&D, and UI/UX design services for ambitious companies."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg">
                {t('cta.button') || "Book a free 30-minute consultation"}
              </Button>
              <Button variant="outline" size="lg">
                {t('portfolio.viewWork') || "View Our Work"}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 