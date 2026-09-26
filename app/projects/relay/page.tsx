"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileCode2,
  Layers3,
  LockKeyhole,
  Server,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const features = [
  {
    icon: LockKeyhole,
    title: "Authentication",
    text: "Secure user authentication with protected API routes and token-based access control.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    text: "RBAC separates permissions so users can only access operations allowed by their role.",
  },
  {
    icon: Layers3,
    title: "Project & task management",
    text: "Projects and tasks are connected through structured relational data with clear ownership and workflows.",
  },
  {
    icon: SlidersHorizontal,
    title: "Filtering & pagination",
    text: "API endpoints support practical filtering, pagination and structured responses for scalable data handling.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "Pydantic",
  "SQLAlchemy",
  "PostgreSQL",
  "Alembic",
  "JWT",
  "RBAC",
  "Pytest",
  "HTTPX",
  "Next.js",
  "TypeScript",
];

const architecture = [
  {
    number: "01",
    title: "Next.js frontend",
    description:
      "A TypeScript-based frontend provides the user interface and communicates with the FastAPI backend through REST APIs.",
  },
  {
    number: "02",
    title: "FastAPI backend",
    description:
      "FastAPI handles routing, validation, authentication, authorization and application business logic.",
  },
  {
    number: "03",
    title: "SQLAlchemy + PostgreSQL",
    description:
      "SQLAlchemy manages the relational data layer while PostgreSQL stores users, projects and tasks.",
  },
  {
    number: "04",
    title: "Alembic migrations",
    description:
      "Database schema changes are tracked through versioned migrations instead of manually modifying production tables.",
  },
];

const engineering = [
  {
    icon: FileCode2,
    title: "Pydantic validation",
    text: "Request and response schemas provide structured validation at the API boundary.",
  },
  {
    icon: Database,
    title: "Database migrations",
    text: "Alembic keeps database schema changes version-controlled and reproducible.",
  },
  {
    icon: CheckCircle2,
    title: "Automated testing",
    text: "Pytest and FastAPI TestClient are used to test API behavior, authentication and validation.",
  },
  {
    icon: Server,
    title: "API documentation",
    text: "FastAPI automatically exposes interactive API documentation for development and testing.",
  },
];

const apiFlow = [
  "Next.js",
  "FastAPI",
  "Pydantic",
  "RBAC",
  "PostgreSQL",
];

export default function RelayPage() {
  return (
    <main className="min-h-screen bg-[#f2eee8] text-[#171512]">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-black/10 bg-white/40 px-5 py-3 shadow-sm backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-black/60 transition-colors duration-300 hover:text-black"
        >
          <ArrowLeft size={15} strokeWidth={1.5} />
          Back
        </Link>

        <span className="text-sm font-semibold tracking-[-0.04em]">
          RELAY
        </span>

        <span className="hidden text-xs text-black/40 sm:block">
          Case study
        </span>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-16">
        {/* Ambient background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[12%] h-96 w-96 rounded-full bg-[#b9a28b]/20 blur-[140px]" />

          <div className="absolute bottom-[5%] right-[5%] h-[28rem] w-[28rem] rounded-full bg-[#8c735d]/10 blur-[160px]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* =====================================================
                LEFT — TITLE
            ====================================================== */}

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-8 text-xs uppercase tracking-[0.2em] text-black/40"
              >
                03 / Selected project
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-[clamp(5rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.08em]"
              >
                Relay
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
                A secure project and task management platform built
                with FastAPI, PostgreSQL and Next.js, with authentication,
                RBAC, migrations and automated API testing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["FastAPI", "PostgreSQL", "Next.js", "RBAC"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-xs text-black/55 backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ),
                )}
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
              {/* Glow */}

              <div className="absolute -inset-8 rounded-[3rem] bg-[#b9a28b]/15 blur-3xl" />

              {/* Browser frame */}

              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/40 p-2 shadow-2xl shadow-black/5 backdrop-blur-xl">
                {/* Browser bar */}

                <div className="flex h-10 items-center gap-1.5 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />

                  <div className="ml-3 h-5 flex-1 rounded-full border border-black/5 bg-black/[0.03]" />
                </div>

                {/* Project image */}

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e8e0d5]">
                  <Image
                    src="/images/projects/relay/hero.png"
                    alt="Relay project and task management interface"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Floating label */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
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
                  FastAPI · PostgreSQL · Next.js
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Overview
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl leading-tight tracking-[-0.05em] md:text-6xl">
                A practical full-stack system built around secure APIs.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/50">
                Relay was built as a complete project and task management
                system to bring together backend concepts — from validation
                and database design to authentication, authorization,
                migrations, testing and frontend integration.
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Backend
                  </p>

                  <p className="mt-2 text-sm">FastAPI</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Database
                  </p>

                  <p className="mt-2 text-sm">PostgreSQL</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Frontend
                  </p>

                  <p className="mt-2 text-sm">Next.js + TypeScript</p>
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
              Core system
            </p>

            <h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-6xl">
              Built around secure workflows.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
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
          SECURITY / RBAC
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 backdrop-blur-xl md:p-14">
            <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/40">
                  <ShieldCheck size={20} strokeWidth={1.4} />
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-black/40">
                  Security
                </p>

                <h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-5xl">
                  Access should be intentional.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/50">
                  Relay separates authentication from authorization.
                  Users must first authenticate before accessing
                  protected resources, while role-based permissions
                  determine which operations they are allowed to perform.
                </p>

                <div className="mt-10 space-y-3">
                  {/* Authentication */}

                  <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/30 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <LockKeyhole size={15} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Authentication
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        JWT-based protected access
                      </p>
                    </div>
                  </div>

                  {/* Authorization */}

                  <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/30 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <ShieldCheck size={15} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Authorization
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        Role-based permissions
                      </p>
                    </div>
                  </div>

                  {/* Ownership */}

                  <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/30 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <Layers3 size={15} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">
                        Resource ownership
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        Controlled project and task access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Architecture
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">
              A clean path from UI to database.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/50">
              Relay follows a layered architecture where the frontend,
              API, validation layer and database work together through
              clearly separated responsibilities.
            </p>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {architecture.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="border-b border-black/10 p-8 md:p-10 md:even:border-l"
              >
                <span className="text-xs text-black/30">
                  {item.number}
                </span>

                <h3 className="mt-8 text-3xl tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-black/45">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Engineering
            </p>

            <h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-6xl">
              The details behind the API.
            </h2>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {engineering.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="border-b border-black/10 p-8 md:p-10 md:even:border-l"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/30">
                    <Icon size={19} strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-8 text-2xl tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-black/45">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          API FLOW
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 backdrop-blur-xl md:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Request flow
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">
              Request → validation → authorization → database.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/50">
              A typical protected operation passes through multiple
              backend layers before data is changed or returned to
              the frontend.
            </p>

            <div className="mt-14 grid gap-3 md:grid-cols-5">
              {apiFlow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-black/10 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/50"
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
          TECHNOLOGY
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Technology
              </p>

              <h2 className="mt-6 text-4xl tracking-[-0.05em] md:text-6xl">
                The stack behind Relay.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/10 bg-white/30 px-5 py-3 text-sm text-black/60 backdrop-blur-md transition-all duration-300 hover:bg-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT I LEARNED
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 backdrop-blur-xl md:p-14">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Development focus
                </p>

                <h2 className="mt-6 text-4xl tracking-[-0.05em] md:text-5xl">
                  From API endpoints to a complete product.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/50">
                  Relay helped connect individual backend concepts into
                  one complete application — authentication, validation,
                  database relationships, authorization, migrations,
                  testing, API documentation and frontend integration.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "REST APIs",
                    "JWT",
                    "RBAC",
                    "Alembic",
                    "Pytest",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/30 px-4 py-2 text-xs text-black/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="px-6 py-32 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">
    <p className="text-xs uppercase tracking-[0.2em] text-black/40">
      Explore more
    </p>

    <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="max-w-4xl text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl">
          More ideas.
          <br />
          <span className="text-black/30">More things I&apos;ve built.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/45">
          A growing collection of projects, experiments and applications
          built while learning, exploring and working across the stack.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/ranafathimapunnol-cyber/relay"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Relay on GitHub"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-6 py-3 text-sm text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
        >
          <FaGithub
            size={17}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          GitHub

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-6 py-3 text-sm text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:text-black"
        >
          Back home

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  </div>
</section>

<footer className="px-6 pb-10 md:px-10 lg:px-16">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-8 text-xs text-black/35 sm:flex-row sm:items-center sm:justify-between">
    <span>Relay</span>

    <span>FastAPI project &amp; task management platform</span>

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