"use client";

import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Server,
  ShieldCheck,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const features = [
  {
    icon: ShoppingBag,
    title: "Product management",
    text: "A structured product system for managing footwear, categories, pricing, inventory and product information.",
  },
  {
    icon: Lock,
    title: "Authentication",
    text: "Secure user authentication and protected application flows for customers and management operations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure APIs",
    text: "REST APIs built with Django REST Framework with controlled access to application resources.",
  },
  {
    icon: Zap,
    title: "Real-time features",
    text: "Real-time communication capabilities using Socket.IO alongside asynchronous backend operations.",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "PostgreSQL",
  "Redis",
  "Socket.IO",
  "Celery",
  "Nginx",
  "Gunicorn",
  "Daphne",
  "Ubuntu",
];

const architecture = [
  {
    number: "01",
    title: "Frontend",
    description:
      "React provides the customer-facing interface and interactive shopping experience.",
  },
  {
    number: "02",
    title: "API layer",
    description:
      "Django REST Framework exposes structured APIs for authentication, products, users and commerce workflows.",
  },
  {
    number: "03",
    title: "Database",
    description:
      "PostgreSQL stores structured application data including users, products and commerce-related records.",
  },
  {
    number: "04",
    title: "Supporting services",
    description:
      "Redis, Socket.IO and asynchronous processing support real-time and background application functionality.",
  },
];

export default function RapidoPage() {
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
          RAPIDO
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
                02 / Selected project
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em]"
              >
                Rapido
                <br />
                <span className="text-black/30">Commerce.</span>
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
                A full-stack footwear e-commerce platform built to
                handle product management, authentication, secure APIs
                and real-time application features.
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
                {[
                  "E-Commerce",
                  "Django",
                  "React",
                  "Full Stack",
                ].map((item) => (
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
              {/* Glow */}
              <div className="absolute -inset-8 rounded-[3rem] bg-[#b9a28b]/15 blur-3xl" />

              {/* Browser/project frame */}
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/40 p-2 shadow-2xl shadow-black/5 backdrop-blur-xl">
                {/* Browser bar */}
                <div className="flex h-10 items-center gap-1.5 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/10" />

                  <div className="ml-3 h-5 flex-1 rounded-full border border-black/5 bg-black/[0.03]" />
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e8e0d5]">
                  <NextImage
                    src="/images/projects/rapido/hero.png"
                    alt="Rapido footwear e-commerce project preview"
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
                  Django · React · PostgreSQL
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
                A complete commerce experience across the stack.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/50">
                Rapido is a full-stack footwear e-commerce application
                designed to cover the core workflows of a modern online
                store. The project combines a React frontend with a
                Django REST backend, PostgreSQL and supporting real-time
                and background services.
              </p>

              <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Frontend
                  </p>

                  <p className="mt-2 text-sm">React</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Backend
                  </p>

                  <p className="mt-2 text-sm">Django + DRF</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/35">
                    Database
                  </p>

                  <p className="mt-2 text-sm">PostgreSQL</p>
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
              Built for commerce.
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
          ARCHITECTURE
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Architecture
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl tracking-[-0.05em] md:text-6xl">
              From interface to infrastructure.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/50">
              The application is structured as multiple cooperating
              layers, allowing the frontend, API, database and
              supporting services to work together as one product.
            </p>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {architecture.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          TECH STACK
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Technology
              </p>

              <h2 className="mt-6 text-4xl tracking-[-0.05em] md:text-6xl">
                The stack behind Rapido.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
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
        </div>
      </section>

      {/* =========================================================
          ENGINEERING
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-black/10 bg-white/25 p-8 backdrop-blur-xl md:p-14">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/40">
                  <Server size={20} strokeWidth={1.4} />
                </div>

                <h2 className="mt-8 text-4xl tracking-[-0.05em] md:text-5xl">
                  Beyond the UI.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-black/50">
                  The project gave me hands-on experience working
                  beyond the frontend — designing APIs, structuring
                  relational data, handling authentication, working
                  with asynchronous services and preparing the
                  application for deployment.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "REST APIs",
                    "Authentication",
                    "PostgreSQL",
                    "Real-time",
                    "Background tasks",
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

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-black/10 pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Explore
          </p>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-5xl tracking-[-0.06em] md:text-7xl">
              Explore the code,
              <br />
              see how it works.
            </h2>

            <div className="flex flex-wrap gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/ranafathimapunnol-cyber/rapido-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#beb4a4] px-6 py-3 text-sm text-[#f2eee8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a99d8c]"
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

              {/* Back home */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/30 px-6 py-3 text-sm text-black/65 backdrop-blur-md transition-all duration-300 hover:bg-white/60"
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
          <span>Rapido</span>

          <span>Full-stack footwear e-commerce platform</span>

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