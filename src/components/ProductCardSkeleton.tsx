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
        "flex flex-col rounded-none border border-border bg-white",
        className
      )}
    >
      {/* Spec header */}
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <Skeleton className="h-2.5 w-24 rounded-none" />
      </div>

      {/* Plate */}
      <div className="bg-surface-2 p-6">
        <Skeleton className="aspect-[4/3] w-full rounded-none" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Name */}
        <Skeleton className="h-4 w-3/4 rounded-none" />
        {/* Rating */}
        <Skeleton className="h-3 w-28 rounded-none" />
        {/* Price + arrow link */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-3">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-5 w-16 rounded-none" />
            <Skeleton className="h-2.5 w-24 rounded-none" />
          </div>
          <Skeleton className="h-3 w-24 rounded-none" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
