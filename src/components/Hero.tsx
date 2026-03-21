"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-lg animate-pulse-glow" />
        <Image
          src="/profile.jpg"
          alt="Dhyey Bhansali"
          width={128}
          height={128}
          className="relative w-32 h-32 rounded-full shadow-2xl object-cover ring-4 ring-white dark:ring-slate-900"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
      >
        Hi, I&apos;m{" "}
        <span className="gradient-text">Dhyey Bhansali</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed"
      >
        Software developer by profession, Problem solver by passion, fueled by adventures in travel and the thrill of sports.
      </motion.p>
    </section>
  );
}
