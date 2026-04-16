import Link from "next/link";
import { wards } from "@/data/wards";

export const metadata = { title: "Wards — Tower Hamlets 2026" };

export default function WardsIndex() {
  return (
    <div>
      <div className="mb-2 text-sm uppercase tracking-widest text-accent">
        The 20 wards
      </div>
      <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">
        Your ward, your councillors.
      </h1>
      <p className="mb-2 max-w-3xl text-slate-700">
        Tower Hamlets is divided into 20 wards which together elect all 45
        councillors. Each ward elects 1–3 councillors depending on population,
        and you get as many votes as there are seats in your ward.
      </p>
      <p className="mb-8 max-w-3xl text-slate-700">
        Not sure which ward you live in? The Tower Hamlets Council{" "}
        <a
          className="text-accent underline"
          href="https://www.towerhamlets.gov.uk/lgnl/council_and_democracy/councillors_democracy/my_councillor/councillors_and_wards.aspx"
        >
          ward finder
        </a>{" "}
        will tell you — or put your postcode into{" "}
        <a
          className="text-accent underline"
          href="https://whocanivotefor.co.uk"
        >
          Who Can I Vote For
        </a>{" "}
        for the complete list of candidates in your ward.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {wards.map((w) => (
          <Link
            key={w.slug}
            href={`/wards/${w.slug}`}
            className="card block"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-lg font-semibold">{w.name}</h2>
              <span className="text-xs text-slate-500">
                {w.seats} seat{w.seats > 1 ? "s" : ""}
              </span>
            </div>
            {w.notes && (
              <p className="mt-1 text-sm text-slate-700">{w.notes}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
