"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";

import { COAS, formatCOADate } from "@/lib/data/coas";

export function CoaList() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return COAS;
    return COAS.filter(
      (coa) =>
        coa.productName.toLowerCase().includes(query) ||
        coa.productSlug.toLowerCase().includes(query) ||
        coa.batchNumber.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div>
      {/* Header + search */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
          Available COAs
        </h2>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Look up a product or batch…"
          className="flex h-11 w-full max-w-xs rounded-none border border-brand-border bg-white px-4 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground focus-visible:border-brand-navy focus-visible:outline-none"
        />
      </div>

      {/* COA ledger */}
      {filtered.length > 0 ? (
        <div className="mt-8 border border-border">
          {/* Ledger header row */}
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_8rem_8rem] items-center gap-4 border-b border-border bg-surface px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:grid">
            <span>Product</span>
            <span>Batch No.</span>
            <span>Tested</span>
            <span className="text-right">Certificate</span>
          </div>

          {/* One hairline row per COA */}
          <ul>
            {filtered.map((coa) => (
              <li
                key={coa.id}
                className="grid grid-cols-1 items-center gap-x-4 gap-y-3 border-t border-border px-6 py-5 transition-colors first:border-t-0 hover:bg-surface lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_8rem_8rem] lg:gap-y-0 lg:first:border-t-0"
              >
                <span className="truncate font-mono text-[12px] uppercase tracking-[0.14em] text-brand-navy">
                  {coa.productSlug}
                </span>
                <span className="font-mono text-sm tabular-nums text-brand-navy">
                  {coa.batchNumber}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Tested {formatCOADate(coa.testedDate)}
                </span>
                <a
                  href={coa.downloadUrl ?? "#"}
                  download
                  className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-none border border-brand-navy bg-transparent px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white lg:justify-self-end"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-8 border border-border bg-surface px-6 py-10 text-center text-muted-foreground">
          No COAs found for “{search}”.
        </p>
      )}
    </div>
  );
}

export default CoaList;
