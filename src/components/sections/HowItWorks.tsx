import Image from "next/image";
import Container from "@/components/ui/Container";

const MASCOT_DIR = "/images/mascot/pozy";

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  lang?: string;
  /** Póza maskota pre 3. krok „Vykonáme prácu“ (predvolene nesie krabice). */
  workMascot?: "krabice" | "kreslo";
}

export default function HowItWorks({
  title,
  subtitle,
  lang,
  workMascot = "krabice",
}: HowItWorksProps) {
  const isEn = lang === "en";

  const defaultTitle = isEn ? "How does it work?" : "Ako to funguje?";
  const defaultSubtitle = isEn
    ? "Simple and hassle-free in 3 steps"
    : "Jednoducho a bez starostí v 3 krokoch";

  const resolvedTitle = title ?? defaultTitle;
  const resolvedSubtitle = subtitle ?? defaultSubtitle;

  const steps = isEn
    ? [
        {
          heading: "Contact us",
          body: "Call us or fill in the form on our website. We respond quickly.",
          detail1: null,
          detail2: null,
        },
        {
          heading: "Inspection or appointment",
          body: null,
          detail1: "Free site inspection for larger jobs",
          detail2: "Or quick agreement on date and price",
        },
        {
          heading: "We do the work",
          body: "Our team arrives and professionally completes the job on the agreed date.",
          detail1: null,
          detail2: null,
        },
      ]
    : [
        {
          heading: "Kontaktujte nás",
          body: "Zavolajte nám alebo vyplňte formulár na stránke. Odpovieme rýchlo.",
          detail1: null,
          detail2: null,
        },
        {
          heading: "Obhliadka alebo termín",
          body: null,
          detail1: "Bezplatná obhliadka pre väčšie zákazky",
          detail2: "Alebo rýchla dohoda termínu a ceny",
        },
        {
          heading: "Vykonáme prácu",
          body: "Príde náš tím a profesionálne odvedie prácu v dohodnutom termíne.",
          detail1: null,
          detail2: null,
        },
      ];

  const mascots = [
    {
      src: `${MASCOT_DIR}/sofoservis-maskot-telefon.webp`,
      alt: isEn ? "Sofoservis gorilla mascot on the phone" : "Maskot Sofoservis – gorila telefonuje",
    },
    {
      src: `${MASCOT_DIR}/sofoservis-maskot-ok.webp`,
      alt: isEn ? "Sofoservis gorilla mascot showing OK" : "Maskot Sofoservis – gorila ukazuje OK",
    },
    workMascot === "kreslo"
      ? {
          src: `${MASCOT_DIR}/sofoservis-maskot-kreslo.webp`,
          alt: isEn ? "Sofoservis gorilla mascot carrying an old armchair" : "Maskot Sofoservis – gorila nesie staré kreslo",
        }
      : {
          src: `${MASCOT_DIR}/sofoservis-maskot-krabice.webp`,
          alt: isEn ? "Sofoservis gorilla mascot carrying boxes" : "Maskot Sofoservis – gorila nesie krabice",
        },
  ];

  return (
    <section className="cv-auto py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {resolvedTitle}
          </h3>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {resolvedSubtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-row items-center gap-4 text-left rounded-3xl bg-white p-4 pt-6 shadow-sm md:flex-col md:items-center md:gap-0 md:text-center md:px-6 md:pt-10 md:pb-7"
              >
                <span className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-base font-bold text-primary-900 shadow-md md:-top-5 md:left-1/2 md:h-10 md:w-10 md:-translate-x-1/2 md:text-lg">
                  {index + 1}
                </span>
                <Image
                  src={mascots[index].src}
                  alt={mascots[index].alt}
                  width={400}
                  height={400}
                  sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 96px"
                  className="h-auto w-24 shrink-0 md:mb-4 md:w-36 lg:w-40"
                />
                <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-1 md:mb-3">
                  {step.heading}
                </h3>
                {step.body && (
                  <p className="text-sm md:text-base text-primary-600 leading-relaxed">{step.body}</p>
                )}
                {(step.detail1 || step.detail2) && (
                  <div className="space-y-2">
                    {step.detail1 && (
                      <div className="flex items-start gap-2 text-left">
                        <span className="mt-0.5 text-accent-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </span>
                        <p className="text-primary-600 text-sm leading-relaxed">
                          {step.detail1}
                        </p>
                      </div>
                    )}
                    {step.detail2 && (
                      <div className="flex items-start gap-2 text-left">
                        <span className="mt-0.5 text-accent-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                          </svg>
                        </span>
                        <p className="text-primary-600 text-sm leading-relaxed">
                          {step.detail2}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
