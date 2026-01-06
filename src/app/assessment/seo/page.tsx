"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Search } from "lucide-react";

const questions: Question[] = [
  {
    id: "current-seo",
    question: "Have you done any SEO work on your website before?",
    type: "single",
    required: true,
    options: [
      "Yes, actively doing SEO",
      "Yes, but it's been a while",
      "Some basic SEO (meta tags, etc.)",
      "No, never done SEO",
      "Not sure what's been done",
    ],
  },
  {
    id: "website-age",
    question: "How old is your current website?",
    type: "single",
    required: true,
    options: [
      "Less than 6 months",
      "6 months - 1 year",
      "1-2 years",
      "2-5 years",
      "Over 5 years",
      "Don't have a website yet",
    ],
  },
  {
    id: "current-traffic",
    question: "What is your current monthly organic traffic?",
    type: "single",
    required: true,
    options: [
      "Less than 100 visitors",
      "100 - 500 visitors",
      "500 - 1,000 visitors",
      "1,000 - 5,000 visitors",
      "5,000 - 10,000 visitors",
      "Over 10,000 visitors",
      "Not sure",
    ],
  },
  {
    id: "target-location",
    question: "What geographic area do you want to target?",
    type: "single",
    required: true,
    options: [
      "Local (single city/area)",
      "Multiple cities",
      "State-wide",
      "Regional (multiple states)",
      "National",
      "International",
    ],
  },
  {
    id: "keywords-known",
    question: "Do you know what keywords you want to rank for?",
    type: "single",
    required: true,
    options: [
      "Yes, I have a list ready",
      "I have some ideas",
      "No, I need help identifying them",
      "I want to rank for everything related to my business",
    ],
  },
  {
    id: "top-keywords",
    question: "What are 3-5 keywords you'd most like to rank for?",
    type: "textarea",
    required: false,
    placeholder: "Example: plumber near me, emergency plumbing, water heater repair...",
  },
  {
    id: "competitors",
    question: "Who are your main competitors online?",
    type: "textarea",
    required: false,
    placeholder: "List competitor websites or business names...",
  },
  {
    id: "google-business",
    question: "Do you have a Google Business Profile set up?",
    type: "single",
    required: true,
    options: [
      "Yes, fully optimized",
      "Yes, but needs work",
      "Yes, but barely use it",
      "No, need help setting it up",
      "Not applicable to my business",
    ],
  },
  {
    id: "content-creation",
    question: "Are you able to create content (blogs, articles) regularly?",
    type: "single",
    required: true,
    options: [
      "Yes, we have a content team",
      "Occasionally, when time permits",
      "No, we need content help",
      "We can provide topics, need writing help",
    ],
  },
  {
    id: "budget",
    question: "What is your estimated monthly SEO budget?",
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

export default function SEOAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="SEO Services Assessment"
            description="Let's evaluate your search visibility"
            questions={questions}
            icon={<Search className="w-8 h-8 text-cyan" />}
            color="cyan"
            serviceType="seo"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
