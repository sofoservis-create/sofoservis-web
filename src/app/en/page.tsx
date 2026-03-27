import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import GoogleReviews from "@/components/widgets/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/widgets/InstagramFeed";
import LocationMap from "@/components/sections/LocationMap";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "Sofoservis | Moving Services - Cheap and Professional",
  description:
    "We offer professional moving services for individuals and businesses ✅ Cheap and fair prices ✅ Free space inspection.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en",
    languages: {
      sk: "https://www.sofoservis.sk",
      en: "https://www.sofoservis.sk/en",
      "x-default": "https://www.sofoservis.sk",
      },
  },
  openGraph: {
    title: "Sofoservis | Moving Services - Cheap and Professional",
    description:
      "Professional moving services with free estimates. Fast, reliable, and stress-free relocation!",
    url: "https://www.sofoservis.sk/en",
    siteName: "Sofoservis",
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
};

export default function HomeEN() {
  const faqItems = [
            {
              question: "What moving services do you offer?",
              answer:
                "We offer complete moving services including apartment and house moves, office relocations, furniture assembly and disassembly, packing and unpacking, and heavy item transport.",
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
              question: "Do you move on weekends?",
              answer:
                "Yes, we provide our services 6 days a week including Saturday from 8:00 to 17:00. Sunday is available by arrangement. There is no extra charge for Saturday work.",
            },
            {
              question: "Do you provide packing services?",
              answer:
                "Yes, we offer professional packing including all necessary packing materials. Our experienced workers know how to properly pack and protect all your belongings.",
            },
          ];
  return (
    <main className="bg-white">
      <Hero
        title="Professional Moving Services"
        description="We offer comprehensive moving services for individuals and businesses. Our experienced team handles everything from packing to unpacking at your new location."
        formTitle="Get a free price quote"
        formSubtitle="Fill out the form for a no-obligation calculation"
        badgeText="Services available 6 days a week"
        ratingText="Over 3500+ satisfied customers"
        benefits={[
          "Free site inspection",
          "High customer satisfaction",
          "Stress-free experience",
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
        <Reviews showHeadline={true} callToActionText="Get a Quote" />
      </div>

      <div>
        <Features
          title="Comprehensive Moving & Clearance Services"
          description="We offer solutions for every part of the moving and clearance process so you can focus on what matters most."
          features={[
            {
              image: "/icons/truck_icon.svg",
              title: "Apartment & House Moving",
              description:
                "Complete residential moving services including packing, transport, and unpacking. We handle everything with care and professionalism.",
              link: "/en/apartment-moving",
            },
            {
              image: "/icons/briefcase_icon.svg",
              title: "Office & Business Moving",
              description:
                "Professional office relocation with minimal downtime. We move your business efficiently so you can get back to work quickly.",
              link: "/en/office-moving",
            },
            {
              image: "/icons/furniture_icon.svg",
              title: "Furniture Assembly & Disassembly",
              description:
                "Expert furniture assembly and disassembly services. We work with all brands including IKEA, JYSK, and custom furniture.",
              link: "/en/furniture-assembly",
            },
            {
              image: "/icons/broom_icon.svg",
              title: "Home & Property Clearance",
              description:
                "Complete clearance of apartments, houses, basements, and garages. We sort, remove, and dispose of everything responsibly.",
              link: "/en/home-junk-removal",
            },
            {
              image: "/icons/crane_icon.svg",
              title: "Heavy Load Moving",
              description:
                "Specialized transport of pianos, safes, heavy machinery, and other bulky items with professional equipment.",
              link: "/en/moving-heavy-loads",
            },
            {
              image: "/icons/recycle_icon.svg",
              title: "Waste Removal & Disposal",
              description:
                "Construction waste removal, hazardous waste disposal, and old furniture removal with eco-friendly processing.",
              link: "/en/construction-waste-removal",
            },
          ]}
          callToActionText="Get a Free Quote"
        />
      </div>

      <div>
        <InstagramFeed title="Follow Us on Instagram" />
      </div>

      <div>
        <GoogleReviews
          title="Verified reviews from real customers"
          showReviewsShowcase={false}
        />
      </div>

      <div>
        <LocationMap
          title="We move across Slovakia"
          description="We provide our moving and clearance services throughout Slovakia"
          showCallToAction={true}
          callToActionText="We also operate in your area — get a quote"
          supporText="We also operate outside Bratislava:"
        />
      </div>

      <div className="pb-10 md:pb-[80px]">
        <FAQ
          title="Frequently Asked Questions About Moving"
          items={[
            {
              question: "What moving services do you offer?",
              answer:
                "We offer complete moving services including apartment and house moves, office relocations, furniture assembly and disassembly, packing and unpacking, and heavy item transport.",
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
              question: "Do you move on weekends?",
              answer:
                "Yes, we provide our services 6 days a week including Saturday from 8:00 to 17:00. Sunday is available by arrangement. There is no extra charge for Saturday work.",
            },
            {
              question: "Do you provide packing services?",
              answer:
                "Yes, we offer professional packing including all necessary packing materials. Our experienced workers know how to properly pack and protect all your belongings.",
            },
          ]}
          callToActionText="Have questions? Get in touch"
        />
      </div>

      <div className="pt-[20px]">
        <CTA
          title="Ready for a stress-free move?"
          description="Let our experienced team handle your relocation with professional care. Contact us today for a free, no-obligation quote."
          buttonText="Get a free quote"
        />
      </div>

      <ContactFormSection lang="en" />
          <FAQJsonLd items={faqItems} />
    </main>
  );
}
