import Container from "@/components/ui/Container";

interface Badge {
  icon: string;
  iconAlt: string;
  textSk: string;
  textEn: string;
}

interface TrustBadgesProps {
  lang?: "sk" | "en";
}

const badges: Badge[] = [
  {
    icon: "/icons/insurance_icon.svg",
    iconAlt: "Poistenie",
    textSk: "Poistenie nábytku zahrnuté",
    textEn: "Furniture insurance included",
  },
  {
    icon: "/icons/cash_icon.svg",
    iconAlt: "Bez poplatkov",
    textSk: "Bez skrytých poplatkov",
    textEn: "No hidden fees",
  },
  {
    icon: "/icons/document_icon.svg",
    iconAlt: "Záväzná cena",
    textSk: "Záväzná cena vopred",
    textEn: "Fixed price upfront",
  },
  {
    icon: "/icons/repair_icon.svg",
    iconAlt: "Skúsený tím",
    textSk: "Skúsený tím",
    textEn: "Experienced team",
  },
];

export default function TrustBadges({ lang = "sk" }: TrustBadgesProps) {
  return (
    <section className="bg-gray-50 py-6 border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {badges.map((badge) => (
            <div
              key={badge.textEn}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="w-9 h-9 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                <img
                  src={badge.icon}
                  alt={badge.iconAlt}
                  width={22}
                  height={22}
                />
              </div>
              <span className="text-sm font-medium text-primary-800 leading-snug">
                {lang === "en" ? badge.textEn : badge.textSk}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
