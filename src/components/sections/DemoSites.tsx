"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const demoSites = [
  {
    title: "Plumber Pro Services",
    description: "Professional plumbing services website with service listings, pricing pages, and easy appointment booking.",
    image: "/demos/plumber-demo.jpg",
    url: "https://plumber-demo-site-delta.vercel.app/pricing",
    category: "Home Services",
  },
  {
    title: "Electric Experts",
    description: "Modern electrical contractor site showcasing services, certifications, and emergency contact options.",
    image: "/demos/electrical-demo.jpg",
    url: "https://electric-experts.vercel.app/",
    category: "Home Services",
  },
  {
    title: "Landscaper Pro",
    description: "Beautiful landscaping company website featuring portfolio galleries, service packages, and quote requests.",
    image: "/demos/landscaper-demo.jpg",
    url: "https://landscaper-demo-new.vercel.app/",
    category: "Home Services",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function DemoSites() {
  return (
    <section id="demos" className="section-padding bg-surface relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />

      <div className="relative container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-text">Demo Sites</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of demo websites. Each showcases our expertise in creating
            stunning, conversion-focused designs for various industries.
          </p>
        </motion.div>

        {/* Demo Sites Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {demoSites.map((site) => (
            <motion.div key={site.title} variants={itemVariants}>
              <Card className="group bg-surface-light border-white/5 hover:border-cyan/30 transition-all duration-300 h-full overflow-hidden">
                {/* Live Site Preview */}
                <div className="relative h-56 bg-surface overflow-hidden">
                  <iframe
                    src={site.url}
                    title={site.title}
                    className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium bg-cyan/90 text-white rounded-full border border-cyan/30 shadow-lg">
                      {site.category}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan transition-colors duration-300">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {site.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/10 hover:border-cyan/50 hover:bg-cyan/10 text-white group/btn"
                    asChild
                  >
                    <a href={site.url} target="_blank" rel="noopener noreferrer">
                      View Demo
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Want a custom website tailored to your business?
          </p>
          <Button
            size="lg"
            className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-glow-blue btn-glow"
            asChild
          >
            <a href="#contact">
              Get Your Custom Quote
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
