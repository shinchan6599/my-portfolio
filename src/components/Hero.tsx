"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react";

const ROLES = [
  "Senior Software Engineer @ Anyscale",
  "Competitive Programmer",
  "FIDE-rated Chess Player",
  "Traveler across 24 countries",
];

const SOCIALS = [
  { href: "https://github.com/shinchan6599", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/dhyey-bhansali", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/dhyey.bhansali", icon: Instagram, label: "Instagram" },
  { href: "mailto:dhyeypbhansali@gmail.com", icon: Mail, label: "Email" },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex justify-center min-h-[1.5em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="gradient-text font-bold"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

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
          priority
          className="relative w-32 h-32 rounded-full shadow-2xl object-cover ring-4 ring-white dark:ring-slate-900"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
      >
        Hi, I&apos;m <span className="gradient-text">Dhyey Bhansali</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-xl md:text-2xl mb-5"
      >
        <RoleRotator />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed"
      >
        Software developer by profession, Problem solver by passion, fueled by adventures in travel and the thrill of sports.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-8"
      >
        <a
          href="/Dhyey Bhansali Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <Download className="h-4 w-4" /> Download Résumé
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] rounded-xl hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail className="h-4 w-4" /> Get in Touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center justify-center gap-2 mt-6"
      >
        {SOCIALS.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2.5 rounded-xl text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}
