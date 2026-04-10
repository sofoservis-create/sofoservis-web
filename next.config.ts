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
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/moving",
        destination: "https://www.sofoservis.sk/en/apartment-moving",
        permanent: true,
      },
      // EN clearance → junk removal URL renames
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
    ];
  },
};

module.exports = nextConfig;
