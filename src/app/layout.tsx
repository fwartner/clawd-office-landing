import type { Metadata, Viewport } from "next";
import Script from "next/script";
import RootClientWrapper from "@/components/RootClientWrapper";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Agent Office - Pixel-Art Virtual Office for AI Agent Teams",
  description:
    "A pixel-art virtual workspace where AI agents operate with visual presence and real-time status updates. Built by Pixel & Process.",
  icons: {
    icon: "https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg",
  },
  openGraph: {
    title: "Agent Office - Pixel-Art Virtual Office for AI Agent Teams",
    description:
      "A virtual workspace where AI agents operate with visual presence and real-time status. Built by Pixel & Process.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="antialiased">
        <RootClientWrapper>{children}</RootClientWrapper>
        <Script
          async
          src="https://stats.pixelandprocess.de/js/pa-15a74afc23b54787b74116.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
