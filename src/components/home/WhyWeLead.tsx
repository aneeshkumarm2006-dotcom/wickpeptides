import Image from "next/image";
import { ShieldCheck, FileCheck, Lock, Microscope } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Standard",
    text: "We refuse to ship anything we wouldn't run on our own bench. 99%+ purity, every batch, no exceptions.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    text: "Independent third-party COA published for every batch. Verifiable by lot number on receipt.",
  },
  {
    icon: Lock,
    title: "Discreet, Secure Fulfillment",
    text: "Tamper-evident packaging, climate-aware shipping, full chain-of-custody from synthesis to bench.",
  },
  {
    icon: Microscope,
    title: "Built For Serious Researchers",
    text: "No supplement marketing. No wellness fluff. Just clean compounds for in-vitro research.",
  },
];

export function WhyWeLead() {
  return (
    <section className="border-b border-brand-border bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-6">
          <Image
            src="/logo.svg"
            alt="Wick Peptides"
            width={140}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
          <SectionLabel className="text-brand-blue/80">
            Why We Lead
          </SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trust is earned, not claimed.
          </h2>
          <p className="max-w-md leading-relaxed text-white/70">
            We built Wick Peptides to rise above the standard the research
            compound industry has tolerated for too long. Every decision —
            synthesis, testing, packaging, dispatch — is made to a higher bar,
            and documented so you never have to take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWeLead;
