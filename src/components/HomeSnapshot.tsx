"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, Code2, Github, MapPin } from "lucide-react";
import { destinations } from "../app/travel/data";

type Tile = {
  icon: React.ElementType;
  value: string;
  label: string;
  href: string;
  color: string;
};

export default function HomeSnapshot() {
  const [tiles, setTiles] = useState<Tile[] | null>(null);

  useEffect(() => {
    let active = true;
    const countries = destinations.length;

    Promise.all([
      fetch("/api/chess").then((r) => (r.ok ? r.json() : null)).catch(() => null),
      fetch("/api/cp").then((r) => (r.ok ? r.json() : null)).catch(() => null),
      fetch("/api/github").then((r) => (r.ok ? r.json() : null)).catch(() => null),
    ]).then(([chess, cp, github]) => {
      if (!active) return;
      const next: Tile[] = [];

      const blitz = chess?.ratings?.blitz?.current;
      if (blitz) {
        next.push({ icon: Crown, value: String(blitz), label: "Chess rating (blitz)", href: "/about", color: "from-amber-500 to-orange-600" });
      }

      const solved = cp?.leetcode?.totalSolved;
      if (solved) {
        next.push({ icon: Code2, value: String(solved), label: "LeetCode solved", href: "/about", color: "from-violet-500 to-purple-600" });
      }

      const repos = github?.profile?.publicRepos;
      if (repos) {
        next.push({ icon: Github, value: String(repos), label: "GitHub repos", href: "/projects", color: "from-gray-600 to-gray-800" });
      }

      next.push({ icon: MapPin, value: `${countries}`, label: "Countries visited", href: "/travel", color: "from-emerald-500 to-teal-600" });

      setTiles(next);
    });

    return () => {
      active = false;
    };
  }, []);

  if (!tiles) return null;

  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tiles.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={t.href}
                className="group flex flex-col items-center text-center bg-[var(--card)] rounded-2xl p-5 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${t.color} text-white mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-extrabold text-[var(--foreground)] tabular-nums">{t.value}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{t.label}</div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
