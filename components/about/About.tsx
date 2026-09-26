"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-black/10 px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            About me
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Building with curiosity,
            <br />
            <span className="text-black/30">learning with purpose.</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.025em] text-black/70 md:text-3xl">
              I&apos;m Rana Fathima, a Full Stack Developer focused on
              building modern web applications and practical digital
              products.
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-black/50">
              <p>
                I work across the full development lifecycle — from
                designing interfaces and building APIs to working with
                databases, authentication, deployment and AI-powered
                features.
              </p>

              <p>
                My primary backend experience is with Python, Django and
                FastAPI, while I use React, Next.js and TypeScript to build
                responsive and thoughtful frontend experiences.
              </p>

              <p>
                I&apos;m especially interested in systems that combine
                software engineering with AI, including RAG, embeddings,
                vector databases and LLM-powered applications.
              </p>
            </div>
          </motion.div>

          {/* Side information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Location */}
            <div className="rounded-3xl border border-black/10 bg-white/30 p-6 backdrop-blur-md">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40">
                <MapPin size={17} strokeWidth={1.5} />
              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                Based in
              </p>

              <p className="mt-2 text-lg tracking-[-0.02em]">
                Kannur, Kerala, India
              </p>
            </div>

            {/* Current role */}
            <div className="rounded-3xl border border-black/10 bg-white/30 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                Currently
              </p>

              <p className="mt-2 text-lg tracking-[-0.02em]">
                Full Stack Developer Intern
              </p>

              <p className="mt-1 text-sm text-black/45">
                Zaitoon International Campus
              </p>
            </div>

            {/* Focus */}
            <div className="rounded-3xl border border-black/10 bg-white/30 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                Focus
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Web Applications",
                  "Backend Systems",
                  "AI / RAG",
                  "APIs",
                  "Product Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/35 px-3 py-2 text-xs text-black/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-black/10 pt-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-3xl leading-tight tracking-[-0.04em] md:text-4xl">
              I&apos;m interested in turning ideas into useful,
              well-engineered products.
            </p>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              Let&apos;s connect
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 