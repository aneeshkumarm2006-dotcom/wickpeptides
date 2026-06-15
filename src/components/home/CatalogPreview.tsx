"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { ProductCard } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { CATEGORIES, PRODUCTS, type Product } from "@/lib/data/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";
type ViewMode = "expanded" | "compact";

const PRICE_MIN = 19;
const PRICE_MAX = 450;

function sortProducts(products: Product[], sort: SortKey): Product[] {
  const copy = [...products];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    default:
      return copy.sort(
        (a, b) => Number(b.bestSelling ?? false) - Number(a.bestSelling ?? false)
      );
  }
}

export function CatalogPreview() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const [price, setPrice] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [view, setView] = useState<ViewMode>("expanded");
  const [open, setOpen] = useState<string | null>(CATEGORIES[0].slug);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesSearch = !q || p.name.toLowerCase().includes(q);
      const matchesCategory = category === "all" || p.categorySlug === category;
      const matchesPrice = p.price >= price[0] && p.price <= price[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, price]);

  const visibleCategories = useMemo(
    () =>
      CATEGORIES.filter(
        (c) => category === "all" || c.slug === category
      ).map((c) => ({
        ...c,
        products: sortProducts(
          filtered.filter((p) => p.categorySlug === c.slug),
          sort
        ),
      })).filter((c) => c.products.length > 0),
    [filtered, sort, category]
  );

  const selectClass =
    "h-11 rounded-lg border border-brand-border bg-white px-3 text-sm text-brand-navy outline-none focus:border-brand-blue";

  return (
    <section className="border-b border-brand-border bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex flex-col gap-3">
          <SectionLabel>Full Catalog</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Browse the complete compound library
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Every product third-party tested with a lot-specific COA. Filter by
            category, price, and rating to find exactly what your protocol needs.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-brand-border bg-white p-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search compounds…"
              className="h-11 w-full rounded-lg border border-brand-border bg-white pl-9 pr-3 text-sm text-brand-navy outline-none focus:border-brand-blue"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={selectClass}
            aria-label="Category"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className={selectClass}
            aria-label="Sort by"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <div className="flex min-w-[180px] flex-col gap-1">
            <span className="text-xs text-muted-foreground">
              ${price[0]} – ${price[1]}
            </span>
            <Slider
              value={price}
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={1}
              onValueChange={(v) =>
                setPrice([
                  (v as number[])[0] ?? PRICE_MIN,
                  (v as number[])[1] ?? PRICE_MAX,
                ] as [number, number])
              }
            />
          </div>

          <div className="flex rounded-lg border border-brand-border p-0.5">
            {(["expanded", "compact"] as ViewMode[]).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={cn(
                  "rounded-md px-3 py-2 text-xs font-medium capitalize transition-colors",
                  view === v
                    ? "bg-brand-navy text-white"
                    : "text-muted-foreground hover:text-brand-navy"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion category list */}
        <div className="mt-8 flex flex-col gap-3">
          {visibleCategories.length === 0 && (
            <p className="rounded-2xl border border-brand-border bg-white p-8 text-center text-muted-foreground">
              No compounds match your filters.
            </p>
          )}
          {visibleCategories.map((c) => {
            const isOpen = open === c.slug;
            return (
              <div
                key={c.slug}
                className="overflow-hidden rounded-2xl border border-brand-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : c.slug)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-sm font-semibold text-brand-blue">
                      {c.id}
                    </span>
                    <span className="text-base font-semibold text-brand-navy sm:text-lg">
                      {c.name}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {c.products.length} compounds
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 text-muted-foreground transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-brand-border p-5">
                    <div
                      className={cn(
                        "grid gap-5",
                        view === "expanded"
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      )}
                    >
                      {c.products.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CatalogPreview;
