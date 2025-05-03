"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroGradient } from "@/components/hero-gradient";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();
  
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
    "Next.js", "React", "TypeScript", 
    "Node.js", ".NET", "PostgreSQL", 
    "Azure", "AWS", "TensorFlow", 
    "Docker", "Kubernetes", "CI/CD"
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroGradient />
      
      {/* Our Edge Section */}
      <section className="bg-rhenvox-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ourEdge.title')}</h2>
            <p className="text-rhenvox-muted max-w-2xl mx-auto">
              {t('ourEdge.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {edgeItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-rhenvox-bg p-8 rounded-lg hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className="mb-4 text-rhenvox-turquoise">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-rhenvox-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Projects Section */}
      <section className="bg-rhenvox-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('latestProjects.title')}</h2>
            <p className="text-rhenvox-muted max-w-2xl mx-auto">
              {t('latestProjects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders */}
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-rhenvox-surface rounded-lg overflow-hidden hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-rhenvox-muted mb-4">
                    {t('latestProjects.projectDescription')}
                  </p>
                  <div className="flex space-x-2">
                    <span className="inline-block px-2 py-1 bg-rhenvox-bg rounded text-xs">React</span>
                    <span className="inline-block px-2 py-1 bg-rhenvox-bg rounded text-xs">TypeScript</span>
                    <span className="inline-block px-2 py-1 bg-rhenvox-bg rounded text-xs">Next.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="bg-rhenvox-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('techStack.title')}</h2>
            <p className="text-rhenvox-muted max-w-2xl mx-auto">
              {t('techStack.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 mx-auto mb-2 flex items-center justify-center">
                  <div className="h-10 w-10 bg-rhenvox-bg rounded-full"></div>
                </div>
                <span className="text-sm text-rhenvox-muted">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rhenvox-turquoise/10 via-rhenvox-indigo/10 to-rhenvox-purple/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="inline-block">
            <button className="bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-sky to-rhenvox-purple text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              {t('cta.button')}
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
