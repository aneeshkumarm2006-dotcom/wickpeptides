import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { StarRating } from "@/components/StarRating";

const TESTIMONIALS = [
  {
    name: "Dr. Jane Doe, PhD",
    title: "Principal Investigator · Example Research Lab",
    orders: 41,
    portrait: "/reviewer-hale.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dr. John Smith",
    title: "Research Fellow · Sample Medical Institute",
    orders: 18,
    portrait: "/reviewer-vasquez.svg",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Dr. Richard Roe, MD",
    title: "Research Director · Placeholder Longevity Center",
    orders: 27,
    portrait: "/reviewer-okafor.svg",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat.",
  },
  {
    name: "Dr. Mary Major, PharmD",
    title: "Lead Scientist · Demo Research Pharmacy",
    orders: 33,
    portrait: "/reviewer-raman.svg",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Dr. John Public",
    title: "Biochemistry Department · Example Affiliated Lab",
    orders: 22,
    portrait: "/reviewer-lindqvist.svg",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  },
  {
    name: "Dr. Alex Sample, PhD",
    title: "Senior Research Scientist · Sample Research Group",
    orders: 56,
    portrait: "/reviewer-chen.svg",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
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
