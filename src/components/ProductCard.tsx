import Image from "next/image";
import Link from "next/link";

import { StarRating } from "@/components/StarRating";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const {
    slug,
    name,
    category,
    price,
    rating,
    reviewCount,
    bestSelling,
    hasVariants,
    image,
  } = product;

  const points = Math.round(price);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-shadow hover:shadow-lg",
        className
      )}
    >
      {bestSelling && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-blue px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Best Selling
        </span>
      )}

      <Link
        href={`/product/${slug}`}
        className="relative block aspect-square overflow-hidden bg-brand-light"
      >
        <Image
          src={image ?? "/vial-product.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy/70">
          {category}
        </span>

        <Link
          href={`/product/${slug}`}
          className="text-sm font-semibold leading-snug text-brand-navy hover:text-brand-blue"
        >
          {name}
        </Link>

        <StarRating rating={rating} count={reviewCount} size={14} />

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <p className="text-lg font-bold text-brand-navy">
              ${price.toFixed(2)}
            </p>
            <p className="text-[11px] text-muted-foreground">
              Earn {points} points
            </p>
          </div>
        </div>

        <Link
          href={`/product/${slug}`}
          className="mt-2 inline-flex h-9 items-center justify-center rounded-lg bg-brand-navy px-4 text-sm font-medium text-white transition-colors hover:bg-brand-blue"
        >
          {hasVariants ? "Select Options" : "View Product"}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
