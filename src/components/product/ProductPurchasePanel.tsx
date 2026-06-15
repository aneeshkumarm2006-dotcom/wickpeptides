"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Download, Minus, Plus } from "lucide-react";

import { StarRating } from "@/components/StarRating";
import { CountdownTimer } from "@/components/product/CountdownTimer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { getProductDescription, type Product } from "@/lib/data/products";

const MAX_QUANTITY = 10;
const BUNDLE_OPTIONS = [1, 2, 3, 4, 5];

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const dosages = product.dosages ?? [];
  const dosageItems = dosages.map((d) => ({
    value: d.label,
    label: `${d.label} · $${d.price.toFixed(2)}`,
  }));

  const [selectedDosage, setSelectedDosage] = useState(dosages[0]?.label ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const id = window.setTimeout(() => setAdded(false), 2000);
    return () => window.clearTimeout(id);
  }, [added]);

  const unitPrice =
    dosages.find((d) => d.label === selectedDosage)?.price ?? product.price;
  const total = unitPrice * quantity;
  const points = Math.round(total);

  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground"
      >
        <Link href="/" className="hover:text-brand-blue">
          Home
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <Link href="/shop" className="hover:text-brand-blue">
          Shop
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-brand-navy">{product.category}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
        {product.name}
      </h1>

      {/* Rating + reviews anchor */}
      <div className="flex items-center gap-3">
        <StarRating rating={product.rating} showValue size={18} />
        <a
          href="#reviews"
          className="text-sm text-muted-foreground underline-offset-2 hover:text-brand-blue hover:underline"
        >
          {product.reviewCount} reviews
        </a>
      </div>

      {/* Price */}
      <div>
        <p className="text-4xl font-bold text-brand-navy">${total.toFixed(2)}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Earn {points} points with this order
        </p>
      </div>

      {/* Dosage selector — only when the product has variants */}
      {dosageItems.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-brand-navy">Dosage</label>
          <Select
            items={dosageItems}
            value={selectedDosage}
            onValueChange={(value) => {
              if (typeof value === "string") setSelectedDosage(value);
            }}
          >
            <SelectTrigger className="w-full justify-between border-brand-border text-brand-navy data-[size=default]:h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {dosageItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Bundle quantity pills */}
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-brand-navy">Quantity</span>
        <div className="flex flex-wrap gap-2">
          {BUNDLE_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setQuantity(n)}
              aria-pressed={quantity === n}
              className={cn(
                "rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                quantity === n
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-brand-border text-brand-navy hover:border-brand-blue"
              )}
            >
              {n} {n === 1 ? "Vial" : "Vials"}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity stepper */}
      <div className="inline-flex w-fit items-center rounded-lg border border-brand-border">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="flex size-10 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-12 text-center text-sm font-semibold text-brand-navy tabular-nums">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
          disabled={quantity >= MAX_QUANTITY}
          aria-label="Increase quantity"
          className="flex size-10 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="size-4" />
        </button>
      </div>

      {/* Add to Cart */}
      <button
        type="button"
        onClick={() => {
          addItem({
            slug: product.slug,
            name: product.name,
            dosageLabel: dosages.length > 0 ? selectedDosage : undefined,
            unitPrice,
            image: product.image,
            quantity,
          });
          setAdded(true);
        }}
        className={cn(
          "flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition-colors",
          added ? "bg-emerald-600" : "bg-brand-navy hover:bg-brand-blue"
        )}
      >
        {added ? (
          <>
            <Check className="size-4" />
            Added to Cart
          </>
        ) : (
          <>
            <span>Add {quantity} to Cart</span>
            <span aria-hidden="true">·</span>
            <span>${total.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Download COA */}
      <Link
        href="/coas"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
      >
        <Download className="size-4" />
        Download COA
      </Link>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {getProductDescription(product)}
      </p>

      {/* Same-day shipping countdown */}
      <CountdownTimer />

      {/* Research Use Only disclaimer */}
      <div className="rounded-xl border border-brand-border bg-white p-4 text-sm leading-relaxed text-muted-foreground">
        <span className="font-bold text-brand-navy">Research Use Only.</span>{" "}
        This product is intended strictly for in-vitro laboratory research and
        is not for human or animal consumption, diagnostic, or therapeutic use.
        By purchasing, you confirm you are a qualified researcher.
      </div>
    </div>
  );
}

export default ProductPurchasePanel;
