
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Languages,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    title: "M.A. Arabic",
    institution: "IGNOU",
    period: "07/2026 – Present",
    category: "POSTGRADUATE",
    description:
      "Pursuing postgraduate studies in Arabic language, literature, and communication.",
    icon: BookOpen,
  },
  {
    title: "Full Stack Development",
    institution: "Zaitoon International Girls Campus",
    period: "08/2025 – 10/2026",
    category: "TECHNICAL TRAINING",
    description:
      "Developing practical skills in Python, Django, REST APIs, React, Next.js, databases, and full-stack application deployment.",
    icon: Code2,
  },
  {
    title: "Diploma in Secretarial Practice",
    institution: "Arabnet Academy",
    period: "04/2025 – 07/2025",
    category: "DIPLOMA",
    description:
      "Trained in English-to-Arabic and Arabic-to-English translation, along with English and Arabic typing skills.",
    icon: Languages,
  },
  {
    title: "B.A. Sociology",
    institution: "University of Calicut",
    period: "2022 – 2025",
    category: "UNDERGRADUATE",
    description:
      "Studied society, social institutions, human behavior, and social research.",
    icon: GraduationCap,
  },
  {
    title: "Higher Secondary Education",
    institution: "Knowledge City",
    period: "2020 – 2022",
    category: "HIGHER SECONDARY",
    description:
      "Completed higher secondary education, building a foundation for further academic and professional learning.",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-32 overflow-hidden border-t border-black/10 px-6 py-28 md:px-10 md:py-32 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Education
          </p>

          <h2
            id="education-heading"
            className="mt-6 max-w-4xl text-5xl leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-8xl"
          >
            Learning today,
            <br />
            <span className="text-black/30">building tomorrow.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-black/50 md:text-lg">
            My journey combines academic learning, language skills,
            professional training, and hands-on software development.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.1,
                }}
                className="group flex h-full flex-col rounded-3xl border border-black/10 bg-white/35 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 hover:shadow-lg md:p-8"
              >
                {/* Icon and arrow */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/50">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="text-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />
                </div>

                {/* Qualification */}
                <p className="mt-8 text-[10px] font-medium tracking-[0.18em] text-black/40">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl leading-tight tracking-[-0.04em] text-black/80">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.institution}
                </p>

                <div className="my-6 h-px w-full bg-black/10" />

                <p className="flex-1 text-sm leading-7 text-black/50">
                  {item.description}
                </p>

                {/* Duration and card number */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-xs text-black/60">
                    {item.period}
                  </span>

                  <span className="text-xs text-black/35">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(education.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 rounded-3xl border border-black/10 bg-white/25 p-6 backdrop-blur-md md:flex md:items-center md:justify-between md:p-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-black/35">
              Beyond the classroom
            </p>

            <p className="mt-2 text-lg tracking-[-0.02em] text-black/75">
              Combining languages, technology, and creativity.
            </p>
          </div>

          <a
            href="#work"
            className="mt-5 inline-flex items-center gap-2 text-sm text-black/55 transition-colors hover:text-black md:mt-0"
          >
            Explore my projects
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
