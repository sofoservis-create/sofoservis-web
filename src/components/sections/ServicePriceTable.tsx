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
    { label: "1 pracovník", price: "35€/hod" },
    { label: "2 pracovníci", price: "70€/hod" },
    { label: "3 pracovníci", price: "90€/hod" },
    { label: "Každý ďalší", price: "+30€/hod" },
    { label: "Vynáška bez výťahu", price: "15€/poschodie" },
    { label: "Sťahovanie v rámci mesta", price: "od 60€" },
    { label: "Sťahovanie mimo mesta", price: "0,90€/km" },
    { label: "Medzinárodné sťahovanie", price: "dohodou" },
    { label: "Sťahovanie bremien", price: "od 80€" },
    { label: "Sťahovanie skladov", price: "dohodou" },
    { label: "Sťahovanie kancelárií", price: "dohodou" },
  ],
  vypratavanie: [
    { label: "Obhliadka", price: "zadarmo" },
    { label: "1 pracovník", price: "35€/hod" },
    { label: "2 pracovníci", price: "70€/hod" },
    { label: "3 pracovníci", price: "90€/hod" },
    { label: "Plná dodávka 17 m²", price: "od 300€" },
    { label: "Pivnica klasik (kobka)", price: "od 100€" },
    { label: "Väčšia pivnica", price: "dohodou" },
    { label: "Garáž", price: "od 100€" },
    { label: "Byt jednoizbový", price: "od 400€" },
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
  /** Heading tag for the section title (default h3). */
  headingLevel?: "h2" | "h3";
}

export default function ServicePriceTable({
  variant,
  title,
  subtitle,
  headingLevel: Heading = "h3",
}: ServicePriceTableProps) {
  const items = tables[variant];

  // Long price lists split into two columns on desktop so the card stays
  // compact; on mobile everything is one full-width list.
  const twoColumns = items.length > 6;
  const splitAt = twoColumns ? Math.ceil(items.length / 2) : items.length;
  const columns = twoColumns
    ? [items.slice(0, splitAt), items.slice(splitAt)]
    : [items];

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 bg-white">
      <Container>
        <div className="text-center mb-6 md:mb-10">
          <Heading className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </Heading>
          <p className="text-base md:text-lg text-primary-600/90 max-w-2xl mx-auto">
            {subtitle ??
              "Transparentné ceny bez skrytých poplatkov. Presná kalkulácia po bezplatnej obhliadke."}
          </p>
        </div>

        <div
          className={`mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${
            twoColumns ? "max-w-xl lg:max-w-4xl" : "max-w-xl"
          }`}
        >
          <dl
            className={`px-4 sm:px-6 ${
              twoColumns ? "lg:grid lg:grid-cols-2 lg:gap-x-12 lg:px-8" : ""
            }`}
          >
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`divide-y divide-gray-100 ${
                  columnIndex > 0 ? "border-t border-gray-100 lg:border-t-0" : ""
                }`}
              >
                {column.map((item) => {
                  const isFree = item.price === "zadarmo";
                  return (
                    <div
                      key={item.label}
                      className="flex min-h-[48px] items-center justify-between gap-4 py-3"
                    >
                      <dt className="text-[15px] leading-snug text-primary-700 sm:text-base">
                        {item.label}
                      </dt>
                      <dd
                        className={`shrink-0 whitespace-nowrap text-right text-[15px] font-bold tabular-nums text-primary-900 sm:text-base ${
                          isFree || item.isHighlighted
                            ? "-my-0.5 rounded-full bg-accent-500/25 px-3 py-0.5"
                            : ""
                        }`}
                      >
                        {item.price}
                      </dd>
                    </div>
                  );
                })}
              </div>
            ))}
          </dl>

          <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
            <Link
              href="/kontakt"
              className="mx-auto flex min-h-[52px] w-full items-center justify-center rounded-xl bg-accent-500 px-6 text-center text-base font-bold text-primary-900 transition-colors duration-300 hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 sm:max-w-sm"
            >
              Získať obhliadku zadarmo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
