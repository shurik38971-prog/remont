"use client";

import { useState } from "react";
import type { RepairType } from "@/lib/calculator";
import { ModalProvider } from "./ModalContext";
import { DemoStrip } from "./DemoStrip";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Types } from "./Types";
import { Portfolio } from "./Portfolio";
import { Stages } from "./Stages";
import { ShowcaseTopics } from "./ShowcaseTopics";
import { Calculator } from "./Calculator";
import { TrustBlock } from "./TrustBlock";
import { FAQ } from "./FAQ";
import { Contacts } from "./Contacts";
import { AboutProject } from "./AboutProject";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";

export function Home() {
  const [calcPreset, setCalcPreset] = useState<RepairType>("capital");

  return (
    <ModalProvider>
      <Header />
      <DemoStrip />
      <main className="pb-[72px] md:pb-0">
        <Hero />
        <Types onPreset={setCalcPreset} />
        <Portfolio />
        <Stages />
        <ShowcaseTopics />
        <Calculator preset={calcPreset} />
        <TrustBlock />
        <FAQ />
        <Contacts />
        <AboutProject />
      </main>
      <Footer />
      <StickyCta />
    </ModalProvider>
  );
}
