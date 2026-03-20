"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/shinchan6599", icon: Github, label: "GitHub", color: "from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-700" },
  { href: "https://linkedin.com/in/dhyey-bhansali", icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-800" },
  { href: "mailto:dhyeypbhansali@gmail.com", icon: Mail, label: "Email", color: "from-rose-500 to-pink-600" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-fuchsia-500 to-pink-400 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
          Got a project idea, a question, or just want to say hi? Let&apos;s connect!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--card-border)] space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--foreground)]">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--foreground)]">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--foreground)]">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full bg-transparent border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 resize-none"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 space-y-4"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Or find me here</h2>
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-center gap-4 bg-[var(--card)] rounded-2xl p-5 border border-[var(--card-border)] hover:border-transparent hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-[var(--foreground)]">{s.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
