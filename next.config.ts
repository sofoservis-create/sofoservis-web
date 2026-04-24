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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://www.googletagservices.com https://googleads.g.doubleclick.net https://load.server.sofoservis.sk https://snap.licdn.com https://connect.facebook.net https://www.facebook.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com https://stats.g.doubleclick.net https://td.doubleclick.net https://cm.g.doubleclick.net https://www.googletagmanager.com https://www.googleadservices.com https://load.server.sofoservis.sk https://vitals.vercel-insights.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.facebook.com https://www.linkedin.com https://px.ads.linkedin.com https://api.emailjs.com",
      "frame-src https://www.google.com https://www.googletagmanager.com https://tagmanager.google.com https://td.doubleclick.net https://bid.g.doubleclick.net https://player.vimeo.com https://vimeo.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig = {
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
    ];
  },
  redirects: async () => {
    return [
      // EN deprecated URL → kanonická EN junk-removal hub stránka
      {
        source: "/en/junk-removal-services",
        destination: "/en/junk-removal",
        permanent: true,
      },
      // POZN: /en/junk-removal je teraz reálna stránka (premenovaná z /en/clearance),
      // takže žiadny redirect odtiaľto nie je potrebný.
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
      // SK /sluzby/* → correct service URLs (404 fix)
      {
        source: "/sluzby/montaz-nabytku",
        destination: "/montaz-nabytku",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-tazkych-bremien",
        destination: "/stahovanie-tazkych-bremien",
        permanent: true,
      },
      {
        source: "/sluzby/vypratavanie-bytov",
        destination: "/vypratavanie-bytov-domov",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-24-7",
        destination: "/stahovanie",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-firiem",
        destination: "/stahovanie-kancelarii-firiem",
        permanent: true,
      },
      {
        source: "/sluzby/stahovanie-bytov",
        destination: "/stahovanie-bytov-domov",
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
    ];
  },
};

module.exports = nextConfig;
