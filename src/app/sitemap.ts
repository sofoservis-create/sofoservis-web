import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.sofoservis.sk";

// Routes that must never appear in the sitemap even if a page exists.
const EXCLUDED_PREFIXES = ["/editor", "/admin", "/api"];

/**
 * Recursively walk the App Router directory and collect every route that has
 * a page.tsx. Dynamic segments ([param]) and route groups are skipped — the
 * site uses only static routes for SEO pages.
 */
function collectRoutes(dir: string, urlPath = ""): string[] {
  const routes: string[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  if (entries.some((e) => e.isFile() && e.name === "page.tsx")) {
    routes.push(urlPath === "" ? "/" : urlPath);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip dynamic segments, route groups, parallel/intercepted routes and private folders
    if (
      name.startsWith("[") ||
      name.startsWith("(") ||
      name.startsWith("@") ||
      name.startsWith("_")
    ) {
      continue;
    }
    routes.push(...collectRoutes(path.join(dir, name), `${urlPath}/${name}`));
  }

  return routes;
}

function priorityFor(route: string): number {
  if (route === "/") return 1.0;
  const isEnglish = route === "/en" || route.startsWith("/en/");
  const depth = route.split("/").filter(Boolean).length;
  if (
    route.includes("cookies") ||
    route.includes("osobnych-udajov") ||
    route.includes("obchodne-podmienky") ||
    route.includes("privacy-policy") ||
    route.includes("cookie-policy") ||
    route.includes("terms-of-service")
  ) {
    return 0.2;
  }
  if (isEnglish) return depth <= 1 ? 0.7 : 0.55;
  return depth <= 1 ? 0.8 : 0.7;
}

function changeFrequencyFor(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (
    route.includes("cookies") ||
    route.includes("osobnych-udajov") ||
    route.includes("obchodne-podmienky") ||
    route.includes("privacy-policy") ||
    route.includes("cookie-policy") ||
    route.includes("terms-of-service")
  ) {
    return "yearly";
  }
  if (
    route === "/o-nas" ||
    route === "/cennik" ||
    route === "/referencie" ||
    route === "/kontakt" ||
    route === "/en/about" ||
    route === "/en/pricing" ||
    route === "/en/reviews" ||
    route === "/en/contact"
  ) {
    return "monthly";
  }
  return "weekly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  const appDir = path.join(process.cwd(), "src", "app");

  const routes = collectRoutes(appDir)
    .filter(
      (route) =>
        !EXCLUDED_PREFIXES.some(
          (prefix) => route === prefix || route.startsWith(prefix + "/")
        )
    )
    .sort();

  return routes.map((route) => ({
    url: route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`,
    lastModified: buildTime,
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }));
}
