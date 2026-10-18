
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2"
      >
        <nav className="flex items-center justify-between rounded-full border border-black/10 bg-white/40 px-5 py-3 shadow-sm backdrop-blur-xl">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[-0.04em] transition-opacity hover:opacity-60"
          >
            RANA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-black/45 transition-colors duration-300 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className="hidden rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-medium text-black/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-black md:block"
          >
            Let&apos;s talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/30 text-black/65 backdrop-blur-md transition-all duration-300 hover:bg-white/70 md:hidden"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed left-4 right-4 top-[88px] z-40 md:hidden"
          >
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#f2eee8]/90 p-3 shadow-lg backdrop-blur-2xl">
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className="rounded-2xl px-4 py-4 text-base text-black/60 transition-colors duration-200 hover:bg-black/5 hover:text-black"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: links.length * 0.05,
                  }}
                  className="mt-2 rounded-2xl border border-black/10 bg-white/50 px-4 py-4 text-center text-sm font-medium text-black/70 backdrop-blur-md transition-all duration-300 hover:bg-white/80"
                >
                  Let&apos;s talk
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
