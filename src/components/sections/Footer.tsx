"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/50" />

      <div className="relative container-padding max-w-6xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="ClearPath Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white font-semibold text-xl">
              ClearPath
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 text-sm"
          >
            <a
              href="#services"
              className="text-gray-400 hover:text-cyan transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan transition-colors"
            >
              Terms
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} ClearPath Marketing Solutions. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
