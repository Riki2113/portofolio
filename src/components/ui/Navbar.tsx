"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const navItems = [
  { 
    id: "home", 
    tKey: "nav.home", 
    icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> 
  },
  { 
    id: "tentang", 
    tKey: "nav.about", 
    icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> 
  },
  { 
    id: "proyek", 
    tKey: "nav.projects", 
    icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> 
  },
  { 
    id: "kontak", 
    tKey: "nav.contact", 
    icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 
  },
];

const sectionColors: Record<string, string> = {
  home: "#2563eb",     // blue-600
  tentang: "#059669",  // emerald-600
  proyek: "#4f46e5",   // indigo-600
  kontak: "#e11d48",   // rose-600
};

export default function Navbar() {
  const [active, setActive] = useState("home");
  const { lang, setLang, t, isTransitioning } = useLanguage();
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }
          
          scrollTimeout.current = setTimeout(() => {
            isClickScrolling.current = false;
          }, 100);

          if (!isClickScrolling.current) {
            const sections = ["kontak", "proyek", "tentang", "home"];
            let current = "home";
            for (const section of sections) {
              const el = document.getElementById(section);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 3) {
                  current = section;
                  break;
                }
              }
            }
            setActive((prev) => (prev !== current ? current : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    isClickScrolling.current = true;
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-1/2 top-6 z-50 flex w-max -translate-x-1/2 items-center gap-4 rounded-full border border-gray-100/50 bg-white/80 px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
    >
      <span 
        className="mr-2 ml-3 text-lg font-extrabold transition-colors duration-500"
        style={{ color: sectionColors[active] }}
      >
        RI.
      </span>
      <div className="hidden items-center md:flex">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(item.id, e)}
              className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-500 ${
                isActive ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-bubble"
                  className="absolute inset-0 z-[-1] rounded-full shadow-md"
                  style={{ backgroundColor: sectionColors[item.id] }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-1.5 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                {item.icon}
                {t(item.tKey as TranslationKey)}
              </span>
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
          className="ml-2 flex items-center gap-1.5 rounded-full border border-gray-100 bg-gray-50/50 px-3 py-2 text-xs font-bold text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          title="Ganti Bahasa / Switch Language"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          {lang}
        </button>
        <a
          href="#kontak"
          onClick={(e) => handleClick("kontak", e)}
          className="rounded-full px-5 py-2 text-sm font-bold text-white transition-colors duration-500 hover:opacity-90 shadow-md whitespace-nowrap"
          style={{ backgroundColor: sectionColors[active] }}
        >
          <span className={`inline-block transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            {t("nav.hire")}
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
