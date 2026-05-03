"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { CtaBlock } from "@/components/cta-block";
import { Check, Shield, Eye, Box, Bolt } from "@/components/icons";
import { catalogProducts } from "@/lib/data";

const categories = [
  { id: "all", label: "All Categories" },
  { id: "power-tools", label: "Power Tools" },
  { id: "test", label: "Test & Measurement" },
  { id: "safety", label: "Safety & PPE" },
  { id: "fasteners", label: "Fasteners" },
  { id: "consumables", label: "Consumables" },
  { id: "storage", label: "Storage" },
  { id: "lighting", label: "Lighting" },
  { id: "mro", label: "MRO Essentials" },
];

const brands = [
  "All Brands",
  "Milwaukee",
  "Fluke",
  "Mitutoyo",
  "Klein Tools",
  "DeWalt",
  "Wiha",
  "Uvex",
  "TEKTON",
  "CamelBak",
  "Anker",
];

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Name"];

const trustItems = [
  {
    icon: Shield,
    title: "Quality Brands",
    sub: "Built around your needs.",
  },
  {
    icon: Box,
    title: "Custom Stocking",
    sub: "Know what's used.",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    sub: "See usage as it happens.",
  },
  {
    icon: Bolt,
    title: "Secure & Compliant",
    sub: "Access. Audit. Control.",
  },
];

const partners = ["CAT", "BOSCH", "MILWAUKEE", "KLEIN TOOLS", "FLUKE"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("Featured");

  const filtered = useMemo(() => {
    let r = catalogProducts;
    if (category !== "all") r = r.filter((p) => p.category === category);
    if (search) {
      const s = search.toLowerCase();
      r = r.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.brand.toLowerCase().includes(s),
      );
    }
    if (sort === "Price: Low to High") {
      r = [...r].sort(
        (a, b) =>
          parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          parseFloat(b.price.replace(/[^0-9.]/g, "")),
      );
    } else if (sort === "Price: High to Low") {
      r = [...r].sort(
        (a, b) =>
          parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          parseFloat(a.price.replace(/[^0-9.]/g, "")),
      );
    } else if (sort === "Name") {
      r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    }
    return r;
  }, [search, category, sort]);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Products", href: "/products" }]}
        eyebrow="Products / Catalog"
        title="Featured Supplies."
        description="Curated products. Proven brands. Built for the field."
      />

      {/* Filter bar */}
      <Section bordered containerClassName="py-6 lg:py-8">
        <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-3">
          <input
            type="search"
            placeholder="Search supplies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[var(--bg-deep)] border border-[var(--border-line)] focus:border-[var(--orange)] outline-none px-4 py-3 text-sm text-white placeholder:text-[var(--text-muted)]"
          />
          <Select
            value={category}
            onChange={setCategory}
            options={categories.map((c) => ({ value: c.id, label: c.label }))}
          />
          <Select
            value={"All Brands"}
            onChange={() => {}}
            options={brands.map((b) => ({ value: b, label: b }))}
          />
          <Select
            value={sort}
            onChange={setSort}
            options={sortOptions.map((s) => ({ value: s, label: `Sort: ${s}` }))}
          />
        </div>
      </Section>

      {/* Catalog */}
      <Section bordered>
        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          <aside>
            <div className="font-display text-sm tracking-[0.18em] uppercase text-white mb-4">
              Categories
            </div>
            <nav className="flex flex-col">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`text-left text-sm py-2.5 border-b border-[var(--border-line)] flex items-center justify-between transition-colors ${
                    category === c.id
                      ? "text-[var(--orange)]"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                >
                  {c.label}
                  {category === c.id && (
                    <Check className="w-4 h-4 text-[var(--orange)]" />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          <div>
            <div className="text-sm text-[var(--text-secondary)] mb-4">
              {filtered.length} item{filtered.length !== 1 ? "s" : ""}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} cta="Add to Node" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section bordered>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-line)] border border-[var(--border-line)]">
          {trustItems.map((t) => (
            <div
              key={t.title}
              className="bg-[var(--bg-deep)] p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 grid place-items-center bg-[rgba(245,107,31,0.08)] border border-[rgba(245,107,31,0.3)]">
                <t.icon className="w-5 h-5 text-[var(--orange)]" />
              </div>
              <div>
                <div className="font-display text-base uppercase text-white tracking-wide">
                  {t.title}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">
                  {t.sub}
                </div>
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
          eyebrow="Custom Stocking"
          title="Stock anything your operation needs."
          description="If we don't already have it on the shelf, we'll source it. Tell us what your teams need and we'll spec the perfect inventory."
          primary={{ label: "Talk to a Stocking Expert", href: "/about#contact" }}
          secondary={{ label: "See Industries", href: "/industries" }}
        />
      </Section>
    </>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[var(--bg-deep)] border border-[var(--border-line)] focus:border-[var(--orange)] outline-none px-4 py-3 text-sm text-white appearance-none pr-10 min-w-[180px]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f56b1f' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
        backgroundSize: "14px",
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-[var(--bg-deep)]">
          {o.label}
        </option>
      ))}
    </select>
  );
}
