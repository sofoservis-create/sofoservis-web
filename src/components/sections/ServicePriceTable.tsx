import Container from "@/components/ui/Container";
import Link from "next/link";

export type PriceTableVariant =
  | "stahovanie"
  | "vypratavanie"
  | "montaz-nabytku"
  | "montaz-kuchyne"
  | "handyman";

interface PriceItem {
  label: string;
  price: string;
  isHighlighted?: boolean;
}

const tables: Record<PriceTableVariant, PriceItem[]> = {
  stahovanie: [
    { label: "Obhliadka", price: "zadarmo" },
    { label: "1 pracovník", price: "30€/hod" },
    { label: "2 pracovníci", price: "60€/hod" },
    { label: "3 pracovníci - AKCIA", price: "80€/hod", isHighlighted: true },
    { label: "Každý ďalší", price: "30€/hod" },
    { label: "Vynáška bez výťahu", price: "15€/poschodie" },
    { label: "Sťahovanie v rámci mesta", price: "od 55€" },
    { label: "Sťahovanie mimo mesta", price: "0,80€/km" },
    { label: "Medzinárodné sťahovanie", price: "dohodou" },
    { label: "Sťahovanie bremien", price: "od 80€" },
    { label: "Sťahovanie skladov", price: "dohodou" },
    { label: "Sťahovanie kancelárií", price: "dohodou" },
  ],
  vypratavanie: [
    { label: "Obhliadka", price: "zadarmo" },
    { label: "1 pracovník", price: "30€/hod" },
    { label: "2 pracovníci", price: "60€/hod" },
    { label: "3 pracovníci - AKCIA", price: "80€/hod", isHighlighted: true },
    { label: "Plná dodávka 17 m²", price: "200€" },
    { label: "Pivnica klasik (kobka)", price: "od 60€" },
    { label: "Väčšia pivnica", price: "dohodou" },
    { label: "Garáž", price: "od 70€" },
    { label: "Byt jednoizbový", price: "od 200€" },
    { label: "Každá ďalšia miestnosť", price: "60€" },
  ],
  "montaz-nabytku": [
    { label: "Montáž/demontáž", price: "podľa typu nábytku" },
    { label: "Výjazd", price: "od 25€" },
  ],
  "montaz-kuchyne": [
    { label: "Montáž", price: "od 120€/m" },
    { label: "Demontáž", price: "od 60€/m" },
    { label: "Výjazd", price: "od 25€" },
  ],
  handyman: [
    { label: "Obhliadka", price: "zadarmo" },
    { label: "1 pracovník", price: "30€/hod" },
    { label: "2 pracovníci", price: "60€/hod" },
    { label: "Výjazd", price: "od 25€" },
  ],
};

interface ServicePriceTableProps {
  variant: PriceTableVariant;
  title: string;
  subtitle?: string;
}

export default function ServicePriceTable({
  variant,
  title,
  subtitle,
}: ServicePriceTableProps) {
  const items = tables[variant];

  return (
    <section className="pt-10 md:pt-[60px] pb-6 md:pb-8 bg-white">
      <Container>
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h3>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {subtitle ??
              "Transparentné ceny bez skrytých poplatkov. Presná kalkulácia po bezplatnej obhliadke."}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-200 p-6">
          <div className="space-y-3 mb-6">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                  item.isHighlighted
                    ? "bg-accent-100 font-semibold text-accent-700"
                    : "text-primary-700"
                }`}
              >
                <span className="text-sm">{item.label}</span>
                <span className="text-sm font-bold">{item.price}</span>
              </div>
            ))}
          </div>
          <Link
            href="/kontakt"
            className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-sm text-center block"
          >
            ZÍSKAŤ OBHLIADKU ZADARMO
          </Link>
        </div>
      </Container>
    </section>
  );
}
