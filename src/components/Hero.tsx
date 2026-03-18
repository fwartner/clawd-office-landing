"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";
import Image from "next/image";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="py-16 md:py-20 relative overflow-hidden pixel-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="md:text-left text-center">
          <div className="inline-flex items-center gap-2 font-heading font-semibold text-xs uppercase tracking-wider text-brand-teal mb-5">
            <span className="w-2 h-2 bg-brand-teal animate-blink" />
            {t(translations.hero.badge)}
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
            {t(translations.hero.titlePre)}{" "}
            <span className="bg-brand-yellow px-2 border-2 border-brand-black inline-block">
              {t(translations.hero.titleHighlight)}
            </span>{" "}
            {t(translations.hero.titlePost)}
          </h1>

          <p className="text-lg text-brand-gray max-w-md mb-8 font-light md:mx-0 mx-auto">
            {t(translations.hero.sub)}
          </p>

          <div className="flex gap-4 flex-wrap md:justify-start justify-center mb-6">
            <a
              href="#quickstart"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-purple shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              {t(translations.hero.ctaPrimary)}
            </a>
            <a
              href="https://github.com/fwartner/clawd-office"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-semibold text-sm px-7 py-3.5 border-neo bg-brand-white shadow-neo shadow-neo-hover transition-all inline-flex items-center gap-2"
            >
              {t(translations.hero.ctaSecondary)}
            </a>
          </div>

          <div className="flex gap-4 flex-wrap md:justify-start justify-center text-sm text-brand-gray">
            <span>{t(translations.hero.trustStates)}</span>
            <span>{t(translations.hero.trustRooms)}</span>
            <span>{t(translations.hero.trustQueue)}</span>
          </div>
        </div>

        {/* Right column - Screenshot */}
        <div className="relative">
          {/* Floating status badge top */}
          <div className="absolute -top-3 -right-2 z-10 bg-brand-white border-2 border-brand-black px-3 py-1.5 font-heading font-semibold text-xs shadow-neo-sm hidden md:flex items-center gap-1.5 animate-float">
            <span className="w-2 h-2 rounded-full bg-presence-active" />
            Active
          </div>

          {/* macOS window frame */}
          <div className="border-neo shadow-neo-lg overflow-hidden">
            {/* Chrome bar */}
            <div className="bg-brand-black flex items-center gap-1.5 px-3 py-2 border-b-2 border-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="font-mono text-gray-600 text-xs ml-2">
                clawd-office — localhost:4173
              </span>
            </div>
            {/* Screenshot */}
            <Image
              src="https://raw.githubusercontent.com/fwartner/clawd-office/main/assets/readme/virtual-office-screenshot.jpg"
              alt="Clawd Office virtual office screenshot"
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Floating status badge bottom */}
          <div className="absolute -bottom-3 -left-2 z-10 bg-brand-white border-2 border-brand-black px-3 py-1.5 font-heading font-semibold text-xs shadow-neo-sm hidden md:flex items-center gap-1.5 animate-float-delay-1">
            <span className="w-2 h-2 rounded-full bg-presence-meeting" />
            In Meeting
          </div>
        </div>
      </div>
    </section>
  );
}
