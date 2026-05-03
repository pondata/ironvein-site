import Link from "next/link";

export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  breadcrumb?: { label: string; href: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--border-line)] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--orange)] opacity-[0.08] blur-3xl" />
      <div
        className={`relative mx-auto max-w-[1320px] px-5 lg:px-8 py-16 lg:py-24 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {breadcrumb && (
          <div
            className={`flex gap-2 text-xs font-display tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-[var(--orange)]">›</span>}
                <Link
                  href={b.href}
                  className="hover:text-[var(--orange)]"
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <div
            className={`flex items-center gap-3 mb-5 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="divider-orange" />
            <span className="label-tag">{eyebrow}</span>
          </div>
        )}
        <h1
          className={`headline h-mega text-white text-balance ${
            align === "center" ? "max-w-4xl mx-auto" : "max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-6 text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed text-pretty ${
              align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
