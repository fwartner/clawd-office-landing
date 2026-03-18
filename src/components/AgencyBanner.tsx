"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

export default function AgencyBanner() {
  const { t } = useLang();

  return (
    <section className="bg-brand-white py-20 border-t-[3px] border-brand-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-purple text-brand-black text-xs font-semibold px-3 py-1 border-2 border-brand-black uppercase tracking-wider mb-4">
            {t(translations.agency.label)}
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4">
            {t(translations.agency.title)}
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto leading-relaxed">
            {t(translations.agency.sub)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {translations.agency.services.map((service, i) => {
            const colors = ["bg-brand-teal", "bg-brand-purple", "bg-brand-yellow"];
            return (
              <div
                key={i}
                className="border-neo shadow-neo bg-white p-5 hover:shadow-neo-hover transition-all"
              >
                <div
                  className={`w-4 h-4 ${colors[i % 3]} border-2 border-brand-black mb-3`}
                />
                <h3 className="font-heading font-bold mb-1">
                  {t(service.title)}
                </h3>
                <p className="text-sm text-brand-gray">
                  {t(service.desc)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://pixelandprocess.de/kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-white border-neo shadow-neo shadow-neo-hover min-h-[44px] px-6 py-3 font-bold transition-all inline-flex items-center justify-center touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {t(translations.agency.ctaPrimary)}
          </a>
          <a
            href="https://pixelandprocess.de"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-neo shadow-neo shadow-neo-hover min-h-[44px] px-6 py-3 font-bold transition-all inline-flex items-center justify-center touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {t(translations.agency.ctaSecondary)} →
          </a>
        </div>
      </div>
    </section>
  );
}
