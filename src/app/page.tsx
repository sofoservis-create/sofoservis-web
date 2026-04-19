import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

const faqItems = [
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

export const metadata = {
  title: "Sťahovanie, vypratávanie a montáž nábytku | Sofoservis",
  description:
    "Sofoservis – sťahovanie, vypratávanie a montáž nábytku. 3 500+ spokojných zákazníkov. Obhliadka zadarmo. Férové ceny.",
  keywords:
    "sťahovanie, sťahovanie bratislava, sťahovacie služby, vypratávanie, vypratávanie bytov, montáž nábytku, montáž IKEA, montáž kuchyne, sťahovanie bytov, sťahovanie domov, sťahovanie kancelárií, vypratávanie pivníc, odvoz nábytku, sofoservis",
  alternates: {
    canonical: "https://www.sofoservis.sk",
      languages: {
        sk: "https://www.sofoservis.sk",
        en: "https://www.sofoservis.sk/en",
        "x-default": "https://www.sofoservis.sk",
      },
  },
  robots: "index, follow",
  openGraph: {
    title: "Sťahovanie, vypratávanie a montáž nábytku | Sofoservis",
    description:
      "Najlepšie hodnotená spoločnosť na sťahovanie, vypratávanie a montáž nábytku v Bratislave. 3 500+ spokojných zákazníkov.",
    url: "https://www.sofoservis.sk",
    siteName: "Sofoservis",
    images: [{ url: "https://www.sofoservis.sk/images/og-logo.png", width: 1200, height: 630 }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sťahovanie, vypratávanie a montáž nábytku | Sofoservis",
    description:
      "Najlepšie hodnotená spoločnosť na sťahovanie, vypratávanie a montáž nábytku v Bratislave. 3 500+ spokojných zákazníkov.",
    images: ["https://www.sofoservis.sk/images/og-logo.png"],
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <FAQJsonLd items={faqItems} />

      <LabHero
        narrowForm
        title="Sťahovanie, vypratávanie a montáž nábytku – s najlepším hodnotením"
        description="Sofoservis je najlepšie hodnotená spoločnosť svojho druhu. Viac ako 3 500 spokojných zákazníkov a stovky 5-hviezdičkových recenzií."
        benefits={[]}
        ratingText="3500+ spokojných zákazníkov"
      />

      <Clients />

      <div>
        <GoogleReviews />
      </div>

      <section className="pt-4 pb-8 md:pt-6 md:pb-12">
        <Reviews showHeadline={true} />
      </section>

      <Features
          title="Prečo si vybrať Sofoservis"
          description="Komplexné služby pod jednou strechou — sťahovanie, vypratávanie aj montáž nábytku."
          features={[
            {
              image: "/icons/truck_icon.svg",
              title: "Sťahovanie bytov a domov",
              description:
                "Sťahujeme byty, domy aj väčšie nehnuteľnosti po celom Slovensku. Rýchlo, bez stresu a s dôrazom na bezpečnosť vašich vecí.",
              link: "/stahovanie-bytov-domov",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Sťahovanie kancelárií a firiem",
              description:
                "Firemné sťahovanie počas noci alebo víkendu — minimalizujeme prestoje a postaráme sa o celú organizáciu.",
              link: "/stahovanie-kancelarii-firiem",
            },
            {
              image: "/icons/house_icon.svg",
              title: "Vypratávanie bytov a domov",
              description:
                "Vypratávame byty, domy, pivnice, garáže a záhrady. Odpad zlikvidujeme ekologicky — vy nemusíte nič riešiť.",
              link: "/vypratavanie-bytov-domov",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Vypratávanie priestorov a odvoz nábytku",
              description:
                "Zbavíme vás starého nábytku, spotrebičov aj stavebného odpadu. Rýchlo, ekologicky a za férové ceny.",
              link: "/vypratavanie-odvoz-stareho-nabytku",
            },
            {
              image: "/icons/repair_icon.svg",
              title: "Montáž nábytku IKEA",
              description:
                "Montujeme nábytok IKEA — skrine PAX, postele, policové systémy aj ostatné série. Precízne a podľa návodu.",
              link: "/montaz-nabytku",
            },
            {
              image: "/icons/kitchen_icon.svg",
              title: "Montáž kuchyne",
              description:
                "Montujeme kuchynské linky vrátane zabudovaných spotrebičov a závesných skriniek. Odvoz obalov v cene.",
              link: "/montaz-kuchyne",
            },
          ]}
        />

      <ServiceAreas />

      <section className="py-12 md:py-16">
        <FAQ
          title="Často kladené otázky"
          subtitle="Nájdite odpovede na najčastejšie otázky o sťahovaní, vypratávaní a montáži nábytku"
          items={faqItems}
        />
      </section>

      <section className="py-8 md:py-12">
        <GoogleReviews
          title="Overené recenzie od skutočných zákazníkov"
          showReviewsShowcase={false}
          showCarousel={true}
        />
      </section>

      <CTA />

      <ContactFormSection />

      <div className="pb-12 md:pb-20">
        <InstagramFeed />
      </div>
    </main>
  );
}
