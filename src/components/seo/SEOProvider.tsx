// src/components/seo/SEOProvider.tsx

interface ServiceData {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
}

interface BreadcrumbItem {
  "@type": string;
  position: number;
  name: string;
  item: string;
}

interface StructuredDataSchema {
  "@context": string;
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
}

const SERVICE_MAPPING: Record<string, ServiceData> = {
  "/stahovanie-bytov-domov": {
    serviceName: "Sťahovanie bytov a domov",
    serviceDescription:
      "Profesionálne sťahovanie bytov a rodinných domov s kompletným servisom vrátane balenia, prepravy a vybalenia",
    serviceType: "ResidentialMovingService",
  },
  "/stahovanie-kancelarii-firiem": {
    serviceName: "Sťahovanie kancelárií a firiem",
    serviceDescription:
      "Sťahovanie kancelárií s minimálnym výpadkom prevádzky, vrátane IT technológií",
    serviceType: "OfficeMovingService",
  },
  "/medzinarodne-stahovanie": {
    serviceName: "Medzinárodné sťahovanie",
    serviceDescription: "Sťahovanie do zahraničia a zo zahraničia na Slovensko",
    serviceType: "InternationalMovingService",
  },
  "/buracie-prace": {
    serviceName: "Búracie práce",
    serviceDescription:
      "Profesionálne búranie a demolácia objektov s povoleniami a odvozom sute",
    serviceType: "DemolitionService",
  },
  "/montaz-nabytku": {
    serviceName: "Montáž a skladanie nábytku",
    serviceDescription: "Profesionálna montáž všetkých typov nábytku",
    serviceType: "FurnitureAssemblyService",
  },
  "/montaz-kuchyne": {
    serviceName: "Montáž kuchyne",
    serviceDescription: "Profesionálna montáž kuchynskej linky a kuchynského nábytku",
    serviceType: "FurnitureAssemblyService",
  },
  "/vypratavanie/vypratavanie-bytov-domov": {
    serviceName: "Vypratávanie bytov a domov",
    serviceDescription:
      "Kompletné vypratanie a čistenie nehnuteľností vrátane likvidácie odpadu",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/vypratavanie-bytov-domov/bratislava": {
    serviceName: "Vypratávanie bytov a domov Bratislava",
    serviceDescription:
      "Kompletné vypratanie bytov a domov v Bratislave vrátane likvidácie odpadu",
    serviceType: "PropertyClearanceService",
  },
  "/hodinovy-manzel-majster": {
    serviceName: "Hodinový manžel a majster",
    serviceDescription: "Drobné opravy a údržba v domácnosti",
    serviceType: "HandymanService",
  },
  "/stahovanie-preprava-nabytku": {
    serviceName: "Sťahovanie a preprava nábytku",
    serviceDescription: "Bezpečná preprava a sťahovanie nábytku všetkých typov",
    serviceType: "FurnitureMovingService",
  },
  "/stahovanie-tazkych-bremien": {
    serviceName: "Sťahovanie ťažkých bremien",
    serviceDescription:
      "Špecializované sťahovanie pianín, trezórov a ťažkých predmetov",
    serviceType: "HeavyItemMovingService",
  },
  "/vypratavanie/odvoz-stareho-nabytku": {
    serviceName: "Vypratávanie a odvoz starého nábytku",
    serviceDescription: "Odvoz a likvidácia starého nábytku a objemného odpadu",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/vypratavanie-pivnic-a-garazi": {
    serviceName: "Vypratávanie pivníc a garáží",
    serviceDescription: "Kompletné vypratanie pivníc, garáží a nebytových priestorov",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu": {
    serviceName: "Odvoz a likvidácia stavebného odpadu",
    serviceDescription: "Profesionálny odvoz a ekologická likvidácia stavebného odpadu",
    serviceType: "WasteRemovalService",
  },
  "/odvoz-likvidacia-stavebneho-odpadu": {
    serviceName: "Odvoz a likvidácia stavebného odpadu",
    serviceDescription: "Profesionálny odvoz a ekologická likvidácia stavebného odpadu",
    serviceType: "WasteRemovalService",
  },
  "/buracie-prace/buranie-stien-priecok": {
    serviceName: "Búranie stien a priečok",
    serviceDescription: "Búranie vnútorných stien a priečok s odvozom materiálu",
    serviceType: "DemolitionService",
  },
  "/buracie-prace/buranie-demolacia-domov": {
    serviceName: "Búranie a demolácia domov a budov",
    serviceDescription: "Kompletná demolácia rodinných domov a budov",
    serviceType: "DemolitionService",
  },
  "/vypratavanie/cistenie-vypratavanie-pozemkov": {
    serviceName: "Čistenie a vypratávanie pozemkov",
    serviceDescription: "Komplexné čistenie a vypratávanie pozemkov a nehnuteľností",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/likvidacia-nebezpecneho-odpadu": {
    serviceName: "Likvidácia nebezpečného odpadu",
    serviceDescription: "Ekologická likvidácia nebezpečného odpadu a starých spotrebičov",
    serviceType: "WasteRemovalService",
  },
  "/stahovanie-klavira": {
    serviceName: "Sťahovanie klavíra a pianína",
    serviceDescription: "Špecializované sťahovanie klavírov a pianín",
    serviceType: "HeavyItemMovingService",
  },
  "/stahovanie-na-slovensko": {
    serviceName: "Sťahovanie na Slovensko",
    serviceDescription: "Medzinárodné sťahovanie na Slovensko zo zahraničia",
    serviceType: "InternationalMovingService",
  },
  "/stahovanie-zo-slovenska": {
    serviceName: "Sťahovanie zo Slovenska",
    serviceDescription: "Medzinárodné sťahovanie zo Slovenska do zahraničia",
    serviceType: "InternationalMovingService",
  },
  "/vypratavanie-pozostalosti": {
    serviceName: "Vypratávanie pozostalosti",
    serviceDescription: "Citlivé a profesionálne vypratávanie pozostalosti",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie-kancelarii": {
    serviceName: "Vypratávanie kancelárií",
    serviceDescription: "Rýchle a kompletné vypratávanie kancelárskych priestorov",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie-po-rekonstrukcii": {
    serviceName: "Vypratávanie po rekonštrukcii",
    serviceDescription: "Čistenie a odvoz odpadu po rekonštrukcii",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie-chalupy": {
    serviceName: "Vypratávanie chalupy",
    serviceDescription: "Kompletné vypratávanie chalúp a rekreačných nehnuteľností",
    serviceType: "PropertyClearanceService",
  },
};

const CITY_MAPPING: Record<string, string> = {
  bratislava: "Bratislava",
  nitra: "Nitra",
  trnava: "Trnava",
  pezinok: "Pezinok",
  galanta: "Galanta",
  levice: "Levice",
  piestany: "Piešťany",
  sala: "Šaľa",
  samorin: "Šamorín",
  senec: "Senec",
  senica: "Senica",
  stupava: "Stupava",
  komarno: "Komárno",
  malacky: "Malacky",
  hlohovec: "Hlohovec",
  "stahovanie-bratislava": "Bratislava",
  "stahovanie-nitra": "Nitra",
  "stahovanie-trnava": "Trnava",
  "stahovanie-pezinok": "Pezinok",
  "stahovanie-senec": "Senec",
  "stahovanie-malacky": "Malacky",
  "stahovanie-galanta": "Galanta",
  "stahovanie-levice": "Levice",
  "stahovanie-piestany": "Piešťany",
  "stahovanie-sala": "Šaľa",
  "stahovanie-komarno": "Komárno",
  "stahovanie-senica": "Senica",
  "stahovanie-stupava": "Stupava",
  "stahovanie-hlohovec": "Hlohovec",
  "stahovanie-samorin": "Šamorín",
  "stahovanie-petrzalka": "Petržalka",
  "stahovanie-ruzinov": "Ružinov",
  "stahovanie-stare-mesto": "Staré Mesto",
  "stahovanie-nove-mesto": "Nové Mesto",
  "stahovanie-karlova-ves": "Karlova Ves",
  "stahovanie-dubravka": "Dúbravka",
  "vypratavanie-bratislava": "Bratislava",
  "vypratavanie-nitra": "Nitra",
  "vypratavanie-trnava": "Trnava",
  "vypratavanie-pezinok": "Pezinok",
  "vypratavanie-senec": "Senec",
  "vypratavanie-malacky": "Malacky",
  "vypratavanie-galanta": "Galanta",
  "vypratavanie-levice": "Levice",
  "vypratavanie-piestany": "Piešťany",
  "vypratavanie-komarno": "Komárno",
  "vypratavanie-senica": "Senica",
  "vypratavanie-stupava": "Stupava",
  "vypratavanie-hlohovec": "Hlohovec",
  "vypratavanie-samorin": "Šamorín",
  "vypratavanie-petrzalka": "Petržalka",
  "vypratavanie-ruzinov": "Ružinov",
  "vypratavanie-stare-mesto": "Staré Mesto",
  "vypratavanie-nove-mesto": "Nové Mesto",
  "vypratavanie-karlova-ves": "Karlova Ves",
  "vypratavanie-dubravka": "Dúbravka",
};

export default function SEOProvider({ pathname }: { pathname: string }) {
  const structuredData = (() => {
    const baseUrl = "https://www.sofoservis.sk";
    const isHomePage = pathname === "/";
    const isEnglishPage = pathname.startsWith("/en");

    const cityMatch = pathname.match(/\/([^/]+)$/);
    const citySlug = cityMatch?.[1];
    const cityName = citySlug ? CITY_MAPPING[citySlug] : null;

    const serviceKey = Object.keys(SERVICE_MAPPING).find((key) =>
      pathname.includes(key)
    );
    const serviceData = serviceKey ? SERVICE_MAPPING[serviceKey] : null;

    const schemas: StructuredDataSchema[] = [];

    // 1. MovingCompany + WebSite — homepage only
    if (isHomePage) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        "@id": `${baseUrl}/#organization`,
        name: "SofoServis",
        alternateName: "Sofoservices s. r. o.",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/og-logo.png`,
          width: 300,
          height: 80,
        },
        description:
          "Profesionálne sťahovanie, vypratávanie a montáž nábytku v Bratislave a celom Slovensku",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lermontovova 3",
          addressLocality: "Bratislava",
          postalCode: "811 05",
          addressCountry: "SK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.1512,
          longitude: 17.1113,
        },
        telephone: "+421951735130",
        email: "doprava@sofoservis.sk",
        openingHours: "Mo-Sa 07:00-19:00",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        foundingDate: "2019",
        areaServed: { "@type": "Country", name: "Slovakia" },
        sameAs: [
          "https://www.facebook.com/SofoServis",
          "https://www.instagram.com/sofoservis",
          "https://www.linkedin.com/company/sofoservis",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 500,
          bestRating: 5,
          worstRating: 1,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby SofoServis",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie bytov a domov", url: `${baseUrl}/stahovanie-bytov-domov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie kancelárií a firiem", url: `${baseUrl}/stahovanie-kancelarii-firiem` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medzinárodné sťahovanie", url: `${baseUrl}/medzinarodne-stahovanie` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie ťažkých bremien", url: `${baseUrl}/stahovanie-tazkych-bremien` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie a preprava nábytku", url: `${baseUrl}/stahovanie-preprava-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vypratávanie bytov a domov", url: `${baseUrl}/vypratavanie/vypratavanie-bytov-domov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montáž nábytku", url: `${baseUrl}/montaz-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hodinový manžel", url: `${baseUrl}/hodinovy-manzel-majster` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Búracie práce", url: `${baseUrl}/buracie-prace` } },
          ],
        },
      });

      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "SofoServis - Sťahovanie, vypratávanie a montáž nábytku Bratislava",
        description:
          "Profesionálne sťahovanie, vypratávanie a montáž nábytku v Bratislave a celom Slovensku",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "sk-SK",
      });
    }

    // 2. WebPage — všetky stránky
    const pageTitle = generatePageTitle(pathname, serviceData, cityName);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}${pathname}/#webpage`,
      url: `${baseUrl}${pathname}`,
      name: pageTitle,
      description: generatePageDescription(pathname, serviceData, cityName),
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
      inLanguage: isEnglishPage ? "en-US" : "sk-SK",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: generateBreadcrumbs(pathname, cityName, serviceData),
      },
    });

    // 3. Service — stránky služieb (s mestom alebo bez)
    if (serviceData) {
      const serviceName = cityName
        ? `${serviceData.serviceName} ${cityName}`
        : serviceData.serviceName;

      const areaServed = cityName
        ? {
            "@type": "City",
            name: cityName,
            containedInPlace: { "@type": "Country", name: "Slovakia" },
          }
        : { "@type": "Country", name: "Slovakia" };

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}${pathname}/#service`,
        name: serviceName,
        description: cityName
          ? `${serviceData.serviceDescription} v meste ${cityName}.`
          : serviceData.serviceDescription,
        provider: { "@id": `${baseUrl}/#organization` },
        serviceType: serviceData.serviceType,
        areaServed,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 500,
          bestRating: 5,
          worstRating: 1,
        },
      });
    } else if (cityName) {
      // Mestské stránky bez explicitného service mappingu (napr. /stahovanie-trnava)
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}${pathname}/#service`,
        name: `Sťahovacie služby ${cityName}`,
        description: `Profesionálne sťahovacie a vypratávacie služby v meste ${cityName} a okolí.`,
        provider: { "@id": `${baseUrl}/#organization` },
        serviceType: "MovingService",
        areaServed: {
          "@type": "City",
          name: cityName,
          containedInPlace: { "@type": "Country", name: "Slovakia" },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 500,
          bestRating: 5,
          worstRating: 1,
        },
      });
    }

    return schemas;
  })();

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      ))}
    </>
  );
}

// Helper functions
function generatePageTitle(
  pathname: string,
  serviceData: ServiceData | null,
  cityName: string | null
): string {
  if (pathname === "/") return "SofoServis - Sťahovanie, vypratávanie a montáž nábytku Bratislava";
  if (pathname === "/kontakt") return "Kontakt - SofoServis";
  if (pathname === "/cennik") return "Cenník služieb - SofoServis";
  if (pathname === "/referencie") return "Referencie - SofoServis";

  if (serviceData && cityName) return `${serviceData.serviceName} ${cityName} - SofoServis`;
  if (serviceData) return `${serviceData.serviceName} - SofoServis`;
  if (cityName) return `Sťahovacie služby ${cityName} - SofoServis`;

  return "SofoServis";
}

function generatePageDescription(
  pathname: string,
  serviceData: ServiceData | null,
  cityName: string | null
): string {
  if (serviceData && cityName) {
    return `${serviceData.serviceDescription} v meste ${cityName}. Profesionálne služby SofoServis.`;
  }
  if (serviceData) return serviceData.serviceDescription;
  if (cityName) {
    return `Profesionálne sťahovacie služby v meste ${cityName}. Sťahovanie bytov, domov a kancelárií.`;
  }
  return "Profesionálne sťahovanie, vypratávanie a montáž nábytku v Bratislave a celom Slovensku";
}

function generateBreadcrumbs(
  pathname: string,
  cityName: string | null,
  serviceData: ServiceData | null
): BreadcrumbItem[] {
  const baseUrl = "https://www.sofoservis.sk";
  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { "@type": "ListItem", position: 1, name: "Domov", item: baseUrl },
  ];

  let currentPath = baseUrl;
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    let name = path;

    const matchedServiceKey = Object.keys(SERVICE_MAPPING).find((k) =>
      k.includes(path)
    );
    if (serviceData && matchedServiceKey) {
      name = serviceData.serviceName;
    } else if (cityName && CITY_MAPPING[path]) {
      name = cityName;
    } else {
      const pageNames: Record<string, string> = {
        kontakt: "Kontakt",
        cennik: "Cenník",
        referencie: "Referencie",
        en: "English",
      };
      name =
        pageNames[path] ||
        path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
    }

    breadcrumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name,
      item: currentPath,
    });
  });

  return breadcrumbs;
}
