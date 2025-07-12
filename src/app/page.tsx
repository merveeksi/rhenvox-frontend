"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroGradient } from "@/components/hero-gradient";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { ThemeAwareSection } from "@/components/theme-aware-section";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Image from "next/image";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Edge items with translations
  const edgeItems = [
    {
      icon: <div className="w-12 h-12 rounded-lg bg-rhenvox-purple/20 flex items-center justify-center">SE</div>,
      title: t('ourEdge.softwareEngineering.title'),
      description: t('ourEdge.softwareEngineering.description')
    },
    {
      icon: <div className="w-12 h-12 rounded-lg bg-rhenvox-indigo/20 flex items-center justify-center">AI</div>,
      title: t('ourEdge.aiResearch.title'),
      description: t('ourEdge.aiResearch.description')
    },
    {
      icon: <div className="w-12 h-12 rounded-lg bg-rhenvox-sky/20 flex items-center justify-center">UX</div>,
      title: t('ourEdge.uiuxDesign.title'),
      description: t('ourEdge.uiuxDesign.description')
    }
  ];

  // Tech stack array - these are brand names, so they stay the same
  const techStack = [
    ".NET", "Next.js", "Node.js", "React Native",
    "TypeScript", "TailwindCSS", "PostgreSQL",
    "Docker", "AI", "AWS", "Google Cloud", "OpenAI",
  ];

  // If not mounted yet, return a loading state or skeleton
  if (!mounted) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroGradient />
        {/* Add skeleton sections here if needed */}
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroGradient />
      
      {/* Our Edge Section */}
      <ThemeAwareSection 
        lightBg="bg-rhenvox-surface" 
        darkBg="bg-rhenvox-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-purple to-rhenvox-turquoise bg-clip-text text-transparent animate-gradient">{t('ourEdge.title')}</h2>
            <p className="max-w-2xl mx-auto text-rhenvox-muted text-lg">
              {t('ourEdge.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {edgeItems.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-lg hover:translate-y-[-8px] transition-all duration-300 bg-rhenvox-bg hover:shadow-xl hover:shadow-rhenvox-purple/10 border border-transparent hover:border-rhenvox-purple/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-rhenvox-turquoise/10 via-rhenvox-purple/10 to-rhenvox-turquoise/10 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                <div className="mb-4 text-rhenvox-turquoise relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                <p className="text-rhenvox-muted relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ThemeAwareSection>
      
      {/* Latest Projects Section */}
      <ThemeAwareSection 
        lightBg="bg-rhenvox-bg" 
        darkBg="bg-rhenvox-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('latestProjects.title')}</h2>
            <p className="max-w-2xl mx-auto text-rhenvox-muted">
              {t('latestProjects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Nur Bilgi Web",
                image: "/images/nurbilgi.logo.png",
                description: t('latestProjects.projectDescription'),
                technologies: ["Next.js", "TypeScript", ".NET"],
                url: "https://nurbilgi.com"
              },
              {
                id: 2,
                name: "Nur Bilgi Mobil",
                image: "/images/nurbilgi.logo.png",
                description: t('latestProjects.projectDescription'),
                technologies: ["React Native", "TailwindCSS", ".NET"],
                url: "https://nurbilgi.com/mobile"
              },
              {
                id: 3,
                name: "Project 3",
                image: "/images/rhenvox-logo.png",
                description: t('latestProjects.projectDescription'),
                technologies: ["React Native", "TailwindCSS", ".NET"],
                url: "https://rhenvox.com/portfolio"
              }
            ].map((project) => (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id} 
                className="block rounded-lg overflow-hidden hover:translate-y-[-8px] transition-transform duration-300 bg-rhenvox-surface border border-rhenvox-muted/20 dark:border-rhenvox-muted/10 shadow-md hover:shadow-lg dark:shadow-rhenvox-muted/5 relative group"
              >
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-rhenvox-turquoise/20 via-rhenvox-purple/20 to-rhenvox-turquoise/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                </div>
                <div className="h-48 bg-white dark:bg-rhenvox-bg flex items-center justify-center p-4">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={project.image} alt={project.name} fill className="object-contain rounded-full" />
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="mb-4 text-rhenvox-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="inline-block px-2 py-1 rounded text-xs bg-rhenvox-bg dark:bg-rhenvox-surface border border-rhenvox-muted/10">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ThemeAwareSection>
      
      {/* Tech Stack Section */}
      <ThemeAwareSection 
        lightBg="bg-rhenvox-surface" 
        darkBg="bg-rhenvox-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-purple to-rhenvox-turquoise bg-clip-text text-transparent animate-gradient">{t('techStack.title')}</h2>
            <p className="max-w-2xl mx-auto text-rhenvox-muted text-lg">
              {t('techStack.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="h-16 w-16 mx-auto mb-2 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-rhenvox-bg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-rhenvox-purple/20 border border-transparent hover:border-rhenvox-purple/30">
                    {/* Using react-icons instead of image files */}
                    {tech === "React" && <FaReact className="h-8 w-8 text-blue-400 group-hover:text-blue-500 transition-colors duration-300" />}
                    {tech === "Next.js" && <SiNextdotjs className="h-7 w-7 group-hover:text-rhenvox-purple transition-colors duration-300" />}
                    {tech === "TypeScript" && <SiTypescript className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />}
                    {tech === "Node.js" && <FaNodeJs className="h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors duration-300" />}
                    {tech === "Python" && <FaPython className="h-8 w-8 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />}
                    {tech === "TailwindCSS" && <SiTailwindcss className="h-8 w-8 text-cyan-400 group-hover:text-cyan-500 transition-colors duration-300" />}
                    {tech === "AWS" && <FaAws className="h-7 w-7 text-orange-400 group-hover:text-orange-500 transition-colors duration-300" />}
                    {tech === "Docker" && <FaDocker className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />}
                    {/* Fallback for any tech without an icon */}
                    {!["React", "Next.js", "TypeScript", "Node.js", "Python", "TailwindCSS", "AWS", "Docker"].includes(tech) && 
                      <div className="h-8 w-8 flex items-center justify-center text-xs font-bold">{tech.substring(0, 2)}</div>
                    }
                  </div>
                </div>
                <span className="text-sm text-rhenvox-muted group-hover:text-rhenvox-purple transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </ThemeAwareSection>
      
      {/* CTA Section */}
      <ThemeAwareSection 
        lightBg="bg-rhenvox-bg" 
        darkBg="bg-rhenvox-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-purple to-rhenvox-turquoise bg-clip-text text-transparent animate-gradient">{t('cta.title')}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-rhenvox-muted text-lg">
            {t('cta.subtitle')}
          </p>
          <div className="inline-block">
                          <ShimmerButton className="px-10 py-4 scale-105 hover:scale-110 transition-transform duration-300">
              <span className="text-sm font-medium text-white">
                {t('cta.button')}
              </span>
            </ShimmerButton>
          </div>
        </div>
      </ThemeAwareSection>
      
      <Footer />
    </main>
  );
}
