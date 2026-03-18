"use client";

import { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";
import { translations } from "@/lib/i18n";

const navLinks = [
  { href: "#features", key: "features" as const, external: false },
  { href: "#rooms", key: "rooms" as const, external: false },
  { href: "#tech", key: "tech" as const, external: false },
  { href: "#quickstart", key: "quickstart" as const, external: false },
  {
    href: "https://github.com/fwartner/clawd-office",
    key: "github" as const,
    external: true,
  },
] as const;

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className="sticky top-0 z-50 bg-brand-white border-b-[3px] border-brand-black"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 min-h-[44px] min-w-[44px] items-center justify-center -m-2 p-2 touch-manipulation">
          <img
            src="https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg"
            alt="Pixel & Process"
            className="w-7 h-7"
          />
          <span className="font-heading font-bold text-brand-black text-lg">
            Agent Office
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-gray hover:text-brand-black transition-colors min-h-[44px] flex items-center touch-manipulation"
                >
                  {t(translations.nav[link.key])}
                </a>
              ) : (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-brand-gray hover:text-brand-black transition-colors min-h-[44px] flex items-center touch-manipulation"
                >
                  {t(translations.nav[link.key])}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center border-2 border-brand-black bg-brand-white hover:bg-brand-gray/10 transition-colors touch-manipulation"
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Language toggle - min 44px touch target */}
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
            className="bg-brand-yellow border-2 border-brand-black shadow-neo-sm shadow-neo-sm-hover min-h-[44px] min-w-[44px] px-4 py-2 text-sm font-bold transition-all cursor-pointer touch-manipulation focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden border-t-2 border-brand-black bg-brand-white overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overscrollBehavior: "contain" }}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="min-h-[44px] flex items-center px-4 text-brand-gray hover:text-brand-black hover:bg-brand-gray/5 transition-colors touch-manipulation"
              >
                {t(translations.nav[link.key])}
              </a>
            ) : (
              <a
                key={link.key}
                href={link.href}
                onClick={closeMenu}
                className="min-h-[44px] flex items-center px-4 text-brand-gray hover:text-brand-black hover:bg-brand-gray/5 transition-colors touch-manipulation"
              >
                {t(translations.nav[link.key])}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
