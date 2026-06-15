import Image from "next/image";
import Link from "next/link";

export function BundleCTA() {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-border bg-brand-light px-6 py-14 text-center">
          <Image
            src="/logo.svg"
            alt="Wick Peptides"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Build Your Bundle
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            Choose Any 5 Peptides. Save 10% Automatically.
          </p>
          <Link
            href="/bundle"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            Build Your Bundle
          </Link>
          <p className="text-sm text-muted-foreground">
            Always 10% off. No code needed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BundleCTA;
