"use client";

import { useEffect, useState } from "react";

export type PollOption = {
  slug: string;
  label: string;
  sublabel?: string;
  hex?: string;
};

type Results = {
  total: number;
  counts: Record<string, number>;
  yourVote: string | null;
};

export function Poll({
  poll,
  title,
  subtitle,
  options,
}: {
  poll: "mayor" | "party";
  title: string;
  subtitle?: string;
  options: PollOption[];
}) {
  const [results, setResults] = useState<Results | null>(null);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/poll/${poll}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data: Results & { error?: string }) => {
        if (cancelled) return;
        if (data.error) {
          setError(data.error);
        } else {
          setResults(data);
          if (data.yourVote) setShowResults(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError("Could not load poll");
      });
    return () => {
      cancelled = true;
    };
  }, [poll]);

  async function vote(choice: string) {
    setError(null);
    setSubmitting(choice);
    try {
      const res = await fetch(`/api/poll/${poll}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Vote failed");
      } else {
        setResults(data);
        setShowResults(true);
      }
    } catch {
      setError("Could not reach server");
    } finally {
      setSubmitting(null);
    }
  }

  const total = results?.total ?? 0;
  const yourVote = results?.yourVote ?? null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <span aria-hidden="true">🗳️</span>
        <h3 className="font-serif text-xl font-semibold">{title}</h3>
      </div>
      {subtitle && <p className="mb-4 text-sm text-slate-600">{subtitle}</p>}

      {error && (
        <div className="mb-4 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {error}
        </div>
      )}

      {!showResults ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {options.map((o) => (
            <button
              key={o.slug}
              onClick={() => vote(o.slug)}
              disabled={submitting !== null}
              className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-accent hover:shadow-sm disabled:opacity-50"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ background: o.hex ?? "#64748b" }}
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-tight group-hover:text-accent">
                  {o.label}
                </span>
                {o.sublabel && (
                  <span className="block text-xs text-slate-500">
                    {o.sublabel}
                  </span>
                )}
              </span>
              {submitting === o.slug && (
                <span className="text-xs text-slate-500">…</span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-2.5">
          {options
            .map((o) => ({
              ...o,
              count: results?.counts[o.slug] ?? 0,
            }))
            .sort((a, b) => b.count - a.count)
            .map((o) => {
              const pct = total === 0 ? 0 : Math.round((o.count / total) * 100);
              const isMine = yourVote === o.slug;
              return (
                <button
                  key={o.slug}
                  onClick={() => vote(o.slug)}
                  disabled={submitting !== null}
                  className="block w-full rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-accent disabled:opacity-50"
                  title="Click to change your vote"
                >
                  <div className="mb-1 flex items-baseline justify-between gap-2">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: o.hex ?? "#64748b" }}
                        aria-hidden="true"
                      />
                      {o.label}
                      {isMine && (
                        <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                          your vote
                        </span>
                      )}
                    </span>
                    <span className="text-sm tabular-nums text-slate-700">
                      {pct}%{" "}
                      <span className="text-xs text-slate-500">({o.count})</span>
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: o.hex ?? "#64748b",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
            <span>
              {total.toLocaleString()} {total === 1 ? "vote" : "votes"} so far
            </span>
            <button
              onClick={() => setShowResults(false)}
              className="text-accent hover:underline"
            >
              ← back to ballot
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
        Unofficial straw poll — not a real vote and not affiliated with the
        Council. One vote per browser; you can change your choice. Your IP and
        a random browser ID are hashed to discourage duplicates and are not
        stored in plain text.
      </p>
    </section>
  );
}
