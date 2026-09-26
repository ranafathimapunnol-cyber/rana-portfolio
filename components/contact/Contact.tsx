"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-black/10 px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Contact
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-black/30">Let&apos;s build it.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
            I&apos;m open to opportunities, collaborations and interesting
            projects where I can learn, contribute and build meaningful
            products.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <motion.a
            href="mailto:ranafathimapunnol@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group rounded-3xl border border-black/10 bg-white/35 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/40">
                <Mail size={18} strokeWidth={1.5} />
              </div>

              <ArrowUpRight
                size={19}
                strokeWidth={1.4}
                className="text-black/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
              />
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.15em] text-black/35">
              Email
            </p>

            <p className="mt-2 break-all text-lg tracking-[-0.02em] text-black/75">
              ranafathimapunnol@gmail.com
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-black/10 bg-white/35 p-7 backdrop-blur-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/40">
              <MapPin size={18} strokeWidth={1.5} />
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.15em] text-black/35">
              Based in
            </p>

            <p className="mt-2 text-lg tracking-[-0.02em] text-black/75">
              Kannur, Kerala, India
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex flex-col gap-5 rounded-3xl border border-black/10 bg-white/25 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-black/35">
              Find me online
            </p>

            <p className="mt-2 text-sm text-black/50">
              Connect with me and explore what I&apos;m building.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/ranafathimapunnol-cyber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/40 text-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
            >
              <FaGithub
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ranafathimap/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/40 text-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
            >
              <FaLinkedinIn
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-20 flex flex-col gap-6 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-2xl text-3xl leading-tight tracking-[-0.045em] md:text-4xl">
            Open to opportunities,
            <br />
            <span className="text-black/30">
              collaborations &amp; interesting projects.
            </span>
          </p>

          <a
            href="mailto:ranafathimapunnol@gmail.com"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/45 px-6 py-3 text-sm font-medium text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black hover:shadow-md"
          >
            Let&apos;s work together
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}