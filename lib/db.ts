import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  // Don't throw at import time during build — only when actually used.
  console.warn("[db] DATABASE_URL is not set. Voting endpoints will fail.");
}

export const sql = neon(url ?? "");

let initialised = false;

/**
 * Lazily create the votes table on first request. Idempotent.
 * Schema:
 *   poll        — 'mayor' or 'party'
 *   choice      — slug (mayoral candidate slug or party slug)
 *   vote_hash   — sha256 of (poll | ip | cookie_id | secret); unique per poll
 *   created_at  — timestamptz
 */
export async function ensureSchema() {
  if (initialised) return;
  await sql`
    CREATE TABLE IF NOT EXISTS poll_votes (
      id BIGSERIAL PRIMARY KEY,
      poll TEXT NOT NULL,
      choice TEXT NOT NULL,
      vote_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      CONSTRAINT poll_vote_unique UNIQUE (poll, vote_hash)
    )
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS idx_poll_votes_poll_choice
      ON poll_votes(poll, choice)
  `;
  initialised = true;
}
