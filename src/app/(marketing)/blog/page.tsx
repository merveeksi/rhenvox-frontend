"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight, Calendar, User, Tag, Coffee, BookOpen, TrendingUp, Zap, Heart, Share, Eye } from "lucide-react";
import { OrbStars } from "@/components/magicui/orbiting-stars";
import { OrbitingStars } from "@/components/magicui/orbiting-stars";
import Image from "next/image";

// Define image URLs as constants to ensure consistency
const UNSPLASH_FEATURED_FALLBACK = "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=1200&q=80";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [readingTime, setReadingTime] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate reading time calculation
    setReadingTime(Math.floor(Math.random() * 10) + 3);
  }, []);

  const filteredPosts = selectedCategory === "all" 
    ? recentPosts 
    : recentPosts.filter(post => post.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  if (!mounted) {
    return <div className="min-h-screen" />;
  }

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Background Animation */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <OrbStars />
        </div>
        
        <motion.div 
          className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rhenvox-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Coffee className="h-4 w-4 mr-2 text-rhenvox-turquoise" />
            <span className="text-sm">Fresh insights, hot off the press ☕</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-purple to-rhenvox-indigo bg-clip-text text-transparent">
            Rhenvox Blog
          </h1>
          <p className="text-rhenvox-muted text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            🚀 Explore the cutting-edge world of software engineering, AI breakthroughs, and tech innovations. 
            <br />Where code meets creativity and ideas come to life!
          </p>
          
          {/* Enhanced Search */}
          <div className="flex max-w-lg mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-rhenvox-muted" />
              <Input
                placeholder="What sparks your curiosity today? 🔍"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-l-full border-r-0 bg-rhenvox-surface/50 backdrop-blur-sm"
              />
            </div>
            <Button className="rounded-r-full px-6 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple hover:from-rhenvox-purple hover:to-rhenvox-turquoise">
              Discover
            </Button>
          </div>
          
          {/* Fun Stats */}
          <div className="flex justify-center space-x-8 text-sm text-rhenvox-muted">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{recentPosts.length}+ Articles</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1" />
              <span>Lightning Fast Reads</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trending Topics Banner */}
      <motion.div 
        className="bg-gradient-to-r from-rhenvox-purple/10 via-rhenvox-indigo/10 to-rhenvox-turquoise/10 rounded-2xl p-6 mb-16 border border-rhenvox-purple/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="animate-pulse bg-red-500 h-2 w-2 rounded-full mr-3"></div>
            <span className="font-semibold">🔥 Trending Now:</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {["AI in 2024", ".NET 8 Features", "React Server Components"].map((topic, index) => (
              <Badge key={index} variant="outline" className="hover:bg-rhenvox-surface cursor-pointer">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Article - Hero Style */}
      <section className="mb-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl group h-[500px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1677442135136-760302227f2e"
              alt="AI Revolution"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-rhenvox-purple/30 to-rhenvox-turquoise/30" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <OrbitingStars />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-rhenvox-turquoise/20 text-rhenvox-turquoise backdrop-blur-sm">
                ⭐ Featured Article
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                The AI Revolution: How Machine Learning is Reshaping Software Development
              </h2>
              
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                Dive deep into the transformative power of AI and discover how it's revolutionizing 
                the way we build, test, and deploy software. From automated code generation to 
                intelligent debugging, the future is here.
              </p>
              
              <div className="flex items-center text-white/80 text-sm mb-6">
                <User className="h-4 w-4 mr-2" />
                <span>Merve Ekşi</span>
                <span className="mx-3">•</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span>Dec 15, 2024</span>
                <span className="mx-3">•</span>
                <span>8 min read</span>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20">
                  <Eye className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Categories */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🎯 What Interests You?</h2>
          <p className="text-rhenvox-muted">Choose your adventure in the world of technology</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["all", "AI", "Backend", "Frontend", "Mobile", "DevOps"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple text-white shadow-lg"
                  : "bg-rhenvox-surface hover:bg-rhenvox-surface/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "🌟 All Topics" : `${getCategoryEmoji(category)} ${category}`}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-rhenvox-surface rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-rhenvox-surface hover:border-rhenvox-purple/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.emoji}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-rhenvox-turquoise transition-colors">
                {category.name}
              </h3>
              <p className="text-rhenvox-muted text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-rhenvox-muted">{category.count} articles</span>
                <ChevronRight className="h-4 w-4 text-rhenvox-purple group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            📚 Latest Articles
            {selectedCategory !== "all" && (
              <span className="text-rhenvox-turquoise ml-2">
                ({filteredPosts.length} found)
              </span>
            )}
          </h2>
          <Button variant="outline" className="group">
            View All 
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-rhenvox-surface rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-rhenvox-surface hover:border-rhenvox-purple/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/50 backdrop-blur-sm text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Heart className="h-4 w-4 text-white hover:text-red-400 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-xs text-rhenvox-muted mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                    <span className="mx-2">•</span>
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{post.views}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-rhenvox-turquoise transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-rhenvox-muted text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href="#" 
                      className="text-rhenvox-purple text-sm font-medium inline-flex items-center hover:text-rhenvox-turquoise transition-colors group/link"
                    >
                      Read more 
                      <ChevronRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-xs text-rhenvox-muted">
                        <span>👍 {post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Newsletter Section */}
      <section>
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-rhenvox-indigo/10 via-rhenvox-purple/10 to-rhenvox-turquoise/10 rounded-3xl p-8 md:p-12 border border-rhenvox-purple/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <OrbStars />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop!</h2>
            <p className="text-rhenvox-muted mb-8 text-lg">
              Join our community of tech enthusiasts and get the latest insights, tutorials, 
              and behind-the-scenes content delivered straight to your inbox. No spam, just pure value! ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input 
                placeholder="your.email@awesome.com" 
                className="flex-grow bg-white/50 backdrop-blur-sm border-white/20"
              />
              <Button className="bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple hover:from-rhenvox-purple hover:to-rhenvox-turquoise">
                Subscribe 🚀
              </Button>
            </div>
            
            <p className="text-xs text-rhenvox-muted">
              Join 1,000+ developers already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function getCategoryEmoji(category: string): string {
  const emojis: { [key: string]: string } = {
    AI: "🤖",
    Backend: "⚙️",
    Frontend: "🎨",
    Mobile: "📱",
    DevOps: "🚀"
  };
  return emojis[category] || "💻";
}

const categories = [
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge AI insights and ML breakthroughs",
    emoji: "🤖",
    count: 15
  },
  {
    name: "Backend Development",
    description: ".NET, APIs, and server-side magic",
    emoji: "⚙️",
    count: 22
  },
  {
    name: "Frontend & UI/UX",
    description: "React, Next.js, and beautiful interfaces",
    emoji: "🎨",
    count: 18
  },
  {
    name: "Mobile Development",
    description: "React Native and cross-platform apps",
    emoji: "📱",
    count: 12
  }
];

const recentPosts = [
  {
    id: 1,
    title: "🚀 Building Lightning-Fast APIs with .NET 8 Minimal APIs",
    excerpt: "Discover how to create blazing-fast, scalable APIs using the latest .NET 8 features. From performance optimizations to clean architecture patterns, this guide covers everything you need to know.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "Dec 10, 2024",
    category: "Backend Development",
    readTime: 8,
    views: "2.3k",
    likes: 142,
  },
  {
    id: 2,
    title: "🤖 AI-Powered Code Reviews: The Future is Here",
    excerpt: "How I implemented AI-driven code review systems that caught 40% more bugs than traditional methods. Real-world case study with practical implementation tips.",
    image: "https://images.unsplash.com/photo-1677442135136-760302227f2e",
    date: "Dec 8, 2024",
    category: "AI & Machine Learning",
    readTime: 12,
    views: "4.1k",
    likes: 289,
  },
  {
    id: 3,
    title: "⚡ React Server Components: Game Changer or Hype?",
    excerpt: "Deep dive into RSCs with real performance benchmarks, migration strategies, and when you should (and shouldn't) use them in your Next.js applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "Dec 5, 2024",
    category: "Frontend & UI/UX",
    readTime: 10,
    views: "3.7k",
    likes: 195,
  },
  {
    id: 4,
    title: "📱 React Native vs Flutter: 2024 Performance Battle",
    excerpt: "Comprehensive comparison with real app benchmarks, development speed analysis, and which framework wins for different project types.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    date: "Dec 3, 2024",
    category: "Mobile Development",
    readTime: 15,
    views: "5.2k",
    likes: 367,
  },
  {
    id: 5,
    title: "🎯 Microservices Architecture: Lessons from Production",
    excerpt: "Hard-learned lessons from building and scaling microservices in production. What worked, what didn't, and how to avoid common pitfalls.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    date: "Nov 28, 2024",
    category: "Backend Development",
    readTime: 18,
    views: "6.8k",
    likes: 445,
  },
  {
    id: 6,
    title: "🧠 Building Intelligent User Interfaces with GPT-4",
    excerpt: "Create adaptive UIs that learn from user behavior using GPT-4 integration. Includes code examples and implementation strategies.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    date: "Nov 25, 2024",
    category: "AI & Machine Learning",
    readTime: 14,
    views: "4.9k",
    likes: 312,
  }
]; 