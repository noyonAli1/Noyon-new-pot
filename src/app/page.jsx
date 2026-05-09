"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020617] text-white pt-[20px] lg:pt-[30px] min-h-screen"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* PURPLE GLOW */}
        <div className="absolute top-[15%] left-[10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-600/20 blur-[120px] rounded-full"></div>

        {/* CYAN GLOW */}
        <div className="absolute bottom-[10%] right-[10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* SMALL STARS */}
        <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>

        <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>

        <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
      </div>

      {/* WAVE BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full opacity-80">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96V320H0Z"
          />

          <defs>
            <linearGradient id="gradient">
              <stop stopColor="#7c3aed" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-4 min-h-screen">
          
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:space-y-5 text-center lg:text-left order-2 lg:order-1 -mt-4 lg:-mt-10">
            
            {/* SMALL TITLE */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-400 animate-pulse">
              Hi, I’m
            </h3>

            {/* NAME */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[95px] font-black leading-none">
                Noyon{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Raj
                </span>
              </h1>
            </div>

            {/* PROFESSION */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100">
              Frontend Developer
            </h2>

            {/* TAG */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 border border-purple-500/40 px-5 py-3 rounded-full text-xs sm:text-sm lg:text-base text-gray-200 backdrop-blur-md">
                <span>React.js Developer</span>

                <span className="text-purple-400">|</span>

                <span>Next.js Expert</span>

                <span className="text-purple-400">|</span>

                <span>UI/UX Enthusiast</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-7 lg:leading-9">
                I build exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
              
              {/* DOWNLOAD CV */}
              <Link href="/cv.pdf">
                <button className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  Download CV

                  <Download
                    size={18}
                    className="group-hover:translate-y-1 transition-all duration-300"
                  />
                </button>
              </Link>

              {/* CONTACT */}
              <Link href="/contact">
                <button className="group px-7 py-3.5 rounded-2xl border border-purple-500 text-white font-semibold flex items-center gap-3 hover:bg-purple-600/20 hover:border-cyan-400 transition-all duration-300">
                  Let’s Talk

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </button>
              </Link>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              
              <Link href="https://github.com" target="_blank">
                <div className="socialIcon">
                  <FaGithub />
                </div>
              </Link>

              <Link href="https://linkedin.com" target="_blank">
                <div className="socialIcon">
                  <FaLinkedinIn />
                </div>
              </Link>

              <Link href="https://twitter.com" target="_blank">
                <div className="socialIcon">
                  <FaTwitter />
                </div>
              </Link>

              <Link href="https://instagram.com" target="_blank">
                <div className="socialIcon">
                  <FaInstagram />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 -mt-8 lg:-mt-16">
            
            {/* OUTER RING */}
            <div className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] rounded-full border border-purple-500/20 animate-spinSlow"></div>

            {/* SECOND RING */}
            <div className="absolute w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[470px] lg:h-[470px] rounded-full border border-cyan-400/10"></div>

            {/* MAIN IMAGE */}
            <div className="relative w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-[4px] shadow-[0_0_60px_rgba(168,85,247,0.6)] animate-float">
              
              <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden relative">
                
                {/* IMAGE */}
                <Image
                  src="/noyon.png"
                  alt="profile"
                  fill
                  priority
                  className="object-cover"
                />

                {/* IMAGE না থাকলে এটা use করো */}
                {/* <div className="w-full h-full bg-[#0f172a]"></div> */}
              </div>
            </div>

            {/* REACT */}
            <div className="absolute top-[5%] left-[10%] animate-bounce">
              <div className="iconBox text-cyan-400 border-cyan-500">
                <FaReact />
              </div>
            </div>

            {/* CSS */}
            <div className="absolute top-[10%] right-[5%] animate-pulse">
              <div className="iconBox text-blue-400 border-blue-500">
                <FaCss3Alt />
              </div>
            </div>

            {/* JS */}
            <div className="absolute right-0 top-[45%] animate-bounce">
              <div className="iconBox text-yellow-400 border-yellow-500">
                <FaJs />
              </div>
            </div>

            {/* TAILWIND */}
            <div className="absolute bottom-[8%] right-[10%] animate-pulse">
              <div className="iconBox text-cyan-400 border-cyan-500">
                <SiTailwindcss />
              </div>
            </div>

            {/* NEXT */}
            <div className="absolute bottom-0 left-[12%] animate-bounce">
              <div className="iconBox text-white border-white/20">
                <RiNextjsFill />
              </div>
            </div>

            {/* HTML */}
            <div className="absolute left-0 top-[45%] animate-pulse">
              <div className="iconBox text-orange-400 border-orange-500">
                <FaHtml5 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM STYLE */}
      <style jsx>{`
        .iconBox {
          width: 48px;
          height: 48px;
          border-width: 1px;
          border-style: solid;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #08111f;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
        }

        .socialIcon {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid #374151;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .socialIcon:hover {
          transform: translateY(-5px);
          border-color: #22d3ee;
          color: #22d3ee;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }

        @media (min-width: 640px) {
          .iconBox {
            width: 70px;
            height: 70px;
            font-size: 34px;
          }

          .socialIcon {
            width: 52px;
            height: 52px;
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
          .iconBox {
            width: 85px;
            height: 85px;
            font-size: 42px;
          }
        }

        .animate-spinSlow {
          animation: spin 18s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}