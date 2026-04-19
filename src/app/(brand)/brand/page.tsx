"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const translations = {
  sk: {
    badgeLabel: "Brand Guidelines",
    tagline: "Sťahovacie služby s úsmevom a bez stresu",
    version: "Verzia 1.0",
    internalDoc: "2025 — Interný dokument",
    copied: "✓ Skopírované",
    copy: "Kopírovať",
    logoSection: {
      title: "Logo",
      subtitle: "Vždy používajte originálny logo súbor. Neupravujte farby, proporcie ani font.",
      lightBg: "Svetlé pozadie",
      whiteBg: "Biele pozadie",
      darkBg: "Tmavé pozadie",
      yellowBg: "Žlté pozadie",
      note: "Logo súbor:",
      noteDetail: "— 1024×1024px. Pre tlač kontaktujte nás o vektorový formát.",
      dlToggleOpen: "↓ Stiahnuť logo",
      dlToggleClose: "✕ Zavrieť",
    },
    colorsSection: {
      title: "Farby",
      subtitle: "Žltá je naša primárna akcentová farba. Čierna komunikuje silu a spoľahlivosť. Teplá biela je základ stránky.",
      specialColors: "Špeciálne farby",
      accentScale: "Akcentová škála — Žltá",
      primaryScale: "Primárna škála — Čierna / Sivá",
      wcagLabel: "Kontrast WCAG AA",
      clickToCopy: "Kliknúť pre kopírovanie",
      wcagWarning: "⚠️ Nikdy nepoužívajte žltý text na bielom/svetlom pozadí — nedostatočný kontrast.",
      combos: [
        { combo: "Čierna na žltej", pass: true, ratio: "14.1:1" },
        { combo: "Žltá na čiernej", pass: true, ratio: "14.1:1" },
        { combo: "Čierna na bielej", pass: true, ratio: "21:1" },
        { combo: "Sivá 500 na bielej", pass: true, ratio: "5.7:1" },
        { combo: "Biela na čiernej", pass: true, ratio: "21:1" },
        { combo: "Žltá na bielej", pass: false, ratio: "1.7:1 ✗" },
      ],
    },
    typographySection: {
      title: "Typografia",
      subtitle: "Používame výhradne font Sora. Je dostupný zadarmo cez Google Fonts.",
      specimens: [
        { label: "Display", size: 48, weight: 700, sample: "Sťahujeme váš svet." },
        { label: "H1", size: 36, weight: 700, sample: "Sťahovacie služby Bratislava" },
        { label: "H2", size: 28, weight: 600, sample: "Profesionálny tím k vašim službám" },
        { label: "H3", size: 22, weight: 600, sample: "Obhliadka zadarmo, bez záväzkov" },
        { label: "Body Large", size: 18, weight: 400, sample: "Poskytujeme sťahovacie služby 6 dní v týždni s férovou cenou a bez skrytých poplatkov." },
        { label: "Body", size: 16, weight: 400, sample: "Naša spoločnosť vznikla z presvedčenia, že sťahovanie nemusí byť stresujúce." },
        { label: "Small / Caption", size: 13, weight: 400, sample: "Závodná 53, Bratislava — 0951 735 130" },
      ],
      note: "Importovať cez Google Fonts:",
    },
    iconsSection: {
      title: "Knižnica ikon",
      subtitleSuffix: "ikon v štýle: hrubý čierny obrys, žlté výplne, biele svetlá. Formát: SVG.",
      note: "Kliknite na ikonu pre skopírovanie cesty. Súbory sú v",
      noteDetail: "— otvorte v prehliadači, uložte ako SVG.",
      clickTip: "Kliknúť — kopírovať cestu:",
      downloadSvg: "SVG",
    },
    voiceSection: {
      title: "Hlas značky",
      subtitle: "Ako hovoríme a čo zdôrazňujeme — konzistentne naprieč všetkými kanálmi.",
      words: [
        { word: "Priateľský", desc: "Zákazníci sú susedia, nie transakcie. Píšeme im ako ľudia, nie firmy." },
        { word: "Spoľahlivý", desc: "Vždy prídu načas. Transparentná cena, žiadne prekvapenia." },
        { word: "Profesionálny", desc: "Skúsený tím, správne vybavenie, zodpovedný prístup." },
        { word: "Bez stresu", desc: "Riešime všetko, zákazník sa nemusí o nič starať." },
      ],
      examplesLabel: "Príklady hlasenia",
      examples: [
        { type: "✅ Áno", text: "\"Poskladáme váš nábytok rýchlo, precízne a bez poškodenia.\"" },
        { type: "✅ Áno", text: "\"Zavolajte nám dnes — obhliadka je zadarmo a bez záväzkov.\"" },
        { type: "❌ Nie", text: "\"Naša spoločnosť ponúka komplexné logistické riešenia pre domácnosti.\"" },
        { type: "❌ Nie", text: "\"Kontaktujte nás pre cenovú kalkuláciu.\"" },
      ],
    },
    tokensSection: {
      title: "CSS tokeny",
      subtitle: "Kopírujte priamo do vašej kódovej bázy.",
    },
    rulesSection: {
      title: "Pravidlá použitia",
      subtitle: "Stručný prehľad — čo robiť a čo nie.",
      doTitle: "✅ Robiť",
      dontTitle: "❌ Nerobiť",
      dos: [
        "Žltá na čiernom pozadí pre CTA tlačidlá",
        "Čierny text na žltom pre dôraz",
        "Teplá biela #FAF9F6 ako základ stránky",
        "Sora font vo všetkých váhach",
        "Ikony vždy v pôvodnom pomere strán",
        "Dosť bieleho priestoru okolo loga",
      ],
      donts: [
        "Žltý text na bielom / svetlom pozadí",
        "Zmeniť farby loga",
        "Deformovať alebo otáčať logo",
        "Umiestniť logo na rušné fotky bez podkladu",
        "Používať iné fonty ako Sora",
        "Ikony v rôznych farbách než je štandard",
      ],
    },
    downloadSection: {
      title: "Stiahnutie loga",
      subtitle: "Vyberte veľkosť a pozadie, potom stiahnite PNG.",
      sizeLabel: "Veľkosť",
      bgLabel: "Pozadie",
      bgTransparent: "Transparentné",
      bgWhite: "Biela",
      bgBlack: "Čierna",
      bgYellow: "Žltá",
      downloadBtn: "Stiahnuť PNG",
    },
    footer: {
      left: "© SofoServis — Interný brand manuál. Nezdieľajte bez súhlasu.",
      right: "sofoservis.sk · info@sofoservis.sk",
    },
    iconCategories: [
      {
        name: "Sťahovanie",
        icons: [
          { file: "truck_icon.svg", label: "Nákladné auto" },
          { file: "calendar_icon.svg", label: "Plánovanie" },
          { file: "house_icon.svg", label: "Dom / Byt" },
          { file: "globe_icon.svg", label: "Medzinárodné" },
          { file: "briefcase_icon.svg", label: "Kancelária" },
          { file: "packing_box_icon.svg", label: "Balenie" },
        ],
      },
      {
        name: "Vypratávanie",
        icons: [
          { file: "vypratavanie_icon.svg", label: "Vypratávanie" },
          { file: "recycle_icon.svg", label: "Recyklácia" },
          { file: "container_icon.svg", label: "Kontajner" },
          { file: "hazmat_icon.svg", label: "Nebezpečný odpad" },
          { file: "landscape_icon.svg", label: "Pozemok" },
          { file: "sofa_icon.svg", label: "Starý nábytok" },
        ],
      },
      {
        name: "Montáž & Inštalácia",
        icons: [
          { file: "furniture_icon.svg", label: "Nábytok" },
          { file: "kitchen_icon.svg", label: "Kuchyňa" },
          { file: "appliance_icon.svg", label: "Spotrebiče" },
          { file: "curtain_icon.svg", label: "Garniže" },
          { file: "artwork_icon.svg", label: "Obraz / Dekor" },
        ],
      },
      {
        name: "Hodinový majster",
        icons: [
          { file: "wrench_icon.svg", label: "Opravy" },
          { file: "hammer_icon.svg", label: "Kladivo" },
          { file: "electrical_icon.svg", label: "Elektrika" },
          { file: "plumbing_icon.svg", label: "Inštalatér" },
          { file: "paint_icon.svg", label: "Maľovanie" },
          { file: "garden_icon.svg", label: "Záhrada" },
          { file: "repair_icon.svg", label: "Servis" },
        ],
      },
      {
        name: "Búracie práce",
        icons: [
          { file: "crane_icon.svg", label: "Žeriav" },
          { file: "heavy_machinery_icon.svg", label: "Technika" },
          { file: "wrecking_ball_icon.svg", label: "Demolácia" },
        ],
      },
      {
        name: "Ostatné",
        icons: [
          { file: "cash_icon.svg", label: "Cena" },
          { file: "document_icon.svg", label: "Dokument" },
          { file: "insurance_icon.svg", label: "Poistenie" },
          { file: "safety_icon.svg", label: "Bezpečnosť" },
          { file: "safe_icon.svg", label: "Trezor" },
        ],
      },
    ],
  },
  en: {
    badgeLabel: "Brand Guidelines",
    tagline: "Moving services with a smile and no stress",
    version: "Version 1.0",
    internalDoc: "2025 — Internal document",
    copied: "✓ Copied",
    copy: "Copy",
    logoSection: {
      title: "Logo",
      subtitle: "Always use the original logo file. Do not alter colours, proportions or the font.",
      lightBg: "Light background",
      whiteBg: "White background",
      darkBg: "Dark background",
      yellowBg: "Yellow background",
      note: "Logo file:",
      noteDetail: "— 1024×1024px. For print, contact us for a vector format.",
      dlToggleOpen: "↓ Download logo",
      dlToggleClose: "✕ Close",
    },
    colorsSection: {
      title: "Colours",
      subtitle: "Yellow is our primary accent colour. Black communicates strength and reliability. Warm white is the page base.",
      specialColors: "Brand colours",
      accentScale: "Accent scale — Yellow",
      primaryScale: "Primary scale — Black / Grey",
      wcagLabel: "WCAG AA Contrast",
      clickToCopy: "Click to copy",
      wcagWarning: "⚠️ Never use yellow text on white or light backgrounds — insufficient contrast.",
      combos: [
        { combo: "Black on yellow", pass: true, ratio: "14.1:1" },
        { combo: "Yellow on black", pass: true, ratio: "14.1:1" },
        { combo: "Black on white", pass: true, ratio: "21:1" },
        { combo: "Grey 500 on white", pass: true, ratio: "5.7:1" },
        { combo: "White on black", pass: true, ratio: "21:1" },
        { combo: "Yellow on white", pass: false, ratio: "1.7:1 ✗" },
      ],
    },
    typographySection: {
      title: "Typography",
      subtitle: "We use Sora exclusively. It is available for free via Google Fonts.",
      specimens: [
        { label: "Display", size: 48, weight: 700, sample: "We move your world." },
        { label: "H1", size: 36, weight: 700, sample: "Moving Services Bratislava" },
        { label: "H2", size: 28, weight: 600, sample: "Professional team at your service" },
        { label: "H3", size: 22, weight: 600, sample: "Free survey, no obligations" },
        { label: "Body Large", size: 18, weight: 400, sample: "We provide moving services 6 days a week at a fair price with no hidden fees." },
        { label: "Body", size: 16, weight: 400, sample: "Our company was founded on the belief that moving doesn't have to be stressful." },
        { label: "Small / Caption", size: 13, weight: 400, sample: "Závodná 53, Bratislava — 0951 735 130" },
      ],
      note: "Import via Google Fonts:",
    },
    iconsSection: {
      title: "Icon library",
      subtitleSuffix: "icons in style: bold black outline, yellow fills, white highlights. Format: SVG.",
      note: "Click an icon to copy its path. Files are in",
      noteDetail: "— open in browser, save as SVG.",
      clickTip: "Click — copy path:",
      downloadSvg: "SVG",
    },
    voiceSection: {
      title: "Brand voice",
      subtitle: "How we speak and what we emphasise — consistently across all channels.",
      words: [
        { word: "Friendly", desc: "Customers are neighbours, not transactions. We write like people, not corporations." },
        { word: "Reliable", desc: "Always on time. Transparent pricing, no surprises." },
        { word: "Professional", desc: "Experienced team, right equipment, responsible approach." },
        { word: "Stress-free", desc: "We handle everything so the customer doesn't have to worry." },
      ],
      examplesLabel: "Voice examples",
      examples: [
        { type: "✅ Yes", text: "\"We'll assemble your furniture quickly, precisely and without damage.\"" },
        { type: "✅ Yes", text: "\"Call us today — the survey is free and with no obligations.\"" },
        { type: "❌ No", text: "\"Our company offers comprehensive logistic solutions for households.\"" },
        { type: "❌ No", text: "\"Contact us for a price quotation.\"" },
      ],
    },
    tokensSection: {
      title: "CSS tokens",
      subtitle: "Copy directly into your codebase.",
    },
    rulesSection: {
      title: "Usage rules",
      subtitle: "Quick overview — what to do and what not to do.",
      doTitle: "✅ Do",
      dontTitle: "❌ Don't",
      dos: [
        "Yellow on black background for CTA buttons",
        "Black text on yellow for emphasis",
        "Warm white #FAF9F6 as the page base",
        "Sora font in all weights",
        "Icons always in their original aspect ratio",
        "Enough white space around the logo",
      ],
      donts: [
        "Yellow text on white or light background",
        "Alter the logo colours",
        "Distort or rotate the logo",
        "Place logo on busy photos without a backing",
        "Use fonts other than Sora",
        "Icons in colours other than the standard",
      ],
    },
    downloadSection: {
      title: "Logo download",
      subtitle: "Pick a size and background, then download your PNG.",
      sizeLabel: "Size",
      bgLabel: "Background",
      bgTransparent: "Transparent",
      bgWhite: "White",
      bgBlack: "Black",
      bgYellow: "Yellow",
      downloadBtn: "Download PNG",
    },
    footer: {
      left: "© SofoServis — Internal brand manual. Do not share without permission.",
      right: "sofoservis.sk · info@sofoservis.sk",
    },
    iconCategories: [
      {
        name: "Moving",
        icons: [
          { file: "truck_icon.svg", label: "Truck" },
          { file: "calendar_icon.svg", label: "Planning" },
          { file: "house_icon.svg", label: "House / Flat" },
          { file: "globe_icon.svg", label: "International" },
          { file: "briefcase_icon.svg", label: "Office" },
          { file: "packing_box_icon.svg", label: "Packing" },
        ],
      },
      {
        name: "Junk Removal",
        icons: [
          { file: "vypratavanie_icon.svg", label: "Junk removal" },
          { file: "recycle_icon.svg", label: "Recycling" },
          { file: "container_icon.svg", label: "Container" },
          { file: "hazmat_icon.svg", label: "Hazardous waste" },
          { file: "landscape_icon.svg", label: "Land" },
          { file: "sofa_icon.svg", label: "Old furniture" },
        ],
      },
      {
        name: "Assembly & Installation",
        icons: [
          { file: "furniture_icon.svg", label: "Furniture" },
          { file: "kitchen_icon.svg", label: "Kitchen" },
          { file: "appliance_icon.svg", label: "Appliances" },
          { file: "curtain_icon.svg", label: "Curtain rods" },
          { file: "artwork_icon.svg", label: "Artwork / Decor" },
        ],
      },
      {
        name: "Handyman",
        icons: [
          { file: "wrench_icon.svg", label: "Repairs" },
          { file: "hammer_icon.svg", label: "Hammer" },
          { file: "electrical_icon.svg", label: "Electrical" },
          { file: "plumbing_icon.svg", label: "Plumbing" },
          { file: "paint_icon.svg", label: "Painting" },
          { file: "garden_icon.svg", label: "Garden" },
          { file: "repair_icon.svg", label: "Service" },
        ],
      },
      {
        name: "Demolition",
        icons: [
          { file: "crane_icon.svg", label: "Crane" },
          { file: "heavy_machinery_icon.svg", label: "Machinery" },
          { file: "wrecking_ball_icon.svg", label: "Demolition" },
        ],
      },
      {
        name: "Other",
        icons: [
          { file: "cash_icon.svg", label: "Price" },
          { file: "document_icon.svg", label: "Document" },
          { file: "insurance_icon.svg", label: "Insurance" },
          { file: "safety_icon.svg", label: "Safety" },
          { file: "safe_icon.svg", label: "Safe" },
        ],
      },
    ],
  },
};

const accentScale = [
  { name: "50", hex: "#fefce8" },
  { name: "100", hex: "#fef9c3" },
  { name: "200", hex: "#fdf291" },
  { name: "300", hex: "#fbe85f" },
  { name: "400", hex: "#f9df2d" },
  { name: "500", hex: "#f4d80c" },
  { name: "600", hex: "#c9b208" },
  { name: "700", hex: "#9f8c06" },
  { name: "800", hex: "#756605" },
  { name: "900", hex: "#4b4003" },
];

const primaryScale = [
  { name: "50", hex: "#f8f8f8" },
  { name: "100", hex: "#e8e8e8" },
  { name: "200", hex: "#d1d1d1" },
  { name: "300", hex: "#b4b4b4" },
  { name: "400", hex: "#8f8f8f" },
  { name: "500", hex: "#666666" },
  { name: "600", hex: "#404040" },
  { name: "700", hex: "#2b2b2b" },
  { name: "800", hex: "#1a1a1a" },
  { name: "900", hex: "#000000" },
];

const cssTokens = `/* SofoServis Brand Tokens */
:root {
  /* Accent — Yellow */
  --accent-50:  #fefce8;
  --accent-100: #fef9c3;
  --accent-200: #fdf291;
  --accent-300: #fbe85f;
  --accent-400: #f9df2d;
  --accent-500: #f4d80c; /* Primary brand yellow */
  --accent-600: #c9b208;
  --accent-700: #9f8c06;
  --accent-800: #756605;
  --accent-900: #4b4003;

  /* Primary — Charcoal/Black */
  --primary-50:  #f8f8f8;
  --primary-100: #e8e8e8;
  --primary-200: #d1d1d1;
  --primary-300: #b4b4b4;
  --primary-400: #8f8f8f;
  --primary-500: #666666;
  --primary-600: #404040;
  --primary-700: #2b2b2b;
  --primary-800: #1a1a1a;
  --primary-900: #000000;

  /* Canvas Background */
  --canvas-bg: #FAF9F6;

  /* Typography */
  --font-brand: 'Sora', system-ui, sans-serif;

  /* Radius */
  --radius-sm: 6px;
  --radius-base: 10px;
  --radius-lg: 16px;
}`;

const tailwindTokens = `// tailwind.config.ts
colors: {
  accent: {
    50:  '#fefce8',
    100: '#fef9c3',
    200: '#fdf291',
    300: '#fbe85f',
    400: '#f9df2d',
    500: '#f4d80c',
    600: '#c9b208',
    700: '#9f8c06',
    800: '#756605',
    900: '#4b4003',
  },
  primary: {
    50:  '#f8f8f8',
    100: '#e8e8e8',
    200: '#d1d1d1',
    300: '#b4b4b4',
    400: '#8f8f8f',
    500: '#666666',
    600: '#404040',
    700: '#2b2b2b',
    800: '#1a1a1a',
    900: '#000000',
  },
},
fontFamily: {
  sans: ['Sora', 'system-ui', 'sans-serif'],
},`;

export default function BrandPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [lang, setLang] = useState<"sk" | "en">("sk");
  const [dlOpen, setDlOpen] = useState(false);
  const [dlSize, setDlSize] = useState<number>(500);
  const [dlBg, setDlBg] = useState<string>("transparent");
  const [downloading, setDownloading] = useState(false);

  const t = translations[lang];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadLogo = () => {
    setDownloading(true);
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = dlSize;
      canvas.height = dlSize;
      const ctx = canvas.getContext("2d")!;
      if (dlBg !== "transparent") {
        ctx.fillStyle = dlBg;
        ctx.fillRect(0, 0, dlSize, dlSize);
      }
      ctx.drawImage(img, 0, 0, dlSize, dlSize);
      const bgName = dlBg === "transparent" ? "transparent" : dlBg === "#ffffff" ? "white" : dlBg === "#000000" ? "black" : "yellow";
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `SofoServis-${dlSize}x${dlSize}-${bgName}.png`;
      a.click();
      setDownloading(false);
    };
    img.onerror = () => setDownloading(false);
    img.src = "/images/Sofoservis_nove_logo_SVG.svg";
  };

  const totalIcons = t.iconCategories.reduce((a, c) => a + c.icons.length, 0);

  return (
    <div style={{ background: "#FAF9F6", minHeight: "100vh", fontFamily: "Sora, system-ui, sans-serif", color: "#1a1a1a" }}>
      <style>{`
        .brand-header { display:flex; flex-direction:row; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; max-width:1100px; margin:0 auto; padding:0 32px; }
        .brand-header-title { color:#1a1a1a; }
        .brand-header-meta { text-align:right; }
        @media (max-width: 768px) {
          .brand-header { flex-direction:column; align-items:center; text-align:center; gap:16px; }
          .brand-header-title { text-align:center; }
          .brand-header-meta { text-align:center; }
        }
      `}</style>

      {/* Header */}
      <div style={{ background: "#FAF9F6", padding: "48px 0", borderBottom: "1px solid #e0e0e0" }}>
        <div className="brand-header">
          <Link href="/" style={{ display: "block", lineHeight: 0 }}>
            <Image src="/images/Sofoservis_nove_logo_SVG.svg" alt="SofoServis logo" width={160} height={160} style={{ objectFit: "contain" }} unoptimized />
          </Link>
          <div className="brand-header-title">
            <p style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9b208", marginBottom: 6, fontWeight: 600 }}>{t.badgeLabel}</p>
            <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>SofoServis</h1>
            <p style={{ fontSize: 15, color: "#666", marginTop: 6 }}>{t.tagline}</p>
          </div>
          <div className="brand-header-meta">
            <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{t.version}</p>
            <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>{t.internalDoc}</p>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 8 }}>sofoservis.sk</p>
            <div
              style={{
                marginTop: 12,
                display: "inline-flex",
                alignItems: "center",
                background: "#e8e8e8",
                borderRadius: 999,
                padding: 3,
                gap: 2,
                cursor: "pointer",
              }}
            >
              {(["sk", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? "#f4d80c" : "transparent",
                    color: lang === l ? "#000" : "#888",
                    border: "none",
                    borderRadius: 999,
                    padding: "5px 14px",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "Sora, sans-serif",
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    transition: "background 0.18s, color 0.18s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>

        {/* ── SECTION: LOGO ── */}
        <Section title={t.logoSection.title} subtitle={t.logoSection.subtitle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { bg: "#FAF9F6", label: t.logoSection.lightBg, border: "#e8e8e8" },
              { bg: "#ffffff", label: t.logoSection.whiteBg, border: "#e8e8e8" },
              { bg: "#000000", label: t.logoSection.darkBg, border: "transparent" },
              { bg: "#f4d80c", label: t.logoSection.yellowBg, border: "transparent" },
            ].map(({ bg, label, border }) => (
              <div key={bg} style={{ background: bg, borderRadius: 12, padding: "32px 24px", border: `1px solid ${border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <Image src="/images/Sofoservis_nove_logo_SVG.svg" alt="SofoServis logo" width={120} height={120} style={{ objectFit: "contain" }} unoptimized />
                <span style={{ fontSize: 12, color: bg === "#000000" ? "#666" : "#888", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
          {/* Download toggle */}
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/images/Sofoservis_nove_logo_SVG.svg"
                download="SofoServis-logo.svg"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#1a1a1a", color: "#f4d80c",
                  borderRadius: 999, padding: "9px 22px",
                  fontSize: 13, fontWeight: 700,
                  fontFamily: "Sora, sans-serif",
                  letterSpacing: "0.04em", textDecoration: "none",
                }}
              >
                ↓ SVG
              </a>
              <button
                onClick={() => setDlOpen((o) => !o)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: dlOpen ? "#1a1a1a" : "#f4d80c",
                  color: dlOpen ? "#f4d80c" : "#1a1a1a",
                  border: "none", borderRadius: 999,
                  padding: "9px 22px", fontSize: 13, fontWeight: 700,
                  fontFamily: "Sora, sans-serif", cursor: "pointer",
                  letterSpacing: "0.04em", transition: "background 0.18s, color 0.18s",
                }}
              >
                {dlOpen ? t.logoSection.dlToggleClose : t.logoSection.dlToggleOpen}
              </button>
            </div>

            <div style={{
              marginTop: 16,
              maxHeight: dlOpen ? 700 : 0,
              opacity: dlOpen ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s ease, opacity 0.25s ease",
            }}>
              <div style={{ background: "#fff", borderRadius: 16, padding: 32, border: "1px solid #e8e8e8" }}>
                {/* Preview */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                  <div style={{
                    width: 160, height: 160, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    background: dlBg === "transparent" ? "repeating-conic-gradient(#e0e0e0 0% 25%, #fff 0% 50%) 0 0 / 16px 16px" : dlBg,
                    border: "1px solid #e8e8e8",
                  }}>
                    <Image src="/images/Sofoservis_nove_logo_SVG.svg" alt="Logo preview" width={130} height={130} style={{ objectFit: "contain" }} unoptimized />
                  </div>
                </div>

                {/* Size picker */}
                <div style={{ marginBottom: 24 }}>
                  <Label>{t.downloadSection.sizeLabel}</Label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[150, 500, 1500, 3000].map((s) => (
                      <button
                        key={s}
                        onClick={() => setDlSize(s)}
                        style={{
                          padding: "8px 18px", borderRadius: 999, border: "2px solid",
                          borderColor: dlSize === s ? "#f4d80c" : "#e8e8e8",
                          background: dlSize === s ? "#f4d80c" : "#fff",
                          color: "#1a1a1a", fontWeight: 700, fontSize: 13,
                          fontFamily: "Sora, sans-serif", cursor: "pointer",
                        }}
                      >
                        {s}×{s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background picker */}
                <div style={{ marginBottom: 32 }}>
                  <Label>{t.downloadSection.bgLabel}</Label>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    {[
                      { value: "transparent", label: t.downloadSection.bgTransparent, swatch: "repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 12px 12px" },
                      { value: "#ffffff", label: t.downloadSection.bgWhite, swatch: "#ffffff" },
                      { value: "#000000", label: t.downloadSection.bgBlack, swatch: "#000000" },
                      { value: "#f4d80c", label: t.downloadSection.bgYellow, swatch: "#f4d80c" },
                    ].map(({ value, label, swatch }) => (
                      <button
                        key={value}
                        onClick={() => setDlBg(value)}
                        style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "6px 14px", borderRadius: 999, border: "2px solid",
                          borderColor: dlBg === value ? "#f4d80c" : "#e8e8e8",
                          background: dlBg === value ? "#fffbea" : "#fff",
                          fontFamily: "Sora, sans-serif", cursor: "pointer", fontSize: 13, fontWeight: 600,
                        }}
                      >
                        <span style={{ width: 16, height: 16, borderRadius: 4, background: swatch, border: "1px solid #e0e0e0", flexShrink: 0, display: "inline-block" }} />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Download button */}
                <button
                  onClick={downloadLogo}
                  disabled={downloading}
                  style={{
                    background: downloading ? "#e8e8e8" : "#000",
                    color: downloading ? "#888" : "#f4d80c",
                    border: "none", borderRadius: 10, padding: "14px 32px",
                    fontSize: 15, fontWeight: 700, fontFamily: "Sora, sans-serif",
                    cursor: downloading ? "default" : "pointer", letterSpacing: "0.04em",
                  }}
                >
                  {downloading ? "…" : `↓ ${t.downloadSection.downloadBtn} — ${dlSize}×${dlSize}`}
                </button>
              </div>
            </div>
          </div>
          <Note>{t.logoSection.note} <code style={codeStyle}>/images/Sofoservis_nove_logo_SVG.svg</code> {t.logoSection.noteDetail}</Note>
        </Section>

        {/* ── SECTION: FARBY / COLOURS ── */}
        <Section title={t.colorsSection.title} subtitle={t.colorsSection.subtitle}>

          <div style={{ marginBottom: 32 }}>
            <Label>{t.colorsSection.specialColors}</Label>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { name: "Brand Yellow", hex: "#f4d80c", oklch: "oklch(87% 0.175 96)", dark: false },
                { name: "Brand Black", hex: "#000000", oklch: "oklch(0% 0 0)", dark: true },
                { name: "Canvas BG", hex: "#FAF9F6", oklch: "oklch(98% 0.006 90)", dark: false },
              ].map(({ name, hex, oklch }) => (
                <div key={hex} style={{ flex: 1, minWidth: 180 }}>
                  <div
                    style={{ height: 80, background: hex, borderRadius: 10, border: hex === "#FAF9F6" ? "1px solid #e8e8e8" : "none", marginBottom: 10, cursor: "pointer" }}
                    onClick={() => copyToClipboard(hex, hex)}
                    title={t.colorsSection.clickToCopy}
                  />
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 2px" }}>{name}</p>
                  <p style={{ fontSize: 13, color: "#666", margin: "0 0 2px" }}>{hex}</p>
                  <p style={{ fontSize: 11, color: "#888", margin: 0, fontFamily: "monospace" }}>{oklch}</p>
                  {copied === hex && <p style={{ fontSize: 11, color: "#f4d80c", margin: "4px 0 0" }}>{t.copied}</p>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <Label>{t.colorsSection.accentScale}</Label>
            <ColorScale scale={accentScale} copied={copied} onCopy={copyToClipboard} copiedLabel={t.copied} />
          </div>

          <div>
            <Label>{t.colorsSection.primaryScale}</Label>
            <ColorScale scale={primaryScale} copied={copied} onCopy={copyToClipboard} copiedLabel={t.copied} />
          </div>

          <div style={{ marginTop: 24, background: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e8e8e8" }}>
            <Label>{t.colorsSection.wcagLabel}</Label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {t.colorsSection.combos.map(({ combo, pass, ratio }) => (
                <div key={combo} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: "#f8f8f8", borderRadius: 8 }}>
                  <span style={{ fontSize: 16 }}>{pass ? "✅" : "❌"}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{combo}</p>
                    <p style={{ fontSize: 12, color: "#666", margin: 0 }}>{ratio}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#888", marginTop: 12 }}>{t.colorsSection.wcagWarning}</p>
          </div>
        </Section>

        {/* ── SECTION: TYPOGRAFIA ── */}
        <Section title={t.typographySection.title} subtitle={t.typographySection.subtitle}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 32, border: "1px solid #e8e8e8", marginBottom: 20 }}>
            {t.typographySection.specimens.map(({ label, size, weight, sample }) => (
              <div key={label} style={{ display: "flex", gap: 20, alignItems: "baseline", paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #f0f0f0" }}>
                <span style={{ fontSize: 11, color: "#888", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", minWidth: 70, flexShrink: 0 }}>{label}</span>
                <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                  <p style={{ fontSize: size, fontWeight: weight, margin: 0, lineHeight: 1.2, overflowWrap: "break-word", wordBreak: "break-word" }}>{sample}</p>
                  <p style={{ fontSize: 11, color: "#aaa", margin: "4px 0 0" }}>Sora {weight} / {size}px</p>
                </div>
              </div>
            ))}
          </div>
          <Note>{t.typographySection.note} <code style={codeStyle}>{'import { Sora } from "next/font/google"'}</code></Note>
        </Section>

        {/* ── SECTION: IKONY ── */}
        <Section title={t.iconsSection.title} subtitle={`${totalIcons} ${t.iconsSection.subtitleSuffix}`}>
          {t.iconCategories.map((cat) => (
            <div key={cat.name} style={{ marginBottom: 32 }}>
              <Label>{cat.name}</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {cat.icons.map(({ file, label }) => (
                  <div
                    key={file}
                    style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: "16px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 100, cursor: "pointer", transition: "border-color 0.15s" }}
                    onClick={() => copyToClipboard(`/icons/${file}`, file)}
                    title={`${t.iconsSection.clickTip} /icons/${file}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/icons/${file}`} alt={label} width={64} height={64} style={{ objectFit: "contain" }} />
                    <span style={{ fontSize: 11, color: "#555", fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>{label}</span>
                    {copied === file
                      ? <span style={{ fontSize: 10, color: "#f4d80c", fontWeight: 600 }}>{t.copied}</span>
                      : <span style={{ fontSize: 10, color: "#bbb" }}>{file.replace("_icon.svg", "")}</span>
                    }
                    <a
                      href={`/icons/${file}`}
                      download={file}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        marginTop: 4, fontSize: 10, fontWeight: 700, color: "#fff",
                        background: "#000", borderRadius: 4, padding: "3px 8px",
                        textDecoration: "none", letterSpacing: "0.04em",
                      }}
                    >
                      ↓ {t.iconsSection.downloadSvg}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Note>{t.iconsSection.note} <code style={codeStyle}>/icons/</code> {t.iconsSection.noteDetail}</Note>
        </Section>

        {/* ── SECTION: HLAS ZNAČKY / BRAND VOICE ── */}
        <Section title={t.voiceSection.title} subtitle={t.voiceSection.subtitle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
            {t.voiceSection.words.map(({ word, desc }) => (
              <div key={word} style={{ background: "#000", borderRadius: 12, padding: 24 }}>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#f4d80c", margin: "0 0 8px" }}>{word}</p>
                <p style={{ fontSize: 13, color: "#b4b4b4", margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e8e8e8" }}>
            <Label>{t.voiceSection.examplesLabel}</Label>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {t.voiceSection.examples.map(({ type, text }) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, minWidth: 60, color: type.startsWith("✅") ? "#166534" : "#991b1b" }}>{type}</span>
                  <p style={{ fontSize: 14, margin: 0, fontStyle: "italic", color: "#333" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── SECTION: CSS TOKENY ── */}
        <Section title={t.tokensSection.title} subtitle={t.tokensSection.subtitle}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { id: "css", label: "CSS Custom Properties", code: cssTokens },
              { id: "tw", label: "Tailwind Config", code: tailwindTokens },
            ].map(({ id, label, code }) => (
              <div key={id} style={{ background: "#1a1a1a", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid #333" }}>
                  <span style={{ color: "#f4d80c", fontSize: 13, fontWeight: 600 }}>{label}</span>
                  <button
                    onClick={() => copyToClipboard(code, id)}
                    style={{ background: copied === id ? "#166534" : "#333", color: "#fff", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 12, cursor: "pointer", fontFamily: "Sora, sans-serif", fontWeight: 600 }}
                  >
                    {copied === id ? t.copied : t.copy}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: "20px", fontSize: 12, color: "#d1d1d1", overflowX: "auto", lineHeight: 1.7, fontFamily: "monospace" }}>{code}</pre>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SECTION: PRAVIDLÁ / RULES ── */}
        <Section title={t.rulesSection.title} subtitle={t.rulesSection.subtitle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 24, border: "1px solid #bbf7d0" }}>
              <p style={{ fontWeight: 700, color: "#166534", marginTop: 0, marginBottom: 12 }}>{t.rulesSection.doTitle}</p>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, color: "#333", lineHeight: 2 }}>
                {t.rulesSection.dos.map((item) => (
                  <li key={item}>{item === "Teplá biela #FAF9F6 ako základ stránky" || item === "Warm white #FAF9F6 as the page base"
                    ? <>{item.split("#FAF9F6")[0]}<code style={codeStyle}>#FAF9F6</code>{item.split("#FAF9F6")[1]}</>
                    : item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "#fef2f2", borderRadius: 12, padding: 24, border: "1px solid #fecaca" }}>
              <p style={{ fontWeight: 700, color: "#991b1b", marginTop: 0, marginBottom: 12 }}>{t.rulesSection.dontTitle}</p>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, color: "#333", lineHeight: 2 }}>
                {t.rulesSection.donts.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 32, marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{t.footer.left}</p>
          <p style={{ fontSize: 13, color: "#888", margin: 0 }}>{t.footer.right}</p>
        </div>

      </div>
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: 64 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 28, background: "#f4d80c", borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0 }}>{title}</h2>
        </div>
        <p style={{ fontSize: 15, color: "#555", margin: "0 0 0 16px", lineHeight: 1.6 }}>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 12, marginTop: 0 }}>{children}</p>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 13, color: "#888", background: "#f0f0f0", borderRadius: 8, padding: "10px 14px", marginTop: 16 }}>{children}</p>
  );
}

function ColorScale({ scale, copied, onCopy, copiedLabel }: {
  scale: { name: string; hex: string }[];
  copied: string | null;
  onCopy: (text: string, id: string) => void;
  copiedLabel: string;
}) {
  return (
    <div style={{ display: "flex", gap: 0, borderRadius: 12, overflow: "hidden", border: "1px solid #e8e8e8" }}>
      {scale.map(({ name, hex }) => {
        const isDark = parseInt(name) >= 600;
        return (
          <div
            key={name}
            style={{ flex: 1, background: hex, padding: "16px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}
            onClick={() => onCopy(hex, `${hex}-scale`)}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: isDark ? "#fff" : "#000" }}>{name}</span>
            <span style={{ fontSize: 9, color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)", fontFamily: "monospace", wordBreak: "break-all", textAlign: "center" }}>{hex}</span>
            {copied === `${hex}-scale` && <span style={{ fontSize: 9, color: isDark ? "#f4d80c" : "#000", fontWeight: 700 }}>{copiedLabel}</span>}
          </div>
        );
      })}
    </div>
  );
}

const codeStyle: React.CSSProperties = {
  background: "#e8e8e8",
  padding: "1px 6px",
  borderRadius: 4,
  fontFamily: "monospace",
  fontSize: 12,
};
