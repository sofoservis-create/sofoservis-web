"use client";
import Image from "next/image";
import QuickContactForm from "@/components/forms/QuickContactForm";

const FORM_MASCOT = "/images/mascot/pozy/sofoservis-maskot-formular";

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
    <div className="cv-auto bg-gray-50 pt-6 md:pt-8 pb-12 md:pb-16 lg:pb-20 px-4">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <Image
          src={`${FORM_MASCOT}.webp`}
          alt=""
          width={400}
          height={400}
          sizes="128px"
          className="lg:hidden mx-auto mb-2 h-auto w-32"
        />
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary-900 mb-3">
            {title || defaultTitle}
          </h3>
          <p className="text-gray-600 text-lg">
            {subtitle || defaultSubtitle}
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:gap-10">
          <Image
            src={`${FORM_MASCOT}-768.webp`}
            alt=""
            width={768}
            height={768}
            sizes="288px"
            className="hidden lg:block w-72 h-auto shrink-0"
          />
          <div className="lg:flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <QuickContactForm variant="white" lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
