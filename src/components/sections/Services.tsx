"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  TrendingUp,
  Globe,
  Search,
  Server,
  Brain,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Call Center Solutions",
    description: "Real-Time Insurance Verification, Professional Lead Pre-Screening, Advanced Call Tracking & Attribution, Full-Cycle Call Funnel Management",
    color: "cyan",
    href: "/assessment/call-center",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Google Ads, Bing Ads, Social Media Marketing, Native Advertising — we turn clicks into customers with high-performing ad campaigns.",
    color: "blue",
    href: "/assessment/digital-marketing",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Responsive, conversion-optimized websites that look stunning and drive results. Built for speed and user experience.",
    color: "green",
    href: "/assessment/web-design",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Organic growth through comprehensive on-page & off-page SEO strategies. Dominate search rankings and drive qualified traffic.",
    color: "cyan",
    href: "/assessment/seo",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description: "Reliable, secure hosting with full maintenance and 99.9% uptime guarantee. Your site stays fast and protected 24/7.",
    color: "blue",
    href: "/assessment/hosting",
  },
  {
    icon: Brain,
    title: "AI Marketing Solutions",
    description: "Content Generation, Customized LLM Integration, Predictive Analytics — harness the power of AI to supercharge your marketing.",
    color: "green",
    href: "/assessment/ai-marketing",
  },
];

const colorClasses = {
  cyan: {
    icon: "text-cyan",
    border: "group-hover:border-cyan/50",
    shadow: "group-hover:shadow-glow",
    bg: "bg-cyan/10",
  },
  blue: {
    icon: "text-primary-blue",
    border: "group-hover:border-primary-blue/50",
    shadow: "group-hover:shadow-glow-blue",
    bg: "bg-primary-blue/10",
  },
  green: {
    icon: "text-clearpath-green",
    border: "group-hover:border-clearpath-green/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(107,157,62,0.4)]",
    bg: "bg-clearpath-green/10",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#0a0e14] relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What We </span>
            <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our expert team delivers full-service marketing solutions designed to grow your business and maximize ROI
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Link href={service.href}>
                  <Card
                    className={`group bg-surface border-white/5 hover:bg-surface-light transition-all duration-300 h-full cursor-pointer ${colors.border} ${colors.shadow}`}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}
                      >
                        <service.icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      <p className={`mt-4 text-sm font-medium ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Take Free Assessment →
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
