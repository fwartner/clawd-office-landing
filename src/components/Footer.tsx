"use client";

import { useLang } from "@/context/LangContext";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { translations } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const { openSettings } = useCookieConsent();

  return (
    <footer className="bg-brand-black py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg"
            alt="Pixel & Process"
            className="w-4 h-4"
          />
          <span className="text-gray-500 text-sm">
            {t(translations.footer.copy)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 justify-center md:justify-end">
          <a
            href="https://pixelandprocess.de"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center hover:text-brand-teal transition-colors touch-manipulation"
          >
            pixelandprocess.de
          </a>
          <a
            href="https://github.com/fwartner/clawd-office"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center hover:text-brand-teal transition-colors touch-manipulation"
          >
            GitHub
          </a>
          <a
            href="https://pixelandprocess.de/impressum"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center hover:text-brand-teal transition-colors touch-manipulation"
          >
            {t(translations.footer.imprint)}
          </a>
          <a
            href="https://pixelandprocess.de/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center hover:text-brand-teal transition-colors touch-manipulation"
          >
            {t(translations.footer.privacy)}
          </a>
          <button
            type="button"
            onClick={openSettings}
            className="min-h-[44px] flex items-center text-sm text-gray-500 hover:text-brand-teal transition-colors touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            {t(translations.cookie.cookieSettings)}
          </button>
        </div>
      </div>
    </footer>
  );
}
