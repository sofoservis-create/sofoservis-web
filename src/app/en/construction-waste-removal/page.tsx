import React from "react";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Construction Waste Removal & Disposal | Sofoservis",
  description:
    "Professional construction waste removal and disposal services ✅ Cheap and fair prices ✅ Contact us today!",
  keywords:
    "construction waste removal, rubble removal, building waste disposal, demolition waste, construction debris removal, skip hire",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/construction-waste-removal",
    languages: {
      sk: "https://www.sofoservis.sk/odvoz-likvidacia-stavebneho-odpadu",
      en: "https://www.sofoservis.sk/en/construction-waste-removal",
    },
  },
  openGraph: {
    title: "Construction Waste Removal & Disposal | Sofoservis",
    description:
      "Professional construction waste removal with eco-friendly disposal and full documentation!",
    url: "https://www.sofoservis.sk/en/construction-waste-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function ConstructionWasteRemovalPage() {
  const featuresData = {
    title: "Comprehensive Construction Waste Removal & Disposal",
    description:
      "Professional removal and eco-friendly disposal of all types of construction waste and rubble with complete documentation.",
    features: [
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Rubble Removal",
        description:
          "Fast and efficient removal of construction rubble after apartment, house renovation, or demolition. Our vehicles are equipped for transporting heavy materials.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Eco-Friendly Waste Disposal",
        description:
          "We ensure eco-friendly disposal of construction waste including rubble, bricks, concrete, plaster, and other building materials in compliance with environmental regulations.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/crane_icon.svg",
        title: "Waste Loading & Carrying",
        description:
          "Our workers handle complete loading and carrying of construction waste, including removal from upper floors, basements, or hard-to-reach locations.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Container Delivery",
        description:
          "We offer container delivery in various sizes for construction waste directly to your address. Containers are available for short-term and long-term rental.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Post-Demolition Waste Removal",
        description:
          "Specialized waste removal services after demolition work. We handle rubble removal from complete building demolitions.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Disposal Documentation",
        description:
          "We provide complete disposal documentation for every construction waste removal, which you may need for building authority or environmental inspections.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Construction Waste Removal & Disposal"
        description="Professional and fast construction waste removal and eco-friendly disposal services. We handle waste removal after renovation, demolition, or construction at competitive prices with complete disposal documentation."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 1000+ satisfied customers"
        benefits={[
          "Full documentation",
          "Container delivery",
          "Eco-friendly disposal",
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

      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About Construction Waste Removal"
          items={[
            {
              question:
                "What is the price for construction waste removal?",
              answer:
                "The price depends on several factors: amount of waste (volume or weight), type of waste, location, accessibility of the loading site, and distance to the nearest collection center. Approximately, prices range from €70 to €150 per container with a volume of 5-7m³, which includes container delivery, removal, and disposal of standard construction waste. For larger amounts, we offer volume discounts.",
            },
            {
              question:
                "What types of construction waste do you remove?",
              answer:
                "We handle removal of virtually all types of construction waste including: construction rubble (bricks, concrete, plaster, tiles), plasterboard, mineral wool, polystyrene, building insulation, roofing materials, windows and doors, sanitary ceramics, construction plastics, structural timber, and metal building elements. We can also arrange removal of hazardous construction waste such as asbestos.",
            },
            {
              question:
                "How quickly can you arrange construction waste removal?",
              answer:
                "For standard requests, we can arrange removal within 24-48 hours of ordering. For larger volumes or special types of waste, the lead time may be 2-3 days. In urgent cases, we always try to accommodate and arrange express removal on the same day, depending on our availability.",
            },
            {
              question:
                "Do I need a permit for construction waste disposal?",
              answer:
                "For regular disposal of construction waste from apartment or house renovation, you usually do not need special permits if you use an authorized company like ours. We hold all necessary permits for collection, transport, and disposal of construction waste. We provide all necessary disposal documentation that you can present to authorities.",
            },
            {
              question:
                "Do you clean the area after removing construction waste?",
              answer:
                "Yes, basic cleaning of the area after loading and removing construction waste is included in our services. After removing the bulk waste, we clean the space of remaining rubble, dust, and small debris. For an additional fee, we also offer more comprehensive post-construction cleaning.",
            },
          ]}
          callToActionText="Questions about waste removal? Get in touch"
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Need construction waste removed?"
          description="Get rid of construction waste quickly, legally, and effortlessly. Our team handles complete removal and eco-friendly disposal of all construction waste at competitive prices. Contact us today!"
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
