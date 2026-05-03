import Link from "next/link";
import { MiniSupplyNode } from "./supply-node";
import { ArrowRight } from "./icons";

type Variant = "orange" | "blue" | "green" | "red" | "purple" | "cyan";

export function NodeCard({
  variant,
  name,
  blurb,
  href,
}: {
  variant: Variant;
  name: string;
  blurb: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="panel p-5 group flex flex-col gap-4 hover:border-[var(--orange)] transition-colors"
    >
      <div className="bg-[var(--bg-deep)] border border-[var(--border-line)] aspect-[4/5] flex items-center justify-center p-2 overflow-hidden">
        <MiniSupplyNode
          variant={variant}
          className="w-full max-w-[160px] h-auto"
        />
      </div>
      <div>
        <h3 className="font-display text-xl tracking-wide uppercase text-white">
          {name}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
          {blurb}
        </p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border-line)] mt-auto">
        <span className="font-display text-xs tracking-[0.2em] uppercase text-[var(--orange)] group-hover:translate-x-1 transition-transform">
          View Details
        </span>
        <ArrowRight className="w-4 h-4 text-[var(--orange)]" />
      </div>
    </Link>
  );
}
