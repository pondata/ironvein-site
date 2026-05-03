import Link from "next/link";
import { Logo } from "./logo";
import { Phone, Mail, MapPin, Linkedin, Youtube, TwitterX } from "./icons";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Overview", href: "/industries" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Benefits", href: "/about#benefits" },
      { label: "Pilot Program", href: "/how-it-works#pilot" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing Labs", href: "/industries#manufacturing" },
      { label: "Robotics & Engineering", href: "/industries#robotics" },
      { label: "Construction & Trades", href: "/industries#construction" },
      { label: "Warehouses & Logistics", href: "/industries#warehouses" },
      { label: "Events & Venues", href: "/industries#events" },
      { label: "Campuses & Housing", href: "/industries#campuses" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Node Types", href: "/supply-nodes" },
      { label: "Featured Supplies", href: "/products" },
      { label: "All Supplies", href: "/products" },
      { label: "Custom Stocking", href: "/products#custom" },
    ],
  },
  {
    title: "Supply Nodes",
    links: [
      { label: "Forge Node", href: "/supply-nodes/forge" },
      { label: "Circuit Node", href: "/supply-nodes/circuit" },
      { label: "Field Node", href: "/supply-nodes/field" },
      { label: "Shift Node", href: "/supply-nodes/shift" },
      { label: "Venue Node", href: "/supply-nodes/venue" },
      { label: "Campus Node", href: "/supply-nodes/campus" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Partners", href: "/about#partners" },
      { label: "Careers", href: "/about#careers" },
      { label: "News", href: "/about#news" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-line)] bg-[var(--bg-deep)] mt-12">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Automated supply infrastructure for the places where downtime
              costs money.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <SocialLink href="https://linkedin.com" Icon={Linkedin} />
              <SocialLink href="https://youtube.com" Icon={Youtube} />
              <SocialLink href="https://x.com" Icon={TwitterX} />
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[0.7rem] tracking-[0.22em] uppercase text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--orange)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-line)] flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:max-w-sm">
            <h4 className="font-display text-[0.72rem] tracking-[0.22em] uppercase text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Phone className="w-4 h-4 text-[var(--orange)]" />
                (864) 555-0147
              </li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Mail className="w-4 h-4 text-[var(--orange)]" />
                hello@ironveinsupply.com
              </li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-[var(--orange)]" />
                Greenville, SC
              </li>
            </ul>
          </div>
          <div className="flex-1" />
          <Link href="/about#contact" className="btn-primary self-start">
            Get a Pilot
          </Link>
        </div>
      </div>

      <div className="border-t border-[var(--border-line)]">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div>© 2026 Iron Vein Supply. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--orange)]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--orange)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  Icon,
}: {
  href: string;
  Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 grid place-items-center border border-[var(--border-line)] hover:border-[var(--orange)] hover:text-[var(--orange)] text-[var(--text-secondary)] transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
