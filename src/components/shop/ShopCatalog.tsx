"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ShopGrid } from "@/components/shop/ShopGrid";

export function ShopCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      {/* Dossier page header */}
      <SectionHeader
        index="01"
        label="CATALOG"
        title="Browse Every Compound"
        lede="Sorted by research category. Each compound is verified at 99%+ purity and ships with a COA for every batch."
      />

      {/* Full-width ruled search */}
      <div className="mt-12 border-t border-border">
        <div className="relative flex items-center border border-border bg-white focus-within:border-brand-navy">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a compound by name, category, or description…"
            className="h-14 w-full rounded-none border-0 bg-transparent pl-12 pr-4 text-sm text-brand-navy placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none"
          />
        </div>
      </div>

      {/* Two-column layout */}
      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[240px_1fr]">
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
