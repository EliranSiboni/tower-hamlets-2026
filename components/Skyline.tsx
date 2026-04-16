// A simple stylised East-London skyline accent (Canary Wharf cluster + the
// Shard-shaped silhouette to the west). Decorative only.
//
// `lit` enables animated window dots (each with a randomised delay so they
// blink out of sync). Dots use class .hero-window from globals.css.
export function Skyline({
  className = "",
  lit = false,
}: {
  className?: string;
  lit?: boolean;
}) {
  // Deterministic "random-looking" window positions so SSR & client agree.
  const windows = lit
    ? [
        // Canary Wharf cluster
        { x: 555, y: 60, d: "0s" },
        { x: 555, y: 75, d: "1.1s" },
        { x: 555, y: 90, d: "2.3s" },
        { x: 580, y: 40, d: "0.7s" },
        { x: 580, y: 55, d: "1.6s" },
        { x: 580, y: 70, d: "2.8s" },
        { x: 580, y: 85, d: "0.4s" },
        { x: 615, y: 50, d: "1.4s" },
        { x: 615, y: 70, d: "2.1s" },
        { x: 615, y: 90, d: "0.9s" },
        { x: 640, y: 50, d: "2.0s" },
        { x: 640, y: 70, d: "0.3s" },
        { x: 640, y: 90, d: "1.8s" },
        { x: 670, y: 75, d: "2.5s" },
        { x: 670, y: 95, d: "0.6s" },
        // Shard
        { x: 130, y: 60, d: "1.3s" },
        { x: 130, y: 80, d: "2.7s" },
        { x: 130, y: 100, d: "0.5s" },
        // Tower bridge area
        { x: 339, y: 70, d: "1.9s" },
        { x: 449, y: 70, d: "0.8s" },
      ]
    : [];
  return (
    <svg
      viewBox="0 0 800 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.32" />
        </linearGradient>
      </defs>
      <g fill="url(#sky-fade)">
        {/* Left low buildings */}
        <rect x="0" y="80" width="40" height="40" />
        <rect x="36" y="70" width="28" height="50" />
        <rect x="62" y="60" width="22" height="60" />
        {/* Shard */}
        <polygon points="100,120 130,30 160,120" />
        <rect x="155" y="78" width="18" height="42" />
        <rect x="170" y="65" width="22" height="55" />
        <rect x="190" y="80" width="40" height="40" />
        {/* Mid block */}
        <rect x="230" y="70" width="30" height="50" />
        <rect x="258" y="55" width="28" height="65" />
        <rect x="284" y="80" width="40" height="40" />
        {/* Tower Bridge towers */}
        <rect x="330" y="55" width="18" height="65" />
        <polygon points="324,55 354,55 339,40" />
        <rect x="360" y="85" width="40" height="35" />
        <rect x="400" y="85" width="40" height="35" />
        <rect x="440" y="55" width="18" height="65" />
        <polygon points="434,55 464,55 449,40" />
        {/* Mid block */}
        <rect x="470" y="80" width="35" height="40" />
        <rect x="503" y="65" width="28" height="55" />
        {/* Canary Wharf cluster */}
        <rect x="540" y="40" width="30" height="80" />
        <rect x="568" y="20" width="36" height="100" />
        <polygon points="586,20 580,10 592,10" />
        <rect x="602" y="50" width="28" height="70" />
        <rect x="628" y="30" width="34" height="90" />
        <rect x="660" y="55" width="26" height="65" />
        <rect x="684" y="70" width="32" height="50" />
        {/* Right low */}
        <rect x="714" y="85" width="34" height="35" />
        <rect x="746" y="75" width="28" height="45" />
        <rect x="772" y="85" width="28" height="35" />
      </g>
      {windows.length > 0 && (
        <g fill="#fde68a">
          {windows.map((w, i) => (
            <rect
              key={i}
              x={w.x}
              y={w.y}
              width="2.5"
              height="3.5"
              className="hero-window"
              style={{ animationDelay: w.d }}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
