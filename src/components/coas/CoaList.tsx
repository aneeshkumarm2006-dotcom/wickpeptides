"use client";

import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";

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
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
          Published COAs
        </h2>
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product or batch…"
            className="h-12 w-full rounded-xl border border-brand-border bg-white py-3 pl-12 pr-4 text-base text-brand-navy outline-none focus:border-brand-blue"
          />
        </div>
      </div>

      {/* COA grid */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((coa) => (
            <div
              key={coa.id}
              className="flex flex-col gap-4 rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <FileText className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-brand-navy">
                  {coa.productName}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {coa.batchNumber}
                </p>
                <p className="text-sm text-muted-foreground">
                  Tested {formatCOADate(coa.testedDate)}
                </p>
              </div>
              <a
                href={coa.downloadUrl ?? "#"}
                download
                className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
              >
                <Download className="size-4" />
                Download COA
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">
          No COAs match “{search}”.
        </p>
      )}
    </div>
  );
}

export default CoaList;
