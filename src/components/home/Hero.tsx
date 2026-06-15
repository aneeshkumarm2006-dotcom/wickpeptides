import Image from "next/image";
import Link from "next/link";

import { SectionLabel } from "@/components/SectionLabel";
import { StarRating } from "@/components/StarRating";

export function Hero() {
  return (
    <section className="border-b border-brand-border bg-brand-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <SectionLabel>Issue №01 — Rule The Standard</SectionLabel>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Verified Purity.
            <br />
            <span className="text-brand-blue/70">No Exceptions.</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Research-grade compounds from certified synthesis facilities.
            Third-party tested. Full COA on every batch — never a guess, never a
            shortcut.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
            >
              Shop The Catalog
            </Link>
            <Link
              href="/bundle"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-brand-navy px-6 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              Build Bundle — 10% Off
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <StarRating rating={5} size={18} />
            <span className="text-sm font-semibold text-brand-navy">4.9</span>
            <span className="text-sm text-muted-foreground">
              12,000+ verified orders
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl">
            <Image
              src="/vial-hero.svg"
              alt="Research-grade compound vial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-contain p-10"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-brand-border bg-white p-4 shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Batch · KBL-2406
            </p>
            <p className="text-3xl font-bold text-brand-navy">99.7%</p>
            <p className="text-[11px] text-muted-foreground">
              HPLC verified purity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
