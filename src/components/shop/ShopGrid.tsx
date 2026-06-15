import { useMemo } from "react";

import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/data/products";

type ShopGridProps = {
  search: string;
  selectedCategories: string[];
};

export function ShopGrid({ search, selectedCategories }: ShopGridProps) {
  const groups = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CATEGORIES.filter(
      (c) => selectedCategories.length === 0 || selectedCategories.includes(c.slug)
    )
      .map((c) => ({
        ...c,
        products: PRODUCTS.filter(
          (p) => p.categorySlug === c.slug && (!q || p.name.toLowerCase().includes(q))
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [search, selectedCategories]);

  if (groups.length === 0) {
    return (
      <p className="rounded-2xl border border-brand-border bg-white p-12 text-center text-muted-foreground">
        No compounds match your filters.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {groups.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-1 border-b border-brand-border pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              {c.id} · {c.name}
            </span>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-brand-navy">
                {c.name}
              </h2>
              <span className="shrink-0 text-sm text-muted-foreground">
                {c.products.length} compounds
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ShopGrid;
