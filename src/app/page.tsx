"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "../components/Hero";
import {
  User,
  FolderGit2,
  Dumbbell,
  MapPin,
  PenLine,
  MessageCircle,
} from "lucide-react";

const QUICK_LINKS = [
  { href: "/about", title: "About", blurb: "Who I am & what I do.", icon: User, color: "from-blue-500 to-indigo-600" },
  { href: "/projects", title: "Projects & Hackathons", blurb: "College projects and wins.", icon: FolderGit2, color: "from-violet-500 to-purple-600" },
  { href: "/hobbies", title: "Sports & Hobbies", blurb: "Cricket, chess, running & swimming.", icon: Dumbbell, color: "from-emerald-500 to-teal-600" },
  { href: "/travel", title: "Travel", blurb: "25+ countries — tips & experiences.", icon: MapPin, color: "from-pink-500 to-rose-600" },
  { href: "/blog", title: "Blog", blurb: "Binary Business & tech insights.", icon: PenLine, color: "from-cyan-500 to-sky-600" },
  { href: "/contact", title: "Contact", blurb: "Let's connect — coffee in Ahmedabad?", icon: MessageCircle, color: "from-fuchsia-500 to-pink-600" },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Hero />

      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-extrabold mb-10 gradient-text"
        >
          Explore
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block relative bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg shadow-indigo-500/10 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-1.5 text-[var(--foreground)] group-hover:gradient-text transition-colors">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.blurb}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}