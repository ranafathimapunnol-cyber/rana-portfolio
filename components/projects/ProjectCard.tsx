"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white/30 backdrop-blur-xl"
    >
      {/* =========================
          PROJECT IMAGE
      ========================== */}
      <div className="relative h-72 overflow-hidden bg-[#e7dfd4] md:h-80">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          priority={index === 0}
          sizes={
            index === 0
              ? "(max-width: 1024px) 100vw, 1200px"
              : "(max-width: 1024px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

        {/* Top number */}
        <span className="absolute left-7 top-7 z-10 text-xs font-medium text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category */}
        <span className="absolute bottom-6 left-6 z-10 rounded-full border border-white/30 bg-black/15 px-3 py-1.5 text-xs text-white backdrop-blur-md">
          {project.category}
        </span>

        {/* Open arrow */}
        <div className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight size={17} strokeWidth={1.5} />
        </div>
      </div>

      {/* =========================
          PROJECT CONTENT
      ========================== */}
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-3xl tracking-[-0.05em] md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-black/50">
              {project.description}
            </p>
          </div>

          <span className="hidden text-xs text-black/25 md:block">
            2026
          </span>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/10 bg-white/35 px-3 py-1.5 text-xs text-black/50 backdrop-blur-md"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-3">
          <a
            href={project.href}
            className="group/link inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-5 py-2.5 text-sm font-medium text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-black"
          >
            View project

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-black"
            >
              <FaGithub size={17} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}