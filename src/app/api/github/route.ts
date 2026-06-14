import { NextResponse } from "next/server";

// Live GitHub integration. Public REST API (60 req/hr/IP unauthenticated).
// Set a GITHUB_TOKEN env var to raise the limit to 5000 req/hr.
const GITHUB_USERNAME = "shinchan6599";

// Cache for an hour so we never approach the unauthenticated rate limit.
export const revalidate = 3600;

type RepoRaw = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export async function GET() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": GITHUB_USERNAME,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
        { headers, next: { revalidate } }
      ),
    ]);

    if (!profileRes.ok) {
      return NextResponse.json({ error: "github_unavailable" }, { status: 502 });
    }

    const profile = await profileRes.json();
    const repos: RepoRaw[] = reposRes.ok ? await reposRes.json() : [];

    const owned = repos.filter((r) => !r.fork && !r.archived);
    const totalStars = owned.reduce((sum, r) => sum + r.stargazers_count, 0);

    const topRepos = [...owned]
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
      .slice(0, 6)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        pushedAt: r.pushed_at,
      }));

    // Contribution calendar isn't in the REST API — use the free, no-auth
    // jogruber endpoint which mirrors the GitHub graph as JSON.
    let contributions: { total: number; days: unknown[] } | null = null;
    try {
      const cRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        { next: { revalidate } }
      );
      if (cRes.ok) {
        const data = (await cRes.json()) as {
          total?: Record<string, number>;
          contributions?: { date: string; count: number; level: number }[];
        };
        const total = data.total
          ? Object.values(data.total).reduce((a, b) => a + b, 0)
          : 0;
        contributions = { total, days: data.contributions ?? [] };
      }
    } catch {
      // Heatmap is optional; ignore failures.
    }

    return NextResponse.json({
      profile: {
        login: profile.login,
        name: profile.name,
        avatar: profile.avatar_url,
        bio: profile.bio,
        url: profile.html_url,
        followers: profile.followers,
        following: profile.following,
        publicRepos: profile.public_repos,
      },
      totalStars,
      topRepos,
      contributions,
    });
  } catch {
    return NextResponse.json({ error: "github_unavailable" }, { status: 502 });
  }
}
