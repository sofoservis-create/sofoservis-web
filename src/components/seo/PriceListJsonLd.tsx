interface PriceOffer {
  name: string;
  description?: string;
  price: number;
  priceCurrency?: string;
  unitCode?: "HUR" | "MTR" | "KMT" | "C62";
  isMinPrice?: boolean;
}

interface PriceListJsonLdProps {
  serviceName?: string;
  url?: string;
  offers: PriceOffer[];
}

export default function PriceListJsonLd({
  serviceName = "Sťahovacie a vypratávacie služby Sofoservis",
  url = "https://www.sofoservis.sk/cennik",
  offers,
}: PriceListJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    url,
    provider: {
      "@type": "MovingCompany",
      name: "Sofoservis",
      url: "https://www.sofoservis.sk",
      telephone: "+421951735130",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressCountry: "SK",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Slovensko",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cenník služieb Sofoservis",
      itemListElement: offers.map((o) => ({
        "@type": "Offer",
        name: o.name,
        ...(o.description ? { description: o.description } : {}),
        priceCurrency: o.priceCurrency ?? "EUR",
        ...(o.isMinPrice
          ? {
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: o.price,
                priceCurrency: o.priceCurrency ?? "EUR",
                ...(o.unitCode ? { unitCode: o.unitCode } : {}),
              },
            }
          : {
              price: o.price,
              ...(o.unitCode
                ? {
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: o.price,
                      priceCurrency: o.priceCurrency ?? "EUR",
                      unitCode: o.unitCode,
                    },
                  }
                : {}),
            }),
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: o.name,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
