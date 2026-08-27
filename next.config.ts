/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://www.googletagservices.com https://googleads.g.doubleclick.net https://load.server.sofoservis.sk https://snap.licdn.com https://connect.facebook.net https://www.facebook.com https://cdn.dni.nimbata.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com https://stats.g.doubleclick.net https://td.doubleclick.net https://cm.g.doubleclick.net https://www.googletagmanager.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://load.server.sofoservis.sk https://vitals.vercel-insights.com https://pagead2.googlesyndication.com https://www.facebook.com https://www.linkedin.com https://px.ads.linkedin.com https://api.emailjs.com https://*.nimbata.com https://*.cloudfront.net",
      "frame-src https://www.google.com https://www.googletagmanager.com https://tagmanager.google.com https://td.doubleclick.net https://bid.g.doubleclick.net https://player.vimeo.com https://vimeo.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const distDir = process.env.NEXT_DIST_DIR || ".next";

const nextConfig = {
  distDir,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "d2oxwq95j4ncx4.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return "sofoservis-build-" + new Date().toISOString().split("T")[0];
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/:path*.svgz",
        headers: [
          { key: "Content-Type", value: "image/svg+xml" },
          { key: "Content-Encoding", value: "gzip" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Edge caching pre HTML stránky — CDN drží stránky 1h, stale-while-revalidate 24h.
      // Dramaticky znižuje TTFB (z ~250ms na ~30ms) a zlepšuje LCP / Core Web Vitals.
      {
        source: "/:path((?!api/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      // API routes nikdy necachovať (form submissions, lead, instagram refresh)
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      // Apex (sofoservis.sk) → www (permanent 301) — kanonická konsolidácia link equity.
      // Predtým bol Vercel 307 (temporary), teraz explicitný 301.
      {
        source: "/:path*",
        has: [{ type: "host", value: "sofoservis.sk" }],
        destination: "https://www.sofoservis.sk/:path*",
        permanent: true,
      },
      // Sťahovanie pianína → klavíra (konsolidácia kanibalizácie)
      {
        source: "/stahovanie-pianina",
        destination: "/stahovanie/stahovanie-tazkych-bremien",
        permanent: true,
      },
      // EN upright-piano-moving → piano-moving (konsolidácia)
      {
        source: "/en/upright-piano-moving",
        destination: "/en/piano-moving",
        permanent: true,
      },
      // EN deprecated URL → kanonická EN junk-removal hub stránka
      {
        source: "/en/junk-removal-services",
        destination: "/en/junk-removal",
        permanent: true,
      },
      // POZN: /en/junk-removal je teraz reálna stránka (premenovaná z /en/clearance),
      // takže žiadny redirect odtiaľto nie je potrebný.

      // Blog → servisné stránky (301 konsolidácia, jún 2026)
      {
        source: "/blog/hodinovy-manzel-sluzby-cena",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-po-rekonstrukcii-odvoz-stavebneho-odpadu",
        destination: "/vypratavanie",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-bytu-cena-2026",
        destination: "/vypratavanie/vypratavanie-bytov-domov",
        permanent: true,
      },
      // Blog konsolidácia – zvyšných 15 blogov + index (jún 2026)
      {
        source: "/blog",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },
      {
        source: "/blog/stahovanie-seniorov-starsich-osob",
        destination: "/stahovanie/stahovanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/blog/odovzdanie-bytu-po-najme-checklist",
        destination: "/vypratavanie/vypratavanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/blog/prenajom-stahovacieho-auta-vs-firma",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-po-zosnulom",
        destination: "/vypratavanie",
        permanent: true,
      },
      {
        source: "/blog/stahovanie-s-domacimi-zvieratami",
        destination: "/stahovanie/stahovanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/blog/stahovanie-v-zime-vyhody-vyzvy",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },
      {
        source: "/blog/stahovanie-klavira-tazkych-predmetov",
        destination: "/stahovanie/stahovanie-tazkych-bremien",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-pivnic-skladov-bratislava",
        destination: "/vypratavanie/vypratavanie-pivnic-a-garazi",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-po-sezonnom-uskladneni-bratislava",
        destination: "/vypratavanie/vypratavanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/blog/ako-si-vybrat-stahovaciu-firmu-10-kriterii",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },
      {
        source: "/blog/medzinarodne-stahovanie-slovensko-2026",
        destination: "/stahovanie/medzinarodne-stahovanie",
        permanent: true,
      },
      {
        source: "/blog/stahovanie-kancelarie-ako-minimalizovat-prestoj",
        destination: "/stahovanie/stahovanie-kancelarii-firiem",
        permanent: true,
      },
      {
        source: "/blog/montaz-nabytku-ikea-cena",
        destination: "/montaz-nabytku",
        permanent: true,
      },
      {
        source: "/blog/ako-sa-pripravit-na-stahovanie-checklist",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },
      {
        source: "/blog/kolko-stoji-stahovanie-bratislava-2026",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },

      {
        source: "/moving",
        destination: "https://www.sofoservis.sk/en/apartment-moving",
        permanent: true,
      },
      // EN clearance → junk removal URL renames (service hub stránky)
      {
        source: "/en/home-clearance",
        destination: "/en/home-junk-removal",
        permanent: true,
      },
      {
        source: "/en/basement-garage-clearance",
        destination: "/en/basement-garage-junk-removal",
        permanent: true,
      },
      {
        source: "/en/property-land-clearance",
        destination: "/en/property-land-junk-removal",
        permanent: true,
      },
      {
        source: "/en/hazardous-waste-disposal",
        destination: "/en/hazardous-waste-removal",
        permanent: true,
      },
      {
        source: "/blog/hodinovy-manzel-co-vyrie%C5%A1i-cena",
        destination: "/blog/hodinovy-manzel-sluzby-cena",
        permanent: true,
      },
      {
        source: "/blog/hodinovy-manzel-co-vyrie\u0161i-cena",
        destination: "/blog/hodinovy-manzel-sluzby-cena",
        permanent: true,
      },
      {
        source: "/blog/hodinovy-manzel-co-vyriei-cena",
        destination: "/blog/hodinovy-manzel-sluzby-cena",
        permanent: true,
      },
      // Zrušené mestské podstránky hodinového manžela → 301 redirect na hlavnú stránku služby.
      // Konsolidácia link equity + zachovanie SEO pre indexované URL.
      {
        source: "/hodinovy-manzel-majster/levice",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/hlohovec",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/nitra",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/sala",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/en/handyman-levice",
        destination: "/en/handyman-services",
        permanent: true,
      },
      {
        source: "/en/handyman-nitra",
        destination: "/en/handyman-services",
        permanent: true,
      },
      {
        source: "/en/handyman-sala",
        destination: "/en/handyman-services",
        permanent: true,
      },
      // SK /sluzby/* → correct service URLs (404 fix)
      {
        source: "/sluzby/montaz-nabytku",
        destination: "/montaz-nabytku",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-tazkych-bremien",
        destination: "/stahovanie/stahovanie-tazkych-bremien",
        permanent: true,
      },
      {
        source: "/sluzby/vypratavanie-bytov",
        destination: "/vypratavanie/vypratavanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-24-7",
        destination: "/stahovanie",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-firiem",
        destination: "/stahovanie/stahovanie-kancelarii-firiem",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-bytov",
        destination: "/stahovanie/stahovanie-bytov-domov",
        permanent: true,
      },
      // EN /services/* → correct English service URLs (404 fix)
      {
        source: "/en/services/heavy-loads-moving",
        destination: "/en/moving-heavy-loads",
        permanent: true,
      },
      {
        source: "/en/services/limited-access-moving",
        destination: "/en/moving-heavy-loads",
        permanent: true,
      },
      {
        source: "/en/international-moving",
        destination: "/en/international-moving-services",
        permanent: true,
      },
      {
        source: "/en/services/after-hours-moving",
        destination: "/en/apartment-moving",
        permanent: true,
      },
      {
        source: "/en/services/business-moving",
        destination: "/en/office-moving",
        permanent: true,
      },
      {
        source: "/en/services/clearance-services",
        destination: "/en/clearance",
        permanent: true,
      },
      {
        source: "/en/services/packing-services",
        destination: "/en/apartment-moving",
        permanent: true,
      },
      {
        source: "/en/services/furniture-assembly",
        destination: "/en/furniture-assembly",
        permanent: true,
      },
      // Sprint 2: 12× /en/moving-bratislava-{city} → /en/moving-to-{city} (consolidácia)
      // Sprint 2: 42× /en/*clearance* → /en/*junk-removal* (terminology migration)
      {
        source: "/en/moving-bratislava-amsterdam",
        destination: "/en/moving-to-amsterdam",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-berlin",
        destination: "/en/moving-to-berlin",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-brussels",
        destination: "/en/moving-to-brussels",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-budapest",
        destination: "/en/moving-to-budapest",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-dublin",
        destination: "/en/moving-to-dublin",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-london",
        destination: "/en/moving-to-london",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-munich",
        destination: "/en/moving-to-munich",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-paris",
        destination: "/en/moving-to-paris",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-prague",
        destination: "/en/moving-to-prague",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-vienna",
        destination: "/en/moving-to-vienna",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-warsaw",
        destination: "/en/moving-to-warsaw",
        permanent: true,
      },
      {
        source: "/en/moving-bratislava-zurich",
        destination: "/en/moving-to-zurich",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-bratislava",
        destination: "/en/apartment-junk-removal-bratislava",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-galanta",
        destination: "/en/apartment-junk-removal-galanta",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-hlohovec",
        destination: "/en/apartment-junk-removal-hlohovec",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-komarno",
        destination: "/en/apartment-junk-removal-komarno",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-levice",
        destination: "/en/apartment-junk-removal-levice",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-malacky",
        destination: "/en/apartment-junk-removal-malacky",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-nitra",
        destination: "/en/apartment-junk-removal-nitra",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-pezinok",
        destination: "/en/apartment-junk-removal-pezinok",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-piestany",
        destination: "/en/apartment-junk-removal-piestany",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-sala",
        destination: "/en/apartment-junk-removal-sala",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-samorin",
        destination: "/en/apartment-junk-removal-samorin",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-senec",
        destination: "/en/apartment-junk-removal-senec",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-senica",
        destination: "/en/apartment-junk-removal-senica",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-stupava",
        destination: "/en/apartment-junk-removal-stupava",
        permanent: true,
      },
      {
        source: "/en/apartment-clearance-trnava",
        destination: "/en/apartment-junk-removal-trnava",
        permanent: true,
      },
      {
        source: "/en/basement-clearance-bratislava",
        destination: "/en/basement-junk-removal-bratislava",
        permanent: true,
      },
      {
        source: "/en/cottage-clearance",
        destination: "/en/cottage-junk-removal",
        permanent: true,
      },
      {
        source: "/en/estate-clearance-bereavement",
        destination: "/en/estate-junk-removal-bereavement",
        permanent: true,
      },
      {
        source: "/en/home-clearance-bratislava",
        destination: "/en/home-junk-removal-bratislava",
        permanent: true,
      },
      {
        source: "/en/home-clearance-dubravka",
        destination: "/en/home-junk-removal-dubravka",
        permanent: true,
      },
      {
        source: "/en/home-clearance-galanta",
        destination: "/en/home-junk-removal-galanta",
        permanent: true,
      },
      {
        source: "/en/home-clearance-hlohovec",
        destination: "/en/home-junk-removal-hlohovec",
        permanent: true,
      },
      {
        source: "/en/home-clearance-karlova-ves",
        destination: "/en/home-junk-removal-karlova-ves",
        permanent: true,
      },
      {
        source: "/en/home-clearance-komarno",
        destination: "/en/home-junk-removal-komarno",
        permanent: true,
      },
      {
        source: "/en/home-clearance-levice",
        destination: "/en/home-junk-removal-levice",
        permanent: true,
      },
      {
        source: "/en/home-clearance-malacky",
        destination: "/en/home-junk-removal-malacky",
        permanent: true,
      },
      {
        source: "/en/home-clearance-nitra",
        destination: "/en/home-junk-removal-nitra",
        permanent: true,
      },
      {
        source: "/en/home-clearance-nove-mesto",
        destination: "/en/home-junk-removal-nove-mesto",
        permanent: true,
      },
      {
        source: "/en/home-clearance-petrzalka",
        destination: "/en/home-junk-removal-petrzalka",
        permanent: true,
      },
      {
        source: "/en/home-clearance-pezinok",
        destination: "/en/home-junk-removal-pezinok",
        permanent: true,
      },
      {
        source: "/en/home-clearance-piestany",
        destination: "/en/home-junk-removal-piestany",
        permanent: true,
      },
      {
        source: "/en/home-clearance-ruzinov",
        destination: "/en/home-junk-removal-ruzinov",
        permanent: true,
      },
      {
        source: "/en/home-clearance-sala",
        destination: "/en/home-junk-removal-sala",
        permanent: true,
      },
      {
        source: "/en/home-clearance-samorin",
        destination: "/en/home-junk-removal-samorin",
        permanent: true,
      },
      {
        source: "/en/home-clearance-senec",
        destination: "/en/home-junk-removal-senec",
        permanent: true,
      },
      {
        source: "/en/home-clearance-senica",
        destination: "/en/home-junk-removal-senica",
        permanent: true,
      },
      {
        source: "/en/home-clearance-stare-mesto",
        destination: "/en/home-junk-removal-stare-mesto",
        permanent: true,
      },
      {
        source: "/en/home-clearance-stupava",
        destination: "/en/home-junk-removal-stupava",
        permanent: true,
      },
      {
        source: "/en/home-clearance-trnava",
        destination: "/en/home-junk-removal-trnava",
        permanent: true,
      },
      {
        source: "/en/clearance",
        destination: "/en/junk-removal",
        permanent: true,
      },
      {
        source: "/en/office-clearance",
        destination: "/en/office-junk-removal",
        permanent: true,
      },
      {
        source: "/en/post-renovation-clearance",
        destination: "/en/post-renovation-junk-removal",
        permanent: true,
      },
      // EN duplicate consolidation: /en/moving-to-{country} → /en/moving-from-slovakia-to-{country}
      // Both URL sets covered the same use-case (moving from Slovakia to a country).
      // Canonical set is moving-from-slovakia-to-X (clearer URL, in main menu, longer content).
      {
        source: "/en/moving-from-slovakia-to-austria",
        destination: "/en/moving-to-austria",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-france",
        destination: "/en/moving-to-france",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-germany",
        destination: "/en/moving-to-germany",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-ireland",
        destination: "/en/moving-to-ireland",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-netherlands",
        destination: "/en/moving-to-netherlands",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-norway",
        destination: "/en/moving-to-norway",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-sweden",
        destination: "/en/moving-to-sweden",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-switzerland",
        destination: "/en/moving-to-switzerland",
        permanent: true,
      },
      {
        source: "/en/moving-from-slovakia-to-uk",
        destination: "/en/moving-to-uk",
        permanent: true,
      },
      // Blog kanibalizácia: 3 mestské blogy → service stránky
      {
        source: "/blog/vypratavanie-bytov-senec",
        destination: "/vypratavanie",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-bytov-pezinok",
        destination: "/vypratavanie",
        permanent: true,
      },
      {
        source: "/blog/vypratavanie-bytov-malacky",
        destination: "/vypratavanie",
        permanent: true,
      },
      // Blog kanibalizácia: intra-blog konsolidácia (slabší → silnejší)
      {
        source: "/blog/kolko-stoji-vypratavanie-bytu-bratislava-2026",
        destination: "/vypratavanie/vypratavanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/blog/ako-spravne-zabalit-byt-na-stahovanie",
        destination: "/stahovanie/stahovanie-bratislava",
        permanent: true,
      },

      // === URL RESTRUCTURE (júl 2026): /stahovanie/* nested tree ===

      // Section 1: PRESUN starých URL → nové /stahovanie/[slug] (17 stránok)
      { source: "/stahovanie-bytov-domov", destination: "/stahovanie/stahovanie-bytov-domov", permanent: true },
      { source: "/stahovanie-kancelarii-firiem", destination: "/stahovanie/stahovanie-kancelarii-firiem", permanent: true },
      { source: "/stahovanie-tazkych-bremien", destination: "/stahovanie/stahovanie-tazkych-bremien", permanent: true },
      { source: "/medzinarodne-stahovanie", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-bratislava", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-trnava", destination: "/stahovanie/stahovanie-trnava", permanent: true },
      { source: "/stahovanie-pezinok", destination: "/stahovanie/stahovanie-pezinok", permanent: true },
      { source: "/stahovanie-senica", destination: "/stahovanie/stahovanie-senica", permanent: true },
      { source: "/stahovanie-nitra", destination: "/stahovanie/stahovanie-nitra", permanent: true },
      { source: "/stahovanie-komarno", destination: "/stahovanie/stahovanie-komarno", permanent: true },
      { source: "/stahovanie-senec", destination: "/stahovanie/stahovanie-senec", permanent: true },
      { source: "/stahovanie-piestany", destination: "/stahovanie/stahovanie-piestany", permanent: true },
      { source: "/stahovanie-galanta", destination: "/stahovanie/stahovanie-galanta", permanent: true },
      { source: "/stahovanie-malacky", destination: "/stahovanie/stahovanie-malacky", permanent: true },
      { source: "/stahovanie-samorin", destination: "/stahovanie/stahovanie-samorin", permanent: true },
      { source: "/stahovanie-sala", destination: "/stahovanie/stahovanie-sala", permanent: true },
      { source: "/stahovanie-stupava", destination: "/stahovanie/stahovanie-stupava", permanent: true },

      // Section 2: ZMAZANÉ stránky → najbližší nadradený cieľ
      // preprava nábytku → hub
      { source: "/stahovanie-preprava-nabytku", destination: "/stahovanie", permanent: true },
      // ťažké bremená subtypes → nový slug ťažkých bremien
      { source: "/stahovanie-klavira", destination: "/stahovanie/stahovanie-tazkych-bremien", permanent: true },
      { source: "/stahovanie-strojov-zariadeni", destination: "/stahovanie/stahovanie-tazkych-bremien", permanent: true },
      { source: "/stahovanie-trezorov", destination: "/stahovanie/stahovanie-tazkych-bremien", permanent: true },
      // BA mestské časti → /stahovanie/stahovanie-bratislava
      { source: "/stahovanie-petrzalka", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-ruzinov", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-stare-mesto", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-nove-mesto", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-karlova-ves", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      { source: "/stahovanie-dubravka", destination: "/stahovanie/stahovanie-bratislava", permanent: true },
      // medzinarodne subpages wildcard + explicit na/zo
      { source: "/medzinarodne-stahovanie/:path*", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-zo-slovenska", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-anglie-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-nemecka-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-rakuska-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-holandska-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-francuzska-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },
      { source: "/stahovanie-z-usa-na-slovensko", destination: "/stahovanie/medzinarodne-stahovanie", permanent: true },

      // Section 3: Hlohovec & Levice → hub (mestá zrušené)
      { source: "/stahovanie-hlohovec", destination: "/stahovanie", permanent: true },
      { source: "/stahovanie-levice", destination: "/stahovanie", permanent: true },

      // === URL RESTRUCTURE (júl 2026): /vypratavanie/* nested tree ===

      // Section 1: PRESUN 7 service stránok → nové /vypratavanie/[slug]
      { source: "/vypratavanie-bytov-domov", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/bratislava", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-pivnic-garazi-nebytovych-priestorov", destination: "/vypratavanie/vypratavanie-pivnic-a-garazi", permanent: true },
      { source: "/cistenie-vypratavanie-pozemkov-nehnutelnosti", destination: "/vypratavanie/cistenie-vypratavanie-pozemkov", permanent: true },
      { source: "/vypratavanie-odvoz-stareho-nabytku", destination: "/vypratavanie/odvoz-stareho-nabytku", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      // Migrácia city-clustra odvoz-likvidacia na nový strom + zrušenie 6 mestských podstránok
      { source: "/odvoz-likvidacia-stavebneho-odpadu/bratislava", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu/bratislava", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/galanta", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/nitra", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/senec", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/senica", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/trnava", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/odvoz-likvidacia-stavebneho-odpadu/hlohovec", destination: "/vypratavanie/odvoz-likvidacia-stavebneho-odpadu", permanent: true },
      { source: "/likvidacia-nebezpecneho-odpadu-starych-spotrebicov", destination: "/vypratavanie/likvidacia-nebezpecneho-odpadu", permanent: true },

      // Section 2: 14 mestských podstránok vypratavanie-bytov-domov → nový slug
      { source: "/vypratavanie-bytov-domov/galanta", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/hlohovec", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/komarno", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/levice", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/malacky", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/nitra", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/pezinok", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/piestany", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/sala", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/samorin", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/senec", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/senica", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/stupava", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },
      { source: "/vypratavanie-bytov-domov/trnava", destination: "/vypratavanie/vypratavanie-bytov-domov", permanent: true },

      // Section 3: Podstránky Bratislava pre nábytok a pivnice
      { source: "/vypratavanie-odvoz-stareho-nabytku/bratislava", destination: "/vypratavanie/odvoz-stareho-nabytku", permanent: true },
      { source: "/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava", destination: "/vypratavanie/vypratavanie-pivnic-a-garazi", permanent: true },

      // Section 4: /vypratavanie-bratislava + 6 BA mestských častí → nový /bratislava slug
      { source: "/vypratavanie-bratislava", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-dubravka", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-karlova-ves", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-nove-mesto", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-petrzalka", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-ruzinov", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },
      { source: "/vypratavanie-stare-mesto", destination: "/vypratavanie/vypratavanie-bytov-domov/bratislava", permanent: true },

      // Section 5: 14 flat city pages → hub /vypratavanie
      { source: "/vypratavanie-trnava", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-pezinok", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-galanta", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-levice", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-piestany", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-senec", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-senica", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-stupava", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-komarno", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-malacky", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-samorin", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-hlohovec", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-nitra", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-sala", destination: "/vypratavanie", permanent: true },

      // Section 6: 4 špeciálne typy → hub /vypratavanie
      { source: "/vypratavanie-chalupy", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-kancelarii", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-po-rekonstrukcii", destination: "/vypratavanie", permanent: true },
      { source: "/vypratavanie-pozostalosti", destination: "/vypratavanie", permanent: true },

      // === URL RESTRUCTURE (júl 2026): /buracie-prace/* nested tree ===
      // Staré flat URLs → nová hierarchia /buracie-prace/*
      { source: "/buracie-demolacne-prace", destination: "/buracie-prace", permanent: true },
      { source: "/buracie-demolacne-prace/bratislava", destination: "/buracie-prace", permanent: true },
      { source: "/buracie-demolacne-prace/nitra", destination: "/buracie-prace", permanent: true },
      { source: "/buracie-demolacne-prace/pezinok", destination: "/buracie-prace", permanent: true },
      { source: "/buracie-demolacne-prace/trnava", destination: "/buracie-prace", permanent: true },
      { source: "/buranie-demolacia-domov-bytov", destination: "/buracie-prace/buranie-demolacia-domov", permanent: true },
      { source: "/buranie-stien-priecok", destination: "/buracie-prace/buranie-stien-priecok", permanent: true },

      // === Hodinový manžel — zrušené mestské podstránky (júl 2026) ===
      { source: "/hodinovy-manzel-majster/galanta", destination: "/hodinovy-manzel-majster", permanent: true },
      { source: "/hodinovy-manzel-majster/piestany", destination: "/hodinovy-manzel-majster", permanent: true },
      { source: "/hodinovy-manzel-majster/trnava", destination: "/hodinovy-manzel-majster", permanent: true },
    ];
  },
};

module.exports = nextConfig;
