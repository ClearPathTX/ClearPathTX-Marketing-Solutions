"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e14]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />

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
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Grow?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss how ClearPath can help you achieve your business goals.
            Get a free consultation today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="bg-surface border-white/5">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 focus:ring-cyan/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 focus:ring-cyan/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 focus:ring-cyan/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      How can we help?
                    </label>
                    <Textarea
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      rows={5}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 focus:ring-cyan/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-6 text-lg font-semibold rounded-xl shadow-glow-blue btn-glow group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <Card className="bg-surface border-white/5 hover:border-cyan/20 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@clearpathmarketing.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/5 hover:border-cyan/20 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-surface border-white/5 hover:border-cyan/20 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-clearpath-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-clearpath-green" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Remote-first, serving clients nationwide</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick response note */}
            <div className="glass rounded-xl p-6 border border-cyan/10">
              <p className="text-gray-300 text-sm">
                <span className="text-cyan font-semibold">Quick Response:</span>{" "}
                We typically respond within 24 hours. For urgent inquiries, give us a call.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
