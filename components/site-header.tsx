"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { ChevronDown, Menu, X, ArrowRight } from "./icons";

const nav = [
  {
    label: "Solutions",
    href: "/industries",
    children: [
      { label: "Manufacturing Labs", href: "/industries#manufacturing" },
      { label: "Robotics & Engineering", href: "/industries#robotics" },
      { label: "Construction & Trades", href: "/industries#construction" },
      { label: "Warehouses & Logistics", href: "/industries#warehouses" },
      { label: "Events & Venues", href: "/industries#events" },
      { label: "Campuses & Housing", href: "/industries#campuses" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Supplies", href: "/products" },
      { label: "Power Tools", href: "/products#power-tools" },
      { label: "Test & Measurement", href: "/products#test" },
      { label: "Safety & PPE", href: "/products#safety" },
      { label: "Custom Stocking", href: "/products#custom" },
    ],
  },
  {
    label: "Supply Nodes",
    href: "/supply-nodes",
    children: [
      { label: "Forge Node", href: "/supply-nodes/forge" },
      { label: "Circuit Node", href: "/supply-nodes/circuit" },
      { label: "Field Node", href: "/supply-nodes/field" },
      { label: "Shift Node", href: "/supply-nodes/shift" },
      { label: "Venue Node", href: "/supply-nodes/venue" },
      { label: "Campus Node", href: "/supply-nodes/campus" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-line)] bg-[rgba(7,9,12,0.85)] backdrop-blur-md">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHover(item.label)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 text-[0.78rem] font-display tracking-[0.16em] uppercase text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3 h-3 opacity-60" />
                )}
              </Link>
              {item.children && hover === item.label && (
                <div className="absolute left-0 top-full pt-2 min-w-[230px]">
                  <div className="panel py-2 shadow-2xl shadow-black/50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--orange)] hover:bg-white/[0.02]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/about#contact" className="btn-primary">
            Bring a Node to Your Site
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden text-white p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border-line)] bg-[var(--bg-deep)]">
          <div className="px-5 py-4 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-display tracking-[0.16em] uppercase text-[var(--text-secondary)] border-b border-[var(--border-line)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5 justify-center"
            >
              Bring a Node to Your Site
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
