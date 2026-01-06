"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/sections";
import {
  Phone,
  TrendingUp,
  Globe,
  Search,
  Server,
  Brain,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "call-center",
    icon: Phone,
    title: "Call Center Solutions",
    tagline: "Turn Every Call Into a Qualified Lead",
    description:
      "Our professional call center team handles your inbound and outbound calls with precision, ensuring every lead is properly qualified and every customer interaction builds trust.",
    features: [
      "Real-Time Insurance Verification",
      "Professional Lead Pre-Screening",
      "Advanced Call Tracking & Attribution",
      "Full-Cycle Call Funnel Management",
      "24/7 Availability Options",
      "Bilingual Support (English/Spanish)",
      "Custom Scripts & Training",
      "CRM Integration",
    ],
    color: "cyan",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Data-Driven Campaigns That Convert",
    description:
      "We create and manage high-performing advertising campaigns across all major platforms. Our data-driven approach ensures maximum ROI and continuous optimization.",
    features: [
      "Google Ads Management",
      "Bing Ads Campaigns",
      "Facebook & Instagram Advertising",
      "LinkedIn B2B Marketing",
      "Native Advertising",
      "Retargeting & Remarketing",
      "A/B Testing & Optimization",
      "Detailed Analytics & Reporting",
    ],
    color: "blue",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Stunning Websites That Drive Results",
    description:
      "We build responsive, conversion-optimized websites that not only look stunning but are engineered to turn visitors into customers. Every site is built for speed and user experience.",
    features: [
      "Custom Responsive Design",
      "Conversion-Optimized Landing Pages",
      "Mobile-First Development",
      "Fast Loading Speeds",
      "SEO-Friendly Architecture",
      "Contact Forms & Lead Capture",
      "Content Management System",
      "Ongoing Maintenance & Updates",
    ],
    color: "green",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    tagline: "Dominate Search Rankings Organically",
    description:
      "Our comprehensive SEO strategies help you rank higher in search results and drive qualified organic traffic. We focus on sustainable, white-hat techniques that deliver long-term results.",
    features: [
      "Comprehensive SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO Fixes",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "Content Strategy & Creation",
      "Monthly Ranking Reports",
    ],
    color: "cyan",
  },
  {
    id: "hosting",
    icon: Server,
    title: "Web Hosting & Maintenance",
    tagline: "Reliable Hosting You Can Count On",
    description:
      "Keep your website fast, secure, and always online with our managed hosting solutions. We handle all the technical details so you can focus on running your business.",
    features: [
      "99.9% Uptime Guarantee",
      "SSL Security Certificates",
      "Daily Automated Backups",
      "Malware Scanning & Protection",
      "Performance Optimization",
      "24/7 Server Monitoring",
      "Regular Software Updates",
      "Priority Technical Support",
    ],
    color: "blue",
  },
  {
    id: "ai-marketing",
    icon: Brain,
    title: "AI Marketing Solutions",
    tagline: "Supercharge Your Marketing with AI",
    description:
      "Harness the power of artificial intelligence to automate content creation, predict customer behavior, and optimize campaigns in real-time. Stay ahead of the competition with cutting-edge AI tools.",
    features: [
      "AI Content Generation",
      "Customized LLM Integration",
      "Predictive Analytics",
      "Automated Email Sequences",
      "Chatbot Development",
      "Customer Segmentation",
      "Personalization at Scale",
      "AI-Powered Ad Optimization",
    ],
    color: "green",
  },
];

const colorClasses = {
  cyan: {
    icon: "text-cyan",
    border: "border-cyan/30",
    shadow: "shadow-glow",
    bg: "bg-cyan/10",
    gradient: "from-cyan/20 to-transparent",
    button: "bg-cyan hover:bg-cyan/90",
  },
  blue: {
    icon: "text-primary-blue",
    border: "border-primary-blue/30",
    shadow: "shadow-glow-blue",
    bg: "bg-primary-blue/10",
    gradient: "from-primary-blue/20 to-transparent",
    button: "bg-primary-blue hover:bg-primary-blue/90",
  },
  green: {
    icon: "text-clearpath-green",
    border: "border-clearpath-green/30",
    shadow: "shadow-[0_0_30px_rgba(107,157,62,0.3)]",
    bg: "bg-clearpath-green/10",
    gradient: "from-clearpath-green/20 to-transparent",
    button: "bg-clearpath-green hover:bg-clearpath-green/90",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to grow your business.
              From call centers to AI-powered campaigns, we deliver results that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
                    >
                      <service.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className={`text-lg font-medium ${colors.icon} mb-4`}>
                      {service.tagline}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Button
                      size="lg"
                      className={`${colors.button} text-white px-8 py-6 text-lg font-semibold rounded-xl ${colors.shadow}`}
                      asChild
                    >
                      <a href="#contact-cta">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </Button>
                  </div>

                  {/* Features Card */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <Card
                      className={`bg-surface border-white/5 ${colors.border} hover:${colors.shadow} transition-all duration-300`}
                    >
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-white mb-6">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        <div className="relative container-padding max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how ClearPath can help you achieve your business goals.
              Schedule a free consultation today and discover the right solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-glow-blue btn-glow"
                asChild
              >
                <a href="/#contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:border-cyan/50 hover:bg-cyan/10 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                asChild
              >
                <a href="tel:5551234567">Call (555) 123-4567</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
