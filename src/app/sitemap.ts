import { MetadataRoute } from "next";
import { getPublicRoutes, isLegalRoute, routeUrl } from "@/lib/siteRoutes";

function priorityFor(route: string): number {
  if (route === "/") return 1.0;
  const isEnglish = route === "/en" || route.startsWith("/en/");
  const depth = route.split("/").filter(Boolean).length;
  if (isLegalRoute(route)) {
    return 0.2;
  }
  if (isEnglish) return depth <= 1 ? 0.7 : 0.55;
  return depth <= 1 ? 0.8 : 0.7;
}

function changeFrequencyFor(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (isLegalRoute(route)) {
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
  const routes = getPublicRoutes();

  return routes.map((route) => ({
    url: routeUrl(route),
    lastModified: buildTime,
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }));
}
