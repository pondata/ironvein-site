import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { EnvironmentImage } from "@/components/environment-image";
import { ArrowRight, Quote, Check } from "@/components/icons";
import { industries } from "@/lib/data";

const benefitsByIndustry: Record<string, string[]> = {
  manufacturing: [
    "Calibrated tools and consumables at the line",
    "Project-keyed inventory with full audit trail",
    "Reduce mid-shift supply-room runs",
    "Automatic restock from usage data",
  ],
  robotics: [
    "ESD-safe storage for sensitive components",
    "Lab-grade test gear available 24/7",
    "Cost-center reporting per project",
    "Tightly curated, brand-name only",
  ],
  construction: [
    "Trailer-ready, weather-sealed Field Nodes",
    "Cellular-first connectivity at any site",
    "Safety / PPE always at the gate",
    "Crew check-out with photo & signature",
  ],
  warehouses: [
    "Cover three shifts with one node",
    "Replace high-loss supply rooms",
    "Per-shift inventory analytics",
    "Throughput up to 600 transactions/day",
  ],
  events: [
    "Roll-in / roll-out road-case ready",
    "Crew, runner, and rigger SKUs",
    "Event-keyed cost allocation",
    "Quiet operation, branded face plates",
  ],
  campuses: [
    "Campus card / SSO authentication",
    "Departmental cost-center billing",
    "Faculty admin overrides",
    "ADA-accessible interface",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Solutions", href: "/industries" }]}
        eyebrow="Industries / Solutions"
        title={
          <>
            Solutions Built for the Places that Keep the World Moving.
          </>
        }
        description="We design and deploy automated supply infrastructure that adapts to your environment, your people, and your mission — from the line, the lab, and the loading dock to the venue and the campus quad."
      />

      {/* Industry tiles */}
      <Section bordered>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={`#${ind.id}`}
              className="panel group hover:border-[var(--orange)] overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] relative">
                <EnvironmentImage
                  env={ind.env}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 grid place-items-center bg-[rgba(245,107,31,0.15)] border border-[rgba(245,107,31,0.4)] rounded-sm">
                  <ind.icon className="w-5 h-5 text-[var(--orange)]" />
                </div>
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="font-display text-xl uppercase tracking-wide text-white">
                  {ind.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {ind.blurb}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[var(--orange)] font-display text-xs tracking-[0.18em] uppercase">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Detail rows */}
      {industries.map((ind, i) => (
        <Section key={ind.id} bordered id={ind.id}>
          <div
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border-line)]">
              <EnvironmentImage
                env={ind.env}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-2 bg-black/70 border border-[var(--border-line)]">
                <span className="label-tag">Use Case</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ind.icon className="w-6 h-6 text-[var(--orange)]" />
                <span className="label-tag">{ind.name}</span>
              </div>
              <h3 className="headline h-lg text-white text-balance">
                {ind.name} that runs even when you don&apos;t have time to source.
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-pretty">
                {ind.blurb} We deploy supply nodes calibrated for your work, with
                inventory curated from your real usage data — not a generic catalog.
              </p>
              <ul className="mt-5 space-y-3">
                {benefitsByIndustry[ind.id].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-[var(--text-primary)]"
                  >
                    <Check className="w-4 h-4 text-[var(--orange)] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 panel-soft p-5 flex gap-4">
                <Quote className="w-6 h-6 text-[var(--orange)] shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white italic leading-relaxed">
                    “{ind.summary}”
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-2">
                    — {ind.quote}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/about#contact" className="btn-primary">
                  Bring a Node to Your Site
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  Read the Case Study
                </Link>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section bordered>
        <CtaBlock
          eyebrow="Talk to an Expert"
          title="Not sure which environment is yours?"
          description="Tell us where work happens. We'll recommend the right node and stocking plan in a 30-minute scoping call."
          primary={{ label: "Talk to an Expert", href: "/about#contact" }}
          secondary={{ label: "See Node Types", href: "/supply-nodes" }}
        />
      </Section>
    </>
  );
}
