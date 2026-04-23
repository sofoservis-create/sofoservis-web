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
import LocationMap from "@/components/sections/LocationMap";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "Basement & Garage Clearance Bratislava | Sofoservis",
  description:
    "Fast and affordable basement, garage, and non-residential space clearance in Bratislava ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "basement clearance bratislava, garage clearance bratislava, storage clearance bratislava, cellar clearance bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/basement-clearance-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
      en: "https://www.sofoservis.sk/en/basement-clearance-bratislava",
      "x-default": "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov/bratislava",
      },
  },
};

export default function BasementClearanceBratislavaPage() {
  const faqItems = [
            { question: "How much does basement or garage clearance cost in Bratislava?", answer: "The cost depends on space size, amount of waste, access conditions, and waste type. For a standard basement (up to 15m²), prices range from €150 to €300. For a garage, from €200 to €400. We offer free on-site inspections for accurate quotes." },
            { question: "How quickly can you arrange clearance in Bratislava?", answer: "In urgent cases, we can start within 24-48 hours. Standard timeline is 3-5 business days. We operate Monday to Saturday, 8:00-17:00." },
            { question: "Is a site inspection required before clearance?", answer: "An inspection is not mandatory but recommended for accurate pricing. It is free and non-binding. If inspection is not possible, you can send photos with a description for a preliminary quote." },
            { question: "Can you clear commercial spaces after tenants in Bratislava?", answer: "Yes, we offer specialized clearance services for commercial spaces after lease termination. We handle complete clearance, equipment removal, waste disposal, and basic sanitation to prepare the space for new tenants." },
          ];
  const bratislavaLocations = [
    "Staré Mesto","Ružinov","Nové Mesto","Petržalka","Dúbravka","Karlova Ves","Rača","Vrakuňa","Podunajské Biskupice","Devínska Nová Ves","Lamač","Vajnory","Devín","Záhorská Bystrica","Jarovce","Rusovce","Čunovo",
  ];

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
          title="Basement & Garage Clearance in Bratislava"
          description="Professional and fast clearance of basements, garages, storage rooms, attics, and other non-residential spaces in Bratislava and surrounding areas. We handle complete clearance regardless of the level of clutter or amount of accumulated material."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Bratislava"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
          mascotSrc="/images/mascot/stary-gauc-nosi-mascot.svg"
          desktopMascotScaleMultiplier={1.08}
          desktopMascotRightShiftPct={0.235}
          desktopMascotBehindForm
          desktopMascotFixedHeightPx={900}
          desktopMinHeroTextHeightPx={580}
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Basement & Garage Clearance in Bratislava"
          description="Professional and fast clearance of basements, garages, storage rooms, attics, and other non-residential spaces in Bratislava and surrounding areas. We handle complete clearance regardless of the level of clutter or amount of accumulated material."
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation estimate in Bratislava"
          backgroundImage="/images/stahovanie-gauc.avif"
          lang="en"
          benefits={["Insurance included", "No hidden fees", "Fixed price upfront"]}
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
        <LocationMap
          title="We Serve All Parts of Bratislava"
          description="Our clearance services are available in the following areas"
          locations={bratislavaLocations}
          additionalText="We provide our services throughout the EU."
        />
      </div>

      <div>
        <GoogleReviews title="Why customers in Bratislava choose us" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title="Specialized Basement, Garage & Non-Residential Space Clearance"
          description="Professional clearance of specific spaces with waste removal and disposal of all types of items."
          features={[
            { image: "/icons/vypratavanie_icon.svg", title: "Basement Clearance", description: "Complete clearance of basements including old furniture, appliances, and other items. We handle disinfection and cleaning.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/wrench_icon.svg", title: "Garage & Workshop Clearance", description: "We clear garages, workshops, and technical rooms of old tools, spare parts, tires, and oil products with safe disposal.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/briefcase_icon.svg", title: "Storage & Archive Clearance", description: "Professional clearance of storage spaces, archives, and office areas including document sorting and secure destruction.", link: "/en/office-moving" },
            { image: "/icons/recycle_icon.svg", title: "Hazardous Waste Disposal", description: "Safe disposal of hazardous materials, old paints, solvents, batteries, and chemicals according to environmental regulations.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture & Appliance Removal", description: "Complete removal and disposal of old furniture, appliances, electronics, and other equipment with ecological processing.", link: "/en/furniture-removal" },
            { image: "/icons/truck_icon.svg", title: "Construction Waste Removal", description: "After clearance, we handle removal of construction waste, concrete rubble, bricks, and other building materials.", link: "/en/construction-waste-removal" },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews title="Customer Feedback" showReviewsShowcase={false} />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Basement Clearance in Bratislava"
          items={[
            { question: "How much does basement or garage clearance cost in Bratislava?", answer: "The cost depends on space size, amount of waste, access conditions, and waste type. For a standard basement (up to 15m²), prices range from €150 to €300. For a garage, from €200 to €400. We offer free on-site inspections for accurate quotes." },
            { question: "How quickly can you arrange clearance in Bratislava?", answer: "In urgent cases, we can start within 24-48 hours. Standard timeline is 3-5 business days. We operate Monday to Saturday, 8:00-17:00." },
            { question: "Is a site inspection required before clearance?", answer: "An inspection is not mandatory but recommended for accurate pricing. It is free and non-binding. If inspection is not possible, you can send photos with a description for a preliminary quote." },
            { question: "Can you clear commercial spaces after tenants in Bratislava?", answer: "Yes, we offer specialized clearance services for commercial spaces after lease termination. We handle complete clearance, equipment removal, waste disposal, and basic sanitation to prepare the space for new tenants." },
          ]}
        />
      </div>

      <div>
        <CTA
          title="Professional clearance in Bratislava without the hassle"
          description="Get rid of years of accumulated clutter in your basement, garage, or attic. Our team will quickly and efficiently clear any space and handle ecological waste disposal."
          buttonText="Get a free quote"
        />
      </div>
      <RelatedServices
        title="Related Services"
        services={[{"title":"Basement & Garage Clearance","description":"Fast clearance of basements, garages and storage.","href":"/en/basement-garage-junk-removal","icon":"/icons/house_icon.svg"},{"title":"Home Clearance","description":"Complete home and property clearance.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Furniture Removal","description":"Old furniture pickup and ecological disposal.","href":"/en/furniture-removal","icon":"/icons/recycle_icon.svg"},{"title":"Construction Waste Removal","description":"Fast removal and disposal of construction waste.","href":"/en/construction-waste-removal","icon":"/icons/container_icon.svg"}]}
      />

      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
