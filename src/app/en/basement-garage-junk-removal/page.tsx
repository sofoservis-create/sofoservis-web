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
  title: "Basement Basement Basement & Garage Junk Removal Garage Junk Removal Services Garage Junk Removal Services | Sofoservis",
  description:
    "Professional basement, garage, and commercial space junk removal ✅ Fast and affordable ✅ Free site inspection ✅ Contact us today!",
  keywords:
    "basement junk removal, garage junk removal, storage junk removal, commercial space junk removal, junk removal, cellar junk removal",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
    languages: {
      sk: "https://www.sofoservis.sk/vypratavanie-pivnic-garazi-nebytovych-priestorov",
      en: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
    },
  },
  openGraph: {
    title: "Basement Basement Basement & Garage Junk Removal Garage Junk Removal Services Garage Junk Removal Services | Sofoservis",
    description:
      "Professional basement and garage junk removal with eco-friendly disposal. Fast, reliable service!",
    url: "https://www.sofoservis.sk/en/basement-garage-junk-removal",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function BasementGarageJunkRemovalPage() {
  const featuresData = {
    title: "Specialized Basement, Garage & Commercial Space Junk Removal",
    description:
      "Professional junk removal of specific spaces with responsible removal and disposal of all types of waste and unwanted items.",
    features: [
      {
        image: "/icons/broom_icon.svg",
        title: "Basement Junk Removal",
        description:
          "Complete basement junk removal including old furniture, appliances, and other items. We handle disinfection and thorough cleaning of the space.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/wrench_icon.svg",
        title: "Garage & Workshop Junk Removal",
        description:
          "We clear garages, workshops, and technical rooms of old tools, spare parts, tires, and oil products with safe disposal.",
        link: "/en/basement-garage-junk-removal",
      },
      {
        image: "/icons/briefcase_icon.svg",
        title: "Storage & Archive Junk Removal",
        description:
          "Professional junk removal of storage spaces, archives, and office areas including document sorting and secure destruction.",
        link: "/en/office-moving",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Hazardous Waste Removal",
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
          "After junk removal, we handle removal of construction waste, concrete rubble, bricks, and other building materials with proper disposal.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title="Basement, Garage & Commercial Space Junk Removal"
        description="Professional and fast junk removal of basements, garages, storage units, attics, and other spaces. We completely clean and clear any space regardless of the level of clutter or amount of accumulated items."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        backgroundImage="/images/stahovanie_gauc.jpg"
        badgeText="Services available 6 days a week"
        ratingText="Over 1000+ satisfied customers"
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

      <div className="pt-10 md:pt-[100px]">
        <FAQ
          title="Frequently Asked Questions About Basement Basement & Garage Junk Removal Garage Junk Removal"
          items={[
            {
              question:
                "How long does it take to clear a basement or garage?",
              answer:
                "The duration depends on the size of the space and the amount of accumulated items. A standard basement or garage (up to 20m²) usually takes 2-4 hours. Larger spaces or those with excessive waste may require a full working day. For complicated cases such as heavily cluttered attics or extremely dirty basements, junk removal may take up to 2 days.",
            },
            {
              question:
                "How much does basement or garage junk removal cost?",
              answer:
                "The price depends on several factors: size of the space, amount of waste, access conditions, and type of waste. For a standard basement (up to 15m²), prices range from €150 to €300, for a garage from €200 to €400. The price includes labor, removal, and disposal of regular waste. Special types of waste (chemicals, construction waste, electronics) may incur additional disposal fees.",
            },
            {
              question:
                "Can you clear hard-to-reach spaces like attics?",
              answer:
                "Yes, we specialize in clearing hard-to-reach spaces such as attics, lofts, and areas with limited access. We have experience working in confined conditions and have special equipment for safe junk removal of such spaces, including mobile hoists, lifting equipment, and scaffolding or ladders when needed.",
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
                "Yes, we offer specialized services for clearing commercial spaces after lease termination. Whether it is storage areas, retail spaces, or offices, we handle complete junk removal, equipment removal, waste disposal, and basic space restoration. This service is ideal for commercial property owners who need to quickly prepare spaces for new tenants.",
            },
          ]}
          callToActionText="Questions about junk removal? Get in touch"
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Reclaim your valuable storage space"
          description="Get rid of years of accumulated clutter in your basement, garage, or attic. Our team will quickly and efficiently clear any space and handle eco-friendly waste disposal. Contact us today!"
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
