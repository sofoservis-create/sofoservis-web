// src/components/seo/SEOProvider.tsx

// Extended types for enhanced schemas
interface ServiceData {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  category?: string;
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

// Service mapping with enhanced details for better SEO
const SERVICE_MAPPING: Record<string, ServiceData> = {
  "/stahovanie-bytov-domov": {
    serviceName: "Sťahovanie bytov a domov",
    serviceDescription:
      "Profesionálne sťahovanie bytov a rodinných domov s kompletným servisom vrátane balenia, prepravy a vybalenia",
    serviceType: "ResidentialMoving",
    category: "Sťahovacie služby",
  },
  "/stahovanie-kancelarii-firiem": {
    serviceName: "Sťahovanie kancelárií a firiem",
    serviceDescription:
      "Sťahovanie kancelárií s minimálnym výpadkom prevádzky, vrátane IT technológií",
    serviceType: "OfficeMoving",
    category: "Firemné služby",
  },
  "/medzinarodne-stahovanie": {
    serviceName: "Medzinárodné sťahovanie",
    serviceDescription: "Sťahovanie do zahraničia a zo zahraničia",
    serviceType: "InternationalMoving",
    category: "Medzinárodné služby",
  },
  "/buracie-demolacne-prace": {
    serviceName: "Búracie a demolačné práce",
    serviceDescription:
      "Profesionálne búranie a demolácia objektov s povoleniami a odvozom sute",
    serviceType: "DemolitionWork",
    category: "Stavebné práce",
  },
  "/montaz-nabytku": {
    serviceName: "Montáž a skladanie nábytku",
    serviceDescription: "Profesionálna montáž všetkých typov nábytku",
    serviceType: "FurnitureAssembly",
    category: "Montážne služby",
  },
  "/vypratavanie-bytov-domov": {
    serviceName: "Vypratávanie bytov a domov",
    serviceDescription:
      "Kompletné vypratanie a čistenie nehnuteľností vrátane likvidácie odpadu",
    serviceType: "PropertyClearance",
    category: "Čistiace služby",
  },
  "/hodinovy-manzel-majster": {
    serviceName: "Hodinový manžel a majster",
    serviceDescription: "Drobné opravy a údržba v domácnosti",
    serviceType: "HandymanServices",
    category: "Údržbové služby",
  },
  "/stahovanie-preprava-nabytku": {
    serviceName: "Sťahovanie a preprava nábytku",
    serviceDescription: "Bezpečná preprava a sťahovanie nábytku všetkých typov",
    serviceType: "FurnitureMoving",
    category: "Prepravné služby",
  },
  "/stahovanie-tazkych-bremien": {
    serviceName: "Sťahovanie ťažkých bremien",
    serviceDescription:
      "Špecializované sťahovanie pianín, trezórov a ťažkých predmetov",
    serviceType: "HeavyItemMoving",
    category: "Špecializované služby",
  },
};

// City mapping
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
    const isServicePage = Object.keys(SERVICE_MAPPING).some((key) =>
      pathname.includes(key)
    );
    const isEnglishPage = pathname.startsWith("/en");

    // City and service detection
    const cityMatch = pathname.match(/\/([^\/]+)$/);
    const citySlug = cityMatch?.[1];
    const cityName = citySlug ? CITY_MAPPING[citySlug] : null;

    const serviceKey = Object.keys(SERVICE_MAPPING).find((key) =>
      pathname.includes(key)
    );
    const serviceData = serviceKey ? SERVICE_MAPPING[serviceKey] : null;

    const schemas: StructuredDataSchema[] = [];

    // 1. Enhanced Organization Schema - homepage only
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+421951735130",
          contactType: "customer service",
          areaServed: "SK",
          availableLanguage: ["Slovak", "English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "07:00",
            closes: "19:00",
          },
        },
        sameAs: [
          "https://www.facebook.com/SofoServis",
          "https://www.instagram.com/sofoservis",
          "https://www.linkedin.com/company/sofoservis",
        ],
        email: "doprava@sofoservis.sk",
        telephone: "+421951735130",
        foundingDate: "2019",
        priceRange: "€€",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie bytov a domov", url: `${baseUrl}/stahovanie-bytov-domov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie kancelárií a firiem", url: `${baseUrl}/stahovanie-kancelarii-firiem` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medzinárodné sťahovanie", url: `${baseUrl}/medzinarodne-stahovanie` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie ťažkých bremien", url: `${baseUrl}/stahovanie-tazkych-bremien` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie a preprava nábytku", url: `${baseUrl}/stahovanie-preprava-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vypratávanie", url: `${baseUrl}/vypratavanie` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montáž nábytku", url: `${baseUrl}/montaz-nabytku` } },
          ],
        },
        image: "https://www.sofoservis.sk/images/og-logo.png",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.1512,
          longitude: 17.1113,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          reviewCount: 500,
          bestRating: 5,
          worstRating: 1,
        },
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        currenciesAccepted: "EUR",
        openingHours: "Mo-Sa 07:00-19:00",
        slogan: "Sťahovanie, vypratávanie a montáž nábytku — s úsmevom a bez stresu",
      });

      // Enhanced Website Schema
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
        copyrightYear: "2024",
        copyrightHolder: { "@id": `${baseUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      });
    }

    // 2. Enhanced WebPage Schema - all pages
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
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: generateBreadcrumbs(pathname, cityName, serviceData),
      },
      // Enhanced page properties
      specialty: serviceData?.category,
      audience: {
        "@type": "Audience",
        audienceType: cityName
          ? `Residents of ${cityName}`
          : "Slovak residents",
      },
    });

    // 3. Service Schema - service pages
    if (isServicePage && serviceData) {
      const serviceName = cityName
        ? `${serviceData.serviceName} ${cityName}`
        : serviceData.serviceName;

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}${pathname}/#service`,
        name: serviceName,
        description: serviceData.serviceDescription,
        provider: { "@id": `${baseUrl}/#organization` },
        serviceType: serviceData.serviceType,
        category: serviceData.category,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie bytov a domov", url: `${baseUrl}/stahovanie-bytov-domov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie kancelárií a firiem", url: `${baseUrl}/stahovanie-kancelarii-firiem` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medzinárodné sťahovanie", url: `${baseUrl}/medzinarodne-stahovanie` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie a preprava nábytku", url: `${baseUrl}/stahovanie-preprava-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sťahovanie ťažkých bremien", url: `${baseUrl}/stahovanie-tazkych-bremien` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vypratávanie bytov a domov", url: `${baseUrl}/vypratavanie-bytov-domov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vypratávanie a odvoz starého nábytku", url: `${baseUrl}/vypratavanie-odvoz-stareho-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vypratávanie pivníc a garáží", url: `${baseUrl}/vypratavanie-pivnic-garazi-nebytovych-priestorov` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montáž nábytku", url: `${baseUrl}/montaz-nabytku` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montáž kuchyne", url: `${baseUrl}/montaz-kuchyne` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hodinový manžel", url: `${baseUrl}/hodinovy-manzel-majster` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Búracie a demolačné práce", url: `${baseUrl}/buracie-demolacne-prace` } },
          ],
        },
        areaServed: cityName
          ? {
              "@type": "City",
              name: cityName,
              containedInPlace: {
                "@type": "Country",
                name: "Slovakia",
              },
            }
          : {
              "@type": "Country",
              name: "Slovakia",
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

    // 4. Enhanced LocalBusiness Schema - city pages
    if (cityName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        "@id": `${baseUrl}${pathname}/#localbusiness`,
        name: `SofoServis ${cityName}`,
        description: `Profesionálne sťahovacie služby v meste ${cityName}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressCountry: "SK",
        },
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        parentOrganization: { "@id": `${baseUrl}/#organization` },
        telephone: "+421951735130",
        email: "doprava@sofoservis.sk",
        openingHours: "Mo-Sa 07:00-19:00",
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        priceRange: "€€",
        currenciesAccepted: "EUR",
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

  if (serviceData && cityName) {
    return `${serviceData.serviceName} ${cityName} - SofoServis`;
  }
  if (serviceData) {
    return `${serviceData.serviceName} - SofoServis`;
  }
  if (cityName) {
    return `Sťahovacie služby ${cityName} - SofoServis`;
  }

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
  if (serviceData) {
    return serviceData.serviceDescription;
  }
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Domov",
      item: baseUrl,
    },
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
      name: name,
      item: currentPath,
    });
  });

  return breadcrumbs;
}

