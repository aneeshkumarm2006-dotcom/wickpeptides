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
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <p className="text-eyebrow mb-3">TRANSPARENCY</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Every Batch Tested. Every Result Published.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            No compound leaves our facility until an independent accredited
            laboratory has verified it. A Certificate of Analysis is linked to
            every batch, so you can confirm any vial you receive by its batch
            number.
          </p>
        </div>
      </section>

      {/* Method cards */}
      <section className="border-b bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {METHODS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border bg-surface p-6">
              <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Published COAs */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <CoaList />
        </div>
      </section>
    </main>
  );
}
