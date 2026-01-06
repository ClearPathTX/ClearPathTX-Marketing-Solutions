"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Brain } from "lucide-react";

const questions: Question[] = [
  {
    id: "ai-familiarity",
    question: "How familiar are you with AI marketing tools?",
    type: "single",
    required: true,
    options: [
      "Very familiar - already using several",
      "Somewhat familiar - used a few",
      "Heard about them but haven't used",
      "Not familiar at all",
    ],
  },
  {
    id: "current-ai-tools",
    question: "What AI tools are you currently using (if any)?",
    type: "multiple",
    required: false,
    options: [
      "ChatGPT / OpenAI",
      "Jasper AI",
      "Copy.ai",
      "Midjourney / DALL-E",
      "HubSpot AI features",
      "Salesforce Einstein",
      "Other AI tools",
      "None currently",
    ],
  },
  {
    id: "ai-interests",
    question: "What AI marketing capabilities interest you most?",
    type: "multiple",
    required: true,
    options: [
      "Content generation (blogs, social posts)",
      "Email marketing automation",
      "Ad copy optimization",
      "Chatbots / Customer service AI",
      "Predictive analytics",
      "Personalization at scale",
      "Image/video generation",
      "Voice/speech applications",
      "Customer segmentation",
      "Lead scoring",
    ],
  },
  {
    id: "content-volume",
    question: "How much content do you need to produce monthly?",
    type: "single",
    required: true,
    options: [
      "1-5 pieces (blogs, emails, etc.)",
      "5-15 pieces",
      "15-30 pieces",
      "30-50 pieces",
      "50+ pieces",
      "Not sure yet",
    ],
  },
  {
    id: "biggest-challenge",
    question: "What's your biggest content/marketing challenge?",
    type: "single",
    required: true,
    options: [
      "Not enough time to create content",
      "Content doesn't convert well",
      "Difficulty maintaining consistency",
      "Lack of creative ideas",
      "Can't personalize at scale",
      "Poor customer engagement",
      "Difficulty analyzing data",
    ],
  },
  {
    id: "automation-level",
    question: "How automated is your current marketing?",
    type: "single",
    required: true,
    options: [
      "Highly automated",
      "Some automation in place",
      "Minimal automation",
      "Everything is manual",
      "Not sure",
    ],
  },
  {
    id: "data-available",
    question: "What customer data do you have available?",
    type: "multiple",
    required: true,
    options: [
      "Email list / CRM data",
      "Website analytics",
      "Purchase history",
      "Customer surveys/feedback",
      "Social media data",
      "Call center data",
      "Limited data available",
    ],
  },
  {
    id: "integration-needs",
    question: "What systems would you need AI to integrate with?",
    type: "multiple",
    required: false,
    options: [
      "CRM (Salesforce, HubSpot, etc.)",
      "Email platform (Mailchimp, Klaviyo, etc.)",
      "E-commerce (Shopify, WooCommerce, etc.)",
      "Social media platforms",
      "Analytics tools",
      "Customer support software",
      "Not sure yet",
    ],
  },
  {
    id: "budget",
    question: "What is your estimated monthly budget for AI marketing?",
    type: "single",
    required: true,
    options: [
      "Under $500/month",
      "$500 - $1,000/month",
      "$1,000 - $2,500/month",
      "$2,500 - $5,000/month",
      "Over $5,000/month",
      "Not sure yet",
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to implement AI solutions?",
    type: "single",
    required: true,
    options: [
      "Immediately",
      "Within 1 month",
      "Within 3 months",
      "Within 6 months",
      "Just exploring options",
    ],
  },
];

export default function AIMarketingAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-clearpath-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clearpath-green/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="AI Marketing Assessment"
            description="Discover how AI can transform your marketing"
            questions={questions}
            icon={<Brain className="w-8 h-8 text-clearpath-green" />}
            color="green"
            serviceType="ai-marketing"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
