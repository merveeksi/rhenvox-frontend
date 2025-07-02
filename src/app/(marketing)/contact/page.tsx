"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, MessageCircle, Zap, Globe, Building, CheckCircle, Sparkles, Star, Heart, MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { OrbStars } from "@/components/magicui/orbiting-stars";
import { OrbitingStars } from "@/components/magicui/orbiting-stars";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <OrbStars />
        </div>
        
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-rhenvox-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 mr-2 text-rhenvox-turquoise" />
            <span className="text-sm">Let's build something amazing together 🚀</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rhenvox-turquoise via-rhenvox-purple to-rhenvox-indigo bg-clip-text text-transparent">
            Get in Touch
          </h1>
          
          <p className="text-rhenvox-muted text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            ✨ Ready to transform your ideas into reality? Whether you have a groundbreaking project, 
            a technical challenge, or just want to say hello - we're here to listen and create magic together!
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-sm text-rhenvox-muted mb-8">
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1 text-rhenvox-turquoise" />
              <span>24h Response</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1 text-rhenvox-purple" />
              <span>UK & Turkey</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-rhenvox-indigo" />
              <span>100% Dedicated</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Information Cards */}
      <section className="mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">🌍 Find Us Here</h2>
          <p className="text-rhenvox-muted">We operate from two continents to serve you better</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* UK Office */}
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-rhenvox-indigo/5 via-rhenvox-purple/5 to-rhenvox-turquoise/5 rounded-2xl p-8 border border-rhenvox-purple/20 group hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <OrbitingStars />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-rhenvox-indigo to-rhenvox-purple rounded-full mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">🇬🇧 London Office</h3>
                  <Badge variant="outline" className="mt-1">Main Headquarters</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-rhenvox-indigo mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">71-75 Shelton Street</p>
                    <p className="text-rhenvox-muted">Covent Garden, London</p>
                    <p className="text-rhenvox-muted">United Kingdom, WC2H 9JQ</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-rhenvox-turquoise mr-3" />
                  <a href="tel:+447845722801" className="hover:text-rhenvox-turquoise transition-colors">
                    +44 7845 722801
                  </a>
                </div>
                
                <div className="bg-rhenvox-surface/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-rhenvox-muted">
                    <span className="font-medium">Company Number:</span> 16423845
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Turkey Office */}
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-rhenvox-turquoise/5 via-rhenvox-sky/5 to-rhenvox-indigo/5 rounded-2xl p-8 border border-rhenvox-turquoise/20 group hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <OrbitingStars />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-sky rounded-full mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">🇹🇷 Istanbul Office</h3>
                  <Badge variant="outline" className="mt-1">Development Hub</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-rhenvox-turquoise mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">İstanbul</p>
                    <p className="text-rhenvox-muted">Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-rhenvox-purple mr-3" />
                  <a href="mailto:merve.eksi@rhenvox.com" className="hover:text-rhenvox-purple transition-colors">
                    merve.eksi@rhenvox.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-green-600 mr-3" />
                  <a href="https://wa.me/447845722801" className="hover:text-green-600 transition-colors">
                    WhatsApp: +44 7845 722801
                  </a>
                </div>
                
                <div className="bg-rhenvox-surface/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-rhenvox-muted">
                    <span className="font-medium">Time Zone:</span> GMT+3 (Turkey Time)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amazing Contact Form */}
      <section className="mb-20">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-rhenvox-purple/5 via-rhenvox-indigo/5 to-rhenvox-turquoise/5 rounded-xl p-8 md:p-10 border border-rhenvox-purple/20 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rhenvox-purple/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rhenvox-turquoise/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-rhenvox-purple/30 rounded-md px-4 py-2 mb-6">
                <MessageCircle className="h-4 w-4 mr-2 text-white" />
                <span className="text-sm font-semibold text-white">Contact Form</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4 text-white">
                Let's Discuss Your Project
              </h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                Share your project details with us. We'll review your requirements and get back to you with a tailored solution within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium text-white">Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="bg-white/80 backdrop-blur-sm border-gray-300 focus:border-rhenvox-purple focus:ring-rhenvox-purple/20 py-3 rounded-md text-gray-800"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium text-white">Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@company.com"
                                  className="bg-white/80 backdrop-blur-sm border-gray-300 focus:border-rhenvox-purple focus:ring-rhenvox-purple/20 py-3 rounded-md text-gray-800"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium text-white">Project Type</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Web Development / Mobile App / AI Integration / Other"
                                className="bg-white/80 backdrop-blur-sm border-gray-300 focus:border-rhenvox-purple focus:ring-rhenvox-purple/20 py-3 rounded-md text-gray-800"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium text-white">Project Details</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project requirements, timeline, budget range, and any specific technical needs. The more information you provide, the better we can assist you."
                                className="bg-white/80 backdrop-blur-sm border-gray-300 focus:border-rhenvox-purple focus:ring-rhenvox-purple/20 resize-none min-h-[150px] rounded-md text-gray-800"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="text-center">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="bg-rhenvox-purple hover:bg-rhenvox-purple/90 text-white px-8 py-3 text-base font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Submit Inquiry
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                                     <div className="bg-rhenvox-purple/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-rhenvox-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-rhenvox-purple">
                    Thank You for Your Inquiry
                  </h3>
                  <p className="text-rhenvox-muted">
                    We have received your project details and will review them carefully.
                    <br />
                    Our team will contact you within 24 hours with a tailored proposal.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-rhenvox-surface/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">⚡ Need Immediate Assistance?</h3>
          <p className="text-rhenvox-muted mb-6">
            For urgent matters or if you prefer a quick chat, don't hesitate to call us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              onClick={() => window.open('tel:+447845722801')}
            >
              <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              Call UK Office
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group"
              onClick={() => window.open('mailto:merve.eksi@rhenvox.com')}
            >
              <Mail className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Email Direct
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}