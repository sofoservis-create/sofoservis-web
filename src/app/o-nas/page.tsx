import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ZoomableImage from "@/components/ui/ZoomableImage";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "O nás | Sofoservis – príbeh sťahovacej firmy",
  description:
    "Spoznajte príbeh Sofoservisu – od žltej dodávky v roku 2018 po firmu s 6 autami a 3500+ spokojnými zákazníkmi. Sťahujeme príbehy, nie len nábytok.",
  alternates: {
    canonical: "https://www.sofoservis.sk/o-nas",
    languages: {
      sk: "https://www.sofoservis.sk/o-nas",
      en: "https://www.sofoservis.sk/en/about",
      "x-default": "https://www.sofoservis.sk/o-nas",
    },
  },
  keywords:
    "o nás sofoservis, príbeh sofoservis, zakladateľ sofoservis, sťahovacia firma bratislava, tím sofoservis",
  openGraph: {
    title: "O nás | Sofoservis – príbeh sťahovacej firmy",
    description:
      "Spoznajte príbeh Sofoservisu – od žltej dodávky v roku 2018 po firmu s 6 autami a 3500+ spokojnými zákazníkmi.",
    url: "https://www.sofoservis.sk/o-nas",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O nás | Sofoservis – príbeh sťahovacej firmy",
    description:
      "Spoznajte príbeh Sofoservisu – od žltej dodávky v roku 2018 po firmu s 6 autami a 3500+ spokojnými zákazníkmi.",
    images: ["https://www.sofoservis.sk/images/og-logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sofoservis",
  url: "https://www.sofoservis.sk",
  logo: "https://www.sofoservis.sk/images/Sofoservis_nove_logo_SVG.svg",
  foundingDate: "2018",
  description:
    "Profesionálna sťahovacia spoločnosť so službami sťahovania, vypratávania a montáže nábytku.",
  areaServed: "Slovakia",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+421951735130",
    contactType: "customer service",
    availableLanguage: ["Slovak", "English"],
  },
};

const services = [
  {
    icon: "/icons/truck_icon.svg",
    title: "Sťahovanie",
    desc: "Byty, domy, kancelárie, klavíre, trezory. Kdekoľvek na Slovensku aj do zahraničia.",
    href: "/stahovanie",
  },
  {
    icon: "/icons/vypratavanie_icon.svg",
    title: "Vypratávanie",
    desc: "Byty, pivnice, pozemky, garáže. Legálna a ekologická likvidácia odpadu.",
    href: "/vypratavanie-bytov-domov",
  },
  {
    icon: "/icons/repair_icon.svg",
    title: "Montáž nábytku",
    desc: "Skrine, postele, kuchyne, spotrebiče. Presne, rýchlo a bezpečne.",
    href: "/montaz-nabytku",
  },
];

const stats = [
  { value: "2018", label: "Rok vzniku" },
  { value: "3 500+", label: "Spokojných zákazníkov" },
  { value: "6", label: "Nákladných áut" },
  { value: "3", label: "Profesionálne tímy" },
];

const values = [
  {
    icon: "🤝",
    title: "Spoľahlivosť",
    desc: "Prídeme načas, spravíme čo sľúbime.",
  },
  {
    icon: "🙏",
    title: "Slušnosť",
    desc: "Správame sa s rešpektom ku klientom aj kolegom.",
  },
  {
    icon: "⚖️",
    title: "Férovosť",
    desc: "Žiadne skryté poplatky, transparentné ceny.",
  },
  {
    icon: "⚡",
    title: "Flexibilita",
    desc: "Večer, víkend, na poslednú chvíľu — zvládneme.",
  },
  {
    icon: "❤️",
    title: "Starostlivosť",
    desc: "K vašim veciam sa správame ako k vlastným.",
  },
  {
    icon: "📈",
    title: "Rast",
    desc: "Neustále sa zlepšujeme, investujeme do ľudí a techniky.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Domov",
      item: "https://www.sofoservis.sk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "O nás",
      item: "https://www.sofoservis.sk/o-nas",
    },
  ],
};

const oNasFaqItems = [
  {
    question: "Aké služby ponúkate?",
    answer:
      "Ponúkame tri hlavné kategórie služieb: sťahovanie (byty, domy, kancelárie, medzinárodné sťahovanie), vypratávanie (byty, pivnice, garáže, záhrady, firemné priestory) a montáž nábytku (IKEA, kuchyne, ostatné značky).",
  },
  {
    question: "V ktorých lokalitách poskytujete vaše služby?",
    answer:
      "Naše služby poskytujeme predovšetkým v Bratislave a okolí, ale pôsobíme aj v ďalších mestách ako Trnava, Senec, Pezinok a po celom Slovensku.",
  },
  {
    question: "Koľko stojí sťahovanie?",
    answer:
      "Cena závisí od mnohých faktorov, ako sú objem vecí, vzdialenosť, poschodie a ďalšie špecifiká. Pre presný odhad vyplňte náš kontaktný formulár alebo nám zavolajte a my vám pripravíme bezplatnú cenovú ponuku.",
  },
  {
    question: "Sťahujete aj počas víkendov a sviatkov?",
    answer:
      "Áno, naše služby poskytujeme 6 dní v týždni vrátane soboty od 8:00 do 17:00. Nedeľa je podľa dohody. Za prácu počas soboty neúčtujeme žiadny príplatok.",
  },
  {
    question: "Čo všetko vypratávate a ako nakladáte s odpadom?",
    answer:
      "Vypratávame byty, domy, pivnice, garáže, záhrady, kancelárie aj iné priestory. Odpad triedime a likvidujeme ekologicky v súlade s platnou legislatívou — použitý nábytok, spotrebiče aj stavebný odpad. Vy sa nemusíte o nič starať.",
  },
  {
    question: "Aký typ odpadu viete zlikvidovať?",
    answer:
      "Zlikvidujeme starý nábytok (regály, skrine, postele), spotrebiče, matrace, textílie, stavebný odpad aj zmesový domový odpad. Nebezpečný odpad (farby, chemikálie) riešime individuálne podľa charakteru materiálu.",
  },
  {
    question: "Montujete aj nábytok IKEA?",
    answer:
      "Áno, špeciálne sa zameriavame na montáž nábytku IKEA — skrine PAX, kuchynské linky, postele, policové systémy BILLY a ďalšie. Montáž vykonávame podľa návodu IKEA s dôrazom na presnosť a pevnosť.",
  },
  {
    question: "Zmontujete celú kuchyňu na mieru?",
    answer:
      "Áno, montujeme kuchynské linky rôznych značiek vrátane zabudovaných spotrebičov, soklov a závesných skriniek. Po montáži sa postaráme aj o odvoz obalových materiálov.",
  },
];

export default function ONasPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQJsonLd items={oNasFaqItems} />

      <Hero
        title="Sme Sofoservis. Sťahujeme príbehy, nie len nábytok"
        description="Od žltej dodávky v roku 2018 po profesionálnu firmu s 6 nákladnými autami a troma tímami."
        backgroundImage="/images/sofoservis-novy-team.webp"
        formTitle="Potrebujete pomoc so sťahovaním?"
        formSubtitle="Získajte nezáväznú cenovú ponuku ešte dnes."
        badgeText="Sťahujeme, vypratávame, montujeme"
        benefits={["Férové ceny", "Skúsený tím", "Bez skrytých poplatkov"]}
      />

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Photos column */}
            <div className="w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1">
                <ZoomableImage
                  src="/images/zakladatel-sofoservis-portrait.png"
                  alt="Sofian Sofo Hidbani – zakladateľ Sofoservis"
                  width={800}
                  height={1200}
                  priority
                  className="w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">Sofian &ldquo;Sofo&rdquo; Hidbani – zakladateľ</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1">
                <ZoomableImage
                  src="/images/zakladatel-zaciatky.webp"
                  alt="Zakladateľ Sofoservis v začiatkoch – pri žltej dodávke 2018"
                  width={800}
                  height={800}
                  className="w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">Začiatky — 2018</span>
                </div>
              </div>
            </div>

            {/* Story column */}
            <div className="w-full lg:w-3/5">
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-accent-500/15 text-accent-600 font-medium text-sm mb-4">
                Príbeh zakladateľa
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                Od inzerátu na Bazoši po profesionálnu firmu
              </h2>
              <div className="space-y-4 text-primary-700 text-lg leading-relaxed">
                <p>
                  V roku 2018 som videl kamarátov, ako začali podnikať — a pochopil som: ak oni môžu, prečo nie ja? Začal som s otcovou dodávkou a inzerátom na Bazoši: <em>&ldquo;Najlacnejšie sťahovanie v Bratislave.&rdquo;</em> Prvý byt som presťahoval za 50 € a aj to som sa hanbil vypýtať.
                </p>
                <p>
                  Firma rástla rýchlo — možno príliš rýchlo. Keď ma moja pravá ruka okradla o viac ako 50 000 €, takmer sme skrachovali. No nevzdal som sa.
                </p>
                <p>
                  Dnes máme stabilnú firmu s troma vyškolenými tímami. <Link href="/stahovanie" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">Sťahujeme</Link> byty, domy aj kancelárie. <Link href="/vypratavanie-bytov-domov" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">Vypratávame</Link> priestory po zosnulých, pred rekonštrukciou aj po nej. <Link href="/montaz-nabytku" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">Montujeme</Link> nábytok a kuchyne na dennej báze.
                </p>
                <p className="text-primary-900 font-semibold text-xl">
                  Sťahovanie nie je o nábytku. Je o ľuďoch.
                </p>
                <p className="text-primary-500 text-base mt-1">
                  — Sofian &ldquo;Sofo&rdquo; Hidbani, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            Čo robíme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="mb-5 flex items-center justify-center">
                  <Image src={s.icon} alt={s.title} width={96} height={96} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{s.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 text-accent-600 font-semibold text-sm group-hover:underline">
                  Zistiť viac →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                  {s.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Then vs Now */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            Vtedy a dnes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/sofoservis-stary-team.webp"
                alt="Sofoservis v začiatkoch – traja chalani pri žltej dodávke, Bratislava 2018"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[3/2]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Ako sme začínali — 2018</p>
                <p className="text-white/80 text-sm">Traja chalani, jedna dodávka, veľký sen</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/sofoservis-novy-team.webp"
                alt="Sofoservis tím dnes – celý fleet áut a profesionálny tím"
                width={1400}
                height={933}
                className="w-full object-cover aspect-[3/2]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Dnes — tím Sofoservis</p>
                <p className="text-white/80 text-sm">6 áut, 3 tímy, stovky zákazníkov ročne</p>
                <p className="text-accent-400 text-sm font-medium mt-1">Sofian &ldquo;Sofo&rdquo; Hidbani, zakladateľ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Naše hodnoty
            </h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Tieto princípy riadia každú zákazku, každý deň.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-primary-900 text-lg mb-1">{v.title}</h3>
                  <p className="text-primary-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Expo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Image
              src="/images/Reality_EXPO.svg"
              alt="Reality EXPO logo"
              width={160}
              height={48}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Prestížny partner Reality EXPO 2025
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto text-lg">
              V roku 2025 sme boli pozvaní ako odborný partner Reality EXPO — jednej z najväčších realitných konferencií na Slovensku. Prezentovali sme, ako Sofoservis funguje a prečo si nás makléri a developeri vyberajú ako partnera pre svojich klientov.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/reality-expo-2025-stage.webp"
                alt="Zakladateľ Sofoservis prednáša na Reality EXPO 2025 – ako funguje Sofoservis"
                width={900}
                height={1350}
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/reality-expo-2025-sala.webp"
                alt="Sofoservis na Reality EXPO 2025 – pohľad na sálu s publikom"
                width={1200}
                height={1800}
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}
