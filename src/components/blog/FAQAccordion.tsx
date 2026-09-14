"use client";
import { useId, useState } from "react";
import Link from "next/link";
import type { FAQItem, InlineContent } from "@/lib/blog/articles";

function Answer({ content }: { content: InlineContent }) {
  if (typeof content === "string") return content;
  return content.map((part, index) =>
    part.href ? (
      <Link
        key={index}
        href={part.href}
        className="rounded-sm font-semibold text-[#675500] underline decoration-[#c9b208] decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
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
  const instanceId = useId();
  return (
    <div className="divide-y-2 divide-[#171717]/10 rounded-2xl border-2 border-[#171717] bg-[#fff] shadow-[4px_4px_0_#f4d80c]">
      {items.map(({ question, answer }, index) => {
        const isOpen = open === index;
        return (
          <div key={question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${instanceId}-faq-answer-${index}`}
              id={`${instanceId}-faq-question-${index}`}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-[#171717] transition-colors hover:bg-[#fff9c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#171717] md:px-7"
            >
              <span>{question}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4d80c] text-xl font-bold leading-none text-[#171717]" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              id={`${instanceId}-faq-answer-${index}`}
              role="region"
              aria-labelledby={`${instanceId}-faq-question-${index}`}
              hidden={!isOpen}
              className="px-5 pb-6 pr-12 text-[0.98rem] leading-7 text-[#454545] md:px-7 md:pr-16"
            >
              <Answer content={answer} />
            </div>
          </div>
        );
      })}
    </div>
  );
}