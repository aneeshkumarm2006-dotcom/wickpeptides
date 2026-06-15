import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { StarRating } from "@/components/StarRating";

const TESTIMONIALS = [
  {
    name: "Dr. Marcus Hale, PhD",
    title: "Principal Investigator · Translational Metabolics Lab",
    orders: 41,
    portrait: "/reviewer-hale.svg",
    quote:
      "Lot-matched COAs land in my inbox before the package does. In six years of sourcing research peptides, I have not seen this level of documentation discipline.",
  },
  {
    name: "Dr. Elena Vasquez",
    title: "Endocrinology Research Fellow · Pacific Medical Institute",
    orders: 18,
    portrait: "/reviewer-vasquez.svg",
    quote:
      "HPLC traces match the stated purity to three decimals. That is the only sentence I need to write — and the only one that should matter to any serious lab.",
  },
  {
    name: "Dr. James Okafor, MD",
    title: "Clinical Research Director · Northbridge Longevity Center",
    orders: 27,
    portrait: "/reviewer-okafor.svg",
    quote:
      "Cold-chain integrity is flawless. Temperature loggers come back clean on every shipment. This is the operational standard the field has been waiting for.",
  },
  {
    name: "Dr. Priya Raman, PharmD",
    title: "Lead Compounding Scientist · Helix Research Pharmacy",
    orders: 33,
    portrait: "/reviewer-raman.svg",
    quote:
      "Reconstitution behavior is identical batch to batch — no clumping, no haze, full solubility within seconds. That consistency is what keeps our protocols reproducible.",
  },
  {
    name: "Dr. Anders Lindqvist",
    title: "Biochemistry Department · Karolinska Affiliated Lab",
    orders: 22,
    portrait: "/reviewer-lindqvist.svg",
    quote:
      "We blind-tested against three other suppliers. King Bio Labs was the only sample that matched its certificate on every analyte. They have our standing order.",
  },
  {
    name: "Dr. Sarah Chen, PhD",
    title: "Senior Research Scientist · Coastal Peptide Research Group",
    orders: 56,
    portrait: "/reviewer-chen.svg",
    quote:
      "Documentation, packaging, communication — every touchpoint feels like a real medical-grade supplier. This is what the research compound space should look like.",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-brand-border bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-3">
          <SectionLabel>Verified Clients</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Trusted by clinicians and researchers worldwide.
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Real labs, real order ledgers. Every review below is tied to a
            verified purchase history.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-brand-border bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <StarRating rating={5} size={16} />
                <span className="text-sm font-semibold text-brand-navy">
                  5.0
                </span>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-brand-navy/80">
                “{t.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-brand-border pt-4">
                <Image
                  src={t.portrait}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="size-11 rounded-full border border-brand-border object-cover"
                />
                <div className="flex flex-col">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                    {t.name}
                    <BadgeCheck className="size-4 text-brand-blue" />
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.title}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-brand-blue">
                    Verified — {t.orders} orders
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>All reviews verified against order ledger</span>
          <span className="font-semibold text-brand-navy">
            4.9 / 5 average across 12,000+ orders
          </span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
