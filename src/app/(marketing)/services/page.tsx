"use client";

import { useI18n } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useI18n();

  // Define services with translated content
  const services = [
    {
      icon: "SE",
      title: t('services.categories.software.title'),
      description: t('services.categories.software.description'),
      features: [
        "Web Application Development",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration"
      ]
    },
    {
      icon: "AI",
      title: t('services.categories.ai.title'),
      description: t('services.categories.ai.description'),
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Systems"
      ]
    },
    {
      icon: "UX",
      title: t('services.categories.design.title'),
      description: t('services.categories.design.description'),
      features: [
        "User Research & Testing",
        "UX Strategy & Design",
        "UI Design & Prototyping",
        "Design Systems"
      ]
    }
  ];

  // Define engagement models
  const engagementModels = [
    {
      title: "Fixed Scope Projects",
      description: "Well-defined projects with clear requirements and deliverables, perfect for specific initiatives."
    },
    {
      title: "Time & Materials",
      description: "Flexible engagement model ideal for projects with evolving requirements or ongoing development."
    },
    {
      title: "Dedicated Team",
      description: "A full-time team extension model with dedicated engineers working exclusively on your projects."
    }
  ];

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">{t('services.pageTitle')}</h1>
      <p className="text-rhenvox-muted text-center max-w-3xl mx-auto mb-16">
        {t('services.heroSubtitle')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-rhenvox-surface rounded-lg p-8 hover:translate-y-[-8px] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple flex items-center justify-center text-white font-bold">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold ml-4">{service.title}</h2>
            </div>
            <p className="text-rhenvox-muted mb-4">{service.description}</p>
            <ul className="list-disc pl-5 text-rhenvox-muted">
              {service.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="bg-rhenvox-bg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('services.process.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model, index) => (
            <div key={index} className="p-6 bg-rhenvox-surface rounded-lg">
              <h3 className="text-lg font-medium mb-2">{model.title}</h3>
              <p className="text-rhenvox-muted">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 