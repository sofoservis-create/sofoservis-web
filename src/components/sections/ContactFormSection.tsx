"use client";
import QuickContactForm from "@/components/forms/QuickContactForm";

interface ContactFormSectionProps {
  lang?: "sk" | "en";
  title?: string;
  subtitle?: string;
}

export default function ContactFormSection({
  lang = "sk",
  title,
  subtitle,
}: ContactFormSectionProps) {
  const defaultTitle =
    lang === "en" ? "Get a Free Quote" : "Získajte cenovú ponuku zadarmo";
  const defaultSubtitle =
    lang === "en"
      ? "Fill in the form and we'll get back to you within 24 hours with an accurate estimate."
      : "Vyplňte formulár a ozveme sa vám do 24 hodín s presnou kalkuláciou.";

  return (
    <div className="bg-gray-50 pt-6 pb-10 md:pt-8 md:pb-[80px] px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-3">
            {title || defaultTitle}
          </h2>
          <p className="text-gray-600 text-lg">
            {subtitle || defaultSubtitle}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <QuickContactForm variant="white" lang={lang} />
        </div>
      </div>
    </div>
  );
}
