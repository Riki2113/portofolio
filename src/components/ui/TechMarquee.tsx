"use client";

const techs = [
  { name: "Next.js",     logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "React",       logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript",  logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS",logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Laravel",     logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "PostgreSQL",  logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Figma",       logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Git",         logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "MySQL",       logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "JavaScript",  logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
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
