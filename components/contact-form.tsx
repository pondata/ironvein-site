"use client";

import { useState } from "react";
import { ArrowRight, Check } from "./icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="panel p-10 lg:p-14 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-[var(--orange)] grid place-items-center mb-5">
          <Check className="w-7 h-7 text-black" />
        </div>
        <h3 className="font-display text-2xl uppercase text-white">
          Message Received
        </h3>
        <p className="text-[var(--text-secondary)] mt-2 max-w-md">
          A real human from Iron Vein Supply will reach out within one business
          day. Until then — keep work moving.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="panel p-7 lg:p-9"
    >
      <span className="label-tag">Request a Pilot</span>
      <h3 className="font-display text-2xl uppercase text-white mt-2">
        Tell us where work happens.
      </h3>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Work Email" name="email" type="email" required />
        <Field label="Company" name="company" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-4">
        <label className="block text-xs font-display tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-2">
          Environment
        </label>
        <select
          name="industry"
          className="w-full bg-[var(--bg-deep)] border border-[var(--border-line)] focus:border-[var(--orange)] outline-none px-4 py-3 text-sm text-white"
        >
          <option>Manufacturing Lab</option>
          <option>Robotics & Engineering</option>
          <option>Construction & Trades</option>
          <option>Warehouses & Logistics</option>
          <option>Events & Venues</option>
          <option>Campuses & Housing</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-xs font-display tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-2">
          What problem are you trying to solve?
        </label>
        <textarea
          rows={4}
          name="message"
          className="w-full bg-[var(--bg-deep)] border border-[var(--border-line)] focus:border-[var(--orange)] outline-none px-4 py-3 text-sm text-white"
          placeholder="Tell us about your team, site, and supply pain points."
        />
      </div>

      <div className="mt-6 flex items-center gap-3 flex-wrap">
        <button type="submit" className="btn-primary">
          Request a Pilot
          <ArrowRight className="w-4 h-4" />
        </button>
        <span className="text-xs text-[var(--text-secondary)]">
          We respond within 1 business day.
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-display tracking-[0.18em] uppercase text-[var(--text-secondary)] mb-2">
        {label} {required && <span className="text-[var(--orange)]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-[var(--bg-deep)] border border-[var(--border-line)] focus:border-[var(--orange)] outline-none px-4 py-3 text-sm text-white"
      />
    </label>
  );
}
