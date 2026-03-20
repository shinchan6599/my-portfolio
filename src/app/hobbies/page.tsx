"use client";

import { motion } from "framer-motion";
import { Dumbbell, Trophy, Timer, PenLine } from "lucide-react";

const hobbies = [
  {
    icon: Dumbbell,
    title: "Cricket",
    color: "from-emerald-500 to-teal-600",
    items: [
      "Former U-19 player for the Central Board of Cricket, Ahmedabad (CBCA).",
    ],
  },
  {
    icon: Trophy,
    title: "Chess",
    color: "from-amber-500 to-orange-600",
    items: [
      "FIDE-rated and rated 2100 on Chess.com.",
    ],
  },
  {
    icon: Timer,
    title: "Running & Swimming",
    color: "from-blue-500 to-indigo-600",
    items: [
      "Completed a half marathon in 2h 28m.",
    ],
  },
  {
    icon: PenLine,
    title: "Content Creation",
    color: "from-pink-500 to-rose-600",
    items: [
      "Creator of the Binary Business series on LinkedIn, breaking down how real software companies scale and monetize.",
    ],
  },
];

export default function HobbiesPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-12 lg:px-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          Sports &amp; Hobbies
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
          I&apos;m passionate about all sports—cricket, chess, running, and swimming.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbies.map((hobby, i) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group bg-[var(--card)] rounded-3xl p-8 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-3xl`} />
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${hobby.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">{hobby.title}</h2>
                <ul className="space-y-2">
                  {hobby.items.map((item, j) => (
                    <li key={j} className="text-[var(--muted)] leading-relaxed flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
