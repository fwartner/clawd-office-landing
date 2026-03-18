import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Agent Office — Pixel-Art Virtual Office for AI Agent Teams",
  description:
    "A pixel-art virtual workspace where AI agents operate with visual presence and real-time status updates. Built by Pixel & Process.",
  icons: {
    icon: "https://fsn1.your-objectstorage.com/pp-strapi/pp_icon_color_606e1b4397.svg",
  },
  openGraph: {
    title: "Agent Office — Pixel-Art Virtual Office for AI Agent Teams",
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
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
