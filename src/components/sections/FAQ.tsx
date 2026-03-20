"use client";
import React, { useState } from "react";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  showCallToAction?: boolean;
  callToActionText?: string;
}

export default function FAQ({
  title = "Často kladené otázky",
  subtitle = "Nájdite odpovede na najčastejšie otázky o našich službách",
  items = [],
  showCallToAction = true,
  callToActionText = "Máte ďalšie otázky? Získajte nezáväznú ponuku",
}: FAQProps) {
  // Changed from 0 to null so no question is open by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-14" id="faq">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <FAQAccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              isLast={index === items.length - 1}
            />
          ))}

          {items.length === 0 && (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">
                Žiadne často kladené otázky nie sú k dispozícii.
              </p>
            </div>
          )}
        </div>

        {showCallToAction && items.length > 0 && (
          <div className="mt-8">
            <CallToAction text={callToActionText} />
          </div>
        )}
      </Container>
    </section>
  );
}

// Separate component for each FAQ item
interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}

function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  isLast,
}: FAQAccordionItemProps) {
  return (
    <div className={`${isLast ? "" : "border-b border-gray-200"}`}>
      <button
        className="w-full flex justify-between items-center py-6 text-left text-xl font-semibold text-primary-900 rounded-lg transition-colors duration-200 hover:text-accent-600"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="pr-8">{question}</span>
        <div className="flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-primary-900"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </button>

      <div
        id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className={`text-lg text-primary-700 leading-relaxed`}>
          {answer.split("\n").map((paragraph, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
