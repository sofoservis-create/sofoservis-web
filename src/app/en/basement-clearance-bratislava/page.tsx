import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

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
    },
  },
};

export default function BasementClearanceBratislavaPage() {
  const bratislavaLocations = [
    "Staré Mesto","Ružinov","Nové Mesto","Petržalka","Dúbravka","Karlova Ves","Rača","Vrakuňa","Podunajské Biskupice","Devínska Nová Ves","Lamač","Vajnory","Devín","Záhorská Bystrica","Jarovce","Rusovce","Čunovo",
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Basement & Garage Clearance in Bratislava"
        description="Professional and fast clearance of basements, garages, storage rooms, attics, and other non-residential spaces in Bratislava and surrounding areas. We handle complete clearance regardless of the level of clutter or amount of accumulated material."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate in Bratislava"
        backgroundImage="/images/stahovanie_gauc.jpg"
        lang="en"
      />

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
            { image: "/icons/broom_icon.svg", title: "Basement Clearance", description: "Complete clearance of basements including old furniture, appliances, and other items. We handle disinfection and cleaning.", link: "/en/basement-garage-junk-removal" },
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

      <div className="pt-10 md:pt-[100px]">
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

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Professional clearance in Bratislava without the hassle"
          description="Get rid of years of accumulated clutter in your basement, garage, or attic. Our team will quickly and efficiently clear any space and handle ecological waste disposal."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
