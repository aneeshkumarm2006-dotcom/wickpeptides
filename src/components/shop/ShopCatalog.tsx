"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ShopGrid } from "@/components/shop/ShopGrid";

export function ShopCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      {/* Page header */}
      <div className="flex flex-col gap-3">
        <SectionLabel>Catalog</SectionLabel>
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
          Shop All Compounds
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          The complete King Bio Labs catalog — every compound third-party tested
          with a lot-specific COA. Search by name or filter by category.
        </p>
      </div>

      {/* Full-width search */}
      <div className="relative mt-8">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search compounds…"
          className="h-13 w-full rounded-xl border border-brand-border bg-white py-3.5 pl-12 pr-4 text-base text-brand-navy outline-none focus:border-brand-blue"
        />
      </div>

      {/* Two-column layout */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <ShopSidebar
          selectedCategories={selectedCategories}
          onApply={setSelectedCategories}
          onClear={() => setSelectedCategories([])}
        />
        <ShopGrid search={search} selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}

export default ShopCatalog;
