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
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-2xl border border-brand-border bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-navy">
          Category
        </h2>

        <div className="mt-4 flex flex-col gap-3">
          {CATEGORIES.map((c) => {
            const checked = draft.includes(c.slug);
            return (
              <label
                key={c.slug}
                className="group flex cursor-pointer items-start gap-3 text-sm text-brand-navy"
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(value) => toggle(c.slug, Boolean(value))}
                  className="mt-0.5"
                />
                <span className="leading-snug group-hover:text-brand-blue">
                  {c.name}
                </span>
              </label>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setDraft([]);
              onClear();
            }}
            className="flex-1 rounded-lg border border-brand-border px-3 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-light"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={() => onApply(draft)}
            className="flex-1 rounded-lg bg-brand-navy px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-blue"
          >
            Apply
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ShopSidebar;
