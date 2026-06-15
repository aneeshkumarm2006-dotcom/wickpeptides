import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProductCardSkeletonProps = {
  className?: string;
};

/**
 * Loading placeholder that mirrors the layout of <ProductCard /> so the
 * shop and product grids don't shift when real cards stream in.
 */
export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white",
        className
      )}
    >
      {/* Image */}
      <Skeleton className="aspect-square rounded-none rounded-t-2xl" />

      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Category */}
        <Skeleton className="h-3 w-20" />
        {/* Name (two lines) */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        {/* Stars */}
        <Skeleton className="h-3.5 w-28" />
        {/* Price + points */}
        <div className="mt-auto flex flex-col gap-1.5 pt-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
        {/* CTA */}
        <Skeleton className="mt-2 h-9 w-full rounded-lg" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
