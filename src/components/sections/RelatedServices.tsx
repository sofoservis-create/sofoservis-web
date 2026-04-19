import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  title?: string;
  services: ServiceItem[];
}

export default function RelatedServices({
  title = "Súvisiace služby",
  services,
}: RelatedServicesProps) {
  const count = services.length;

  const gridClass =
    count >= 4
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      : count === 3
        ? "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        : "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto";

  return (
    <section className="py-10 md:py-[60px] bg-white border-t border-gray-100" id="suvisiace-sluzby">
      <Container>
        <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
          {title}
        </h3>
        <div className={gridClass}>
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group flex gap-4 items-start p-5 bg-white rounded-xl border border-gray-200 hover:border-accent-500 hover:shadow-md transition-all duration-200 h-full"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-accent-50 group-hover:bg-accent-500 transition-colors duration-200">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-semibold text-primary-900 group-hover:text-accent-600 transition-colors duration-200 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
