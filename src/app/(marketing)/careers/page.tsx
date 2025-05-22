"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Users, Heart, Zap, Brain, Coffee, Briefcase } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function CareersPage() {
  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Join Our Team
        </h1>
        <p className="text-rhenvox-muted text-lg max-w-3xl mx-auto mb-8">
          At Rhenvox, we&apos;re building the future of technology together. Join a team of passionate innovators 
          dedicated to creating exceptional software solutions.
        </p>
        <Button size="lg" className="px-8">
          View Open Positions
        </Button>
      </motion.div>

      {/* Vision Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-rhenvox-purple/5 via-rhenvox-indigo/5 to-rhenvox-turquoise/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-rhenvox-muted mb-6">
                We envision a world where technology empowers every individual and organization to achieve their 
                maximum potential. Through innovative software engineering and AI solutions, we strive to transform 
                complex challenges into elegant digital experiences.
              </p>
              <p className="text-rhenvox-muted">
                Our commitment to excellence, continuous innovation, and ethical technology development drives 
                everything we do. We believe that the right blend of human creativity and cutting-edge technology 
                can solve the world&apos;s most pressing problems.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-xl bg-rhenvox-surface p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 mt-1 p-2 rounded-full bg-rhenvox-indigo/10">
                      <Check className="h-4 w-4 text-rhenvox-indigo" />
                    </div>
                    <div>
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-sm text-rhenvox-muted">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            We&apos;ve built a culture that celebrates diversity, encourages innovation, and promotes 
            work-life balance. Here&apos;s what it&apos;s like to work at Rhenvox:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cultureItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-rhenvox-surface rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-rhenvox-turquoise/20 to-rhenvox-purple/20 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-rhenvox-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            We take care of our team with competitive benefits and perks designed to support your 
            wellbeing and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-full bg-rhenvox-purple/10 mr-4 mt-1">
                <Check className="h-4 w-4 text-rhenvox-purple" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{benefit.title}</h4>
                <p className="text-sm text-rhenvox-muted">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto">
            Join our team and help build the next generation of software. We&apos;re always looking for 
            talented individuals to join our growing team.
          </p>
        </div>

        <div className="space-y-4">
          {positions.map((position, index) => (
            <motion.div 
              key={index}
              className="bg-rhenvox-surface rounded-lg p-6 transition-all hover:bg-rhenvox-bg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-rhenvox-indigo/10 text-rhenvox-indigo rounded-full">
                      {position.location}
                    </span>
                    <span className="text-xs px-2 py-1 bg-rhenvox-turquoise/10 text-rhenvox-turquoise rounded-full">
                      {position.type}
                    </span>
                    <span className="text-xs px-2 py-1 bg-rhenvox-purple/10 text-rhenvox-purple rounded-full">
                      {position.department}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </div>
              <p className="text-rhenvox-muted mt-4">{position.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-rhenvox-indigo/10 via-rhenvox-sky/10 to-rhenvox-turquoise/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See a Position That Fits?</h2>
          <p className="text-rhenvox-muted max-w-2xl mx-auto mb-8">
            We&apos;re always looking for exceptional talent. Send us your resume and tell us why you&apos;d 
            be a great addition to the Rhenvox team.
          </p>
          <Button size="lg">
            Send Us Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Innovation",
    description: "We embrace creative thinking and cutting-edge technologies to solve complex problems."
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer service."
  },
  {
    title: "Integrity",
    description: "We maintain honest relationships with our clients, partners, and each other."
  },
  {
    title: "Collaboration",
    description: "We believe that diverse teams working together create the best solutions."
  }
];

const cultureItems = [
  {
    icon: <Users className="h-6 w-6 text-rhenvox-sky" />,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive environment where everyone's voice is heard."
  },
  {
    icon: <Brain className="h-6 w-6 text-rhenvox-purple" />,
    title: "Continuous Learning",
    description: "We invest in your growth with learning resources, conferences, and skill development opportunities."
  },
  {
    icon: <Zap className="h-6 w-6 text-rhenvox-turquoise" />,
    title: "Innovation Days",
    description: "Regular time dedicated to exploring new ideas, technologies, and personal projects."
  },
  {
    icon: <Coffee className="h-6 w-6 text-rhenvox-indigo" />,
    title: "Work-Life Balance",
    description: "Flexible working arrangements designed to help you perform at your best while enjoying life."
  },
  {
    icon: <Heart className="h-6 w-6 text-rhenvox-purple" />,
    title: "Inclusive Culture",
    description: "A diverse workplace where everyone feels welcome, respected, and valued for their unique perspectives."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-rhenvox-sky" />,
    title: "Impactful Work",
    description: "Work on meaningful projects that make a real difference for our clients and users."
  }
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer salaries that reflect your experience, skills, and the value you bring to our team."
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision coverage for you and your dependents."
  },
  {
    title: "Flexible Working",
    description: "Remote, hybrid, or office-based options with flexible hours to suit your lifestyle."
  },
  {
    title: "Professional Development",
    description: "Budget for courses, conferences, and learning resources to advance your skills."
  },
  {
    title: "Generous Time Off",
    description: "Paid vacation, holidays, and personal days to ensure you stay refreshed and motivated."
  },
  {
    title: "Retirement Plan",
    description: "Company-matched retirement savings plan to help you prepare for the future."
  },
  {
    title: "Home Office Stipend",
    description: "Allowance for setting up your ideal work environment at home."
  },
  {
    title: "Wellness Program",
    description: "Resources and activities to support your physical and mental wellbeing."
  },
  {
    title: "Team Events",
    description: "Regular team-building activities, social events, and celebrations."
  }
];

const positions = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "London, UK (Remote)",
    type: "Full-time",
    description: "Lead the development of robust, scalable backend systems using C# and .NET Core. You'll architect solutions, mentor junior developers, and collaborate with cross-functional teams."
  },
  {
    title: "Frontend Developer (React)",
    department: "Engineering",
    location: "Istanbul, Turkey",
    type: "Full-time",
    description: "Build beautiful, responsive interfaces using React, Next.js, and TypeScript. You'll work closely with designers and backend engineers to create seamless user experiences."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive user interfaces and experiences for web and mobile applications. You'll conduct user research, create wireframes, design UI components, and collaborate with developers."
  },
  {
    title: "AI Research Scientist",
    department: "AI Research",
    location: "London, UK",
    type: "Full-time",
    description: "Develop cutting-edge AI models and algorithms to solve complex business problems. You'll research, implement, and evaluate new approaches to machine learning and natural language processing."
  }
]; 