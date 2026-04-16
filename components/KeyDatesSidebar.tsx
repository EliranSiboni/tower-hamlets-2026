import { election } from "@/data/election";

// Today is treated as 2026-04-15 for milestone status. Using a fixed reference
// date avoids hydration-mismatch issues with new Date() during SSR. Update if
// the election system rebuilds after the date changes.
const TODAY = new Date("2026-04-15T12:00:00+01:00");

function daysBetween(a: Date, b: Date) {
  const ms = b.getTime() - a.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function statusFor(iso: string): "past" | "today" | "soon" | "upcoming" {
  const target = new Date(iso);
  const days = daysBetween(TODAY, target);
  if (days < 0) return "past";
  if (days === 0) return "today";
  if (days <= 7) return "soon";
  return "upcoming";
}

const dotStyles: Record<string, string> = {
  past: "bg-slate-300 ring-slate-200",
  today: "bg-accent ring-accent/30 animate-pulse",
  soon: "bg-amber-500 ring-amber-200",
  upcoming: "bg-emerald-500 ring-emerald-200",
};

const labelStyles: Record<string, string> = {
  past: "text-slate-400 line-through",
  today: "text-accent font-semibold",
  soon: "text-amber-700 font-semibold",
  upcoming: "text-slate-800 font-semibold",
};

export function KeyDatesSidebar() {
  const electionDay = new Date(election.electionDay + "T07:00:00+01:00");
  const daysToElection = daysBetween(TODAY, electionDay);

  return (
    <aside className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
        <div className="text-xs uppercase tracking-widest text-slate-500">
          Polling day
        </div>
        <div className="mt-1 font-serif text-2xl font-semibold leading-tight text-ink">
          Thursday 7 May 2026
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-serif text-5xl font-bold leading-none text-ink">
            {Math.max(0, daysToElection)}
          </span>
          <span className="text-sm text-slate-600">
            {daysToElection === 1 ? "day" : "days"} to go
          </span>
        </div>
        <div className="mt-3 text-xs text-slate-500">
          Polls open 7:00am — 10:00pm. Bring photo ID.
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-1 font-serif text-lg font-semibold">Key milestones</h3>
        <p className="mb-4 text-xs text-slate-500">
          Don't miss a deadline.
        </p>

        <ol className="relative space-y-5">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-1 bottom-1 w-px bg-slate-200"
          />
          {election.keyDates.map((d) => {
            const status = statusFor(d.iso);
            return (
              <li key={d.label} className="relative pl-7">
                <span
                  className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full ring-4 ${dotStyles[status]}`}
                  aria-hidden="true"
                />
                <div
                  className={`text-[11px] uppercase tracking-widest ${
                    status === "past"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {d.label}
                </div>
                <div className={`mt-0.5 text-sm leading-snug ${labelStyles[status]}`}>
                  {d.date}
                </div>
                {d.note && status !== "past" && (
                  <div className="mt-1 text-xs text-slate-500">{d.note}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="mb-2 font-serif text-lg font-semibold">At a glance</h3>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Mayor seats</dt>
            <dd className="font-semibold">{election.seats.mayor}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Councillors</dt>
            <dd className="font-semibold">{election.seats.councillors}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Wards</dt>
            <dd className="font-semibold">{election.seats.wards}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Voting system</dt>
            <dd className="font-semibold">FPTP</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
