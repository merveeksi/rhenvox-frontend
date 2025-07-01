"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Globe } from "@/components/magicui/globe";
import { OrbStars } from "@/components/magicui/orbiting-stars";

export default function AboutPage() {
  const { t } = useI18n();
  
  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center mb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <OrbStars />
          </div>
        </div>

      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple bg-clip-text text-transparent">
          Rhenvox
        </h1>
        <p className="text-xl text-rhenvox-muted max-w-3xl">
          Pioneering the future of software engineering and AI research
        </p>
      </div>
      </div>


      {/* Company Info Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rhenvox-indigo/20 to-rhenvox-purple/20 p-8 mb-16">
        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
          <Globe size={300} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center p-4 bg-rhenvox-bg/80 backdrop-blur-sm rounded-lg">
            <div className="w-12 h-12 rounded-full bg-rhenvox-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Founded</h3>
            <p className="text-rhenvox-muted text-center">May 2025</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-rhenvox-bg/80 backdrop-blur-sm rounded-lg">
            <div className="w-12 h-12 rounded-full bg-rhenvox-turquoise/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Registered</h3>
            <p className="text-rhenvox-muted text-center">United Kingdom</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-rhenvox-bg/80 backdrop-blur-sm rounded-lg">
            <div className="w-12 h-12 rounded-full bg-rhenvox-sky/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Based in</h3>
            <p className="text-rhenvox-muted text-center">Turkey</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple bg-clip-text text-transparent">Our Story</h2>
          <p className="text-rhenvox-muted mb-6">
            Founded in May 2025, Rhenvox emerged from a vision to revolutionize the software engineering landscape. 
            Registered in the United Kingdom and operating from Turkey, we combine global standards with local expertise.
          </p>
          <p className="text-rhenvox-muted mb-6">
            Our team of engineers, designers, and researchers work together to build innovative solutions that transcend borders.
            We specialize in creating software that doesn't just function—it transforms businesses and user experiences.
          </p>
          <p className="text-rhenvox-muted">
            At Rhenvox, we're passionate about using technology to solve complex problems while maintaining a human-centered approach to everything we build.
          </p>
        </div>
        <div className="bg-rhenvox-surface rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-rhenvox-muted mb-8">
            To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation. 
            We believe in creating technology that makes a real difference for our clients and the people they serve.
          </p>
          <div className="bg-rhenvox-bg p-6 rounded-lg">
            <h3 className="font-medium mb-4 text-xl">Core Values</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-rhenvox-turquoise mr-2"></div>
                <span>Engineering Excellence</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-rhenvox-purple mr-2"></div>
                <span>User-Centered Design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-rhenvox-sky mr-2"></div>
                <span>Continuous Innovation</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-rhenvox-indigo mr-2"></div>
                <span>Global Collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Focus */}
      <div className="bg-rhenvox-surface rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Technology Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-rhenvox-bg p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300">
            <h3 className="font-semibold mb-4 text-xl">Software Engineering</h3>
            <p className="text-rhenvox-muted">
              Building scalable applications with clean architecture and modern practices.
              From web applications to mobile solutions, we deliver robust software.
            </p>
          </div>
          <div className="bg-rhenvox-bg p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300">
            <h3 className="font-semibold mb-4 text-xl">AI Research</h3>
            <p className="text-rhenvox-muted">
              Pushing the boundaries of artificial intelligence to create intelligent solutions
              that learn, adapt, and deliver exceptional results.
            </p>
          </div>
          <div className="bg-rhenvox-bg p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300">
            <h3 className="font-semibold mb-4 text-xl">UI/UX Design</h3>
            <p className="text-rhenvox-muted">
              Crafting beautiful, intuitive interfaces that delight users and create
              memorable digital experiences that stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}