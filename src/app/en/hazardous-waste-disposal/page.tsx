import React from "react";
import Hero from "@/components/sections/Hero";
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
  title: "Hazardous Waste & Appliance Disposal | Sofoservis",
  description:
    "Professional hazardous waste disposal and old appliance removal ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "hazardous waste disposal, appliance disposal, electronics recycling, old appliance removal, chemical waste disposal, battery disposal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/hazardous-waste-removal",
    languages: {
      sk: "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      en: "https://www.sofoservis.sk/en/hazardous-waste-removal",
      "x-default": "https://www.sofoservis.sk/likvidacia-nebezpecneho-odpadu-starych-spotrebicov",
      },
  },
  openGraph: {
    title: "Hazardous Waste & Appliance Disposal | Sofoservis",
    description:
      "Professional hazardous waste disposal in compliance with all regulations. Safe and eco-friendly!",
    url: "https://www.sofoservis.sk/en/hazardous-waste-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function HazardousWasteDisposalPage() {
  const faqItems = [
            {
              question:
                "How does old appliance removal and disposal work?",
              answer:
                "The process starts with your order. We agree on a convenient date. On the agreed day, our team arrives, carries appliances from your apartment, house, or office (even from upper floors without elevator), and loads them into our vehicle. Appliances are transported to an authorized collection point for eco-friendly recycling. Upon request, we can issue a certificate of eco-friendly disposal.",
            },
            {
              question:
                "How much does old appliance removal and disposal cost?",
              answer:
                "The price depends on several factors: number and type of appliances, pickup location, accessibility (floor, elevator), and other specific requirements. Approximate prices: small appliances (microwave, vacuum) from €10 to €20, medium appliances (washing machine, dishwasher) from €20 to €35, large appliances (fridge, freezer) from €30 to €50. Volume discounts are available for multiple appliances.",
            },
            {
              question:
                "What types of hazardous waste do you dispose of?",
              answer:
                "We dispose of a wide range of hazardous waste including: chemicals (solvents, acids, bases), petroleum products (oils, lubricants, fuels), paints, varnishes, and coatings, pesticides, old medicines, batteries and accumulators, fluorescent lamps containing mercury, electronic waste with hazardous substances, asbestos materials (under special conditions), and contaminated packaging.",
            },
            {
              question:
                "Do you handle large volumes of waste from businesses?",
              answer:
                "Yes, we specialize in disposing of larger volumes of waste from businesses, manufacturing facilities, warehouses, and administrative spaces. For businesses, we offer comprehensive solutions including removal, sorting, and disposal of various waste types. Our services include necessary documentation - waste evidence sheets and hazardous waste transport documents.",
            },
            {
              question:
                "Is a permit needed for hazardous waste disposal?",
              answer:
                "As a private individual, you do not need a special permit if the service is provided by an authorized company like ours. We hold all necessary permits for handling hazardous waste. For businesses, we provide all necessary documentation - hazardous waste transport documents and disposal certificates that serve as evidence for your records and potential inspections.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Hazardous Waste & Appliance Disposal Services",
    description:
      "Eco-friendly disposal of hazardous waste, old appliances, and electronics according to current regulations with disposal certificates.",
    features: [
      {
        image: "/icons/house_icon.svg",
        title: "Home Clearance with Disposal",
        description:
          "Complete property clearance with simultaneous disposal of old appliances and hazardous waste. Eco-friendly and safe.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/broom_icon.svg",
        title: "Basement & Garage Clearance",
        description:
          "Cleaning of basements and garages where old paints, chemicals, and damaged appliances are often found.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/appliance_icon.svg",
        title: "Old Appliance Disposal",
        description:
          "Professional removal and eco-friendly disposal of fridges, washing machines, TVs, computers, and other electrical appliances according to EU directives.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/hazmat_icon.svg",
        title: "Hazardous Substance Disposal",
        description:
          "Safe disposal of chemicals, paints, solvents, oils, batteries, and other hazardous materials in compliance with environmental regulations.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "Removal of construction waste containing hazardous substances such as asbestos, oils, and other contaminated materials.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Eco-Friendly Recycling",
        description:
          "We maximize recycling of materials - metals, plastics, and other appliance components are processed at authorized facilities.",
        link: "/en/hazardous-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Hazardous Waste & Appliance Disposal"
        description="Reliable and eco-friendly solutions for disposal of hazardous waste and old electrical appliances. We ensure professional removal and certified disposal in compliance with environmental regulations and waste management laws."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Certified disposal",
          "All waste types",
          "Full documentation",
        ]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews
          title="Join our satisfied customers"
        />
      </div>

      <div>
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title={featuresData.title}
          description={featuresData.description}
          features={featuresData.features}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          showReviewsShowcase={false}
          title="What our customers say about us"
        />
      </div>

      <div>
        <FAQ
          title="Frequently Asked Questions About Hazardous Waste Disposal"
          items={[
            {
              question:
                "How does old appliance removal and disposal work?",
              answer:
                "The process starts with your order. We agree on a convenient date. On the agreed day, our team arrives, carries appliances from your apartment, house, or office (even from upper floors without elevator), and loads them into our vehicle. Appliances are transported to an authorized collection point for eco-friendly recycling. Upon request, we can issue a certificate of eco-friendly disposal.",
            },
            {
              question:
                "How much does old appliance removal and disposal cost?",
              answer:
                "The price depends on several factors: number and type of appliances, pickup location, accessibility (floor, elevator), and other specific requirements. Approximate prices: small appliances (microwave, vacuum) from €10 to €20, medium appliances (washing machine, dishwasher) from €20 to €35, large appliances (fridge, freezer) from €30 to €50. Volume discounts are available for multiple appliances.",
            },
            {
              question:
                "What types of hazardous waste do you dispose of?",
              answer:
                "We dispose of a wide range of hazardous waste including: chemicals (solvents, acids, bases), petroleum products (oils, lubricants, fuels), paints, varnishes, and coatings, pesticides, old medicines, batteries and accumulators, fluorescent lamps containing mercury, electronic waste with hazardous substances, asbestos materials (under special conditions), and contaminated packaging.",
            },
            {
              question:
                "Do you handle large volumes of waste from businesses?",
              answer:
                "Yes, we specialize in disposing of larger volumes of waste from businesses, manufacturing facilities, warehouses, and administrative spaces. For businesses, we offer comprehensive solutions including removal, sorting, and disposal of various waste types. Our services include necessary documentation - waste evidence sheets and hazardous waste transport documents.",
            },
            {
              question:
                "Is a permit needed for hazardous waste disposal?",
              answer:
                "As a private individual, you do not need a special permit if the service is provided by an authorized company like ours. We hold all necessary permits for handling hazardous waste. For businesses, we provide all necessary documentation - hazardous waste transport documents and disposal certificates that serve as evidence for your records and potential inspections.",
            },
          ]}
          callToActionText="Questions about waste disposal? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Dispose of old appliances and hazardous waste safely"
          description="Let our team handle professional removal and certified disposal in compliance with all regulations. Protect the environment and your health with proper disposal."
          buttonText="Get a free quote"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-clearance","icon":"/icons/broom_icon.svg"},{"title":"Old Furniture Removal","description":"Fast pickup and eco-friendly disposal of old furniture.","href":"/en/furniture-removal","icon":"/icons/truck_icon.svg"}]}
        />
      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
