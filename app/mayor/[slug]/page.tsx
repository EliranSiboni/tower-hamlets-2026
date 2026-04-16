import Link from "next/link";
import { notFound } from "next/navigation";
import {
  mayoralCandidates,
  getMayoralCandidate,
} from "@/data/candidates";
import { getParty } from "@/data/parties";
import { SourceList } from "@/components/SourceList";
import { StrengthsConcerns } from "@/components/StrengthsConcerns";
import { CandidateAvatar } from "@/components/CandidateAvatar";
import { PartyBadge } from "@/components/PartyBadge";
import { CredibilityCheck } from "@/components/CredibilityCheck";

export function generateStaticParams() {
  return mayoralCandidates.map((c) => ({ slug: c.slug }));
}

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getMayoralCandidate(slug);
  if (!c) return notFound();
  const party = getParty(c.partySlug);

  return (
    <article>
      <Link
        href="/mayor"
        className="mb-4 inline-block text-sm text-accent hover:underline"
      >
        ← All mayoral candidates
      </Link>

      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        style={{
          backgroundImage: party
            ? `linear-gradient(135deg, ${party.hex}14 0%, transparent 60%)`
            : undefined,
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-1.5"
          style={{ background: party?.hex ?? "#64748b" }}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <CandidateAvatar
            name={c.name}
            partySlug={c.partySlug}
            size={96}
            ring
          />
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="pill">{c.partyName}</span>
              {c.incumbent && (
                <span className="pill bg-amber-100 text-amber-900 border-amber-300">
                  Incumbent
                </span>
              )}
            </div>
            <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">
              {c.name}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              {c.headline}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">Background</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-800">
          {c.background.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">
          Platform for 2026
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-800">
          {c.platform.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <CredibilityCheck dimensions={c.credibility} />
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">
          Strengths and concerns
        </h2>
        <p className="mb-2 max-w-3xl text-slate-700">
          Both columns are presented side-by-side so you can weigh them
          yourself. Each point is drawn from a public source listed at the
          bottom of the page.
        </p>
        <StrengthsConcerns
          strengths={c.strengths}
          concerns={c.concerns}
        />
      </section>

      {party && (
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-4">
            <PartyBadge party={party} size={48} />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Running as
              </div>
              <Link
                href={`/parties/${party.slug}`}
                className="mt-0.5 block font-serif text-xl font-semibold hover:text-accent"
              >
                {party.name}
              </Link>
              <p className="mt-2 text-sm text-slate-700">{party.summary}</p>
              <Link
                className="mt-3 inline-block text-sm text-accent underline"
                href={`/parties/${party.slug}`}
              >
                See the party's full profile →
              </Link>
            </div>
          </div>
        </section>
      )}

      <SourceList sources={c.sources} />
    </article>
  );
}
