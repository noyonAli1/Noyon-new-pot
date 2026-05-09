"use client";

import Image from "next/image";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaBriefcase,
  FaLanguage,
  FaClock,
  FaProjectDiagram,
  FaUsers,
  FaStar,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] text-white py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

        {/* GLOW */}
        <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARD */}
        <div className="rounded-[24px] border border-[#24324a] bg-[#071120]/80 backdrop-blur-xl p-5 sm:p-8 lg:p-10">
          
          <div className="grid lg:grid-cols-[280px_1fr_220px] gap-8 lg:gap-10 items-center">
            
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              
              <div className="relative">
                
                {/* GLOW */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[40px]"></div>

                {/* IMAGE BOX */}
                <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border-[4px] border-cyan-400 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.5)] animate-float">
                  
                  {/* IMAGE */}
                  <Image
                    src="/noy.png"
                    alt="profile"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* IMAGE না থাকলে এটা use করো */}
                  {/* <div className="w-full h-full bg-[#0f172a]"></div> */}
                </div>

                {/* DOTS */}
                <div className="absolute -left-6 top-8 grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div>
              {/* SMALL TITLE */}
              <p className="text-xs sm:text-sm tracking-[3px] text-purple-400 uppercase mb-2">
                About Me
              </p>

              {/* NAME */}
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                I’m{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Noyon Raj
                </span>
              </h2>

              {/* ROLE */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mt-2">
                Frontend Developer
              </h3>

              {/* TEXT */}
              <p className="text-gray-400 leading-7 mt-5 max-w-2xl text-sm sm:text-base">
                I’m a passionate frontend developer who loves turning ideas into
                beautiful, interactive, and responsive websites. I specialize
                in building modern web applications using React, Next.js, and
                Tailwind CSS.
              </p>

              {/* INFO GRID */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                
                {/* LEFT INFO */}
                <div className="space-y-4">
                  
                  <div className="infoItem">
                    <FaUser className="infoIcon" />

                    <span className="infoLabel">Name:</span>

                    <span className="infoValue">Noyon Raj</span>
                  </div>

                  <div className="infoItem">
                    <FaEnvelope className="infoIcon" />

                    <span className="infoLabel">Email:</span>

                    <span className="infoValue">
                      noyonraj@gmail.com
                    </span>
                  </div>

                  <div className="infoItem">
                    <FaPhoneAlt className="infoIcon" />

                    <span className="infoLabel">Phone:</span>

                    <span className="infoValue">
                      +880 1234-567890
                    </span>
                  </div>

                  <div className="infoItem">
                    <FaMapMarkerAlt className="infoIcon" />

                    <span className="infoLabel">Location:</span>

                    <span className="infoValue">Bangladesh</span>
                  </div>
                </div>

                {/* RIGHT INFO */}
                <div className="space-y-4">
                  
                  <div className="infoItem">
                    <FaBriefcase className="infoIcon" />

                    <span className="infoLabel">Freelance:</span>

                    <span className="infoValue">Available</span>
                  </div>

                  <div className="infoItem">
                    <FaClock className="infoIcon" />

                    <span className="infoLabel">Experience:</span>

                    <span className="infoValue">2+ Years</span>
                  </div>

                  <div className="infoItem">
                    <FaLanguage className="infoIcon" />

                    <span className="infoLabel">Language:</span>

                    <span className="infoValue">
                      English, Bangla
                    </span>
                  </div>

                  <div className="infoItem">
                    <FaGlobe className="infoIcon" />

                    <span className="infoLabel">Availability:</span>

                    <span className="infoValue">Full Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4">
              
              {/* CARD 1 */}
              <div className="statCard">
                <div className="statIcon">
                  <FaClock />
                </div>

                <h3 className="statNumber">2+</h3>

                <p className="statText">Years Experience</p>
              </div>

              {/* CARD 2 */}
              <div className="statCard">
                <div className="statIcon">
                  <FaProjectDiagram />
                </div>

                <h3 className="statNumber">20+</h3>

                <p className="statText">Projects Completed</p>
              </div>

              {/* CARD 3 */}
              <div className="statCard">
                <div className="statIcon">
                  <FaUsers />
                </div>

                <h3 className="statNumber">10+</h3>

                <p className="statText">Happy Clients</p>
              </div>

              {/* CARD 4 */}
              <div className="statCard">
                <div className="statIcon">
                  <FaStar />
                </div>

                <h3 className="statNumber">5★</h3>

                <p className="statText">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM STYLE */}
      <style jsx>{`
        .infoItem {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .infoIcon {
          color: #22d3ee;
          font-size: 14px;
        }

        .infoLabel {
          color: #c084fc;
          font-weight: 600;
          font-size: 14px;
        }

        .infoValue {
          color: #d1d5db;
          font-size: 14px;
        }

        .statCard {
          background: rgba(9, 18, 35, 0.9);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 18px;
          padding: 20px;
          transition: all 0.3s ease;
        }

        .statCard:hover {
          transform: translateY(-5px);
          border-color: #22d3ee;
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
        }

        .statIcon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(34, 211, 238, 0.12);
          color: #22d3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin-bottom: 14px;
        }

        .statNumber {
          font-size: 30px;
          font-weight: 800;
          color: white;
          margin-bottom: 4px;
        }

        .statText {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}