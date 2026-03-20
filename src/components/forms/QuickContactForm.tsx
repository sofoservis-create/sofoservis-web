// src/components/forms/QuickContactForm.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Dialog from "@/components/elements/Dialog";
import { usePathname } from "next/navigation";
import { pushDataLayerEvent } from "@/lib/gtm";
import { getUTMAttribution, flattenUTMForEmail } from "@/lib/utm";
import { sendLeadToCRM } from "@/lib/crm";

interface QuickContactFormProps {
  variant?: "primary" | "white";
  className?: string;
  lang?: "en" | "sk";
  serviceType?: string;
  showRating?: boolean;
}

export interface QuickFormData {
  name: string;
  phone: string;
  email: string;
  description: string;
  consent: boolean;
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_fcbgn5u";
const EMAILJS_PUBLIC_KEY = "aYRRi7nyH2P26Q4jc";

// Simple email routing - only two templates
const EMAIL_ROUTING = {
  // Furniture assembly pages
  "/montaz-nabytku": {
    templateId: "template_cqtaia8",
  },
  "/montaz-kuchyne": {
    templateId: "template_cqtaia8",
  },
  "/hodinovy-manzel-majster": {
    templateId: "template_cqtaia8",
  },

  // Default for all other pages
  default: {
    templateId: "template_y6oz64j",
  },
};

export default function QuickContactForm({
  variant = "primary",
  className = "",
  lang = "sk",
  serviceType,
  showRating = true,
}: QuickContactFormProps) {
  const pathname = usePathname();
  const [formData, setFormData] = useState<QuickFormData>({
    name: "",
    phone: "",
    email: "",
    description: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isPrivacyDialogOpen, setIsPrivacyDialogOpen] = useState(false);

  // Determine email routing based on current page or serviceType prop
  const getEmailConfig = () => {
    // If serviceType is provided as prop, use it to override
    if (
      serviceType &&
      EMAIL_ROUTING[serviceType as keyof typeof EMAIL_ROUTING]
    ) {
      return EMAIL_ROUTING[serviceType as keyof typeof EMAIL_ROUTING];
    }

    // Check exact path match first
    if (EMAIL_ROUTING[pathname as keyof typeof EMAIL_ROUTING]) {
      return EMAIL_ROUTING[pathname as keyof typeof EMAIL_ROUTING];
    }

    // Check for partial matches (for city-specific pages like /montaz-nabytku/bratislava)
    const isFurnitureAssembly =
      pathname.includes("/montaz-nabytku") ||
      pathname.includes("/montaz-kuchyne") ||
      pathname.includes("/en/furniture-assembly") ||
      pathname.includes("/en/kitchen-installation");

    const isHandymanService =
      pathname.includes("/hodinovy-manzel-majster") ||
      pathname.includes("/en/handyman-services");

    if (isFurnitureAssembly) {
      return EMAIL_ROUTING["/montaz-nabytku"];
    }

    if (isHandymanService) {
      return EMAIL_ROUTING["/hodinovy-manzel-majster"];
    }

    // Return default for all other pages
    return EMAIL_ROUTING.default;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const emailConfig = getEmailConfig();

      // Add page context to the message
      const contextualMessage = formData.description;

      const serviceType =
        emailConfig.templateId === "template_cqtaia8" ? "montaz" : "general";

      // Collect UTM attribution data (first-click + last-click)
      const utmAttribution = getUTMAttribution();
      const utmFlat = flattenUTMForEmail(utmAttribution);

      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: contextualMessage,
        page_url: pathname,
        service_type: serviceType,
        ...utmFlat,
      };

      const submissionPayload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: contextualMessage,
        consent: formData.consent,
        service_type: serviceType,
        page_url: pathname,
        ...utmFlat,
      };

      const postJson = async (
        url: string,
        payload: Record<string, unknown>,
        label: string
      ) => {
        const r = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
          body: JSON.stringify(payload),
        });
        const data = await r.json().catch(() => ({}));
        if (!r.ok || !data?.ok) {
          throw new Error(data?.error || `${label} API error (${r.status})`);
        }
        return data;
      };

      // Check if this is a furniture assembly page (montaz)
      const isFurnitureAssemblyPage = serviceType === "montaz";

      // For furniture assembly pages: send email only (no Trello)
      // For other pages: send to Trello only (no email)
      const [emailResult, trelloResult] = await Promise.allSettled([
        isFurnitureAssemblyPage
          ? emailjs.send(
              EMAILJS_SERVICE_ID,
              emailConfig.templateId,
              templateParams,
              EMAILJS_PUBLIC_KEY
            )
          : Promise.resolve({ status: "skipped" }), // Skip email for non-montaz pages
        isFurnitureAssemblyPage
          ? Promise.resolve({ status: "skipped" }) // Skip Trello for montaz pages
          : postJson("/api/trello", submissionPayload, "Trello"),
      ]);

      if (!isFurnitureAssemblyPage) {
        sendLeadToCRM({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          description: formData.description,
        });
      }

      const failures: string[] = [];
      // Only check email result if it was actually sent (furniture assembly pages)
      if (isFurnitureAssemblyPage && emailResult.status === "rejected") failures.push("email");
      // Only check Trello result if it was actually sent (non-montaz pages)
      if (!isFurnitureAssemblyPage && trelloResult.status === "rejected") failures.push("Trello");

      if (failures.length) {
        throw new Error(`Odoslanie zlyhalo: ${failures.join(" + ")}`);
      }

      // 🔥 GTM event – form_submission_success (len ak je udelený súhlas)
      // Obsahuje user_email a user_phone pre Enhanced Conversions (Meta/Google)
      try {
        pushDataLayerEvent("form_submission_success", {
          event_category: "lead",
          event_label: pathname,
          form_type: "quick_contact",
          service_type: serviceType,
          user_email: formData.email,
          user_phone: formData.phone,
          gclid: utmAttribution.last?.gclid || utmAttribution.first?.gclid || "",
          utm_source: utmAttribution.last?.utm_source || utmAttribution.first?.utm_source || "",
          utm_medium: utmAttribution.last?.utm_medium || utmAttribution.first?.utm_medium || "",
          utm_campaign: utmAttribution.last?.utm_campaign || utmAttribution.first?.utm_campaign || "",
        });
      } catch {
        // Ignorujeme chyby z tracking kódu, aby neovplyvnili odoslanie formulára
      }

      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        description: "",
        consent: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(
        lang === "en"
          ? "An error occurred while sending. Please try again or contact us by phone."
          : "Nastala chyba pri odoslaní. Skúste to znova alebo nás kontaktujte na telefóne."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Text content based on language
  const texts = {
    sk: {
      name: "Meno a priezvisko",
      nameLabel: "Zadajte meno a priezvisko",
      phone: "Telefónne číslo",
      phoneLabel: "Zadajte telefónne číslo",
      email: "Email",
      emailLabel: "Zadajte email",
      description: "Popíšte čo potrebujete",
      descriptionPlaceholder:
        "Napr. sťahovanie 2-izbového bytu z Bratislavy...",
      consent: "Odoslaním tohto formulára súhlasím so",
      privacyPolicy: "spracovaním osobných údajov",
      submitButton: "Získať kalkuláciu zadarmo",
      loadingText: "Spracovávam...",
      successMessage:
        "Ďakujeme za vyplnenie formulára! Budeme vás kontaktovať čo najskôr.",
      errorMessage:
        "Nastala chyba pri odoslaní. Skúste to znova alebo nás kontaktujte na telefóne.",
      afterSubmitText:
        "Po odoslaní formuláru sa s vami spojíme a radi Vám odpovieme na všetky otázky.",
      privacyTitle: "Ochrana osobných údajov",
      closeButton: "Zavrieť",
    },
    en: {
      name: "Full Name",
      nameLabel: "Enter your full name",
      phone: "Phone number",
      phoneLabel: "Enter your phone number",
      email: "Email",
      emailLabel: "Enter your email",
      description: "Describe what you need",
      descriptionPlaceholder:
        "E.g. moving a 2-bedroom apartment from Bratislava...",
      consent: "By submitting this form, I agree to the",
      privacyPolicy: "processing of personal data",
      submitButton: "Get a free quote",
      loadingText: "Processing...",
      successMessage:
        "Thank you for filling out the form! We will contact you as soon as possible.",
      errorMessage:
        "An error occurred while sending. Please try again or contact us by phone.",
      afterSubmitText:
        "After submitting the form, we'll contact you and answer all your questions.",
      privacyTitle: "Privacy Policy",
      closeButton: "Close",
    },
  };

  const inputBgColor = variant === "primary" ? "bg-gray-100" : "bg-white";
  const t = texts[lang];

  return (
    <>
      <div className={`w-full text-left ${className}`}>
        {submitSuccess ? (
          <div className="form-submission-success bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-2">
            <div className="flex">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm">{t.successMessage}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-2">
                <p className="text-sm">{submitError}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-0.5 text-xs text-left"
              >
                {t.phone} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t.phoneLabel}
                className={`w-full p-2 ${inputBgColor} border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-sm`}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-0.5 text-xs text-left"
              >
                {t.name} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.nameLabel}
                className={`w-full p-2 ${inputBgColor} border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-sm`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-0.5 text-xs text-left"
              >
                {t.email}: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.emailLabel}
                className={`w-full p-2 ${inputBgColor} border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-sm`}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-0.5 text-xs text-left"
              >
                {t.description}
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={t.descriptionPlaceholder}
                rows={2}
                className={`w-full p-2 ${inputBgColor} border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-sm`}
              ></textarea>
            </div>

            <div className="flex items-center pt-1">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="h-5 w-5 cursor-pointer shrink-0 appearance-none rounded border-2 border-gray-500 bg-white checked:bg-[#f4d80c] checked:border-[#f4d80c] focus:outline-none focus:ring-2 focus:ring-[#f4d80c]/50"
                style={{
                  backgroundImage: formData.consent
                    ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23111' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`
                    : "none",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <label
                htmlFor="consent"
                onClick={(e) => {
                  // Only handle clicks on the label itself, not on child elements (span)
                  if (e.target === e.currentTarget) {
                    // Manually toggle the checkbox state
                    setFormData((prev) => ({
                      ...prev,
                      consent: !prev.consent,
                    }));
                  }
                }}
                className="ml-2 block text-xs text-gray-600 text-left cursor-pointer"
              >
                {t.consent}{" "}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsPrivacyDialogOpen(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPrivacyDialogOpen(true);
                    }
                  }}
                  className="text-accent-600 hover:underline focus:outline-none"
                >
                  {t.privacyPolicy}
                </span>
              </label>
            </div>

            {showRating && (
              <div className="flex items-center justify-center gap-2 py-1">
                <Image src="/google.png" alt="Google" width={20} height={20} className="h-5 w-auto" />
                <span className="text-yellow-500 text-base leading-none">★★★★★</span>
                <span className="text-gray-600 text-sm">{lang === "en" ? "2500+ satisfied customers" : "2500+ spokojných zákazníkov"}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold tracking-wide py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center text-sm ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t.loadingText}
                </span>
              ) : (
                t.submitButton
              )}
            </button>

            <p className="text-center text-gray-600 text-xs">
              {t.afterSubmitText}
            </p>
          </form>
        )}
      </div>

      {/* Privacy Policy Dialog - keep existing content */}
      <Dialog
        isOpen={isPrivacyDialogOpen}
        onClose={() => setIsPrivacyDialogOpen(false)}
        title={t.privacyTitle}
        className="w-full max-w-6xl mx-4 sm:mx-6 lg:mx-8 my-8"
      >
        <div className="px-2 py-4">
          {" "}
          {/* Added padding wrapper */}
          <div className="prose prose-sm max-w-none text-primary-700 space-y-6 leading-relaxed">
            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded-r-lg">
              <p className="text-primary-800 font-medium">
                <strong>Vážení zákazníci,</strong>
              </p>
              <p className="mt-2 text-primary-700">
                týmto dokumentom by sme Vám radi vysvetlili ako, a s akým cieľom
                používame Vaše osobné údaje a aké máte práva a možnosti v tejto
                oblasti.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  KTO JE ZODPOVEDNÝ ZA VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-primary-800 leading-relaxed">
                    <strong>Sofian Hidbani – SofoServis</strong>
                    <br />
                    Doležalová 9,
                    <br />
                    821 04 Bratislava,
                    <br />
                    SLOVENSKÁ REPUBLIKA,
                    <br />
                    IČO: 52332225
                  </p>
                  <p className="mt-3 text-primary-700">
                    je zodpovedným prevádzkovateľom Vašich osobných údajov.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  NA AKÉ ÚČELY POUŽÍVAME VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <p className="mb-4 text-primary-700 leading-relaxed">
                  Vaše osobné údaje spracovávame v takom rozsahu, v akom to je
                  nutné v súvislosti s poskytovaním našich servisných služieb a
                  zabezpečením prevádzky nášho internetového obchodu, a obzvlášť
                  na tieto účely: (tzv. &quot;povolené účely&quot;):
                </p>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      nákup a predaj tovaru a poskytovanie služieb, čím sa
                      zabezpečuje najmä riadne plnenie zmluvných vzťahov
                      uzatvorených s našimi zákazníkmi, komunikácia s nimi,
                      vybavenie objednávky a doručenie tovaru, vedenie účtovnej
                      a fakturačnej evidencie;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      všeobecné dodržiavanie noriem, čím sa zabezpečuje
                      dodržiavanie s právnych povinností a zabezpečenie súladu
                      so všeobecne záväznými právnymi predpismi;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      spory a vymáhanie pohľadávok; zahŕňa našu podporu pri
                      riešení sporov, dodržiavaní súdnych nariadení, nariadení
                      úradov a iných verejných orgánov, pri presadzovaní našich
                      zmluvných dohôd a pri založení, vykonávaní alebo obrane
                      právnych nárokov.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-primary-700 leading-relaxed">
                    Vaše osobné údaje nebudú použité pre vykonanie
                    automatizovaného individuálneho rozhodovania vrátane
                    profilovania. Právny základ spracovania Vašich osobných
                    údajov je opísaný v Článku 6 Všeobecného nariadenia o
                    ochrane údajov. V závislosti od vyššie uvedených povolených
                    účelov, na ktoré môžeme použiť Vaše osobné údaje, je ich
                    spracovanie nutné buď pre plnenie podmienok zmluvy uzavretej
                    s našou spoločnosťou, ďalej je ich spracovanie nutné pre
                    dodržiavanie našich zákonných povinností alebo je ich
                    spracovanie nutné na účely nášho oprávneného záujmu alebo
                    záujmu tretej strany, ktoré sa dostanú k Vašim osobný
                    údajom, pričom tieto záujmy neprevyšujú tie Vaše alebo
                    neprevyšujú základné práva a slobody. Okrem toho, ich
                    spracovanie môže byť podložené Vašim súhlasom, ktorý ste nám
                    dali.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  AKÉ OSOBNÉ ÚDAJE ZBIERAME?
                </h4>
                <p className="mb-4 text-primary-700 leading-relaxed">
                  Pokiaľ nie je inak dohodnuté, uchovávame len tie osobné údaje,
                  ktoré sú potrebné vzhľadom na vybavenie Vašej objednávky,
                  uzatvorenie servisnej alebo kúpnej zmluvy a pre dodanie
                  objednaného tovaru, a to všetko na vyššie spomenuté účely. To
                  zahŕňa informácie, ktoré nám sprostredkujete priamo,
                  prostredníctvom formulára na našej internetovej stránke alebo
                  ktoré nám poskytnete iným spôsobom. To zahŕňa najmä nasledovné
                  kategórie údajov:
                </p>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      osobné detaily, ako meno a priezvisko, doručovaciu adresu,
                      prípadne fakturačnú adresu, telefonický a emailový
                      kontakt, predmet objednávky, resp. iné údaje nevyhnutné
                      pre vybavenie Vašej objednávky;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      údaje súvisiace s prístupom a používaním našej
                      internetovej stránky a internetového obchodu, čo
                      predstavuje najmä údaje súvisiace s vytvorením Vášho
                      používateľského konta a údaje nevyhnutné na komunikáciu s
                      Vami;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      údaje súvisiace so spormi a vymáhaním pohľadávok, čo
                      zahŕňa údaje súvisiace s alebo vygenerované zo súdnych
                      konaní, sporov, jednaní, výrokov, obhajoby alebo z iných
                      súvisiacich komunikácii alebo aktivít;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      iné osobné údaje odvodené alebo vygenerované z vyššie
                      uvedených povolených účelov;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      súbory cookies, krátke textové súbory generované webovým
                      serverom a ukladané v počítači prostredníctvom
                      prehliadača, pričom sa môže jednať o funkčné a technické
                      cookies, analytické cookies alebo marketingové a reklamné
                      cookies. Marketingové a reklamné cookies môžu byť
                      spracované iba na základe Vášho súhlasu.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Continue with remaining sections in similar format... */}
              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  AKO ZBIERAME OSOBNÉ ÚDAJE?
                </h4>
                <p className="text-primary-700 leading-relaxed">
                  Vaše osobné údaje zbierame primárne priamo od Vás počas Vašej
                  interakcie s nami prostredníctvom našej internetovej stránky
                  alebo iným komunikačným spôsobom.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  AKO CHRÁNIME VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <p className="text-primary-700 leading-relaxed">
                  Na ochranu Vašich osobných údajov pred neoprávneným prístupom
                  alebo zneužitiu využívame fyzické, elektronické a procedurálne
                  bezpečnostné opatrenia, ktoré zodpovedajú technickému stavu a
                  právnym požiadavkám na ochranu osobných údajov. Tieto
                  bezpečnostné opatrenia zahrňujú implementáciu špecifických
                  technológií a procedúr vytvorených na ochranu Vášho súkromia,
                  akými sú bezpečnostné servery, protipožiarne steny a SSL
                  šifrovanie. Budeme po celý čas striktne dodržiavať zákony a
                  nariadenia súvisiace s dôvernosťou a bezpečnosťou osobných
                  údajov.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  S KÝM ZDIEĽAME VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <p className="mb-4 text-primary-700 leading-relaxed">
                  Vaše osobné údaje môžeme zdieľať s:
                </p>
                <ul className="space-y-3 text-primary-700 mb-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      Tretími stranami, ktoré spracovávajú Vaše osobné údaje v
                      ich vlastnom mene, ale v súvislosti so službou, ktorú nám
                      poskytujú alebo vo Vašom vlastnom mene na povolené účely.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      Poskytovateľmi služieb (tzv. sprostredkovatelia), ktorí sú
                      usmernení spracúvať osobné údaje pre povolené účely v
                      našom mene, a môžu konať len v súlade s našimi
                      inštrukciami. Ak zahrnieme do procesu takéhoto
                      poskytovateľa služby, bude naša spoločnosť kontrolovať
                      dodržiavanie bezpečnosti a zostane naďalej zodpovednou za
                      Vaše osobné údaje a bude používať vhodné bezpečnostné
                      opatrenia požadované zákonom, aby zabezpečila integritu a
                      ochranu Vašich osobných údajov.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></span>
                    <span>
                      Verejnými alebo vládnymi organizáciami akými sú regulačné
                      orgány alebo orgány presadzujúce práva, právnymi
                      zástupcami alebo súdmi, pokiaľ je nutné tak urobiť podľa
                      platných zákonov alebo nariadení, alebo ak je to na ich
                      žiadosť a je to právne povolené a potrebné na splnenie
                      právnych povinností alebo na ustanovenie, vykonanie alebo
                      obranu právneho nároku.
                    </span>
                  </li>
                </ul>
                <p className="text-primary-700 leading-relaxed">
                  Inak budeme poskytovať Vaše osobné údaje výhradne len v
                  prípade Vášho pokynu alebo len s Vaším povolením, ak to bude
                  nutné z pohľadu zákona alebo nariadenia, alebo v prípade
                  súdneho alebo oficiálneho vyzvania, alebo ak je prítomné
                  podozrenie z podvodu alebo kriminálnej aktivity.
                </p>
              </section>

              {/* Contact section with accent styling */}
              <section className="bg-accent-50 border border-accent-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary-900 mb-3">
                  AKO SA S NAMI SKONTAKTOVAŤ
                </h4>
                <p className="mb-4 text-primary-700 leading-relaxed">
                  V prípade, že budete mať akákoľvek otázky ohľadom Vašich práv
                  alebo budete mať iné špeciálne požiadavky súvisiace s Vašimi
                  osobnými údajmi, kontaktujte prosím na uvedených kontaktných
                  údajoch:
                  <a
                    href="mailto:doprava@sofoservis.sk"
                    className="text-accent-600 hover:text-accent-700 font-medium"
                  >
                    doprava@sofoservis.sk
                  </a>
                </p>

                <div className="bg-white p-4 rounded-lg border border-accent-200">
                  <p className="text-primary-800 font-medium">
                    <strong>S pozdravom, Sofian Hidbani – SofoServis</strong>
                  </p>
                  <p className="mt-2 text-primary-700">
                    Web:{" "}
                    <a
                      href="https://www.sofoservis.sk"
                      className="text-accent-600 hover:text-accent-700"
                    >
                      www.sofoservis.sk
                    </a>
                    <br />
                    Tel:{" "}
                    <a
                      href="tel:+421905771151"
                      className="text-accent-600 hover:text-accent-700"
                    >
                      +421 905 771 151
                    </a>
                    <br />
                    IČO: 52332225
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
