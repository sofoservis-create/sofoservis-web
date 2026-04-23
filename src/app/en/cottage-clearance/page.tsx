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
  title: "Cottage & Rural Property Clearance | Sofoservis Slovakia",
  description:
    "Professional cottage, chalet and rural property clearance in Slovakia ✅ Garden clearance ✅ Old furniture & tools removal ✅ Free quote",
  keywords:
    "cottage clearance, chalet clearance, rural property clearance, garden clearance, holiday home clearance",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/cottage-clearance",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-chalupy",
      en: "https://www.sofoservis.sk/en/cottage-clearance",
      "x-default": "https://www.sofoservis.sk/vypratavanie-chalupy",
    },
  },
};

const faqItems = [
  {
    question: "What do you remove during cottage clearance?",
    answer:
      "We remove old furniture, garden tools, agricultural machinery, accumulated waste, tires, appliances, and any other junk from the cottage or the property.",
  },
  {
    question: "Do you also clear gardens and outdoor areas?",
    answer:
      "Yes, besides the interior, we can clear gardens, outbuildings, barns, and the surrounding area of old items and debris.",
  },
  {
    question: "What is the cost of cottage clearance?",
    answer:
      "Prices depend on the size of the property, amount of contents, and location. For a small cottage, prices start from €300. We provide a free assessment and a fixed quote.",
  },
  {
    question: "Can you clear a property in a remote location?",
    answer:
      "Yes, we have suitable vehicles for remote and harder-to-reach locations, including mountain and forest roads.",
  },
];

export default function CottageClearancePage() {
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
          title="Cottage & Rural Property Clearance"
          description="Need to clear an old cottage or chalet? We'll handle the removal of old furniture, tools, farm equipment, and accumulated waste. We'll prepare your property for sale, rent, or renovation."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Remote locations", "Garden & property cleaning", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={850}
          desktopMinHeroTextHeightPx={540}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Cottage & Rural Property Clearance"
          description="Need to clear an old cottage or chalet? We'll handle the removal of old furniture, tools, farm equipment, and accumulated waste. We'll prepare your property for sale, rent, or renovation."
          formTitle="Get a free quote"
          formSubtitle="Fill out the form for a no-obligation estimate"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Remote locations", "Garden & property cleaning", "Fixed price upfront"]}
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
        <GoogleReviews title="Client reviews" />
      </div>
      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>
      <div>
        <Features
          title="Complete Rural Property Solutions"
          description="Professional clearing of cottages, chalets, and holiday homes including outdoor areas."
          features={[
            {
              image: "/icons/house_icon.svg",
              title: "Interior Clearance",
              description: "We remove all old furniture, textiles, household items, and junk from the interior. We sort materials for recycling.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/landscape_icon.svg",
              title: "Garden & Land Cleanup",
              description: "We clear the garden and land of old items, tires, scrap metal, and accumulated debris.",
              link: "/en/property-land-junk-removal",
            },
            {
              image: "/icons/hammer_icon.svg",
              title: "Outbuildings & Barns",
              description: "We clear barns, sheds, garages, and other outbuildings of old equipment, tools, and agricultural waste.",
              link: "/en/basement-garage-junk-removal",
            },
            {
              image: "/icons/furniture_icon.svg",
              title: "Old Furniture & Appliances",
              description: "Removal of old furniture, appliances, TVs, and equipment. Functional items can be donated to local charities.",
              link: "/en/furniture-removal",
            },
            {
              image: "/icons/recycle_icon.svg",
              title: "Ecological Waste Disposal",
              description: "Waste is sorted and taken to appropriate facilities. Hazardous waste (paints, chemicals, tires) is handled legally.",
              link: "/en/hazardous-waste-removal",
            },
            {
              image: "/icons/truck_icon.svg",
              title: "Hard-to-Reach Locations",
              description: "Cottages are often in remote areas. We have the right equipment for mountain roads and rural tracks.",
              link: "/en/cottage-clearance",
            },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>
      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>
      <div>
        <FAQ
          title="Frequently Asked Questions About Cottage Clearance"
          items={faqItems}
        />
      </div>
      <div>
        <CTA
          title="Need to clear a cottage or chalet?"
          description="We provide complete clearance — interior, garden, barn. Even in remote locations, even in your absence."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[
          { title: "Home Clearance", description: "Complete house and apartment clearance.", href: "/en/home-junk-removal", icon: "/icons/vypratavanie_icon.svg" },
          { title: "Property Land Clearance", description: "Cleaning of land and gardens.", href: "/en/property-land-junk-removal", icon: "/icons/landscape_icon.svg" },
          { title: "Furniture Removal", description: "Professional furniture pickup and disposal.", href: "/en/furniture-removal", icon: "/icons/recycle_icon.svg" },
          { title: "Estate Clearance", description: "Sensitive bereavement clearance services.", href: "/en/estate-clearance-bereavement", icon: "/icons/house_icon.svg" },
        ]}
      />
      <ServicePricing filter={["clearance"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
      <FAQJsonLd items={faqItems} />
    </main>
  );
}
