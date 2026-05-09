"use client";

import Image from "next/image";
import {
  Code2,
  Palette,
  Database,
  Server,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-500 to-yellow-400",
      icon: <Code2 size={16} />,
    },

    {
      name: "CSS3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-cyan-400 to-blue-500",
      icon: <Palette size={16} />,
    },

    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-300 to-yellow-500",
      icon: <Globe size={16} />,
    },

    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-300 to-cyan-500",
      icon: <Sparkles size={16} />,
    },

    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "from-gray-200 to-white",
      icon: <Code2 size={16} />,
    },

    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400 to-green-600",
      icon: <Server size={16} />,
    },

    {
      name: "Tailwind CSS",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      color: "from-cyan-300 to-sky-500",
      icon: <Palette size={16} />,
    },

    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-400 to-emerald-600",
      icon: <Database size={16} />,
    },

    {
      name: "SQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-400 to-indigo-500",
      icon: <Database size={16} />,
    },

    {
      name: "DOM",
      image:
        "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      color: "from-pink-400 to-purple-500",
      icon: <Globe size={16} />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-20 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
            My Skills
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Modern frontend and backend technologies that I use to build fast,
            scalable and beautiful web applications.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                transition-all duration-500
                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
              "
            >
              {/* GLOW */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-20
                  bg-gradient-to-br ${skill.color}
                  blur-2xl transition-all duration-500
                `}
              />

              {/* TOP ICON */}
              <div
                className={`
                  relative z-10
                  w-10 h-10 rounded-xl
                  bg-gradient-to-br ${skill.color}
                  flex items-center justify-center
                  text-black
                  mb-5
                `}
              >
                {skill.icon}
              </div>

              {/* IMAGE */}
              <div className="relative z-10 flex justify-center">
                <div className="relative w-[55px] h-[55px] transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="relative z-10 text-center mt-5">
                <h3 className="text-sm sm:text-base font-semibold">
                  {skill.name}
                </h3>
              </div>

              {/* BOTTOM LINE */}
              <div
                className={`
                  absolute bottom-0 left-0 h-[3px] w-full
                  bg-gradient-to-r ${skill.color}
                  scale-x-0 group-hover:scale-x-100
                  origin-left transition-transform duration-500
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}