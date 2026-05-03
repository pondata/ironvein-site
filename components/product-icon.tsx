type Category =
  | "power-tools"
  | "test"
  | "safety"
  | "fasteners"
  | "consumables"
  | "storage"
  | "lighting"
  | "mro";

export function ProductIcon({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  const props = { className, viewBox: "0 0 120 120", fill: "none" as const };
  switch (category) {
    case "power-tools":
      return (
        <svg {...props}>
          <defs>
            <linearGradient id="pt-g" x1="0" x2="1">
              <stop offset="0" stopColor="#f56b1f" />
              <stop offset="1" stopColor="#c4501a" />
            </linearGradient>
          </defs>
          <rect x="20" y="40" width="60" height="32" rx="4" fill="url(#pt-g)" />
          <rect x="32" y="72" width="22" height="34" rx="3" fill="#1c2330" stroke="#2c3442" />
          <rect x="80" y="46" width="22" height="20" rx="2" fill="#1c2330" stroke="#2c3442" />
          <circle cx="92" cy="56" r="6" fill="#0a0d12" stroke="#f56b1f" strokeWidth="1.5" />
          <rect x="22" y="44" width="14" height="4" fill="#fff" opacity="0.3" />
        </svg>
      );
    case "test":
      return (
        <svg {...props}>
          <rect x="22" y="20" width="60" height="80" rx="4" fill="#fbbf24" stroke="#000" strokeWidth="1" />
          <rect x="30" y="30" width="44" height="22" rx="2" fill="#0a0d12" />
          <text x="52" y="46" fill="#43d18a" fontFamily="monospace" fontSize="14" textAnchor="middle">88.8</text>
          <circle cx="38" cy="68" r="5" fill="#1c2330" stroke="#0a0d12" />
          <circle cx="52" cy="68" r="5" fill="#1c2330" stroke="#0a0d12" />
          <circle cx="66" cy="68" r="5" fill="#1c2330" stroke="#0a0d12" />
          <rect x="30" y="80" width="44" height="14" rx="1" fill="#0a0d12" />
          <line x1="86" y1="40" x2="100" y2="20" stroke="#ef4d4d" strokeWidth="2" />
          <line x1="86" y1="60" x2="100" y2="80" stroke="#000" strokeWidth="2" />
          <line x1="86" y1="50" x2="100" y2="50" stroke="#fbbf24" strokeWidth="2" />
        </svg>
      );
    case "safety":
      return (
        <svg {...props}>
          <path d="M20 60 Q60 40 100 60 L100 70 Q60 60 20 70 Z" fill="#0a0d12" stroke="#f56b1f" strokeWidth="1.5" />
          <path d="M22 60 Q60 45 98 60 L98 64 Q60 52 22 64 Z" fill="#1c2330" />
          <ellipse cx="60" cy="58" rx="38" ry="6" fill="#36c8d6" opacity="0.5" />
          <rect x="14" y="62" width="6" height="14" rx="1" fill="#1c2330" stroke="#2c3442" />
          <rect x="100" y="62" width="6" height="14" rx="1" fill="#1c2330" stroke="#2c3442" />
        </svg>
      );
    case "fasteners":
      return (
        <svg {...props}>
          <rect x="20" y="20" width="80" height="80" rx="2" fill="#1c2330" stroke="#2c3442" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <g key={`${r}-${c}`}>
                <circle
                  cx={32 + c * 18}
                  cy={32 + r * 18}
                  r="6"
                  fill="#0a0d12"
                  stroke="#2c3442"
                />
                <circle cx={32 + c * 18} cy={32 + r * 18} r="3" fill="#a4abb6" />
              </g>
            )),
          )}
        </svg>
      );
    case "consumables":
      return (
        <svg {...props}>
          <rect x="22" y="32" width="76" height="60" rx="4" fill="#1c2330" stroke="#2c3442" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={28 + i * 14}
              y={40}
              width="10"
              height="44"
              rx="1"
              fill="#0a0d12"
              stroke="#262d39"
            />
          ))}
          <rect x="22" y="32" width="76" height="6" fill="#f56b1f" opacity="0.5" />
        </svg>
      );
    case "storage":
      return (
        <svg {...props}>
          <path
            d="M20 40 L60 24 L100 40 L100 92 L60 108 L20 92 Z"
            fill="#1c2330"
            stroke="#2c3442"
          />
          <path d="M20 40 L60 56 L100 40" stroke="#f56b1f" fill="none" />
          <path d="M60 56 L60 108" stroke="#f56b1f" fill="none" opacity="0.5" />
          <rect x="48" y="68" width="24" height="20" rx="1" fill="#0a0d12" />
        </svg>
      );
    case "lighting":
      return (
        <svg {...props}>
          <circle cx="60" cy="60" r="22" fill="#0a0d12" stroke="#2c3442" strokeWidth="2" />
          <circle cx="60" cy="60" r="14" fill="#fbbf24" opacity="0.85" />
          <circle cx="60" cy="60" r="6" fill="#fff" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="60"
              y1="60"
              x2={60 + Math.cos((deg * Math.PI) / 180) * 50}
              y2={60 + Math.sin((deg * Math.PI) / 180) * 50}
              stroke="#fbbf24"
              strokeWidth="1.5"
              opacity="0.4"
            />
          ))}
        </svg>
      );
    case "mro":
    default:
      return (
        <svg {...props}>
          <circle cx="40" cy="40" r="14" fill="#1c2330" stroke="#2c3442" strokeWidth="2" />
          <circle cx="40" cy="40" r="5" fill="#0a0d12" />
          <path
            d="M40 54 L70 84 L84 70 L54 40"
            stroke="#f56b1f"
            strokeWidth="6"
            fill="none"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="40" r="14" fill="none" stroke="#f56b1f" strokeWidth="1" />
        </svg>
      );
  }
}
