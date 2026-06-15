import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Users, BarChart3, BadgeCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Become a Wick Peptides affiliate. Earn commissions when you refer qualified researchers to the most trusted source for research-grade compounds.",
};

const BENEFITS = [
  {
    icon: DollarSign,
    title: "15% Commission",
    description:
      "Collect 15% on each order made through your referral link, paid out monthly.",
  },
  {
    icon: Users,
    title: "90-Day Cookie",
    description:
      "We track referrals for 90 days, so you still earn credit when customers return.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "Monitor clicks, conversions, and earnings live from your affiliate dashboard.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Support",
    description:
      "A dedicated affiliate manager works with you to grow your earnings from day one.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Apply",
    description:
      "Complete the form below. We review applications within 2 business days.",
  },
  {
    number: "02",
    title: "Get Your Link",
    description:
      "Get a unique referral link along with access to your affiliate dashboard.",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Pass your link along to your network — researchers, clinicians, and lab professionals.",
  },
  {
    number: "04",
    title: "Earn",
    description:
      "Commissions tally automatically and arrive each month by bank transfer.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="flex-1 bg-brand-light">
      {/* Header */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Affiliates</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Affiliate Program
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Send qualified researchers to Wick Peptides and earn 15% on every
            order. The program is designed for scientists, clinicians, and
            professionals who rely on the standard we set.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <h2 className="text-2xl font-bold text-brand-navy">
            Program Benefits
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-light p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-semibold text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-brand-border bg-brand-light">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy">
            Earning in four steps
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {STEPS.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-5 rounded-2xl border border-brand-border bg-white p-6"
              >
                <span className="mt-0.5 text-2xl font-bold tabular-nums text-brand-navy/20">
                  {number}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-24">
          <h2 className="text-2xl font-bold text-brand-navy">
            Ready to team up with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Email us to begin your application. Include your name, your
            institution or platform, and a short description of your audience.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:affiliates@wickpeptides.com"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-navy px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
            >
              Apply via Email
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-brand-border bg-white px-8 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-light"
            >
              Contact Us Instead
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Applications reviewed in 2 business days ·{" "}
            <Link
              href="/legal/terms"
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              Program Terms Apply
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
