"use client";

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
  const doubled = [...techs, ...techs];

  return (
    <div className="overflow-hidden bg-white py-4">
      <div className="flex w-max animate-marquee">
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap pr-9">
            <img 
              src={tech.logo} 
              alt={tech.name} 
              width={28} 
              height={28}
              style={{ imageRendering: 'crisp-edges' }}
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold text-gray-600">{tech.name}</span>
            <span className="ml-4 text-gray-300">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
