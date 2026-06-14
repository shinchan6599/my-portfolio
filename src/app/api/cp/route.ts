import { NextResponse } from "next/server";

// Unified competitive-programming integration.
// - LeetCode:   unofficial public GraphQL endpoint
// - Codeforces: official public REST API (https://codeforces.com/apiHelp)
// - CodeChef:   no public API — light HTML scrape of the public profile page
// Each platform fails independently so one outage doesn't blank the others.
const LEETCODE_USER = "dhyey18bhansali";
const CODEFORCES_HANDLE = "Shinchan6599";
const CODECHEF_USER = "shinchan6599";

export const revalidate = 3600;

const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

async function getLeetCode() {
  try {
    const query = `query($u:String!){
      matchedUser(username:$u){
        username
        profile{ ranking }
        submitStatsGlobal{ acSubmissionNum{ difficulty count } }
      }
      allQuestionsCount{ difficulty count }
      userContestRanking(username:$u){ rating globalRanking attendedContestsCount topPercentage }
    }`;
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": BROWSER_UA,
      },
      body: JSON.stringify({ query, variables: { u: LEETCODE_USER } }),
      next: { revalidate },
    });
    if (!res.ok) return null;
    const { data } = await res.json();
    const user = data?.matchedUser;
    if (!user) return null;

    const solved: Record<string, number> = {};
    for (const item of user.submitStatsGlobal?.acSubmissionNum ?? []) {
      solved[item.difficulty] = item.count;
    }
    const totals: Record<string, number> = {};
    for (const item of data.allQuestionsCount ?? []) {
      totals[item.difficulty] = item.count;
    }
    const contest = data.userContestRanking;

    return {
      username: LEETCODE_USER,
      url: `https://leetcode.com/u/${LEETCODE_USER}/`,
      totalSolved: solved.All ?? 0,
      easy: solved.Easy ?? 0,
      medium: solved.Medium ?? 0,
      hard: solved.Hard ?? 0,
      totalEasy: totals.Easy ?? null,
      totalMedium: totals.Medium ?? null,
      totalHard: totals.Hard ?? null,
      ranking: user.profile?.ranking ?? null,
      contestRating: contest?.rating ? Math.round(contest.rating) : null,
      contestTopPercent: contest?.topPercentage ?? null,
      attended: contest?.attendedContestsCount ?? null,
    };
  } catch {
    return null;
  }
}

async function getCodeforces() {
  try {
    const [infoRes, ratingRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`, {
        headers: { "User-Agent": BROWSER_UA },
        next: { revalidate },
      }),
      fetch(`https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`, {
        headers: { "User-Agent": BROWSER_UA },
        next: { revalidate },
      }),
    ]);
    if (!infoRes.ok) return null;
    const info = await infoRes.json();
    if (info.status !== "OK" || !info.result?.[0]) return null;
    const u = info.result[0];

    let contests: number | null = null;
    if (ratingRes.ok) {
      const r = await ratingRes.json();
      if (r.status === "OK") contests = r.result.length;
    }

    return {
      handle: u.handle,
      url: `https://codeforces.com/profile/${CODEFORCES_HANDLE}`,
      rating: u.rating ?? null,
      maxRating: u.maxRating ?? null,
      rank: u.rank ?? null,
      maxRank: u.maxRank ?? null,
      contests,
    };
  } catch {
    return null;
  }
}

// CodeChef rating → star band (the official mapping used on the site).
function starsForRating(rating: number): number {
  if (rating < 1400) return 1;
  if (rating < 1600) return 2;
  if (rating < 1800) return 3;
  if (rating < 2000) return 4;
  if (rating < 2200) return 5;
  if (rating < 2500) return 6;
  return 7;
}

async function getCodeChef() {
  try {
    const res = await fetch(`https://www.codechef.com/users/${CODECHEF_USER}`, {
      headers: { "User-Agent": BROWSER_UA, Accept: "text/html" },
      next: { revalidate },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const rating = html.match(/rating-number">\s*(\d+)/)?.[1];
    const highest = html.match(/Highest Rating\s*(\d+)/)?.[1];
    if (!rating) return null;

    const ratingNum = parseInt(rating, 10);
    return {
      username: CODECHEF_USER,
      url: `https://www.codechef.com/users/${CODECHEF_USER}`,
      rating: ratingNum,
      maxRating: highest ? parseInt(highest, 10) : null,
      stars: starsForRating(ratingNum),
    };
  } catch {
    return null;
  }
}

export async function GET() {
  const [leetcode, codeforces, codechef] = await Promise.all([
    getLeetCode(),
    getCodeforces(),
    getCodeChef(),
  ]);

  if (!leetcode && !codeforces && !codechef) {
    return NextResponse.json({ error: "cp_unavailable" }, { status: 502 });
  }
  return NextResponse.json({ leetcode, codeforces, codechef });
}
