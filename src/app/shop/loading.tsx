import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ShopLoading() {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Page header */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-12 w-72 max-w-full" />
          <Skeleton className="h-4 w-full max-w-2xl" />
          <Skeleton className="h-4 w-2/3 max-w-md" />
        </div>

        {/* Search */}
        <Skeleton className="mt-8 h-13 w-full rounded-xl" />

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div className="hidden flex-col gap-3 lg:flex">
            <Skeleton className="h-5 w-24" />
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-40" />
            ))}
            <div className="mt-2 flex gap-2">
              <Skeleton className="h-8 w-20 rounded-lg" />
              <Skeleton className="h-8 w-20 rounded-lg" />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex flex-col gap-12">
            {Array.from({ length: 2 }).map((_, group) => (
              <div key={group} className="flex flex-col gap-5">
                <Skeleton className="h-7 w-56" />
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
