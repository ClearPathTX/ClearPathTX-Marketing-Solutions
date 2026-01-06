"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { TrendingUp } from "lucide-react";

const questions: Question[] = [
  {
    id: "current-marketing",
    question: "What digital marketing are you currently doing?",
    type: "multiple",
    required: true,
    options: [
      "Google Ads (Search)",
      "Google Ads (Display)",
      "Facebook/Instagram Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Email Marketing",
      "Content Marketing",
      "None currently",
    ],
  },
  {
    id: "monthly-ad-spend",
    question: "What is your current monthly advertising budget?",
    type: "single",
    required: true,
    options: [
      "Not running ads yet",
      "Under $1,000/month",
      "$1,000 - $5,000/month",
      "$5,000 - $10,000/month",
      "$10,000 - $25,000/month",
      "Over $25,000/month",
    ],
  },
  {
    id: "primary-goal",
    question: "What is your primary marketing goal?",
    type: "single",
    required: true,
    options: [
      "Generate more leads",
      "Increase online sales",
      "Build brand awareness",
      "Drive website traffic",
      "Retarget existing customers",
      "Launch a new product/service",
    ],
  },
  {
    id: "target-audience",
    question: "Who is your target audience?",
    type: "single",
    required: true,
    options: [
      "Local customers (specific area)",
      "Regional (state/multi-state)",
      "National",
      "International",
      "B2B (businesses)",
      "Mixed B2B and B2C",
    ],
  },
  {
    id: "current-challenges",
    question: "What are your biggest marketing challenges?",
    type: "multiple",
    required: true,
    options: [
      "High cost per lead/acquisition",
      "Low conversion rates",
      "Not enough leads/sales",
      "Difficulty tracking ROI",
      "Don't know where to start",
      "Managing multiple platforms",
      "Creating ad content",
      "Understanding analytics",
    ],
  },
  {
    id: "previous-experience",
    question: "Have you worked with a marketing agency before?",
    type: "single",
    required: true,
    options: [
      "Yes, currently working with one",
      "Yes, in the past (positive experience)",
      "Yes, in the past (negative experience)",
      "No, this would be our first time",
    ],
  },
  {
    id: "conversion-tracking",
    question: "Do you have conversion tracking set up?",
    type: "single",
    required: true,
    options: [
      "Yes, fully set up and working",
      "Partially set up",
      "No, need help setting it up",
      "Not sure what that is",
    ],
  },
  {
    id: "average-customer-value",
    question: "What is the average value of a customer to your business?",
    type: "single",
    required: true,
    options: [
      "Under $100",
      "$100 - $500",
      "$500 - $1,000",
      "$1,000 - $5,000",
      "$5,000 - $10,000",
      "Over $10,000",
      "Not sure",
    ],
  },
  {
    id: "industry",
    question: "What industry is your business in?",
    type: "single",
    required: true,
    options: [
      "E-commerce / Retail",
      "Healthcare / Medical",
      "Legal Services",
      "Home Services",
      "Real Estate",
      "SaaS / Technology",
      "Financial Services",
      "Education",
      "Other",
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to get started?",
    type: "single",
    required: true,
    options: [
      "Immediately",
      "Within 2 weeks",
      "Within 1 month",
      "Within 3 months",
      "Just exploring options",
    ],
  },
];

export default function DigitalMarketingAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="Digital Marketing Assessment"
            description="Let's evaluate your advertising strategy"
            questions={questions}
            icon={<TrendingUp className="w-8 h-8 text-primary-blue" />}
            color="blue"
            serviceType="digital-marketing"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
