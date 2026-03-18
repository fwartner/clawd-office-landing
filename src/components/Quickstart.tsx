"use client";

import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

export default function Quickstart() {
  const { t } = useLang();

  return (
    <section id="quickstart" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            {t(translations.quickstart.title)}
          </h2>
        </div>

        {/* Terminal block */}
        <div className="max-w-xl mx-auto border-neo shadow-neo-lg overflow-hidden">
          {/* macOS chrome */}
          <div className="bg-brand-black flex items-center gap-1.5 px-3 py-2 border-b-2 border-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="font-mono text-gray-600 text-xs ml-2">terminal</span>
          </div>

          {/* Terminal body */}
          <div className="bg-brand-dark p-5 font-mono text-sm leading-loose">
            <div>
              <span className="text-brand-teal">$</span>{" "}
              <span className="text-white">git clone https://github.com/fwartner/clawd-office.git</span>
            </div>
            <div>
              <span className="text-brand-teal">$</span>{" "}
              <span className="text-white">cd clawd-office &amp;&amp; npm install</span>
            </div>
            <div>
              <span className="text-brand-teal">$</span>{" "}
              <span className="text-white">npm run dev</span>
            </div>
            <div className="text-presence-active mt-2">
              &#10003; Office running at localhost:4173
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-brand-gray mt-4">
          {t(translations.quickstart.note)}
        </p>
      </div>
    </section>
  );
}
