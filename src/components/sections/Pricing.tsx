"use client";
import { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290, // 20% discount for yearly
      description: "Perfect for small businesses and startups",
      features: ["Up to 5 team members", "1GB storage space"],
      isPopular: false,
      ctaText: "Get Started",
      ctaLink: "#",
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 950, // 20% discount for yearly
      description: "For growing teams and businesses",
      features: ["Up to 20 team members", "10GB storage space"],
      isPopular: true,
      ctaText: "Start Free Trial",
      ctaLink: "#",
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "For large organizations with specific needs",
      features: ["Unlimited team members", "Unlimited storage space"],
      isPopular: false,
      ctaText: "Contact Sales",
      ctaLink: "#contact",
    },
  ];

  return (
    <div className="relative  overflow-hidden transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
          <p className="mt-6 text-gray-500">
            Start with a 14-day free trial. No credit card required.
          </p>

          <div className="mt-12 flex items-center justify-center gap-x-4">
            <span className="text-sm text-gray-600">Monthly</span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isYearly ? "bg-gray-400" : "bg-gray-400"
              }`}
              onClick={() => setIsYearly(!isYearly)}
              aria-pressed={isYearly}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-5" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span className="text-sm text-gray-600">
              Yearly
              <span className="ml-2 text-primary-500 font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-24 space-y-8 lg:space-y-0 lg:grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-white h-full flex flex-col transition-all duration-300 hover:shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] ${
                plan.isPopular
                  ? "shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold tracking-tight text-primary-600">
                <span>
                  {typeof plan.monthlyPrice === "number"
                    ? `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                    : plan.monthlyPrice}
                </span>
                <span className="text-sm font-normal text-gray-500 ml-2">
                  {typeof plan.monthlyPrice === "number" ? "/month" : ""}
                </span>
              </p>
              <p className="mt-6 text-gray-600">{plan.description}</p>

              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary-500 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                className={`mt-8 w-full px-6 py-4 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.isPopular
                    ? "bg-primary-500 text-white hover:shadow-lg hover:bg-primary-400"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
