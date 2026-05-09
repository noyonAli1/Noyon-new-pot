"use client";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  SendHorizonal,
} from "lucide-react";

export default function MyContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] py-20 text-white"
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
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[4px] uppercase text-purple-400 mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Let’s Work Together
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* PROFILE CARD */}
            <div className="rounded-3xl border border-[#24324a] bg-[#081120]/80 backdrop-blur-xl p-7">
              {/* LOGO */}
              <div className="w-24 h-24 rounded-full border-[3px] border-cyan-400 flex items-center justify-center text-4xl font-bold bg-[#0d1728] shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                NR
              </div>

              <h3 className="mt-6 text-3xl font-bold">Noyon Raj</h3>

              <p className="mt-2 text-cyan-400 text-lg">
                Frontend Developer
              </p>

              <p className="mt-5 text-gray-400 leading-8">
                Specialized in building modern responsive websites,
                interactive UI/UX and scalable frontend applications.
              </p>
            </div>

            {/* INFO CARD */}
            <div className="space-y-5">
              {/* EMAIL */}
              <div className="flex items-center gap-5 rounded-2xl border border-[#24324a] bg-[#081120]/80 p-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0d1728] flex items-center justify-center text-cyan-400 text-2xl">
                  <Mail />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Email Address</h4>

                  <p className="text-gray-400 mt-1">
                    bnoyon223@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5 rounded-2xl border border-[#24324a] bg-[#081120]/80 p-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0d1728] flex items-center justify-center text-green-400 text-2xl">
                  <Phone />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Phone Number</h4>

                  <p className="text-gray-400 mt-1">
                    +880 1304868130
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-5 rounded-2xl border border-[#24324a] bg-[#081120]/80 p-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0d1728] flex items-center justify-center text-purple-400 text-2xl">
                  <MapPin />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Location</h4>

                  <p className="text-gray-400 mt-1">
                    Bangladesh
                  </p>
                </div>
              </div>

              {/* AVAILABILITY */}
              <div className="flex items-center gap-5 rounded-2xl border border-[#24324a] bg-[#081120]/80 p-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0d1728] flex items-center justify-center text-yellow-400 text-2xl">
                  <Clock3 />
                </div>

                <div>
                  <h4 className="text-xl font-semibold">Availability</h4>

                  <p className="text-gray-400 mt-1">
                    Available For Freelance Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 rounded-3xl border border-[#24324a] bg-[#081120]/80 backdrop-blur-xl p-7 sm:p-10">
            <h3 className="text-4xl font-bold mb-4">
              Send Me A Message
            </h3>

            <p className="text-gray-400 mb-10 text-lg">
              Fill out the form below and I’ll get back to you as soon as possible.
            </p>

            {/* FORM */}
            <form className="space-y-6">
              {/* TOP INPUT */}
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-[#24324a] bg-[#0d1728] px-6 py-5 outline-none focus:border-cyan-400 transition-all duration-300"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-[#24324a] bg-[#0d1728] px-6 py-5 outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-[#24324a] bg-[#0d1728] px-6 py-5 outline-none focus:border-cyan-400 transition-all duration-300"
              />

              {/* MESSAGE */}
              <textarea
                rows="8"
                placeholder="Write Your Message..."
                className="w-full rounded-2xl border border-[#24324a] bg-[#0d1728] px-6 py-5 outline-none resize-none focus:border-cyan-400 transition-all duration-300"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-600
                  via-pink-500
                  to-cyan-500
                  py-4
                  text-lg
                  font-semibold
                  flex items-center justify-center gap-3
                  hover:scale-[1.01]
                  transition-all duration-300
                  shadow-[0_0_35px_rgba(168,85,247,0.25)]
                "
              >
                Send Message

                <SendHorizonal
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300"
                />
              </button>

              {/* SOCIAL LINKS */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-5 text-white">
                  Connect With Me
                </h4>

                <div className="flex flex-wrap items-center gap-4">
                  {/* FACEBOOK */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-14 h-14
                      rounded-2xl
                      border border-[#24324a]
                      bg-[#0d1728]
                      flex items-center justify-center
                      text-2xl
                      text-blue-500
                      hover:border-blue-500/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
                      transition-all duration-300
                    "
                  >
                    <FaFacebookF />
                  </a>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-14 h-14
                      rounded-2xl
                      border border-[#24324a]
                      bg-[#0d1728]
                      flex items-center justify-center
                      text-2xl
                      text-white
                      hover:border-white/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(255,255,255,0.20)]
                      transition-all duration-300
                    "
                  >
                    <FaGithub />
                  </a>

                  {/* TWITTER */}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-14 h-14
                      rounded-2xl
                      border border-[#24324a]
                      bg-[#0d1728]
                      flex items-center justify-center
                      text-2xl
                      text-cyan-400
                      hover:border-cyan-400/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.30)]
                      transition-all duration-300
                    "
                  >
                    <FaTwitter />
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-14 h-14
                      rounded-2xl
                      border border-[#24324a]
                      bg-[#0d1728]
                      flex items-center justify-center
                      text-2xl
                      text-pink-500
                      hover:border-pink-500/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(236,72,153,0.30)]
                      transition-all duration-300
                    "
                  >
                    <FaInstagram />
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/8801234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      w-14 h-14
                      rounded-2xl
                      border border-[#24324a]
                      bg-[#0d1728]
                      flex items-center justify-center
                      text-2xl
                      text-green-400
                      hover:border-green-400/40
                      hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(74,222,128,0.30)]
                      transition-all duration-300
                    "
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}