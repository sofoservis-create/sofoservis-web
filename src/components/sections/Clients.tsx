"use client";
import Image from "next/image";

export interface ClientLogo {
  src: string;
  alt: string;
  height: number;
}

interface ClientsProps {
  logos?: ClientLogo[];
  title?: string;
}

export default function Clients({ logos }: ClientsProps) {
  // Use passed logos or fallback to default ones
  const clientLogos = logos || [
    { src: "/images/sofoClient1.webp", alt: "Google", height: 32 },
    {
      src: "/images/BratislavaRuzinov.webp",
      alt: "Bratislava Ružinov",
      height: 64,
    },
    { src: "/images/sofoClient3.webp", alt: "Microsoft", height: 32 },
    { src: "/images/sofoClient4.webp", alt: "Amazon", height: 32 },
    { src: "/images/homola.webp", alt: "Homola Bratislava", height: 64 },
    { src: "/images/sofoClient6.svg", alt: "Partner", height: 48 },
    { src: "/images/tedx.webp", alt: "TedX", height: 48 },
    { src: "/images/sofoClient8.webp", alt: "Partner", height: 48 },
    { src: "/images/sofoClient9.webp", alt: "Partner", height: 48 },
    { src: "/images/Reality_EXPO.svg", alt: "Partner", height: 48 },
    { src: "/images/remax-logo.png", alt: "RE/MAX", height: 32 },
    { src: "/images/ikea-logo.png", alt: "IKEA", height: 40 },
  ];

  return (
    <div className="bg-accent-500 overflow-hidden py-4">
      <div className="relative w-full">
        {/* Gradient masks for fade effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-accent-500 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-accent-500 to-transparent z-10"></div>

        {/* Scrolling container with infinite loop */}
        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0 w-[140px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={logo.height}
                  className="max-w-[120px] max-h-[48px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}

            {/* Duplicated set of logos for seamless looping */}
            {clientLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[140px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={logo.height}
                  className="max-w-[120px] max-h-[48px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(
                -140px * ${clientLogos.length} - 48px * ${clientLogos.length}
              )
            );
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
