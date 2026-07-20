// src/components/forms/QuickContactForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { pushDataLayerEvent } from "@/lib/gtm";
import { getUTMAttribution, flattenUTMForEmail } from "@/lib/utm";

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

// EmailJS sending now happens server-side via /api/lead.
// (Routing/template selection is mirrored in src/lib/leads/routing.ts.)

const PLACEHOLDER_MAP: Record<string, { sk: string; en: string }> = {
  // SK routes — specific (matched before prefix keys due to longest-first sorting)
  "/stahovanie-bytov-domov": {
    sk: "Napr. sťahovanie 3-izbového bytu...",
    en: "E.g. moving a 3-bedroom apartment...",
  },
  "/stahovanie-kancelarii-firiem": {
    sk: "Napr. sťahovanie kancelárie 20 zamestnancov na novú adresu...",
    en: "E.g. office relocation for 20 employees to a new address...",
  },
  "/medzinarodne-stahovanie": {
    sk: "Napr. sťahovanie z jednej krajiny do druhej, 2-izbový byt...",
    en: "E.g. international move, 2-bedroom apartment...",
  },
  "/stahovanie-tazkych-bremien": {
    sk: "Napr. odvoz a sťahovanie ťažkého nábytku alebo strojov...",
    en: "E.g. removal and transport of heavy furniture or machinery...",
  },
  "/vypratavanie-bytov-domov": {
    sk: "Napr. vypratanie 3-izbového bytu po sťahovaní...",
    en: "E.g. clearance of a 3-bedroom apartment after moving...",
  },
  "/vypratavanie-pivnic-garazi-nebytovych-priestorov": {
    sk: "Napr. vypratanie pivnice a garáže v bytovom dome...",
    en: "E.g. clearance of cellar and garage in apartment building...",
  },
  "/cistenie-vypratavanie-pozemkov-nehnutelnosti": {
    sk: "Napr. vypratanie a čistenie záhrady alebo parcely...",
    en: "E.g. clearance and cleaning of a property or land plot...",
  },
  "/montaz-nabytku": {
    sk: "Napr. montáž postele, skrine a písacieho stola...",
    en: "E.g. assembly of bed, wardrobe and desk...",
  },
  "/montaz-kuchyne": {
    sk: "Napr. montáž kuchynskej linky vrátane spotrebičov...",
    en: "E.g. installation of kitchen units including appliances...",
  },
  "/hodinovy-manzel-majster": {
    sk: "Napr. zavesenie obrazov, montáž poličiek a zrkadla...",
    en: "E.g. hanging pictures, assembling shelves and mirror...",
  },
  // SK prefix keys — matched by flat city pages (e.g. /stahovanie-bratislava)
  "/stahovanie": {
    sk: "Napr. sťahovanie bytu alebo domu...",
    en: "E.g. moving an apartment or house...",
  },
  "/vypratavanie": {
    sk: "Napr. vypratanie bytu, domu alebo záhrady...",
    en: "E.g. clearance of an apartment, house or garden...",
  },
  // EN routes — specific (cleanPath after stripping /en)
  "/international-moving-services": {
    sk: "Napr. sťahovanie z jednej krajiny do druhej...",
    en: "E.g. international move, 2-bedroom apartment...",
  },
  "/apartment-moving": {
    sk: "Napr. sťahovanie 3-izbového bytu...",
    en: "E.g. moving a 3-bedroom apartment...",
  },
  "/office-moving": {
    sk: "Napr. sťahovanie kancelárie 20 zamestnancov...",
    en: "E.g. office relocation for 20 employees to a new address...",
  },
  "/home-clearance": {
    sk: "Napr. vypratanie 3-izbového bytu...",
    en: "E.g. clearance of a 3-bedroom apartment...",
  },
  "/home-junk-removal": {
    sk: "Napr. odvoz starého nábytku a odpadu z domu...",
    en: "E.g. junk removal from home, old furniture and appliances...",
  },
  "/basement-garage-clearance": {
    sk: "Napr. vypratanie pivnice a garáže...",
    en: "E.g. clearance of cellar and garage...",
  },
  "/basement-clearance": {
    sk: "Napr. vypratanie pivnice alebo suterénu...",
    en: "E.g. clearance of basement or cellar...",
  },
  "/furniture-removal": {
    sk: "Napr. odvoz starého nábytku na likvidáciu...",
    en: "E.g. removal of old furniture for disposal...",
  },
  "/old-furniture-removal": {
    sk: "Napr. odvoz starého nábytku a elektrospotrebičov...",
    en: "E.g. removal of old furniture and appliances...",
  },
  "/furniture-moving-removal": {
    sk: "Napr. sťahovanie a odvoz nábytku...",
    en: "E.g. moving and removal of furniture...",
  },
  "/furniture-assembly": {
    sk: "Napr. montáž postele, skrine a písacieho stola...",
    en: "E.g. assembly of bed, wardrobe and desk...",
  },
  "/kitchen-installation": {
    sk: "Napr. montáž kuchynskej linky vrátane spotrebičov...",
    en: "E.g. installation of kitchen units including appliances...",
  },
  "/handyman-services": {
    sk: "Napr. zavesenie obrazov, montáž poličiek a zrkadla...",
    en: "E.g. hanging pictures, assembling shelves and mirror...",
  },
  "/construction-waste-removal": {
    sk: "Napr. odvoz stavebného odpadu po rekonštrukcii...",
    en: "E.g. removal of construction debris after renovation...",
  },
  "/demolition-services": {
    sk: "Napr. búranie priečok a obkladov pri rekonštrukcii...",
    en: "E.g. demolition of partition walls and tiles during renovation...",
  },
  // EN prefix keys — matched by flat city pages (e.g. /moving-bratislava, /handyman-nitra)
  "/moving": {
    sk: "Napr. sťahovanie bytu alebo domu...",
    en: "E.g. moving an apartment or house...",
  },
  "/handyman": {
    sk: "Napr. zavesenie obrazov, montáž poličiek...",
    en: "E.g. handyman services, assembly or installation...",
  },
  "/demolition": {
    sk: "Napr. búranie priečok a obkladov...",
    en: "E.g. demolition of partition walls and tiles...",
  },
  // SK missing routes
  "/buranie-stien-priecok": {
    sk: "Napr. búranie priečky medzi izbami, 3-izbový byt...",
    en: "E.g. demolition of a partition wall between rooms, 3-bedroom apartment...",
  },
  "/buracie-demolacne-prace": {
    sk: "Napr. búracie práce pri rekonštrukcii bytu...",
    en: "E.g. demolition works during apartment renovation...",
  },
  "/buranie-demolacia-domov-bytov": {
    sk: "Napr. demolácia rodinného domu alebo bytu...",
    en: "E.g. demolition of a family house or apartment...",
  },
  "/odvoz-likvidacia-stavebneho-odpadu": {
    sk: "Napr. odvoz stavebného odpadu po rekonštrukcii...",
    en: "E.g. removal of construction debris after renovation...",
  },
  "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov": {
    sk: "Napr. likvidácia starých spotrebičov a nebezpečného odpadu...",
    en: "E.g. disposal of old appliances and hazardous waste...",
  },
  "/stahovanie-klavira": {
    sk: "Napr. sťahovanie klavíra, 2. poschodie, výťah nie je...",
    en: "E.g. moving a grand piano, 2nd floor, no lift...",
  },
  "/stahovanie-pianina": {
    sk: "Napr. sťahovanie klavíra, 2. poschodie, výťah nie je...",
    en: "E.g. moving a grand piano, 2nd floor, no lift...",
  },
  "/stahovanie-preprava-nabytku": {
    sk: "Napr. preprava nábytku do nového bytu, 2-izbový...",
    en: "E.g. transport of furniture to a new apartment, 2-bedroom...",
  },
  "/stahovanie-strojov-zariadeni": {
    sk: "Napr. sťahovanie priemyselného stroja, 500 kg...",
    en: "E.g. moving industrial machinery, approx. 500 kg...",
  },
  "/stahovanie-trezorov": {
    sk: "Napr. sťahovanie trezoru, hmotnosť cca 200 kg...",
    en: "E.g. moving a safe, approx. 200 kg, ground floor...",
  },
  "/vypratavanie-chalupy": {
    sk: "Napr. vypratanie chalupy vrátane pivnice a záhrady...",
    en: "E.g. clearance of a cottage including cellar and garden...",
  },
  "/vypratavanie-kancelarii": {
    sk: "Napr. vypratanie kancelárie 15 pracovných miest...",
    en: "E.g. clearance of an office with 15 workstations...",
  },
  "/vypratavanie-odvoz-stareho-nabytku": {
    sk: "Napr. odvoz starého nábytku a elektrospotrebičov...",
    en: "E.g. removal of old furniture and appliances...",
  },
  "/vypratavanie-po-rekonstrukcii": {
    sk: "Napr. vypratanie stavebného odpadu po rekonštrukcii bytu...",
    en: "E.g. clearance of renovation debris from a 3-bedroom flat...",
  },
  "/vypratavanie-pozostalosti": {
    sk: "Napr. vypratanie bytu po zosnulom, 2-izbový byt...",
    en: "E.g. estate clearance after bereavement, 2-bedroom flat...",
  },
  // EN missing routes (matched after stripping /en prefix)
  "/clearance": {
    sk: "Napr. vypratanie 3-izbového bytu...",
    en: "E.g. clearance of a 3-bedroom apartment...",
  },
  "/cottage-clearance": {
    sk: "Napr. vypratanie chalupy vrátane pivnice a záhrady...",
    en: "E.g. clearance of a cottage including cellar and garden...",
  },
  "/estate-clearance-bereavement": {
    sk: "Napr. vypratanie bytu po zosnulom, 2-izbový byt...",
    en: "E.g. estate clearance after bereavement, 2-bedroom flat...",
  },
  "/hazardous-waste-disposal": {
    sk: "Napr. likvidácia starých spotrebičov a nebezpečného odpadu...",
    en: "E.g. disposal of old appliances and hazardous waste...",
  },
  "/hazardous-waste-removal": {
    sk: "Napr. odvoz nebezpečného odpadu a starých elektrospotrebičov...",
    en: "E.g. removal of hazardous waste and old electronics...",
  },
  "/machinery-moving": {
    sk: "Napr. sťahovanie priemyselného stroja, cca 500 kg...",
    en: "E.g. moving industrial machinery, approx. 500 kg...",
  },
  "/moving-heavy-loads": {
    sk: "Napr. sťahovanie ťažkého trezoru alebo klavíra, 3. poschodie...",
    en: "E.g. moving a heavy safe or piano, 3rd floor...",
  },
  "/office-clearance": {
    sk: "Napr. vypratanie kancelárie s 15 pracovnými miestami...",
    en: "E.g. clearance of an office with 15 workstations...",
  },
  "/piano-moving": {
    sk: "Napr. sťahovanie klavíra, 2. poschodie, výťah nie je...",
    en: "E.g. moving a grand piano, 2nd floor, no lift...",
  },
  "/post-renovation-clearance": {
    sk: "Napr. vypratanie stavebného odpadu po rekonštrukcii bytu...",
    en: "E.g. clearance of renovation debris from a 3-bedroom flat...",
  },
  "/property-land-clearance": {
    sk: "Napr. vypratanie a čistenie záhrady alebo parcely...",
    en: "E.g. clearance and cleaning of a property or land plot...",
  },
  "/property-land-junk-removal": {
    sk: "Napr. odvoz odpadu zo záhrady alebo pozemku...",
    en: "E.g. junk removal from garden or land plot...",
  },
  "/safe-moving": {
    sk: "Napr. sťahovanie trezoru, hmotnosť cca 200 kg, prízemie...",
    en: "E.g. moving a safe, approx. 200 kg, ground floor...",
  },
  "/upright-piano-moving": {
    sk: "Napr. sťahovanie pianina z 3. poschodia bez výťahu...",
    en: "E.g. moving an upright piano, 3rd floor, no lift...",
  },
  "/basement-garage-junk-removal": {
    sk: "Napr. odvoz odpadu z pivnice a garáže...",
    en: "E.g. junk removal from cellar and garage...",
  },
  "/apartment-clearance": {
    sk: "Napr. vypratanie 3-izbového bytu...",
    en: "E.g. clearance of a 3-bedroom apartment...",
  },
};

const CITY_SLUGS = [
  "dunajska-streda", "banska-bystrica", "karlova-ves", "stare-mesto",
  "nove-mesto", "svaty-jur", "bernolakovo", "bratislava", "petrzalka",
  "dubravka", "ruzinov", "samorin", "komarno", "piestany", "stupava",
  "trencin", "pezinok", "malacky", "galanta", "hlohovec", "senica",
  "presov", "zilina", "kosice", "trnava", "levice", "nitra", "modra",
  "senec", "sala",
];

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

  // Dynamic placeholder based on current page
  const cleanPath = (pathname || "").replace(/^\/en/, "") || "/";
  const segments = cleanPath.split("/");
  const lastSegment = segments[segments.length - 1] || "";

  let detectedCity: string | null = null;
  let basePath = cleanPath;

  if (CITY_SLUGS.includes(lastSegment)) {
    detectedCity = lastSegment;
    basePath = segments.slice(0, -1).join("/") || "/";
  } else {
    for (const slug of CITY_SLUGS) {
      if (cleanPath.endsWith(`-${slug}`)) {
        detectedCity = slug;
        basePath = cleanPath.slice(0, cleanPath.length - slug.length - 1);
        break;
      }
    }
  }

  const cityName = detectedCity
    ? detectedCity.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : null;

  const matchedKey = Object.keys(PLACEHOLDER_MAP)
    .filter((key) => basePath === key || basePath.startsWith(key + "/") || basePath.startsWith(key + "-"))
    .sort((a, b) => b.length - a.length)[0];

  let dynamicPlaceholder: string | null = null;
  if (matchedKey) {
    const base = PLACEHOLDER_MAP[matchedKey][lang === "en" ? "en" : "sk"];
    dynamicPlaceholder = cityName
      ? base.replace(/\.\.\.$/, ` ${lang === "en" ? "in" : "v"} ${cityName}...`)
      : base;
  }

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
  // Refs for double-submit guard and stable request_id across retries within one submit
  const inFlightRef = useRef(false);
  const requestIdRef = useRef<string | null>(null);

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
      pathname.includes("/en/handyman");

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
    // Hard guard against double submit (covers React 18 strict-mode double-invokes too)
    if (isSubmitting || inFlightRef.current) return;

    // Soft phone validation: at least 9 digits, any format accepted
    const phoneDigits = (formData.phone || "").replace(/\D/g, "");
    if (phoneDigits.length < 9) {
      setSubmitError(
        lang === "en"
          ? "Please enter a valid phone number (at least 9 digits)."
          : "Zadajte platné telefónne číslo (aspoň 9 číslic)."
      );
      return;
    }

    inFlightRef.current = true;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const emailConfig = getEmailConfig();
      const serviceType =
        emailConfig.templateId === "template_cqtaia8" ? "montaz" : "general";

      // Stable request_id so retries within the same submit don't create duplicate DB rows
      if (!requestIdRef.current) {
        requestIdRef.current =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      }

      // Collect UTM attribution data (first-click + last-click)
      const utmAttribution = getUTMAttribution();
      const utmFlat = flattenUTMForEmail(utmAttribution);

      const submissionPayload = {
        request_id: requestIdRef.current,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        description: formData.description,
        consent: formData.consent,
        service_type: serviceType,
        page_url: pathname,
        ...utmFlat,
      };

      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(submissionPayload),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data?.ok) {
        throw new Error(data?.error || `Odoslanie zlyhalo (HTTP ${r.status})`);
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
      console.error("Lead submit error:", error);
      // Allow user to try again with a fresh request_id
      requestIdRef.current = null;
      setSubmitError(
        lang === "en"
          ? "An error occurred while sending. Please try again or contact us by phone."
          : "Nastala chyba pri odoslaní. Skúste to znova alebo nás kontaktujte na telefóne."
      );
    } finally {
      inFlightRef.current = false;
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
        "Napr. sťahovanie 2-izbového bytu, vypratanie bytu...",
      consent: "Odoslaním tohto formulára súhlasím so",
      privacyPolicy: "spracovaním osobných údajov",
      vop: "VOP",
      consentAnd: " a ",
      submitButton: "Získať kalkuláciu zadarmo",
      loadingText: "Spracovávam...",
      successMessage:
        "Ďakujeme za vyplnenie formulára! Budeme vás kontaktovať čo najskôr.",
      errorMessage:
        "Nastala chyba pri odoslaní. Skúste to znova alebo nás kontaktujte na telefóne.",
      afterSubmitText:
        "Po odoslaní formuláru sa s Vami spojíme a radi Vám odpovieme na všetky otázky.",
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
        "E.g. moving a 2-bedroom apartment, flat clearance...",
      consent: "By submitting this form, I agree to the",
      privacyPolicy: "processing of personal data",
      vop: "Terms of Service",
      consentAnd: " and ",
      submitButton: "Get a free quote",
      loadingText: "Processing...",
      successMessage:
        "Thank you for filling out the form! We will contact you as soon as possible.",
      errorMessage:
        "An error occurred while sending. Please try again or contact us by phone.",
      afterSubmitText:
        "After submitting the form, we'll contact you and answer all your questions.",
      closeButton: "Close",
    },
  };

  const inputBgColor = variant === "primary" ? "bg-gray-100" : "bg-white";
  const t = texts[lang];
  const vopPath = lang === "en" ? "/en/terms-of-service" : "/vseobecne-obchodne-podmienky";

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
                suppressHydrationWarning
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
                suppressHydrationWarning
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
                suppressHydrationWarning
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-0.5 text-xs text-left"
              >
                {t.description} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={dynamicPlaceholder ?? t.descriptionPlaceholder}
                rows={2}
                required
                className={`w-full p-2 ${inputBgColor} border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 text-sm`}
                suppressHydrationWarning
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
                <a
                  href={lang === "en" ? "/en/privacy-policy" : "/zasady-spracovania-osobnych-udajov"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.privacyPolicy}
                </a>
                {t.consentAnd}
                <a
                  href={vopPath}
                  className="text-accent-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.vop}
                </a>
              </label>
            </div>

            {showRating && (
              <div className="flex flex-row items-center justify-center gap-2 py-1">
                <div className="flex -space-x-1.5 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-30">
                    <Image src="/images/review-avatar-1.png" alt="Spokojná zákazníčka" width={24} height={24} className="w-full h-full object-cover" sizes="24px" />
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-20">
                    <Image src="/images/review-avatar-2.png" alt="Spokojný zákazník" width={24} height={24} className="w-full h-full object-cover" sizes="24px" />
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative z-10">
                    <Image src="/images/review-avatar-3.png" alt="Spokojná zákazníčka" width={24} height={24} className="w-full h-full object-cover" sizes="24px" />
                  </div>
                </div>
                <span className="text-yellow-500 text-base leading-none flex-shrink-0">★★★★★</span>
                <span className="text-gray-600 whitespace-nowrap text-[14px]">{lang === "en" ? "3500+ satisfied customers" : "3500+ spokojných zákazníkov"}</span>
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

            <p className="text-xs text-center text-primary-700 font-medium py-0.5">
              {lang === "en" ? "⚡ Slots fill up fast" : "⚡ Termíny sa obsadzujú rýchlo"}
            </p>

            <p className="text-center text-gray-600 text-xs">
              {t.afterSubmitText}
            </p>
          </form>
        )}
      </div>

    </>
  );
}
