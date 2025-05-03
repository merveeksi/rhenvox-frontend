"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Calendar, User, Tag } from "lucide-react";

// Define image URLs as constants to ensure consistency
const FEATURED_IMAGE_URL = "/blog/featured-ai.jpg"; // Local image path for better reliability
const UNSPLASH_FEATURED_FALLBACK = "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=1200&q=80";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [imageError, setImageError] = useState(false);

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
          Rhenvox Blog
        </h1>
        <p className="text-rhenvox-muted text-lg max-w-3xl mx-auto mb-8">
          Insights, news, and perspectives from our team of experts on software engineering, 
          AI research, and technology trends.
        </p>
        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mr-2"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="relative overflow-hidden rounded-xl group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[400px] w-full">
              {/* Use a local placeholder image with dynamic import or remote URL with safety fallbacks */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-rhenvox-purple/30 to-rhenvox-turquoise/30"
                style={{ zIndex: 1 }}
              />
              <img
                src={UNSPLASH_FEATURED_FALLBACK}
                alt="AI and Machine Learning"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" style={{ zIndex: 2 }} />
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full" style={{ zIndex: 3 }}>
              <div className="flex items-center text-xs text-white/80 mb-2">
                <Calendar className="h-3 w-3 mr-1" />
                <span>June 15, 2024</span>
                <span className="mx-2">•</span>
                <User className="h-3 w-3 mr-1" />
                <span>Sarah Johnson</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                The Future of AI in Software Development
              </h3>
              <p className="text-white/80 mb-4 line-clamp-2">
                Exploring how AI is transforming the software development lifecycle and what developers need to know.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Read Article
              </Button>
            </div>
          </motion.div>

          <div className="space-y-6">
            {featuredPosts.map((post, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-52 md:h-32 md:w-52 flex-shrink-0 rounded-lg overflow-hidden">
                  {/* Replace Image with img tag for better compatibility */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center text-xs text-rhenvox-muted mb-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-3 w-3 mr-1" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-rhenvox-turquoise transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-rhenvox-muted text-sm mb-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href="#" className="text-rhenvox-purple text-sm font-medium inline-flex items-center hover:text-rhenvox-turquoise transition-colors">
                    Read more <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-rhenvox-surface rounded-lg p-6 hover:bg-rhenvox-surface/70 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-rhenvox-purple/20 to-rhenvox-turquoise/20 w-fit mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-rhenvox-muted text-sm mb-3">{category.description}</p>
              <Link href="#" className="text-rhenvox-purple text-sm font-medium inline-flex items-center hover:text-rhenvox-turquoise transition-colors">
                View articles <ChevronRight className="h-3 w-3 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-rhenvox-surface rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                {/* Replace Image with img tag for better compatibility */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-rhenvox-muted mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-3 w-3 mr-1" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-rhenvox-turquoise transition-colors">
                  {post.title}
                </h3>
                <p className="text-rhenvox-muted text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link href="#" className="text-rhenvox-purple text-sm font-medium inline-flex items-center hover:text-rhenvox-turquoise transition-colors">
                  Read more <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="bg-gradient-to-r from-rhenvox-indigo/10 via-rhenvox-sky/10 to-rhenvox-turquoise/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-rhenvox-muted mb-6">
              Subscribe to our newsletter to receive the latest articles, insights, and updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button size="default">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: "AI & Machine Learning",
    description: "Insights on artificial intelligence and machine learning technologies.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-rhenvox-purple"><path d="M12 2a8 8 0 0 0-8 8 4.5 4.5 0 0 0 1.17 3L12 21l6.83-8a4.5 4.5 0 0 0 1.17-3 8 8 0 0 0-8-8Z"></path></svg>
  },
  {
    name: "Software Engineering",
    description: "Best practices, patterns, and tools for modern software development.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-rhenvox-turquoise"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
  },
  {
    name: "Tech Trends",
    description: "The latest developments and future directions in technology.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-rhenvox-sky"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m17 16 2 5H5l2-5"></path></svg>
  },
  {
    name: "Security",
    description: "Cybersecurity insights, threats, and protection strategies.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-rhenvox-indigo"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
  },
];

const featuredPosts = [
  {
    title: "Building Scalable Microservices with Kubernetes",
    excerpt: "A comprehensive guide to designing and deploying microservices using Kubernetes for optimal scalability and resilience.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    date: "May 28, 2024",
    category: "Software Engineering"
  },
  {
    title: "Zero-Trust Security: Implementation Guide",
    excerpt: "Learn how to implement a Zero-Trust security model in your organization to enhance your security posture.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    date: "May 22, 2024",
    category: "Security"
  },
  {
    title: "The Rise of Low-Code Development Platforms",
    excerpt: "Exploring how low-code platforms are transforming software development and democratizing tech innovation.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
    date: "May 15, 2024",
    category: "Tech Trends"
  }
];

const recentPosts = [
  {
    title: "Generative AI in 2024: What's New and What's Next",
    excerpt: "Exploring the latest advances in generative AI models and their practical applications in business.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    date: "June 10, 2024",
    category: "AI & Machine Learning"
  },
  {
    title: "Automating DevOps: From CI/CD to GitOps",
    excerpt: "How modern DevOps practices are evolving with automation and GitOps methodologies.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    date: "June 8, 2024",
    category: "Software Engineering"
  },
  {
    title: "Edge Computing: Bringing Computation to the Data Source",
    excerpt: "Why edge computing is becoming essential for IoT, real-time applications, and reducing latency.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    date: "June 5, 2024",
    category: "Tech Trends"
  },
  {
    title: "Understanding Large Language Models: A Technical Deep Dive",
    excerpt: "The architecture, training process, and capabilities of modern large language models explained.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "June 3, 2024",
    category: "AI & Machine Learning"
  },
  {
    title: "API Security Best Practices for 2024",
    excerpt: "Essential security measures to protect your APIs from common threats and vulnerabilities.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de",
    date: "May 30, 2024",
    category: "Security"
  },
  {
    title: "The Impact of Web Assembly on Modern Web Development",
    excerpt: "How WASM is changing performance expectations and capabilities for web applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "May 25, 2024",
    category: "Software Engineering"
  }
]; 