"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "React",
    "Next.js",
    "JavaScript",
    "UI/UX",
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "Next.js",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
    },

    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "React",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
    },

    {
      title: "Task Management App",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "React",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },

    {
      title: "UI/UX Dashboard",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "UI/UX",
      tags: ["Figma", "UI Design", "Prototype"],
    },

    {
      title: "Admin Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "Next.js",
      tags: ["React", "Charts", "Tailwind CSS"],
    },

    {
      title: "Weather App",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
      live: "https://your-live-link.com",
      category: "JavaScript",
      tags: ["JavaScript", "API", "CSS"],
    },
  ];

  // FILTER
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* GLOW */}
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARD */}
        <div className="rounded-[28px] border border-[#24324a] bg-[#071120]/80 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(0,255,255,0.05)]">
          
          {/* TOP */}
          <div className="text-center">
            
            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-purple-400 mb-3">
              Featured Projects
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My Recent Work
            </h2>
          </div>

          {/* FILTER BUTTON */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-10">
            
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${
                    activeCategory === item
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] scale-105"
                      : "bg-[#0b1528] border border-white/10 hover:border-cyan-400/40 hover:bg-[#101d36]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-[#24324a]
                  bg-[#091321]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden p-3">
                  
                  <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden">
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-70"></div>

                    {/* LIVE LINK */}
                    <Link
                      href={project.live}
                      target="_blank"
                      className="
                        absolute top-3 right-3
                        w-10 h-10
                        rounded-full
                        border border-white/20
                        bg-[#081120]/80
                        backdrop-blur-md
                        flex items-center justify-center
                        text-white
                        hover:bg-cyan-500
                        hover:rotate-12
                        transition-all duration-300
                      "
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-4 pb-5">
                  
                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="
                          px-3 py-1
                          rounded-lg
                          text-xs sm:text-sm
                          bg-[#0b1528]
                          border border-white/10
                          text-gray-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-10">
            
            <Link href="/projects">
              <button
                className="
                  group
                  px-8 py-3
                  rounded-xl
                  border border-purple-500/40
                  bg-[#0b1528]
                  text-white
                  font-medium
                  flex items-center gap-3
                  hover:bg-gradient-to-r
                  hover:from-cyan-500
                  hover:to-purple-500
                  transition-all duration-300
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]
                "
              >
                View All Projects

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}