/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "d2oxwq95j4ncx4.cloudfront.net",
      },
    ],
  },
  // Add trailing slash for better SEO with static exports
  trailingSlash: false,
  // Improve static generation
  generateBuildId: async () => {
    return "sofoservis-build-" + new Date().toISOString().split("T")[0];
  },
  // Redirects configuration
  redirects: async () => {
    return [
      {
        source: "/moving",
        destination: "https://www.sofoservis.sk/en/apartment-moving",
        permanent: true, // 301 redirect
      },
      // Hodinový manžel - mestá presmerované na hlavnú stránku
      {
        source: "/hodinovy-manzel-majster/galanta",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/levice",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/nitra",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/piestany",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      {
        source: "/hodinovy-manzel-majster/sala",
        destination: "/hodinovy-manzel-majster",
        permanent: true,
      },
      // Odvoz odpadu - mestá presmerované na hlavnú stránku
      {
        source: "/odvoz-likvidacia-stavebneho-odpadu/galanta",
        destination: "/odvoz-likvidacia-stavebneho-odpadu",
        permanent: true,
      },
      {
        source: "/odvoz-likvidacia-stavebneho-odpadu/hlohovec",
        destination: "/odvoz-likvidacia-stavebneho-odpadu",
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
    ];
  },
};

module.exports = nextConfig;
