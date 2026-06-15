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
          <SectionLabel>Issue №01 — The New Benchmark</SectionLabel>

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
        <div className="relative mx-auto w-full max-w-xl">
          {/* Soft blue glow behind the image */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-brand-blue/15 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-brand-border">
            <Image
              src="/wickpeptides-hero.png"
              alt="Researcher analyzing Wick Peptides BPC-157 under a microscope in a certified lab"
              width={1402}
              height={1122}
              priority
              sizes="(max-width: 1024px) 100vw, 576px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
