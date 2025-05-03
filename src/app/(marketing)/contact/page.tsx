"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is where you would typically send the form data to your backend
    console.log(values);
    alert("Form submitted! Check console for form data.");
  }

  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">Get in Touch</h1>
      <p className="text-rhenvox-muted text-center max-w-2xl mx-auto mb-16">
        Have a question, project idea, or want to work with us? Reach out and our team will get back to you shortly.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col items-center text-center p-8 bg-rhenvox-surface rounded-lg">
          <div className="p-3 bg-rhenvox-indigo/10 rounded-full mb-5">
            <MapPin className="w-6 h-6 text-rhenvox-indigo" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Our Location</h3>
          <p className="text-rhenvox-muted">
            123 Tech Hub Street<br />
            London, UK EC1A 1AA
          </p>
          <p className="text-rhenvox-muted mt-2">
            <span className="block font-medium text-rhenvox-text">Turkey Office:</span>
            456 Innovation Avenue<br />
            Istanbul, Turkey 34000
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-8 bg-rhenvox-surface rounded-lg">
          <div className="p-3 bg-rhenvox-turquoise/10 rounded-full mb-5">
            <Phone className="w-6 h-6 text-rhenvox-turquoise" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Phone</h3>
          <p className="text-rhenvox-muted">
            <span className="block font-medium text-rhenvox-text">UK:</span>
            +44 20 1234 5678
          </p>
          <p className="text-rhenvox-muted mt-2">
            <span className="block font-medium text-rhenvox-text">Turkey:</span>
            +90 212 345 6789
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-8 bg-rhenvox-surface rounded-lg">
          <div className="p-3 bg-rhenvox-purple/10 rounded-full mb-5">
            <Mail className="w-6 h-6 text-rhenvox-purple" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Email</h3>
          <a 
            href="mailto:hello@rhenvox.com" 
            className="text-rhenvox-muted hover:text-rhenvox-sky transition-colors"
          >
            hello@rhenvox.com
          </a>
          <a 
            href="mailto:support@rhenvox.com" 
            className="text-rhenvox-muted hover:text-rhenvox-sky transition-colors mt-2"
          >
            support@rhenvox.com
          </a>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-rhenvox-surface p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-rhenvox-bg border-rhenvox-bg focus:border-rhenvox-sky"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-rhenvox-bg border-rhenvox-bg focus:border-rhenvox-sky"
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
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Inquiry"
                      className="bg-rhenvox-bg border-rhenvox-bg focus:border-rhenvox-sky"
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or query..."
                      className="bg-rhenvox-bg border-rhenvox-bg focus:border-rhenvox-sky resize-none min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div>
              <Button 
                type="submit" 
                className="ml-auto w-full md:w-auto flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
} 