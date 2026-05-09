"use client";

import {
  Code2,
  MonitorSmartphone,
  PanelsTopLeft,
  GaugeCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I build modern and responsive websites using the latest technologies.",
      icon: <PanelsTopLeft size={28} />,
    },

    {
      title: "Frontend Development",
      description:
        "I create interactive UIs with React, Next.js and Tailwind CSS.",
      icon: <Code2 size={28} />,
    },

    {
      title: "Responsive Design",
      description:
        "I make sure websites look perfect on all devices and screen sizes.",
      icon: <MonitorSmartphone size={28} />,
    },

    {
      title: "Performance Optimization",
      description:
        "I optimize websites for speed, SEO and best performance.",
      icon: <GaugeCircle size={28} />,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* GLOW */}
        <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP TITLE */}
        <div className="text-center mb-12">
          
          <p className="text-xs sm:text-sm uppercase tracking-[4px] text-purple-400 mb-3">
            What I Do
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My Services
          </h2>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-[#24324a]
                bg-[#081120]/80
                backdrop-blur-xl
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
              "
            >
              {/* HOVER GLOW */}
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
                  w-14 h-14
                  rounded-xl
                  border border-purple-500/40
                  bg-[#0d1728]
                  flex items-center justify-center
                  text-cyan-400
                  shadow-[0_0_25px_rgba(168,85,247,0.18)]
                  group-hover:scale-110
                  transition-all duration-500
                "
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 mt-5">
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base leading-7 text-gray-400">
                  {service.description}
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
      </div>
    </section>
  );
}