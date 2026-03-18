"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

export default function Navbar() {
  const { lang, toggle, t } = useLang();

  return (
    <nav className="sticky top-0 z-50 bg-brand-white border-b-[3px] border-brand-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg"
            alt="Pixel & Process"
            className="w-7 h-7"
          />
          <span className="font-heading font-bold text-brand-black text-lg">
            Agent Office
          </span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-brand-gray hover:text-brand-black transition-colors">
              {t(translations.nav.features)}
            </a>
            <a href="#rooms" className="text-sm text-brand-gray hover:text-brand-black transition-colors">
              {t(translations.nav.rooms)}
            </a>
            <a href="#tech" className="text-sm text-brand-gray hover:text-brand-black transition-colors">
              {t(translations.nav.tech)}
            </a>
            <a href="#quickstart" className="text-sm text-brand-gray hover:text-brand-black transition-colors">
              {t(translations.nav.quickstart)}
            </a>
            <a
              href="https://github.com/fwartner/clawd-office"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-gray hover:text-brand-black transition-colors"
            >
              {t(translations.nav.github)}
            </a>
          </div>
          <button
            onClick={toggle}
            className="bg-brand-yellow border-2 border-brand-black shadow-neo-sm shadow-neo-sm-hover px-3 py-1 text-sm font-bold transition-all cursor-pointer"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </nav>
  );
}
