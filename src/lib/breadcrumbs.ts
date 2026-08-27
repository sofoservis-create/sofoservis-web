export interface ServiceData {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
}

export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export const SERVICE_MAPPING: Record<string, ServiceData> = {
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
    serviceDescription:
      "Profesionálna montáž kuchynskej linky a kuchynského nábytku",
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
    serviceDescription:
      "Kompletné vypratanie pivníc, garáží a nebytových priestorov",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu": {
    serviceName: "Odvoz a likvidácia stavebného odpadu",
    serviceDescription:
      "Profesionálny odvoz a ekologická likvidácia stavebného odpadu",
    serviceType: "WasteRemovalService",
  },
  "/odvoz-likvidacia-stavebneho-odpadu": {
    serviceName: "Odvoz a likvidácia stavebného odpadu",
    serviceDescription:
      "Profesionálny odvoz a ekologická likvidácia stavebného odpadu",
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
    serviceDescription:
      "Komplexné čistenie a vypratávanie pozemkov a nehnuteľností",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie/likvidacia-nebezpecneho-odpadu": {
    serviceName: "Likvidácia nebezpečného odpadu",
    serviceDescription:
      "Ekologická likvidácia nebezpečného odpadu a starých spotrebičov",
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
    serviceDescription:
      "Rýchle a kompletné vypratávanie kancelárskych priestorov",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie-po-rekonstrukcii": {
    serviceName: "Vypratávanie po rekonštrukcii",
    serviceDescription: "Čistenie a odvoz odpadu po rekonštrukcii",
    serviceType: "PropertyClearanceService",
  },
  "/vypratavanie-chalupy": {
    serviceName: "Vypratávanie chalupy",
    serviceDescription:
      "Kompletné vypratávanie chalúp a rekreačných nehnuteľností",
    serviceType: "PropertyClearanceService",
  },
};

export const CITY_MAPPING: Record<string, string> = {
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

const PAGE_NAMES_SK: Record<string, string> = {
  stahovanie: "Sťahovanie",
  vypratavanie: "Vypratávanie",
  "buracie-prace": "Búracie práce",
  kontakt: "Kontakt",
  cennik: "Cenník",
  referencie: "Referencie",
  "o-nas": "O nás",
  blog: "Blog",
  "zasady-pouzivania-cookies": "Zásady používania cookies",
  "zasady-spracovania-osobnych-udajov": "Ochrana osobných údajov",
  "vseobecne-obchodne-podmienky": "Všeobecné obchodné podmienky",
};

const PAGE_NAMES_EN: Record<string, string> = {
  about: "About Us",
  contact: "Contact",
  pricing: "Pricing",
  reviews: "Reviews",
  blog: "Blog",
  "cookie-policy": "Cookie Policy",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
};

export function getCityName(pathname: string): string | null {
  const citySlug = pathname.match(/\/([^/]+)$/)?.[1];
  return citySlug ? CITY_MAPPING[citySlug] || null : null;
}

export function getServiceData(pathname: string): ServiceData | null {
  const serviceKey = Object.keys(SERVICE_MAPPING).find((key) =>
    pathname.includes(key),
  );
  return serviceKey ? SERVICE_MAPPING[serviceKey] : null;
}

export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const baseUrl = "https://www.sofoservis.sk";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const paths = pathname.split("/").filter(Boolean);
  const pagePaths = isEnglish ? paths.slice(1) : paths;
  const homeUrl = isEnglish ? `${baseUrl}/en` : baseUrl;

  const breadcrumbs: BreadcrumbItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: isEnglish ? "Home" : "Domov",
      item: homeUrl,
    },
  ];

  let currentPath = homeUrl;
  pagePaths.forEach((path, index) => {
    currentPath += `/${path}`;
    const relativePath = new URL(currentPath).pathname;
    const serviceKey = Object.keys(SERVICE_MAPPING)
      .sort((a, b) => b.length - a.length)
      .find(
        (key) => relativePath === key || relativePath.endsWith(key),
      );
    let name: string;

    if (isEnglish) {
      name =
        PAGE_NAMES_EN[path] ||
        path
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
    } else if (CITY_MAPPING[path]) {
      name = CITY_MAPPING[path];
    } else if (serviceKey) {
      name = SERVICE_MAPPING[serviceKey].serviceName;
    } else {
      name =
        PAGE_NAMES_SK[path] ||
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