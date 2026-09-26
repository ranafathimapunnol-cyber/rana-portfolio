"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-black/10 px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Experience
            </p>

            <h2 className="mt-5 text-5xl tracking-[-0.06em] md:text-7xl">
              Where I&apos;ve worked.
            </h2>
          </div>

          <p className="max-w-md self-end text-base leading-relaxed text-black/50 md:justify-self-end">
            My experience growing through full-stack development,
            backend engineering and practical product development.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-black/10"
        >
          <div className="grid gap-8 border-b border-black/10 py-10 md:grid-cols-[180px_1fr_180px] md:gap-12">
            {/* Date */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                07/2025 — Present
              </p>
            </div>

            {/* Main */}
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/35 backdrop-blur-md">
                  <Briefcase size={18} strokeWidth={1.4} />
                </div>

                <div>
                  <h3 className="text-2xl tracking-[-0.04em] md:text-3xl">
                    Full Stack Developer Intern
                  </h3>

                  <p className="mt-1 text-sm text-black/45">
                    Zaitoon International Campus
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-7 text-black/50">
                Working across frontend and backend development,
                building APIs, database-driven applications and
                modern web interfaces while developing practical
                full-stack engineering skills.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Django",
                  "FastAPI",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "AI / RAG",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-white/30 px-3 py-1.5 text-xs text-black/55 backdrop-blur-md"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start md:justify-end">
              <span className="text-xs text-black/35">
                Kannur, Kerala
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-black/40">
            Always learning. Always building.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            Work with me
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