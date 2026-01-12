"use client";

import { Navbar, Footer } from "@/components/sections";
import { AssessmentForm, Question } from "@/components/AssessmentForm";
import { Globe } from "lucide-react";

const questions: Question[] = [
  // Section 1: Business Information
  {
    id: "business-name",
    question: "What is your business name?",
    type: "text",
    required: true,
    placeholder: "Enter your business name",
  },
  {
    id: "business-industry",
    question: "What is your business industry or niche?",
    type: "text",
    required: true,
    placeholder: "e.g., Plumbing, Legal Services, Healthcare, etc.",
  },
  {
    id: "service-area",
    question: "What is your primary service area?",
    type: "single",
    required: true,
    options: [
      "Local (single city/area)",
      "Regional (multiple cities)",
      "State-wide",
      "Nationwide",
      "International",
    ],
  },

  // Section 2: Current Online Presence
  {
    id: "current-website",
    question: "Do you currently have a website?",
    type: "single",
    required: true,
    options: [
      "Yes, but it needs a complete redesign",
      "Yes, but it needs updates/improvements",
      "Yes, and I'm happy with it (new site for different purpose)",
      "No, this will be my first website",
    ],
  },
  {
    id: "current-website-url",
    question: "If yes, what is your current website URL?",
    type: "text",
    required: false,
    placeholder: "https://www.yourwebsite.com",
  },
  {
    id: "current-site-likes",
    question: "What do you like about your current site (if applicable)?",
    type: "textarea",
    required: false,
    placeholder: "Tell us what's working well...",
  },
  {
    id: "current-site-dislikes",
    question: "What do you dislike or want improved?",
    type: "textarea",
    required: false,
    placeholder: "Tell us what needs to change...",
  },

  // Section 3: Branding & Assets
  {
    id: "have-logo",
    question: "Do you have a logo?",
    type: "single",
    required: true,
    options: ["Yes", "No, I need one created", "No, but I'll get one separately"],
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
    id: "have-photos-videos",
    question: "Do you have photos or videos you'd like included?",
    type: "single",
    required: true,
    options: [
      "Yes, I have professional photos/videos ready",
      "Yes, but they need editing",
      "No, I need photography/video services",
      "No, I'll use stock images",
    ],
  },
  {
    id: "brand-colors",
    question: "Do you have preferred brand or website colors?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Blue and white, or hex codes like #00E6E6",
  },

  // Section 4: Website Goals
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
    id: "website-goals",
    question: "What do you want the website to accomplish?",
    type: "textarea",
    required: true,
    placeholder: "Describe your main goals for the website...",
  },
  {
    id: "success-metrics",
    question: "What would make this website a 'success' for you in 90 days?",
    type: "textarea",
    required: false,
    placeholder: "e.g., 50 leads per month, 10 online sales, 1000 visitors...",
  },

  // Section 5: Pages & Content
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
    id: "pages-list",
    question: "List any pages you already know you want",
    type: "textarea",
    required: false,
    placeholder: "e.g., Home, About, Services, Contact, FAQ, Blog...",
  },
  {
    id: "about-description",
    question: "Write a short 'About Us' description of your business",
    type: "textarea",
    required: true,
    placeholder: "Tell us about your business, what you do, and what makes you unique...",
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
    id: "need-copywriting",
    question: "Will you need copywriting, SEO writing, or content creation assistance?",
    type: "single",
    required: true,
    options: [
      "Yes, full copywriting services",
      "Yes, help with SEO optimization",
      "Just light editing/polishing",
      "No, I'll provide all content",
    ],
  },

  // Section 6: Features & Functionality
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
      "Google Maps",
      "Customer reviews / testimonials",
    ],
  },
  {
    id: "integrations-needed",
    question: "Do you need integrations with other tools?",
    type: "multiple",
    required: false,
    options: [
      "CRM (Salesforce, HubSpot, etc.)",
      "Email marketing (Mailchimp, Klaviyo, etc.)",
      "Payment processing (Stripe, PayPal, etc.)",
      "Scheduling (Calendly, Acuity, etc.)",
      "Analytics (Google Analytics, etc.)",
      "Social media platforms",
      "None needed",
    ],
  },

  // Section 7: Design Direction
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
    id: "admired-websites",
    question: "Are there any websites you admire or want to emulate?",
    type: "textarea",
    required: false,
    placeholder: "Share URLs of websites you like and what you like about them...",
  },
  {
    id: "design-dislikes",
    question: "Are there any colors, layouts, or styles you dislike?",
    type: "textarea",
    required: false,
    placeholder: "Tell us what to avoid...",
  },

  // Section 8: Domain & Hosting
  {
    id: "preferred-domain",
    question: "What is your preferred domain name?",
    type: "text",
    required: false,
    placeholder: "e.g., www.yourbusiness.com",
  },
  {
    id: "own-domain",
    question: "Do you already own this domain?",
    type: "single",
    required: true,
    options: [
      "Yes, I own it",
      "No, I need to purchase it",
      "Not sure",
    ],
  },
  {
    id: "domain-provider",
    question: "Who is your domain provider?",
    type: "single",
    required: false,
    options: [
      "GoDaddy",
      "Google Domains",
      "Namecheap",
      "Cloudflare",
      "Other",
      "Don't know",
      "Don't have one yet",
    ],
  },
  {
    id: "have-hosting",
    question: "Do you already have hosting?",
    type: "single",
    required: true,
    options: [
      "Yes, I have hosting",
      "No, I need hosting",
      "Not sure what hosting is",
    ],
  },

  // Section 9: Marketing & Growth
  {
    id: "plan-to-run-ads",
    question: "Do you plan to run ads to this website?",
    type: "single",
    required: true,
    options: [
      "Yes, Google Ads",
      "Yes, Facebook/Instagram Ads",
      "Yes, multiple platforms",
      "Maybe in the future",
      "No",
    ],
  },
  {
    id: "need-analytics",
    question: "Will this website be used for lead tracking and conversion analytics?",
    type: "single",
    required: true,
    options: [
      "Yes, this is very important",
      "Yes, basic tracking is fine",
      "Not sure what this means",
      "No",
    ],
  },
  {
    id: "need-seo",
    question: "Do you need SEO or ongoing marketing services?",
    type: "single",
    required: true,
    options: [
      "Yes, SEO is a priority",
      "Yes, full marketing services",
      "Maybe later",
      "No, just the website",
    ],
  },

  // Section 10: Budget & Timeline
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
  {
    id: "launch-deadline",
    question: "Is there a launch date, promotion, or deadline we should know about?",
    type: "textarea",
    required: false,
    placeholder: "e.g., Grand opening on March 1st, seasonal promotion, etc.",
  },

  // Section 11: Decision Making
  {
    id: "project-approver",
    question: "Who will approve this project?",
    type: "text",
    required: true,
    placeholder: "Name and role of decision maker",
  },
  {
    id: "other-stakeholders",
    question: "Are there any other stakeholders we should involve?",
    type: "textarea",
    required: false,
    placeholder: "List any other people who should be part of the process...",
  },
  {
    id: "previous-agency-experience",
    question: "Have you worked with a web agency before?",
    type: "single",
    required: true,
    options: [
      "Yes, positive experience",
      "Yes, negative experience",
      "Yes, mixed experience",
      "No, this is my first time",
    ],
  },

  // Section 12: Final Notes
  {
    id: "additional-notes",
    question: "Is there anything else we should know about your business, goals, or expectations?",
    type: "textarea",
    required: false,
    placeholder: "Share any other details that would help us understand your project better...",
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
            title="Website Project Intake Form"
            description="Help us design, scope, and deliver your perfect website"
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
