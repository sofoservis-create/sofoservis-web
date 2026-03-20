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
  title: "Wall & Partition Demolition in Homes and Apartments | Sofoservis",
  description:
    "We offer comprehensive wall and partition demolition services in homes and apartments ✅ Fair prices ✅ Contact us today!",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/wall-demolition",
    languages: {
      sk: "https://www.sofoservis.sk/buranie-stien-priecok",
      en: "https://www.sofoservis.sk/en/wall-demolition",
    },
  },
  openGraph: {
    title: "Wall & Partition Demolition in Homes and Apartments | Sofoservis",
    description:
      "Professional wall and partition demolition services with structural assessment and waste removal.",
    url: "https://www.sofoservis.sk/en/wall-demolition",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
  keywords:
    "wall demolition, partition removal, load-bearing wall demolition, wall removal apartment, wall demolition house, opening in wall, non-load-bearing partition removal, drywall partition removal",
};

export default function WallDemolitionPageEN() {
  const heroData = {
    title: "Wall & Partition Demolition in Homes and Apartments",
    description:
      "Professional services for demolishing and removing load-bearing walls, non-load-bearing partitions, and creating openings in walls. We handle structural assessments, building permits, safe demolition, and construction waste removal.",
    formTitle: "Get a free price quote",
    formSubtitle: "Fill out the form for a no-obligation calculation",
    backgroundImage: "/images/stahovanie_gauc.jpg",
  };

  const featuresData = {
    title: "Comprehensive Wall & Partition Demolition Services",
    description:
      "We offer professional solutions for all types of demolition work in apartments and houses with a focus on safety and quality.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Load-Bearing Wall Demolition",
        description:
          "Professional demolition of load-bearing walls with structural engineering projects and all necessary permits. We ensure replacement structures to maintain building stability.",
        link: "/en/wall-demolition",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Partition & Dividing Wall Removal",
        description:
          "Fast and clean partition removal in apartments and houses. We use precise techniques to minimize damage to surrounding surfaces and ensure quick completion.",
        link: "/en/wall-demolition",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Safety Measures",
        description:
          "Strict compliance with safety regulations and protection of surrounding spaces. All our workers are certified for demolition work.",
        link: "/en/wall-demolition",
      },
      {
        image: "/icons/document_icon.svg",
        title: "Permits & Project Documentation",
        description:
          "We handle all necessary permits, project documentation, and structural assessments. We ensure compliance with all applicable regulations and standards.",
        link: "/en/wall-demolition",
      },
      {
        image: "/icons/container_icon.svg",
        title: "Debris Removal & Disposal",
        description:
          "Complete removal of demolition waste and debris to official landfills. Environmentally responsible disposal of construction waste according to regulations.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/heavy_machinery_icon.svg",
        title: "Specialized Equipment",
        description:
          "Modern demolition tools and protective equipment for efficient and safe work. We have equipment for all types of building materials.",
        link: "/en/wall-demolition",
      },
    ],
  };

  return (
    <main className="bg-white">
      <Hero
        title={heroData.title}
        description={heroData.description}
        formTitle={heroData.formTitle}
        formSubtitle={heroData.formSubtitle}
        backgroundImage={heroData.backgroundImage}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00-17:00"
        lang="en"
      />

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Join our satisfied customers" />
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
          title="Frequently Asked Questions About Wall & Partition Demolition"
          items={[
            {
              question:
                "How do I know if a wall in my apartment is load-bearing or non-load-bearing?",
              answer:
                "Determining whether a wall is load-bearing is not always straightforward and requires professional assessment. However, there are some basic indicators: Load-bearing walls are usually thicker (15cm and more), while non-load-bearing walls are often 10cm or less. In panel buildings, all original concrete walls are typically load-bearing. Load-bearing walls usually run parallel to the shorter side of the building and are positioned above each other on individual floors. Precise determination requires reviewing the building plans or consulting a structural engineer. We offer a free inspection where we can help determine the wall type and recommend the best approach for your situation.",
            },
            {
              question:
                "What permits do I need for wall demolition in an apartment or house?",
              answer:
                "Permits depend on the wall type and scope of modifications. For non-load-bearing partitions, you usually only need to notify the relevant building authority. For load-bearing walls, a building permit is always required. The application must include project documentation prepared by an authorized structural engineer and a structural assessment confirming the modification won't compromise the building's stability. In apartment buildings, consent from the owners' association is also needed. If you're renting, the property owner's consent is required. Our company can assist with preparing the necessary documentation and obtaining all permits.",
            },
            {
              question: "How long does it take to demolish a partition in an apartment?",
              answer:
                "The demolition time depends on several factors - the size and type of partition, the material it's made from, and space accessibility. Standard demolition of a non-load-bearing partition of 5-10m² usually takes 1 working day. This includes the demolition itself, packaging, and preparing waste for removal. If the wall contains electrical wiring or water pipes, the process may take an additional day for rerouting these utilities. For larger areas or load-bearing walls, the process may take 2-4 days. After demolition, you should allow additional time for surface finishing, plastering, and completion work, which may take another 2-3 days depending on scope.",
            },
            {
              question: "How much does wall and partition demolition cost?",
              answer:
                "The price for wall and partition demolition depends on several factors: wall type (load-bearing/non-load-bearing), material (brick, concrete, drywall, panel), thickness and area, location and accessibility, and need for special procedures. Approximate prices: non-load-bearing partition demolition ranges from €20 to €40 per m², load-bearing wall demolition from €50 to €120 per m². Creating a door opening in a non-load-bearing wall costs approximately €150-300, in a load-bearing wall €400-800. These prices typically don't include the structural assessment (€200-500), project documentation (€300-700), and debris removal (€30-50/m³). For comprehensive demolition work with necessary permits and documentation, we recommend budgeting from €800 (small non-load-bearing partitions) to €3,000 and more (load-bearing walls). The exact price will be determined after a free inspection.",
            },
            {
              question:
                "Is it possible to create an opening in a load-bearing wall without compromising building stability?",
              answer:
                "Yes, it is possible to create an opening in a load-bearing wall without compromising building stability, but it requires a professional approach and precise adherence to technological procedures. The process begins with a structural assessment to determine if and how the opening can be created. Project documentation with a precise work procedure is then prepared. During implementation, temporary support for the ceiling structure is first installed at the location of the future opening. Then a new lintel is created above the planned opening to take over the load from the upper part of the wall. Only then is the opening itself demolished. After demolition, finishing and any additional reinforcement is carried out. The entire process must be performed by an experienced company with the necessary qualifications, as errors can lead to serious structural damage to the building.",
            },
          ]}
          callToActionText="Questions about wall demolition? Get in touch"
        />
      </div>

      <div className="pt-10 md:pt-[100px]">
        <CTA
          title="Need professional wall or partition demolition?"
          description="Trust wall demolition to professionals with years of experience. We handle structural assessments, necessary permits, safe demolition, and waste removal. Get a free quote for demolition work in your apartment or house."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
    </main>
  );
}
