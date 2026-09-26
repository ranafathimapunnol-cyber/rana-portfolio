"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "DiscoverEase",
    category: "AI • Tourism",
    description:
      "An AI-powered Kerala tourism platform for discovering hidden destinations, local insights and personalized trips.",
    technologies: ["Django", "React", "RAG", "Qdrant"],
    href: "/projects/discoverease",
    github:
      "https://github.com/ranafathimapunnol-cyber/discoverease",
    image: "/images/projects/discoverease/hero.png",
  },
  {
    title: "Rapido",
    category: "E-Commerce",
    description:
      "A full-stack footwear commerce platform with authentication, product management, secure APIs and real-time features.",
    technologies: ["Django", "DRF", "React", "PostgreSQL"],
    href: "/projects/rapido",
    github:
      "https://github.com/ranafathimapunnol-cyber/rapido-ecommerce",
    image: "/images/projects/rapido/hero.png",
  },
  {
    title: "Relay",
    category: "Productivity",
    description:
      "A secure project and task management platform built with FastAPI, PostgreSQL and Next.js.",
    technologies: ["FastAPI", "PostgreSQL", "Next.js"],
    href: "/projects/relay",
    github:
      "https://github.com/ranafathimapunnol-cyber/relay",
    image: "/images/projects/relay/hero.png",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="px-6 py-32 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Selected work
            </p>

            <h2 className="mt-5 text-5xl tracking-[-0.06em] md:text-7xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <p className="max-w-md self-end text-base leading-relaxed text-black/50 md:justify-self-end">
            A selection of applications where I worked across
            frontend, backend, databases, infrastructure and AI.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}