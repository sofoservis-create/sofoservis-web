"use client";
import React, { useState } from "react";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQExpandableGroup {
  label: string;
  panels: { title: string; content: string }[];
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  showCallToAction?: boolean;
  callToActionText?: string;
  expandableGroup?: FAQExpandableGroup;
}

export default function FAQ({
  title = "Často kladené otázky",
  subtitle = "Nájdite odpovede na najčastejšie otázky o našich službách",
  items = [],
  showCallToAction = true,
  callToActionText = "Máte ďalšie otázky? Získajte nezáväznú ponuku",
  expandableGroup,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [groupOpen, setGroupOpen] = useState(false);
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const totalItems = items.length + (expandableGroup ? 1 : 0);

  return (
    <section className="bg-white py-10 md:py-14" id="faq">
      <Container>
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h3>
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
              isLast={index === totalItems - 1}
            />
          ))}

          {expandableGroup && (
            <div className={`${items.length === 0 ? "" : "border-t border-gray-200"}`}>
              <button
                className="w-full flex justify-between items-center py-6 text-left text-xl font-semibold text-primary-900 rounded-lg transition-colors duration-200 hover:text-accent-600"
                onClick={() => setGroupOpen(!groupOpen)}
                aria-expanded={groupOpen}
              >
                <span className="pr-8">{expandableGroup.label}</span>
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center transition-transform duration-300 ${
                      groupOpen ? "rotate-180" : ""
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  groupOpen ? "max-h-[4000px] opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!groupOpen}
              >
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  {expandableGroup.panels.map((panel, i) => (
                    <div
                      key={i}
                      className={`${i < expandableGroup.panels.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                      <button
                        className="w-full flex justify-between items-center py-4 text-left text-base font-semibold text-primary-900 hover:text-accent-600 transition-colors duration-200"
                        onClick={() => setOpenPanelIndex(openPanelIndex === i ? null : i)}
                        aria-expanded={openPanelIndex === i}
                      >
                        <span className="pr-6">{panel.title}</span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-full bg-accent-500 flex items-center justify-center transition-transform duration-300 ${
                            openPanelIndex === i ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary-900"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openPanelIndex === i
                            ? "max-h-[2000px] opacity-100 pb-4"
                            : "max-h-0 opacity-0"
                        }`}
                        aria-hidden={openPanelIndex !== i}
                      >
                        <div className="text-sm text-primary-700 leading-relaxed space-y-3 pb-1">
                          {panel.content.split("\n\n").map((paragraph, j) => (
                            <p key={j}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {items.length === 0 && !expandableGroup && (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">
                Žiadne často kladené otázky nie sú k dispozícii.
              </p>
            </div>
          )}
        </div>

        {showCallToAction && (items.length > 0 || expandableGroup) && (
          <div className="mt-8">
            <CallToAction text={callToActionText} />
          </div>
        )}
      </Container>
    </section>
  );
}

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
