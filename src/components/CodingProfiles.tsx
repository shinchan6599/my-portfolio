"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Star, ExternalLink } from "lucide-react";

type LeetCode = {
  username: string;
  url: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  totalEasy: number | null;
  totalMedium: number | null;
  totalHard: number | null;
  ranking: number | null;
  contestRating: number | null;
  contestTopPercent: number | null;
  attended: number | null;
};

type Codeforces = {
  handle: string;
  url: string;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  maxRank: string | null;
  contests: number | null;
};

type CodeChef = {
  username: string;
  url: string;
  rating: number;
  maxRating: number | null;
  stars: number;
};

type CPData = {
  leetcode: LeetCode | null;
  codeforces: Codeforces | null;
  codechef: CodeChef | null;
};

// Codeforces rank → title colour (mirrors the site's own rank colours).
function cfColor(rank: string | null): string {
  if (!rank) return "#9ca3af";
  const r = rank.toLowerCase();
  if (r.includes("legendary")) return "#ff0000";
  if (r.includes("grandmaster")) return "#ff0000";
  if (r.includes("master")) return "#ff8c00";
  if (r.includes("candidate")) return "#aa00aa";
  if (r.includes("expert")) return "#0000ff";
  if (r.includes("specialist")) return "#03a89e";
  if (r.includes("pupil")) return "#008000";
  return "#808080"; // newbie
}

// CodeChef star band → colour.
const CC_STAR_COLORS = ["#666666", "#1e7d22", "#3366cc", "#684273", "#ffbf00", "#ff7f00", "#d0011b"];

function CardShell({
  children,
  delay,
  href,
  brand,
  name,
}: {
  children: React.ReactNode;
  delay: number;
  href: string;
  brand: string;
  name: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group bg-[var(--card)] rounded-3xl p-6 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-bold uppercase tracking-wide" style={{ color: brand }}>
          {name}
        </span>
        <ExternalLink className="h-4 w-4 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
      </div>
      {children}
    </motion.a>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-[var(--foreground)]">{value}</div>
      <div className="text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

export default function CodingProfiles() {
  const [data, setData] = useState<CPData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let active = true;
    fetch("/api/cp")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        if (!active) return;
        if (d?.error) throw new Error(d.error);
        setData(d);
        setStatus("ok");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  if (status === "error") return null;

  return (
    <section className="max-w-7xl mx-auto mt-24">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Code2 className="h-7 w-7 text-violet-500" />
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
          Competitive Programming
        </h2>
      </div>
      <p className="text-center text-[var(--muted)] mb-10">
        Live ratings across LeetCode, Codeforces &amp; CodeChef
      </p>

      {status === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-56 rounded-3xl bg-slate-100 dark:bg-slate-800/60" />
          ))}
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode */}
          {data.leetcode && (
            <CardShell href={data.leetcode.url} delay={0} brand="#FFA116" name="LeetCode">
              <div className="text-5xl font-extrabold text-[var(--foreground)] mb-1">
                {data.leetcode.totalSolved}
              </div>
              <div className="text-sm text-[var(--muted)] mb-5">problems solved</div>

              <div className="space-y-2 mb-5">
                {([
                  ["Easy", data.leetcode.easy, data.leetcode.totalEasy, "bg-emerald-500"],
                  ["Medium", data.leetcode.medium, data.leetcode.totalMedium, "bg-amber-500"],
                  ["Hard", data.leetcode.hard, data.leetcode.totalHard, "bg-rose-500"],
                ] as const).map(([label, solved, total, bar]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-[var(--muted)] mb-1">
                      <span>{label}</span>
                      <span>
                        {solved}
                        {total ? ` / ${total}` : ""}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full ${bar} rounded-full`}
                        style={{ width: total ? `${Math.min(100, (solved / total) * 100)}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {data.leetcode.contestRating != null && (
                <div className="mt-auto pt-4 border-t border-[var(--card-border)] text-sm text-[var(--muted)]">
                  Contest rating{" "}
                  <span className="font-bold text-[var(--foreground)]">
                    {data.leetcode.contestRating}
                  </span>
                  {data.leetcode.contestTopPercent != null && (
                    <span> · top {data.leetcode.contestTopPercent}%</span>
                  )}
                </div>
              )}
            </CardShell>
          )}

          {/* Codeforces */}
          {data.codeforces && (
            <CardShell href={data.codeforces.url} delay={0.1} brand="#1f8acb" name="Codeforces">
              <div className="text-5xl font-extrabold text-[var(--foreground)] mb-1">
                {data.codeforces.rating ?? "—"}
              </div>
              <div className="text-sm text-[var(--muted)] mb-5">
                current rating
                {data.codeforces.maxRating != null && <> · peak {data.codeforces.maxRating}</>}
              </div>
              {data.codeforces.rank && (
                <div
                  className="text-lg font-bold capitalize mb-5"
                  style={{ color: cfColor(data.codeforces.rank) }}
                >
                  {data.codeforces.rank}
                </div>
              )}
              <div className="mt-auto pt-4 border-t border-[var(--card-border)] flex gap-6">
                {data.codeforces.contests != null && (
                  <Metric label="contests" value={data.codeforces.contests} />
                )}
                {data.codeforces.maxRank && (
                  <div>
                    <div
                      className="text-base font-bold capitalize"
                      style={{ color: cfColor(data.codeforces.maxRank) }}
                    >
                      {data.codeforces.maxRank}
                    </div>
                    <div className="text-xs text-[var(--muted)]">peak rank</div>
                  </div>
                )}
              </div>
            </CardShell>
          )}

          {/* CodeChef */}
          {data.codechef && (
            <CardShell href={data.codechef.url} delay={0.2} brand="#5b4638" name="CodeChef">
              <div className="text-5xl font-extrabold text-[var(--foreground)] mb-1">
                {data.codechef.rating}
              </div>
              <div className="text-sm text-[var(--muted)] mb-5">
                current rating
                {data.codechef.maxRating != null && <> · peak {data.codechef.maxRating}</>}
              </div>
              <div
                className="flex items-center gap-1 mb-5"
                style={{ color: CC_STAR_COLORS[data.codechef.stars - 1] ?? CC_STAR_COLORS[0] }}
              >
                {Array.from({ length: data.codechef.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="ml-2 text-sm font-bold">{data.codechef.stars}★</span>
              </div>
              <div className="mt-auto pt-4 border-t border-[var(--card-border)] text-sm text-[var(--muted)]">
                @{data.codechef.username}
              </div>
            </CardShell>
          )}
        </div>
      )}
    </section>
  );
}
