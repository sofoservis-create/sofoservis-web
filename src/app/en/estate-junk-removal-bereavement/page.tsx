import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Estate Junk Removal After Bereavement | Sofoservis Slovakia",
  description:
    "Compassionate estate junk removal services after bereavement in Slovakia ✅ Respectful, discreet team ✅ Free assessment ✅ We handle everything",
  keywords:
    "estate junk removal, bereavement junk removal, house junk removal after death, sympathetic house junk removal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/estate-junk-removal-bereavement",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-pozostalosti",
      en: "https://www.sofoservis.sk/en/estate-junk-removal-bereavement",
      "x-default": "https://www.sofoservis.sk/vypratavanie-pozostalosti",
    },
  },
};

const faqItems = [
  {
    question: "How does the bereavement junk removal process work?",
    answer:
      "The process begins with a discreet and free on-site visit. We help you sort personal items, documents, and valuables from items intended for disposal. We don't rush you — we give you space for decisions. We ensure gentle and dignified junk removal of the space.",
  },
  {
    question: "How long does a probate junk removal take?",
    answer:
      "It depends on the size of the property and amount of items. A standard 2-bedroom apartment usually takes 1 working day. Larger houses can take 2-3 days.",
  },
  {
    question: "How do you handle valuables and documents?",
    answer:
      "All valuables, documents, photographs, and jewelry are carefully set aside and handed over to the relatives. Nothing valuable is disposed of without your consent.",
  },
  {
    question: "Can I be present during the junk removal?",
    answer:
      "Yes, your presence is welcome, but not required. We can handle everything per your instructions if you prefer not to be there during the process.",
  },
];

export default function EstateJunkRemovalBereavementPage() {
  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/stary-gauc-nosi-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Estate Junk Removal After Bereavement"
          description="We understand that losing a loved one is difficult. We offer sensitive and discreet estate junk removal services. Our team approaches every project with maximum empathy, respect, and professionalism."
          formTitle="Contact us discreetly"
          formSubtitle="Fill out the form — we will respond within hours"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Discreet approach", "Sorting of valuables", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotFixedHeightPx={850}
          desktopMinHeroTextHeightPx={540}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Estate Junk Removal After Bereavement"
          description="We understand that losing a loved one is difficult. We offer sensitive and discreet estate junk removal services. Our team approaches every project with maximum empathy, respect, and professionalism."
          formTitle="Contact us discreetly"
          formSubtitle="Fill out the form — we will respond within hours"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Discreet approach", "Sorting of valuables", "Fixed price upfront"]}
          showMascot
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          mobileMascotOffsetY={-44}
          mobileMascotScale={0.847}
          mobileFormOffsetY={19}
          pillsVariant="stahovanie"
        />
      </div>
      <div>
        <Clients />
      </div>
      <div>
        <GoogleReviews title="Compassionate service reviews" />
      </div>
      <div>
        <Reviews showHeadline={true} callToActionText="Contact Us" />
      </div>
      <div>
        <Features
          title="Dignified Estate Junk Removal Services"
          description="Complete solutions for sensitive and respectful property junk removal after bereavement."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Sorting Personal Items",
              description: "We carefully sort personal belongings, documents, and photos to hand over to the family. Nothing valuable is disposed of without your knowledge.",
              link: "/en/estate-junk-removal-bereavement",
            },
            {
              image: "/icons/vypratavanie_icon.svg",
              title: "Discreet & Gentle Approach",
              description: "The entire process is handled with maximum empathy. We give you time for decisions and never rush the process.",
              link: "/en/estate-junk-removal-bereavement",
            },
            {
              image: "/icons/furniture_icon.svg",
              title: "Furniture & Contents Removal",
              description: "We arrange for the removal and ecological disposal of furniture, appliances, and contents you choose not to keep.",
              link: "/en/furniture-removal",
            },
            {
              image: "/icons/recycle_icon.svg",
              title: "Ecological Waste Disposal",
              description: "We sort waste and take it to appropriate facilities. Functional items can be donated to charities per your request.",
              link: "/en/hazardous-waste-removal",
            },
            {
              image: "/icons/landscape_icon.svg",
              title: "Final Space Cleaning",
              description: "After junk removal, we can perform basic cleaning and disinfection of the space according to your requirements.",
              link: "/en/estate-junk-removal-bereavement",
            },
            {
              image: "/icons/truck_icon.svg",
              title: "Available Across Slovakia",
              description: "We operate in Bratislava, Trnava, Nitra, and surrounding regions, providing support when you need it most.",
              link: "/en/home-junk-removal",
            },
          ]}
          callToActionText="Get a Free Assessment"
        />
      </div>
      <div>
        <InstagramFeed title="Our Work & Team" />
      </div>
      <div>
        <FAQ
          title="Frequently Asked Questions About Bereavement Junk Removal"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Contact us for discreet assistance"
          description="We are here for you during this difficult time. We ensure sensitive and professional property junk removal with respect and empathy."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Home Junk Removal", description: "Complete house and apartment junk removal.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Furniture Removal", description: "Professional furniture pickup and disposal.", href: "/en/furniture-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Apartment Moving", description: "Safe transport of items you wish to keep.", href: "/en/apartment-moving", icon: "/icons/house_icon.svg" },
          { title: "Handyman Services", description: "Small repairs and fixes for the property.", href: "/en/handyman-services", icon: "/icons/repair_icon.svg" },
        ]}
      />
      <ServicePricing filter={["junk removal"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
