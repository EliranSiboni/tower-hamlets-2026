import { NextRequest, NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";
import { POLLS, voteHash, type PollName } from "@/lib/voting";
import { mayoralCandidates } from "@/data/candidates";
import { parties } from "@/data/parties";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidPoll(p: string): p is PollName {
  return p === "mayor" || p === "party";
}

function isValidChoice(poll: PollName, choice: string): boolean {
  if (poll === "mayor") return mayoralCandidates.some((c) => c.slug === choice);
  return parties.some((p) => p.slug === choice);
}

async function getResults(poll: PollName) {
  const hash = await voteHash(poll);
  const [rowsRaw, mineRaw] = await Promise.all([
    sql`
      SELECT choice, COUNT(*)::int AS count
      FROM poll_votes
      WHERE poll = ${poll}
      GROUP BY choice
    `,
    sql`
      SELECT choice FROM poll_votes
      WHERE poll = ${poll} AND vote_hash = ${hash}
      LIMIT 1
    `,
  ]);
  const rows = rowsRaw as Array<{ choice: string; count: number }>;
  const mineRow = mineRaw as Array<{ choice: string }>;
  const counts: Record<string, number> = {};
  let total = 0;
  for (const r of rows) {
    counts[r.choice] = r.count;
    total += r.count;
  }
  return {
    poll,
    total,
    counts,
    yourVote: mineRow[0]?.choice ?? null,
  };
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ poll: string }> }
) {
  const { poll } = await params;
  if (!isValidPoll(poll)) {
    return NextResponse.json({ error: "Unknown poll" }, { status: 400 });
  }
  try {
    await ensureSchema();
    return NextResponse.json(await getResults(poll));
  } catch (e) {
    console.error("[poll GET]", e);
    return NextResponse.json(
      { error: "Database unavailable" },
      { status: 503 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ poll: string }> }
) {
  const { poll } = await params;
  if (!isValidPoll(poll)) {
    return NextResponse.json({ error: "Unknown poll" }, { status: 400 });
  }

  let body: { choice?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const choice = body.choice;
  if (!choice || typeof choice !== "string" || !isValidChoice(poll, choice)) {
    return NextResponse.json({ error: "Invalid choice" }, { status: 400 });
  }

  try {
    await ensureSchema();
    const hash = await voteHash(poll);

    // Upsert: if the (poll, hash) already exists, update the choice. This
    // means voters can change their mind, but each browser+IP only ever
    // contributes one vote to the count.
    await sql`
      INSERT INTO poll_votes (poll, choice, vote_hash)
      VALUES (${poll}, ${choice}, ${hash})
      ON CONFLICT (poll, vote_hash)
      DO UPDATE SET choice = EXCLUDED.choice, created_at = now()
    `;

    return NextResponse.json({ ok: true, ...(await getResults(poll)) });
  } catch (e) {
    console.error("[poll POST]", e);
    return NextResponse.json(
      { error: "Could not record vote" },
      { status: 503 }
    );
  }
}

export function OPTIONS() {
  return NextResponse.json(
    { polls: Object.keys(POLLS) },
    { headers: { Allow: "GET, POST, OPTIONS" } }
  );
}
