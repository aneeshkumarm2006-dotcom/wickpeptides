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
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold">Available COAs</h2>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Look up a product or batch…"
          className="flex h-9 w-full max-w-xs rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>

      {/* COA grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((coa) => (
            <div key={coa.id} className="rounded-lg border bg-surface p-4">
              <div className="text-eyebrow truncate">{coa.productSlug}</div>
              <div className="mt-1 font-mono text-sm">{coa.batchNumber}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Tested {formatCOADate(coa.testedDate)}
              </div>
              <a
                href={coa.downloadUrl ?? "#"}
                download
                className="mt-3 inline-flex h-8 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Download className="mr-2 h-3.5 w-3.5" aria-hidden="true" />{" "}
                Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No COAs found for “{search}”.</p>
      )}
    </div>
  );
}

export default CoaList;
