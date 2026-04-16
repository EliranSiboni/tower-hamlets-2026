import { createHash, randomUUID } from "node:crypto";
import { cookies, headers } from "next/headers";

const COOKIE_NAME = "th_voter";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export type PollName = "mayor" | "party";

export const POLLS: Record<PollName, { label: string; route: string }> = {
  mayor: { label: "Who would you vote for as Mayor?", route: "/mayor" },
  party: { label: "Which party would you vote for?", route: "/parties" },
};

/**
 * Best-effort client IP. Behind a reverse proxy (Vercel, Cloudflare) this
 * comes from x-forwarded-for / x-real-ip. Falls back to "unknown".
 */
async function clientIp(): Promise<string> {
  const h = await headers();
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

/**
 * Returns (and lazily issues) the per-browser voter cookie. Random UUID, no
 * PII. Stored httpOnly so client-side JS cannot read it.
 */
export async function getOrIssueVoterId(): Promise<string> {
  const jar = await cookies();
  const existing = jar.get(COOKIE_NAME)?.value;
  if (existing) return existing;
  const fresh = randomUUID();
  jar.set(COOKIE_NAME, fresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return fresh;
}

/**
 * Stable hash of (poll, ip, cookie). Used as the dedup key. The IP is mixed
 * with a server-side secret so the raw IP is never recoverable from the DB.
 */
export async function voteHash(poll: PollName): Promise<string> {
  const ip = await clientIp();
  const cookieId = await getOrIssueVoterId();
  const secret = process.env.VOTE_HASH_SECRET ?? "th2026-default-secret";
  return createHash("sha256")
    .update(`${poll}|${ip}|${cookieId}|${secret}`)
    .digest("hex");
}
