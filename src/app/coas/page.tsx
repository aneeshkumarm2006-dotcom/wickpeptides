import type { Metadata } from "next";
import { BadgeCheck, ChartColumn, FlaskConical } from "lucide-react";

import { CoaList } from "@/components/coas/CoaList";

export const metadata: Metadata = {
  title: "COAs & Testing",
  description:
    "Every Wick Peptides batch undergoes independent analysis at ISO-accredited labs via HPLC and mass spectrometry. Explore and retrieve lot-specific Certificates of Analysis.",
};

const METHODS = [
  {
    icon: ChartColumn,
    title: "HPLC Testing",
    text: "High-Performance Liquid Chromatography measures purity and flags any impurities down to trace levels.",
  },
  {
    icon: FlaskConical,
    title: "Mass Spectrometry",
    text: "Verifies precise molecular identity and structural integrity on every batch we release.",
  },
  {
    icon: BadgeCheck,
    title: "Third-Party Accreditation",
    text: "Every test is run by independent ISO-accredited labs. We never grade our own product.",
  },
];

export default function CoasPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="flex items-center gap-2.5 text-brand-blue">
              <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
              TRANSPARENCY
            </span>
            <span className="hidden text-brand-navy/45 sm:inline">
              Wick Peptides / Certificates of Analysis
            </span>
          </div>

          <div className="grid items-end gap-x-10 gap-y-6 py-16 lg:grid-cols-12 lg:py-24">
            <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.0] tracking-tight text-brand-navy sm:text-5xl lg:col-span-7 lg:text-6xl">
              Every Batch Tested. Every Result Published.
            </h1>
            <p className="self-end text-base leading-relaxed text-muted-foreground lg:col-span-5">
              No compound leaves our facility until an independent accredited
              laboratory has verified it. A Certificate of Analysis is linked to
              every batch, so you can confirm any vial you receive by its batch
              number.
            </p>
          </div>
        </div>
      </section>

      {/* Method ledger */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {METHODS.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="flex flex-col gap-4 bg-white p-6 lg:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/50">
                    §{String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Published COAs */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <CoaList />
        </div>
      </section>
    </main>
  );
}
