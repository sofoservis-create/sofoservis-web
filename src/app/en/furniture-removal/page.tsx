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
  title: "Furniture Removal & Disposal Services | Sofoservis",
  description:
    "Professional furniture removal, clearance, and eco-friendly disposal ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "furniture removal, old furniture disposal, furniture clearance, sofa removal, furniture recycling, junk furniture removal, bulky waste removal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/furniture-removal",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
      en: "https://www.sofoservis.sk/en/furniture-removal",
      "x-default": "https://www.sofoservis.sk/vypratavanie-odvoz-stareho-nabytku",
      },
  },
  openGraph: {
    title: "Furniture Removal & Disposal Services | Sofoservis",
    description:
      "Professional furniture removal and eco-friendly disposal. Fast, reliable service at fair prices!",
    url: "https://www.sofoservis.sk/en/furniture-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function FurnitureRemovalPage() {
  const faqItems = [
            {
              question:
                "What is the price for removing and disposing of old furniture?",
              answer:
                "The price depends on the amount of furniture, its type, access conditions, and distance. Basic rates start from €50 for smaller amounts of furniture. For an accurate estimate, we will gladly prepare a free quote over the phone or after an in-person inspection.",
            },
            {
              question:
                "Which types of furniture can you remove and dispose of?",
              answer:
                "We remove and dispose of all types of furniture - sofas, wardrobes, tables, chairs, beds, mattresses, carpets, appliances, and other household equipment. We cannot dispose of hazardous waste such as paints, chemicals, or asbestos materials.",
            },
            {
              question:
                "Do I need to prepare the furniture for removal?",
              answer:
                "No, that is not necessary. Our workers will carry all furniture out of the apartment or house themselves. Just show us what needs to be removed. If needed, we will also disassemble furniture for easier transport.",
            },
            {
              question:
                "How does eco-friendly furniture disposal work?",
              answer:
                "We sort furniture by materials - wood, metal, textile, plastics. Recyclable materials are delivered to authorized collection centers, non-recyclable parts are disposed of in compliance with environmental regulations. Upon request, we can provide documentation of the entire process.",
            },
            {
              question:
                "Can you remove furniture from upper floors?",
              answer:
                "Yes, we can carry furniture from any floor without problems. We have experience with narrow staircases, small elevators, and difficult access conditions. In extreme cases, we can also use techniques for lowering items via balcony or window.",
            },
          ];
  const featuresData = {
    title: "Comprehensive Furniture Removal & Disposal Services",
    description:
      "Professional clearance with eco-friendly disposal of old furniture and equipment. We save you time and care for the environment.",
    features: [
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Home & Apartment Clearance",
        description:
          "Complete clearance of apartments, houses, and commercial spaces. Removal of all old furniture, appliances, and unwanted items with follow-up cleaning.",
        link: "/en/home-junk-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Old Furniture Removal",
        description:
          "Professional removal of old furniture directly from your home. We handle safe transport and loading of all items without damaging your property.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Eco-Friendly Disposal",
        description:
          "Environmentally responsible disposal of old furniture in compliance with legislation. We sort materials and deliver them to authorized collection centers.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/sofa_icon.svg",
        title: "Sofa & Large Furniture Removal",
        description:
          "Specialized removal of large furniture items such as sofas, couches, armchairs, and corner suites. We have equipment for safe handling of bulky items.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/appliance_icon.svg",
        title: "Old Appliance Disposal",
        description:
          "Professional disposal of old appliances including fridges, washing machines, TVs, and other electronics according to environmental regulations.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Container Provision",
        description:
          "We provide containers of various sizes for larger amounts of waste. An ideal solution for comprehensive clearance or renovation projects.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Furniture Removal & Disposal Services"
        description="Comprehensive services for removal and eco-friendly disposal of old furniture. Our professional team ensures complete clearance of your spaces and environmentally responsible disposal of all unwanted furniture and equipment."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Free site inspection",
          "Eco-friendly disposal",
          "Any floor level",
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
          title="Frequently Asked Questions About Furniture Removal"
          subtitle="Answers to the most common questions about our removal and disposal services"
          items={[
            {
              question:
                "What is the price for removing and disposing of old furniture?",
              answer:
                "The price depends on the amount of furniture, its type, access conditions, and distance. Basic rates start from €50 for smaller amounts of furniture. For an accurate estimate, we will gladly prepare a free quote over the phone or after an in-person inspection.",
            },
            {
              question:
                "Which types of furniture can you remove and dispose of?",
              answer:
                "We remove and dispose of all types of furniture - sofas, wardrobes, tables, chairs, beds, mattresses, carpets, appliances, and other household equipment. We cannot dispose of hazardous waste such as paints, chemicals, or asbestos materials.",
            },
            {
              question:
                "Do I need to prepare the furniture for removal?",
              answer:
                "No, that is not necessary. Our workers will carry all furniture out of the apartment or house themselves. Just show us what needs to be removed. If needed, we will also disassemble furniture for easier transport.",
            },
            {
              question:
                "How does eco-friendly furniture disposal work?",
              answer:
                "We sort furniture by materials - wood, metal, textile, plastics. Recyclable materials are delivered to authorized collection centers, non-recyclable parts are disposed of in compliance with environmental regulations. Upon request, we can provide documentation of the entire process.",
            },
            {
              question:
                "Can you remove furniture from upper floors?",
              answer:
                "Yes, we can carry furniture from any floor without problems. We have experience with narrow staircases, small elevators, and difficult access conditions. In extreme cases, we can also use techniques for lowering items via balcony or window.",
            },
          ]}
          callToActionText="Questions about furniture removal? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Need to get rid of old furniture?"
          description="Contact us and we will handle complete removal and eco-friendly disposal. Fast, reliable, and at fair prices."
          buttonText="Get a free quote"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-junk-removal","icon":"/icons/vypratavanie_icon.svg"},{"title":"Apartment Moving","description":"Professional home and apartment relocation services.","href":"/en/apartment-moving","icon":"/icons/house_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"}]}
        />
      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
