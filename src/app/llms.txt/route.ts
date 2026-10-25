import { blogArticles } from "@/lib/blog/articles";
import { getPageMetadata, getPublicRoutes, isLegalRoute, routeUrl } from "@/lib/siteRoutes";

// llms.txt (llmstxt.org) – prehľad webu pre AI asistentov. Generuje sa pri každom builde z rovnakého
// zoznamu stránok ako sitemap.xml; titulky a popisy sa berú z `metadata` jednotlivých stránok.
export const dynamic = "force-static";

const INTRO = `# SofoServis

> SofoServis (Sofoservices s. r. o.) je slovenská firma so sídlom v Bratislave, ktorá poskytuje profesionálne sťahovacie, vypratávacie, montážne a búracie služby. Pôsobíme v Bratislave, okolí a na celom Slovensku, vrátane medzinárodných sťahovaní do a zo zahraničia. Web je dvojjazyčný: slovenské stránky sú v koreni, anglická verzia pod /en/.

Kontakt: doprava@sofoservis.sk | +421 951 735 130 | Lermontovova 3, Bratislava | Po–So 07:00–19:00`;

// Mestá a mestské časti na stránkach typu /stahovanie/stahovanie-<mesto> a /en/moving-<mesto>.
// Nové mesto doplň sem, inak sa stránka zaradí medzi hlavné služby sťahovania.
const CITIES = new Set([
  "bratislava", "dubravka", "galanta", "hlohovec", "karlova-ves", "komarno", "levice", "malacky", "nitra",
  "nove-mesto", "petrzalka", "pezinok", "piestany", "ruzinov", "sala", "samorin", "senec", "senica",
  "stare-mesto", "stupava", "trnava",
]);

interface Section {
  title: string;
  /** Popis stránky za odkazom – pri dlhých zoznamoch miest ho vynechávame. */
  withDescription: boolean;
  match: (route: string) => boolean;
}

const slug = (route: string) => route.split("/").pop() ?? "";
const isEn = (route: string) => route === "/en" || route.startsWith("/en/");
const under = (route: string, prefix: string) => route === prefix || route.startsWith(prefix + "/");

// Poradie sekcií je poradie v súbore; stránka patrí do prvej sekcie, ktorej pravidlo jej vyhovuje.
const SECTIONS: Section[] = [
  { title: "Hlavné stránky", withDescription: true, match: (r) => ["/", "/cennik", "/kontakt", "/o-nas", "/referencie"].includes(r) },
  { title: "Sťahovanie – mestá", withDescription: false, match: (r) => under(r, "/stahovanie") && CITIES.has(slug(r).replace(/^stahovanie-/, "")) },
  { title: "Sťahovanie – hlavné služby", withDescription: true, match: (r) => under(r, "/stahovanie") },
  { title: "Vypratávanie a odvoz odpadu", withDescription: true, match: (r) => under(r, "/vypratavanie") },
  { title: "Montáž a hodinový manžel", withDescription: true, match: (r) => under(r, "/hodinovy-manzel-majster") || /^\/montaz-/.test(r) },
  { title: "Búracie a demolačné práce", withDescription: true, match: (r) => under(r, "/buracie-prace") },
  { title: "Právne dokumenty", withDescription: false, match: (r) => !isEn(r) && isLegalRoute(r) },
  { title: "English – main pages", withDescription: true, match: (r) => ["/en", "/en/about", "/en/contact", "/en/pricing", "/en/reviews"].includes(r) },
  { title: "English – legal", withDescription: false, match: (r) => isEn(r) && isLegalRoute(r) },
  { title: "English – international moving", withDescription: false, match: (r) => isEn(r) && /^(moving-(to|from)-|international-moving)/.test(slug(r)) },
  { title: "English – moving by city (Slovakia)", withDescription: false, match: (r) => isEn(r) && CITIES.has(slug(r).replace(/^moving-/, "")) },
  { title: "English – moving services", withDescription: true, match: (r) => isEn(r) && slug(r).includes("moving") },
  { title: "English – junk & waste removal", withDescription: false, match: (r) => isEn(r) && /junk|waste|furniture-removal/.test(slug(r)) },
  { title: "English – furniture assembly & handyman", withDescription: false, match: (r) => isEn(r) && /furniture-assembly|handyman|kitchen-installation/.test(slug(r)) },
  { title: "English – demolition", withDescription: false, match: (r) => isEn(r) && slug(r).includes("demolition") },
  { title: "Blog", withDescription: true, match: (r) => under(r, "/blog") },
  // Záchytné sekcie – nová stránka mimo pravidiel vyššie sa v súbore nestratí.
  { title: "Ďalšie stránky", withDescription: true, match: (r) => !isEn(r) },
  { title: "English – other pages", withDescription: true, match: () => true },
];

// Sekcie v súbore idú v tomto poradí (pravidlá vyššie sú zoradené podľa presnosti, nie podľa poradia v súbore).
const OUTPUT_ORDER = [
  "Hlavné stránky",
  "Sťahovanie – hlavné služby",
  "Sťahovanie – mestá",
  "Vypratávanie a odvoz odpadu",
  "Montáž a hodinový manžel",
  "Búracie a demolačné práce",
  "Ďalšie stránky",
  "Právne dokumenty",
  "English – main pages",
  "English – moving services",
  "English – moving by city (Slovakia)",
  "English – international moving",
  "English – junk & waste removal",
  "English – furniture assembly & handyman",
  "English – demolition",
  "English – other pages",
  "English – legal",
  "Blog",
];

/** Titulok bez značky: „Sofoservis | Sťahovanie…“ → „Sťahovanie…“, „O nás | Sofoservis – príbeh…“ → „O nás“. */
function cleanTitle(title: string): string {
  const parts = title
    .split("|")
    .map((p) => p.trim().replace(/[\s,—–-]+$/, ""))
    .filter((p) => p && !/^sofo\s?servis\b/i.test(p));
  return parts.length ? parts.join(" | ") : title;
}

// Články blogu majú titulok a popis v lib/blog/articles.ts (page.tsx ich len odovzdáva ďalej).
const ARTICLE_META = new Map(blogArticles.map((a) => [`/blog/${a.slug}`, { title: a.title, description: a.description }]));

export function GET() {
  const grouped = new Map<string, string[]>();
  for (const route of getPublicRoutes()) {
    const section = SECTIONS.find((s) => s.match(route))!;
    const { title, description } = ARTICLE_META.get(route) ?? getPageMetadata(route);
    const label = title ? cleanTitle(title) : route;
    const line = `- [${label}](${routeUrl(route)})${section.withDescription && description ? `: ${description}` : ""}`;
    grouped.set(section.title, [...(grouped.get(section.title) ?? []), line]);
  }

  const body = OUTPUT_ORDER.filter((title) => grouped.has(title))
    .map((title) => `## ${title}\n\n${grouped.get(title)!.join("\n")}`)
    .join("\n\n");

  return new Response(`${INTRO}\n\n${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
