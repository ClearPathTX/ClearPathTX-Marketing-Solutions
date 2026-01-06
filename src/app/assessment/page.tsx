"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar, Footer } from "@/components/sections";
import Link from "next/link";
import {
  Phone,
  TrendingUp,
  Globe,
  Search,
  Server,
  Brain,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const assessments = [
  {
    id: "call-center",
    icon: Phone,
    title: "Call Center Solutions",
    description: "Evaluate your call handling needs and discover how we can improve lead qualification and customer support.",
    duration: "5 min",
    color: "cyan",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Assess your current advertising strategy and uncover opportunities for better ROI across all platforms.",
    duration: "7 min",
    color: "blue",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & Development",
    description: "Analyze your website needs and get recommendations for a high-converting, modern design.",
    duration: "6 min",
    color: "green",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    description: "Evaluate your search visibility and identify opportunities to rank higher and drive organic traffic.",
    duration: "5 min",
    color: "cyan",
  },
  {
    id: "hosting",
    icon: Server,
    title: "Web Hosting & Maintenance",
    description: "Assess your hosting requirements and ensure your site stays fast, secure, and always online.",
    duration: "4 min",
    color: "blue",
  },
  {
    id: "ai-marketing",
    icon: Brain,
    title: "AI Marketing Solutions",
    description: "Discover how AI can supercharge your marketing with automation, content generation, and analytics.",
    duration: "6 min",
    color: "green",
  },
];

const colorClasses = {
  cyan: {
    icon: "text-cyan",
    border: "border-cyan/20 hover:border-cyan/50",
    bg: "bg-cyan/10",
    shadow: "hover:shadow-glow",
  },
  blue: {
    icon: "text-primary-blue",
    border: "border-primary-blue/20 hover:border-primary-blue/50",
    bg: "bg-primary-blue/10",
    shadow: "hover:shadow-glow-blue",
  },
  green: {
    icon: "text-clearpath-green",
    border: "border-clearpath-green/20 hover:border-clearpath-green/50",
    bg: "bg-clearpath-green/10",
    shadow: "hover:shadow-[0_0_30px_rgba(107,157,62,0.3)]",
  },
};

export default function AssessmentPage() {
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan/20 to-primary-blue/20 flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-10 h-10 text-cyan" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Free </span>
              <span className="gradient-text">Assessments</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Take a quick assessment to help us understand your needs.
              Get personalized recommendations and a custom quote tailored to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assessment Cards */}
      <section className="pb-20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment, index) => {
              const colors = colorClasses[assessment.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={assessment.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/assessment/${assessment.id}`}>
                    <Card
                      className={`group h-full bg-surface border-white/5 ${colors.border} ${colors.shadow} transition-all duration-300 cursor-pointer`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}
                          >
                            <assessment.icon className={`w-7 h-7 ${colors.icon}`} />
                          </div>
                          <span className="text-xs text-gray-500 bg-surface-light px-3 py-1 rounded-full">
                            {assessment.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                          {assessment.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {assessment.description}
                        </p>
                        <div className="flex items-center text-cyan font-medium group-hover:translate-x-2 transition-transform">
                          Start Assessment
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">How It </span>
              <span className="gradient-text">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take Assessment",
                description: "Answer a few quick questions about your business and goals.",
              },
              {
                step: "02",
                title: "Get Recommendations",
                description: "Receive personalized insights and service recommendations.",
              },
              {
                step: "03",
                title: "Custom Quote",
                description: "We'll prepare a tailored proposal based on your needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
