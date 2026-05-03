type Env =
  | "manufacturing"
  | "robotics"
  | "construction"
  | "warehouses"
  | "events"
  | "campuses";

const palette: Record<Env, { c1: string; c2: string; accent: string }> = {
  manufacturing: { c1: "#1a1f2a", c2: "#0a0d12", accent: "#f56b1f" },
  robotics: { c1: "#0e1a2a", c2: "#08111a", accent: "#4aa6ff" },
  construction: { c1: "#1f1a14", c2: "#0d0a07", accent: "#f56b1f" },
  warehouses: { c1: "#181a22", c2: "#0a0d12", accent: "#43d18a" },
  events: { c1: "#1f1230", c2: "#08051a", accent: "#b06bff" },
  campuses: { c1: "#0e1a14", c2: "#080d0a", accent: "#36c8d6" },
};

export function EnvironmentImage({
  env,
  className = "",
  label,
}: {
  env: Env;
  className?: string;
  label?: string;
}) {
  const { c1, c2, accent } = palette[env];
  const id = `env-${env}`;

  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label ?? env}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={accent} stopOpacity="0.5" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#${id}-bg)`} />
      <rect width="800" height="500" fill={`url(#${id}-glow)`} opacity="0.7" />
      {renderEnv(env, accent)}
      <rect width="800" height="500" fill="#000" opacity="0.35" />
    </svg>
  );
}

function renderEnv(env: Env, accent: string) {
  switch (env) {
    case "manufacturing":
      return (
        <g>
          {/* Factory roof trusses */}
          <path d="M0 120 L100 80 L200 120 L300 80 L400 120 L500 80 L600 120 L700 80 L800 120" stroke="#2c3442" strokeWidth="2" fill="none" />
          {/* Beams */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1={i * 100} y1="80" x2={i * 100} y2="500" stroke="#2c3442" strokeWidth="1.5" />
          ))}
          {/* Floor machinery silhouettes */}
          <rect x="60" y="280" width="120" height="180" fill="#0a0d12" stroke="#2c3442" />
          <rect x="220" y="320" width="160" height="140" fill="#0a0d12" stroke="#2c3442" />
          <rect x="420" y="300" width="140" height="160" fill="#0a0d12" stroke="#2c3442" />
          <rect x="600" y="340" width="140" height="120" fill="#0a0d12" stroke="#2c3442" />
          {/* Glow lights */}
          {[120, 280, 480, 670].map((x, i) => (
            <circle key={i} cx={x} cy="100" r="6" fill={accent} opacity="0.85" />
          ))}
        </g>
      );
    case "robotics":
      return (
        <g>
          {/* Robotic arm */}
          <circle cx="600" cy="380" r="40" fill="#0a0d12" stroke="#2c3442" strokeWidth="2" />
          <rect x="590" y="200" width="20" height="200" fill="#1c2330" stroke="#2c3442" />
          <rect x="430" y="190" width="180" height="30" fill="#1c2330" stroke="#2c3442" transform="rotate(-15 520 205)" />
          <rect x="320" y="140" width="120" height="22" fill="#1c2330" stroke="#2c3442" transform="rotate(20 380 151)" />
          <circle cx="320" cy="170" r="14" fill={accent} opacity="0.7" />
          {/* Floor markings */}
          <line x1="0" y1="450" x2="800" y2="450" stroke={accent} strokeWidth="2" opacity="0.5" />
          <line x1="0" y1="470" x2="800" y2="470" stroke={accent} strokeWidth="1" opacity="0.3" />
          {/* Grid */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={i * 100} y1="450" x2={i * 100 + 60} y2="500" stroke={accent} strokeWidth="0.5" opacity="0.2" />
          ))}
        </g>
      );
    case "construction":
      return (
        <g>
          {/* Building skeleton */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v${i}`} x1={100 + i * 130} y1="80" x2={100 + i * 130} y2="500" stroke="#3a3027" strokeWidth="3" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="80" y1={100 + i * 80} x2="780" y2={100 + i * 80} stroke="#3a3027" strokeWidth="2" />
          ))}
          {/* Crane */}
          <line x1="700" y1="500" x2="700" y2="40" stroke="#3a3027" strokeWidth="4" />
          <line x1="700" y1="60" x2="200" y2="60" stroke="#3a3027" strokeWidth="3" />
          <line x1="700" y1="60" x2="780" y2="80" stroke="#3a3027" strokeWidth="2" />
          {/* Sun glow */}
          <circle cx="200" cy="200" r="80" fill={accent} opacity="0.25" />
        </g>
      );
    case "warehouses":
      return (
        <g>
          {/* Pallet racks */}
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <rect x={50 + i * 130} y="120" width="100" height="280" fill="#0a0d12" stroke="#2c3442" />
              <rect x={50 + i * 130} y="160" width="100" height="2" fill="#2c3442" />
              <rect x={50 + i * 130} y="220" width="100" height="2" fill="#2c3442" />
              <rect x={50 + i * 130} y="280" width="100" height="2" fill="#2c3442" />
              <rect x={50 + i * 130} y="340" width="100" height="2" fill="#2c3442" />
              {[170, 230, 290, 350].map((y, j) => (
                <rect
                  key={j}
                  x={56 + i * 130}
                  y={y}
                  width="40"
                  height="20"
                  fill={accent}
                  opacity={0.4 + ((i + j) % 3) * 0.2}
                />
              ))}
            </g>
          ))}
          {/* Floor */}
          <rect x="0" y="400" width="800" height="100" fill="#0a0d12" />
          <line x1="0" y1="430" x2="800" y2="430" stroke={accent} strokeWidth="1" opacity="0.5" />
        </g>
      );
    case "events":
      return (
        <g>
          {/* Lights/spotlights */}
          {[100, 250, 400, 550, 700].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="0" x2={x - 60} y2="500" stroke={accent} strokeWidth="1.5" opacity="0.25" />
              <line x1={x} y1="0" x2={x + 60} y2="500" stroke={accent} strokeWidth="1.5" opacity="0.25" />
              <circle cx={x} cy="40" r="14" fill={accent} opacity="0.7" />
            </g>
          ))}
          {/* Crowd silhouette */}
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={20 + i * 20} cy={420 + (i % 3) * 6} r="10" fill="#0a0d12" />
          ))}
          <rect x="0" y="430" width="800" height="70" fill="#0a0d12" />
          {/* Stage */}
          <rect x="250" y="320" width="300" height="90" fill="#0a0d12" stroke={accent} strokeWidth="1" />
        </g>
      );
    case "campuses":
      return (
        <g>
          {/* Buildings */}
          {[
            { x: 80, w: 140, h: 220 },
            { x: 240, w: 180, h: 280 },
            { x: 440, w: 160, h: 250 },
            { x: 620, w: 130, h: 200 },
          ].map((b, i) => (
            <g key={i}>
              <rect
                x={b.x}
                y={500 - b.h}
                width={b.w}
                height={b.h}
                fill="#0a0d12"
                stroke="#2c3442"
              />
              {Array.from({ length: Math.floor(b.h / 40) }).map((_, r) =>
                Array.from({ length: Math.floor(b.w / 30) }).map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={b.x + 8 + c * 30}
                    y={500 - b.h + 12 + r * 40}
                    width="14"
                    height="20"
                    fill={accent}
                    opacity={Math.random() > 0.5 ? 0.7 : 0.2}
                  />
                )),
              )}
            </g>
          ))}
          {/* Ground */}
          <rect x="0" y="490" width="800" height="10" fill="#080d0a" />
        </g>
      );
  }
}
