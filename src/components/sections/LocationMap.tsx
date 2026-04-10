import React from "react";
import Link from "next/link";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

interface LocationItem {
  name: string;
  href?: string;
}

interface LocationMapProps {
  title?: string;
  description?: string;
  locations?: (string | LocationItem)[];
  additionalText?: string;
  showCallToAction?: boolean;
  callToActionText?: string;
  supporText?: string; // Keep the original typo for consistency
}

export default function LocationMap({
  title = "Sťahujeme po celom Slovensku", // Slovak default
  description = "Naše služby poskytujeme v nasledujúcich lokalitách", // Slovak default
  locations = [],
  additionalText,
  showCallToAction = true,
  callToActionText = "Sťahujeme aj vo vašej lokalite, získajte ponuku", // Slovak default
  supporText = "Pôsobíme aj mimo Bratislavy:", // Slovak default
}: LocationMapProps) {
  return (
    <section
      className="pt-10 md:pt-[100px] pb-10 md:pb-[100px] bg-white overflow-hidden"
      id="locations"
    >
      <Container>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            {title}
          </h3>
          <p className="text-lg text-primary-600/90 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {locations.map((location, index) => {
              const locationItem =
                typeof location === "string" ? { name: location } : location;

              const content = (
                <div className="flex items-center gap-2 p-3 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-accent-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-base text-primary-800 font-medium">
                    {locationItem.name}
                  </span>
                </div>
              );

              return locationItem.href ? (
                <Link
                  key={index}
                  href={locationItem.href}
                  className="hover:bg-gray-50 transition-colors rounded-lg"
                  prefetch={true}
                >
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {additionalText && (
            <div className="mt-10 max-w-lg mx-auto px-4">
              <div className="p-6 bg-[#FFFBEB] rounded-xl border border-accent-500/10">
                <div className="flex items-start gap-6 max-w-2xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary-900 mb-2">
                      {supporText}
                    </h4>
                    <p className="text-base text-primary-700 leading-relaxed">
                      {additionalText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {showCallToAction && (
          <div className="mt-12">
            <CallToAction text={callToActionText} />
          </div>
        )}
      </Container>
    </section>
  );
}
