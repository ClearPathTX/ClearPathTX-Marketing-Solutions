"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy Call",
    description: "We learn about your business, goals, and challenges. Together, we craft a tailored strategy.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Campaign Setup",
    description: "Our team builds your campaigns, landing pages, and tracking systems from the ground up.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Optimization",
    description: "We go live and continuously optimize based on real-time data and performance metrics.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Reporting & Growth",
    description: "Transparent reporting and ongoing refinements to scale your success month over month.",
  },
];

export function Process() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-surface/30 to-[#0a0e14]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />

      <div className="relative container-padding max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It </span>
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple, proven process to take your marketing from zero to hero
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan/50 via-primary-blue/50 to-clearpath-green/50 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-white/5 hover:border-cyan/20 transition-all duration-300 group h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 bg-surface px-3 py-1 rounded-full border border-cyan/30">
                    <span className="text-cyan font-mono text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 mt-4 group-hover:bg-cyan/20 transition-colors">
                    <step.icon className="w-7 h-7 text-cyan" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-8 h-8 rounded-full border border-cyan/30 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
