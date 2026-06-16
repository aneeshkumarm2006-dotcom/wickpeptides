"use client";

import { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CATEGORIES } from "@/lib/data/products";

type ShopSidebarProps = {
  selectedCategories: string[];
  onApply: (categories: string[]) => void;
  onClear: () => void;
};

export function ShopSidebar({
  selectedCategories,
  onApply,
  onClear,
}: ShopSidebarProps) {
  // Draft selection — committed to the grid only when "Apply" is clicked.
  const [draft, setDraft] = useState<string[]>(selectedCategories);

  // Keep the draft in sync when the applied filter is reset elsewhere.
  useEffect(() => {
    setDraft(selectedCategories);
  }, [selectedCategories]);

  const toggle = (slug: string, checked: boolean) => {
    setDraft((prev) =>
      checked ? [...prev, slug] : prev.filter((s) => s !== slug)
    );
  };

  return (
    <aside className="flex flex-col bg-white lg:sticky lg:top-24 lg:self-start">
      {/* Mono panel header */}
      <h2 className="border-b border-border px-5 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-blue">
        Filter by category
      </h2>

      {/* Checkbox rows */}
      <div className="flex flex-col">
        {CATEGORIES.map((c) => {
          const checked = draft.includes(c.slug);
          return (
            <label
              key={c.slug}
              className="flex cursor-pointer items-start gap-3 border-b border-border px-5 py-3 text-sm transition-colors hover:bg-surface"
            >
              <Checkbox
                checked={checked}
                onCheckedChange={(value) => toggle(c.slug, Boolean(value))}
                className="mt-0.5 rounded-none border-primary"
              />
              <span className="leading-tight text-muted-foreground">
                {c.name}
              </span>
            </label>
          );
        })}
      </div>

      {/* Sharp action buttons */}
      <div className="flex gap-px bg-border p-px">
        <button
          type="button"
          onClick={() => {
            setDraft([]);
            onClear();
          }}
          className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-none border border-brand-navy bg-white px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-none"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => onApply(draft)}
          className="inline-flex h-11 flex-1 items-center justify-center whitespace-nowrap rounded-none bg-brand-navy px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-blue focus-visible:outline-none"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}

export default ShopSidebar;
