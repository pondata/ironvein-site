"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { EnvironmentImage } from "@/components/environment-image";
import { ArrowRight, Quote } from "@/components/icons";
import { industries } from "@/lib/data";

const tabs = [
  { id: "all", label: "All" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "construction", label: "Construction" },
  { id: "warehouses", label: "Logistics" },
  { id: "events", label: "Events" },
  { id: "campuses", label: "Education" },
];

export default function CaseStudiesPage() {
  const [tab, setTab] = useState("all");
  const filtered =
    tab === "all" ? industries : industries.filter((i) => i.id === tab);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Case Studies", href: "/case-studies" }]}
        eyebrow="Case Studies / Environments"
        title="Real Environments. Real Results."
        description="See how Iron Vein Supply helps teams reduce downtime, control costs, and stay mission-ready in the environments where work actually happens."
      />

      {/* Filter tabs */}
      <Section bordered containerClassName="py-6 lg:py-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-xs font-display tracking-[0.18em] uppercase border transition-colors ${
                tab === t.id
                  ? "bg-[var(--orange)] text-black border-[var(--orange)]"
                  : "border-[var(--border-line)] text-[var(--text-secondary)] hover:border-[var(--orange)] hover:text-[var(--orange)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Case rows */}
      {filtered.map((ind, i) => (
        <Section key={ind.id} bordered id={ind.id}>
          <div
            className={`grid lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch ${
              i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
            }`}
          >
            <div className="panel relative overflow-hidden aspect-[4/3]">
              <EnvironmentImage
                env={ind.env}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 px-3 py-2 bg-black/70 border border-[var(--border-line)] flex items-center gap-2">
                <ind.icon className="w-4 h-4 text-[var(--orange)]" />
                <span className="label-tag">{ind.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="font-display text-sm tracking-[0.2em] uppercase text-[var(--orange)]">
                  Industrial Manufacturer
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-white mt-2 leading-tight">
                  {ind.metric} {ind.metricLabel}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-md">
                  Automated supply access across {filtered.length === 1 ? 4 : 4} locations
                  eliminated mid-shift technical productivity loss.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[var(--orange)] font-display text-xs tracking-[0.18em] uppercase"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="panel p-7 lg:p-9 flex flex-col">
              <span className="label-tag">Outcome</span>
              <div className="mt-5 grid grid-cols-2 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
                <Stat label="Downtime" value={ind.metric} sub={ind.metricLabel} />
                <Stat label="Crews Served" value="120+" sub="across 4 sites" />
                <Stat label="Avg Restock" value="14 days" sub="data-informed" />
                <Stat label="Pilot to Live" value="< 30 days" sub="end-to-end" />
              </div>

              <div className="mt-6 panel-soft p-5 flex gap-4 flex-1">
                <Quote className="w-7 h-7 text-[var(--orange)] shrink-0" />
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
                  Talk to this Customer&apos;s AE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/supply-nodes" className="btn-secondary">
                  See Node
                </Link>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section bordered>
        <CtaBlock
          eyebrow="Ready to Create your Success Story?"
          title="Let's build a solution that delivers results."
          primary={{ label: "Bring a Node to Your Site", href: "/about#contact" }}
          secondary={{ label: "See How It Works", href: "/how-it-works" }}
        />
      </Section>
    </>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-[var(--bg-deep)] p-5">
      <div className="text-[0.65rem] font-display tracking-[0.2em] uppercase text-[var(--text-secondary)]">
        {label}
      </div>
      <div className="font-display text-3xl text-white mt-1 leading-none">
        {value}
      </div>
      <div className="text-xs text-[var(--text-secondary)] mt-1">{sub}</div>
    </div>
  );
}
