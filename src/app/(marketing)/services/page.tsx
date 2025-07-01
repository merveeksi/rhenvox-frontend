"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { OrbStars } from "@/components/magicui/orbiting-stars";

export default function ServicesPage() {
  const { t } = useI18n();

  // Define services with translated content
  const services = [
    {
      icon: "💻",
      color: "from-rhenvox-turquoise to-blue-500",
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
      icon: "🧠",
      color: "from-rhenvox-purple to-pink-500",
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
      icon: "🎨",
      color: "from-rhenvox-indigo to-rhenvox-sky",
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>,
      title: "Fixed Scope Projects",
      description: "Well-defined projects with clear requirements and deliverables, perfect for specific initiatives."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Time & Materials",
      description: "Flexible engagement model ideal for projects with evolving requirements or ongoing development."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      title: "Dedicated Team",
      description: "A full-time team extension model with dedicated engineers working exclusively on your projects."
    }
  ];

  // Define process steps
  const processSteps = [
    { name: "Discovery", description: "Understanding your business needs and project requirements" },
    { name: "Planning", description: "Creating a roadmap and technical architecture" },
    { name: "Design", description: "Crafting beautiful, intuitive user experiences" },
    { name: "Development", description: "Building robust, scalable solutions" },
    { name: "Testing", description: "Ensuring quality and performance" },
    { name: "Deployment", description: "Launching your solution to the world" },
    { name: "Support", description: "Providing ongoing maintenance and improvements" }
  ];

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center mb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <OrbStars />
          </div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple bg-clip-text text-transparent">
            {t('services.pageTitle')}
          </h1>
          <p className="text-xl text-rhenvox-muted max-w-3xl mx-auto">
            {t('services.heroSubtitle')}
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-rhenvox-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-rhenvox-muted mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="mb-24 bg-rhenvox-surface rounded-xl p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rhenvox-turquoise/10 to-rhenvox-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="text-3xl font-bold mb-12 text-center relative z-10">{t('services.process.title')}</h2>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center mb-8 md:mb-0">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-rhenvox-bg border-2 border-rhenvox-purple flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full h-0.5 w-8 bg-rhenvox-purple/30"></div>
                  )}
                </div>
                <div className="ml-4 mr-8">
                  <h3 className="font-medium">{step.name}</h3>
                  <p className="text-xs text-rhenvox-muted max-w-[150px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Engagement Models */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Engagement Models</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => (
            <div key={index} className="bg-rhenvox-bg rounded-xl p-8 hover:translate-y-[-4px] transition-transform duration-300 border border-rhenvox-surface">
              <div className="w-16 h-16 rounded-full bg-rhenvox-surface flex items-center justify-center mb-6 text-rhenvox-turquoise">
                {model.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{model.title}</h3>
              <p className="text-rhenvox-muted">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-rhenvox-indigo/20 to-rhenvox-purple/20 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
          Let's discuss how we can help you achieve your business goals with our expertise in software engineering, AI, and design.
        </p>
        <div className="inline-block">
          <ShimmerButton className="px-8 py-3">
            <span className="text-sm font-medium text-white">
              Get in Touch
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
} 