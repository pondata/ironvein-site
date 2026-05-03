import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  containerClassName,
  bordered = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bordered?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        bordered && "border-b border-[var(--border-line)]",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1320px] px-5 lg:px-8 py-14 lg:py-20",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className="divider-orange" />
          <span className="label-tag">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="headline h-xl text-white text-balance">{title}</h2>
      )}
      {description && (
        <p className="mt-5 text-[var(--text-secondary)] text-base lg:text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
