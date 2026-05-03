import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { SupplyNode } from "@/components/supply-node";
import { ProductCard } from "@/components/product-card";
import {
  ArrowRight,
  Check,
  Download,
  Wrench,
  Shield,
  Box,
  Cpu,
  Bolt,
} from "@/components/icons";
import { nodes, featuredProducts, type NodeKey } from "@/lib/data";

const valid: NodeKey[] = ["forge", "circuit", "field", "shift", "venue", "campus"];

export function generateStaticParams() {
  return valid.map((node) => ({ node }));
}

export default async function NodeDetailPage(props: PageProps<"/supply-nodes/[node]">) {
  const { node } = await props.params;
  if (!valid.includes(node as NodeKey)) notFound();
  const n = nodes[node as NodeKey];

  const popular = featuredProducts.slice(0, 5);
  const featureIcons = [Wrench, Shield, Box, Cpu, Bolt];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--border-line)]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: `var(--orange, #f56b1f)`,
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="flex gap-2 text-xs font-display tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-6">
              <Link href="/supply-nodes" className="hover:text-[var(--orange)]">
                Supply Nodes
              </Link>
              <span className="text-[var(--orange)]">›</span>
              <span className="text-white">{n.name}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="divider-orange" />
              <span className="label-tag">Supply Node Series</span>
            </div>
            <h1 className="headline h-mega text-white text-balance">{n.name}</h1>
            <p className="mt-4 text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {n.description}
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {n.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-[var(--orange)]" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about#contact" className="btn-primary">
                Bring a Node to Your Site
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-secondary">
                <Download className="w-4 h-4" />
                Download Specs
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--orange)] opacity-20 blur-3xl" />
              <SupplyNode
                variant={n.variant}
                className="relative w-[280px] lg:w-[360px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPECS + IDEAL FOR */}
      <Section bordered>
        <div className="grid lg:grid-cols-2 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
          <div className="bg-[var(--bg-deep)] p-6 lg:p-8">
            <span className="label-tag">Key Specifications</span>
            <div className="mt-5 divide-y divide-[var(--border-line)]">
              {n.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between py-3 text-sm gap-6"
                >
                  <span className="text-[var(--text-secondary)]">{s.label}</span>
                  <span className="text-white text-right font-display tracking-wide">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--bg-deep)] p-6 lg:p-8">
            <span className="label-tag">Ideal For</span>
            <ul className="mt-5 space-y-3">
              {n.bestFor.map((b, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <li
                    key={b}
                    className="flex items-center gap-4 panel-soft px-4 py-3"
                  >
                    <Icon className="w-5 h-5 text-[var(--orange)] shrink-0" />
                    <span className="text-sm text-white">{b}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* POPULAR ITEMS */}
      <Section bordered>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <span className="label-tag">Popular in this Node</span>
            <div className="font-display text-2xl uppercase text-white mt-2 leading-tight">
              Curated for {n.name} environments.
            </div>
          </div>
          <Link href="/products" className="btn-ghost">
            See All Supplies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      <Section bordered>
        <CtaBlock
          eyebrow={`Ready to Deploy a ${n.name}?`}
          title="Let's customize a solution for your site."
          description="A scoping call to confirm fit, install timeline, and curated inventory."
          primary={{ label: "Bring a Node to Your Site", href: "/about#contact" }}
          secondary={{ label: "Download Spec Sheet", href: "#" }}
        />
      </Section>
    </>
  );
}
