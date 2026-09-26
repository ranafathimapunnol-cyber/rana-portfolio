"use client";

import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Brain,
  Cloud,
} from "lucide-react";

const stack = [
  {
    number: "01",
    title: "Backend",
    description:
      "Building secure APIs, business logic and scalable backend systems.",
    icon: Server,
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
    ],
  },
  {
    number: "02",
    title: "Frontend",
    description:
      "Creating responsive, modern interfaces with component-based architecture.",
    icon: Layout,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "03",
    title: "Data",
    description:
      "Working with relational databases, NoSQL databases and caching systems.",
    icon: Database,
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    number: "04",
    title: "AI Engineering",
    description:
      "Building AI-powered applications using retrieval, embeddings and language models.",
    icon: Brain,
    technologies: [
      "RAG",
      "LLMs",
      "Embeddings",
      "Qdrant",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    number: "05",
    title: "DevOps & Tools",
    description:
      "Developing, versioning, containerizing and deploying applications.",
    icon: Cloud,
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Nginx",
      "AWS",
      "Linux",
    ],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Technology
            </p>

            <h2 className="mt-6 text-5xl tracking-[-0.06em] md:text-7xl">
              What I build with.
            </h2>
          </div>

          <p className="max-w-md self-end text-base leading-relaxed text-black/50 md:justify-self-end">
            A practical stack spanning product development, backend
            engineering, AI systems and infrastructure.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid border-t border-black/10 md:grid-cols-2">
          {stack.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-b border-black/10 p-8 md:p-10 md:even:border-l"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/30 backdrop-blur-md transition-all duration-300 group-hover:bg-white/60">
                    <Icon size={19} strokeWidth={1.4} />
                  </div>

                  <span className="text-xs text-black/25">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-10 text-3xl tracking-[-0.05em]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-md text-sm leading-relaxed text-black/45">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 bg-white/30 px-3 py-1.5 text-xs text-black/55 backdrop-blur-md transition-all duration-300 group-hover:bg-white/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}