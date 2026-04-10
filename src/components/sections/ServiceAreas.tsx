import React from "react";
import Link from "next/link";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

interface AreaItem {
  name: string;
  href: string;
}

interface ServiceAreasProps {
  title?: string;
  description?: string;
  areas?: AreaItem[];
  showCallToAction?: boolean;
  callToActionText?: string;
}

const defaultAreas: AreaItem[] = [
  { name: "Bratislava", href: "/stahovanie-bratislava" },
  { name: "Senec", href: "/stahovanie-senec" },
  { name: "Pezinok", href: "/stahovanie-pezinok" },
  { name: "Šamorín", href: "/stahovanie-samorin" },
  { name: "Malacky", href: "/stahovanie-malacky" },
  { name: "Stupava", href: "/stahovanie-stupava" },
  { name: "Trnava", href: "/stahovanie-trnava" },
  { name: "Senica", href: "/stahovanie-senica" },
  { name: "Nitra", href: "/stahovanie-nitra" },
  { name: "Hlohovec", href: "/stahovanie-hlohovec" },
  { name: "Piešťany", href: "/stahovanie-piestany" },
  { name: "Galanta", href: "/stahovanie-galanta" },
  { name: "Levice", href: "/stahovanie-levice" },
  { name: "Komárno", href: "/stahovanie-komarno" },
  { name: "Šaľa", href: "/stahovanie-sala" },
];

export default function ServiceAreas({
  title = "Kde pôsobíme",
  description = "Poskytujeme profesionálne sťahovacie služby v Bratislave a po celom Slovensku. Kontaktujte nás — sťahujeme aj vo vašej lokalite.",
  areas = defaultAreas,
  showCallToAction = true,
  callToActionText = "Sťahujeme aj vo vašej lokalite, získajte ponuku",
}: ServiceAreasProps) {
  return (
    <section className="pt-10 md:pt-[100px] pb-10 md:pb-[100px] bg-white overflow-hidden" id="oblasti">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="hover:bg-gray-50 transition-colors rounded-lg"
                prefetch={false}
              >
                <div className="flex items-center gap-2 p-3 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-accent-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-base text-primary-800 font-medium">
                    {area.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {showCallToAction && (
          <div className="mt-12">
            <CallToAction text={callToActionText} />
          </div>
        )}
      </Container>
    </section>
  );
}
