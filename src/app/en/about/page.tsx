import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ZoomableImage from "@/components/ui/ZoomableImage";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata = {
  title: "About Us | Sofoservis – Moving Company Story",
  description:
    "Meet the team behind Sofoservis – from a single yellow van in 2018 to a professional company with 6 trucks and 3,500+ happy customers in Slovakia.",
  alternates: {
    canonical: "https://www.sofoservis.sk/en/about",
    languages: {
      sk: "https://www.sofoservis.sk/o-nas",
      en: "https://www.sofoservis.sk/en/about",
      "x-default": "https://www.sofoservis.sk/o-nas",
    },
  },
  keywords:
    "about sofoservis, sofoservis story, moving company bratislava, sofoservis team, professional movers slovakia",
  openGraph: {
    title: "About Us | Sofoservis – Moving Company Story",
    description:
      "Meet the team behind Sofoservis – from a single yellow van in 2018 to a professional company with 6 trucks and 3,500+ happy customers.",
    url: "https://www.sofoservis.sk/en/about",
    siteName: "Sofoservis",
    images: [{ url: "/images/og-logo.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sofoservis – Moving Company Story",
    description:
      "Meet the team behind Sofoservis – from a single yellow van in 2018 to a professional company with 6 trucks and 3,500+ happy customers.",
    images: ["https://www.sofoservis.sk/images/og-logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sofoservis",
  url: "https://www.sofoservis.sk",
  logo: "https://www.sofoservis.sk/images/Sofoservis_nove_logo_SVG.svg",
  foundingDate: "2018",
  description:
    "Professional moving company offering moving, clearance and furniture assembly services.",
  areaServed: "Slovakia",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+421951735130",
    contactType: "customer service",
    availableLanguage: ["Slovak", "English"],
  },
};

const services = [
  {
    icon: "/icons/truck_icon.svg",
    title: "Moving",
    desc: "Apartments, houses, offices, pianos, safes. Anywhere in Slovakia and abroad.",
    href: "/en/apartment-moving",
  },
  {
    icon: "/icons/vypratavanie_icon.svg",
    title: "Clearance",
    desc: "Apartments, cellars, land, garages. Legal and eco-friendly waste disposal.",
    href: "/en/home-junk-removal",
  },
  {
    icon: "/icons/repair_icon.svg",
    title: "Furniture Assembly",
    desc: "Wardrobes, beds, kitchens, appliances. Precise, fast and safe.",
    href: "/en/furniture-assembly",
  },
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "3,500+", label: "Happy customers" },
  { value: "6", label: "Trucks in fleet" },
  { value: "3", label: "Professional teams" },
];

const values = [
  {
    icon: "🤝",
    title: "Reliability",
    desc: "We show up on time and do what we promise.",
  },
  {
    icon: "🙏",
    title: "Respect",
    desc: "We treat clients and colleagues with genuine respect.",
  },
  {
    icon: "⚖️",
    title: "Fairness",
    desc: "No hidden fees — transparent pricing always.",
  },
  {
    icon: "⚡",
    title: "Flexibility",
    desc: "Evenings, weekends, last minute — we make it work.",
  },
  {
    icon: "❤️",
    title: "Care",
    desc: "We handle your belongings as if they were our own.",
  },
  {
    icon: "📈",
    title: "Growth",
    desc: "We constantly improve and invest in our people and equipment.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sofoservis.sk/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.sofoservis.sk/en/about",
    },
  ],
};

const aboutFaqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer three main service categories: moving (apartments, houses, offices, international moving), clearance (apartments, cellars, garages, gardens, commercial spaces), and furniture assembly (IKEA, kitchens, other brands).",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Bratislava and the surrounding region, but also operate in other cities including Trnava, Senec, Pezinok and across Slovakia.",
  },
  {
    question: "How much does moving cost?",
    answer:
      "The price depends on many factors such as the volume of items, distance, floor level and other specifics. For an accurate estimate, fill in our contact form or call us and we will prepare a free quote.",
  },
  {
    question: "Do you work on weekends and public holidays?",
    answer:
      "Yes, we provide services 6 days a week including Saturday from 8:00 to 17:00. Sundays by arrangement. We do not charge any surcharge for Saturday work.",
  },
  {
    question: "What do you clear out and how do you handle waste?",
    answer:
      "We clear out apartments, houses, cellars, garages, gardens, offices and other spaces. We sort and dispose of waste ecologically in accordance with current legislation — used furniture, appliances and construction debris. You don't need to worry about anything.",
  },
  {
    question: "What types of waste can you remove?",
    answer:
      "We remove old furniture (shelves, wardrobes, beds), appliances, mattresses, textiles, construction waste and mixed household waste. Hazardous waste (paints, chemicals) is handled individually depending on the nature of the material.",
  },
  {
    question: "Do you assemble IKEA furniture?",
    answer:
      "Yes, we specialise in assembling IKEA furniture — PAX wardrobes, kitchen units, beds, BILLY shelving systems and more. Assembly is carried out according to IKEA instructions with an emphasis on precision and durability.",
  },
  {
    question: "Can you assemble an entire custom kitchen?",
    answer:
      "Yes, we assemble kitchen units of various brands including built-in appliances, plinths and wall-mounted cabinets. After assembly we also take care of removing all packaging materials.",
  },
];

export default function AboutPageEN() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQJsonLd items={aboutFaqItems} />

      <Hero
        title="We are Sofoservis. We move stories, not just furniture"
        description="From a single yellow van in 2018 to a professional company with 6 trucks and three dedicated teams."
        backgroundImage="/images/sofoservis-novy-team.avif"
        formTitle="Need help with moving?"
        formSubtitle="Get a no-obligation quote today."
        badgeText="Moving, clearance & furniture assembly"
        benefits={["Fair pricing", "Experienced team", "No hidden costs"]}
        phoneCTAText="Call us now"
        phoneNumber="0951 735 130"
        hoursText="6 days a week 8:00–17:00"
        lang="en"
      />

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-2/5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1">
                <ZoomableImage
                  src="/images/zakladatel-sofoservis-portrait.png"
                  alt="Sofian Sofo Hidbani – Sofoservis Founder"
                  width={800}
                  height={1200}
                  priority
                  className="w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">Sofian &ldquo;Sofo&rdquo; Hidbani – Founder</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl flex-1">
                <ZoomableImage
                  src="/images/zakladatel-zaciatky.webp"
                  alt="Sofoservis founder in the early days – beside the yellow van 2018"
                  width={800}
                  height={800}
                  className="w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">The early days — 2018</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-accent-500/15 text-accent-600 font-medium text-sm mb-4">
                Founder story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                From a Bazos ad to a professional company
              </h2>
              <div className="space-y-4 text-primary-700 text-lg leading-relaxed">
                <p>
                  In 2018 I watched friends start their own businesses — and it hit me: if they can, why can&apos;t I? I started with my father&apos;s van and a listing on Slovakia&apos;s classifieds site: <em>&ldquo;Cheapest moving in Bratislava.&rdquo;</em> I moved the first apartment for €50 and was almost too embarrassed to ask for it.
                </p>
                <p>
                  The company grew fast — maybe too fast. When my right-hand man stole over €50,000 from us, we nearly went under. But I didn&apos;t give up.
                </p>
                <p>
                  Today we have a stable company with three trained teams. We <Link href="/en/apartment-moving" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">move</Link> apartments, houses and offices. We <Link href="/en/home-junk-removal" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">clear out</Link> properties after bereavement, before renovation and after. We <Link href="/en/furniture-assembly" className="font-bold text-primary-900 hover:text-accent-600 underline underline-offset-2 transition-colors">assemble</Link> furniture and kitchens every day.
                </p>
                <p className="text-primary-900 font-semibold text-xl">
                  Moving isn&apos;t about furniture. It&apos;s about people.
                </p>
                <p className="text-primary-500 text-base mt-1">
                  — Sofian &ldquo;Sofo&rdquo; Hidbani, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            What we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="mb-5 flex items-center justify-center">
                  <Image src={s.icon} alt={s.title} width={96} height={96} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{s.title}</h3>
                <p className="text-primary-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 text-accent-600 font-semibold text-sm group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                  {s.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Then vs Now */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            Then and now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/sofoservis-stary-team.webp"
                alt="Sofoservis in the beginning – three guys with the yellow van, Bratislava 2018"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[3/2]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">How we started — 2018</p>
                <p className="text-white/80 text-sm">Three guys, one van, one big dream</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/sofoservis-novy-team.avif"
                alt="Sofoservis team today – full fleet and professional crew"
                width={1400}
                height={933}
                className="w-full object-cover aspect-[3/2]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Today — the Sofoservis team</p>
                <p className="text-white/80 text-sm">6 trucks, 3 teams, hundreds of moves per year</p>
                <p className="text-accent-400 text-sm font-medium mt-1">Sofian &ldquo;Sofo&rdquo; Hidbani, founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Our values
            </h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              These principles guide every job, every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-primary-900 text-lg mb-1">{v.title}</h3>
                  <p className="text-primary-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reality Expo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Image
              src="/images/Reality_EXPO.svg"
              alt="Reality EXPO logo"
              width={160}
              height={48}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Prestigious Partner at Reality EXPO 2025
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto text-lg">
              In 2025 we were invited as an expert partner to Reality EXPO — one of Slovakia&apos;s largest real estate conferences. We presented how Sofoservis works and why real estate agents and developers choose us as their trusted partner for clients on the move.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/reality-expo-2025-stage.webp"
                alt="Sofoservis founder presenting at Reality EXPO 2025 – how Sofoservis works"
                width={900}
                height={1350}
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ZoomableImage
                src="/images/reality-expo-2025-sala.webp"
                alt="Sofoservis at Reality EXPO 2025 – audience view"
                width={1200}
                height={1800}
                className="w-full object-cover object-top"
                style={{ maxHeight: "520px" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection lang="en" />
    </main>
  );
}
