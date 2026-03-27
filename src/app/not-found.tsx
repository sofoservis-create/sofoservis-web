"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 pt-16">
      <div className="max-w-xl w-full text-center mt-6">
        {/* Centered truck illustration */}
        <div className="relative mb-8">
          <Image
            src="/images/404.webp"
            alt="404 moving truck illustration"
            width={380}
            height={220}
            className="mx-auto"
            priority
          />
        </div>

        <h2 className="text-3xl font-bold text-primary-900 mb-4">
          Stránka nenájdená
        </h2>

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
          <p className="text-primary-700 font-medium mb-2">
            Môžete tiež vyskúšať:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6">
            <Link
              href="/stahovanie-bratislava"
              className="text-accent-500 hover:text-accent-600 hover:underline"
            >
              Sťahovanie Bratislava
            </Link>
            <Link
              href="/stahovanie-bytov-domov"
              className="text-accent-500 hover:text-accent-600 hover:underline"
            >
              Sťahovanie bytov
            </Link>
            <Link
              href="/cennik"
              className="text-accent-500 hover:text-accent-600 hover:underline"
            >
              Cenník
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
