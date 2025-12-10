"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Google Partner",
    logo: "/google-partner.png",
  },
  {
    name: "Meta Partner",
    logo: "/meta-partner.png",
  },
];

export function Partners() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e14]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="relative container-padding max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="text-white">Our </span>
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by industry leaders
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass rounded-xl p-6 border border-white/5 hover:border-cyan/20 transition-all duration-300 group"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={80}
                className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
