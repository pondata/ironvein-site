import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { SupplyNode } from "@/components/supply-node";
import { ArrowRight, Check } from "@/components/icons";
import { nodes } from "@/lib/data";

const order: Array<keyof typeof nodes> = [
  "forge",
  "circuit",
  "field",
  "shift",
  "venue",
  "campus",
];

export default function SupplyNodesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Supply Nodes", href: "/supply-nodes" }]}
        eyebrow="Supply Nodes"
        title="Automated Supply Nodes. Purpose-Built. Mission-Ready."
        description="Our secure nodes deliver the right items, right when and where you need them. Six configurations. Endless possibilities."
      />

      <Section bordered>
        <div className="space-y-4">
          {order.map((key) => {
            const n = nodes[key];
            return (
              <Link
                key={key}
                href={`/supply-nodes/${key}`}
                className="panel group hover:border-[var(--orange)] transition-colors p-5 lg:p-6 grid grid-cols-[120px_1fr_auto] lg:grid-cols-[160px_1fr_auto] gap-6 lg:gap-8 items-center"
              >
                <div className="bg-[var(--bg-deep)] border border-[var(--border-line)] aspect-[4/5] grid place-items-center p-2">
                  <SupplyNode
                    variant={n.variant}
                    showLabel={false}
                    className="w-full h-full max-w-[110px]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                    {n.name}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--text-secondary)] mt-2 leading-relaxed max-w-2xl">
                    {n.tagline}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--text-primary)]">
                    {n.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[var(--orange)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-[var(--orange)] font-display text-xs tracking-[0.2em] uppercase">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section bordered>
        <CtaBlock
          eyebrow="Not Sure Which Node Is Right?"
          title="Our team will help you choose the perfect fit."
          description="A 20-minute scoping call. We'll match the node, plan the install, and curate inventory from your real usage."
          primary={{ label: "Talk to an Expert", href: "/about#contact" }}
          secondary={{ label: "See Industries", href: "/industries" }}
        />
      </Section>
    </>
  );
}
