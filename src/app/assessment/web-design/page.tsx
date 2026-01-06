"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Globe } from "lucide-react";

const questions: Question[] = [
  {
    id: "current-website",
    question: "Do you currently have a website?",
    type: "single",
    required: true,
    options: [
      "Yes, but it needs a complete redesign",
      "Yes, but it needs updates/improvements",
      "Yes, and I'm happy with it (need a new one for different purpose)",
      "No, this will be my first website",
    ],
  },
  {
    id: "website-purpose",
    question: "What is the primary purpose of your website?",
    type: "single",
    required: true,
    options: [
      "Generate leads / inquiries",
      "Sell products online (e-commerce)",
      "Showcase services / portfolio",
      "Provide information / resources",
      "Book appointments / reservations",
      "Build brand credibility",
    ],
  },
  {
    id: "pages-needed",
    question: "How many pages do you estimate you'll need?",
    type: "single",
    required: true,
    options: [
      "1-5 pages (simple site)",
      "6-10 pages (standard business site)",
      "11-20 pages (comprehensive site)",
      "20+ pages (large site)",
      "Not sure yet",
    ],
  },
  {
    id: "features-needed",
    question: "What features do you need on your website?",
    type: "multiple",
    required: true,
    options: [
      "Contact forms",
      "Blog / News section",
      "Online booking / scheduling",
      "E-commerce / Shopping cart",
      "Customer portal / Login area",
      "Live chat",
      "Video integration",
      "Social media integration",
      "Multi-language support",
      "Custom calculators / tools",
    ],
  },
  {
    id: "design-preference",
    question: "What style of design do you prefer?",
    type: "single",
    required: true,
    options: [
      "Modern and minimalist",
      "Bold and colorful",
      "Professional and corporate",
      "Creative and unique",
      "Clean and simple",
      "Not sure - need guidance",
    ],
  },
  {
    id: "have-content",
    question: "Do you have content ready for your website?",
    type: "single",
    required: true,
    options: [
      "Yes, all content is ready",
      "Some content is ready",
      "No, I need help with content",
      "I'll provide content during the project",
    ],
  },
  {
    id: "have-branding",
    question: "Do you have existing branding (logo, colors, fonts)?",
    type: "single",
    required: true,
    options: [
      "Yes, complete brand guidelines",
      "Yes, just a logo",
      "No, need branding help",
      "Starting from scratch",
    ],
  },
  {
    id: "competitor-sites",
    question: "Are there any websites you admire or want to emulate?",
    type: "textarea",
    required: false,
    placeholder: "Share URLs of websites you like and what you like about them...",
  },
  {
    id: "budget",
    question: "What is your estimated budget for this project?",
    type: "single",
    required: true,
    options: [
      "Under $2,500",
      "$2,500 - $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "Over $25,000",
      "Not sure yet",
    ],
  },
  {
    id: "timeline",
    question: "When do you need the website completed?",
    type: "single",
    required: true,
    options: [
      "ASAP (within 2 weeks)",
      "Within 1 month",
      "Within 2-3 months",
      "Within 6 months",
      "No rush - flexible timeline",
    ],
  },
];

export default function WebDesignAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-clearpath-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clearpath-green/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="Web Design Assessment"
            description="Tell us about your dream website"
            questions={questions}
            icon={<Globe className="w-8 h-8 text-clearpath-green" />}
            color="green"
            serviceType="web-design"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
