"use client";

import Link from "next/link";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

export default function Footer() {

  // SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-[#1e293b] text-white overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] w-[220px] h-[220px] bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute right-[10%] bottom-[10%] w-[220px] h-[220px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Noyon Raj
              </span>
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Frontend Developer • React • Next.js
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="flex items-center gap-6 text-sm text-gray-300">
            
            <Link href="/" className="hover:text-cyan-400 transition-all duration-300">
              Home
            </Link>

            <Link href="/about" className="hover:text-cyan-400 transition-all duration-300">
              About
            </Link>

            <Link href="/project" className="hover:text-cyan-400 transition-all duration-300">
              Projects
            </Link>

            <Link href="/contact" className="hover:text-cyan-400 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            
            {/* SOCIAL */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="socialIcon"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="socialIcon"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="socialIcon"
            >
              <FaLinkedinIn />
            </a>

            {/* TOP BUTTON */}
            <button
              onClick={scrollToTop}
              className="socialIcon"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 pt-5 border-t border-[#1e293b] text-center text-sm text-gray-500">
          © 2026 Noyon Raj. All Rights Reserved.
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .socialIcon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid #24324a;
          background: #0b1220;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .socialIcon:hover {
          transform: translateY(-4px);
          border-color: #22d3ee;
          color: #22d3ee;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
        }
      `}</style>
    </footer>
  );
}