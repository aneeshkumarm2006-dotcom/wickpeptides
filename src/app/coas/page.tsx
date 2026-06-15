import type { Metadata } from "next";
import { FlaskConical, Microscope, ShieldCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { CoaList } from "@/components/coas/CoaList";

export const metadata: Metadata = {
  title: "COAs & Testing",
  description:
    "Every King Bio Labs batch is independently tested by ISO-accredited labs using HPLC and mass spectrometry. Browse and download lot-specific Certificates of Analysis.",
};

const METHODS = [
  {
    icon: FlaskConical,
    title: "HPLC Testing",
    text: "High-Performance Liquid Chromatography quantifies purity and identifies any impurities at trace levels.",
  },
  {
    icon: Microscope,
    title: "Mass Spectrometry",
    text: "Confirms exact molecular identity and structural integrity for every released batch.",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Accreditation",
    text: "Independent ISO-accredited labs perform every test. We never test our own product.",
  },
];

export default function CoasPage() {
  return (
    <main className="flex-1 bg-brand-light">
      {/* Intro */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Transparency</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Every Batch Tested. Every Result Published.
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We publish a lot-specific Certificate of Analysis for every batch we
            release. Each compound is screened by independent, ISO-accredited
            laboratories before it ever reaches your bench — purity, identity,
            and contaminants verified against the number printed on your vial.
          </p>
        </div>
      </section>

      {/* Method cards */}
      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {METHODS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold text-brand-navy">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Published COAs */}
      <section className="border-t border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <CoaList />
        </div>
      </section>
    </main>
  );
}
