"use client";

import {
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Development",
      icon: <Code2 size={28} />,
      description:
        "Build modern, responsive and interactive user interfaces using React.js, Next.js and JavaScript.",
    },

    {
      title: "Responsive Design",
      icon: <MonitorSmartphone size={28} />,
      description:
        "Create fully responsive websites for mobile, tablet and desktop devices using Tailwind CSS.",
    },

    {
      title: "Backend Integration",
      icon: <Database size={28} />,
      description:
        "Work with Node.js, REST APIs and dynamic data integration for modern web applications.",
    },

    {
      title: "Web Performance",
      icon: <Rocket size={28} />,
      description:
        "Optimize websites for speed, SEO, accessibility and smooth user experience.",
    },

    {
      title: "DOM Manipulation",
      icon: <Globe size={28} />,
      description:
        "Handle dynamic interactions, events and animations using JavaScript DOM manipulation.",
    },

    {
      title: "Professional Projects",
      icon: <BriefcaseBusiness size={28} />,
      description:
        "Develop portfolio websites, dashboards, admin panels and professional frontend projects.",
    },
  ];

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "DOM",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Responsive Design",
    "API Integration",
    "Git & GitHub",
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* GLOW */}
        <div className="absolute top-[10%] left-[10%] w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[280px] h-[280px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <div className="text-center mb-14">
          
          <p className="text-xs sm:text-sm uppercase tracking-[4px] text-purple-400 mb-3">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What I Can Do
          </h2>
        </div>

        {/* EXPERIENCE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {experiences.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-[#24324a]
                bg-[#081120]/80
                backdrop-blur-xl
                p-6 sm:p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
              "
            >
              {/* HOVER EFFECT */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-purple-500/10
                "
              ></div>

              {/* ICON */}
              <div
                className="
                  relative z-10
                  w-16 h-16
                  rounded-2xl
                  border border-purple-500/30
                  bg-[#0d1728]
                  flex items-center justify-center
                  text-cyan-400
                  shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-6">
                
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  scale-x-0
                  group-hover:scale-x-100
                  transition-all duration-500
                "
              ></div>
            </div>
          ))}
        </div>

        {/* TECH STACK */}
        <div
          className="
            mt-14
            rounded-3xl
            border border-[#24324a]
            bg-[#081120]/80
            backdrop-blur-xl
            p-6 sm:p-8
          "
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I Use
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="
                  px-5 py-3
                  rounded-full
                  border border-cyan-400/20
                  bg-[#0b1528]
                  text-sm sm:text-base
                  text-gray-200
                  hover:border-cyan-400/50
                  hover:text-cyan-400
                  hover:-translate-y-1
                  transition-all duration-300
                  cursor-pointer
                "
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}