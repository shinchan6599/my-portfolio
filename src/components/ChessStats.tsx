"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Zap, Rabbit, Timer, ExternalLink } from "lucide-react";

type Bucket = {
  current: number | null;
  best: number | null;
  win: number;
  loss: number;
  draw: number;
} | null;

type RecentGame = {
  opponent: string;
  opponentRating: number | null;
  myRating: number | null;
  color: "white" | "black";
  outcome: "win" | "loss" | "draw";
  timeClass: string;
  url: string;
  endTime: number | null;
};

type ChessData = {
  username: string;
  profileUrl: string;
  ratings: { rapid: Bucket; blitz: Bucket; bullet: Bucket };
  tactics: number | null;
  recentGames: RecentGame[];
};

const FORMATS = [
  { key: "rapid", label: "Rapid", icon: Timer, color: "from-emerald-500 to-teal-600" },
  { key: "blitz", label: "Blitz", icon: Zap, color: "from-amber-500 to-orange-600" },
  { key: "bullet", label: "Bullet", icon: Rabbit, color: "from-rose-500 to-pink-600" },
] as const;

const OUTCOME_STYLES: Record<RecentGame["outcome"], string> = {
  win: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  loss: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
  draw: "bg-slate-500/15 text-slate-600 dark:text-slate-400",
};

function winRate(b: Bucket): number | null {
  if (!b) return null;
  const total = b.win + b.loss + b.draw;
  if (!total) return null;
  return Math.round((b.win / total) * 100);
}

export default function ChessStats() {
  const [data, setData] = useState<ChessData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let active = true;
    fetch("/api/chess")
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
        <Crown className="h-7 w-7 text-amber-500" />
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
          Live Chess Ratings
        </h2>
      </div>
      <p className="text-center text-[var(--muted)] mb-10">
        Pulled live from Chess.com
        {data && (
          <>
            {" — "}
            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              @{data.username} <ExternalLink className="h-3 w-3" />
            </a>
          </>
        )}
      </p>

      {status === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
          {FORMATS.map((f) => (
            <div key={f.key} className="h-44 rounded-3xl bg-slate-100 dark:bg-slate-800/60" />
          ))}
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMATS.map((f, i) => {
              const bucket = data.ratings[f.key];
              const Icon = f.icon;
              const rate = winRate(bucket);
              return (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-3xl p-8 text-white shadow-lg bg-gradient-to-br ${f.color}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="h-8 w-8 text-white/80" />
                    <span className="text-sm font-medium text-white/70 uppercase tracking-wide">
                      {f.label}
                    </span>
                  </div>
                  {bucket?.current != null ? (
                    <>
                      <div className="text-5xl font-extrabold mb-1">{bucket.current}</div>
                      <div className="text-sm text-white/70 mb-5">
                        Peak {bucket.best ?? "—"}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/90">
                        <span>{bucket.win}W</span>
                        <span>{bucket.draw}D</span>
                        <span>{bucket.loss}L</span>
                        {rate != null && (
                          <span className="ml-auto font-semibold">{rate}% win</span>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-white/70 text-sm py-6">No rated games yet.</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {data.recentGames.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-[var(--card)] rounded-3xl p-6 border border-[var(--card-border)]"
            >
              <h3 className="font-bold text-[var(--foreground)] mb-4">Recent Games</h3>
              <div className="divide-y divide-[var(--card-border)]">
                {data.recentGames.map((g, i) => (
                  <a
                    key={i}
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-3 group"
                  >
                    <span
                      className={`text-xs font-bold uppercase px-2 py-1 rounded-md w-12 text-center ${OUTCOME_STYLES[g.outcome]}`}
                    >
                      {g.outcome === "win" ? "Win" : g.outcome === "loss" ? "Loss" : "Draw"}
                    </span>
                    <span className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                      vs {g.opponent}
                      {g.opponentRating ? ` (${g.opponentRating})` : ""}
                    </span>
                    <span className="ml-auto text-xs text-[var(--muted)] capitalize shrink-0">
                      {g.color} · {g.timeClass}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </>
      )}
    </section>
  );
}
