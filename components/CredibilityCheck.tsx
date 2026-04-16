import type {
  CredibilityDimension,
  CredibilityRating,
} from "@/data/candidates";

const ratingStyles: Record<CredibilityRating, { chip: string; bar: string; w: string }> = {
  Strong: {
    chip: "bg-emerald-100 text-emerald-800 border-emerald-200",
    bar: "bg-emerald-500",
    w: "w-full",
  },
  Mixed: {
    chip: "bg-amber-100 text-amber-800 border-amber-200",
    bar: "bg-amber-500",
    w: "w-3/5",
  },
  Limited: {
    chip: "bg-orange-100 text-orange-800 border-orange-200",
    bar: "bg-orange-500",
    w: "w-2/5",
  },
  Weak: {
    chip: "bg-rose-100 text-rose-800 border-rose-200",
    bar: "bg-rose-500",
    w: "w-1/4",
  },
  Untested: {
    chip: "bg-slate-100 text-slate-700 border-slate-200",
    bar: "bg-slate-400",
    w: "w-1/5",
  },
};

// Extremely transparent aggregate: count strong vs weak/limited dimensions.
// We deliberately avoid picking a single "trust score" — the per-dimension
// breakdown is the answer; this is just a one-line summary for skimmers.
export type CredibilitySummary = {
  label: string;
  tone: "positive" | "mixed" | "concerning" | "untested";
  detail: string;
};

export function summariseCredibility(
  dims: CredibilityDimension[]
): CredibilitySummary {
  const counts = { Strong: 0, Mixed: 0, Limited: 0, Weak: 0, Untested: 0 };
  for (const d of dims) counts[d.rating]++;

  if (counts.Untested >= dims.length - 1) {
    return {
      label: "Largely untested",
      tone: "untested",
      detail: "No record in executive office to evaluate.",
    };
  }
  if (counts.Strong >= 2 && counts.Weak === 0) {
    return {
      label: "Substantive record",
      tone: "positive",
      detail: `${counts.Strong} strong of ${dims.length} dimensions, with documented evidence.`,
    };
  }
  if (counts.Weak >= 2 || (counts.Weak >= 1 && counts.Limited >= 1)) {
    return {
      label: "Significant gaps",
      tone: "concerning",
      detail: `${counts.Weak} weak / ${counts.Limited} limited of ${dims.length} dimensions.`,
    };
  }
  return {
    label: "Mixed record",
    tone: "mixed",
    detail: `${counts.Strong} strong, ${counts.Mixed + counts.Limited} mixed/limited, ${counts.Weak} weak.`,
  };
}

const summaryStyles = {
  positive: "bg-emerald-50 border-emerald-200 text-emerald-900",
  mixed: "bg-amber-50 border-amber-200 text-amber-900",
  concerning: "bg-rose-50 border-rose-200 text-rose-900",
  untested: "bg-slate-50 border-slate-200 text-slate-700",
};

export function CredibilityCheck({
  dimensions,
}: {
  dimensions: CredibilityDimension[];
}) {
  const summary = summariseCredibility(dimensions);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <span aria-hidden="true">🔍</span>
        <h3 className="font-serif text-lg font-semibold">Credibility check</h3>
      </div>
      <p className="mb-4 text-xs text-slate-500">
        Evidence-based ratings across four dimensions. Each rating is justified
        from documented public sources — not editorial opinion. Use it to spot
        the gap between rhetoric and record.
      </p>

      <div
        className={`mb-5 rounded-lg border px-3 py-2 text-sm ${summaryStyles[summary.tone]}`}
      >
        <div className="font-semibold">{summary.label}</div>
        <div className="text-xs opacity-80">{summary.detail}</div>
      </div>

      <ul className="space-y-4">
        {dimensions.map((d) => {
          const styles = ratingStyles[d.rating];
          return (
            <li key={d.label}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-sm font-semibold text-slate-800">
                  {d.label}
                </div>
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${styles.chip}`}
                >
                  {d.rating}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all ${styles.bar} ${styles.w}`}
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {d.evidence}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-5 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
        Methodology: <span className="font-semibold">Strong</span> = documented
        delivery / track record;{" "}
        <span className="font-semibold">Mixed</span> = both delivery and
        notable failure; <span className="font-semibold">Limited</span> =
        narrow or partial record; <span className="font-semibold">Weak</span> =
        documented failure or absence; <span className="font-semibold">Untested</span> = no record in office.
      </p>
    </div>
  );
}
