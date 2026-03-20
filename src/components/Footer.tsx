"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { href: "https://github.com/shinchan6599", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/dhyey-bhansali", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:dhyeypbhansali@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Dhyey Bhansali. Built with Next.js & ❤️
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-slate-200/80 dark:hover:bg-slate-700/60 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
