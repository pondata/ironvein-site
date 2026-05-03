import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { EnvironmentImage } from "@/components/environment-image";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Bolt,
  Sparkle,
  ChartBars,
  Check,
} from "@/components/icons";

const values = [
  {
    icon: Shield,
    title: "Relentless Reliability",
    description: "Up time is the metric. Every node, every shift.",
  },
  {
    icon: Bolt,
    title: "Operator First",
    description: "Built by people who&apos;ve worked the floor.",
  },
  {
    icon: Sparkle,
    title: "Security & Compliance",
    description: "Audit trails, access control, and data ownership.",
  },
  {
    icon: ChartBars,
    title: "Continuous Improvement",
    description: "Every deployment teaches the next one.",
  },
];

const partners = ["OSHA", "ISO 9001", "NIST", "SAM.gov", "HUBZone"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "About / Contact", href: "/about" }]}
        eyebrow="About / Contact"
        title="Built by Operators. Focused on Outcomes."
        description="Iron Vein Supply was founded to solve one problem: downtime caused by poor access to critical supplies."
      />

      {/* Mission + Values */}
      <Section bordered id="mission">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="panel p-7 lg:p-9 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--orange)] opacity-10 blur-3xl" />
            <div className="relative">
              <span className="label-tag">Our Mission</span>
              <h2 className="headline h-lg text-white mt-4">
                Deliver automated supply solutions that keep teams safe,
                productive, and prepared — anywhere work happens.
              </h2>
            </div>
          </div>

          <div id="benefits">
            <span className="label-tag">Our Values</span>
            <ul className="mt-5 grid sm:grid-cols-2 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
              {values.map((v) => (
                <li
                  key={v.title}
                  className="bg-[var(--bg-deep)] p-6 flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 grid place-items-center bg-[rgba(245,107,31,0.08)] border border-[rgba(245,107,31,0.3)]">
                    <v.icon className="w-5 h-5 text-[var(--orange)]" />
                  </div>
                  <div>
                    <div className="font-display text-base uppercase tracking-wide text-white">
                      {v.title}
                    </div>
                    <div
                      className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: v.description }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Story + Image */}
      <Section bordered id="story">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border-line)]">
            <EnvironmentImage
              env="manufacturing"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 px-3 py-2 bg-black/70 border border-[var(--border-line)]">
              <span className="label-tag">Founded 2023</span>
            </div>
          </div>
          <div>
            <span className="label-tag">Our Story</span>
            <h3 className="headline h-lg text-white mt-3">
              Iron Vein Supply was founded to solve one problem.
            </h3>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              We&apos;ve worked the floor. We know the cost of a missing tool, a
              dead battery, a forgotten box of fasteners. We built Iron Vein
              Supply to combine rugged hardware, smart software, and operator
              service so no team ever loses a shift to a supply problem again.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                "Veteran-led leadership team",
                "Engineering and operations roots",
                "Customer-funded R&D, not VC theater",
                "Made in the U.S. with U.S. service",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[var(--orange)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact + Hours */}
      <Section bordered id="contact">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <span className="label-tag">Get in Touch</span>
            <h3 className="headline h-lg text-white mt-3">
              Talk to a real human who&apos;s shipped a node.
            </h3>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Pilots, pricing, sourcing custom inventory, or just a sanity check
              on your supply problem — we&apos;re happy to take the call.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[var(--orange)]" />
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">Phone</div>
                  <div className="text-white">(864) 555-0147</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[var(--orange)]" />
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">Email</div>
                  <div className="text-white">hello@ironveinsupply.com</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[var(--orange)]" />
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">HQ</div>
                  <div className="text-white">105 Iron Way, Greenville, SC 29601</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 panel p-5">
              <div className="font-display text-sm tracking-[0.18em] uppercase text-white mb-3">
                Hours
              </div>
              <div className="text-sm text-[var(--text-secondary)] space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-white">7:00am – 8:00pm ET</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat</span>
                  <span className="text-white">8:00am – 12:00pm ET</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun</span>
                  <span>By appointment</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* Partners */}
      <Section bordered id="partners">
        <div className="text-center">
          <span className="label-tag">Partners & Certifications</span>
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
          <p className="mt-6 text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
            Iron Vein Supply is committed to compliance, transparency, and being
            a partner you can trust with your most critical environments.
          </p>
        </div>
      </Section>
    </>
  );
}
