"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Star, GitFork, Users, BookMarked, ExternalLink } from "lucide-react";
import ContributionGraph, { ContributionDay } from "./ContributionGraph";

type Repo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  pushedAt: string;
};

type GitHubData = {
  profile: {
    login: string;
    name: string | null;
    avatar: string;
    bio: string | null;
    url: string;
    followers: number;
    following: number;
    publicRepos: number;
  };
  totalStars: number;
  topRepos: Repo[];
  contributions: { total: number; days: ContributionDay[] } | null;
};

// Small palette for the common languages in these repos.
const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
};

function StatPill({ icon: Icon, value, label }: { icon: React.ElementType; value: number; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/60">
      <Icon className="h-4 w-4 text-[var(--muted)]" />
      <span className="font-bold text-[var(--foreground)]">{value.toLocaleString()}</span>
      <span className="text-sm text-[var(--muted)]">{label}</span>
    </div>
  );
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let active = true;
    fetch("/api/github")
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
    <section className="max-w-6xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-4 mb-8 flex-wrap"
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white shadow-lg">
            <Github className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">Live from GitHub</h2>
        </div>
        {data && (
          <a
            href={data.profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
          >
            @{data.profile.login} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </motion.div>

      {status === "loading" && (
        <div className="space-y-4 animate-pulse">
          <div className="h-24 rounded-2xl bg-slate-100 dark:bg-slate-800/60" />
          <div className="h-32 rounded-2xl bg-slate-100 dark:bg-slate-800/60" />
        </div>
      )}

      {data && (
        <div className="space-y-8">
          {/* Profile summary + stat pills */}
          <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)] flex flex-col sm:flex-row sm:items-center gap-5">
            <Image
              src={data.profile.avatar}
              alt={data.profile.login}
              width={64}
              height={64}
              unoptimized
              className="w-16 h-16 rounded-full ring-2 ring-[var(--card-border)] shrink-0"
            />
            <div className="flex-grow">
              {data.profile.bio && (
                <p className="text-sm text-[var(--muted)] mb-3">{data.profile.bio}</p>
              )}
              <div className="flex flex-wrap gap-2">
                <StatPill icon={BookMarked} value={data.profile.publicRepos} label="repos" />
                <StatPill icon={Star} value={data.totalStars} label="stars" />
                <StatPill icon={Users} value={data.profile.followers} label="followers" />
              </div>
            </div>
          </div>

          {/* Contribution heatmap */}
          {data.contributions && data.contributions.days.length > 0 && (
            <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--card-border)]">
              <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
                <h3 className="font-bold text-[var(--foreground)]">Contributions</h3>
                <span className="text-sm text-[var(--muted)]">
                  {data.contributions.total.toLocaleString()} in the last year
                </span>
              </div>
              <ContributionGraph days={data.contributions.days} />
            </div>
          )}

          {/* Top repos */}
          {data.topRepos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.topRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-[var(--card)] rounded-2xl p-5 border border-[var(--card-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookMarked className="h-4 w-4 text-[var(--accent)] shrink-0" />
                    <h3 className="font-bold text-[var(--foreground)] truncate group-hover:text-[var(--accent)] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-4 flex-grow line-clamp-2">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: LANG_COLORS[repo.language] ?? "var(--muted)" }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
