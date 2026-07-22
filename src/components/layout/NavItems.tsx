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
        { href: "/stahovanie/stahovanie-bytov-domov", label: "Sťahovanie bytov a domov" },
        {
          href: "/stahovanie/stahovanie-kancelarii-firiem",
          label: "Sťahovanie kancelárií a firiem",
        },
        {
          href: "/stahovanie/stahovanie-tazkych-bremien",
          label: "Sťahovanie ťažkých bremien",
        },
        { href: "/stahovanie/medzinarodne-stahovanie", label: "Medzinárodné sťahovanie" },
        {
          href: "",
          label: "Mestá",
          subLinks: [
            { href: "/stahovanie/stahovanie-bratislava", label: "Bratislava" },
            { href: "/stahovanie/stahovanie-trnava", label: "Trnava" },
            { href: "/stahovanie/stahovanie-pezinok", label: "Pezinok" },
            { href: "/stahovanie/stahovanie-senica", label: "Senica" },
            { href: "/stahovanie/stahovanie-nitra", label: "Nitra" },
            { href: "/stahovanie/stahovanie-komarno", label: "Komárno" },
            { href: "/stahovanie/stahovanie-senec", label: "Senec" },
            { href: "/stahovanie/stahovanie-piestany", label: "Piešťany" },
            { href: "/stahovanie/stahovanie-galanta", label: "Galanta" },
            { href: "/stahovanie/stahovanie-malacky", label: "Malacky" },
            { href: "/stahovanie/stahovanie-samorin", label: "Šamorín" },
            { href: "/stahovanie/stahovanie-sala", label: "Šaľa" },
            { href: "/stahovanie/stahovanie-stupava", label: "Stupava" },
          ],
        },
      ],
    },
    {
      name: "VYPRATÁVANIE",
      links: [
        { href: "/vypratavanie", label: "→ Všetky vypratávacie služby" },
        {
          href: "/vypratavanie/vypratavanie-bytov-domov",
          label: "Vypratávanie bytov a domov",
        },
        {
          href: "/vypratavanie/vypratavanie-pivnic-a-garazi",
          label: "Vypratávanie pivníc, garáží a nebytových priestorov",
        },
        {
          href: "/vypratavanie/cistenie-vypratavanie-pozemkov",
          label: "Čistenie a vypratávanie pozemku",
        },
        {
          href: "/vypratavanie/odvoz-stareho-nabytku",
          label: "Vypratávanie a odvoz nábytku",
        },
        {
          href: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu",
          label: "Odvoz a likvidácia stavebného odpadu",
        },
        {
          href: "/vypratavanie/likvidacia-nebezpecneho-odpadu",
          label: "Likvidácia spotrebičov a nebezpečného odpadu",
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
          label: "Búracie práce",
          subLinks: [
            { href: "/buracie-prace", label: "→ Všetky búracie práce" },
            { href: "/buracie-prace/buranie-demolacia-domov", label: "Búranie a demolácia domov, budov" },
            { href: "/buracie-prace/buranie-stien-priecok", label: "Búranie stien v dome a byte" },
          ],
        },
        {
          href: "/hodinovy-manzel-majster",
          label: "Hodinový manžel",
          subLinks: [
            { href: "/hodinovy-manzel-majster", label: "Hodinový manžel" },
            { href: "/hodinovy-manzel-majster/bratislava", label: "Bratislava" },
          ],
        },
      ],
    },
    {
      name: "INFORMÁCIE",
      flat: true,
      links: [
        { href: "/kontakt", label: "Kontakt" },
        { href: "/cennik", label: "Cenník" },
        { href: "/o-nas", label: "O nás" },
        { href: "/referencie", label: "Referencie" },
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
          href: "/en/handyman-services",
          label: "Handyman Services",
          subLinks: [
            { href: "/en/handyman-services", label: "Handyman Services" },
            { href: "/en/handyman-bratislava", label: "Bratislava" },
          ],
        },
      ],
    },
    {
      name: "INFORMATION",
      flat: true,
      links: [
        { href: "/en/contact", label: "Contact" },
        { href: "/en/pricing", label: "Pricing" },
        { href: "/en/about", label: "About Us" },
        { href: "/en/reviews", label: "Reviews" },
      ],
    },
  ];



interface NavItemProps {
  category: NavCategory;
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  expandedSubLink: string | null;
  setExpandedSubLink: React.Dispatch<React.SetStateAction<string | null>>;
  expandedSubSubLink: string | null;
  setExpandedSubSubLink: React.Dispatch<React.SetStateAction<string | null>>;
  setMobileMenuOpen: (open: boolean) => void;
}

// Unified navigation item — single markup for mobile (accordion) and desktop (hover dropdown).
// All submenu links are always rendered in the DOM; visibility is toggled via CSS classes.
export const NavItem = React.memo(function NavItem({
  category,
  activeDropdown,
  toggleDropdown,
  expandedSubLink,
  setExpandedSubLink,
  expandedSubSubLink,
  setExpandedSubSubLink,
  setMobileMenuOpen,
}: NavItemProps) {
  const hasActiveSubLink = category.links.some(
    (l) => l.subLinks && expandedSubLink === category.name + "-" + l.label
  );
  const isOpen = activeDropdown === category.name;
  const closeMobile = () => setMobileMenuOpen(false);

  const panelDesktop =
    "desktop:block desktop:absolute desktop:left-0 desktop:top-full desktop:w-60 desktop:min-w-[240px] desktop:bg-white desktop:border desktop:border-gray-100 desktop:rounded-lg desktop:shadow-lg desktop:py-2 desktop:mt-1 desktop:z-50 desktop:max-h-[70vh] desktop:overflow-y-auto desktop:transition-[opacity,transform,visibility] desktop:duration-150 desktop:ease-out";
  const panelVisibility = hasActiveSubLink
    ? "desktop:visible desktop:opacity-100 desktop:translate-y-0"
    : "desktop:invisible desktop:opacity-0 desktop:translate-y-2 desktop:group-hover:visible desktop:group-hover:opacity-100 desktop:group-hover:translate-y-0";

  if (category.flat) {
    return (
      <div
        className="desktop:relative group"
        onMouseLeave={() => setExpandedSubLink(null)}
      >
        <button
          type="button"
          className="hidden desktop:flex nav-link px-3 h-24 text-primary-700 font-bold tracking-wide uppercase hover:text-accent-500 transition-colors items-center gap-1.5 text-sm group-hover:text-accent-500 whitespace-nowrap"
        >
          <span>{category.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div className={`block ${panelDesktop} ${panelVisibility}`}>
          {category.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block px-5 py-5 text-primary-900 font-bold uppercase text-base border-b border-gray-200 desktop:border-0 desktop:py-2.5 desktop:text-primary-700 desktop:font-medium desktop:normal-case desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
              onClick={closeMobile}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-b border-gray-200 desktop:border-0 desktop:relative group"
      onMouseLeave={() => setExpandedSubLink(null)}
    >
      <button
        type="button"
        onClick={() => toggleDropdown(category.name)}
        aria-expanded={isOpen}
        className="nav-link w-full flex justify-between items-center py-5 px-5 text-left text-primary-900 font-bold uppercase text-base desktop:w-auto desktop:h-24 desktop:py-0 desktop:px-3 desktop:justify-start desktop:gap-1.5 desktop:text-primary-700 desktop:text-sm desktop:tracking-wide desktop:hover:text-accent-500 desktop:group-hover:text-accent-500 transition-colors whitespace-nowrap"
      >
        <span className="desktop:hidden">{category.mobileName ?? category.name}</span>
        <span className="hidden desktop:inline">{category.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 text-accent-500 desktop:w-4 desktop:h-4 desktop:text-current transition-transform duration-200 desktop:group-hover:rotate-180 ${isOpen ? "rotate-180 desktop:rotate-0" : ""}`} aria-hidden="true">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>

      <div className={`${isOpen ? "block" : "hidden"} bg-gray-50 py-3 desktop:bg-white desktop:py-2 ${panelDesktop} ${panelVisibility}`}>
        {category.links.map((link, index) =>
          link.subLinks ? (
            <div key={index}>
              <button
                type="button"
                onClick={() => { const key = category.name + "-" + link.label; setExpandedSubLink(expandedSubLink === key ? null : key); }}
                aria-expanded={expandedSubLink === category.name + "-" + link.label}
                className="w-full flex justify-between items-center text-left px-8 py-3 text-primary-700 text-base font-semibold border-t border-gray-200 mt-1 desktop:px-5 desktop:py-2.5 desktop:font-medium desktop:border-gray-100 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
              >
                <span>{link.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-transform duration-200 ${expandedSubLink === category.name + "-" + link.label ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`${expandedSubLink === category.name + "-" + link.label ? "block" : "hidden"} bg-white desktop:bg-gray-50 desktop:pb-1`}>
                {link.subLinks.map((sub, si) =>
                  sub.subLinks ? (
                    <div key={si}>
                      <button
                        type="button"
                        onClick={() => { const key = category.name + "-" + sub.label; setExpandedSubSubLink(expandedSubSubLink === key ? null : key); }}
                        aria-expanded={expandedSubSubLink === category.name + "-" + sub.label}
                        className="w-full flex justify-between items-center text-left pl-12 pr-8 py-2.5 text-primary-700 text-sm font-medium border-t border-gray-100 desktop:border-0 desktop:pl-8 desktop:pr-5 desktop:py-2 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
                      >
                        <span>{sub.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-transform duration-200 ${expandedSubSubLink === category.name + "-" + sub.label ? "rotate-180" : ""}`}>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div className={`${expandedSubSubLink === category.name + "-" + sub.label ? "block" : "hidden"} bg-gray-50 desktop:bg-white`}>
                        {sub.subLinksAllLabel !== "" && (
                          <Link href={sub.href} className="block pl-14 pr-8 py-2 text-primary-700 text-xs font-semibold border-b border-gray-200 desktop:pl-10 desktop:pr-5 desktop:py-1.5 desktop:border-gray-100 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors" onClick={closeMobile} prefetch={false}>
                            {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                          </Link>
                        )}
                        {sub.subLinks.map((subsub, ssi) => (
                          <Link key={ssi} href={subsub.href} className="block pl-16 pr-8 py-2 text-primary-600 text-xs font-medium desktop:pl-12 desktop:pr-5 desktop:py-1.5 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors" onClick={closeMobile} prefetch={false}>
                            {subsub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={si}
                      href={sub.href}
                      className="block pl-12 pr-8 py-2.5 text-primary-700 text-sm font-medium desktop:pl-8 desktop:pr-5 desktop:py-2 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
                      onClick={closeMobile}
                      prefetch={false}
                    >
                      {sub.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={link.href}
              className="block px-8 py-3 text-primary-700 text-base font-medium desktop:px-5 desktop:py-2.5 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
              onClick={closeMobile}
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
