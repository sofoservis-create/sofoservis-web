/**
 * Campaign pages where the Nimbata DNI script is NOT loaded and a dedicated
 * campaign number (0952 044 363) is used instead of the tracked main line.
 *
 * Single source of truth for NimbataScript, Navbar and StickyMobileCta.
 *
 * Matching is exact-path-or-subpath only: "/en/furniture-assembly-bratislava"
 * is a regular tracked page and must NOT match "/en/furniture-assembly".
 */
export const NIMBATA_EXCLUDED_BASES = [
  "/montaz-nabytku",
  "/montaz-kuchyne",
  "/hodinovy-manzel-majster",
  "/en/furniture-assembly",
  "/en/kitchen-installation",
  "/en/handyman-services",
] as const;

export function isNimbataExcludedPath(
  pathname: string | null | undefined,
): boolean {
  if (!pathname) return false;
  return NIMBATA_EXCLUDED_BASES.some(
    (base) => pathname === base || pathname.startsWith(base + "/"),
  );
}

/** The raw main-line number that Nimbata's DNI script targets and replaces. */
export const NIMBATA_TARGET_NUMBER = "0951 735 130";

/**
 * Returns the Nimbata-swapped tracking number if any `.nimbata_number_1`
 * element on the page currently holds one, otherwise null.
 *
 * The DNI script swaps text only once per full page load, so spans that get
 * re-rendered by client-side navigation revert to the raw target number.
 * Instead of trusting the first span in DOM order, scan all of them and
 * prefer any that still holds a swapped value (e.g. the sticky-bar span,
 * which stays mounted with constant text across route changes).
 */
export function findNimbataSwappedNumber(): string | null {
  if (typeof document === "undefined") return null;
  const spans = document.querySelectorAll<HTMLElement>(".nimbata_number_1");
  for (const span of Array.from(spans)) {
    const text = span.textContent?.trim();
    if (text && text !== NIMBATA_TARGET_NUMBER) return text;
  }
  return null;
}
