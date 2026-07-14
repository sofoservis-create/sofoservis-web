"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = [
  "/hodinovy-manzel-majster",
  "/montaz-nabytku",
  "/montaz-kuchyne",
];

export default function NimbataScript() {
  const pathname = usePathname();

  const isExcluded = EXCLUDED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (isExcluded) return null;

  return (
    <Script
      src="https://cdn.dni.nimbata.com/895390109815.min.js"
      strategy="afterInteractive"
    />
  );
}
