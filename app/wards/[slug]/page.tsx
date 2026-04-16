import Link from "next/link";
import { notFound } from "next/navigation";
import { wards, getWard } from "@/data/wards";

export function generateStaticParams() {
  return wards.map((w) => ({ slug: w.slug }));
}

export default async function WardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWard(slug);
  if (!w) return notFound();

  return (
    <article>
      <Link
        href="/wards"
        className="mb-4 inline-block text-sm text-accent hover:underline"
      >
        ← All wards
      </Link>

      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        Ward · {w.seats} seat{w.seats > 1 ? "s" : ""}
      </div>
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight">
        {w.name}
      </h1>
      {w.notes && (
        <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
          {w.notes}
        </p>
      )}

      <section className="mt-10">
        <h2 className="mb-3 font-serif text-2xl font-semibold">
          How voting works in this ward
        </h2>
        <p className="max-w-3xl text-slate-700">
          This ward elects <strong>{w.seats}</strong> councillor
          {w.seats > 1 ? "s" : ""}. You will get{" "}
          <strong>{w.seats}</strong> vote{w.seats > 1 ? "s" : ""} — mark one X
          per seat. The top {w.seats} candidate{w.seats > 1 ? "s" : ""} by
          total votes win
          {w.seats > 1 ? "" : "s"}, regardless of party.
        </p>
      </section>

      {w.knownCandidates && w.knownCandidates.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 font-serif text-2xl font-semibold">
            Some of the confirmed candidates
          </h2>
          <p className="mb-3 max-w-3xl text-sm text-slate-600">
            This list shows candidates confirmed at the time of writing. It is
            not a complete slate — many wards have 10–20+ candidates. Use the
            link below to see the full, up-to-date list.
          </p>
          <ul className="space-y-2">
            {w.knownCandidates.map((c) => (
              <li
                key={c.name}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2"
              >
                <span className="font-medium">{c.name}</span>{" "}
                <span className="text-sm text-slate-500">· {c.party}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Full candidate list
        </div>
        <p className="mt-2 text-sm text-slate-700">
          For the complete and up-to-the-minute list of every candidate
          standing in {w.name}, including their statements, use:
        </p>
        <a
          href={w.lookupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          View {w.name} candidates on Who Can I Vote For →
        </a>
      </section>
    </article>
  );
}
