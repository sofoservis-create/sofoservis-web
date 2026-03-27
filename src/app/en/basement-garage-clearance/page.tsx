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
  title: "Basement & Garage Clearance Services | Sofoservis",
  description:
    "Professional basement, garage, and commercial space clearance ✅ Fast and affordable ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "basement clearance, garage clearance, storage clearance, commercial space clearance, junk removal, cellar clearance",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      en: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
      "x-default": "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      },
  },
  openGraph: {
    title: "Basement & Garage Clearance Services | Sofoservis",
    description:
      "Professional basement and garage clearance with eco-friendly disposal. Fast, reliable service!",
    url: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function BasementGarageClearancePage() {
  const faqItems = [
            {
              question:
                "How long does it take to clear a basement or garage?",
              answer:
                "The duration depends on the size of the space and the amount of accumulated items. A standard basement or garage (up to 20m²) usually takes 2-4 hours. Larger spaces or those with excessive waste may require a full working day. For complicated cases such as heavily cluttered attics or extremely dirty basements, clearance may take up to 2 days.",
            },
            {
              question:
                "How much does basement or garage clearance cost?",
              answer:
                "The price depends on several factors: size of the space, amount of waste, access conditions, and type of waste. For a standard basement (up to 15m²), prices range from €150 to €300, for a garage from €200 to €400. The price includes labor, removal, and disposal of regular waste. Special types of waste (chemicals, construction waste, electronics) may incur additional disposal fees.",
            },
            {
              question:
                "Can you clear hard-to-reach spaces like attics?",
              answer:
                "Yes, we specialize in clearing hard-to-reach spaces such as attics, lofts, and areas with limited access. We have experience working in confined conditions and have special equipment for safe clearance of such spaces, including mobile hoists, lifting equipment, and scaffolding or ladders when needed.",
            },
            {
              question: "What about items that are still usable?",
              answer:
                "We handle usable items according to your instructions. We offer several options: 1) We remove only waste and unwanted items, leaving usable items in place or moving them as instructed, 2) We can donate usable items to charities or families in need if you wish. We always consult with you first about what to keep and what to remove.",
            },
            {
              question:
                "Can you clear commercial spaces after tenants move out?",
              answer:
                "Yes, we offer specialized services for clearing commercial spaces after lease termination. Whether it is storage areas, retail spaces, or offices, we handle complete clearance, equipment removal, waste disposal, and basic space restoration. This service is ideal for commercial property owners who need to quickly prepare spaces for new tenants.",
            },
          ];
  const featuresData = {
    title: "Specialized Basement, Garage & Commercial Space Clearance",
    description:
      "Professional clearance of specific spaces with responsible removal and disposal of all types of waste and unwanted items.",
    features: [
      {
        image: "/icons/broom_icon.svg",
        title: "Basement Clearance",
        description:
          "Complete basement clearance including old furniture, appliances, and other items. We handle disinfection and thorough cleaning of the space.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Garage & Workshop Clearance",
        description:
          "We clear garages, workshops, and technical rooms of old tools, spare parts, tires, and oil products with safe disposal.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Storage & Archive Clearance",
        description:
          "Professional clearance of storage spaces, archives, and office areas including document sorting and secure destruction.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Hazardous Waste Disposal",
        description:
          "Safe disposal of hazardous substances, old paints, solvents, batteries, and chemicals according to environmental regulations.",
        link: "/en/hazardous-waste-removal",
      },
      {
        image: "/icons/furniture_icon.svg",
        title: "Old Furniture & Appliance Removal",
        description:
          "Complete removal and disposal of old furniture, appliances, electronics, and other equipment with environmentally responsible processing.",
        link: "/en/furniture-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste & Rubble Removal",
        description:
          "After clearance, we handle removal of construction waste, concrete rubble, bricks, and other building materials with proper disposal.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Basement, Garage & Commercial Space Clearance"
        description="Professional and fast clearance of basements, garages, storage units, attics, and other spaces. We completely clean and clear any space regardless of the level of clutter or amount of accumulated items."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Free site inspection",
          "All waste types handled",
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

      <div>
        <FAQ
          title="Frequently Asked Questions About Basement & Garage Clearance"
          items={[
            {
              question:
                "How long does it take to clear a basement or garage?",
              answer:
                "The duration depends on the size of the space and the amount of accumulated items. A standard basement or garage (up to 20m²) usually takes 2-4 hours. Larger spaces or those with excessive waste may require a full working day. For complicated cases such as heavily cluttered attics or extremely dirty basements, clearance may take up to 2 days.",
            },
            {
              question:
                "How much does basement or garage clearance cost?",
              answer:
                "The price depends on several factors: size of the space, amount of waste, access conditions, and type of waste. For a standard basement (up to 15m²), prices range from €150 to €300, for a garage from €200 to €400. The price includes labor, removal, and disposal of regular waste. Special types of waste (chemicals, construction waste, electronics) may incur additional disposal fees.",
            },
            {
              question:
                "Can you clear hard-to-reach spaces like attics?",
              answer:
                "Yes, we specialize in clearing hard-to-reach spaces such as attics, lofts, and areas with limited access. We have experience working in confined conditions and have special equipment for safe clearance of such spaces, including mobile hoists, lifting equipment, and scaffolding or ladders when needed.",
            },
            {
              question: "What about items that are still usable?",
              answer:
                "We handle usable items according to your instructions. We offer several options: 1) We remove only waste and unwanted items, leaving usable items in place or moving them as instructed, 2) We can donate usable items to charities or families in need if you wish. We always consult with you first about what to keep and what to remove.",
            },
            {
              question:
                "Can you clear commercial spaces after tenants move out?",
              answer:
                "Yes, we offer specialized services for clearing commercial spaces after lease termination. Whether it is storage areas, retail spaces, or offices, we handle complete clearance, equipment removal, waste disposal, and basic space restoration. This service is ideal for commercial property owners who need to quickly prepare spaces for new tenants.",
            },
          ]}
          callToActionText="Questions about clearance? Get in touch"
        />
      </div>

      <div>
        <CTA
          title="Reclaim your valuable storage space"
          description="Get rid of years of accumulated clutter in your basement, garage, or attic. Our team will quickly and efficiently clear any space and handle eco-friendly waste disposal. Contact us today!"
          buttonText="Get a free quote"
        />
      </div>


      <RelatedServices
          title="Related Services"
          services={[{"title":"Home Clearance","description":"Complete home clearance — we remove everything you no longer need.","href":"/en/home-clearance","icon":"/icons/broom_icon.svg"},{"title":"Old Furniture Removal","description":"Fast pickup and eco-friendly disposal of old furniture.","href":"/en/furniture-removal","icon":"/icons/truck_icon.svg"},{"title":"Construction Waste Removal","description":"Quick removal of construction debris, rubble and building waste.","href":"/en/construction-waste-removal","icon":"/icons/recycle_icon.svg"},{"title":"Hazardous Waste Removal","description":"Safe and legal disposal of hazardous materials and old appliances.","href":"/en/hazardous-waste-removal","icon":"/icons/hazmat_icon.svg"}]}
        />
      <ServicePricing filter={["clearance", "moving", "demolition"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
