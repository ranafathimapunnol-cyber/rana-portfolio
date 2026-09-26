"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-6 pb-8 pt-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <a
              href="#"
              className="text-3xl font-semibold tracking-[-0.06em]"
            >
              RANA
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-black/40">
              Full Stack Developer building modern web applications,
              backend systems and AI-powered products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">
            <a
              href="#work"
              className="text-black/45 transition-colors hover:text-black"
            >
              Work
            </a>

            <a
              href="#about"
              className="text-black/45 transition-colors hover:text-black"
            >
              About
            </a>

            <a
              href="#stack"
              className="text-black/45 transition-colors hover:text-black"
            >
              Stack
            </a>

            <a
              href="#contact"
              className="text-black/45 transition-colors hover:text-black"
            >
              Contact
            </a>

            <a
              href="/resume/Rana-Fathima-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-black/45 transition-colors hover:text-black"
            >
              Resume
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-xs text-black/30 sm:flex-row sm:items-center sm:gap-3">
            <span>© {year} Rana Fathima</span>
            <span className="hidden sm:block">·</span>
            <span>Built with Next.js &amp; TypeScript</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ranafathimapunnol-cyber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
            >
              <FaGithub
                size={15}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ranafathimap/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
            >
              <FaLinkedinIn
                size={14}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="group ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
            >
              <ArrowUp
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}