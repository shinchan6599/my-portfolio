"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socials = [
  { href: "https://github.com/shinchan6599", icon: Github, label: "GitHub", handle: "@shinchan6599", color: "from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-700" },
  { href: "https://linkedin.com/in/dhyey-bhansali", icon: Linkedin, label: "LinkedIn", handle: "dhyey-bhansali", color: "from-blue-600 to-blue-800" },
  { href: "https://instagram.com/dhyey.bhansali", icon: Instagram, label: "Instagram", handle: "@dhyey.bhansali", color: "from-pink-500 via-red-500 to-yellow-500" },
  { href: "mailto:dhyeypbhansali@gmail.com", icon: Mail, label: "Email", handle: "dhyeypbhansali@gmail.com", color: "from-rose-500 to-pink-600" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-fuchsia-500 to-pink-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
          Got a project idea, a question, or just want to say hi? Reach out on any of these platforms.
        </p>
      </motion.div>

      {/* Social Links */}
      <div className="max-w-2xl mx-auto space-y-5">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group flex items-center gap-5 bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-lg font-bold text-[var(--foreground)]">{s.label}</span>
                <span className="text-sm text-[var(--muted)]">{s.handle}</span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
