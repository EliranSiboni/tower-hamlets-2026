import Link from "next/link";
import { notFound } from "next/navigation";
import { parties, getParty } from "@/data/parties";
import { mayoralCandidates } from "@/data/candidates";
import { SourceList } from "@/components/SourceList";
import { StrengthsConcerns } from "@/components/StrengthsConcerns";
import { CandidateAvatar } from "@/components/CandidateAvatar";
import { PartyBadge } from "@/components/PartyBadge";

export function generateStaticParams() {
  return parties.map((p) => ({ slug: p.slug }));
}

export default async function PartyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getParty(slug);
  if (!p) return notFound();
  const mayor = mayoralCandidates.find((c) => c.partySlug === p.slug);

  return (
    <article>
      <Link
        href="/parties"
        className="mb-4 inline-block text-sm text-accent hover:underline"
      >
        ← All parties
      </Link>

      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        style={{
          backgroundImage: `linear-gradient(135deg, ${p.hex}14 0%, transparent 60%)`,
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-1.5"
          style={{ background: p.hex }}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <PartyBadge party={p} size={80} />
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-widest text-slate-500">
              {p.seats2022} of 45 seats (2022)
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight">
              {p.name}
            </h1>
            {p.shortName && (
              <div className="text-slate-500">
                Also known as: {p.shortName}
              </div>
            )}
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
              {p.summary}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">
          Platform for 2026
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-800">
          {p.platform.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">
          Strengths and concerns
        </h2>
        <StrengthsConcerns strengths={p.strengths} concerns={p.concerns} />
      </section>

      {mayor && (
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-4">
            <CandidateAvatar
              name={mayor.name}
              partySlug={mayor.partySlug}
              size={56}
            />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Mayoral candidate
              </div>
              <Link
                href={`/mayor/${mayor.slug}`}
                className="mt-0.5 block font-serif text-xl font-semibold hover:text-accent"
              >
                {mayor.name}
              </Link>
              <p className="mt-2 text-sm text-slate-700">{mayor.headline}</p>
              <Link
                className="mt-3 inline-block text-sm text-accent underline"
                href={`/mayor/${mayor.slug}`}
              >
                See full candidate profile →
              </Link>
            </div>
          </div>
        </section>
      )}

      <SourceList sources={p.sources} />
    </article>
  );
}
