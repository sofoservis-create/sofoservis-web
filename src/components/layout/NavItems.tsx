"use client";
import React from "react";
import Link from "next/link";

interface NavSubSubLink {
  href: string;
  label: string;
}

interface NavSubLink {
  href: string;
  label: string;
  subLinks?: NavSubSubLink[];
  subLinksAllLabel?: string;
}

interface NavLink {
  href: string;
  label: string;
  subLinks?: NavSubLink[];
  subLinksAllLabel?: string;
}

export interface NavCategory {
  name: string;
  mobileName?: string;
  links: NavLink[];
  flat?: boolean;
}

  // Navigation categories for Slovak
export const navCategoriesSK: NavCategory[] = [
    {
      name: "SŤAHOVANIE",
      links: [
        { href: "/stahovanie", label: "→ Všetky sťahovacie služby" },
        { href: "/stahovanie-bytov-domov", label: "Sťahovanie bytov a domov" },
        {
          href: "/stahovanie-kancelarii-firiem",
          label: "Sťahovanie kancelárií a firiem",
        },
        {
          href: "/stahovanie-preprava-nabytku",
          label: "Sťahovanie a preprava nábytku",
        },
        {
          href: "/stahovanie-tazkych-bremien",
          label: "Sťahovanie ťažkých bremien",
          subLinksAllLabel: "→ Všetky ťažké bremená",
          subLinks: [
            { href: "/stahovanie-klavira", label: "Sťahovanie klavírov a pianín" },
            { href: "/stahovanie-strojov-zariadeni", label: "Sťahovanie strojov a zariadení" },
            { href: "/stahovanie-trezorov", label: "Sťahovanie trezorov" },
          ],
        },
        {
          href: "",
          label: "Medzinárodné sťahovanie",
          subLinks: [
            { href: "/medzinarodne-stahovanie", label: "→ Všetky medzinárodné služby" },
            { href: "/stahovanie-na-slovensko", label: "Sťahovanie na Slovensko" },
            { href: "/stahovanie-zo-slovenska", label: "Sťahovanie zo Slovenska" },
            {
              href: "/medzinarodne-stahovanie",
              label: "Sťahovanie do mesta",
              subLinksAllLabel: "→ Všetky destinácie",
              subLinks: [
                { href: "/medzinarodne-stahovanie/vieden", label: "Viedeň" },
                { href: "/medzinarodne-stahovanie/brno", label: "Brno" },
                { href: "/medzinarodne-stahovanie/praha", label: "Praha" },
                { href: "/medzinarodne-stahovanie/budapest", label: "Budapešť" },
                { href: "/medzinarodne-stahovanie/berlin", label: "Berlín" },
                { href: "/medzinarodne-stahovanie/mnichov", label: "Mníchov" },
                { href: "/medzinarodne-stahovanie/frankfurt", label: "Frankfurt" },
                { href: "/medzinarodne-stahovanie/hamburg", label: "Hamburg" },
                { href: "/medzinarodne-stahovanie/varsava", label: "Varšava" },
                { href: "/medzinarodne-stahovanie/zurich", label: "Zürich" },
                { href: "/medzinarodne-stahovanie/amsterdam", label: "Amsterdam" },
                { href: "/medzinarodne-stahovanie/brusel", label: "Brusel" },
                { href: "/medzinarodne-stahovanie/pariz", label: "Paríž" },
                { href: "/medzinarodne-stahovanie/londyn", label: "Londýn" },
                { href: "/medzinarodne-stahovanie/dublin", label: "Dublin" },
              ],
            },
            {
              href: "/medzinarodne-stahovanie",
              label: "Sťahovanie do krajiny",
              subLinksAllLabel: "→ Všetky krajiny",
              subLinks: [
                { href: "/medzinarodne-stahovanie/rakusko", label: "Rakúsko" },
                { href: "/medzinarodne-stahovanie/madarsko", label: "Maďarsko" },
                { href: "/medzinarodne-stahovanie/ceska-republika", label: "Česká republika" },
                { href: "/medzinarodne-stahovanie/polsko", label: "Poľsko" },
                { href: "/medzinarodne-stahovanie/nemecko", label: "Nemecko" },
                { href: "/medzinarodne-stahovanie/taliansko", label: "Taliansko" },
                { href: "/medzinarodne-stahovanie/svajciarsko", label: "Švajčiarsko" },
                { href: "/medzinarodne-stahovanie/holandsko", label: "Holandsko" },
                { href: "/medzinarodne-stahovanie/belgicko", label: "Belgicko" },
                { href: "/medzinarodne-stahovanie/dansko", label: "Dánsko" },
                { href: "/medzinarodne-stahovanie/francuzsko", label: "Francúzsko" },
                { href: "/medzinarodne-stahovanie/anglicko", label: "Anglicko (UK)" },
                { href: "/medzinarodne-stahovanie/svedsko", label: "Švédsko" },
                { href: "/medzinarodne-stahovanie/spanielsko", label: "Španielsko" },
                { href: "/medzinarodne-stahovanie/norsko", label: "Nórsko" },
                { href: "/medzinarodne-stahovanie/irsko", label: "Írsko" },
              ],
            },
            {
              href: "/medzinarodne-stahovanie",
              label: "Sťahovanie zo zahraničia na SK",
              subLinksAllLabel: "→ Všetky zdrojové krajiny",
              subLinks: [
                { href: "/stahovanie-z-anglie-na-slovensko", label: "Z Anglicka" },
                { href: "/stahovanie-z-nemecka-na-slovensko", label: "Z Nemecka" },
                { href: "/stahovanie-z-rakuska-na-slovensko", label: "Z Rakúska" },
                { href: "/stahovanie-z-holandska-na-slovensko", label: "Z Holandska" },
                { href: "/stahovanie-z-francuzska-na-slovensko", label: "Z Francúzska" },
                { href: "/stahovanie-z-usa-na-slovensko", label: "Z USA" },
              ],
            },
          ],
        },
        {
          href: "",
          label: "Mestá",
          subLinks: [
            {
              href: "/stahovanie-bratislava",
              label: "Bratislava",
              subLinks: [
                { href: "/stahovanie-petrzalka", label: "Petržalka" },
                { href: "/stahovanie-ruzinov", label: "Ružinov" },
                { href: "/stahovanie-stare-mesto", label: "Staré Mesto" },
                { href: "/stahovanie-nove-mesto", label: "Nové Mesto" },
                { href: "/stahovanie-karlova-ves", label: "Karlova Ves" },
                { href: "/stahovanie-dubravka", label: "Dúbravka" },
              ],
            },
            { href: "/stahovanie-trnava", label: "Trnava" },
            { href: "/stahovanie-pezinok", label: "Pezinok" },
            { href: "/stahovanie-senica", label: "Senica" },
            { href: "/stahovanie-nitra", label: "Nitra" },
            { href: "/stahovanie-hlohovec", label: "Hlohovec" },
            { href: "/stahovanie-komarno", label: "Komárno" },
            { href: "/stahovanie-levice", label: "Levice" },
            { href: "/stahovanie-senec", label: "Senec" },
            { href: "/stahovanie-piestany", label: "Piešťany" },
            { href: "/stahovanie-galanta", label: "Galanta" },
            { href: "/stahovanie-malacky", label: "Malacky" },
            { href: "/stahovanie-samorin", label: "Šamorín" },
            { href: "/stahovanie-sala", label: "Šaľa" },
            { href: "/stahovanie-stupava", label: "Stupava" },
          ],
        },
      ],
    },
    {
      name: "VYPRATÁVANIE",
      links: [
        { href: "/vypratavanie", label: "→ Všetky vypratávacie služby" },
        {
          href: "/vypratavanie-bytov-domov",
          label: "Vypratávanie bytov a domov",
        },
        {
          href: "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
          label: "Vypratávanie pivníc, garáží a nebytových priestorov",
        },
        {
          href: "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
          label: "Čistenie a vypratávanie pozemku",
        },
        {
          href: "/vypratavanie-odvoz-stareho-nabytku",
          label: "Vypratávanie a odvoz nábytku",
        },
        {
          href: "/odvoz-likvidacia-stavebneho-odpadu",
          label: "Odvoz a likvidácia stavebného odpadu",
        },
        {
          href: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
          label: "Likvidácia spotrebičov a nebezpečného odpadu",
        },
        {
          href: "",
          label: "Špeciálne typy",
          subLinks: [
            { href: "/vypratavanie-chalupy", label: "Vypratávanie chalupy" },
            { href: "/vypratavanie-kancelarii", label: "Vypratávanie kancelárií" },
            { href: "/vypratavanie-po-rekonstrukcii", label: "Vypratávanie po rekonštrukcii" },
            { href: "/vypratavanie-pozostalosti", label: "Vypratávanie pozostalosti" },
          ],
        },
        {
          href: "",
          label: "Mestá",
          subLinks: [
            {
              href: "/vypratavanie-bratislava",
              label: "Bratislava",
              subLinks: [
                { href: "/vypratavanie-petrzalka", label: "Petržalka" },
                { href: "/vypratavanie-ruzinov", label: "Ružinov" },
                { href: "/vypratavanie-stare-mesto", label: "Staré Mesto" },
                { href: "/vypratavanie-nove-mesto", label: "Nové Mesto" },
                { href: "/vypratavanie-karlova-ves", label: "Karlova Ves" },
                { href: "/vypratavanie-dubravka", label: "Dúbravka" },
              ],
            },
            { href: "/vypratavanie-trnava", label: "Trnava" },
            { href: "/vypratavanie-pezinok", label: "Pezinok" },
            { href: "/vypratavanie-senica", label: "Senica" },
            { href: "/vypratavanie-nitra", label: "Nitra" },
            { href: "/vypratavanie-hlohovec", label: "Hlohovec" },
            { href: "/vypratavanie-komarno", label: "Komárno" },
            { href: "/vypratavanie-levice", label: "Levice" },
            { href: "/vypratavanie-senec", label: "Senec" },
            { href: "/vypratavanie-piestany", label: "Piešťany" },
            { href: "/vypratavanie-galanta", label: "Galanta" },
            { href: "/vypratavanie-malacky", label: "Malacky" },
            { href: "/vypratavanie-samorin", label: "Šamorín" },
            { href: "/vypratavanie-sala", label: "Šaľa" },
            { href: "/vypratavanie-stupava", label: "Stupava" },
          ],
        },
      ],
    },
    {
      name: "MONTÁŽ",
      links: [
        { href: "/montaz-nabytku", label: "Montáž nábytku" },
        { href: "/montaz-kuchyne", label: "Montáž kuchyne" },
        {
          href: "",
          label: "Mestá",
          subLinks: [
            { href: "/montaz-nabytku/bratislava", label: "Bratislava" },
          ],
        },
      ],
    },
    {
      name: "ĎALŠIE",
      mobileName: "ĎALŠIE SLUŽBY",
      links: [
        {
          href: "",
          label: "Búranie / demolácie",
          subLinks: [
            { href: "/buracie-demolacne-prace", label: "→ Všetky búracie a demolačné práce" },
            { href: "/buranie-demolacia-domov-bytov", label: "Búranie a demolácia domov, budov" },
            { href: "/buranie-stien-priecok", label: "Búranie stien v dome a byte" },
          ],
        },
        {
          href: "",
          label: "Hodinový manžel",
          subLinks: [
            { href: "/hodinovy-manzel-majster", label: "Hodinový manžel" },
            {
              href: "/hodinovy-manzel-majster",
              label: "Mestá",
              subLinksAllLabel: "",
              subLinks: [
                { href: "/hodinovy-manzel-majster/bratislava", label: "Bratislava" },
                { href: "/hodinovy-manzel-majster/galanta", label: "Galanta" },
                { href: "/hodinovy-manzel-majster/piestany", label: "Piešťany" },
                { href: "/hodinovy-manzel-majster/trnava", label: "Trnava" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "INFORMÁCIE",
      flat: true,
      links: [
        { href: "/referencie", label: "Referencie" },
        { href: "/cennik", label: "Cenník" },
        { href: "/o-nas", label: "O nás" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
  ];

export const navCategoriesEN: NavCategory[] = [
    {
      name: "MOVING",
      links: [
        { href: "/en/moving", label: "→ All Moving Services" },
        { href: "/en/apartment-moving", label: "Apartment & House Moving" },
        { href: "/en/office-moving", label: "Office & Business Moving" },
        { href: "/en/furniture-moving-removal", label: "Furniture Moving & Removal" },
        {
          href: "/en/moving-heavy-loads",
          label: "Moving Heavy Loads",
          subLinksAllLabel: "→ All heavy load services",
          subLinks: [
            { href: "/en/piano-moving", label: "Piano Moving" },
            { href: "/en/upright-piano-moving", label: "Upright Piano Moving" },
            { href: "/en/machinery-moving", label: "Machinery Moving" },
            { href: "/en/safe-moving", label: "Safe Moving" },
          ],
        },
        {
          href: "",
          label: "International Moving",
          subLinks: [
            { href: "/en/international-moving-services", label: "→ All international services" },
            { href: "/en/moving-to-slovakia", label: "Moving to Slovakia" },
            { href: "/en/moving-from-slovakia", label: "Moving from Slovakia" },
            {
              href: "/en/moving-to-slovakia",
              label: "To Slovakia — pick origin",
              subLinksAllLabel: "→ All origin countries",
              subLinks: [
                { href: "/en/moving-from-austria-to-slovakia", label: "From Austria" },
                { href: "/en/moving-from-france-to-slovakia", label: "From France" },
                { href: "/en/moving-from-germany-to-slovakia", label: "From Germany" },
                { href: "/en/moving-from-netherlands-to-slovakia", label: "From Netherlands" },
                { href: "/en/moving-from-uk-to-slovakia", label: "From UK" },
                { href: "/en/moving-from-usa-to-slovakia", label: "From USA" },
              ],
            },
            {
              href: "/en/moving-from-slovakia",
              label: "From Slovakia — pick destination",
              subLinksAllLabel: "→ All destination countries",
              subLinks: [
                { href: "/en/moving-to-austria", label: "To Austria" },
                { href: "/en/moving-to-france", label: "To France" },
                { href: "/en/moving-to-germany", label: "To Germany" },
                { href: "/en/moving-to-ireland", label: "To Ireland" },
                { href: "/en/moving-to-netherlands", label: "To Netherlands" },
                { href: "/en/moving-to-norway", label: "To Norway" },
                { href: "/en/moving-to-sweden", label: "To Sweden" },
                { href: "/en/moving-to-switzerland", label: "To Switzerland" },
                { href: "/en/moving-to-uk", label: "To UK" },
              ],
            },
            {
              href: "/en/international-moving-services",
              label: "Moving to a city — pick a city",
              subLinksAllLabel: "→ All cities",
              subLinks: [
                { href: "/en/moving-to-amsterdam", label: "Amsterdam" },
                { href: "/en/moving-to-barcelona", label: "Barcelona" },
                { href: "/en/moving-to-berlin", label: "Berlin" },
                { href: "/en/moving-to-brno", label: "Brno" },
                { href: "/en/moving-to-brussels", label: "Brussels" },
                { href: "/en/moving-to-budapest", label: "Budapest" },
                { href: "/en/moving-to-copenhagen", label: "Copenhagen" },
                { href: "/en/moving-to-dublin", label: "Dublin" },
                { href: "/en/moving-to-frankfurt", label: "Frankfurt" },
                { href: "/en/moving-to-hamburg", label: "Hamburg" },
                { href: "/en/moving-to-lisbon", label: "Lisbon" },
                { href: "/en/moving-to-london", label: "London" },
                { href: "/en/moving-to-munich", label: "Munich" },
                { href: "/en/moving-to-oslo", label: "Oslo" },
                { href: "/en/moving-to-paris", label: "Paris" },
                { href: "/en/moving-to-prague", label: "Prague" },
                { href: "/en/moving-to-rome", label: "Rome" },
                { href: "/en/moving-to-stockholm", label: "Stockholm" },
                { href: "/en/moving-to-vienna", label: "Vienna" },
                { href: "/en/moving-to-warsaw", label: "Warsaw" },
                { href: "/en/moving-to-zurich", label: "Zurich" },
              ],
            },
            {
              href: "/en/moving-bratislava",
              label: "From Bratislava — choose a city",
              subLinksAllLabel: "→ All Bratislava routes",
              subLinks: [
                { href: "/en/moving-to-amsterdam", label: "Amsterdam" },
                { href: "/en/moving-to-berlin", label: "Berlin" },
                { href: "/en/moving-to-brussels", label: "Brussels" },
                { href: "/en/moving-to-budapest", label: "Budapest" },
                { href: "/en/moving-to-dublin", label: "Dublin" },
                { href: "/en/moving-to-london", label: "London" },
                { href: "/en/moving-to-munich", label: "Munich" },
                { href: "/en/moving-to-paris", label: "Paris" },
                { href: "/en/moving-to-prague", label: "Prague" },
                { href: "/en/moving-to-vienna", label: "Vienna" },
                { href: "/en/moving-to-warsaw", label: "Warsaw" },
                { href: "/en/moving-to-zurich", label: "Zurich" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "JUNK REMOVAL",
      links: [
        { href: "/en/junk-removal", label: "→ All Junk Removal Services" },
        { href: "/en/home-junk-removal", label: "Home Junk Removal" },
        { href: "/en/basement-garage-junk-removal", label: "Basement & Garage Junk Removal" },
        { href: "/en/property-land-junk-removal", label: "Property & Land Junk Removal" },
        { href: "/en/furniture-removal", label: "Furniture Junk Removal" },
        { href: "/en/construction-waste-removal", label: "Construction Waste Removal" },
        { href: "/en/hazardous-waste-removal", label: "Hazardous Waste Removal" },
        {
          href: "",
          label: "Special Types",
          subLinks: [
            { href: "/en/cottage-junk-removal", label: "Cottage Junk Removal" },
            { href: "/en/office-junk-removal", label: "Office Junk Removal" },
            { href: "/en/post-renovation-junk-removal", label: "Post-Renovation Junk Removal" },
            { href: "/en/estate-junk-removal-bereavement", label: "Estate Junk Removal (Bereavement)" },
          ],
        },
      ],
    },
    {
      name: "ASSEMBLY",
      links: [
        { href: "/en/furniture-assembly", label: "Furniture Assembly" },
        { href: "/en/kitchen-installation", label: "Kitchen Installation" },
        {
          href: "",
          label: "Cities",
          subLinks: [
            { href: "/en/furniture-assembly-bratislava", label: "Bratislava" },
          ],
        },
      ],
    },
    {
      name: "OTHER",
      links: [
        {
          href: "",
          label: "Demolition",
          subLinks: [
            { href: "/en/demolition-services", label: "→ All demolition services" },
            { href: "/en/house-demolition", label: "House & Building Demolition" },
            { href: "/en/wall-demolition", label: "Wall & Partition Demolition" },
          ],
        },
        {
          href: "",
          label: "Handyman Services",
          subLinks: [
            { href: "/en/handyman-services", label: "Handyman Services" },
            {
              href: "/en/handyman-services",
              label: "Cities",
              subLinksAllLabel: "",
              subLinks: [
                { href: "/en/handyman-bratislava", label: "Bratislava" },
                { href: "/en/handyman-galanta", label: "Galanta" },
                { href: "/en/handyman-piestany", label: "Piešťany" },
                { href: "/en/handyman-trnava", label: "Trnava" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "INFORMATION",
      flat: true,
      links: [
        { href: "/en/reviews", label: "Reviews" },
        { href: "/en/pricing", label: "Pricing" },
        { href: "/en/about", label: "About Us" },
        { href: "/en/contact", label: "Contact" },
      ],
    },
  ];

export const mobileNavCategoriesSK: NavCategory[] = [
    ...navCategoriesSK.slice(0, -1),
    {
      name: "REFERENCIE",
      flat: true,
      links: [
        { href: "/referencie", label: "Referencie" },
      ],
    },
    {
      name: "CENNÍK",
      flat: true,
      links: [
        { href: "/cennik", label: "Cenník" },
      ],
    },
    {
      name: "O NÁS",
      flat: true,
      links: [
        { href: "/o-nas", label: "O nás" },
      ],
    },
    {
      name: "KONTAKT",
      flat: true,
      links: [
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
  ];

export const mobileNavCategoriesEN: NavCategory[] = [
    ...navCategoriesEN.slice(0, -1),
    {
      name: "REVIEWS",
      flat: true,
      links: [
        { href: "/en/reviews", label: "Reviews" },
      ],
    },
    {
      name: "PRICING",
      flat: true,
      links: [
        { href: "/en/pricing", label: "Pricing" },
      ],
    },
    {
      name: "ABOUT US",
      flat: true,
      links: [
        { href: "/en/about", label: "About Us" },
      ],
    },
    {
      name: "CONTACT",
      flat: true,
      links: [
        { href: "/en/contact", label: "Contact" },
      ],
    },
  ];

interface DesktopNavItemProps {
  category: NavCategory;
  expandedSubLink: string | null;
  setExpandedSubLink: React.Dispatch<React.SetStateAction<string | null>>;
  expandedSubSubLink: string | null;
  setExpandedSubSubLink: React.Dispatch<React.SetStateAction<string | null>>;
}

// Desktop navigation item with dropdown
export const DesktopNavItem = React.memo(function DesktopNavItem({
  category,
  expandedSubLink,
  setExpandedSubLink,
  expandedSubSubLink,
  setExpandedSubSubLink,
}: DesktopNavItemProps) {
    const hasActiveSubLink = category.links.some(
      (l) => l.subLinks && expandedSubLink === category.name + "-" + l.label
    );
    return (
    <div
      className="relative group"
      onMouseLeave={() => setExpandedSubLink(null)}
    >
      <button className="nav-link px-4 py-8 text-primary-700 font-bold tracking-wide uppercase hover:text-accent-500 transition-colors flex items-center gap-2 text-sm group-hover:text-accent-500">
        <span>{category.name}</span>
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
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <div className={`border border-gray-100 w-60 absolute left-0 top-full min-w-[240px] py-2 mt-1 bg-white rounded-lg shadow-lg transition-[opacity,transform,visibility] duration-150 ease-out z-50 max-h-[70vh] overflow-y-auto ${hasActiveSubLink ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"}`}>
        {category.links.map((link, index) =>
          link.subLinks ? (
            <div key={index}>
              <button
                onClick={() => { const key = category.name + "-" + link.label; setExpandedSubLink(expandedSubLink === key ? null : key); }}
                className="w-full flex justify-between items-center text-left px-5 py-2.5 text-primary-700 text-base hover:bg-accent-400 hover:text-primary-900 transition-colors font-medium border-t border-gray-100 mt-1"
              >
                <span>{link.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform duration-200 ${expandedSubLink === category.name + "-" + link.label ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {expandedSubLink === category.name + "-" + link.label && (
                <div className="bg-gray-50 pb-1">
                  {link.subLinks.map((sub, si) =>
                    sub.subLinks ? (
                      <div key={si}>
                        <button
                          onClick={() => { const key = category.name + "-" + sub.label; setExpandedSubSubLink(expandedSubSubLink === key ? null : key); }}
                          className="w-full flex justify-between items-center text-left pl-8 pr-5 py-2 text-primary-700 text-sm hover:bg-accent-400 hover:text-primary-900 transition-colors font-medium"
                        >
                          <span>{sub.label}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-transform duration-200 ${expandedSubSubLink === category.name + "-" + sub.label ? "rotate-180" : ""}`}>
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        {expandedSubSubLink === category.name + "-" + sub.label && (
                          <div className="bg-white">
                            {sub.subLinksAllLabel !== "" && (
                              <Link href={sub.href} className="block pl-10 pr-5 py-1.5 text-primary-700 text-xs hover:bg-accent-400 hover:text-primary-900 transition-colors font-semibold border-b border-gray-100" prefetch={false}>
                                {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                              </Link>
                            )}
                            {sub.subLinks.map((subsub, ssi) => (
                              <Link key={ssi} href={subsub.href} className="block pl-12 pr-5 py-1.5 text-primary-600 text-xs hover:bg-accent-400 hover:text-primary-900 transition-colors font-medium" prefetch={false}>
                                {subsub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={si}
                        href={sub.href}
                        className="block pl-8 pr-5 py-2 text-primary-700 text-sm hover:bg-accent-400 hover:text-primary-900 transition-colors font-medium"
                        prefetch={false}
                      >
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
          <Link
            key={index}
            href={link.href}
            className="block px-5 py-2.5 text-primary-700 text-base hover:bg-accent-400 hover:text-primary-900 transition-colors font-medium"
            prefetch={false}
          >
            {link.label}
          </Link>
          )
        )}
      </div>
    </div>
    );
});

interface MobileNavItemProps {
  category: NavCategory;
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  expandedSubLink: string | null;
  setExpandedSubLink: React.Dispatch<React.SetStateAction<string | null>>;
  expandedSubSubLink: string | null;
  setExpandedSubSubLink: React.Dispatch<React.SetStateAction<string | null>>;
  setMobileMenuOpen: (open: boolean) => void;
}

// Mobile navigation item with dropdown
export const MobileNavItem = React.memo(function MobileNavItem({
  category,
  activeDropdown,
  toggleDropdown,
  expandedSubLink,
  setExpandedSubLink,
  expandedSubSubLink,
  setExpandedSubSubLink,
  setMobileMenuOpen,
}: MobileNavItemProps) {
    if (category.flat) {
      return (
        <>
          {category.links.map((link, index) => (
            <div key={index} className="border-b border-gray-200">
              <Link
                href={link.href}
                className="block px-5 py-5 text-primary-900 font-bold uppercase text-base"
                onClick={() => setMobileMenuOpen(false)}
                prefetch={false}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </>
      );
    }

    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleDropdown(category.name)}
          className="w-full flex justify-between items-center py-5 px-5 text-left text-primary-900 font-bold uppercase text-base"
          aria-expanded={activeDropdown === category.name}
        >
          <span>{category.mobileName ?? category.name}</span>
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
            className={`w-6 h-6 text-accent-500 transition-transform duration-200 ${
              activeDropdown === category.name ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        {activeDropdown === category.name && (
          <div className="bg-gray-50 py-3">
            {category.links.map((link, index) =>
              link.subLinks ? (
                <div key={index}>
                  <button
                    onClick={() => { const key = category.name + "-" + link.label; setExpandedSubLink(expandedSubLink === key ? null : key); }}
                    className="w-full flex justify-between items-center px-8 py-3 text-primary-700 text-base font-semibold border-t border-gray-200 mt-1"
                  >
                    <span>{link.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`flex-shrink-0 transition-transform duration-200 ${expandedSubLink === category.name + "-" + link.label ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {expandedSubLink === category.name + "-" + link.label && (
                    <div className="bg-white">
                      {link.subLinks.map((sub, si) =>
                        sub.subLinks ? (
                          <div key={si}>
                            <button
                              onClick={() => { const key = category.name + "-" + sub.label; setExpandedSubSubLink(expandedSubSubLink === key ? null : key); }}
                              className="w-full flex justify-between items-center pl-12 pr-8 py-2.5 text-primary-700 text-sm font-medium border-t border-gray-100"
                            >
                              <span>{sub.label}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-transform duration-200 ${expandedSubSubLink === category.name + "-" + sub.label ? "rotate-180" : ""}`}>
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                            {expandedSubSubLink === category.name + "-" + sub.label && (
                              <div className="bg-gray-50">
                                {sub.subLinksAllLabel !== "" && (
                                  <Link href={sub.href} className="block pl-14 pr-8 py-2 text-primary-700 text-xs font-semibold border-b border-gray-200" onClick={() => setMobileMenuOpen(false)} prefetch={false}>
                                    {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                                  </Link>
                                )}
                                {sub.subLinks.map((subsub, ssi) => (
                                  <Link key={ssi} href={subsub.href} className="block pl-16 pr-8 py-2 text-primary-600 text-xs font-medium" onClick={() => setMobileMenuOpen(false)} prefetch={false}>
                                    {subsub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={si}
                            href={sub.href}
                            className="block pl-12 pr-8 py-2.5 text-primary-700 text-sm font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                            prefetch={false}
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
              <Link
                key={index}
                href={link.href}
                className="block px-8 py-3 text-primary-700 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
                prefetch={false}
              >
                {link.label}
              </Link>
              )
            )}
          </div>
        )}
      </div>
    );
});
