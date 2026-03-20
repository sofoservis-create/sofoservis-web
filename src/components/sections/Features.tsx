// src/components/sections/Features.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/elements/CallToAction";
import Container from "@/components/ui/Container";

// Define interface for feature item
interface FeatureItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

// Define props interface for Features component
export interface FeaturesProps {
  title?: string;
  description?: string;
  features?: FeatureItem[];
  showCallToAction?: boolean;
  callToActionText?: string;
  centerLastRow?: boolean;
}

export default function Features({
  title = "Komplexné sťahovacie služby",
  description = "Bezpečne presúvame váš majetok z bodu A do bodu B.",
  centerLastRow = false,
  features = [
    {
      image: "/icons/truck_icon.svg",
      title: "Komplexné sťahovacie služby",
      description:
        "Nech sa vaša cesta z bodu A do B uskutoční bez stresu! S našimi službami sťahovanie premeníte na hladký a bezpečný zážitok.",
      link: "/stahovanie-bytov-domov",
    },
    {
      image: "/icons/calendar_icon.svg",
      title: "Sťahovanie 6 dní v týždni",
      description:
        "Jediná sťahovacia spoločnosť v Bratislave, ktorá vám ponúka flexibilitu kedykoľvek a kdekoľvek. Sťahujeme bez ohľadu na rozsah – od malých batožín po veľké náklady, vždy s garantovanou bezpečnosťou.",
      link: "/stahovanie-kancelarii-firiem",
    },
    {
      image: "/icons/house_icon.svg",
      title: "Sťahovanie pre domácnosti v Bratislave",
      description:
        "Špecializujeme sa na lokálne sťahovanie po Bratislave a celom Slovensku. Presťahujeme vás do ktoréhoľvek bratislavského okresu, ako aj do okolitých regiónov (Trnava, Senec, Pezinok a ďalšie).",
      link: "/stahovanie-preprava-nabytku",
    },
    {
      image: "/icons/globe_icon.svg",
      title: "Diaľkové sťahovanie",
      description:
        "Presťahujeme vás z Bratislavy kamkoľvek v Európe – do Prahy, Viedne, Berlína či iných miest. S dôrazom na presné termíny a bezpečné balenie vám pomôžeme zabydlieť sa v novom dome čo najrýchlejšie.",
      link: "/medzinarodne-stahovanie",
    },
    {
      image: "/icons/briefcase_icon.svg",
      title: "Firemné a kancelárske sťahovanie",
      description:
        "Minimalizujeme prestoje vašej firmy! Sťahujeme počas noci, víkendov či sviatkov a postaráme sa o kompletnú organizáciu – od profesionálneho balenia až po rozbalenie. Váš tím bude druhý deň pripravený na prácu.",
      link: "/stahovanie-kancelarii-firiem",
    },
    {
      image: "/icons/packing_box_icon.svg",
      title: "Sťahovanie malých nákladov",
      description:
        "Potrebujete presťahovať pár vecí alebo opustiť malý byt? S našou službou sťahovanie malých nákladov nemusíte zdvihnúť ani prst. Postaráme sa o všetko!",
      link: "/stahovanie-tazkych-bremien",
    },
  ],
  showCallToAction = true,
  callToActionText = "Získať nezáväznú cenovú ponuku",
}: FeaturesProps) {
  return (
    <section className="pt-10 md:pt-[100px] bg-white overflow-hidden" id="features">
      <Container>
        <div className="text-center mx-auto max-w-4xl mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-primary-600/90 mx-auto">{description}</p>
        </div>

        {centerLastRow && features.length > 3 ? (
          <>
            <div className="grid grid-cols-1 gap-y-8 sm:gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard
                  key={index}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                  link={feature.link}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-y-16 mt-8 sm:mt-16">
              {features.slice(3).map((feature, index) => (
                <FeatureCard
                  key={index + 3}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                  link={feature.link}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-y-8 sm:gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            ))}
          </div>
        )}

        {showCallToAction && (
          <div className="mt-10">
            <CallToAction text={callToActionText} />
          </div>
        )}
      </Container>
    </section>
  );
}

function FeatureCard({ image, title, description, link }: FeatureItem) {
  return (
    <Link
      href={link}
      className="group flex flex-col relative transition duration-300 max-w-sm cursor-pointer hover:scale-105"
    >
      {/* Fixed image container - removed fixed height and unnecessary flex centering */}
      <div className="relative aspect-square overflow-hidden rounded-xl w-48 h-48 mx-auto mb-4 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={190}
          height={190}
          className="object-contain transition duration-500 ease-out"
        />
      </div>

      {/* Reduced margin from mt-5 to direct connection */}
      <div className="flex flex-col flex-1 text-center">
        <h3 className="text-xl font-semibold text-primary-900 group-hover:text-accent-500 transition-colors duration-200 mb-3">
          {title}
        </h3>

        <p className="text-base text-primary-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
