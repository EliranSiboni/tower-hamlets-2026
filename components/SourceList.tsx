type Source = { label: string; url: string };

export function SourceList({ sources }: { sources: Source[] }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
        Sources
      </div>
      <ul className="list-disc space-y-1 pl-5 text-slate-700">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              className="text-accent underline"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
