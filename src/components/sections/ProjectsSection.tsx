"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("projects.p1.title"),
      description: t("projects.p1.desc"),
      image: "https://picsum.photos/seed/absensi/600/400",
      tech: ["Next.js", "Laravel", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: t("projects.p2.title"),
      description: t("projects.p2.desc"),
      image: "https://picsum.photos/seed/ecommerce/600/400",
      tech: ["React", "TypeScript", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: t("projects.p3.title"),
      description: t("projects.p3.desc"),
      image: "https://picsum.photos/seed/aset/600/400",
      tech: ["Laravel", "Tailwind CSS", "Alpine.js"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <motion.section 
      id="proyek" 
      className="bg-white px-8 pt-32 pb-20 md:px-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-500">{t("projects.subtitle")}</p>
        <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">{t("projects.title")}</h2>
        <p className="mt-4 text-base text-gray-500">
          {t("projects.header_desc")}
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mb-6 flex-1 text-sm text-gray-500">{project.description}</p>
              
              {/* Tech Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-1 text-xs font-semibold text-indigo-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-indigo-600"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-indigo-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t("projects.demo")}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
