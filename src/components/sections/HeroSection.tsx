"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  {
    href: "https://github.com/Riki2113",
    label: "GitHub",
    hoverClass: "hover:border-gray-900 hover:text-gray-900 hover:bg-gray-100",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/rikiirawan",
    label: "LinkedIn",
    hoverClass: "hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/rikiirawan1204",
    label: "Instagram",
    hoverClass: "hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const { t, lang } = useLanguage();

  return (
    <motion.section
      id="home"
      className="bg-white min-h-screen flex flex-col justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Hero */}
      <div className="relative px-8 pb-16 pt-32 md:px-16">
        {/* Background orbs */}
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -bottom-8 right-16 h-60 w-60 rounded-full bg-sky-100/60 blur-3xl" 
        />

        <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-16 lg:gap-24 max-w-6xl mx-auto w-full">
          {/* Left */}
          <motion.div 
            className="w-full max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              {t("hero.availability")}
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
              }}
              className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              {t("hero.hello")}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Riki Irawan
              </span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
              }}
              className="mb-10 max-w-lg text-lg leading-relaxed text-gray-500 md:text-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
              }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#proyek"
                className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 active:scale-95"
              >
                {t("hero.btn.projects")}
              </a>
              <a
                href="#kontak"
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 active:scale-95"
              >
                {t("hero.btn.contact")}
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
              }}
              className="mt-8 flex gap-3"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all ${s.hoverClass}`}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex-shrink-0 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="group relative w-64 md:w-80 lg:w-[22rem] aspect-[3/4]"
            >
              <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/40 bg-blue-50 shadow-2xl"
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Image 
                  src="/images/Profile%201.png" 
                  alt="Riki Irawan" 
                  width={400}
                  height={500}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Floating badge top */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -right-8 -top-4 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-lg shadow-gray-100"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">{t("hero.stat.projects")}</p>
                <p className="text-sm font-bold text-gray-800">{lang === "ID" ? "12+ proyek" : "12+ projects"}</p>
              </div>
            </motion.div>

            {/* Floating badge bottom */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 -left-8 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-lg shadow-gray-100"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">{lang === "ID" ? "Pengalaman" : "Experience"}</p>
                <p className="text-sm font-bold text-gray-800">{lang === "ID" ? "2+ tahun" : "2+ years"}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
