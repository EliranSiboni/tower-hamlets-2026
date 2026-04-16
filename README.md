# Tower Hamlets 2026 — Voter Guide

An independent, non-partisan Next.js website that presents every candidate,
every party, and every ward for the 2026 Tower Hamlets Council and Executive
Mayor elections on **Thursday 7 May 2026**.

## What's inside

- **Home** — key dates, all mayoral candidates at a glance, parties, and a ward picker.
- **/mayor** — index and a dedicated profile page for each of the 9 mayoral candidates. Each profile has background, platform, strengths, and documented concerns, with sources.
- **/parties** — index and a dedicated page for each party with the same structure.
- **/wards** — all 20 wards, with known candidates where available and a direct link to the full list on Who Can I Vote For.
- **/voting** — registration deadlines, voter ID rules, how the ballots work, postal/proxy voting, what to do if something goes wrong.

All content is in TypeScript data files under `data/` so updates before
polling day are a one-line change — no CMS required.

## Tech

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- Static rendering via `generateStaticParams` on all dynamic routes — the
  whole site can be deployed as a fully static export on Vercel,
  Cloudflare Pages, Netlify, GitHub Pages, or any static host.

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Building and deploying

```bash
npm run build
npm start
```

For a fully static export (useful on GitHub Pages / Cloudflare Pages):

```bash
npm run build
# then deploy the .next/ output to your platform of choice
```

Zero environment variables required.

## Editorial approach

The site is written as a **neutral voter guide**:

- Each candidate and party has both a **Strengths / Record** panel and a
  **Concerns / Criticisms** panel, side by side. No one gets only the good
  parts; no one gets only the bad.
- Every substantive claim (especially every criticism) has a named public
  source listed at the bottom of the page and linked out to the original.
- Controversies are stated factually (what happened, when, who found what) —
  not as attacks.

If you find a factual error, the data files are easy to update:

- `data/candidates.ts` — mayoral candidates
- `data/parties.ts` — parties
- `data/wards.ts` — wards and known candidates
- `data/election.ts` — key dates, voter ID, electoral system

## Sources used across the site

- Tower Hamlets Council (towerhamlets.gov.uk)
- Who Can I Vote For / Democracy Club
- Electoral Commission
- Gov.uk — Best Value Inspection of the London Borough of Tower Hamlets (2024)
- East London Times, Tower Hamlets Slice, Roman Road LDN, Jewish News, Middle East Eye
- Each party's own manifesto and website
- Erlam v Rahman (2015) — Election Court judgment

## Licence

MIT. Use freely, credit appreciated but not required.

## Disclaimer

This site is not affiliated with Tower Hamlets Council or with any political
party or candidate. It is a civic information resource. For the definitive
legal list of candidates and polling locations, always check{" "}
[towerhamlets.gov.uk](https://www.towerhamlets.gov.uk/).

