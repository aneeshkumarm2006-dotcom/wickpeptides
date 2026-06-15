"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/lib/data/products";

const BUNDLE_SIZE = 5;
const DISCOUNT_RATE = 0.1;

export function BundleBuilder() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<string[]>([]);
  const [added, setAdded] = useState(false);

  function addBundleToCart() {
    PRODUCTS.filter((p) => selected.includes(p.slug)).forEach((p) => {
      addItem({
        slug: p.slug,
        name: p.name,
        dosageLabel: "Bundle · 10% off",
        unitPrice: p.price * (1 - DISCOUNT_RATE),
        image: p.image,
        quantity: 1,
      });
    });
    setSelected([]);
    setAdded(true);
  }

  useEffect(() => {
    if (!added) return;
    const id = window.setTimeout(() => setAdded(false), 2500);
    return () => window.clearTimeout(id);
  }, [added]);

  function toggle(slug: string) {
    setAdded(false);
    setSelected((current) => {
      if (current.includes(slug)) {
        return current.filter((s) => s !== slug);
      }
      if (current.length >= BUNDLE_SIZE) return current;
      return [...current, slug];
    });
  }

  const selectedCount = selected.length;
  const isComplete = selectedCount === BUNDLE_SIZE;

  const { subtotal, discount, total } = useMemo(() => {
    const sub = PRODUCTS.filter((p) => selected.includes(p.slug)).reduce(
      (sum, p) => sum + p.price,
      0
    );
    const disc = sub * DISCOUNT_RATE;
    return { subtotal: sub, discount: disc, total: sub - disc };
  }, [selected]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center">
        <SectionLabel className="mx-auto">Bundle &amp; Save · 10% Off</SectionLabel>
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
          Assemble Your Bundle
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Pick any 5 peptides and 10% comes off automatically.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        {/* Step 1 — product selection grid */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                1
              </span>
              <h2 className="text-lg font-semibold text-brand-navy">
                Choose your compounds
              </h2>
            </div>
            <span
              aria-live="polite"
              className={cn(
                "rounded-full px-3 py-1 text-sm font-semibold",
                isComplete
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-brand-light text-brand-navy"
              )}
            >
              {selectedCount} of {BUNDLE_SIZE} selected
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {PRODUCTS.map((product) => {
              const isSelected = selected.includes(product.slug);
              const isDisabled = !isSelected && isComplete;

              return (
                <li key={product.slug}>
                  <button
                    type="button"
                    onClick={() => toggle(product.slug)}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                    className={cn(
                      "group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition-all",
                      isSelected
                        ? "border-brand-navy ring-2 ring-brand-navy"
                        : "border-brand-border hover:border-brand-blue hover:shadow-md",
                      isDisabled && "cursor-not-allowed opacity-40 hover:border-brand-border hover:shadow-none"
                    )}
                  >
                    {/* Selection indicator */}
                    <span
                      className={cn(
                        "absolute right-3 top-3 z-10 flex size-7 items-center justify-center rounded-full border transition-colors",
                        isSelected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-brand-border bg-white text-brand-navy"
                      )}
                      aria-hidden="true"
                    >
                      {isSelected ? (
                        <Check className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>

                    {product.bestSelling && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-blue px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        Best Selling
                      </span>
                    )}

                    <span className="relative block aspect-square overflow-hidden bg-brand-light">
                      <Image
                        src={product.image ?? "/vial-product.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 240px"
                        className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>

                    <span className="flex flex-1 flex-col gap-1 p-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-navy/60">
                        {product.category}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-brand-navy">
                        {product.name}
                      </span>
                      <span className="mt-auto pt-1 text-base font-bold text-brand-navy">
                        ${product.price.toFixed(2)}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Order summary — sticky on desktop */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-5 rounded-2xl border border-brand-border bg-white p-6">
            <h2 className="text-lg font-semibold text-brand-navy">
              Your Bundle
            </h2>

            {/* Selected items list */}
            {selectedCount === 0 ? (
              <p className="text-sm text-muted-foreground">
                Add {BUNDLE_SIZE} peptides to complete your bundle and the 10%
                discount applies automatically.
              </p>
            ) : (
              <ul className="flex flex-col divide-y divide-brand-border">
                {PRODUCTS.filter((p) => selected.includes(p.slug)).map((p) => (
                  <li
                    key={p.slug}
                    className="flex items-center justify-between gap-2 py-2 text-sm"
                  >
                    <span className="leading-snug text-brand-navy">{p.name}</span>
                    <span className="shrink-0 font-medium text-muted-foreground">
                      ${p.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Progress slots */}
            <div className="flex gap-1.5" aria-hidden="true">
              {Array.from({ length: BUNDLE_SIZE }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 flex-1 rounded-full",
                    i < selectedCount ? "bg-brand-navy" : "bg-brand-border"
                  )}
                />
              ))}
            </div>

            {/* Pricing — real-time discount */}
            <dl className="flex flex-col gap-2 border-t border-brand-border pt-4 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium text-brand-navy tabular-nums">
                  ${subtotal.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-emerald-700">Bundle discount (10%)</dt>
                <dd className="font-medium text-emerald-700 tabular-nums">
                  −${discount.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-brand-border pt-2 text-base">
                <dt className="font-semibold text-brand-navy">Total</dt>
                <dd className="font-bold text-brand-navy tabular-nums">
                  ${total.toFixed(2)}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => isComplete && addBundleToCart()}
              disabled={!isComplete}
              className={cn(
                "flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition-colors",
                added
                  ? "bg-emerald-600"
                  : "bg-brand-navy hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-brand-navy/40 disabled:hover:bg-brand-navy/40"
              )}
            >
              {added ? (
                <>
                  <Check className="size-4" />
                  Bundle Added to Cart
                </>
              ) : isComplete ? (
                "Add Bundle to Cart"
              ) : (
                `Add ${BUNDLE_SIZE - selectedCount} more`
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              A standing 10% off — no promo code required.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BundleBuilder;
