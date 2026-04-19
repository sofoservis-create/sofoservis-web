import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Stránka nenájdená | Sofoservis",
  description: "Hľadaná stránka neexistuje. Vráťte sa na domovskú stránku alebo si pozrite naše služby.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 pt-16">
      <div className="max-w-3xl w-full text-center mt-6">
        <div className="relative mb-8">
          <Image
            src="/images/404.webp"
            alt="404 stránka nenájdená"
            width={380}
            height={220}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-primary-900 mb-4">
          Stránka nenájdená
        </h1>

        <p className="text-primary-600 mb-8 max-w-md mx-auto">
          Ľutujeme, ale stránka, ktorú hľadáte, sa presťahovala alebo
          neexistuje.
        </p>

        <div className="space-y-3 max-w-md mx-auto">
          <Link
            href="/"
            className="block w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium py-3.5 rounded-md transition-all duration-300"
          >
            Vrátiť sa na domovskú stránku
          </Link>

          <Link
            href="/kontakt"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-primary-800 font-medium py-3.5 rounded-md transition-all duration-300"
          >
            Kontaktujte nás
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-primary-700 font-medium mb-6">
            Môžete tiež vyskúšať:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              {
                icon: "/icons/truck_icon.svg",
                title: "Sťahovanie",
                description: "Byty, domy, kancelárie, klavíre, trezory. Kdekoľvek na Slovensku aj do zahraničia.",
                href: "/stahovanie-bratislava",
              },
              {
                icon: "/icons/vypratavanie_icon.svg",
                title: "Vypratávanie",
                description: "Byty, pivnice, pozemky, garáže. Legálna a ekologická likvidácia odpadu.",
                href: "/vypratavanie-bytov-domov",
              },
              {
                icon: "/icons/repair_icon.svg",
                title: "Montáž nábytku",
                description: "Skrine, postele, kuchyne, spotrebiče. Presne, rýchlo a bezpečne.",
                href: "/montaz-nabytku",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={72}
                    height={72}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-base font-bold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-600 mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-sm font-medium text-accent-500 hover:text-accent-600"
                >
                  Zistiť viac →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
