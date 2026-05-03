import Link from "next/link";
import type { SVGProps } from "react";
import { ArrowRight } from "./icons";

export function IndustryTile({
  icon: Icon,
  name,
  href,
  blurb,
  small = false,
}: {
  icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  name: string;
  href: string;
  blurb?: string;
  small?: boolean;
}) {
  if (small) {
    return (
      <Link
        href={href}
        className="panel-soft hover:bg-[rgba(245,107,31,0.05)] hover:border-[var(--orange)] transition-all p-5 flex flex-col items-center text-center gap-3 group"
      >
        <Icon className="w-10 h-10 text-[var(--orange)]" />
        <div className="font-display text-sm tracking-[0.08em] uppercase text-white">
          {name}
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="panel group hover:border-[var(--orange)] transition-colors flex flex-col overflow-hidden"
    >
      <div className="aspect-[4/3] relative bg-[var(--bg-deep)] grid-bg flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,107,31,0.1)] via-transparent to-[rgba(245,107,31,0.04)]" />
        <Icon className="w-20 h-20 text-[var(--orange)] relative z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[var(--orange)] to-transparent opacity-50" />
      </div>
      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg lg:text-xl uppercase tracking-wide text-white">
          {name}
        </h3>
        {blurb && (
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
            {blurb}
          </p>
        )}
        <div className="mt-4 inline-flex items-center gap-2 text-[var(--orange)] font-display text-xs tracking-[0.18em] uppercase">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
