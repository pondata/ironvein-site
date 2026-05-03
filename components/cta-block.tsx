import Link from "next/link";
import { ArrowRight } from "./icons";

export function CtaBlock({
  eyebrow = "Ready to Deploy",
  title,
  description,
  primary = { label: "Bring a Node to Your Site", href: "/about#contact" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="panel relative overflow-hidden">
      <div className="absolute inset-0 diag-stripes opacity-50" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--orange)] opacity-10 blur-3xl" />
      <div className="relative p-8 lg:p-14 grid lg:grid-cols-[2fr_auto] gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="divider-orange" />
            <span className="label-tag">{eyebrow}</span>
          </div>
          <h3 className="headline h-lg text-white text-balance">{title}</h3>
          {description && (
            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn-primary">
            {primary.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
