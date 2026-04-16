import { getParty } from "@/data/parties";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Deterministic hue derived from a string — used as a fallback when no party
// color is available.
function hashHue(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return h;
}

export function CandidateAvatar({
  name,
  partySlug,
  size = 56,
  ring = false,
}: {
  name: string;
  partySlug?: string;
  size?: number;
  ring?: boolean;
}) {
  const party = partySlug ? getParty(partySlug) : undefined;
  const bg = party?.hex ?? `hsl(${hashHue(name)}, 55%, 38%)`;
  const fontSize = Math.round(size * 0.38);

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-serif font-semibold text-white shadow-sm ${
        ring ? "ring-4 ring-white" : ""
      }`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${bg} 0%, ${bg}cc 100%)`,
        fontSize,
        letterSpacing: "0.02em",
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
