import type { Party } from "@/data/parties";

export function PartyBadge({
  party,
  size = 48,
}: {
  party: Pick<Party, "name" | "shortName" | "hex">;
  size?: number;
}) {
  const label = (party.shortName ?? party.name)
    .replace(/[^A-Za-z]/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const fontSize = Math.max(11, Math.round(size * 0.32));

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg font-sans font-bold uppercase tracking-wider text-white shadow-sm"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${party.hex} 0%, ${party.hex}d0 100%)`,
        fontSize,
      }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
