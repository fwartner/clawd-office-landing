"use client";

import { CookieConsentProvider } from "@/context/CookieConsentContext";

export default function RootClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieConsentProvider>
      {children}
    </CookieConsentProvider>
  );
}
