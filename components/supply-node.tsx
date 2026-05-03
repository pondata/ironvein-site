type Variant = "orange" | "blue" | "green" | "red" | "purple" | "cyan";

const palette: Record<Variant, { c: string; c2: string }> = {
  orange: { c: "#f56b1f", c2: "#ff9a4d" },
  blue: { c: "#4aa6ff", c2: "#7dc4ff" },
  green: { c: "#43d18a", c2: "#7be4af" },
  red: { c: "#ef4d4d", c2: "#ff7878" },
  purple: { c: "#b06bff", c2: "#d39bff" },
  cyan: { c: "#36c8d6", c2: "#6ee0eb" },
};

export function SupplyNode({
  variant = "orange",
  className = "",
  showLabel = true,
}: {
  variant?: Variant;
  className?: string;
  showLabel?: boolean;
}) {
  const { c, c2 } = palette[variant];
  const id = `node-${variant}`;

  return (
    <svg
      viewBox="0 0 360 540"
      className={className}
      role="img"
      aria-label="Iron Vein Supply Node"
    >
      <defs>
        <linearGradient id={`${id}-glow`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={c2} stopOpacity="0.9" />
          <stop offset="50%" stopColor={c} stopOpacity="0.4" />
          <stop offset="100%" stopColor={c} stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`${id}-body`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1c2330" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
        <linearGradient id={`${id}-screen`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0a0d12" />
          <stop offset="100%" stopColor="#161b24" />
        </linearGradient>
        <filter id={`${id}-soft`}>
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Floor reflection */}
      <ellipse
        cx="180"
        cy="525"
        rx="160"
        ry="14"
        fill={c}
        opacity="0.18"
        filter={`url(#${id}-soft)`}
      />

      {/* Main body */}
      <rect
        x="22"
        y="14"
        width="316"
        height="500"
        rx="6"
        fill={`url(#${id}-body)`}
        stroke="#2c3442"
        strokeWidth="1.5"
      />

      {/* Header */}
      <rect x="36" y="28" width="288" height="42" rx="3" fill="#0a0d12" />
      <rect x="36" y="28" width="288" height="42" rx="3" fill="none" stroke="#262d39" />
      <text
        x="180"
        y="55"
        fill="#f4f5f7"
        fontFamily="Oswald, sans-serif"
        fontWeight="700"
        fontSize="14"
        textAnchor="middle"
        letterSpacing="3"
      >
        IRON VEIN
      </text>
      <text
        x="180"
        y="68"
        fill={c}
        fontFamily="Oswald, sans-serif"
        fontWeight="500"
        fontSize="6.5"
        textAnchor="middle"
        letterSpacing="6"
      >
        SUPPLY
      </text>

      {/* Edge glow strips */}
      <rect x="22" y="78" width="6" height="370" fill={`url(#${id}-glow)`} opacity="0.85" />
      <rect x="332" y="78" width="6" height="370" fill={`url(#${id}-glow)`} opacity="0.85" />

      {/* Display window glass */}
      <rect
        x="48"
        y="86"
        width="220"
        height="350"
        rx="2"
        fill={`url(#${id}-screen)`}
        stroke="#1f2632"
      />

      {/* Internal grid of products */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 56 + col * 53;
          const y = 96 + row * 67;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={x}
                y={y}
                width="46"
                height="58"
                rx="1"
                fill="#0e131b"
                stroke="#1c232f"
              />
              <rect
                x={x + 4}
                y={y + 6}
                width="38"
                height="36"
                rx="1"
                fill="#1c2330"
                opacity="0.6"
              />
              <rect
                x={x + 8}
                y={y + 46}
                width="30"
                height="2"
                fill={c}
                opacity="0.4"
              />
            </g>
          );
        }),
      )}

      {/* Status panel right */}
      <rect x="278" y="86" width="50" height="350" rx="2" fill="#0a0d12" stroke="#1f2632" />
      {/* LED column */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <circle
          key={i}
          cx="290"
          cy={104 + i * 22}
          r="2.5"
          fill={c}
          opacity={0.3 + Math.random() * 0.7}
        />
      ))}
      <rect x="298" y="100" width="22" height="62" rx="1" fill="#0e131b" stroke="#1c232f" />
      <rect x="302" y="105" width="14" height="3" fill={c} opacity="0.85" />
      <rect x="302" y="111" width="10" height="2" fill={c} opacity="0.5" />
      <rect x="302" y="116" width="14" height="2" fill={c2} opacity="0.4" />

      {/* Card reader */}
      <rect x="298" y="180" width="22" height="32" rx="1" fill="#0e131b" stroke="#1c232f" />
      <rect x="302" y="186" width="14" height="3" fill="#1c2330" />
      <rect x="302" y="194" width="14" height="14" rx="1" fill="#1c2330" />

      {/* Keypad */}
      <rect x="298" y="230" width="22" height="80" rx="1" fill="#0e131b" stroke="#1c232f" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((cc) => (
          <rect
            key={`${r}-${cc}`}
            x={300 + cc * 6.5}
            y={234 + r * 18}
            width="5.5"
            height="14"
            rx="0.5"
            fill="#1c2330"
          />
        )),
      )}

      {/* Dispense slot */}
      <rect x="48" y="446" width="280" height="58" rx="2" fill="#0a0d12" stroke="#1f2632" />
      <rect x="62" y="462" width="252" height="26" rx="1" fill="#000" />
      <rect x="62" y="462" width="252" height="2" fill={c} opacity="0.3" />

      {showLabel && (
        <text
          x="180"
          y="498"
          fill="#a4abb6"
          fontFamily="Oswald, sans-serif"
          fontSize="6.5"
          letterSpacing="3"
          textAnchor="middle"
        >
          AUTHORIZED ACCESS · 24/7
        </text>
      )}
    </svg>
  );
}

export function MiniSupplyNode({
  variant = "orange",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const { c } = palette[variant];
  return (
    <svg viewBox="0 0 100 130" className={className} aria-hidden>
      <rect
        x="6"
        y="4"
        width="88"
        height="122"
        rx="3"
        fill="#0e131b"
        stroke="#2c3442"
      />
      <rect x="6" y="4" width="3" height="122" fill={c} opacity="0.85" />
      <rect x="91" y="4" width="3" height="122" fill={c} opacity="0.85" />
      <rect x="14" y="10" width="72" height="10" rx="1" fill="#0a0d12" />
      <text
        x="50"
        y="17"
        fill="#f4f5f7"
        fontFamily="Oswald, sans-serif"
        fontSize="4"
        fontWeight="700"
        letterSpacing="1.5"
        textAnchor="middle"
      >
        IRON VEIN
      </text>
      <rect x="14" y="24" width="50" height="92" rx="1" fill="#0a0d12" stroke="#1c232f" />
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1, 2].map((cc) => (
          <rect
            key={`${r}-${cc}`}
            x={17 + cc * 16}
            y={28 + r * 14}
            width="13"
            height="11"
            rx="0.4"
            fill="#161b24"
            stroke="#1c232f"
            strokeWidth="0.4"
          />
        )),
      )}
      <rect x="68" y="24" width="18" height="92" rx="1" fill="#0a0d12" stroke="#1c232f" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle key={i} cx="72" cy={30 + i * 9} r="0.9" fill={c} opacity="0.7" />
      ))}
      <rect x="78" y="30" width="6" height="20" rx="0.4" fill="#161b24" />
      <rect x="78" y="56" width="6" height="6" rx="0.4" fill="#161b24" />
      <rect x="78" y="68" width="6" height="20" rx="0.4" fill="#161b24" />
    </svg>
  );
}
