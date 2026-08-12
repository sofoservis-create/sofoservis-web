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
            { href: "/en/piano-moving", label: "Upright Piano Moving" },
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
  setMobileMenuOpen: (open: boolean) => void;
  /** Position in the navbar — identifies this category to the shared open state. */
  index: number;
  /** Desktop only: whether this category's dropdown is the open one. */
  isOpen: boolean;
  onOpenChange: (index: number, open: boolean) => void;
  /**
   * Above the breakpoint the element is a controlled dropdown; below it stays
   * uncontrolled so the native mobile accordion is untouched. Owned by Navbar
   * so every category switches mode in the same render.
   */
  isDesktop: boolean;
}

/** Matches the custom `desktop` Tailwind breakpoint (1256px), not the default `lg`. */
export const DESKTOP_QUERY = "(min-width: 1256px)";

/**
 * Grace period before a dropdown closes on mouse-out. Covers the few pixels of
 * gap between the category label and the panel below it, and stops the menu
 * flickering when the pointer sweeps across neighbouring categories.
 */
const CLOSE_DELAY_MS = 150;

// Chevron SVG used across all levels
function Chevron({ className }: { className?: string }) {
  return (
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
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Unified navigation item — single markup for mobile (accordion) and desktop (hover dropdown).
// All submenu links are always rendered in the DOM.
// Level 1: <details> — mobile accordion + desktop CSS hover.
// Level 2 & 3: <details> — works natively without JavaScript.
export const NavItem = React.memo(function NavItem({
  category,
  setMobileMenuOpen,
  index,
  isOpen,
  onOpenChange,
  isDesktop,
}: NavItemProps) {
  const closeMobile = () => setMobileMenuOpen(false);

  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const summaryRef = React.useRef<HTMLElement>(null);
  const closeTimer = React.useRef<number | null>(null);

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current === null) return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  React.useEffect(() => cancelClose, [cancelClose]);

  // Crossing the breakpoint swaps this element between a controlled desktop
  // dropdown and the uncontrolled mobile accordion. Drop any pending close and
  // clear an `open` left behind by the other mode, so neither mode inherits
  // state the user set in the other one.
  React.useEffect(() => {
    cancelClose();
    if (isDesktop && detailsRef.current) detailsRef.current.open = false;
  }, [isDesktop, cancelClose]);

  // Which device is driving the menu right now. Read from the pointer event
  // rather than a `(hover: hover)` media query: that query describes the
  // *primary* input, so a touchscreen laptop claims hover it may not be using
  // and a tablet with a mouse attached denies hover it does have.
  const pointerType = React.useRef<string>("mouse");

  // Why the dropdown is opened for real instead of only styled open:
  // browsers hide the contents of a closed <details> via
  // `::details-content { content-visibility: hidden }`, which skips the whole
  // subtree. No amount of CSS on the panel itself can override that, so hover
  // styling alone never rendered it and only a genuine `open` does.
  const handlePointerEnter = (e: React.PointerEvent<HTMLDetailsElement>) => {
    pointerType.current = e.pointerType;
    if (!isDesktop || e.pointerType !== "mouse") return;
    cancelClose();
    if (!isOpen) onOpenChange(index, true);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDetailsElement>) => {
    if (!isDesktop || e.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      onOpenChange(index, false);
    }, CLOSE_DELAY_MS);
  };

  // Keyboard activation arrives as a click with `detail === 0`; let the native
  // toggle run and mirror it into state. A real mouse click is suppressed
  // because hover already governs the panel — letting it through would latch
  // the dropdown open and leave every clicked category stacked on screen.
  // Touch and pen have no hover to govern it, so there a tap toggles directly.
  const handleSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || e.detail === 0) return;
    e.preventDefault();
    if (pointerType.current !== "mouse") onOpenChange(index, !isOpen);
  };

  // `toggle` does not bubble, but guard against nested sub-section <details>
  // being mistaken for this category.
  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!isDesktop || e.target !== detailsRef.current) return;
    const next = e.currentTarget.open;
    if (next !== isOpen) onOpenChange(index, next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDetailsElement>) => {
    if (e.key !== "Escape" || !isDesktop || !isOpen) return;
    onOpenChange(index, false);
    summaryRef.current?.focus();
  };

  // A closed panel must reopen clean, so collapse any sub-sections that were
  // expanded inside it (for example the city list).
  React.useEffect(() => {
    if (isOpen) return;
    detailsRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((sub) => {
        sub.open = false;
      });
  }, [isOpen]);

  // Below the breakpoint the element stays uncontrolled so the mobile accordion
  // keeps its native behaviour untouched.
  const openState = isDesktop ? { open: isOpen } : {};

  // Desktop panel base styles (position, size, shadow)
  const panelDesktop =
    "desktop:block desktop:absolute desktop:left-0 desktop:top-full desktop:w-60 desktop:min-w-[240px] desktop:bg-white desktop:border desktop:border-gray-100 desktop:rounded-lg desktop:shadow-lg desktop:py-2 desktop:mt-1 desktop:z-50 desktop:max-h-[70vh] desktop:overflow-y-auto desktop:transition-[opacity,transform,visibility] desktop:duration-150 desktop:ease-out";

  // Desktop panel visibility. `group-open:` is what actually reveals the panel,
  // since the browser only renders <details> contents once it is genuinely open.
  // The `group-hover:` variants are kept as a no-JS fallback for engines that
  // still render closed <details> contents.
  const panelVisibility =
    "desktop:invisible desktop:opacity-0 desktop:translate-y-2 desktop:group-hover:visible desktop:group-hover:opacity-100 desktop:group-hover:translate-y-0 desktop:group-open:visible desktop:group-open:opacity-100 desktop:group-open:translate-y-0";

  // ── Flat category (INFORMÁCIE / INFORMATION) ──────────────────────────────
  if (category.flat) {
    return (
      <details
        ref={detailsRef}
        {...openState}
        className="border-b border-gray-200 desktop:border-0 desktop:relative group"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onToggle={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <summary
          ref={summaryRef}
          onClick={handleSummaryClick}
          className="list-none nav-link w-full flex justify-between items-center py-5 px-5 text-left text-primary-900 font-bold uppercase text-base desktop:w-auto desktop:h-24 desktop:py-0 desktop:px-3 desktop:justify-start desktop:gap-1.5 desktop:text-primary-700 desktop:text-sm desktop:tracking-wide desktop:hover:text-accent-500 desktop:group-hover:text-accent-500 transition-colors whitespace-nowrap cursor-pointer"
        >
          <span>{category.name}</span>
          <Chevron className="w-6 h-6 text-accent-500 desktop:w-4 desktop:h-4 desktop:text-current transition-transform duration-200 desktop:group-hover:rotate-180 group-open:rotate-180 desktop:group-open:rotate-0" />
        </summary>
        <div className={`bg-gray-50 py-3 desktop:bg-white desktop:py-2 ${panelDesktop} ${panelVisibility}`}>
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
      </details>
    );
  }

  // ── Regular category (with accordion on mobile, hover on desktop) ─────────
  return (
    <details
      ref={detailsRef}
      {...openState}
      className="border-b border-gray-200 desktop:border-0 desktop:relative group"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onToggle={handleToggle}
      onKeyDown={handleKeyDown}
    >
      {/* Level 1 summary — category name */}
      <summary
        ref={summaryRef}
        onClick={handleSummaryClick}
        className="list-none nav-link w-full flex justify-between items-center py-5 px-5 text-left text-primary-900 font-bold uppercase text-base desktop:w-auto desktop:h-24 desktop:py-0 desktop:px-3 desktop:justify-start desktop:gap-1.5 desktop:text-primary-700 desktop:text-sm desktop:tracking-wide desktop:hover:text-accent-500 desktop:group-hover:text-accent-500 transition-colors whitespace-nowrap cursor-pointer"
      >
        <span className="desktop:hidden">{category.mobileName ?? category.name}</span>
        <span className="hidden desktop:inline">{category.name}</span>
        <Chevron className="w-6 h-6 text-accent-500 desktop:w-4 desktop:h-4 desktop:text-current transition-transform duration-200 desktop:group-hover:rotate-180 group-open:rotate-180 desktop:group-open:rotate-0" />
      </summary>

      {/* Level 1 panel */}
      <div className={`bg-gray-50 py-3 desktop:bg-white desktop:py-2 ${panelDesktop} ${panelVisibility}`}>
        {category.links.map((link, index) =>
          link.subLinks ? (
            // ── Level 2: expandable sub-section (e.g. "Mestá") ──────────────
            // Uses <details> so it works without JavaScript
            <details key={index} className="group/sub">
              <summary className="list-none w-full flex justify-between items-center text-left px-8 py-3 text-primary-700 text-base font-semibold border-t border-gray-200 mt-1 desktop:px-5 desktop:py-2.5 desktop:font-medium desktop:border-gray-100 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors cursor-pointer">
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
                  className="flex-shrink-0 transition-transform duration-200 group-open/sub:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>

              {/* Level 2 panel */}
              <div className="bg-white desktop:bg-gray-50 desktop:pb-1">
                {link.subLinks.map((sub, si) =>
                  sub.subLinks ? (
                    // ── Level 3: expandable sub-sub-section ────────────────
                    // Uses <details> so it works without JavaScript
                    <details key={si} className="group/subsub">
                      <summary className="list-none w-full flex justify-between items-center text-left pl-12 pr-8 py-2.5 text-primary-700 text-sm font-medium border-t border-gray-100 desktop:border-0 desktop:pl-8 desktop:pr-5 desktop:py-2 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors cursor-pointer">
                        <span>{sub.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0 transition-transform duration-200 group-open/subsub:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>

                      {/* Level 3 panel */}
                      <div className="bg-gray-50 desktop:bg-white">
                        {sub.subLinksAllLabel !== "" && (
                          <Link
                            href={sub.href}
                            className="block pl-14 pr-8 py-2 text-primary-700 text-xs font-semibold border-b border-gray-200 desktop:pl-10 desktop:pr-5 desktop:py-1.5 desktop:border-gray-100 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
                            onClick={closeMobile}
                            prefetch={false}
                          >
                            {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                          </Link>
                        )}
                        {sub.subLinks.map((subsub, ssi) => (
                          <Link
                            key={ssi}
                            href={subsub.href}
                            className="block pl-16 pr-8 py-2 text-primary-600 text-xs font-medium desktop:pl-12 desktop:pr-5 desktop:py-1.5 desktop:hover:bg-accent-400 desktop:hover:text-primary-900 transition-colors"
                            onClick={closeMobile}
                            prefetch={false}
                          >
                            {subsub.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    // Plain sub-link (no further nesting)
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
            </details>
          ) : (
            // Plain link (no sub-levels)
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
    </details>
  );
});
