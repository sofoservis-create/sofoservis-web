/** @type {import('next').NextConfig} */
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
    ],
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return "sofoservis-build-" + new Date().toISOString().split("T")[0];
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
    ];
  },
};

module.exports = nextConfig;
