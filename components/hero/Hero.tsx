"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-10 lg:px-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-[#b9a28b]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-[#8c735d]/10 blur-[140px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6d8a68]/50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6d8a68]" />
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/45">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-[clamp(4rem,12vw,11rem)] font-medium leading-[0.78] tracking-[-0.075em]">
            RANA
            <br />
            <span className="text-black/25">FATHIMA</span>
          </h1>
        </motion.div>

        {/* Content */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-end">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="mb-4 flex items-center gap-2 text-black/40">
              <span className="text-xs uppercase tracking-[0.2em]">
                Full Stack Developer
              </span>
            </div>

            <p className="max-w-xl text-xl leading-relaxed tracking-[-0.025em] text-black/65 md:text-2xl">
              I build modern web applications, scalable backend systems,
              and AI-powered digital products using Python and TypeScript.
            </p>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-sm text-black/40">
              <MapPin size={15} strokeWidth={1.5} />
              <span>Kannur, Kerala, India</span>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-2 md:justify-end"
          >
            {[
              "Python",
              "Django",
              "FastAPI",
              "React",
              "Next.js",
              "TypeScript",
              "AI / RAG",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/10 bg-white/30 px-4 py-2 text-xs text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          {/* View Work */}
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[#171512] px-6 py-3 text-sm font-medium text-[#f2eee8] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View my work

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Resume */}
          <a
            href="/resume/Rana-Fathima-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-6 py-3 text-sm font-medium text-black/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
          >
            View Resume
          </a>

{/* GitHub */}
<a
  href="https://github.com/ranafathimapunnol-cyber"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:text-black"
>
  <FaGithub
    size={18}
    className="transition-transform duration-300 group-hover:scale-110"
  />
</a>

{/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/ranafathimap/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:text-black"
>
  <FaLinkedinIn
    size={17}
    className="transition-transform duration-300 group-hover:scale-110"
  />
</a>  </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 right-0 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownRight size={30} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}