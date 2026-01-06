"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Server } from "lucide-react";

const questions: Question[] = [
  {
    id: "current-hosting",
    question: "Where is your website currently hosted?",
    type: "single",
    required: true,
    options: [
      "GoDaddy",
      "Bluehost",
      "HostGator",
      "SiteGround",
      "AWS / Google Cloud / Azure",
      "Other hosting provider",
      "Don't know",
      "Don't have a website yet",
    ],
  },
  {
    id: "website-platform",
    question: "What platform is your website built on?",
    type: "single",
    required: true,
    options: [
      "WordPress",
      "Shopify",
      "Wix",
      "Squarespace",
      "Custom built",
      "Next.js / React",
      "Other",
      "Don't know",
    ],
  },
  {
    id: "current-issues",
    question: "What issues are you experiencing with your current hosting?",
    type: "multiple",
    required: true,
    options: [
      "Slow loading times",
      "Frequent downtime",
      "Security concerns",
      "Poor customer support",
      "Too expensive",
      "Difficult to manage",
      "No backup system",
      "No issues - just exploring options",
    ],
  },
  {
    id: "monthly-traffic",
    question: "What is your estimated monthly website traffic?",
    type: "single",
    required: true,
    options: [
      "Under 1,000 visitors",
      "1,000 - 5,000 visitors",
      "5,000 - 25,000 visitors",
      "25,000 - 100,000 visitors",
      "Over 100,000 visitors",
      "Not sure",
    ],
  },
  {
    id: "uptime-importance",
    question: "How critical is uptime for your business?",
    type: "single",
    required: true,
    options: [
      "Critical - every minute of downtime costs money",
      "Very important - customers expect 24/7 access",
      "Important - but occasional downtime is okay",
      "Not critical - website is informational only",
    ],
  },
  {
    id: "features-needed",
    question: "What hosting features are most important to you?",
    type: "multiple",
    required: true,
    options: [
      "99.9%+ uptime guarantee",
      "Fast loading speeds",
      "SSL certificate included",
      "Daily backups",
      "Malware protection",
      "24/7 support",
      "Easy WordPress updates",
      "CDN included",
      "Staging environment",
    ],
  },
  {
    id: "email-hosting",
    question: "Do you need email hosting as well?",
    type: "single",
    required: true,
    options: [
      "Yes, for multiple users",
      "Yes, for 1-2 users",
      "No, we use Google Workspace",
      "No, we use Microsoft 365",
      "No, we use other email service",
    ],
  },
  {
    id: "maintenance-needs",
    question: "Do you need ongoing website maintenance?",
    type: "single",
    required: true,
    options: [
      "Yes, full maintenance (updates, backups, security)",
      "Yes, basic maintenance only",
      "No, just hosting",
      "Not sure what's included",
    ],
  },
  {
    id: "budget",
    question: "What is your estimated monthly budget for hosting?",
    type: "single",
    required: true,
    options: [
      "Under $50/month",
      "$50 - $100/month",
      "$100 - $200/month",
      "$200 - $500/month",
      "Over $500/month",
      "Not sure yet",
    ],
  },
  {
    id: "timeline",
    question: "When do you need to migrate or set up hosting?",
    type: "single",
    required: true,
    options: [
      "Immediately - urgent",
      "Within 2 weeks",
      "Within 1 month",
      "No rush - planning ahead",
      "Just exploring options",
    ],
  },
];

export default function HostingAssessment() {
  return (
    <main className="min-h-screen bg-[#0a0e14]">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto">
          <AssessmentForm
            title="Web Hosting Assessment"
            description="Let's find the perfect hosting solution"
            questions={questions}
            icon={<Server className="w-8 h-8 text-primary-blue" />}
            color="blue"
            serviceType="hosting"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
