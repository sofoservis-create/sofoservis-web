"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
import Image from "next/image";
import Dialog from "@/components/elements/Dialog";
import { usePathname } from "next/navigation";
import { pushDataLayerEvent } from "@/lib/gtm";
import { getUTMAttribution, flattenUTMForEmail } from "@/lib/utm";
import QuickContactForm from "@/components/forms/QuickContactForm";

interface LabHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  formTitle?: string;
  formSubtitle?: string;
  ratingText?: string;
  benefits?: string[];
  narrowForm?: boolean;
  hideBadge?: boolean;
  badgeText?: string;
  lang?: "sk" | "en";
  /** Override mascot SVG path. Used for both desktop and mobile. */
  mascotSrc?: string;
  /** Multiplier on the desktop mascot scale (1 = default). */
  desktopMascotScaleMultiplier?: number;
  /** Override the desktop mascot horizontal right shift (% of mascot width). Default 0.275. */
  desktopMascotRightShiftPct?: number;
  /** When true, render the desktop mascot behind the form card (z-index below form). */
  desktopMascotBehindForm?: boolean;
  /**
   * Fixed desktop mascot bbox top in px, relative to the centered hero frame.
   * Default 0 matches the historical /stahovanie value (badge sits at frame top).
   */
  desktopMascotFixedTopPx?: number;
  /**
   * Fixed desktop mascot bbox height in px (pre-scale). The rendered height is
   * this value × desktopMascotScale. Default 728 matches the historical
   * /stahovanie value. Pages with longer hero text (e.g. /vypratavanie) can
   * override to 756 to preserve their pre-fix visual.
   */
  desktopMascotFixedHeightPx?: number;
  /**
   * When true, ignore desktopMascotFixedHeightPx/TopPx and dynamically measure
   * the mascot's vertical span (badge top → form card bottom) via DOM. Restores
   * the pre-Task-#164 behaviour for pages where the hero composition varies
   * with viewport width (e.g. homepage 3-line vs 4-line h1 wrap).
   */
  desktopMascotDynamicHeight?: boolean;
  /**
   * Minimum height (px) of the hero text column on lg+ viewports. When set,
   * reserves vertical space so the form card and mascot anchor at the same
   * position regardless of how short the title/description are. Used to lock
   * hero composition across a family of pages (e.g. all /stahovanie-* pages
   * use the largest page's height so the layout never shifts).
   */
  desktopMinHeroTextHeightPx?: number;
  /**
   * Tailwind class for description max-width on lg+ viewports.
   * Defaults to "lg:max-w-md". Use a narrower value (e.g. "lg:max-w-[20rem]")
   * on pages with very short descriptions so the text fills the reserved
   * vertical space.
   */
  desktopDescriptionMaxWidthClass?: string;
}

const LAB_HERO_TEXTS = {
  sk: {
    successMessage: "Ďakujeme za vyplnenie formulára! Budeme vás kontaktovať čo najskôr.",
    errorMessage: "Nastala chyba pri odoslaní. Skúste to znova alebo nás kontaktujte na telefóne.",
    phoneLabel: "Telefónne číslo",
    phonePlaceholder: "Zadajte telefónne číslo",
    nameLabel: "Meno a priezvisko",
    namePlaceholderShort: "Vaše meno",
    namePlaceholderLong: "Zadajte meno a priezvisko",
    emailLabel: "Email",
    emailPlaceholderShort: "Váš email",
    emailPlaceholderLong: "Zadajte email",
    descriptionLabel: "Popíšte čo potrebujete",
    descriptionPlaceholder: "Napr. sťahovanie 2-izbového bytu, vypratanie bytu...",
    avatarFemale: "Spokojná zákazníčka",
    avatarMale: "Spokojný zákazník",
    ratingDefault: "3500+ spokojných zákazníkov",
    urgency: "⚡ Termíny sa obsadzujú rýchlo",
    consentText: "Odoslaním tohto formulára súhlasím so",
    privacyLink: "spracovaním osobných údajov",
    consentAnd: "a",
    vopText: "VOP",
    submitting: "Spracovávam...",
    submit: "Získať kalkuláciu zadarmo",
    privacyTitle: "Ochrana osobných údajov",
    mascotAlt: "Sofoservis maskot",
  },
  en: {
    successMessage: "Thank you for filling out the form! We will contact you as soon as possible.",
    errorMessage: "An error occurred while sending. Please try again or contact us by phone.",
    phoneLabel: "Phone number",
    phonePlaceholder: "Enter your phone number",
    nameLabel: "Full name",
    namePlaceholderShort: "Your name",
    namePlaceholderLong: "Enter your full name",
    emailLabel: "Email",
    emailPlaceholderShort: "Your email",
    emailPlaceholderLong: "Enter your email",
    descriptionLabel: "Describe what you need",
    descriptionPlaceholder: "E.g. moving a 2-bedroom apartment, flat clearance...",
    avatarFemale: "Satisfied customer",
    avatarMale: "Satisfied customer",
    ratingDefault: "3500+ satisfied customers",
    urgency: "⚡ Slots are filling up fast",
    consentText: "By submitting this form, I agree to the",
    privacyLink: "processing of personal data",
    consentAnd: "and",
    vopText: "Terms of Service",
    submitting: "Processing...",
    submit: "Get a free quote",
    privacyTitle: "Privacy Policy",
    mascotAlt: "Sofoservis mascot",
  },
} as const;

const PLACEHOLDER_MAP: Record<string, { sk: string; en: string }> = {
  "/stahovanie-bytov-domov": { sk: "Napr. sťahovanie 3-izbového bytu...", en: "E.g. moving a 3-bedroom apartment..." },
  "/stahovanie-kancelarii-firiem": { sk: "Napr. sťahovanie kancelárie 20 zamestnancov na novú adresu...", en: "E.g. office relocation for 20 employees to a new address..." },
  "/medzinarodne-stahovanie": { sk: "Napr. sťahovanie z jednej krajiny do druhej, 2-izbový byt...", en: "E.g. international move, 2-bedroom apartment..." },
  "/stahovanie-tazkych-bremien": { sk: "Napr. odvoz a sťahovanie ťažkého nábytku alebo strojov...", en: "E.g. removal and transport of heavy furniture or machinery..." },
  "/vypratavanie-bytov-domov": { sk: "Napr. vypratanie 3-izbového bytu po sťahovaní...", en: "E.g. clearance of a 3-bedroom apartment after moving..." },
  "/vypratavanie-pivnic-garazi-nebytovych-priestorov": { sk: "Napr. vypratanie pivnice a garáže v bytovom dome...", en: "E.g. clearance of cellar and garage in apartment building..." },
  "/cistenie-vypratavanie-pozemkov-nehnutelnosti": { sk: "Napr. vypratanie a čistenie záhrady alebo parcely...", en: "E.g. clearance and cleaning of a property or land plot..." },
  "/montaz-nabytku": { sk: "Napr. montáž postele, skrine a písacieho stola...", en: "E.g. assembly of bed, wardrobe and desk..." },
  "/montaz-kuchyne": { sk: "Napr. montáž kuchynskej linky vrátane spotrebičov...", en: "E.g. installation of kitchen units including appliances..." },
  "/hodinovy-manzel-majster": { sk: "Napr. zavesenie obrazov, montáž poličiek a zrkadla...", en: "E.g. hanging pictures, assembling shelves and mirror..." },
  "/stahovanie": { sk: "Napr. sťahovanie bytu alebo domu...", en: "E.g. moving an apartment or house..." },
  "/vypratavanie": { sk: "Napr. vypratanie bytu, domu alebo záhrady...", en: "E.g. clearance of an apartment, house or garden..." },
  "/international-moving-services": { sk: "Napr. sťahovanie z jednej krajiny do druhej...", en: "E.g. international move, 2-bedroom apartment..." },
  "/apartment-moving": { sk: "Napr. sťahovanie 3-izbového bytu...", en: "E.g. moving a 3-bedroom apartment..." },
  "/office-moving": { sk: "Napr. sťahovanie kancelárie 20 zamestnancov...", en: "E.g. office relocation for 20 employees to a new address..." },
  "/home-clearance": { sk: "Napr. vypratanie 3-izbového bytu...", en: "E.g. clearance of a 3-bedroom apartment..." },
  "/home-junk-removal": { sk: "Napr. odvoz starého nábytku a odpadu z domu...", en: "E.g. junk removal from home, old furniture and appliances..." },
  "/basement-garage-clearance": { sk: "Napr. vypratanie pivnice a garáže...", en: "E.g. clearance of cellar and garage..." },
  "/furniture-assembly": { sk: "Napr. montáž postele, skrine a písacieho stola...", en: "E.g. assembly of bed, wardrobe and desk..." },
  "/kitchen-installation": { sk: "Napr. montáž kuchynskej linky vrátane spotrebičov...", en: "E.g. installation of kitchen units including appliances..." },
  "/handyman-services": { sk: "Napr. zavesenie obrazov, montáž poličiek a zrkadla...", en: "E.g. hanging pictures, assembling shelves and mirror..." },
  "/moving": { sk: "Napr. sťahovanie bytu alebo domu...", en: "E.g. moving an apartment or house..." },
  "/handyman": { sk: "Napr. zavesenie obrazov, montáž poličiek...", en: "E.g. handyman services, assembly or installation..." },
};

const CITY_SLUGS = [
  "dunajska-streda", "banska-bystrica", "karlova-ves", "stare-mesto",
  "nove-mesto", "svaty-jur", "bernolakovo", "bratislava", "petrzalka",
  "dubravka", "ruzinov", "samorin", "komarno", "piestany", "stupava",
  "trencin", "pezinok", "malacky", "galanta", "hlohovec", "senica",
  "presov", "zilina", "kosice", "trnava", "levice", "nitra", "modra",
  "senec", "sala",
];

// Note: EmailJS sending now happens server-side via /api/lead.
// EMAIL_ROUTING here is only used to compute serviceType ("montaz" vs "general")
// from the current path. The server re-derives the same routing in src/lib/leads/routing.ts.

const EMAIL_ROUTING = {
  "/montaz-nabytku": { templateId: "template_cqtaia8" },
  "/montaz-kuchyne": { templateId: "template_cqtaia8" },
  "/hodinovy-manzel-majster": { templateId: "template_cqtaia8" },
  default: { templateId: "template_y6oz64j" },
};

// Mascot constants (narrowForm path)
// MASCOT_ASPECT: width/height of /images/mascot/mascot-holding-boxes.svg (1080 x 1080).
// GLOW_HALF_WIDTH: half of the 542px glow circle, used to center it behind the mascot.
const MASCOT_ASPECT = 1080 / 1080;
const GLOW_HALF_WIDTH = 271;

// Desktop visual calibration (narrowForm path) — tuned for the /lab2 composition.
// Base desktop mascot scale is 1.1608; pages can multiply via desktopMascotScaleMultiplier.
const DESKTOP_MASCOT_RIGHT = -8;       // px, fixed overflow past frame right
const DESKTOP_MASCOT_TOP_SHIFT = 0;    // px, flush with badge top
const DESKTOP_MASCOT_TOP_SHIFT_PCT = -0.07;  // shift mascot up by % of its own height
const DESKTOP_MASCOT_RIGHT_SHIFT_PCT = 0.275; // shift mascot right by % of its own width
// Glow offsets relative to mascot center (% of glow diameter, 542px).
const DESKTOP_GLOW_LEFT_PCT = 0.04;    // +X moves glow left
const DESKTOP_GLOW_UP_PCT = 0.05;      // +Y moves glow up

export default function LabHero({
  title = "Sťahovanie, vypratávanie a montáž nábytku – s najlepším hodnotením",
  description = "Sofoservis je najlepšie hodnotená spoločnosť svojho druhu. Viac ako 3500 spokojných zákazníkov a stovky 5-hviezdičkových recenzií.",
  backgroundImage = "/images/sofoservis-zamestnanci-hero.avif",
  formTitle = "Dohodnite si kalkuláciu úplne zadarmo",
  formSubtitle = "Vyplňte formulár a získajte nezáväznú ponuku ešte dnes",
  ratingText = "3500+ spokojných zákazníkov",
  benefits = ["Sťahovanie", "Vypratávanie", "Montáž nábytku"],
  narrowForm = false,
  hideBadge = false,
  badgeText,
  lang = "sk",
  mascotSrc = "/images/mascot/crossed-hands-mascot.svg",
  desktopMascotScaleMultiplier = 1,
  desktopMascotRightShiftPct,
  desktopMascotBehindForm = false,
  desktopMascotFixedTopPx = 0,
  desktopMascotFixedHeightPx = 728,
  desktopMascotDynamicHeight = true,
  desktopMinHeroTextHeightPx,
  desktopDescriptionMaxWidthClass = "lg:max-w-md",
}: LabHeroProps) {
  const desktopMascotScale = 1.1608 * desktopMascotScaleMultiplier;
  const desktopMascotRightShift = desktopMascotRightShiftPct ?? DESKTOP_MASCOT_RIGHT_SHIFT_PCT;
  const pathname = usePathname();
  const t = LAB_HERO_TEXTS[lang];
  const vopHref = lang === "en" ? "/en/terms-of-service" : "/vseobecne-obchodne-podmienky";

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
    const base = PLACEHOLDER_MAP[matchedKey][lang];
    const cityConnector = lang === "en" ? `in ${cityName}` : `v ${cityName}`;
    dynamicPlaceholder = cityName ? base.replace(/\.\.\.$/, ` ${cityConnector}...`) : base;
  }

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", description: "", consent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const formBodyRef = useRef<HTMLDivElement>(null);
  const heroFrameRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [frozenBodyHeight, setFrozenBodyHeight] = useState<number | null>(null);
  const [dynamicMascotDims, setDynamicMascotDims] = useState<{ top: number; height: number } | null>(null);

  // Mascot dimensions: by default FIXED constants (stable, no "breathing").
  // Pages where hero composition varies with viewport (e.g. homepage h1 wrap)
  // can opt into dynamic DOM measurement via desktopMascotDynamicHeight.
  // When dynamic measurement is enabled, wait for the actual measurement before
  // rendering the mascot — otherwise it briefly flashes at the fixed-fallback
  // size and then snaps to the measured size, causing a visible jump.
  const mascotDims = narrowForm
    ? (desktopMascotDynamicHeight
        ? dynamicMascotDims
        : { top: desktopMascotFixedTopPx, height: desktopMascotFixedHeightPx })
    : null;

  // Optional dynamic measurement (opt-in). Measures badge top → form card bottom
  // and re-measures on resize so the mascot tracks the actual hero composition.
  // Uses layout effect so the measurement runs synchronously before the browser
  // paints — preventing a flash of mascot at the fixed-fallback size.
  useIsomorphicLayoutEffect(() => {
    if (!narrowForm || !desktopMascotDynamicHeight) return;
    const compute = () => {
      const frame = heroFrameRef.current;
      const badge = badgeRef.current;
      const formCard = formCardRef.current;
      if (!frame || !badge || !formCard) return;
      const frameRect = frame.getBoundingClientRect();
      const badgeRect = badge.getBoundingClientRect();
      const formCardRect = formCard.getBoundingClientRect();
      const top = badgeRect.top - frameRect.top;
      const height = formCardRect.bottom - badgeRect.top;
      setDynamicMascotDims({ top, height });
    };
    compute();
    let cancelled = false;
    const docFonts = (typeof document !== "undefined" ? (document as Document & { fonts?: { ready?: Promise<unknown> } }).fonts : undefined);
    if (docFonts?.ready) {
      docFonts.ready.then(() => { if (!cancelled) compute(); });
    }
    const ro = new ResizeObserver(() => compute());
    [heroFrameRef.current, badgeRef.current, formCardRef.current].forEach((el) => { if (el) ro.observe(el); });
    window.addEventListener("resize", compute);
    return () => { cancelled = true; ro.disconnect(); window.removeEventListener("resize", compute); };
  }, [narrowForm, desktopMascotDynamicHeight, submitSuccess]);

  // Measure form body height while form is visible; freeze it when success takes over
  // so the card (and therefore the mascot/glow) keeps the same size.
  useEffect(() => {
    if (submitSuccess) return;
    const el = formBodyRef.current;
    if (!el) return;
    const update = () => {
      const h = el.offsetHeight;
      if (h > 0) setFrozenBodyHeight(h);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [submitSuccess]);
  const [isPrivacyDialogOpen, setIsPrivacyDialogOpen] = useState(false);
  const inFlightRef = useRef(false);
  const requestIdRef = useRef<string | null>(null);

  const getEmailConfig = () => {
    if (EMAIL_ROUTING[pathname as keyof typeof EMAIL_ROUTING]) {
      return EMAIL_ROUTING[pathname as keyof typeof EMAIL_ROUTING];
    }
    const isFurnitureAssembly =
      pathname.includes("/montaz-nabytku") ||
      pathname.includes("/montaz-kuchyne") ||
      pathname.includes("/en/furniture-assembly") ||
      pathname.includes("/en/kitchen-installation");
    const isHandymanService =
      pathname.includes("/hodinovy-manzel-majster") ||
      pathname.includes("/en/handyman");
    if (isFurnitureAssembly) return EMAIL_ROUTING["/montaz-nabytku"];
    if (isHandymanService) return EMAIL_ROUTING["/hodinovy-manzel-majster"];
    return EMAIL_ROUTING.default;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const serviceType = emailConfig.templateId === "template_cqtaia8" ? "montaz" : "general";
      const utmAttribution = getUTMAttribution();
      const utmFlat = flattenUTMForEmail(utmAttribution);

      if (!requestIdRef.current) {
        requestIdRef.current =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      }

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
      }

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", description: "", consent: false });
    } catch (error) {
      console.error("Form error:", error);
      requestIdRef.current = null;
      setSubmitError(t.errorMessage);
    } finally {
      inFlightRef.current = false;
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500";

  return (
    <>
      <section
        ref={sectionRef}
        className="relative pt-14 pb-6 md:pt-36 md:pb-8 lg:pt-40 bg-primary-900"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt={`Sťahovacie služby - ${title}`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-top md:object-center lg:[object-position:center_85%]"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #000000b3 0% 50%, #000000a6 100%)' }} />
        </div>

        {/* Non-narrowForm: mascot + glow remain at section level (preserves
            existing live pages — they were not part of the wide-screen drift bug). */}
        {!narrowForm && (
          <>
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{
                top: '156px',
                right: 'calc(13% - 35px)',
                width: '542px',
                height: '542px',
                borderRadius: '50%',
                background: '#fdc70033',
                filter: 'blur(100px)',
                zIndex: 4,
              }}
            />
            <Image
              src="/images/mascot.png"
              alt={t.mascotAlt}
              width={473}
              height={647}
              priority
              className="absolute hidden lg:block pointer-events-none select-none"
              style={{ top: '104px', right: '5%', height: '647px', width: 'auto', zIndex: 5 }}
              sizes="473px"
            />
          </>
        )}

        {/* Shared centered frame — positioning context for narrowForm mascot,
            glow, text content, and form card. Anchors them all to the same
            max-w-7xl rail so the mascot can no longer drift on wide viewports. */}
        <div
          ref={heroFrameRef}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-visible"
        >
          {/* narrowForm: glow + mascot inside the shared frame.
              right is a small negative px offset for controlled overflow past the frame edge.
              Glow right is computed dynamically so the 542px circle stays centered behind
              the mascot regardless of mascotDims.height. */}
          {narrowForm && mascotDims && (() => {
            const mascotH = mascotDims.height * desktopMascotScale;
            const mascotW = mascotDims.height * MASCOT_ASPECT * desktopMascotScale;
            const mascotTopPx = mascotDims.top + DESKTOP_MASCOT_TOP_SHIFT + mascotH * DESKTOP_MASCOT_TOP_SHIFT_PCT;
            const mascotRightPx = DESKTOP_MASCOT_RIGHT - mascotW * desktopMascotRightShift;
            const mascotCenterY = mascotTopPx + mascotH / 2;
            const mascotCenterRight = mascotRightPx + mascotW / 2;
            const glowDiameter = GLOW_HALF_WIDTH * 2;
            const glowCenterY = mascotCenterY - glowDiameter * DESKTOP_GLOW_UP_PCT;
            const glowCenterRight = mascotCenterRight + glowDiameter * DESKTOP_GLOW_LEFT_PCT;
            return (
            <>
              <div
                className="absolute hidden lg:block pointer-events-none"
                style={{
                  top: `${glowCenterY - GLOW_HALF_WIDTH}px`,
                  right: `${glowCenterRight - GLOW_HALF_WIDTH}px`,
                  width: '542px',
                  height: '542px',
                  borderRadius: '50%',
                  background: '#fdc70033',
                  filter: 'blur(100px)',
                  zIndex: 4,
                }}
              />
              <Image
                src={mascotSrc}
                alt={t.mascotAlt}
                width={647}
                height={647}
                priority
                unoptimized={mascotSrc.endsWith(".svgz")}
                className="absolute hidden lg:block pointer-events-none select-none"
                style={{
                  top: `${mascotDims.top + DESKTOP_MASCOT_TOP_SHIFT + mascotDims.height * desktopMascotScale * DESKTOP_MASCOT_TOP_SHIFT_PCT}px`,
                  right: `${DESKTOP_MASCOT_RIGHT - mascotDims.height * MASCOT_ASPECT * desktopMascotScale * desktopMascotRightShift}px`,
                  height: `${mascotDims.height * desktopMascotScale}px`,
                  width: 'auto',
                  zIndex: desktopMascotBehindForm ? 5 : 20,
                }}
                sizes="473px"
              />
            </>
            );
          })()}

          {/* Text content — z-[25] so it renders above the mascot (z-20) */}
          <div className="relative z-[25]">

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            <div
              className="w-full lg:w-3/5 space-y-3 md:space-y-5 text-center lg:text-left lg:min-h-[var(--hero-text-min-h,0px)] lg:flex lg:flex-col lg:items-start"
              style={desktopMinHeroTextHeightPx ? ({ ["--hero-text-min-h" as string]: `${desktopMinHeroTextHeightPx}px` } as React.CSSProperties) : undefined}
            >
              {(hideBadge && !badgeText)
                ? <div ref={badgeRef} className="h-0 w-0 overflow-hidden" aria-hidden="true" />
                : <div ref={badgeRef} className="inline-flex w-fit items-center py-1.5 px-4 rounded-full bg-accent-500/20 text-accent-500 font-medium text-sm mb-1 md:mb-0% lg:self-start mx-auto lg:mx-0">
                    <span className="mr-2">✓</span> {badgeText ?? "Poskytujeme služby 6 dní v týždni"}
                  </div>
              }

              <div className="space-y-3 md:space-y-5 w-full lg:flex-1 lg:flex lg:flex-col">
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                >
                  <span className="relative">
                    {title}
                    <span className="absolute -right-4 text-accent-500">.</span>
                  </span>
                </h1>

                <div className={`block text-base lg:text-xl text-white/90 max-w-xl ${desktopDescriptionMaxWidthClass} leading-relaxed mx-auto lg:mx-0`}>
                  <p>{description}</p>
                </div>
              </div>

              {/* Phone CTA — mobile only */}
              <div className="block lg:hidden">
                <a
                  href="tel:0951735130"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-lg text-primary-900 bg-accent-500 hover:bg-accent-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Zavolajte nám
                </a>
              </div>

              <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2 flex-shrink-0">
                  {[
                    { src: "/images/review-avatar-1.png", alt: "Spokojná zákazníčka Sofoservis" },
                    { src: "/images/review-avatar-2.png", alt: "Spokojný zákazník Sofoservis" },
                    { src: "/images/review-avatar-3.png", alt: "Spokojná zákazníčka Sofoservis recenzie" },
                  ].map((av, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30 relative ${i === 0 ? 'z-30' : i === 1 ? 'z-20' : 'z-10'}`}>
                      <Image src={av.src} alt={av.alt} width={36} height={36} className="w-full h-full object-cover" sizes="36px" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-white/80 text-sm text-center">{ratingText}</div>
              </div>

              <div className="hidden lg:flex lg:flex-wrap lg:justify-start lg:items-center gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center">
                    <div className="p-1.5 bg-accent-500 rounded-full flex-shrink-0 mb-1 sm:mb-0 sm:mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-900">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium text-center sm:text-left">{benefit}</span>
                  </div>
                ))}
              </div>
              {/* Mobile mascot — sits below the reviews row, peeks behind the form */}
              <div
                className="lg:hidden relative z-0 pointer-events-none"
                style={{ marginTop: '-6px', marginBottom: '-188px', height: '630px' }}
              >
                <div
                  className="absolute"
                  style={{ width: '630px', height: '630px', left: '50%', transform: 'translateX(calc(-50% + 19px))' }}
                >
                  {/* Glow ellipse behind mascot, offset 4% left + 5% up like desktop */}
                  <div
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: '423px',
                      height: '423px',
                      borderRadius: '50%',
                      background: '#fdc70033',
                      filter: 'blur(100px)',
                      transform: `translate(calc(-50% - ${423 * DESKTOP_GLOW_LEFT_PCT}px), calc(-50% - ${423 * (DESKTOP_GLOW_UP_PCT + 0.11)}px))`,
                      zIndex: 0,
                    }}
                  />
                  <Image
                    src={mascotSrc}
                    unoptimized={mascotSrc.endsWith(".svgz")}
                    alt={t.mascotAlt}
                    width={630}
                    height={630}
                    className="select-none relative"
                    style={{ zIndex: 10, maxWidth: 'none', width: '630px', height: '630px' }}
                  />
                </div>
              </div>
              {/* Mobile inline form — mirrors live Hero behaviour */}
              <div className="block lg:hidden relative z-10" style={{ marginTop: '-314px' }}>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-accent-500 text-primary-900 py-2.5 px-6">
                    <h3 className="text-lg font-bold text-center">{formTitle}</h3>
                    {formSubtitle && <p className="text-sm text-center text-primary-900/80 mt-1">{formSubtitle}</p>}
                  </div>
                  <div className="p-4">
                    <QuickContactForm variant="primary" lang={lang} />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-2/5" aria-hidden="true" />
          </div>
          </div>

        {/* Form card — z-10 so mascot (z-20) overlaps it */}
        <div className="relative z-10 mt-5">
          <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12`}>
          <div ref={formCardRef} className={`hidden lg:block bg-white rounded-xl shadow-2xl overflow-hidden${narrowForm ? " lg:w-3/5 w-full" : ""}`}>
            <div className={`bg-accent-500 text-primary-900 px-6 ${narrowForm ? "py-2 text-center" : "py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"}`}>
              <h3 className="text-lg font-bold">{formTitle}</h3>
              {formSubtitle && <p className={`text-sm text-primary-900/80 ${narrowForm ? "mt-0.5" : ""}`}>{formSubtitle}</p>}
            </div>

            <div
              ref={formBodyRef}
              className={narrowForm ? "p-3 md:p-4" : "p-4 md:p-5"}
              style={submitSuccess && frozenBodyHeight ? { minHeight: `${frozenBodyHeight}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' } : undefined}
            >
              {submitSuccess ? (
                <div className="form-submission-success bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 md:p-8 w-full">
                  <div className="flex flex-col items-center text-center gap-3">
                    <svg className="h-12 w-12 md:h-14 md:w-14 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg md:text-xl font-medium leading-snug">{t.successMessage}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3">
                      <p className="text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Row 1: Phone / Name / Email */}
                  {narrowForm ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.phoneLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder={t.phonePlaceholder} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.nameLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t.namePlaceholderShort} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.emailLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t.emailPlaceholderShort} className={inputClass} />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.phoneLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder={t.phonePlaceholder} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.nameLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t.namePlaceholderLong} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          {t.emailLabel} <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t.emailPlaceholderLong} className={inputClass} />
                      </div>
                    </div>
                  )}

                  {/* Row 2: Description textarea */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">{t.descriptionLabel} <span className="text-red-500">*</span></label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder={dynamicPlaceholder ?? t.descriptionPlaceholder}
                      rows={narrowForm ? 2 : 3}
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Social proof + urgency */}
                  <div className="flex flex-col items-stretch gap-2 py-0.5">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <div className="flex -space-x-1.5 flex-shrink-0">
                        {[
                          { src: "/images/review-avatar-1.png", alt: t.avatarFemale, z: "z-30" },
                          { src: "/images/review-avatar-2.png", alt: t.avatarMale, z: "z-20" },
                          { src: "/images/review-avatar-3.png", alt: t.avatarFemale, z: "z-10" },
                        ].map((av, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full overflow-hidden ring-1 ring-white relative ${av.z}`}>
                            <Image src={av.src} alt={av.alt} width={24} height={24} className="w-full h-full object-cover" sizes="24px" />
                          </div>
                        ))}
                      </div>
                      <span className="text-yellow-500 text-base leading-none flex-shrink-0">★★★★★</span>
                      <span className="text-gray-600 text-sm text-center">{t.ratingDefault}</span>
                    </div>
                    <p className="text-sm text-primary-700 font-medium text-center">{t.urgency}</p>
                  </div>

                  {/* Consent */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="lab-consent"
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
                      htmlFor="lab-consent"
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          setFormData((prev) => ({ ...prev, consent: !prev.consent }));
                        }
                      }}
                      className="text-xs text-gray-600 cursor-pointer"
                    >
                      {t.consentText}{" "}
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsPrivacyDialogOpen(true); }}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsPrivacyDialogOpen(true); } }}
                        className="text-accent-600 hover:underline focus:outline-none"
                      >
                        {t.privacyLink}
                      </span>
                      {" "}{t.consentAnd}{" "}
                      <a
                        href={vopHref}
                        className="text-accent-600 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.vopText}
                      </a>
                    </label>
                  </div>

                  {/* Full-width CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold tracking-wide py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-base ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-primary-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.submitting}
                      </span>
                    ) : (
                      t.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5" aria-hidden="true" />
          </div>

        </div>
        </div>
      </section>

      <Dialog
        isOpen={isPrivacyDialogOpen}
        onClose={() => setIsPrivacyDialogOpen(false)}
        title={t.privacyTitle}
        className="w-full max-w-6xl mx-4 sm:mx-6 lg:mx-8 my-8"
      >
        <div className="px-2 py-4">
          <div className="prose prose-sm max-w-none text-primary-700 space-y-6 leading-relaxed">
            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded-r-lg">
              <p className="text-primary-800 font-medium"><strong>Vážení zákazníci,</strong></p>
              <p className="mt-2 text-primary-700">
                týmto dokumentom by sme Vám radi vysvetlili ako, a s akým cieľom
                používame Vaše osobné údaje a aké máte práva a možnosti v tejto oblasti.
              </p>
            </div>
            <div className="space-y-6">
              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  KTO JE ZODPOVEDNÝ ZA VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-primary-800 leading-relaxed">
                    <strong>Sofian &ldquo;Sofo&rdquo; Hidbani – SofoServis</strong><br />
                    Doležalová 9,<br />
                    821 04 Bratislava,<br />
                    SLOVENSKÁ REPUBLIKA,<br />
                    IČO: 52332225
                  </p>
                  <p className="mt-3 text-primary-700">je zodpovedným prevádzkovateľom Vašich osobných údajov.</p>
                </div>
              </section>
              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  NA AKÉ ÚČELY POUŽÍVAME VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <p className="text-primary-700 leading-relaxed">
                  Vaše osobné údaje spracovávame v takom rozsahu, v akom to je nutné v súvislosti
                  s poskytovaním našich servisných služieb.
                </p>
              </section>
              <section>
                <h4 className="text-lg font-bold text-primary-900 mb-3 pb-2 border-b border-accent-200">
                  AKO CHRÁNIME VAŠE OSOBNÉ ÚDAJE?
                </h4>
                <p className="text-primary-700 leading-relaxed">
                  Na ochranu Vašich osobných údajov pred neoprávneným prístupom alebo zneužitiu
                  využívame fyzické, elektronické a procedurálne bezpečnostné opatrenia.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
