// One-shot script to create the poll_votes table on Neon.
// Run with: node --env-file=.env.local scripts/init-db.mjs
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}
const sql = neon(url);

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

const rows = await sql`SELECT COUNT(*)::int AS n FROM poll_votes`;
console.log("✓ poll_votes ready. Existing rows:", rows[0].n);
