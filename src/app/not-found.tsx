import Link from "next/link";
import { ArrowLeft, Search, ShieldCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-1 items-center justify-center bg-brand-light px-6 py-20">
      <div className="flex max-w-xl flex-col items-center text-center">
        <span className="flex size-16 items-center justify-center rounded-full border-2 border-brand-navy/15 bg-white text-brand-navy">
          <ShieldCheck className="size-7" />
        </span>

        <SectionLabel className="mt-8">Error 404</SectionLabel>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-brand-navy sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been
          moved. Every compound in our catalog is still here — let&rsquo;s get
          you back to it.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-navy px-6 text-sm font-medium text-white transition-colors hover:bg-brand-blue"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
          <Link
            href="/shop"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-border bg-white px-6 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-light"
          >
            <Search className="size-4" />
            Browse the catalog
          </Link>
        </div>
      </div>
    </main>
  );
}
