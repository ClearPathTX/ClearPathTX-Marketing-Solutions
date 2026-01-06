"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Phone } from "lucide-react";

const questions: Question[] = [
  {
    id: "current-call-handling",
    question: "How do you currently handle incoming calls and leads?",
    type: "single",
    required: true,
    options: [
      "We handle everything in-house",
      "We use an answering service",
      "We have a call center team",
      "Calls often go to voicemail",
      "We don't have a system in place",
    ],
  },
  {
    id: "call-volume",
    question: "What is your average monthly call volume?",
    type: "single",
    required: true,
    options: [
      "Less than 100 calls",
      "100 - 500 calls",
      "500 - 1,000 calls",
      "1,000 - 5,000 calls",
      "More than 5,000 calls",
    ],
  },
  {
    id: "call-types",
    question: "What types of calls do you need handled?",
    type: "multiple",
    required: true,
    options: [
      "Lead qualification",
      "Customer support",
      "Appointment scheduling",
      "Insurance verification",
      "Sales calls",
      "After-hours support",
      "Bilingual support (English/Spanish)",
      "Outbound follow-ups",
    ],
  },
  {
    id: "biggest-challenge",
    question: "What is your biggest challenge with call handling?",
    type: "single",
    required: true,
    options: [
      "Missing too many calls",
      "Poor lead qualification",
      "High cost of in-house staff",
      "Inconsistent customer experience",
      "Lack of call tracking/reporting",
      "After-hours coverage",
    ],
  },
  {
    id: "hours-needed",
    question: "What hours do you need call coverage?",
    type: "single",
    required: true,
    options: [
      "Business hours only (9-5)",
      "Extended hours (7am - 9pm)",
      "24/7 coverage",
      "Weekends only",
      "Flexible/on-demand",
    ],
  },
  {
    id: "crm-usage",
    question: "Do you use a CRM or lead management system?",
    type: "single",
    required: true,
    options: [
      "Yes - Salesforce",
      "Yes - HubSpot",
      "Yes - Zoho",
      "Yes - Other CRM",
      "No, but interested",
      "No, not interested",
    ],
  },
  {
    id: "lead-response-time",
    question: "How quickly do leads need to be contacted?",
    type: "single",
    required: true,
    options: [
      "Immediately (within minutes)",
      "Within 1 hour",
      "Within same business day",
      "Within 24 hours",
      "No specific requirement",
    ],
  },
  {
    id: "industry",
    question: "What industry is your business in?",
    type: "single",
    required: true,
    options: [
      "Healthcare / Medical",
      "Legal Services",
      "Home Services (HVAC, Plumbing, etc.)",
      "Insurance",
      "Real Estate",
      "Financial Services",
      "E-commerce / Retail",
      "Other",
    ],
  },
  {
    id: "budget",
    question: "What is your estimated monthly budget for call center services?",
    type: "single",
    required: true,
    options: [
      "Under $1,000",
      "$1,000 - $2,500",
      "$2,500 - $5,000",
      "$5,000 - $10,000",
      "Over $10,000",
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

export default function CallCenterAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="Call Center Solutions Assessment"
            description="Help us understand your call handling needs"
            questions={questions}
            icon={<Phone className="w-8 h-8 text-cyan" />}
            color="cyan"
            serviceType="call-center"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
