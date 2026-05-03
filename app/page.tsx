import Link from "next/link";
import { SupplyNode } from "@/components/supply-node";
import { NodeCard } from "@/components/node-card";
import { ProductCard } from "@/components/product-card";
import { EnvironmentImage } from "@/components/environment-image";
import { Section, SectionHeader } from "@/components/section";
import {
  ArrowRight,
  PlayCircle,
  Wrench,
  Clock,
  Box,
  ChartBars,
  Cpu,
  GraduationCap,
  Eye,
  Bolt,
  Shield,
  Sparkle,
  Target,
} from "@/components/icons";
import { industries, nodes, featuredProducts } from "@/lib/data";

const heroFeatures = [
  {
    icon: Wrench,
    title: "Project-Critical Items On Demand",
    description: "The right items, right now.",
  },
  {
    icon: Clock,
    title: "Reduce Lost Time",
    description: "Keep work moving.",
  },
  {
    icon: Box,
    title: "Program-Driven Stocking",
    description: "Tailored to your operation.",
  },
  {
    icon: ChartBars,
    title: "Inventory Intelligence",
    description: "Real-time visibility.",
  },
];

const whyChoose = [
  {
    icon: Bolt,
    title: "Rescue Forgotten Tools",
    description: "No more cancelled builds or stranded jobs.",
  },
  {
    icon: Clock,
    title: "Reduce Lost Lab Time",
    description: "Students get what they need, when they need it.",
  },
  {
    icon: GraduationCap,
    title: "Support Student Success",
    description: "Empower hands-on learning with professional-grade tools.",
  },
  {
    icon: Sparkle,
    title: "Increase On-Site Convenience",
    description: "Critical items on demand means less downtime.",
  },
  {
    icon: Target,
    title: "Low-Friction Pilot Deployment",
    description: "Quick install, curated inventory, real results — fast.",
  },
];

const howItWorks = [
  { step: "1", title: "Install the Node", description: "We install a secure, branded node at your space.", icon: Box },
  { step: "2", title: "Stock by Environment", description: "We curate the right inventory for your teams and programs.", icon: Cpu },
  { step: "3", title: "Users Tap & Buy", description: "Students and staff tap, select, and pay with card or mobile.", icon: Sparkle },
  { step: "4", title: "Data Informs Restocking", description: "Usage data keeps inventory optimized and always stocked.", icon: ChartBars },
];

const nodeOrder: Array<keyof typeof nodes> = [
  "forge",
  "circuit",
  "field",
  "shift",
  "venue",
  "campus",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--border-line)]">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[var(--orange)] opacity-[0.10] blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[var(--orange)] opacity-[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr_0.7fr] gap-10 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="divider-orange" />
              <span className="label-tag">Automated. Secure. Always On.</span>
            </div>
            <h1 className="headline h-mega text-white text-balance">
              Automated Supply Infrastructure for High-Friction Environments.
            </h1>
            <p className="mt-6 text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl text-pretty">
              Iron Vein Supply installs secure supply nodes stocked with
              project-critical tools, consumables, chargers, safety essentials,
              and rescue kits — so your teams stay focused and downtime stays
              out of the budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about#contact" className="btn-primary">
                Bring a Node to Your Site
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                <PlayCircle className="w-4 h-4" />
                See it in Action
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--orange)] opacity-20 blur-3xl" />
              <SupplyNode
                variant="orange"
                className="relative w-[260px] lg:w-[340px] h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-6">
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 grid place-items-center bg-[rgba(245,107,31,0.08)] border border-[rgba(245,107,31,0.3)] rounded-sm">
                  <f.icon className="w-5 h-5 text-[var(--orange)]" />
                </div>
                <div>
                  <div className="font-display text-[0.92rem] tracking-wide uppercase text-white leading-tight">
                    {f.title}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">
                    {f.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <Section bordered>
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
          <div>
            <span className="label-tag">Built for the places</span>
            <div className="font-display text-2xl uppercase text-white mt-2 leading-tight">
              Where work happens
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries#${ind.id}`}
                className="bg-[var(--bg-deep)] hover:bg-[rgba(245,107,31,0.05)] p-5 flex flex-col items-center justify-center gap-3 text-center transition-colors group min-h-[140px]"
              >
                <ind.icon className="w-8 h-8 text-[var(--orange)] group-hover:scale-110 transition-transform" />
                <div className="font-display text-[0.78rem] tracking-[0.06em] uppercase text-white leading-tight">
                  {ind.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* NODE TYPES */}
      <Section bordered>
        <SectionHeader eyebrow="Node Types" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
          {nodeOrder.map((key) => {
            const n = nodes[key];
            return (
              <NodeCard
                key={key}
                variant={n.variant}
                name={n.name}
                blurb={n.blurb}
                href={`/supply-nodes/${key}`}
              />
            );
          })}
        </div>
      </Section>

      {/* FEATURED SUPPLIES */}
      <Section bordered>
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
          <div>
            <span className="label-tag">Featured Supplies</span>
            <div className="font-display text-2xl uppercase text-white mt-2 leading-tight">
              Curated. Proven. Stocked.
            </div>
          </div>
          <Link href="/products" className="btn-ghost">
            View All Supplies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Section>

      {/* WHY TEAMS CHOOSE */}
      <Section bordered>
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
          <div>
            <span className="label-tag">Why Teams Choose</span>
            <div className="font-display text-2xl uppercase text-white mt-2 leading-tight">
              Iron Vein Supply
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
            {whyChoose.map((w) => (
              <div
                key={w.title}
                className="bg-[var(--bg-deep)] p-6 flex flex-col gap-3"
              >
                <w.icon className="w-7 h-7 text-[var(--orange)]" />
                <div>
                  <div className="font-display text-[0.92rem] tracking-wide uppercase text-white leading-tight">
                    {w.title}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    {w.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section bordered>
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
          <div>
            <span className="label-tag">How It Works</span>
            <div className="font-display text-2xl uppercase text-white mt-2 leading-tight">
              Smart Supply.
              <br />
              Simple Process.
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="panel p-5 flex flex-col gap-4 min-h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 grid place-items-center rounded-full bg-[var(--orange)] text-black font-display text-sm font-bold">
                      {s.step}
                    </div>
                    <s.icon className="w-7 h-7 text-[var(--orange)] opacity-70 ml-auto" />
                  </div>
                  <div>
                    <div className="font-display text-base uppercase text-white tracking-wide">
                      {s.title}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {s.description}
                    </div>
                  </div>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-4 text-[var(--orange)]">
                    <svg viewBox="0 0 16 8" fill="none">
                      <path
                        d="M0 4h12m-3-3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ENVIRONMENTS */}
      <Section bordered>
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          <div>
            <span className="label-tag">One Platform</span>
            <div className="font-display text-3xl uppercase text-white mt-2 leading-[0.95]">
              Many<br />Environments.
            </div>
            <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-xs">
              Secure. Intelligent. Always On.
            </p>
            <Link href="/case-studies" className="btn-primary mt-6">
              See the Nodes in Action
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {industries.slice(0, 5).map((ind) => (
              <Link
                href={`/case-studies#${ind.id}`}
                key={ind.id}
                className="relative aspect-[3/4] overflow-hidden border border-[var(--border-line)] hover:border-[var(--orange)] transition-colors group"
              >
                <EnvironmentImage
                  env={ind.env}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-display text-sm uppercase tracking-wider text-white leading-tight">
                    {ind.name}
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 grid place-items-center bg-black/60 border border-white/10 group-hover:border-[var(--orange)] group-hover:bg-[var(--orange)]/20 transition-colors">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CORE STRIP */}
      <section className="relative overflow-hidden border-b border-[var(--border-line)]">
        <div className="absolute inset-0 diag-stripes" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(245,107,31,0.04)] to-transparent" />
        <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8 py-12 grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          <CoreStat icon={Clock} title="Automated Access" sub="24/7 availability in the field." />
          <CoreStat icon={Target} title="Mission Ready" sub="Stocked for your operation." />
          <CoreStat icon={Eye} title="Total Visibility" sub="Real-time usage & insights." />
          <CoreStat icon={Shield} title="Maximum Uptime" sub="Keep work moving." />
          <div className="lg:text-right">
            <div className="font-display text-3xl uppercase text-white leading-[0.9]">
              Iron to the Core.
            </div>
            <div className="font-display text-3xl uppercase text-[var(--orange)] leading-[0.9] mt-1">
              Supply that Delivers.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CoreStat({
  icon: Icon,
  title,
  sub,
}: {
  icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-7 h-7 text-[var(--orange)] shrink-0" />
      <div>
        <div className="font-display text-sm tracking-[0.18em] uppercase text-white leading-tight">
          {title}
        </div>
        <div className="text-xs text-[var(--text-secondary)] mt-1">{sub}</div>
      </div>
    </div>
  );
}
