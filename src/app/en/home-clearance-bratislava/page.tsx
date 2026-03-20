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
  title: "Home Clearance Bratislava | Sofoservis",
  description:
    "Professional home clearance services in Bratislava ✅ Affordable prices ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "home clearance bratislava, house clearance bratislava, property clearance bratislava, estate clearance bratislava",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/home-junk-removal-bratislava",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-bytov-domov/bratislava",
      en: "https://www.sofoservis.sk/en/home-junk-removal-bratislava",
    },
  },
};

export default function HomeClearanceBratislavaPage() {
  const bratislavaDistricts = [
    "Staré Mesto","Ružinov","Nové Mesto","Petržalka","Karlova Ves","Dúbravka","Rača","Vajnory","Podunajské Biskupice","Vrakuňa","Devínska Nová Ves","Devín","Záhorská Bystrica","Lamač","Rusovce","Jarovce","Čunovo",
  ];

  return (
    <main className="bg-white">
      <Hero
        title="Home Clearance Services in Bratislava"
        description="Professional and fast home clearance services in Bratislava and surrounding areas. Our team handles everything from sorting items, packing and removal, to ecological waste disposal - all at fair prices."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation estimate in Bratislava"
        backgroundImage="/images/stahovanie_gauc.jpg"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="What our customers say" />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <LocationMap
          title="Home Clearance in All Parts of Bratislava"
          description="We provide professional services in all districts of Bratislava"
          locations={bratislavaDistricts}
          additionalText="We also serve surrounding towns like Senec, Pezinok, Malacky, Stupava, Modra, and others in the Bratislava region."
        />
      </div>

      <div>
        <Features
          title="Complete Home Clearance Services"
          description="Professional property clearance with waste removal and disposal. We save your time and energy."
          features={[
            { image: "/icons/house_icon.svg", title: "Complete Home Clearance", description: "We clear entire apartments and houses including all rooms, basements, and attics. We sort items and arrange disposal or donation.", link: "/en/home-junk-removal" },
            { image: "/icons/broom_icon.svg", title: "Basement & Garage Clearance", description: "We specialize in clearing basements, garages, and storage areas. We remove all unwanted items and ensure clean spaces.", link: "/en/basement-garage-junk-removal" },
            { image: "/icons/furniture_icon.svg", title: "Old Furniture Removal", description: "Professional removal of old furniture, appliances, and other equipment with environmentally responsible disposal.", link: "/en/furniture-removal" },
            { image: "/icons/landscape_icon.svg", title: "Land & Property Clearance", description: "We clear your properties of unwanted items, construction waste, and vegetation. We prepare land for further use.", link: "/en/property-land-junk-removal" },
            { image: "/icons/recycle_icon.svg", title: "Hazardous Waste Disposal", description: "We safely dispose of hazardous waste, old appliances, batteries, paints, and chemicals according to regulations.", link: "/en/hazardous-waste-removal" },
            { image: "/icons/truck_icon.svg", title: "Construction Waste Removal", description: "After clearance, we also handle removal of construction waste, rubble, and demolition materials.", link: "/en/construction-waste-removal" },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews showReviewsShowcase={false} title="Customer Reviews" />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About Home Clearance in Bratislava"
          items={[
            { question: "How does the clearance process work in Bratislava?", answer: "The process starts with a free site inspection where we estimate the scope of work and prepare a quote. On the agreed day, our team arrives with all necessary equipment. We sort items per your instructions, pack and remove all unwanted materials, and clean the space." },
            { question: "What is the cost of home clearance in Bratislava?", answer: "The cost depends on space size, amount of items, accessibility, waste type, and additional services. For a standard 2-bedroom apartment, prices range from €350 to €700. For a family house, from €600 to €1,500. We provide a free on-site quote." },
            { question: "How quickly can you arrange clearance in Bratislava?", answer: "Since we are based in Bratislava, we can arrange clearance quickly. In urgent cases, within 24-48 hours. We aim to accommodate your preferred schedule." },
            { question: "Where do you take the waste from clearance?", answer: "We transport waste to official collection yards and landfills in compliance with waste management regulations. Recyclable materials go to recycling facilities, hazardous waste to specialized disposal facilities." },
          ]}
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Need professional home clearance in Bratislava?"
          description="Let our experienced team handle everything - from sorting items to final space cleaning. We operate in all parts of Bratislava."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
