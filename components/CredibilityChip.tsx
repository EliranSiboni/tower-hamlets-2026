import type { CredibilityDimension } from "@/data/candidates";
import { summariseCredibility } from "@/components/CredibilityCheck";

const toneStyles = {
  positive: "bg-emerald-50 text-emerald-800 border-emerald-200",
  mixed: "bg-amber-50 text-amber-800 border-amber-200",
  concerning: "bg-rose-50 text-rose-800 border-rose-200",
  untested: "bg-slate-100 text-slate-700 border-slate-200",
};

const toneIcon = {
  positive: "●",
  mixed: "◐",
  concerning: "▲",
  untested: "○",
};

export function CredibilityChip({
  dimensions,
}: {
  dimensions: CredibilityDimension[];
}) {
  const s = summariseCredibility(dimensions);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${toneStyles[s.tone]}`}
      title={s.detail}
    >
      <span aria-hidden="true">{toneIcon[s.tone]}</span>
      {s.label}
    </span>
  );
}
