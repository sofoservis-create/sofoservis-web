"use client";
import { useState } from "react";
import Link from "next/link";
import type { FAQItem, InlineContent } from "@/lib/blog/articles";

function Answer({ content }: { content: InlineContent }) {
  if (typeof content === "string") return content;
  return content.map((part, index) =>
    part.href ? (
      <Link
        key={index}
        href={part.href}
        className="font-semibold text-[#78400b] underline decoration-[#a7621d] underline-offset-4"
      >
        {part.text}
      </Link>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-[#d8ddd7] rounded-2xl border border-[#d8ddd7] bg-[#f8faf7]">
      {items.map(({ question, answer }, index) => {
        const isOpen = open === index;
        return (
          <div key={question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-[#27332e] transition-colors hover:bg-[#edf3ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#78400b] md:px-7"
            >
              <span>{question}</span>
              <span className="text-2xl font-light text-[#c47f28]" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-5 pb-6 pr-12 text-[0.98rem] leading-7 text-[#52605a] md:px-7 md:pr-16"
              >
                <Answer content={answer} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}