"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroGradient() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-rhenvox-bg">
      <div className="absolute inset-0 bg-rhenvox-bg z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rhenvox-indigo/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Build, Scale, Innovate</span>
              <br /> with Rhenvox
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-rhenvox-muted text-xl max-w-2xl mb-10"
          >
            Premium software engineering, AI R&D, and UI/UX design services for ambitious companies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg">
              Book a discovery call
            </Button>
            <Button variant="outline" size="lg">
              View our work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 