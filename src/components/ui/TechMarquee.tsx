"use client";

import Image from "next/image";

const techs = [
  { name: "Next.js",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Laravel",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PostgreSQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Figma",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "MySQL",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "JavaScript",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
];

export default function TechMarquee() {
  // Gandakan array 10 kali agar cukup panjang menutupi layar ultrawide sekalipun
  const multiplied = Array(10).fill(techs).flat();

  return (
    <div className="overflow-hidden bg-white py-4">
      <div className="flex w-max animate-marquee">
        {multiplied.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap pr-9">
            <Image src={tech.logo} alt={tech.name} width={20} height={20} className="h-5 w-5 object-contain" />
            <span className="text-sm font-semibold text-gray-500">{tech.name}</span>
            <span className="ml-4 text-gray-300">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
