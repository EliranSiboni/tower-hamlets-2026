export function StrengthsConcerns({
  strengths,
  concerns,
}: {
  strengths: string[];
  concerns: string[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-800">
          Strengths / Record
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-slate-800">
          {strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-800">
          Concerns / Criticisms
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-slate-800">
          {concerns.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
