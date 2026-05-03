import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CtaBlock } from "@/components/cta-block";
import { SupplyNode } from "@/components/supply-node";
import {
  ArrowRight,
  Check,
  Cpu,
  Box,
  Sparkle,
  ChartBars,
  Wrench,
  Bolt,
} from "@/components/icons";

const steps = [
  {
    n: "01",
    title: "Consult",
    description: "We listen to your priorities, pain points, and site requirements.",
    icon: Wrench,
  },
  {
    n: "02",
    title: "Design",
    description: "We configure the right node, stock it with your standards, and plan rollout.",
    icon: Cpu,
  },
  {
    n: "03",
    title: "Deploy",
    description: "We deliver, install, and train your team — fast and fuss-free.",
    icon: Box,
  },
  {
    n: "04",
    title: "Optimize",
    description: "We monitor usage, refine inventory, and keep you ahead.",
    icon: ChartBars,
  },
];

const pilotChecks = [
  "30 / 60 / 90 day options",
  "Fixed long-term commitment",
  "Measurable results",
  "Scalable solutions",
];

const partners = ["CAT", "BOSCH", "MILWAUKEE", "KLEIN TOOLS", "FLUKE"];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "How It Works", href: "/how-it-works" }]}
        eyebrow="How It Works / Pilot Program"
        title="Smart Supply. Simple Process."
        description="From first consultation to full deployment, we make it easy to bring automated supply to your site. Four steps, one partner, measurable outcomes."
      />

      {/* Process */}
      <Section bordered>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="label-tag">How It Works</span>
            <h2 className="headline h-xl text-white mt-3 leading-[0.95]">
              The Iron Vein Method.
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              We treat every deployment like a mission: scoped, designed, deployed,
              and continuously optimized. No long-term commitments. No black-box pricing.
            </p>
            <ul className="mt-6 space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5 panel p-5 lg:p-6">
                  <div className="shrink-0 w-12 h-12 grid place-items-center rounded-full bg-[var(--orange)] text-black font-display font-bold">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-display text-lg uppercase tracking-wide text-white">
                        {s.title}
                      </div>
                      <s.icon className="w-5 h-5 text-[var(--orange)] opacity-70" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-24" id="pilot">
            <div className="panel p-7 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--orange)] opacity-10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="divider-orange" />
                  <span className="label-tag">Pilot Program</span>
                </div>
                <h3 className="headline h-lg text-white">
                  See the Impact for Yourself with a Free Pilot.
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  Run a no-risk pilot at your site. We'll deploy a node, stock it
                  with your priorities, and let your team use it for 30, 60, or 90
                  days. Real usage. Real reporting.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {pilotChecks.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-[var(--orange)]" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/about#contact" className="btn-primary">
                    Start a Pilot
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about#contact" className="btn-secondary">
                    Speak with an Expert
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 panel-soft p-5 flex items-center gap-5">
              <SupplyNode
                variant="orange"
                showLabel={false}
                className="w-24 h-auto"
              />
              <div>
                <div className="font-display text-base uppercase tracking-wide text-white">
                  Forge Node Pilot
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Most popular pilot configuration. Industrial-grade,
                  customizable from day one.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What we measure */}
      <Section bordered>
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-10">
          <div>
            <span className="label-tag">What We Measure</span>
            <h3 className="headline h-lg text-white mt-3">
              Outcomes you can defend in a budget meeting.
            </h3>
          </div>
          <Link href="/case-studies" className="btn-ghost">
            See Real Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
          {[
            { metric: "68%", label: "Reduction in tool downtime", icon: Bolt },
            { metric: "42%", label: "Increase in crew efficiency", icon: Sparkle },
            { metric: "31%", label: "Lower MRO spend", icon: ChartBars },
            { metric: "24/7", label: "Authorized access coverage", icon: Cpu },
          ].map((s) => (
            <div key={s.label} className="bg-[var(--bg-deep)] p-7">
              <s.icon className="w-7 h-7 text-[var(--orange)]" />
              <div className="font-display text-5xl text-white mt-4 leading-none">
                {s.metric}
              </div>
              <div className="text-sm text-[var(--text-secondary)] mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted by */}
      <Section bordered>
        <div className="text-center">
          <span className="label-tag">Trusted by Teams that Can&apos;t Afford Downtime</span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <div
                key={p}
                className="font-display text-2xl tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bordered>
        <CtaBlock
          eyebrow="Ready to Start"
          title="Bring an Iron Vein Node to your site."
          description="A 20-minute call gets you a fitted node, an inventory plan, and a pilot timeline."
          primary={{ label: "Get a Pilot", href: "/about#contact" }}
          secondary={{ label: "Talk to an Expert", href: "/about#contact" }}
        />
      </Section>
    </>
  );
}
