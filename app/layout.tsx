import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "Tower Hamlets 2026 — Voter Guide",
  description:
    "An independent, neutral voter guide to the 2026 Tower Hamlets Council and Executive Mayor elections. Every mayoral candidate, every party, every ward.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/mayor", label: "Mayor" },
  { href: "/parties", label: "Parties" },
  { href: "/wards", label: "Wards" },
  { href: "/voting", label: "How to vote" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen font-sans antialiased">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
          <div className="container-narrow flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg font-serif text-lg font-bold text-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #0f172a 100%)",
                }}
                aria-hidden="true"
              >
                TH
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Tower Hamlets · 7 May 2026
                </div>
                <div className="font-serif text-2xl font-semibold text-ink group-hover:text-accent">
                  The Voter Guide
                </div>
              </div>
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-slate-700 hover:text-accent"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="container-narrow py-8">{children}</main>

        <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-sm text-slate-600">
          <div className="container-narrow space-y-2">
            <p>
              Independent, non-partisan voter guide. Not affiliated with any
              political party or with Tower Hamlets Council.
            </p>
            <p>
              Every substantive claim links back to a public source. If you
              spot an inaccuracy, please raise an issue against the project and
              it will be corrected.
            </p>
            <p>
              Official information:{" "}
              <a
                className="text-accent underline"
                href="https://www.towerhamlets.gov.uk/lgnl/council_and_democracy/elections__voting/Election-2026/Tower-Hamlets-Council-and-Executive-Mayor-Elections-Thursday-7-May-2026.aspx"
              >
                Tower Hamlets Council elections
              </a>{" "}
              ·{" "}
              <a
                className="text-accent underline"
                href="https://whocanivotefor.co.uk"
              >
                Who Can I Vote For
              </a>{" "}
              ·{" "}
              <a
                className="text-accent underline"
                href="https://www.electoralcommission.org.uk"
              >
                Electoral Commission
              </a>
            </p>
          </div>
        </footer>
      </body>
      <Analytics />
    </html>
  );
}
