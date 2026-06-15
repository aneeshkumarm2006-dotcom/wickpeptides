import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <Skeleton className="aspect-square rounded-2xl" />

          {/* Right — purchase panel */}
          <div className="flex flex-col gap-5">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-9 w-3/4" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-4 w-48" />

            {/* Bundle pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-20 rounded-lg" />
              ))}
            </div>

            {/* Quantity + add to cart */}
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
            <Skeleton className="h-5 w-40" />

            {/* Description */}
            <div className="flex flex-col gap-2 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-brand-border bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="mt-2 h-4 w-40" />
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
