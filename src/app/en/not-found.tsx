import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page not found | Sofoservis",
  description:
    "The page you are looking for does not exist. Return to the homepage or browse our services.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 pt-16">
      <div className="max-w-3xl w-full text-center mt-6">
        <div className="relative mb-8">
          <Image
            src="/images/404.webp"
            alt="404 page not found"
            width={380}
            height={220}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-primary-900 mb-4">
          Page not found
        </h1>

        <p className="text-primary-600 mb-8 max-w-md mx-auto">
          We&apos;re sorry, the page you are looking for has moved or no longer
          exists.
        </p>

        <div className="space-y-3 max-w-md mx-auto">
          <Link
            href="/en"
            className="block w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium py-3.5 rounded-md transition-all duration-300"
          >
            Go to homepage
          </Link>

          <Link
            href="/en/contact"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-primary-800 font-medium py-3.5 rounded-md transition-all duration-300"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-primary-700 font-medium mb-6">You might also try:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              {
                icon: "/icons/truck_icon.svg",
                title: "Moving",
                description:
                  "Apartments, houses, offices, pianos, safes. Across Slovakia and abroad.",
                href: "/en/moving",
              },
              {
                icon: "/icons/vypratavanie_icon.svg",
                title: "Clearance",
                description:
                  "Apartments, basements, properties, garages. Legal and eco-friendly disposal.",
                href: "/en/clearance",
              },
              {
                icon: "/icons/repair_icon.svg",
                title: "Furniture assembly",
                description:
                  "Wardrobes, beds, kitchens, appliances. Precise, fast and safe.",
                href: "/en/furniture-assembly",
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
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
