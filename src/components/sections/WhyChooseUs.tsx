"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Marketing Team",
    description: "Seasoned professionals with years of experience in digital marketing, SEO, and lead generation.",
  },
  {
    icon: Zap,
    title: "Full-Stack Solutions",
    description: "From lead generation to conversion — we handle every step of your marketing funnel.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "Every decision backed by analytics. We optimize continuously for maximum ROI.",
  },
  {
    icon: Cpu,
    title: "AI-Enhanced Campaigns",
    description: "Our team leverages cutting-edge AI tools to automate, predict, and scale your marketing.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description: "Real humans, real expertise. Your dedicated account manager is just a call away.",
  },
];

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-surface/50 to-[#0a0e14]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose </span>
              <span className="gradient-text">ClearPath?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Our experienced marketing team combines human expertise with cutting-edge AI technology to deliver results that matter. No fluff, just growth.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Stats cards */}
            <div className="relative h-[500px]">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-8 border border-cyan/20 shadow-glow"
              >
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">150%</div>
                  <p className="text-gray-400">Average Lead Growth</p>
                </div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 right-10 glass rounded-xl p-4 border border-primary-blue/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">40%</div>
                    <p className="text-xs text-gray-400">Lower CPL</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 glass rounded-xl p-4 border border-clearpath-green/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-clearpath-green/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-clearpath-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <p className="text-xs text-gray-400">Uptime</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-cyan/10 animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full border border-primary-blue/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
