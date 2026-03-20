"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
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
        className="text-lg text-[var(--muted)] max-w-2xl mb-8 leading-relaxed"
      >
        Problem solver by passion, software developer by profession, fueled by adventures in travel and the thrill of sports.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
