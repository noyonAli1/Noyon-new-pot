"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="w-full bg-[#020617] border-b border-[#111827] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-[38px] font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              NR
            </h1>

            <span className="text-white text-[28px] font-medium">
              Noyon Raj
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {/* HOME */}
            <Link
              href="#home"
              onClick={() => setActive("home")}
              className={`relative transition duration-300 ${active === "home"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Home

              {active === "home" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* ABOUT */}
            <Link
              href="#about"
              onClick={() => setActive("about")}
              className={`relative transition duration-300 ${active === "about"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              About

              {active === "about" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* SKILLS */}
            <Link
              href="#skills"
              onClick={() => setActive("skills")}
              className={`relative transition duration-300 ${active === "skills"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Skills

              {active === "skills" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* PROJECTS */}
            <Link
              href="#projects"
              onClick={() => setActive("projects")}
              className={`relative transition duration-300 ${active === "projects"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Projects

              {active === "projects" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* SERVICES */}
            <Link
              href="#services"
              onClick={() => setActive("services")}
              className={`relative transition duration-300 ${active === "services"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Services

              {active === "services" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* EXPERIENCE */}
            <Link
              href="#experience"
              onClick={() => setActive("experience")}
              className={`relative transition duration-300 ${active === "experience"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Experience

              {active === "experience" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>

            {/* CONTACT */}
            <Link
              href="#contact"
              onClick={() => setActive("contact")}
              className={`relative transition duration-300 ${active === "contact"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              Contact

              {active === "contact" && (
                <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Hire Button */}
          <div className="hidden lg:block">
            <Link href="#contact">
              <button className="border border-purple-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition duration-300">
                Hire Me
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[600px]" : "max-h-0"
          }`}
      >
        <div className="bg-[#020617] border-t border-[#111827] px-6 py-6 flex flex-col gap-6">

          {/* HOME */}
          <Link
            href="home"
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "home"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Home

            {active === "home" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            onClick={() => {
              setActive("about");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "about"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            About

            {active === "about" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* SKILLS */}
          <Link
            href="/skills"
            onClick={() => {
              setActive("skills");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "skills"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Skills

            {active === "skills" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* PROJECTS */}
          <Link
            href="/project"
            onClick={() => {
              setActive("projects");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "projects"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Projects

            {active === "project" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* SERVICES */}
          <Link
            href="/services"
            onClick={() => {
              setActive("services");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "services"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Services

            {active === "services" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* EXPERIENCE */}
          <Link
            href="experience"
            onClick={() => {
              setActive("experience");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "experience"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Experience

            {active === "experience" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={() => {
              setActive("contact");
              setMenuOpen(false);
            }}
            className={`relative w-fit transition duration-300 ${active === "contact"
                ? "text-white"
                : "text-gray-300 hover:text-white"
              }`}
          >
            Contact

            {active === "contact" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}