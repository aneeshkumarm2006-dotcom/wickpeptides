import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Fingerprint } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wick Peptides exists for serious researchers who refuse to compromise. Every compound is independently tested, every COA published, every batch traceable from synthesis to bench.",
};

const PARAGRAPHS = [
  "We named the company King because we refuse to operate beneath the standard the research compounds industry has tolerated for too long. Most suppliers make claims they cannot back up. We back up everything we ship.",
  "Wick Peptides was built to be different. Every compound we carry is independently tested. Every COA is published. Every batch is traceable from synthesis to your bench.",
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
    text: "Batch numbers tie every vial to its specific COA - verifiable on receipt.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <p className="text-eyebrow mb-3">ABOUT</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            The Standard. Set Higher.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {PARAGRAPHS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/40">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border bg-surface p-6">
              <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-display font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
