import Container from "@/components/ui/Container";

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
}

export default function HowItWorks({
  title = "Ako to funguje?",
  subtitle = "Jednoducho a bez starostí v 3 krokoch",
}: HowItWorksProps) {
  return (
    <section className="pt-10 md:pt-[60px] pb-10 md:pb-[60px] bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute top-10 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-0.5 bg-gray-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-primary-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Kontaktujte nás
              </h3>
              <p className="text-primary-600 leading-relaxed">
                Zavolajte nám alebo vyplňte formulár na stránke. Odpovieme rýchlo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-primary-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Obhliadka alebo termín
              </h3>
              <div className="space-y-2">
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
                    Bezplatná obhliadka pre väčšie zákazky
                  </p>
                </div>
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
                    Alebo rýchla dohoda termínu a ceny
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-primary-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Vykonáme prácu
              </h3>
              <p className="text-primary-600 leading-relaxed">
                Príde náš tím a profesionálne odvedie prácu v dohodnutom termíne.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
