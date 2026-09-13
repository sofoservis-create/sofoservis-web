// src/components/seo/SEOProvider.tsx
import { getGoogleRating } from "@/lib/googleRating";
import {
  generateBreadcrumbs,
  getCityName,
  getServiceData,
} from "@/lib/breadcrumbs";
import type { ServiceData } from "@/lib/breadcrumbs";
import { blogArticles } from "@/lib/blog/articles";

interface StructuredDataSchema {
  "@context": string;
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
}


export default async function SEOProvider({ pathname }: { pathname: string }) {
  const { ratingValue, reviewCount } = await getGoogleRating();
  const structuredData = (() => {
    const baseUrl = "https://www.sofoservis.sk";
    const isHomePage = pathname === "/";
    const isEnglishPage = pathname.startsWith("/en");
    const blogArticle = pathname.startsWith("/blog/")
      ? blogArticles.find((article) => `/blog/${article.slug}` === pathname)
      : undefined;

    const cityName = getCityName(pathname);
    const serviceData = getServiceData(pathname);

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
          width: 1200,
          height: 630,
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
          ratingValue,
          reviewCount,
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
    const pageTitle =
      blogArticle?.title ??
      generatePageTitle(pathname, serviceData, cityName);
    const pageDescription =
      blogArticle?.description ??
      generatePageDescription(pathname, serviceData, cityName);
    const pageId = pathname.startsWith("/blog")
      ? `${baseUrl}${pathname}#webpage`
      : `${baseUrl}${pathname}/#webpage`;
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url: `${baseUrl}${pathname}`,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
      inLanguage: isEnglishPage ? "en-US" : "sk-SK",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: generateBreadcrumbs(pathname),
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
          ratingValue,
          reviewCount,
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
          ratingValue,
          reviewCount,
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
  if (pathname === "/blog") return "Blog - SofoServis";

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
  if (pathname === "/blog") {
    return "Praktické rady zo sťahovania, prepravy a vypratávania od Sofoservisu.";
  }
  return "Profesionálne sťahovanie, vypratávanie a montáž nábytku v Bratislave a celom Slovensku";
}
