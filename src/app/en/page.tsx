import LabHero from "@/components/sections/LabHero";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ServiceAreas from "@/components/sections/ServiceAreas";

export const metadata = {
  title: "Moving, Clearance & Furniture Assembly Services Slovakia | Sofoservis",
  description:
    "We offer professional moving, property clearance, and furniture assembly services for individuals and businesses ✅ Cheap and fair prices ✅ Free space inspection.",
  keywords:
    "moving services Slovakia, moving Bratislava, apartment moving, office relocation, property clearance, furniture assembly, IKEA assembly, kitchen assembly, removal services Slovakia, Sofoservis",
  alternates: {
    canonical: "https://www.sofoservis.sk/en",
    languages: {
      sk: "https://www.sofoservis.sk",
      en: "https://www.sofoservis.sk/en",
      "x-default": "https://www.sofoservis.sk",
    },
  },
  robots: "index, follow",
  openGraph: {
    title: "Moving, Clearance & Furniture Assembly Services Slovakia | Sofoservis",
    description:
      "Best-rated moving, clearance and furniture assembly company in Bratislava. 3,500+ satisfied customers.",
    url: "https://www.sofoservis.sk/en",
    siteName: "Sofoservis",
    images: [{ url: "https://www.sofoservis.sk/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving, Clearance & Furniture Assembly Services Slovakia | Sofoservis",
    description:
      "Best-rated moving, clearance and furniture assembly company in Bratislava. 3,500+ satisfied customers.",
    images: ["https://www.sofoservis.sk/images/og-logo.png"],
  },
};

const enAreas = [
  { name: "Bratislava", href: "/en/moving-bratislava" },
  { name: "Senec", href: "/en/moving-senec" },
  { name: "Pezinok", href: "/en/moving-pezinok" },
  { name: "Šamorín", href: "/en/moving-samorin" },
  { name: "Malacky", href: "/en/moving-malacky" },
  { name: "Stupava", href: "/en/moving-stupava" },
  { name: "Trnava", href: "/en/moving-trnava" },
  { name: "Senica", href: "/en/moving-senica" },
  { name: "Nitra", href: "/en/moving-nitra" },
  { name: "Hlohovec", href: "/en/moving-hlohovec" },
  { name: "Piešťany", href: "/en/moving-piestany" },
  { name: "Galanta", href: "/en/moving-galanta" },
  { name: "Levice", href: "/en/moving-levice" },
  { name: "Komárno", href: "/en/moving-komarno" },
  { name: "Šaľa", href: "/en/moving-sala" },
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer three main service categories: moving (apartments, houses, offices, international relocation), property clearance (apartments, basements, garages, gardens, commercial spaces), and furniture assembly (IKEA, kitchens, and other brands).",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Bratislava and surrounding areas, but we also operate in cities like Trnava, Senec, Pezinok, and throughout Slovakia.",
  },
  {
    question: "How much does moving cost?",
    answer:
      "The price depends on many factors such as volume of items, distance, floor level, and other specifics. For an accurate estimate, fill out our contact form or call us and we will prepare a free quote.",
  },
  {
    question: "Do you work on weekends and public holidays?",
    answer:
      "Yes, we provide our services 6 days a week including Saturday from 8:00 to 17:00. Sunday is available by arrangement. There is no extra charge for Saturday work.",
  },
  {
    question: "What do you clear and how do you handle waste?",
    answer:
      "We clear apartments, houses, basements, garages, gardens, offices and other spaces. We sort and dispose of waste responsibly in line with current legislation — used furniture, appliances and construction waste included. You don't have to worry about a thing.",
  },
  {
    question: "What types of waste can you dispose of?",
    answer:
      "We dispose of old furniture (shelves, wardrobes, beds), appliances, mattresses, textiles, construction waste and mixed household waste. Hazardous waste (paints, chemicals) is handled individually according to the nature of the material.",
  },
  {
    question: "Do you assemble IKEA furniture?",
    answer:
      "Yes, we specialise in IKEA furniture assembly — PAX wardrobes, kitchen units, beds, BILLY shelving systems and more. We follow IKEA assembly instructions with a focus on precision and stability.",
  },
  {
    question: "Can you assemble a complete kitchen?",
    answer:
      "Yes, we assemble kitchen units from various brands including built-in appliances, plinths, and wall-mounted cabinets. After assembly we also take care of removing all packaging materials.",
  },
];

export default function HomeEN() {
  return (
    <main className="bg-white">
      <FAQJsonLd items={faqItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sofoservis",
            url: "https://www.sofoservis.sk/en",
            telephone: "+421951735130",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bratislava",
              addressLocality: "Bratislava",
              addressRegion: "Bratislavský kraj",
              postalCode: "811 01",
              addressCountry: "SK",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 48.1486,
              longitude: 17.1077,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
            ],
            areaServed: {
              "@type": "Country",
              name: "Slovakia",
            },
            priceRange: "€€",
          }),
        }}
      />

      <div className="hidden lg:block">
        <LabHero
          narrowForm
          title="Moving, Clearance & Furniture Assembly – with the Best Rating"
          description="Sofoservis is the best-rated company of its kind. More than 3,500 satisfied customers and hundreds of 5-star reviews."
          benefits={[]}
          ratingText="3500+ satisfied customers"
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          badgeText="Services available 6 days a week"
          lang="en"
        />
      </div>
      <div className="lg:hidden">
        <Hero
          title="Moving, Clearance & Furniture Assembly – with the Best Rating"
          description="Sofoservis is the best-rated company of its kind. More than 3,500 satisfied customers and hundreds of 5-star reviews."
          benefits={[]}
          ratingText="3500+ satisfied customers"
          formTitle="Get a free price quote"
          formSubtitle="Fill out the form for a no-obligation calculation"
          badgeText="Services available 6 days a week"
          phoneCTAText="Call us now"
          phoneNumber="0951 735 130"
          hoursText="6 days a week 8:00-17:00"
          lang="en"
          showMascot
        />
      </div>

      <Clients />

      <div>
        <GoogleReviews title="Join our satisfied customers" />
      </div>

      <section className="pt-4 pb-8 md:pt-6 md:pb-12">
        <Reviews showHeadline={true} />
      </section>

      <Features
        title="Why Choose Sofoservis"
        description="Comprehensive services under one roof — moving, clearance and furniture assembly."
        features={[
          {
            image: "/icons/truck_icon.svg",
            title: "Apartment & House Moving",
            description:
              "We move apartments, houses and larger properties across Slovakia. Fast, stress-free and with care for the safety of your belongings.",
            link: "/en/apartment-moving",
          },
          {
            image: "/icons/briefcase_icon.svg",
            title: "Office & Business Moving",
            description:
              "Business relocation during nights or weekends — we minimise downtime and take care of all the organisation.",
            link: "/en/office-moving",
          },
          {
            image: "/icons/house_icon.svg",
            title: "Home & Property Clearance",
            description:
              "We clear apartments, houses, basements, garages and gardens. We dispose of waste responsibly — you don't have to worry about a thing.",
            link: "/en/home-junk-removal",
          },
          {
            image: "/icons/vypratavanie_icon.svg",
            title: "Space Clearance & Furniture Removal",
            description:
              "We'll take away your old furniture, appliances and construction waste. Quickly, responsibly and at fair prices.",
            link: "/en/home-clearance",
          },
          {
            image: "/icons/repair_icon.svg",
            title: "IKEA Furniture Assembly",
            description:
              "We assemble IKEA furniture — PAX wardrobes, beds, BILLY shelving systems and more. Precisely and according to instructions.",
            link: "/en/furniture-assembly",
          },
          {
            image: "/icons/kitchen_icon.svg",
            title: "Kitchen Assembly",
            description:
              "We assemble kitchen units including built-in appliances and wall-mounted cabinets. Packaging removal included.",
            link: "/en/kitchen-installation",
          },
        ]}
        callToActionText="Get a free, no-obligation quote"
      />

      <ServiceAreas
        title="Where We Operate"
        description="We provide professional moving and clearance services in Bratislava and across Slovakia. Contact us — we also serve your area."
        areas={enAreas}
        showCallToAction={true}
        callToActionText="We also operate in your area — get a quote"
      />

      <section className="py-12 md:py-16">
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about moving, clearance and furniture assembly"
          items={faqItems}
          callToActionText="Have more questions? Get a free, no-obligation quote"
        />
      </section>

      <section className="py-8 md:py-12">
        <GoogleReviews
          title="Verified reviews from real customers"
          showReviewsShowcase={false}
          showCarousel={true}
        />
      </section>

      <CTA
        title="We Help Non-Profits Grow with 20% Off Our Services"
        description="We support good causes. Non-profit organisations get special terms and discounted prices on all our services. Get in touch."
        buttonText="Contact us"
      />

      <ContactFormSection lang="en" />

      <div className="pb-12 md:pb-20">
        <InstagramFeed title="Follow Us on Instagram" />
      </div>
    </main>
  );
}
