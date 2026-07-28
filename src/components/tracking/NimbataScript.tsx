"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { isNimbataExcludedPath } from "@/lib/nimbataExclusions";

export default function NimbataScript() {
  const pathname = usePathname();

  if (isNimbataExcludedPath(pathname)) return null;

  return (
    <Script
      src="https://cdn.dni.nimbata.com/895390109815.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        setTimeout(() => {
          if (typeof window.__nimbataReveal === "function") {
            window.__nimbataReveal();
          }
        }, 300);
      }}
    />
  );
}
