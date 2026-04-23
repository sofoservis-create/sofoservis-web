import React from "react";
import Hero from "@/components/sections/Hero";
import LabHero from "@/components/sections/LabHero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ServicePricing from "@/components/sections/ServicePricing";
import TrustBadges from "@/components/sections/TrustBadges";
import ContactFormSection from "@/components/sections/ContactFormSection";
import RelatedServices from "@/components/sections/RelatedServices";

export const metadata = {
  title: "House & Building Demolition Services | Sofoservis",
  description:
    "We offer comprehensive house and building demolition services ✅ Affordable and fair prices ✅ Contact us today!",
  keywords:
    "house demolition, building demolition, demolition services, structure removal, demolition contractor, wall demolition, selective demolition, eco demolition",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/house-demolition",
    languages: {
      sk: "https://www.sofoservis.sk/buranie-demolacia-domov-bytov",
      en: "https://www.sofoservis.sk/en/house-demolition",
      "x-default": "https://www.sofoservis.sk/buranie-demolacia-domov-bytov",
    },
  },
  openGraph: {
    title: "House & Building Demolition Services | Sofoservis",
    description:
      "Professional house and building demolition with full permits and eco-friendly waste disposal!",
    url: "https://www.sofoservis.sk/en/house-demolition",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
};

export default function HouseDemolitionPage() {
  const heroData = {
    title: "House & Building Demolition Services",
    description:
      "Professional demolition services for old houses, buildings, barns, and other structures. We manage the complete process from preparation through safe demolition to removal and eco-friendly disposal of construction waste.",
    formTitle: "Get a free price quote",
    formSubtitle: "Fill out the form for a no-obligation calculation",
    backgroundImage: "/images/stahovanie-gauc.avif",
  };

  const featuresData = {
    title: "Comprehensive House & Building Demolition",
    description:
      "We offer solutions for all types of demolition work with emphasis on safety and professionalism.",
    features: [
      {
        image: "/icons/wrecking_ball_icon.svg",
        title: "Complete Building Demolition",
        description:
          "Complete demolition of family houses, apartment buildings, and industrial structures. We use modern technologies and procedures for controlled demolition.",
        link: "/en/house-demolition",
      },
      {
        image: "/icons/hammer_icon.svg",
        title: "Wall & Partition Removal",
        description:
          "Professional removal of load-bearing and non-load-bearing walls in apartments and houses. We arrange all necessary permits and structural assessments for safe execution.",
        link: "/en/demolition-services",
      },
      {
        image: "/icons/vypratavanie_icon.svg",
        title: "Pre-Demolition Clearance",
        description:
          "Complete clearance of the property before demolition. We eco-friendly dispose of all movable items and waste in accordance with applicable regulations.",
        link: "/en/junk-removal",
      },
      {
        image: "/icons/truck_icon.svg",
        title: "Construction Waste Removal",
        description:
          "We handle removal and disposal of all construction waste generated during demolition work. We have containers of various sizes available.",
        link: "/en/construction-waste-removal",
      },
      {
        image: "/icons/safety_icon.svg",
        title: "Permits & Safety",
        description:
          "We arrange all necessary building permits, structural assessments, and strictly follow safety protocols during all demolition work.",
        link: "/en/house-demolition",
      },
      {
        image: "/icons/recycle_icon.svg",
        title: "Eco-Friendly Material Disposal",
        description:
          "We care for the environment — construction waste is thoroughly sorted, recycled, and disposed of eco-friendly in compliance with environmental regulations.",
        link: "/en/construction-waste-removal",
      },
    ],
  };

  const faqItems = [
    {
      question: "What permits are needed for building demolition?",
      answer:
        "Building demolition typically requires a demolition permit issued by the local building authority. The application must include: property ownership documents, cadastral map, demolition project prepared by an authorized person, statements from relevant bodies (gas, water, electricity companies), and in some cases a structural assessment. The permit process usually takes 30–60 days. Our company can help with preparing the necessary documentation and communication with authorities.",
    },
    {
      question: "How much does demolishing a house or building cost?",
      answer:
        "The demolition cost depends on several factors: size and type of building, construction materials used, accessibility and location, need for special procedures (e.g. for historic buildings), amount and type of waste, and other specific requirements. For smaller structures like garages, prices range from €2,000 to €5,000. Family houses typically cost €5,000 to €15,000, while larger commercial buildings may exceed €20,000. The price includes waste removal and disposal. For an accurate estimate, we recommend using our free site inspection and consultation.",
    },
    {
      question: "How long does it take to demolish a typical family house?",
      answer:
        "The time needed to demolish a typical family house (approximately 100–150 m²) is 2 to 5 days, depending on the construction materials, access conditions, and need for special procedures. The process includes several phases: preparation (disconnecting utilities, securing the site, removing hazardous materials), main demolition, material sorting, and subsequent waste removal and disposal. For more complex projects or larger buildings, the whole process may take 1–2 weeks. Planning must also account for the time to obtain permits (30–60 days) and disconnection from utilities.",
    },
    {
      question: "Do you also demolish parts of buildings, not just complete structures?",
      answer:
        "Yes, we also perform selective demolition of building sections, not just complete demolition. We can professionally remove extensions, terraces, garages, outbuildings, or just internal non-load-bearing partitions while preserving the main structure. This type of selective demolition is ideal for renovations where you need to change the layout, remove problematic parts, or prepare the building for an extension. We always work according to a detailed plan and, where necessary, collaborate with a structural engineer to ensure the safety and stability of the retained parts.",
    },
    {
      question: "How do you handle demolition in densely populated areas?",
      answer:
        "For demolitions in densely populated areas, we follow strict safety and environmental procedures. We first prepare a detailed demolition plan accounting for the proximity of other buildings and public spaces. Before work begins, we inform neighbors and local authorities of the schedule and scope. We thoroughly secure the site with protective barriers and signage. We use dust-reduction techniques (water spraying) and noise barriers, and limit noisy work to permitted hours. We use appropriate machinery that minimizes vibrations that could damage surrounding structures, and remove debris continuously to avoid accumulation on site.",
    },
  ];

  return (
    <main className="bg-white">
      <link rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(max-width: 1023px)" fetchPriority="high" />
      <link rel="preload"
        href="/images/mascot/buranie-mascot.svg"
        as="image"
        type="image/svg+xml"
        media="(min-width: 1024px)" fetchPriority="high" />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={["Full permits handled", "Safe demolition", "Complete waste removal"]}
          lang="en"
          mascotSrc="/images/mascot/buranie-mascot.svg"
          desktopMascotDynamicHeight
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title={heroData.title}
          description={heroData.description}
          formTitle={heroData.formTitle}
          formSubtitle={heroData.formSubtitle}
          backgroundImage={heroData.backgroundImage}
          badgeText="Services available 6 days a week"
          ratingText="Over 3500+ satisfied customers"
          benefits={["Full permits handled", "Safe demolition", "Complete waste removal"]}
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          lang="en"
          showMascot
          mascotSrc="/images/mascot/buranie-mascot.svg"
          pillsVariant="stahovanie"
        />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <GoogleReviews title="Join our satisfied customers" />
      </div>

      <HowItWorks lang="en" />

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
          title="Frequently Asked Questions About House & Building Demolition"
          items={faqItems}
          expandableGroup={{
            label: "Everything about house and building demolition",
            panels: [
              {
                title: "Eco-friendly demolition — what happens to the materials?",
                content:
                  "Modern demolition isn't just breaking things down — it's also recycling. Concrete, bricks, and aggregate are crushed into recycled gravel used in road construction and landscaping. Metal structures, steel, and non-ferrous metals are valuable raw materials and are sent to scrap yards and smelters.\n\nWood, windows, doors, and roofing may be reusable if in good condition. Our team sorts materials during demolition itself, reducing the volume of waste and lowering the overall cost of the project.",
              },
              {
                title: "Demolition vs. renovation — when does it make sense to demolish?",
                content:
                  "Demolition and new construction makes sense when: the building is in such poor condition that renovation would cost more than 60–70% of a new build; the building cannot meet energy efficiency requirements even after renovation; or the layout is unsuitable and changing it would require extensive demolition work.\n\nRenovation is more advantageous when the load-bearing structure is intact, there are valuable architectural elements, or the building is in a protected heritage zone where demolition requires special permits.",
              },
              {
                title: "Demolition of garden structures, garages, and outbuildings",
                content:
                  "Smaller structures such as garages, garden sheds, saunas, or farm buildings are less regulated than family homes, but still require notification of the demolition to the local building authority. The authority typically has 30 days to respond.\n\nFor small structures (under 25 m²) a simplified procedure applies. Garage demolition costs range from €800 to €2,500 depending on material (brick vs. metal) and access difficulty. Debris removal is included in the price.",
              },
              {
                title: "Insurance and liability during demolition",
                content:
                  "All our demolition work is covered by liability insurance. This means that any damage to neighbouring properties, utilities, or other assets caused during the work is covered by our insurer.\n\nBefore starting demolition, we always mark underground utilities (electrical lines, water and sewer connections) and arrange for their disconnection. This is a mandatory safety requirement for every demolition project.",
              },
            ],
          }}
          callToActionText="Questions about demolition? Get in touch"
        />
      </div>
      <FAQJsonLd items={faqItems} />

      <div>
        <CTA
          title="Need to demolish an old house or building?"
          description="Trust demolition to experienced professionals. We handle all necessary permits, safe demolition, waste removal, and eco-friendly disposal. Take advantage of our free site inspection and no-obligation quote."
          buttonText="Get a free quote"
        />
      </div>

      <ServicePricing filter={["demolition", "clearance", "moving"]} lang="en" />
      <TrustBadges lang="en" />
      <ContactFormSection lang="en" />

      <RelatedServices
        title="Related Services"
        services={[
          {
            title: "Demolition Services",
            description: "Comprehensive demolition work for apartments and offices.",
            href: "/en/demolition-services",
            icon: "/icons/crane_icon.svg",
          },
          {
            title: "Construction Waste Removal",
            description: "Quick removal of construction debris, rubble and building waste.",
            href: "/en/construction-waste-removal",
            icon: "/icons/recycle_icon.svg",
          },
          {
            title: "Handyman Services",
            description: "Minor repairs, installations and home maintenance.",
            href: "/en/handyman-services",
            icon: "/icons/repair_icon.svg",
          },
          {
            title: "Hazardous Waste Removal",
            description: "Safe and legal disposal of hazardous materials and old appliances.",
            href: "/en/hazardous-waste-removal",
            icon: "/icons/hazmat_icon.svg",
          },
        ]}
      />
    </main>
  );
}
