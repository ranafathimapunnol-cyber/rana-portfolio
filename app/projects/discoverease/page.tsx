"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Database,
  Map,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const technologies = [
  "Django",
  "Django REST Framework",
  "React",
  "PostgreSQL",
  "RAG",
  "LLMs",
  "Embeddings",
  "Qdrant",
  "Redis",
  "Celery",
  "Google OAuth",
  "reCAPTCHA",
];

const features = [
  {
    icon: Map,
    title: "Hidden destination discovery",
    text: "Explore lesser-known destinations across Kerala through a focused tourism discovery experience.",
  },
  {
    icon: Bot,
    title: "AI-powered discovery",
    text: "An AI layer helps users interact with destination information using retrieval-augmented generation.",
  },
  {
    icon: Database,
    title: "Vector search",
    text: "Destination knowledge is transformed into embeddings and stored in Qdrant for semantic retrieval.",
  },
  {
    icon: Sparkles,
    title: "Personalized trip planning",
    text: "Users can discover destinations and build trips around their interests and selected locations.",
  },
];

const roles = [
  {
    number: "01",
    title: "Tourist / User",
    description:
      "Discover destinations, interact with the AI assistant, create wishlists, submit reviews and plan trips.",
  },
  {
    number: "02",
    title: "Guide",
    description:
      "Provides local knowledge and destination-related suggestions through the guide workflow.",
  },
  {
    number: "03",
    title: "Staff",
    description:
      "Handles district-level tourism content and operations according to assigned access.",
  },
  {
    number: "04",
    title: "Admin",
    description:
      "Provides system-wide administrative access across the platform and all districts.",
  },
];

const ragSteps = [
  "User query",
  "Embedding",
  "Qdrant",
  "Retrieved context",
  "LLM response",
];

export default function DiscoverEasePage() {
  return (
    <main className="min-h-screen bg-[#f2eee8] text-[#171512]">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-black/10 bg-white/40 px-5 py-3 backdrop-blur-xl">

        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Back
        </Link>

        <span className="text-sm font-semibold tracking-[-0.04em]">
          DISCOVEREASE
        </span>

        <a
          href="#overview"
          className="hidden text-xs text-black/45 transition-colors hover:text-black sm:block"
        >
          Case study
        </a>

      </nav>
{/* =========================================================
    HERO
========================================================= */}

<section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-16">

  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">

    <div className="absolute left-[5%] top-[15%] h-96 w-96 rounded-full bg-[#b9a28b]/20 blur-[140px]" />

    <div className="absolute bottom-[5%] right-[5%] h-[28rem] w-[28rem] rounded-full bg-[#8c735d]/10 blur-[160px]" />

  </div>

  <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">

    <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

      {/* =====================================================
          LEFT — PROJECT TITLE
      ====================================================== */}

      <div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-xs uppercase tracking-[0.2em] text-black/40"
        >
          01 / Selected project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em]"
        >
          Discover
          <br />
          <span className="text-black/30">Ease.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 max-w-xl text-lg leading-relaxed tracking-[-0.02em] text-black/60 md:text-xl"
        >
          An AI-powered Kerala tourism platform designed to help
          travelers discover hidden destinations, local insights
          and personalized experiences.
        </motion.p>

        {/* Tags */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {["AI", "Tourism", "RAG", "Full Stack"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-xs text-black/55 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </motion.div>

      </div>

      {/* =====================================================
          RIGHT — PROJECT IMAGE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >

        {/* Glow behind image */}

        <div className="absolute -inset-8 rounded-[3rem] bg-[#b9a28b]/15 blur-3xl" />

        {/* Browser/project frame */}

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/40 p-2 shadow-2xl shadow-black/5 backdrop-blur-xl">

          {/* Browser top bar */}

          <div className="flex h-10 items-center gap-1.5 px-3">

            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/10" />

            <div className="ml-3 h-5 flex-1 rounded-full border border-black/5 bg-black/[0.03]" />

          </div>

          {/* Image */}

          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e8e0d5]">

            <Image
              src="/images/projects/discoverease/hero.png"
              alt="DiscoverEase project preview"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

        {/* Floating label */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/10 bg-white/55 px-5 py-4 shadow-lg backdrop-blur-xl sm:block"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
            Built with
          </p>

          <p className="mt-1 text-sm text-black/65">
            Django · React · RAG
          </p>
        </motion.div>

      </motion.div>

    </div>

  </div>

</section>

  

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section
        id="overview"
        className="px-6 py-32 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Overview
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl leading-tight tracking-[-0.05em] md:text-6xl">
                Making Kerala&apos;s lesser-known places easier to discover.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/50">
                DiscoverEase brings destination discovery, community
                knowledge and AI-assisted trip planning together in one
                platform. The project combines a modern frontend with a
                Django backend and an AI retrieval layer.
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Platform
                  </p>

                  <p className="mt-2 text-sm">
                    Web application
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Backend
                  </p>

                  <p className="mt-2 text-sm">
                    Django + DRF
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    AI layer
                  </p>

                  <p className="mt-2 text-sm">
                    RAG + Qdrant
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CORE FEATURES
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Core experience
            </p>

            <h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-6xl">
              Built around discovery.
            </h2>

          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-b border-black/10 p-8 md:p-12 md:even:border-l"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/30">
                    <Icon size={19} strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-10 text-2xl tracking-[-0.04em]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-black/45">
                    {feature.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          AI / RAG ARCHITECTURE
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 backdrop-blur-xl md:p-14">

            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              AI architecture
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">
              Retrieval before generation.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/50">
              Destination information is converted into embeddings and
              indexed in a vector database. User queries can retrieve
              relevant context before an LLM generates a response.
            </p>

            <div className="mt-14 grid gap-3 md:grid-cols-5">

              {ragSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-black/10 bg-white/35 p-5"
                >

                  <span className="text-xs text-black/30">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-sm font-medium">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

   {/* =========================================================
    ROLES & ACCESS CONTROL
========================================================= */}

<section className="px-6 py-32 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-16">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/30">
          <ShieldCheck size={18} strokeWidth={1.4} />
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-black/40">
          Role-based access
        </p>
      </div>

      <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">
        One platform, different levels of access.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/50">
        DiscoverEase uses role-based access control to separate
        responsibilities across the platform — from complete system
        administration to tourism management and traveler experiences.
      </p>
    </div>

    {/* Role hierarchy */}

    <div className="relative">

      {/* Connecting line */}
      <div className="absolute left-[23px] top-10 hidden h-[calc(100%-80px)] w-px bg-black/10 md:block" />

      <div className="space-y-4">

        {/* ADMIN */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[1.5rem] border border-black/10 bg-white/35 p-6 backdrop-blur-xl md:p-8"
        >
          <div className="flex gap-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f2eee8]">
              <ShieldCheck size={19} strokeWidth={1.4} />
            </div>

            <div className="flex-1">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    Level 01
                  </p>

                  <h3 className="mt-1 text-2xl tracking-[-0.04em] md:text-3xl">
                    Admin
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[11px] text-black/50">
                  Full access
                </span>

              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/50">
                Has complete access to the DiscoverEase platform and
                manages the overall system, users, staff, guides,
                destinations and platform operations.
              </p>

            </div>
          </div>
        </motion.div>

        {/* STAFF */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative ml-0 rounded-[1.5rem] border border-black/10 bg-white/25 p-6 backdrop-blur-xl md:ml-12 md:p-8"
        >
          <div className="flex gap-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/50">
              <Users size={19} strokeWidth={1.4} />
            </div>

            <div className="flex-1">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    Level 02
                  </p>

                  <h3 className="mt-1 text-2xl tracking-[-0.04em] md:text-3xl">
                    Staff
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[11px] text-black/50">
                  Guide management
                </span>

              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/50">
                Manages and oversees guides within the DiscoverEase
                platform, supporting guide-related operations and
                administration.
              </p>

            </div>
          </div>
        </motion.div>

        {/* GUIDE */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative ml-0 rounded-[1.5rem] border border-black/10 bg-white/20 p-6 backdrop-blur-xl md:ml-24 md:p-8"
        >
          <div className="flex gap-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/50">
              <Map size={19} strokeWidth={1.4} />
            </div>

            <div className="flex-1">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    Level 03
                  </p>

                  <h3 className="mt-1 text-2xl tracking-[-0.04em] md:text-3xl">
                    Guide
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[11px] text-black/50">
                  14 districts
                </span>

              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/50">
                Works with tourism information across Kerala&apos;s
                14 districts, contributing local knowledge,
                destination information and guide-related content.
              </p>

            </div>
          </div>
        </motion.div>

        {/* TOURIST */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative ml-0 rounded-[1.5rem] border border-black/10 bg-white/15 p-6 backdrop-blur-xl md:ml-36 md:p-8"
        >
          <div className="flex gap-6">

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/50">
              <Sparkles size={19} strokeWidth={1.4} />
            </div>

            <div className="flex-1">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                    Level 04
                  </p>

                  <h3 className="mt-1 text-2xl tracking-[-0.04em] md:text-3xl">
                    Tourist / User
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[11px] text-black/50">
                  Traveler
                </span>

              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/50">
                The traveler-facing role. Users can discover hidden
                destinations, interact with AI-powered features,
                create wishlists, submit reviews and plan trips.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </div>

    {/* Summary */}

    <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">

      <div className="bg-[#f2eee8] p-7">
        <p className="text-3xl tracking-[-0.05em]">
          Admin
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-black/35">
          Full system access
        </p>
      </div>

      <div className="bg-[#f2eee8] p-7">
        <p className="text-3xl tracking-[-0.05em]">
          Staff
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-black/35">
          Manages guides
        </p>
      </div>

      <div className="bg-[#f2eee8] p-7">
        <p className="text-3xl tracking-[-0.05em]">
          Guides
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-black/35">
          14 Kerala districts
        </p>
      </div>

      <div className="bg-[#f2eee8] p-7">
        <p className="text-3xl tracking-[-0.05em]">
          Tourists
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-black/35">
          Discover & travel
        </p>
      </div>

    </div>

  </div>
</section>
      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Technology
          </p>

          <h2 className="mt-6 text-4xl tracking-[-0.05em] md:text-6xl">
            Built across the stack.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-black/10 bg-white/30 px-5 py-3 text-sm text-black/60 backdrop-blur-md"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          PROJECT CTA
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">

          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Explore
          </p>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-3xl text-5xl tracking-[-0.06em] md:text-7xl">
              See the project in action.
            </h2>

            <div className="flex flex-wrap gap-3">

           <a
  href="https://github.com/ranafathimapunnol-cyber/discoverease"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View DiscoverEase on GitHub"
  className="group inline-flex items-center gap-2 rounded-full bg-[#beb4a4] px-6 py-3 text-sm text-[#f2eee8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a99d8b]"
>
  <FaGithub
    size={17}
    className="transition-transform duration-300 group-hover:scale-110"
  />

  GitHub

  <ArrowUpRight
    size={16}
    strokeWidth={1.5}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm transition-colors duration-300 hover:bg-black/5"
              >
                Back home
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="px-6 pb-10 md:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-8 text-xs text-black/35 sm:flex-row sm:items-center sm:justify-between">

          <span>
            DiscoverEase
          </span>

          <span>
            AI-powered Kerala tourism platform
          </span>

          <Link
            href="/"
            className="transition-colors hover:text-black"
          >
            Rana Fathima
          </Link>

        </div>

      </footer>

    </main>
  );
}