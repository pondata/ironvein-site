import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims =
    size === "lg"
      ? { mark: 44, title: "text-2xl", sub: "text-[0.62rem]" }
      : size === "sm"
        ? { mark: 26, title: "text-base", sub: "text-[0.5rem]" }
        : { mark: 34, title: "text-xl", sub: "text-[0.55rem]" };

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <svg
        width={dims.mark}
        height={dims.mark}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M8 6 L24 2 L40 6 L40 30 L24 46 L8 30 Z"
          stroke="#f56b1f"
          strokeWidth="2"
          fill="rgba(245,107,31,0.08)"
        />
        <path
          d="M16 12 L24 9 L32 12 L32 28 L24 38 L16 28 Z"
          stroke="#f56b1f"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
        />
        <rect x="22.5" y="14" width="3" height="20" fill="#f56b1f" />
        <rect x="18" y="20" width="12" height="2" fill="#f56b1f" opacity="0.7" />
      </svg>
      <div className="leading-none">
        <div
          className={`font-display font-bold tracking-[0.04em] ${dims.title} text-white`}
        >
          IRON VEIN
        </div>
        <div
          className={`font-display tracking-[0.42em] mt-0.5 text-[var(--orange)] ${dims.sub}`}
        >
          SUPPLY
        </div>
      </div>
    </Link>
  );
}
