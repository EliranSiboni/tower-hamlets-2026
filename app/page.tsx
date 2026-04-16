import Link from "next/link";
import { election } from "@/data/election";
import { mayoralCandidates } from "@/data/candidates";
import { parties } from "@/data/parties";
import { wards } from "@/data/wards";
import { CandidateAvatar } from "@/components/CandidateAvatar";
import { PartyBadge } from "@/components/PartyBadge";
import { KeyDatesSidebar } from "@/components/KeyDatesSidebar";
import { Skyline } from "@/components/Skyline";
import { CredibilityChip } from "@/components/CredibilityChip";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 px-6 py-12 text-white shadow-sm sm:px-10 sm:py-16">
        {/* Animated gradient base */}
        <div
          aria-hidden="true"
          className="hero-gradient-anim pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(125deg, #0f172a 0%, #1e293b 30%, #581c87 60%, #7f1d1d 100%)",
          }}
        />
        {/* Floating colour blobs */}
        <div
          aria-hidden="true"
          className="hero-blob-1 pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #ef4444 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="hero-blob-2 pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />
        {/* Skyline silhouette with twinkling windows */}
        <Skyline
          lit
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-white opacity-40"
        />
        {/* Diagonal shimmer sweep */}
        <div
          aria-hidden="true"
          className="hero-shimmer-track pointer-events-none absolute inset-0"
        />

        <div className="relative max-w-3xl">
          <div className="hero-rise mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-rose-100 backdrop-blur">
            <span className="relative inline-flex h-2 w-2 items-center justify-center">
              <span className="hero-pulse-ring absolute inset-0 text-rose-300" />
              <span className="relative h-2 w-2 rounded-full bg-rose-300" />
            </span>
            Thursday 7 May 2026
          </div>
          <h1 className="hero-rise hero-rise-delay-1 mb-4 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your simple guide to the Tower Hamlets elections.
          </h1>
          <p className="hero-rise hero-rise-delay-2 max-w-2xl text-lg leading-relaxed text-slate-100">
            On 7 May 2026, Tower Hamlets residents will elect a directly-elected
            Mayor and all <strong>45 councillors</strong> across{" "}
            <strong>20 wards</strong>. Every mayoral candidate, every party,
            every ward — with platforms, track records, and documented
            criticisms.
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-6 flex flex-wrap gap-3">
            <Link
              href="/mayor"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-rose-50"
            >
              See all mayoral candidates →
            </Link>
            <Link
              href="/voting"
              className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              How to vote
            </Link>
          </div>
        </div>
      </section>

      {/* Two-column layout: main + sticky sidebar */}
      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-12">
          <p className="rounded-lg border-l-4 border-accent bg-rose-50/60 px-4 py-3 text-sm text-slate-700">
            <strong>Neutral by design:</strong> strengths and concerns are
            presented side-by-side, and every substantive claim links back to a
            public source.
          </p>

          {/* Mayoral candidates */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <h2 className="font-serif text-2xl font-semibold">
                Candidates for Mayor
              </h2>
              <Link href="/mayor" className="text-sm text-accent underline">
                All {mayoralCandidates.length} →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {mayoralCandidates.map((c) => (
                <Link
                  key={c.slug}
                  href={`/mayor/${c.slug}`}
                  className="card group flex items-start gap-4"
                >
                  <CandidateAvatar
                    name={c.name}
                    partySlug={c.partySlug}
                    size={56}
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest text-slate-500">
                      <span>{c.partyName}</span>
                      {c.incumbent && (
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-900">
                          Incumbent
                        </span>
                      )}
                    </div>
                    <div className="mt-1 font-serif text-lg font-semibold leading-tight group-hover:text-accent">
                      {c.name}
                    </div>
                    <div className="mt-1.5">
                      <CredibilityChip dimensions={c.credibility} />
                    </div>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-700">
                      {c.headline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Parties */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <h2 className="font-serif text-2xl font-semibold">
                Parties on the ballot
              </h2>
              <Link href="/parties" className="text-sm text-accent underline">
                All parties →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {parties.map((p) => (
                <Link
                  key={p.slug}
                  href={`/parties/${p.slug}`}
                  className="card group flex items-start gap-3 border-l-4"
                  style={{ borderLeftColor: p.hex }}
                >
                  <PartyBadge party={p} size={44} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-semibold leading-tight group-hover:text-accent">
                        {p.name}
                      </div>
                      <div className="shrink-0 text-xs text-slate-500">
                        {p.seats2022} seats
                      </div>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-700">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Wards */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <h2 className="font-serif text-2xl font-semibold">
                Find your ward
              </h2>
              <Link href="/wards" className="text-sm text-accent underline">
                All {wards.length} wards →
              </Link>
            </div>
            <p className="mb-4 text-sm text-slate-600">
              {election.seats.councillors} councillor seats across{" "}
              {wards.length} wards. Click yours to see the candidates standing.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {wards.map((w) => (
                <Link
                  key={w.slug}
                  href={`/wards/${w.slug}`}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 transition hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  {w.name}{" "}
                  <span className="text-xs text-slate-500">· {w.seats}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <KeyDatesSidebar />
        </div>
      </div>
    </div>
  );
}
