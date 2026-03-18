"use client";

import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import PresenceStates from "@/components/PresenceStates";
import Rooms from "@/components/Rooms";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Quickstart from "@/components/Quickstart";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <WhatIs />
      <PresenceStates />
      <Rooms />
      <Features />
      <TechStack />
      <Quickstart />
      <CtaSection />
      <Footer />
    </LangProvider>
  );
}
