"use client";

import { useState } from "react";
import IntroAnimation from "@/components/ui/IntroAnimation";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/ui/Navbar";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const { isTransitioning } = useLanguage();

  return (
    <main>
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}
      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <div className={`transition-all duration-300 ${isTransitioning ? "opacity-0 blur-sm translate-y-2" : "opacity-100 blur-0 translate-y-0"}`}>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
