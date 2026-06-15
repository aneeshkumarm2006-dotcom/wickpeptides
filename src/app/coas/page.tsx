import type { Metadata } from "next";
import { BadgeCheck, ChartColumn, FlaskConical } from "lucide-react";

import { CoaList } from "@/components/coas/CoaList";

export const metadata: Metadata = {
  title: "COAs & Testing",
  description:
    "Every Wick Peptides batch is independently tested by ISO-accredited labs using HPLC and mass spectrometry. Browse and download lot-specific Certificates of Analysis.",
};

const METHODS = [
  {
    icon: ChartColumn,
    title: "HPLC Testing",
    text: "High-Performance Liquid Chromatography quantifies purity and identifies any impurities at trace levels.",
  },
  {
    icon: FlaskConical,
    title: "Mass Spectrometry",
    text: "Confirms exact molecular identity and structural integrity for every released batch.",
  },
  {
    icon: BadgeCheck,
    title: "Third-Party Accreditation",
    text: "Independent ISO-accredited labs perform every test. We never test our own product.",
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
            We do not release a single compound until it has been verified by an
            independent accredited laboratory. Every batch has a Certificate of
            Analysis tied to it. You can verify any vial you receive by batch
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
