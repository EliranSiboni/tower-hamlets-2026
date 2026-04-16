import Link from "next/link";
import { mayoralCandidates } from "@/data/candidates";
import { getParty } from "@/data/parties";
import { CandidateAvatar } from "@/components/CandidateAvatar";
import { CredibilityChip } from "@/components/CredibilityChip";
import { Poll } from "@/components/Poll";

export const metadata = {
  title: "Mayoral candidates — Tower Hamlets 2026",
};

export default function MayorIndex() {
  return (
    <div>
      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        Mayor of Tower Hamlets
      </div>
      <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">
        {mayoralCandidates.length} candidates. One vote. Pick carefully.
      </h1>
      <p className="mb-2 max-w-3xl text-slate-700">
        The mayor is directly elected by the whole borough and runs the
        council's executive. This year the voting system is simple
        First-Past-The-Post — you mark <strong>one X</strong> for your
        preferred candidate. (In 2022 the Supplementary Vote system allowed a
        second preference; that system has been abolished for 2026.)
      </p>
      <p className="mb-8 max-w-3xl text-slate-700">
        Click any candidate for a full profile: background, platform,
        strengths, and documented concerns.
      </p>

      <div className="mb-10">
        <Poll
          poll="mayor"
          title="Quick straw poll"
          subtitle="Who would you back for Mayor of Tower Hamlets?"
          options={mayoralCandidates.map((c) => {
            const party = getParty(c.partySlug);
            return {
              slug: c.slug,
              label: c.name,
              sublabel: c.partyName + (c.incumbent ? " · Incumbent" : ""),
              hex: party?.hex,
            };
          })}
        />
      </div>

      <ul className="space-y-4">
        {mayoralCandidates.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/mayor/${c.slug}`}
              className="card flex items-start gap-5 transition hover:border-accent"
            >
              <CandidateAvatar
                name={c.name}
                partySlug={c.partySlug}
                size={64}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-serif text-xl font-semibold">{c.name}</h2>
                  <span className="pill">{c.partyName}</span>
                  {c.incumbent && (
                    <span className="pill bg-amber-100 text-amber-900 border-amber-300">
                      Incumbent
                    </span>
                  )}
                  <CredibilityChip dimensions={c.credibility} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {c.headline}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
