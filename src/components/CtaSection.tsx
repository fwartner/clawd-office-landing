"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

export default function CtaSection() {
  const { t } = useLang();

  return (
    <section className="bg-brand-yellow border-y-[3px] border-brand-black py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg"
            alt="Pixel & Process"
            className="w-6 h-6"
          />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {translations.cta.label}
          </span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl mb-4">
          {t(translations.cta.title)}
        </h2>

        <p className="text-brand-gray mb-8">
          {t(translations.cta.sub)}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/fwartner/clawd-office"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-white border-neo px-6 py-3 font-bold shadow-neo shadow-neo-hover transition-all"
            style={{ boxShadow: "4px 4px 0px #333" }}
          >
            {t(translations.cta.ctaPrimary)}
          </a>
          <a
            href="https://github.com/fwartner/clawd-office#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-neo shadow-neo shadow-neo-hover px-6 py-3 font-bold transition-all"
          >
            {t(translations.cta.ctaSecondary)}
          </a>
        </div>
      </div>
    </section>
  );
}
