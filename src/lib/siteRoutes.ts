import fs from "fs";
import path from "path";

// Spoločný zoznam stránok pre sitemap.xml aj llms.txt – zostaví sa pri builde z priečinkov v src/app.
// Nová stránka (page.tsx) sa tak objaví v oboch súboroch sama.

export const BASE_URL = "https://www.sofoservis.sk";

const APP_DIR = path.join(process.cwd(), "src", "app");

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

/** Všetky verejné stránky webu, zoradené podľa adresy. */
export function getPublicRoutes(): string[] {
  return collectRoutes(APP_DIR)
    .filter(
      (route) =>
        !EXCLUDED_PREFIXES.some(
          (prefix) => route === prefix || route.startsWith(prefix + "/")
        )
    )
    .sort();
}

export function isLegalRoute(route: string): boolean {
  return (
    route.includes("cookies") ||
    route.includes("osobnych-udajov") ||
    route.includes("obchodne-podmienky") ||
    route.includes("privacy-policy") ||
    route.includes("cookie-policy") ||
    route.includes("terms-of-service")
  );
}

export function routeUrl(route: string): string {
  return route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`;
}

/** Odčíta reťazcovú hodnotu kľúča z bloku `export const metadata = { … }` (", ' alebo ` bez ${}). */
function readMetadataString(block: string, key: string): string | undefined {
  const match = block.match(new RegExp(`\\b${key}:\\s*(["'\`])((?:\\\\.|(?!\\1)[\\s\\S])*)\\1`));
  if (!match || (match[1] === "`" && match[2].includes("${"))) return undefined;
  return match[2].replace(/\\(["'`\\])/g, "$1").replace(/\s+/g, " ").trim();
}

/** Titulok a popis stránky z jej `export const metadata` (rovnaké texty, aké vidí Google). */
export function getPageMetadata(route: string): { title?: string; description?: string } {
  const file = path.join(APP_DIR, route === "/" ? "" : route, "page.tsx");
  let source: string;
  try {
    source = fs.readFileSync(file, "utf8");
  } catch {
    return {};
  }
  const start = source.indexOf("export const metadata");
  if (start === -1) return {};
  // Titulok a popis sú vždy na začiatku objektu; openGraph a ďalšie kľúče za nimi sa nečítajú.
  const block = source.slice(start, start + 2000);
  return {
    title: readMetadataString(block, "title"),
    description: readMetadataString(block, "description"),
  };
}
