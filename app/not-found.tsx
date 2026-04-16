import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        404
      </div>
      <h1 className="mb-4 font-serif text-4xl font-bold">
        That page isn't on the ballot.
      </h1>
      <p className="mb-6 text-slate-700">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        ← Back to the voter guide
      </Link>
    </div>
  );
}
