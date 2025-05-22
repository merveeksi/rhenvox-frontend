"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, Layout, Database, Server, Globe } from "lucide-react";

// Define TypeScript interfaces for our data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'ai' | 'mobile' | 'enterprise';
  technologies: string[];
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
type FilterType = "all" | "web" | "ai" | "mobile" | "enterprise";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Our Work
        </h1>
        <p className="text-rhenvox-muted text-lg max-w-3xl mx-auto mb-8">
          Explore our portfolio of innovative projects showcasing our expertise in 
          software engineering, AI development, and digital transformation.
        </p>
      </motion.div>

      {/* Project Filters */}
      <div className="mb-12">
        <Tabs defaultValue="all" className="w-full" onValueChange={(value: string) => setFilter(value as FilterType)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-rhenvox-surface">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="ai">AI & Machine Learning</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise Solutions</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="web" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="ai" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="enterprise" className="mt-0">
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
              <Badge className="mb-4 bg-rhenvox-purple/20 text-rhenvox-purple hover:bg-rhenvox-purple/30">
                Featured Project
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Quantum AI Analytics Platform</h2>
              <p className="text-rhenvox-muted mb-6">
                A revolutionary enterprise analytics platform that leverages quantum computing principles and 
                advanced AI algorithms to process massive datasets at unprecedented speeds, providing real-time 
                insights for Fortune 500 companies.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-rhenvox-surface/50">Python</Badge>
                <Badge variant="outline" className="bg-rhenvox-surface/50">TensorFlow</Badge>
                <Badge variant="outline" className="bg-rhenvox-surface/50">React</Badge>
                <Badge variant="outline" className="bg-rhenvox-surface/50">GraphQL</Badge>
                <Badge variant="outline" className="bg-rhenvox-surface/50">AWS</Badge>
              </div>
              <Button className="mt-2">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Quantum AI Analytics Platform"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <Button variant="default" size="sm" className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Project
                      </Button>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            We follow a structured yet flexible approach to deliver high-quality, 
            scalable solutions that meet our clients&apos; unique requirements.
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
                  <span className="text-xl font-bold gradient-text">{index + 1}</span>
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
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
            Partner with us to transform your ideas into powerful, scalable software solutions 
            that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start a Project
            </Button>
            <Button size="lg" variant="outline">
              View More Work
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
                    <Button variant="default" size="sm" className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </Button>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
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
                  ${project.category === 'enterprise' ? 'bg-rhenvox-indigo/10 text-rhenvox-indigo' : ''}
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
    case 'enterprise': return 'Enterprise';
    default: return category;
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    description: "A comprehensive financial analytics dashboard with real-time data visualization and predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "web",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description: "Advanced NLP-based sentiment analysis API for social media monitoring and brand reputation management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    category: "ai",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker"]
  },
  {
    id: 3,
    title: "Wellness Tracking App",
    description: "Cross-platform mobile application for health monitoring with personalized insights and recommendations.",
    image: "https://images.unsplash.com/photo-1594808381169-2e176aafa05e",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"]
  },
  {
    id: 4,
    title: "Supply Chain Management System",
    description: "End-to-end enterprise solution for optimizing logistics, inventory management, and vendor relations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    category: "enterprise",
    technologies: ["Java", "Spring Boot", "Oracle", "Elasticsearch"]
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Scalable and customizable e-commerce solution with advanced product recommendation engine.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    category: "web",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"]
  },
  {
    id: 6,
    title: "Predictive Maintenance System",
    description: "IoT-based predictive maintenance solution for manufacturing equipment using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    category: "ai",
    technologies: ["Python", "PyTorch", "Kafka", "AWS IoT"]
  },
  {
    id: 7,
    title: "AR Navigation App",
    description: "Augmented reality navigation application for indoor spaces like shopping malls and airports.",
    image: "https://images.unsplash.com/photo-1518544801976-3e161ebe7d0c",
    category: "mobile",
    technologies: ["Swift", "ARKit", "Core ML", "Firebase"]
  },
  {
    id: 8,
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for hospitals with patient records, scheduling, and billing.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    category: "enterprise",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure"]
  },
  {
    id: 9,
    title: "Smart City Dashboard",
    description: "Real-time monitoring dashboard for urban infrastructure with predictive analytics for resource optimization.",
    image: "https://images.unsplash.com/photo-1498075702571-ecb018f3752d",
    category: "ai",
    technologies: ["Python", "React", "Kafka", "TensorFlow"]
  }
];

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We begin by understanding your business goals, user needs, and technical requirements through in-depth consultations."
  },
  {
    title: "Design & Planning",
    description: "Our team creates detailed technical specifications, architecture designs, and project roadmaps tailored to your requirements."
  },
  {
    title: "Development",
    description: "Using agile methodologies, we build your solution iteratively, ensuring quality and alignment with your vision at every step."
  },
  {
    title: "Deployment & Support",
    description: "We ensure smooth deployment, provide comprehensive documentation, and offer ongoing support and maintenance."
  }
];

const techStacks: TechStack[] = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-rhenvox-turquoise" />,
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-rhenvox-purple" />,
    technologies: ["Node.js", "Python", "Java", "C#", "Go", "PHP"]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-rhenvox-indigo" />,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Globe className="h-6 w-6 text-rhenvox-sky" />,
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"]
  }
]; 