"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Send,
  Loader2,
} from "lucide-react";

export interface Question {
  id: string;
  question: string;
  type: "single" | "multiple" | "text" | "scale" | "textarea";
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

interface AssessmentFormProps {
  title: string;
  description: string;
  questions: Question[];
  icon: React.ReactNode;
  color: "cyan" | "blue" | "green";
  serviceType: string;
}

const colorClasses = {
  cyan: {
    bg: "bg-cyan",
    text: "text-cyan",
    border: "border-cyan",
    light: "bg-cyan/10",
    hover: "hover:bg-cyan/90",
    shadow: "shadow-glow",
  },
  blue: {
    bg: "bg-primary-blue",
    text: "text-primary-blue",
    border: "border-primary-blue",
    light: "bg-primary-blue/10",
    hover: "hover:bg-primary-blue/90",
    shadow: "shadow-glow-blue",
  },
  green: {
    bg: "bg-clearpath-green",
    text: "text-clearpath-green",
    border: "border-clearpath-green",
    light: "bg-clearpath-green/10",
    hover: "hover:bg-clearpath-green/90",
    shadow: "shadow-[0_0_30px_rgba(107,157,62,0.3)]",
  },
};

export function AssessmentForm({
  title,
  description,
  questions,
  icon,
  color,
  serviceType,
}: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const colors = colorClasses[color];
  const totalSteps = questions.length + 1; // +1 for contact info
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;
  const isContactStep = currentStep === questions.length;

  const handleAnswer = (answer: string | string[]) => {
    if (currentQuestion) {
      setAnswers({ ...answers, [currentQuestion.id]: answer });
    }
  };

  const handleSingleSelect = (option: string) => {
    handleAnswer(option);
  };

  const handleMultiSelect = (option: string) => {
    const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
    if (currentAnswers.includes(option)) {
      handleAnswer(currentAnswers.filter((a) => a !== option));
    } else {
      handleAnswer([...currentAnswers, option]);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceType,
          answers,
          contactInfo,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit assessment");
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (isContactStep) {
      return contactInfo.name && contactInfo.email;
    }
    if (!currentQuestion) return false;
    if (!currentQuestion.required) return true;
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "multiple") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className={`w-20 h-20 rounded-full ${colors.light} flex items-center justify-center mx-auto mb-6`}>
          <Check className={`w-10 h-10 ${colors.text}`} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Assessment Complete!</h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
          Thank you for completing the {title} assessment. Our team will review your
          responses and reach out within 24 hours with personalized recommendations.
        </p>
        <Button
          size="lg"
          className={`${colors.bg} ${colors.hover} text-white px-8 py-6 text-lg font-semibold rounded-xl ${colors.shadow}`}
          asChild
        >
          <a href="/">Return Home</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className={`w-16 h-16 rounded-xl ${colors.light} flex items-center justify-center mx-auto mb-4`}>
          {icon}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {Math.min(currentStep + 1, questions.length)} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 bg-surface-light rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${colors.bg}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="bg-surface border-white/5">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            {!isContactStep && currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  {currentQuestion.question}
                  {currentQuestion.required && <span className="text-red-400 ml-1">*</span>}
                </h2>

                {/* Single Select */}
                {currentQuestion.type === "single" && currentQuestion.options && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSingleSelect(option)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                          answers[currentQuestion.id] === option
                            ? `${colors.border} ${colors.light}`
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              answers[currentQuestion.id] === option
                                ? `${colors.border} ${colors.bg}`
                                : "border-gray-500"
                            }`}
                          >
                            {answers[currentQuestion.id] === option && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-gray-300">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Multiple Select */}
                {currentQuestion.type === "multiple" && currentQuestion.options && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
                    {currentQuestion.options.map((option) => {
                      const selected = (answers[currentQuestion.id] as string[] || []).includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => handleMultiSelect(option)}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                            selected
                              ? `${colors.border} ${colors.light}`
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                selected
                                  ? `${colors.border} ${colors.bg}`
                                  : "border-gray-500"
                              }`}
                            >
                              {selected && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-gray-300">{option}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Scale */}
                {currentQuestion.type === "scale" && (
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleAnswer(num.toString())}
                        className={`w-10 h-10 rounded-lg border font-medium transition-all duration-200 ${
                          answers[currentQuestion.id] === num.toString()
                            ? `${colors.border} ${colors.bg} text-white`
                            : "border-white/10 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                )}

                {/* Text Input */}
                {currentQuestion.type === "text" && (
                  <Input
                    type="text"
                    placeholder={currentQuestion.placeholder || "Your answer..."}
                    value={(answers[currentQuestion.id] as string) || ""}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50"
                  />
                )}

                {/* Textarea */}
                {currentQuestion.type === "textarea" && (
                  <Textarea
                    placeholder={currentQuestion.placeholder || "Your answer..."}
                    value={(answers[currentQuestion.id] as string) || ""}
                    onChange={(e) => handleAnswer(e.target.value)}
                    rows={4}
                    className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 resize-none"
                  />
                )}
              </motion.div>
            )}

            {/* Contact Info Step */}
            {isContactStep && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  Almost done! How can we reach you?
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      placeholder="Anything else you'd like us to know..."
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                      rows={3}
                      className="bg-surface-light border-white/10 text-white placeholder:text-gray-500 focus:border-cyan/50 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="border-white/10 text-gray-300 hover:bg-white/5 disabled:opacity-50"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>

        {isContactStep ? (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className={`${colors.bg} ${colors.hover} text-white px-8 disabled:opacity-50`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Assessment
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`${colors.bg} ${colors.hover} text-white px-8 disabled:opacity-50`}
          >
            {isLastQuestion ? "Continue" : "Next"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
