import { NextResponse } from "next/server";

// Live Chess.com integration. Public API, no auth required.
// Docs: https://www.chess.com/news/view/published-data-api
const CHESS_USERNAME = "dhyey6599";

// Cache the response for an hour so we stay well within Chess.com rate limits.
export const revalidate = 3600;

const UA = "dhyey-portfolio (+https://github.com/shinchan6599)";

type ChessStatBucket = {
  last?: { rating?: number };
  best?: { rating?: number };
  record?: { win?: number; loss?: number; draw?: number };
};

const DRAW_RESULTS = new Set([
  "stalemate",
  "agreed",
  "repetition",
  "insufficient",
  "50move",
  "timevsinsufficient",
]);

function outcome(result: string): "win" | "loss" | "draw" {
  if (result === "win") return "win";
  if (DRAW_RESULTS.has(result)) return "draw";
  return "loss";
}

function formatBucket(bucket?: ChessStatBucket) {
  if (!bucket) return null;
  return {
    current: bucket.last?.rating ?? null,
    best: bucket.best?.rating ?? null,
    win: bucket.record?.win ?? 0,
    loss: bucket.record?.loss ?? 0,
    draw: bucket.record?.draw ?? 0,
  };
}

export async function GET() {
  const headers = { "User-Agent": UA, Accept: "application/json" };

  try {
    const [profileRes, statsRes] = await Promise.all([
      fetch(`https://api.chess.com/pub/player/${CHESS_USERNAME}`, {
        headers,
        next: { revalidate },
      }),
      fetch(`https://api.chess.com/pub/player/${CHESS_USERNAME}/stats`, {
        headers,
        next: { revalidate },
      }),
    ]);

    if (!statsRes.ok) {
      return NextResponse.json({ error: "chess_unavailable" }, { status: 502 });
    }

    const profile = profileRes.ok ? await profileRes.json() : {};
    const stats = await statsRes.json();

    // Most recent games: find the latest monthly archive, take the last few.
    let recentGames: unknown[] = [];
    try {
      const archivesRes = await fetch(
        `https://api.chess.com/pub/player/${CHESS_USERNAME}/games/archives`,
        { headers, next: { revalidate } }
      );
      if (archivesRes.ok) {
        const { archives } = (await archivesRes.json()) as { archives: string[] };
        const lastArchive = archives?.[archives.length - 1];
        if (lastArchive) {
          const gamesRes = await fetch(lastArchive, { headers, next: { revalidate } });
          if (gamesRes.ok) {
            const { games } = (await gamesRes.json()) as { games: GameRaw[] };
            const me = CHESS_USERNAME.toLowerCase();
            recentGames = (games ?? [])
              .slice(-5)
              .reverse()
              .map((g) => {
                const isWhite = g.white.username.toLowerCase() === me;
                const mine = isWhite ? g.white : g.black;
                const opp = isWhite ? g.black : g.white;
                return {
                  opponent: opp.username,
                  opponentRating: opp.rating ?? null,
                  myRating: mine.rating ?? null,
                  color: isWhite ? "white" : "black",
                  outcome: outcome(mine.result),
                  timeClass: g.time_class,
                  url: g.url,
                  endTime: g.end_time ?? null,
                };
              });
          }
        }
      }
    } catch {
      // Recent games are a nice-to-have; ignore failures.
    }

    return NextResponse.json({
      username: CHESS_USERNAME,
      profileUrl: profile.url ?? `https://www.chess.com/member/${CHESS_USERNAME}`,
      avatar: profile.avatar ?? null,
      name: profile.name ?? null,
      followers: profile.followers ?? null,
      ratings: {
        rapid: formatBucket(stats.chess_rapid),
        blitz: formatBucket(stats.chess_blitz),
        bullet: formatBucket(stats.chess_bullet),
      },
      tactics: stats.tactics?.highest?.rating ?? null,
      recentGames,
    });
  } catch {
    return NextResponse.json({ error: "chess_unavailable" }, { status: 502 });
  }
}

type GamePlayer = { username: string; rating?: number; result: string };
type GameRaw = {
  white: GamePlayer;
  black: GamePlayer;
  url: string;
  time_class: string;
  end_time?: number;
};
