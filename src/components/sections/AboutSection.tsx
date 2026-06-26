"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechMarquee from "@/components/ui/TechMarquee";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <motion.section 
      id="tentang" 
      className="bg-white px-8 pt-32 pb-20 md:px-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">{t("about.subtitle")}</p>
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">{t("about.title")}</h2>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Foto Kiri */}
          <motion.div 
            className="relative h-80 w-80 shrink-0 md:h-96 md:w-96"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-400 to-teal-400 opacity-20 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/Profile%202.png"
                alt="Profile 2"
                width={400}
                height={400}
                className="h-full w-full object-cover object-[center_20%]"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/profile/400/400";
                }}
              />
            </motion.div>
            
            {/* Dekorasi kecil */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-teal-500 shadow-xl"
            >
              <span className="text-2xl font-bold text-white">RI.</span>
            </motion.div>
          </motion.div>

          {/* Teks Kanan */}
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg mb-8 text-gray-500 leading-relaxed space-y-4">
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
              <p>
                {t("about.p3")}
              </p>
            </div>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-600 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t("about.cv")}
            </motion.a>
          </motion.div>
        </div>

        {/* Keahlian Marquee */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
            {t("about.tech")}
          </h3>
          <div className="mx-auto max-w-4xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <TechMarquee />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
