import type { SVGProps } from "react";

type Item = {
  icon: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  description: string;
};

export function FeatureRow({ items }: { items: Item[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-[var(--bg-deep)] p-6 lg:p-7 flex items-start gap-4"
        >
          <div className="shrink-0 w-11 h-11 grid place-items-center bg-[rgba(245,107,31,0.08)] border border-[rgba(245,107,31,0.3)] rounded-sm">
            <item.icon className="w-5 h-5 text-[var(--orange)]" />
          </div>
          <div>
            <h4 className="font-display text-white text-base tracking-wide uppercase">
              {item.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StackedFeatureList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4">
          <div className="shrink-0 w-10 h-10 grid place-items-center bg-[rgba(245,107,31,0.08)] border border-[rgba(245,107,31,0.3)] rounded-sm">
            <item.icon className="w-4 h-4 text-[var(--orange)]" />
          </div>
          <div>
            <h4 className="font-display text-white text-[0.95rem] tracking-wide uppercase">
              {item.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
