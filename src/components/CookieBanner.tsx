"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { translations } from "@/lib/i18n";
import Image from "next/image";

const LOGO_URL =
  "https://fsn1.your-objectstorage.com/pp-strapi/pp_logo_color_3387f22ac4.svg";
const PRIVACY_URL = "https://pixelandprocess.de/datenschutz";

export default function CookieBanner() {
  const { t } = useLang();
  const {
    showBanner,
    hasConsented,
    acceptAll,
    rejectNonEssential,
    setCustomConsent,
    openSettings,
    closeSettings,
    dismissBanner,
    isSettingsOpen,
  } = useCookieConsent();

  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSaveCustom = () => {
    setCustomConsent(analytics, marketing);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-[calc(1rem+env(safe-area-inset-bottom))] md:pb-6"
      style={{ overscrollBehavior: "contain" }}
    >
      <div className="mx-auto max-w-2xl rounded-lg border-neo bg-brand-white shadow-neo-lg">
        <div className="relative flex flex-col gap-4 p-4 md:p-6">
          {hasConsented && (
            <button
              type="button"
              onClick={dismissBanner}
              className="absolute right-4 top-4 text-sm text-brand-gray underline hover:text-brand-teal"
              aria-label={t(translations.cookie.dismiss)}
            >
              {t(translations.cookie.dismiss)}
            </button>
          )}
          <div className="flex items-start gap-3">
            <a
              href="https://pixelandprocess.de"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
              aria-hidden
            >
              <Image
                src={LOGO_URL}
                alt="Pixel & Process"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </a>
            <div className="min-w-0 flex-1">
              <h2
                id="cookie-banner-title"
                className="font-heading text-lg font-bold text-brand-black"
              >
                {t(translations.cookie.title)}
              </h2>
              <p
                id="cookie-banner-desc"
                className="mt-1 text-sm text-brand-gray"
              >
                {t(translations.cookie.intro)}
              </p>
            </div>
          </div>

          {isSettingsOpen ? (
            <div className="space-y-4">
              <div className="rounded border-neo bg-brand-white p-3">
                <p className="text-sm font-medium text-brand-black">
                  {t(translations.cookie.essential)}
                </p>
                <p className="mt-1 text-xs text-brand-gray">
                  {t(translations.cookie.provider)}
                </p>
              </div>
              <label className="flex items-start gap-3 rounded border-neo bg-brand-white p-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-2 border-brand-black accent-brand-teal"
                  aria-describedby="cookie-analytics-desc"
                />
                <div>
                  <span className="text-sm font-medium text-brand-black">
                    Analytics
                  </span>
                  <p
                    id="cookie-analytics-desc"
                    className="mt-0.5 text-xs text-brand-gray"
                  >
                    {t(translations.cookie.analytics)}
                  </p>
                </div>
              </label>
              <label className="flex cursor-not-allowed items-start gap-3 rounded border-neo bg-brand-gray/10 p-3 opacity-75">
                <input
                  type="checkbox"
                  checked={marketing}
                  disabled
                  className="mt-1 h-4 w-4 rounded border-2 border-brand-black"
                  aria-describedby="cookie-marketing-desc"
                />
                <div>
                  <span className="text-sm font-medium text-brand-gray">
                    Marketing
                  </span>
                  <p
                    id="cookie-marketing-desc"
                    className="mt-0.5 text-xs text-brand-gray"
                  >
                    {t(translations.cookie.marketing)}
                  </p>
                </div>
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="rounded border-neo bg-brand-teal min-h-[44px] px-4 py-2 font-medium text-brand-white shadow-neo-sm transition-[transform,box-shadow] hover:shadow-neo-sm-hover touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {t(translations.cookie.save)}
                </button>
                <button
                  type="button"
                  onClick={closeSettings}
                  className="rounded border-neo bg-brand-white min-h-[44px] px-4 py-2 font-medium text-brand-black shadow-neo-sm transition-[transform,box-shadow] hover:shadow-neo-sm-hover touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {t(translations.cookie.rejectNonEssential)}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded border-neo bg-brand-teal min-h-[44px] px-4 py-2 font-medium text-brand-white shadow-neo-sm transition-[transform,box-shadow] hover:shadow-neo-sm-hover touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                {t(translations.cookie.acceptAll)}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded border-neo bg-brand-white min-h-[44px] px-4 py-2 font-medium text-brand-black shadow-neo-sm transition-[transform,box-shadow] hover:shadow-neo-sm-hover touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                {t(translations.cookie.rejectNonEssential)}
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="rounded border-neo border-brand-gray bg-transparent min-h-[44px] px-4 py-2 font-medium text-brand-black shadow-neo-sm transition-[transform,box-shadow] hover:shadow-neo-sm-hover touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                {t(translations.cookie.customize)}
              </button>
            </div>
          )}

          <p className="text-xs text-brand-gray">
            {t(translations.cookie.privacyLink)}{" "}
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-teal"
            >
              {t(translations.footer.privacy)}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
