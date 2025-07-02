"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, Code, Database, Server, Globe, Laptop, Smartphone } from "lucide-react";
import Image from "next/image";
import { OrbStars } from "@/components/magicui/orbiting-stars";

// Define TypeScript interfaces for our data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'ai' | 'mobile' | 'backend';
  technologies: string[];
  link?: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface TechStack {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
}

// Define the filter type
type FilterType = "all" | "web" | "ai" | "mobile" | "backend";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <OrbStars />
        </div>
        
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-rhenvox-muted text-lg max-w-3xl mx-auto mb-8">
            Showcasing my expertise in software development, with a focus on backend engineering,
            fullstack applications, and AI-powered solutions.
          </p>
        </motion.div>
      </div>

      {/* About Me Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-rhenvox-purple/5 via-rhenvox-indigo/5 to-rhenvox-turquoise/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="purple" className="mb-4">
                About Me
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Merve Ekşi</h2>
              <p className="text-rhenvox-muted mb-4">
                I graduated from Istanbul University with a degree in Management Information Systems. 
                Initially specializing in .NET development, I've expanded my expertise to become a fullstack 
                developer with the rise of AI technologies.
              </p>
              <p className="text-rhenvox-muted mb-6">
                In 2025, I established my own limited company in the UK, which I run as a solo entrepreneur. 
                I'm passionate about completing projects with dedication and approach my work with love and commitment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="light" className="bg-rhenvox-surface/50">.NET</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">React</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">Next.js</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">SQL</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">AI Integration</Badge>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-rhenvox-purple/20">
                <Image
                  src="/images/profile.png"
                  alt="Merve Ekşi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <Tabs defaultValue="all" className="w-full" onValueChange={(value: string) => setFilter(value as FilterType)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-rhenvox-surface">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="web" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="backend" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="ai" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Featured Project */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-rhenvox-purple/5 via-rhenvox-indigo/5 to-rhenvox-turquoise/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge variant="purple" className="mb-4">
                Featured Project
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Nur Bilgi</h2>
              <p className="text-rhenvox-muted mb-6">
                A comprehensive web application that offers educational content and resources. 
                The platform is currently live, with a mobile version in active development.
                Nur Bilgi leverages modern web technologies and AI to deliver a seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="light" className="bg-rhenvox-surface/50">.NET</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">React</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">Next.js</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">SQL Server</Badge>
                <Badge variant="light" className="bg-rhenvox-surface/50">Azure</Badge>
              </div>
              <Button variant="gradient" className="mt-2">
                <a href="https://nurbilgi.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-56 w-full overflow-hidden rounded-full">
                <Image
                  src="/images/nurbilgi.logo.png"
                  alt="Nur Bilgi"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Approach</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            I follow a structured yet flexible approach to deliver high-quality, 
            scalable solutions that meet my clients' unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-rhenvox-surface rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-rhenvox-purple/20 to-rhenvox-turquoise/20 mb-4">
                  <span className="text-xl font-bold bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple bg-clip-text text-transparent">{index + 1}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 w-[calc(100%+1.5rem)] h-[2px] bg-gradient-to-r from-rhenvox-purple/20 to-rhenvox-turquoise/20"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-rhenvox-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Technology Stack</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            I leverage cutting-edge technologies to build robust, scalable, and efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              className="bg-rhenvox-surface rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 p-2 w-fit rounded-full bg-gradient-to-r from-rhenvox-purple/20 to-rhenvox-turquoise/20">
                {stack.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{stack.title}</h3>
              <ul className="space-y-2">
                {stack.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-rhenvox-turquoise mr-2"></div>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-rhenvox-indigo/10 via-rhenvox-sky/10 to-rhenvox-turquoise/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
            I'm passionate about turning ideas into reality. Whether you need a web application, mobile app, 
            or backend system, I'm ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <a href="/contact">Contact Me</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="mailto:contact@rhenvox.com">Send Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={projects.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-rhenvox-surface rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center">
                    {project.link ? (
                      <Button variant="default" size="sm" className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Project
                      </Button>
                    )}
                    {project.link && (
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold group-hover:text-rhenvox-turquoise transition-colors">
                  {project.title}
                </h3>
                <Badge className={`
                  ${project.category === 'web' ? 'bg-rhenvox-turquoise/10 text-rhenvox-turquoise' : ''}
                  ${project.category === 'ai' ? 'bg-rhenvox-purple/10 text-rhenvox-purple' : ''}
                  ${project.category === 'mobile' ? 'bg-rhenvox-sky/10 text-rhenvox-sky' : ''}
                  ${project.category === 'backend' ? 'bg-rhenvox-indigo/10 text-rhenvox-indigo' : ''}
                `}>
                  {getCategoryName(project.category)}
                </Badge>
              </div>
              <p className="text-rhenvox-muted mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-rhenvox-surface/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function getCategoryName(category: string): string {
  switch(category) {
    case 'web': return 'Web';
    case 'ai': return 'AI & ML';
    case 'mobile': return 'Mobile';
    case 'backend': return 'Backend';
    default: return category;
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nur Bilgi Web",
    description: "A comprehensive educational web platform with personalized learning paths and interactive content.",
    image: "/images/nurbilgi.logo.png",
    category: "web",
    technologies: ["Next.js", ".NET", "SQL Server", "Azure"],
    link: "https://nurbilgi.com"
  },
  {
    id: 2,
    title: "Nur Bilgi Mobile",
    description: "Mobile application for the Nur Bilgi platform, currently in development to provide on-the-go learning.",
    image: "/images/nurbilgi.logo.png",
    category: "mobile",
    technologies: ["React Native", "TypeScript", ".NET API"]
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered tool that helps create educational content for various subjects and learning levels.",
    image: "https://images.unsplash.com/photo-1677442135136-760302227f2e",
    category: "ai",
    technologies: ["Python", "OpenAI API", "React", "Node.js"]
  },
  {
    id: 4,
    title: "E-Learning API",
    description: "Backend API system that powers educational platforms with user management, content delivery, and analytics.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
    category: "backend",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure"]
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with modern web technologies to showcase projects and skills.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "web",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"]
  },
  {
    id: 6,
    title: "Student Progress Analytics",
    description: "AI-powered analytics system that tracks student progress and provides personalized recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "ai",
    technologies: [".NET", "ML.NET", "SQL Server", "React"]
  }
];

const processSteps: ProcessStep[] = [
  {
    title: "Understanding",
    description: "I take time to deeply understand your business needs, user requirements, and project goals."
  },
  {
    title: "Planning",
    description: "Creating detailed technical specifications and project roadmaps tailored to your specific requirements."
  },
  {
    title: "Development",
    description: "Using agile methodologies, I build solutions iteratively, ensuring quality at every step of the process."
  },
  {
    title: "Delivery",
    description: "I ensure smooth deployment, provide comprehensive documentation, and offer ongoing support."
  }
];

const techStacks: TechStack[] = [
  {
    title: "Frontend",
    icon: <Laptop className="h-6 w-6 text-rhenvox-turquoise" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-rhenvox-purple" />,
    technologies: [".NET Core", "C#", "ASP.NET", "Node.js", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-rhenvox-indigo" />,
    technologies: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework", "LINQ", "Redis"]
  },
  {
    title: "Mobile & Cloud",
    icon: <Smartphone className="h-6 w-6 text-rhenvox-sky" />,
    technologies: ["React Native", "Azure", "AWS", "Docker", "CI/CD", "Git"]
  }
];