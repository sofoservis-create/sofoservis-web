"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ClarityFunction {
  (...args: unknown[]): void;
  q?: unknown[];
}

declare global {
  interface Window {
    clarity: ClarityFunction;
    clarityLoaded: boolean;
    gtag: (...args: unknown[]) => void;
  }
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
};

const CLARITY_ID = "s4l5dsz9ec";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  const t = isEnglish
    ? {
        title: "We use cookies",
        description: "They help us improve our services and show relevant offers.",
        moreInfo: "More information",
        customize: "Customize",
        acceptAll: "Accept all",
        settingsTitle: "Cookie settings",
        necessary: "Necessary cookies",
        necessaryDesc: "Required for basic website functionality",
        analytics: "Analytics cookies",
        analyticsDesc: "Help us understand how customers use our services",
        marketing: "Marketing cookies",
        marketingDesc: "Allow us to show offers that truly interest you",
        policyLink: "Read our detailed cookie policy",
        save: "Save settings",
        toggleOn: "Disable",
        toggleOff: "Enable",
        close: "Close",
      }
    : {
        title: "Používame cookies",
        description: "Pomáhajú nám zlepšovať naše služby a zobrazovať relevantné ponuky.",
        moreInfo: "Viac informácií",
        customize: "Prispôsobiť",
        acceptAll: "Prijať všetky",
        settingsTitle: "Nastavenia cookies",
        necessary: "Nevyhnutné cookies",
        necessaryDesc: "Potrebné pre základnú funkcionalitu webu",
        analytics: "Analytické cookies",
        analyticsDesc: "Pomáhajú nám pochopiť, ako zákazníci využívajú naše služby",
        marketing: "Marketingové cookies",
        marketingDesc: "Umožňujú zobrazovať ponuky, ktoré vás skutočne zaujímajú",
        policyLink: "Prečítajte si podrobné zásady používania cookies",
        save: "Uložiť nastavenia",
        toggleOn: "Vypnúť",
        toggleOff: "Zapnúť",
        close: "Zavrieť",
      };

  useEffect(() => {
    const hasConsent = localStorage.getItem("sofoservis-cookie-consent");
    if (!hasConsent) {
      setTimeout(() => setIsVisible(true), 3000);
    } else {
      const savedPreferences = JSON.parse(hasConsent);
      setPreferences(savedPreferences);
      initializeTracking(savedPreferences);
    }
  }, []);

  const initializeTracking = (prefs: CookiePreferences) => {
    if (prefs.analytics && !window.clarity && CLARITY_ID) {
      try {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
        document.head.appendChild(script);
        window.clarityLoaded = true;
        setTimeout(() => {
          if (window.clarity) {
            window.clarity("event", "clarity_initialized");
          }
        }, 3000);
      } catch {
        // Error loading Microsoft Clarity
      }
    }

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
      });
    }

    window.dispatchEvent(
      new CustomEvent("cookiePreferencesUpdated", {
        detail: prefs,
      })
    );
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("sofoservis-cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    initializeTracking(prefs);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleDismiss = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-24 sm:pb-20">
        <div className="relative bg-white shadow-2xl rounded-2xl mx-auto max-w-4xl">
          {/* × close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            aria-label={t.close}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="px-5 py-6 sm:px-6 sm:py-6 md:px-8 md:py-7"
            style={{ animation: "slideUp 0.3s ease-out" }}
          >
            {!showDetails ? (
              <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-y-0 lg:gap-8">
                {/* Content section */}
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" role="img" aria-label="Cookie">
                      🍪
                    </span>
                    <h3 className="font-semibold text-primary-900 text-lg sm:text-xl">
                      {t.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {t.description}{" "}
                    <Link
                      href={isEnglish ? "/en/cookie-policy" : "/zasady-pouzivania-cookies"}
                      className="text-accent-600 hover:text-accent-700 underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.moreInfo}
                    </Link>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 lg:flex-row lg:gap-3 lg:shrink-0">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="w-full lg:w-auto px-6 py-3 text-base border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700"
                  >
                    {t.customize}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="w-full lg:w-auto px-6 py-3 text-base bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-accent-500"
                  >
                    {t.acceptAll}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between pr-6">
                  <h3 className="font-semibold text-primary-900 text-xl sm:text-2xl flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label="Cookie">
                      🍪
                    </span>
                    {t.settingsTitle}
                  </h3>
                  <button
                    onClick={handleDismiss}
                    className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label={t.close}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-5 bg-accent-50 rounded-xl border border-accent-200">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-semibold text-primary-900 text-base sm:text-lg">
                        {t.necessary}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {t.necessaryDesc}
                      </p>
                    </div>
                    <div className="w-14 h-7 bg-accent-500 rounded-full flex items-center justify-end px-1 shrink-0">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-5 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-semibold text-primary-900 text-base sm:text-lg">
                        {t.analytics}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {t.analyticsDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange("analytics")}
                      className={`w-14 h-7 rounded-full flex items-center transition-all duration-200 shrink-0 ${
                        preferences.analytics
                          ? "bg-accent-500 justify-end"
                          : "bg-gray-300 justify-start"
                      } px-1`}
                      aria-label={`${
                        preferences.analytics ? t.toggleOn : t.toggleOff
                      } ${t.analytics}`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-5 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="font-semibold text-primary-900 text-base sm:text-lg">
                        {t.marketing}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {t.marketingDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange("marketing")}
                      className={`w-14 h-7 rounded-full flex items-center transition-all duration-200 shrink-0 ${
                        preferences.marketing
                          ? "bg-accent-500 justify-end"
                          : "bg-gray-300 justify-start"
                      } px-1`}
                      aria-label={`${
                        preferences.marketing ? t.toggleOn : t.toggleOff
                      } ${t.marketing}`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                    </button>
                  </div>
                </div>

                {/* Cookie policy link */}
                <div className="text-center">
                  <Link
                    href={isEnglish ? "/en/cookie-policy" : "/zasady-pouzivania-cookies"}
                    className="text-sm text-accent-600 hover:text-accent-700 underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.policyLink}
                  </Link>
                </div>

                {/* Action buttons — only Save */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                  <button
                    onClick={handleSaveCustom}
                    className="w-full sm:w-auto px-6 py-3 text-base bg-accent-500 hover:bg-accent-400 text-primary-900 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-accent-500"
                  >
                    {t.save}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
