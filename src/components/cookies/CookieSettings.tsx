// src/components/cookies/CookieSettings.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CookiePreferences } from "./CookieConsent";

export default function CookieSettings() {
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // 🔥 Fixed to use the same localStorage key as CookieConsent
    const savedConsent = localStorage.getItem("sofoservis-cookie-consent");
    if (savedConsent) {
      try {
        setPreferences(JSON.parse(savedConsent));
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    // 🔥 Fixed to use the same localStorage key as CookieConsent
    localStorage.setItem("sofoservis-cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);

    // Reload page if analytics preference changed (to load/unload Clarity)
    const oldPrefs = JSON.parse(
      localStorage.getItem("sofoservis-cookie-consent") || "{}"
    );
    if (oldPrefs.analytics !== prefs.analytics) {
      window.location.reload();
    }

    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "necessary") return;

    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") || false;

  const t = isEnglish
    ? {
        button: "Cookie settings",
        title: "Cookie settings",
        necessary: "Necessary",
        alwaysActive: "Always active",
        analytics: "Analytics",
        analyticsDesc: "Microsoft Clarity",
        marketing: "Marketing",
        marketingDesc: "Ads & conversions",
        save: "Save settings",
      }
    : {
        button: "Nastavenia cookies",
        title: "Nastavenia cookies",
        necessary: "Nevyhnutné",
        alwaysActive: "Vždy aktívne",
        analytics: "Analytické",
        analyticsDesc: "Microsoft Clarity",
        marketing: "Marketingové",
        marketingDesc: "Reklamy a konverzie",
        save: "Uložiť nastavenia",
      };

  return (
    <>
      <button
        onClick={() => setShowSettings(true)}
        className="text-gray-400 hover:text-accent-500 transition-colors"
      >
        {t.button}
      </button>

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 m-4 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-primary-900 text-lg">
                {t.title}
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-primary-900">{t.necessary}</h4>
                    <p className="text-xs text-gray-600 mt-1">{t.alwaysActive}</p>
                  </div>
                  <div className="w-12 h-6 bg-accent-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-start justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-primary-900">{t.analytics}</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {t.analyticsDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange("analytics")}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics
                        ? "bg-accent-500 justify-end"
                        : "bg-gray-300 justify-start"
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>

                <div className="flex items-start justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-primary-900">
                      {t.marketing}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {t.marketingDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange("marketing")}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing
                        ? "bg-accent-500 justify-end"
                        : "bg-gray-300 justify-start"
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              <button
                onClick={() => savePreferences(preferences)}
                className="w-full px-6 py-2 bg-accent-500 hover:bg-accent-400 text-primary-900 font-medium rounded-lg transition-colors"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
