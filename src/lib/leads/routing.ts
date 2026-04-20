// Server-side mirror of the EmailJS template/route mapping that lives in
// QuickContactForm.tsx (EMAIL_ROUTING). Keep in sync if that table changes.

export type EmailTemplate = "template_cqtaia8" | "template_y6oz64j";

export interface EmailRoute {
  templateId: EmailTemplate;
  to: string;
}

const ASSEMBLY_TEMPLATE: EmailRoute = {
  templateId: "template_cqtaia8",
  to: "montaz@sofoservis.sk",
};

const DEFAULT_TEMPLATE: EmailRoute = {
  templateId: "template_y6oz64j",
  to: "doprava@sofoservis.sk",
};

export function isMontazPath(pathname: string): boolean {
  const p = pathname || "";
  return (
    p.includes("/montaz-nabytku") ||
    p.includes("/montaz-kuchyne") ||
    p.includes("/hodinovy-manzel-majster") ||
    p.includes("/en/furniture-assembly") ||
    p.includes("/en/kitchen-installation") ||
    p.includes("/en/handyman")
  );
}

export function resolveEmailRoute(
  serviceType: string,
  pathname: string
): EmailRoute {
  if (serviceType === "montaz" || isMontazPath(pathname)) return ASSEMBLY_TEMPLATE;
  return DEFAULT_TEMPLATE;
}
