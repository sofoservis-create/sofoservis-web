"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { pushDataLayerEvent } from "@/lib/gtm";

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

interface NavCategory {
  name: string;
  mobileName?: string;
  links: NavLink[];
  flat?: boolean;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedSubLink, setExpandedSubLink] = useState<string | null>(null);
  const [expandedSubSubLink, setExpandedSubSubLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const phoneBlockRef = useRef<HTMLDivElement>(null);
  const savedScrollY = useRef<number | null>(null);
  const navLocked = useRef(false);
  const router = useRouter();

  // Get current pathname to determine language
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  const shouldScrollToTop = useMemo(() => {
    if (!pathname) return false;
    const bases = [
      "/montaz-nabytku",
      "/montaz-kuchyne",
      "/hodinovy-manzel-majster",
      "/en/furniture-assembly",
      "/en/kitchen-installation",
      "/en/handyman-services",
    ];
    return bases.some((base) => pathname.startsWith(base));
  }, [pathname]);

  const routeMap: Record<string, string> = {
    "/": "/en",
    "/en": "/",
    "/stahovanie": "/en/moving",
    "/en/moving": "/stahovanie",
    "/vypratavanie": "/en/junk-removal",
    "/en/junk-removal": "/vypratavanie",
    "/stahovanie-bytov-domov": "/en/apartment-moving",
    "/en/apartment-moving": "/stahovanie-bytov-domov",
    "/stahovanie-kancelarii-firiem": "/en/office-moving",
    "/en/office-moving": "/stahovanie-kancelarii-firiem",
    "/stahovanie-preprava-nabytku": "/en/furniture-moving-removal",
    "/en/furniture-moving-removal": "/stahovanie-preprava-nabytku",
    "/stahovanie-tazkych-bremien": "/en/moving-heavy-loads",
    "/en/moving-heavy-loads": "/stahovanie-tazkych-bremien",
    "/medzinarodne-stahovanie": "/en/international-moving-services",
    "/en/international-moving-services": "/medzinarodne-stahovanie",
    "/vypratavanie-bytov-domov": "/en/home-junk-removal",
    "/en/home-junk-removal": "/vypratavanie-bytov-domov",
    "/vypratavanie-pivnic-garazi-nebytovych-priestorov": "/en/basement-garage-junk-removal",
    "/en/basement-garage-junk-removal": "/vypratavanie-pivnic-garazi-nebytovych-priestorov",
    "/cistenie-vypratavanie-pozemkov-nehnutelnosti": "/en/property-land-junk-removal",
    "/en/property-land-junk-removal": "/cistenie-vypratavanie-pozemkov-nehnutelnosti",
    "/vypratavanie-odvoz-stareho-nabytku": "/en/furniture-removal",
    "/en/furniture-removal": "/vypratavanie-odvoz-stareho-nabytku",
    "/odvoz-likvidacia-stavebneho-odpadu": "/en/construction-waste-removal",
    "/en/construction-waste-removal": "/odvoz-likvidacia-stavebneho-odpadu",
    "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov": "/en/hazardous-waste-removal",
    "/en/hazardous-waste-removal": "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
    "/buranie-demolacia-domov-bytov": "/en/demolition-services",
    "/buranie-stien-priecok": "/en/wall-demolition",
    "/buracie-demolacne-prace": "/en/demolition-services",
    "/en/demolition-services": "/buranie-demolacia-domov-bytov",
    "/montaz-nabytku": "/en/furniture-assembly",
    "/en/furniture-assembly": "/montaz-nabytku",
    "/montaz-kuchyne": "/en/kitchen-installation",
    "/en/kitchen-installation": "/montaz-kuchyne",
    "/hodinovy-manzel-majster": "/en/handyman-services",
    "/en/handyman-services": "/hodinovy-manzel-majster",
    "/kontakt": "/en/contact",
    "/en/contact": "/kontakt",
    "/cennik": "/en/pricing",
    "/en/pricing": "/cennik",
    "/referencie": "/en/reviews",
    "/en/reviews": "/referencie",
    "/en/wall-demolition": "/buranie-stien-priecok",
    "/zasady-pouzivania-cookies": "/en/cookie-policy",
    "/en/cookie-policy": "/zasady-pouzivania-cookies",
    "/zasady-spracovania-osobnych-udajov": "/en/privacy-policy",
    "/en/privacy-policy": "/zasady-spracovania-osobnych-udajov",
    "/vseobecne-obchodne-podmienky": "/en/terms-of-service",
    "/en/terms-of-service": "/vseobecne-obchodne-podmienky",
    "/stahovanie-bratislava": "/en/moving-bratislava",
    "/en/moving-bratislava": "/stahovanie-bratislava",
    "/stahovanie-trnava": "/en/moving-trnava",
    "/en/moving-trnava": "/stahovanie-trnava",
    "/stahovanie-pezinok": "/en/moving-pezinok",
    "/en/moving-pezinok": "/stahovanie-pezinok",
    "/stahovanie-senica": "/en/moving-senica",
    "/en/moving-senica": "/stahovanie-senica",
    "/stahovanie-nitra": "/en/moving-nitra",
    "/en/moving-nitra": "/stahovanie-nitra",
    "/stahovanie-hlohovec": "/en/moving-hlohovec",
    "/en/moving-hlohovec": "/stahovanie-hlohovec",
    "/stahovanie-komarno": "/en/moving-komarno",
    "/en/moving-komarno": "/stahovanie-komarno",
    "/stahovanie-levice": "/en/moving-levice",
    "/en/moving-levice": "/stahovanie-levice",
    "/stahovanie-senec": "/en/moving-senec",
    "/en/moving-senec": "/stahovanie-senec",
    "/stahovanie-piestany": "/en/moving-piestany",
    "/en/moving-piestany": "/stahovanie-piestany",
    "/stahovanie-galanta": "/en/moving-galanta",
    "/en/moving-galanta": "/stahovanie-galanta",
    "/stahovanie-malacky": "/en/moving-malacky",
    "/en/moving-malacky": "/stahovanie-malacky",
    "/stahovanie-samorin": "/en/moving-samorin",
    "/en/moving-samorin": "/stahovanie-samorin",
    "/stahovanie-stupava": "/en/moving-stupava",
    "/en/moving-stupava": "/stahovanie-stupava",
    "/stahovanie-sala": "/en/moving-sala",
    "/en/moving-sala": "/stahovanie-sala",
    "/buracie-demolacne-prace/bratislava": "/en/demolition-bratislava",
    "/en/demolition-bratislava": "/buracie-demolacne-prace/bratislava",
    "/buracie-demolacne-prace/nitra": "/en/demolition-nitra",
    "/en/demolition-nitra": "/buracie-demolacne-prace/nitra",
    "/buracie-demolacne-prace/pezinok": "/en/demolition-pezinok",
    "/en/demolition-pezinok": "/buracie-demolacne-prace/pezinok",
    "/buracie-demolacne-prace/trnava": "/en/demolition-trnava",
    "/en/demolition-trnava": "/buracie-demolacne-prace/trnava",
    "/hodinovy-manzel-majster/bratislava": "/en/handyman-bratislava",
    "/en/handyman-bratislava": "/hodinovy-manzel-majster/bratislava",
    "/hodinovy-manzel-majster/galanta": "/en/handyman-galanta",
    "/en/handyman-galanta": "/hodinovy-manzel-majster/galanta",
    "/hodinovy-manzel-majster/levice": "/en/handyman-levice",
    "/en/handyman-levice": "/hodinovy-manzel-majster/levice",
    "/hodinovy-manzel-majster/nitra": "/en/handyman-nitra",
    "/en/handyman-nitra": "/hodinovy-manzel-majster/nitra",
    "/hodinovy-manzel-majster/piestany": "/en/handyman-piestany",
    "/en/handyman-piestany": "/hodinovy-manzel-majster/piestany",
    "/hodinovy-manzel-majster/sala": "/en/handyman-sala",
    "/en/handyman-sala": "/hodinovy-manzel-majster/sala",
    "/hodinovy-manzel-majster/trnava": "/en/handyman-trnava",
    "/en/handyman-trnava": "/hodinovy-manzel-majster/trnava",
    "/odvoz-likvidacia-stavebneho-odpadu/bratislava": "/en/construction-waste-removal-bratislava",
    "/en/construction-waste-removal-bratislava": "/odvoz-likvidacia-stavebneho-odpadu/bratislava",
    "/odvoz-likvidacia-stavebneho-odpadu/galanta": "/en/construction-waste-removal-galanta",
    "/en/construction-waste-removal-galanta": "/odvoz-likvidacia-stavebneho-odpadu/galanta",
    "/odvoz-likvidacia-stavebneho-odpadu/hlohovec": "/en/construction-waste-removal-hlohovec",
    "/en/construction-waste-removal-hlohovec": "/odvoz-likvidacia-stavebneho-odpadu/hlohovec",
    "/odvoz-likvidacia-stavebneho-odpadu/nitra": "/en/construction-waste-removal-nitra",
    "/en/construction-waste-removal-nitra": "/odvoz-likvidacia-stavebneho-odpadu/nitra",
    "/odvoz-likvidacia-stavebneho-odpadu/senec": "/en/construction-waste-removal-senec",
    "/en/construction-waste-removal-senec": "/odvoz-likvidacia-stavebneho-odpadu/senec",
    "/odvoz-likvidacia-stavebneho-odpadu/senica": "/en/construction-waste-removal-senica",
    "/en/construction-waste-removal-senica": "/odvoz-likvidacia-stavebneho-odpadu/senica",
    "/odvoz-likvidacia-stavebneho-odpadu/trnava": "/en/construction-waste-removal-trnava",
    "/en/construction-waste-removal-trnava": "/odvoz-likvidacia-stavebneho-odpadu/trnava",
    "/vypratavanie-bytov-domov/bratislava": "/en/home-junk-removal-bratislava",
    "/en/home-junk-removal-bratislava": "/vypratavanie-bytov-domov/bratislava",
    "/vypratavanie-odvoz-stareho-nabytku/bratislava": "/en/old-furniture-removal-bratislava",
    "/en/old-furniture-removal-bratislava": "/vypratavanie-odvoz-stareho-nabytku/bratislava",
    "/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava": "/en/basement-junk-removal-bratislava",
    "/en/basement-junk-removal-bratislava": "/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
    "/montaz-nabytku/bratislava": "/en/furniture-assembly-bratislava",
    "/en/furniture-assembly-bratislava": "/montaz-nabytku/bratislava",
    "/o-nas": "/en/about",
    "/en/about": "/o-nas",
  };

  const getLanguageToggleHref = () => {
    if (!pathname) return isEnglish ? "/" : "/en";
    const mapped = routeMap[pathname];
    if (mapped) return mapped;
    const matchingKey = Object.keys(routeMap).find(
      (key) => key !== "/" && key !== "/en" && pathname.startsWith(key + "/")
    );
    if (matchingKey) return routeMap[matchingKey];
    return isEnglish ? "/" : "/en";
  };

  const handleCtaClick: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    // GTM event pre klik na tlačidlo "Zavolaj" / "Call us" v navbare
    try {
      pushDataLayerEvent("call_click", {
        event_category: "engagement",
        event_label: pathname,
        language: isEnglish ? "en" : "sk",
        location: "navbar_cta",
      });
    } catch {
      // nechceme blokovať klik ani scroll pri chybe trackingu
    }

    if (shouldScrollToTop) {
      event.preventDefault();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Handle scroll for desktop navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (!navLocked.current) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  // Restore scroll and unlock navbar after language navigation completes
  useEffect(() => {
    setShowPhone(false);
    if (savedScrollY.current !== null) {
      const y = savedScrollY.current;
      savedScrollY.current = null;
      window.scrollTo({ top: y, behavior: "instant" });
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "instant" });
        navLocked.current = false;
        setIsScrolled(window.scrollY > 50);
      }, 100);
    }
  }, [pathname]);

  // Language switch — locks navbar height and saves scroll before navigating
  const handleLangSwitch = useCallback((href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    savedScrollY.current = window.scrollY;
    navLocked.current = true;
    router.push(href, { scroll: false });
  }, [router]);

  const handlePhoneClose = useCallback(() => {
    setShowPhone(false);
  }, []);

  const handlePhoneToggle = useCallback(() => {
    setShowPhone((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!showPhone) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (phoneBlockRef.current && !phoneBlockRef.current.contains(e.target as Node)) {
        handlePhoneClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [showPhone, handlePhoneClose]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Navigation categories for Slovak
  const navCategoriesSK: NavCategory[] = [
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
            { href: "/stahovanie-klavira", label: "Sťahovanie klavírov" },
            { href: "/stahovanie-pianina", label: "Sťahovanie pianín" },
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
              subLinks: [
                { href: "/hodinovy-manzel-majster/bratislava", label: "Bratislava" },
                { href: "/hodinovy-manzel-majster/galanta", label: "Galanta" },
                { href: "/hodinovy-manzel-majster/levice", label: "Levice" },
                { href: "/hodinovy-manzel-majster/nitra", label: "Nitra" },
                { href: "/hodinovy-manzel-majster/piestany", label: "Piešťany" },
                { href: "/hodinovy-manzel-majster/sala", label: "Šaľa" },
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
        { href: "/blog", label: "Blog" },
      ],
    },
  ];

  const navCategoriesEN: NavCategory[] = [
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
              subLinks: [
                { href: "/en/handyman-bratislava", label: "Bratislava" },
                { href: "/en/handyman-galanta", label: "Galanta" },
                { href: "/en/handyman-levice", label: "Levice" },
                { href: "/en/handyman-nitra", label: "Nitra" },
                { href: "/en/handyman-piestany", label: "Piešťany" },
                { href: "/en/handyman-sala", label: "Šaľa" },
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

  const mobileNavCategoriesSK: NavCategory[] = [
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
      name: "INFORMÁCIE",
      links: [
        { href: "/kontakt", label: "Kontakt" },
        { href: "/blog", label: "Blog" },
      ],
    },
  ];

  const mobileNavCategoriesEN: NavCategory[] = [
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
      name: "INFORMATION",
      flat: true,
      links: [
        { href: "/en/contact", label: "Contact" },
      ],
    },
  ];

  // Set the appropriate navigation categories based on language
  const navCategories = isEnglish ? navCategoriesEN : navCategoriesSK;
  const mobileNavCategories = isEnglish ? mobileNavCategoriesEN : mobileNavCategoriesSK;

  // Text content based on language
  const texts = {
    sk: {
      callUs: "Zavolaj",
      showNumber: "Zobraz.",
      phoneNumber:
        pathname?.includes("/montaz-nabytku") ||
        pathname?.includes("/montaz-kuchyne") ||
        pathname?.includes("/hodinovy-manzel-majster")
          ? "0952 044 363"
          : "0951 735 130",
      businessHours: "6 dní v týždni 8:00 - 17:00",
      phoneLabel: "Zavolajte nám",
      menu: "Menu",
      close: "Zavrieť",
      getQuote: "ZÍSKAŤ PONUKU",
    },
    en: {
      callUs: "Call Us",
      showNumber: "Show",
      phoneNumber:
        pathname?.includes("/montaz-nabytku") ||
        pathname?.includes("/montaz-kuchyne") ||
        pathname?.includes("/hodinovy-manzel-majster") ||
        pathname?.includes("/en/furniture-assembly") ||
        pathname?.includes("/en/kitchen-installation") ||
        pathname?.includes("/en/handyman-services")
          ? "0952 044 363"
          : "0951 735 130",
      businessHours: "6 dní v týždni 8:00 - 17:00",
      phoneLabel: "Call us now",
      menu: "Menu",
      close: "Close",
      getQuote: "GET A QUOTE",
    },
  };

  // Get text content for current language
  const t = isEnglish ? texts.en : texts.sk;

  // Track phone call clicks (desktop + mobile)
  const handleCallClick: React.MouseEventHandler<HTMLAnchorElement> = () => {
    try {
      pushDataLayerEvent("call_click", {
        event_category: "engagement",
        event_label: pathname,
        phone_number: t.phoneNumber,
        language: isEnglish ? "en" : "sk",
        location: "navbar",
      });
    } catch {
      // Tracking nesmie rozbiť klik na tel. odkaz
    }
  };

  // Desktop navigation item with dropdown
  const DesktopNavItem = ({ category }: { category: NavCategory }) => {
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
      <div className={`border border-gray-100 w-60 absolute left-0 top-full min-w-[240px] py-2 mt-1 bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out z-50 max-h-[70vh] overflow-y-auto ${hasActiveSubLink ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"}`}>
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
                            <Link href={sub.href} className="block pl-10 pr-5 py-1.5 text-primary-700 text-xs hover:bg-accent-400 hover:text-primary-900 transition-colors font-semibold border-b border-gray-100" prefetch={false}>
                              {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                            </Link>
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
  };

  // Mobile navigation item with dropdown
  const MobileNavItem = ({ category }: { category: NavCategory }) => {
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
                                <Link href={sub.href} className="block pl-14 pr-8 py-2 text-primary-700 text-xs font-semibold border-b border-gray-200" onClick={() => setMobileMenuOpen(false)} prefetch={false}>
                                  {sub.subLinksAllLabel ?? "→ Všetky mestské časti"}
                                </Link>
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
  };

  return (
    <>
      {/* Desktop Navbar - Positioned absolutely over the hero section */}
      <div
        className={`hidden desktop:block w-full fixed top-0 left-0 right-0 z-[100] ${
          isScrolled ? "py-2" : "pt-6"
        } transition-all duration-300`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 desktop:px-8">
          <nav
            className={`bg-white rounded-xl shadow-xl ${
              isScrolled ? "" : "shadow-lg"
            } transition-all duration-300`}
          >
            <div className="flex items-center justify-between h-24 px-4 lg:px-6">
              {/* Logo */}
              <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <Link
                  href={isEnglish ? "/en" : "/"}
                  className="inline-block"
                  aria-label={
                    isEnglish
                      ? "SofoServis homepage"
                      : "SofoServis domovská stránka"
                  }
                >
                  <Image
                    src="/images/Sofoservis_nove_logo_SVG.svg"
                    alt="SofoServis"
                    width={181}
                    height={77}
                    className="h-[77px] w-auto"
                    priority
                    unoptimized
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav
                className="flex items-center"
                aria-label={isEnglish ? "Main navigation" : "Hlavná navigácia"}
              >
                {navCategories.map((category, index) => (
                  <DesktopNavItem key={index} category={category} />
                ))}
              </nav>

              {/* Call to Action */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-100 rounded-full p-0.5">
                  {isEnglish ? (
                    <>
                      <a
                        href={getLanguageToggleHref()}
                        onClick={handleLangSwitch(getLanguageToggleHref())}
                        className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                        aria-label="Prepnúť na slovenčinu"
                      >
                        SK
                      </a>
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                        EN
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                        SK
                      </span>
                      <a
                        href={getLanguageToggleHref()}
                        onClick={handleLangSwitch(getLanguageToggleHref())}
                        className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                        aria-label="Switch to English"
                      >
                        EN
                      </a>
                    </>
                  )}
                </div>

                <a
                  href={`tel:${t.phoneNumber.replace(/\s/g, "")}`}
                  className="bg-accent-400 text-primary-900 px-4 py-3 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center hover:bg-accent-300 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  onClick={handleCallClick}
                >
                  {t.callUs}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </a>

                <div className="flex flex-col items-end" ref={phoneBlockRef}>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-accent-500 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {showPhone ? (
                      <a
                        href={`tel:${t.phoneNumber.replace(/\s/g, "")}`}
                        onClick={handleCallClick}
                        aria-label={`${t.phoneLabel}: ${t.phoneNumber}`}
                        className="font-bold text-lg text-primary-900 hover:text-accent-500 transition-colors whitespace-nowrap"
                      >
                        {t.phoneNumber}
                      </a>
                    ) : (
                      <>
                        <span className="font-bold text-lg text-primary-900 whitespace-nowrap">
                          {t.phoneNumber.slice(0, 4)}&nbsp;***
                        </span>
                        <button
                          type="button"
                          onClick={handlePhoneToggle}
                          aria-label={t.showNumber}
                          aria-expanded={showPhone}
                          className="bg-accent-400 hover:bg-accent-300 text-primary-900 px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-none"
                        >
                          {t.showNumber}
                        </button>
                      </>
                    )}
                  </div>
                  <div className="text-primary-900 text-sm font-semibold mt-1 whitespace-nowrap">
                    {t.businessHours}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav ref={mobileNavRef} className="desktop:hidden fixed top-0 left-0 right-0 z-[100] bg-white shadow-md">
        {/* Mobile Header */}
        <div
          className={`flex items-center justify-between px-3 border-b transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}
        >
          {/* Logo - Made larger for mobile */}
          <Link
            href={isEnglish ? "/en" : "/"}
            className="inline-block"
            aria-label={
              isEnglish ? "SofoServis homepage" : "SofoServis domovská stránka"
            }
          >
            <Image
              src="/images/Sofoservis_nove_logo_SVG.svg"
              alt="SofoServis"
              width={169}
              height={68}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-[58px]" : "h-[88px]"
              }`}
              priority
              unoptimized
            />
          </Link>

          {/* Header Buttons */}
          <div className="flex items-center">
            <a
              href={`tel:${t.phoneNumber.replace(/\s/g, "")}`}
              className="text-primary-900 p-3 mr-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={`${t.phoneLabel}: ${t.phoneNumber}`}
              onClick={handleCallClick}
            >
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
                className="w-7 h-7 text-accent-500"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>

            <button
              className="p-3 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? t.close : t.menu}
            >
              <svg
                className="w-7 h-7 text-primary-900"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className={mobileMenuOpen ? "hidden" : "block"}
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className={mobileMenuOpen ? "block" : "hidden"}
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className={`bg-white overflow-y-auto ${
              isScrolled
                ? "max-h-[calc(100vh-5rem)]"
                : "max-h-[calc(100vh-6rem)]"
            }`}
          >
            {/* Mobile Navigation */}
            <div className="border-t border-gray-200">
              {mobileNavCategories.map((category, index) => (
                <MobileNavItem key={index} category={category} />
              ))}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="grid grid-cols-2 gap-3 p-4 border-t border-gray-200">
              {showPhone ? (
                <Link
                  href={`tel:${t.phoneNumber.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 bg-white border border-accent-500 text-primary-900 py-3 px-3 font-medium rounded-md text-sm sm:text-base hover:bg-gray-50 transition-colors"
                  onClick={handleCallClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-accent-500 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="whitespace-nowrap overflow-hidden">
                    {t.phoneNumber}
                  </span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={handlePhoneToggle}
                  aria-label={t.showNumber}
                  aria-expanded={showPhone}
                  className="flex items-center justify-center gap-2 bg-white border border-accent-500 text-primary-900 py-3 px-3 font-medium rounded-md text-sm sm:text-base hover:bg-gray-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-accent-500 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="whitespace-nowrap overflow-hidden">
                    {t.phoneNumber.slice(0, 4)}&nbsp;***
                  </span>
                  <span className="bg-accent-400 text-primary-900 font-semibold text-xs px-2 py-0.5 rounded-md">
                    {t.showNumber}
                  </span>
                </button>
              )}

              <Link
                href={isEnglish ? "/en/contact" : "/kontakt"}
                className="flex items-center justify-center gap-1 bg-accent-500 text-primary-900 py-3 px-3 font-medium rounded-md text-sm sm:text-base hover:bg-accent-400 transition-colors shadow-sm"
                onClick={(e) => {
                  handleCtaClick(e);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="whitespace-nowrap">{t.getQuote}</span>
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="flex justify-center py-3 border-t border-gray-200">
              <div className="flex items-center bg-gray-100 rounded-full p-0.5">
                {isEnglish ? (
                  <>
                    <a
                      href={getLanguageToggleHref()}
                      onClick={handleLangSwitch(getLanguageToggleHref())}
                      className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                      aria-label="Prepnúť na slovenčinu"
                    >
                      SK
                    </a>
                    <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                      EN
                    </span>
                  </>
                ) : (
                  <>
                    <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-accent-400 text-primary-900">
                      SK
                    </span>
                    <a
                      href={getLanguageToggleHref()}
                      onClick={handleLangSwitch(getLanguageToggleHref())}
                      className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide text-primary-500 hover:text-primary-800 transition-colors cursor-pointer"
                      aria-label="Switch to English"
                    >
                      EN
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="text-center py-3 text-primary-900 text-lg font-medium border-t border-gray-200">
              {t.businessHours}
            </div>
          </div>
        )}
      </nav>

      {/* Space to prevent content from being hidden behind fixed navbar on mobile */}
      <div className={`${isScrolled ? "h-20" : "h-24"} desktop:h-0`}></div>
    </>
  );
}
