import Link from "next/link";
import { parties } from "@/data/parties";
import { PartyBadge } from "@/components/PartyBadge";
import { Poll } from "@/components/Poll";

export const metadata = { title: "Parties — Tower Hamlets 2026" };

export default function PartiesIndex() {
  return (
    <div>
      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        Parties on the ballot
      </div>
      <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">
        Who's running — and what they stand for.
      </h1>
      <p className="mb-8 max-w-3xl text-slate-700">
        Nine parties or groupings are contesting the 2026 Tower Hamlets
        elections. Each profile lists the party's platform, its record, and
        documented concerns.
      </p>

      <div className="mb-10">
        <Poll
          poll="party"
          title="Quick straw poll"
          subtitle="Which party would get your vote in your ward?"
          options={parties.map((p) => ({
            slug: p.slug,
            label: p.name,
            sublabel: `${p.seats2022} seats (2022)`,
            hex: p.hex,
          }))}
        />
      </div>

      <div className="space-y-4">
        {parties.map((p) => (
          <Link
            key={p.slug}
            href={`/parties/${p.slug}`}
            className="card flex items-start gap-5 border-l-4 transition hover:border-accent"
            style={{ borderLeftColor: p.hex }}
          >
            <PartyBadge party={p} size={56} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-xl font-semibold">{p.name}</h2>
                <div className="text-xs text-slate-500">
                  {p.seats2022} of 45 seats (2022)
                  {p.mayoralCandidate &&
                    ` · Mayor: ${p.mayoralCandidate}`}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {p.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
