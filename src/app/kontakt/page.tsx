// src/app/kontakt/page.tsx
import React from "react";
import ContactHeader from "@/components/sections/ContactHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ReviewsShowcase from "@/components/widgets/ReviewsShowcase";
import Container from "@/components/ui/Container";
import QuickContactForm from "@/components/forms/QuickContactForm";

export const metadata = {
  title: "Kontaktujte nás – sťahovacie služby | Sofoservis",
  description:
    "Kontaktujte Sofoservis pre cenovo výhodné a profesionálne sťahovacie služby v Bratislave a na celom Slovensku. Získajte bezplatnú cenovú ponuku ešte dnes!",
  keywords:
    "kontakt sofoservis, stahovanie bratislava kontakt, sťahovacie služby kontakt, cenová ponuka sťahovanie, kontakt sťahovacia firma",
  alternates: {
    canonical: "https://www.sofoservis.sk/kontakt",
      languages: {
        sk: "https://www.sofoservis.sk/kontakt",
        en: "https://www.sofoservis.sk/en/contact",
        "x-default": "https://www.sofoservis.sk/kontakt",
      },
  },
  openGraph: {
      title: "Kontaktujte nás – sťahovacie služby | Sofoservis",
      description: "Kontaktujte Sofoservis pre cenovo výhodné sťahovacie služby v Bratislave a na celom Slovensku. Získajte bezplatnú cenovú ponuku ešte dnes!",
      url: "https://www.sofoservis.sk/kontakt",
      siteName: "Sofoservis",
      images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
      locale: "sk_SK",
      type: "website",
    },
  };

export default function ContactPage() {
  // FAQ data
  const faqData = {
    title: "Často kladené otázky o našich službách",
    items: [
      {
        question: "Aký je postup pri objednaní vašich služieb?",
        answer:
          "Stačí vyplniť kontaktný formulár, zavolať alebo poslať email. Dohodneme termín, rozsah prác a pripravíme nezáväznú cenovú ponuku — platí pre sťahovanie, vypratávanie aj montáž nábytku.",
      },
      {
        question: "Ako sa určuje cena za vaše služby?",
        answer:
          "Cena závisí od typu služby, objemu prác, vzdialenosti a ďalších faktorov. Po krátkej konzultácii vám pripravíme presnú cenovú ponuku zadarmo — bez záväzku.",
      },
      {
        question: "Ako dlho vopred treba objednať?",
        answer:
          "Odporúčame 7–14 dní vopred. V urgentných prípadoch vieme reagovať aj do 24–48 hodín pri sťahovaní, vypratávaní aj montáži.",
      },
      {
        question: "Čo patrí do vypratávacích služieb a ako nakladáte s odpadom?",
        answer:
          "Vypratávame byty, domy, pivnice, garáže aj pozemky. Odpad triedime a odvážame na zberné dvory alebo do zariadení na recykláciu — v súlade so zákonom.",
      },
      {
        question: "Aké typy montáže vykonávate?",
        answer:
          "Montujeme nábytok všetkých značiek, kuchynské linky a vykonávame drobné stavebné práce. Pracujeme rýchlo a na základe vašich potrieb.",
      },
      {
        question: "Poskytujete služby aj cez víkend?",
        answer:
          "Áno, pracujeme 6 dní v týždni vrátane soboty, bez príplatku. Prispôsobíme sa vašim časovým možnostiam.",
      },
    ],
  };

  return (
    <main>
      {/* Preload mascot SVG for faster LCP on contact page (split by viewport) */}
      <link
        rel="preload"
        href="/images/mascot/mascot-on-phone-mobile.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 767px)"
      />
      <link
        rel="preload"
        href="/images/mascot/mascot-on-phone.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 768px)"
      />
      {/* Contact Header Section */}
      <ContactHeader />

      {/* Contact Information Section */}
      <ContactInfo />

      {/* Contact Form Section */}
      <section className="pt-6 md:pt-10 pb-10 md:pb-14">
        <Container>
          <div className="md:hidden bg-accent-500/10 rounded-xl p-5 flex items-center gap-4 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent-500 flex-shrink-0">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <p className="text-primary-800 text-lg">
              <span className="font-bold">Bezplatná konzultácia:</span>{" "}
              Zavolajte nám alebo vyplňte kontaktný formulár nižšie pre rýchlu reakciu.
            </p>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Napíšte nám
            </h2>
            <p className="text-xl text-primary-600/90 max-w-2xl mx-auto">
              Vyplňte formulár nižšie a my vás budeme kontaktovať v priebehu 24
              hodín
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 md:p-8 max-w-4xl mx-auto transform transition-all duration-300 hover:shadow-2xl">
            {/* Using the same QuickContactForm component as in the Hero */}
            <QuickContactForm variant="white" />
          </div>
        </Container>
      </section>

      {/* Reviews Showcase */}
      <ReviewsShowcase variant="full" title="Čo o nás hovoria naši klienti" />

      {/* FAQ Section */}
      <FAQ
        title={faqData.title}
        items={faqData.items}
        subtitle="Našli ste odpoveď na vašu otázku? Ak nie, neváhajte nás kontaktovať."
      />

      {/* CTA Section */}
      <section className="bg-white">
        <CTA
          title="Potrebujete pomoc?"
          description="Naši odborníci sú pripravení pomôcť vám so všetkými vašimi potrebami. Kontaktujte nás ešte dnes pre bezplatnú cenovú ponuku."
          buttonText="Získať nezáväznú ponuku"
          buttonLink="/kontakt"
        />
      </section>
    </main>
  );
}
