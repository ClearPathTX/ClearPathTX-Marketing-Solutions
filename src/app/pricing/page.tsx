"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/sections";
import {
  Check,
  ArrowRight,
  Phone,
  TrendingUp,
  Globe,
  Search,
  Server,
  Brain,
  Zap,
  Star,
} from "lucide-react";

const services = [
  {
    id: "call-center",
    icon: Phone,
    title: "Call Center Solutions",
    description: "Professional lead qualification and customer support",
    price: 1500,
    priceNote: "Starting at",
    period: "month",
    color: "cyan",
    features: [
      "Real-Time Insurance Verification",
      "Professional Lead Pre-Screening",
      "Advanced Call Tracking & Attribution",
      "Full-Cycle Call Funnel Management",
      "Bilingual Support Available",
      "CRM Integration",
      "Custom Scripts & Training",
      "Detailed Call Reports",
    ],
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven ad campaigns that convert",
    price: 1000,
    priceNote: "Starting at",
    period: "month",
    color: "blue",
    popular: true,
    features: [
      "Google Ads Management",
      "Bing Ads Campaigns",
      "Facebook & Instagram Ads",
      "LinkedIn B2B Marketing",
      "Retargeting & Remarketing",
      "A/B Testing & Optimization",
      "Conversion Tracking Setup",
      "Monthly Performance Reports",
    ],
    note: "+ Ad spend (managed separately)",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & Development",
    description: "Stunning websites that drive results",
    price: 2500,
    priceNote: "Starting at",
    period: "one-time",
    color: "green",
    features: [
      "Custom Responsive Design",
      "Mobile-First Development",
      "Up to 10 Pages",
      "Contact Forms & Lead Capture",
      "SEO-Friendly Architecture",
      "Fast Loading Speed",
      "Content Management System",
      "30 Days of Revisions",
    ],
    note: "Additional pages: $200/page",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    description: "Dominate search rankings organically",
    price: 800,
    priceNote: "Starting at",
    period: "month",
    color: "cyan",
    features: [
      "Comprehensive SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Technical SEO Fixes",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "Content Recommendations",
      "Monthly Ranking Reports",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Web Hosting & Maintenance",
    description: "Reliable hosting you can count on",
    price: 99,
    priceNote: "",
    period: "month",
    color: "blue",
    features: [
      "99.9% Uptime Guarantee",
      "SSL Security Certificate",
      "Daily Automated Backups",
      "Malware Scanning & Protection",
      "Performance Optimization",
      "24/7 Server Monitoring",
      "Regular Software Updates",
      "Priority Technical Support",
    ],
  },
  {
    id: "ai-marketing",
    icon: Brain,
    title: "AI Marketing Solutions",
    description: "Supercharge your marketing with AI",
    price: 500,
    priceNote: "Starting at",
    period: "month",
    color: "green",
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
  },
];

const colorClasses = {
  cyan: {
    icon: "text-cyan",
    border: "border-cyan/20 hover:border-cyan/50",
    bg: "bg-cyan/10",
    button: "bg-cyan hover:bg-cyan/90",
    shadow: "hover:shadow-glow",
    gradient: "from-cyan/10 to-transparent",
  },
  blue: {
    icon: "text-primary-blue",
    border: "border-primary-blue/20 hover:border-primary-blue/50",
    bg: "bg-primary-blue/10",
    button: "bg-primary-blue hover:bg-primary-blue/90",
    shadow: "hover:shadow-glow-blue",
    gradient: "from-primary-blue/10 to-transparent",
  },
  green: {
    icon: "text-clearpath-green",
    border: "border-clearpath-green/20 hover:border-clearpath-green/50",
    bg: "bg-clearpath-green/10",
    button: "bg-clearpath-green hover:bg-clearpath-green/90",
    shadow: "hover:shadow-[0_0_30px_rgba(107,157,62,0.3)]",
    gradient: "from-clearpath-green/10 to-transparent",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
              <span className="text-white">Service </span>
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Transparent pricing for each service. Pick what you need,
              scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pricing Cards */}
      <section className="pb-20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1.5 bg-primary-blue text-white text-sm font-semibold rounded-full flex items-center gap-1.5 shadow-glow-blue">
                        <Star className="w-4 h-4 fill-current" />
                        Popular
                      </span>
                    </div>
                  )}
                  <Card
                    className={`h-full bg-surface border-white/5 ${colors.border} ${colors.shadow} transition-all duration-300 ${
                      service.popular ? "ring-2 ring-primary-blue/50" : ""
                    }`}
                  >
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon className={`w-7 h-7 ${colors.icon}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        {service.priceNote && (
                          <p className="text-gray-500 text-sm mb-1">
                            {service.priceNote}
                          </p>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white">
                            ${service.price.toLocaleString()}
                          </span>
                          <span className="text-gray-400">
                            /{service.period === "one-time" ? "one-time" : "mo"}
                          </span>
                        </div>
                        {service.note && (
                          <p className="text-gray-500 text-xs mt-2">
                            {service.note}
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        size="lg"
                        className={`w-full ${colors.button} text-white py-6 font-semibold rounded-xl`}
                        asChild
                      >
                        <a href="/#contact">
                          Get Started
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-surface border-white/5 p-8 md:p-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-primary-blue/20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Combine multiple services or need something tailored to your specific needs?
                We&apos;ll create a custom package with special pricing just for you.
              </p>
              <Button
                size="lg"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-glow-blue"
                asChild
              >
                <a href="/#contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />

        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Why Choose </span>
              <span className="gradient-text">ClearPath</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "No Contracts",
                description: "Month-to-month. Cancel anytime.",
              },
              {
                icon: Check,
                title: "30-Day Guarantee",
                description: "Full refund if not satisfied.",
              },
              {
                icon: Star,
                title: "Dedicated Support",
                description: "Real humans, real help.",
              },
              {
                icon: TrendingUp,
                title: "Results Focused",
                description: "We track and optimize for ROI.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
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
              Have questions about pricing? Let&apos;s talk. We&apos;ll help you find
              the right services for your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-glow-blue btn-glow"
                asChild
              >
                <a href="/#contact">
                  Schedule Free Consultation
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
