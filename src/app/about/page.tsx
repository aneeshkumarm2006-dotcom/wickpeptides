import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Fingerprint } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "King Bio Labs exists for serious researchers who refuse to compromise. Every compound is independently tested, every COA published, every batch traceable from synthesis to bench.",
};

const PARAGRAPHS = [
  "We named the company King because we refuse to operate beneath the standard the research compounds industry has tolerated for too long. Most suppliers make claims they cannot back up. We back up everything we ship.",
  "King Bio Labs was built to be different. Every compound we carry is independently tested. Every COA is published. Every batch is traceable from synthesis to your bench.",
  "We are not a supplement brand. We are not a wellness company. We exist for serious researchers who refuse to compromise on what enters their lab.",
];

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Verified Purity",
    text: "Every compound tested to 99%+ purity. No exceptions. No estimates.",
  },
  {
    icon: FlaskConical,
    title: "Independent Testing",
    text: "ISO-accredited third-party labs verify every batch we release.",
  },
  {
    icon: Fingerprint,
    title: "Full Traceability",
    text: "Batch numbers tie every vial to its specific COA — verifiable on receipt.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            The Standard. Set Higher.
          </h1>
          <div className="mt-8 flex flex-col gap-5">
            {PARAGRAPHS.map((text) => (
              <p key={text} className="leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {CARDS.map(({ icon: Icon, title, text }) => (
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
    </main>
  );
}
