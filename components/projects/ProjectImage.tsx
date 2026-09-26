"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export default function ProjectImage({
  src,
  alt,
}: ProjectImageProps) {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/30 shadow-sm backdrop-blur-xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Soft glass overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}