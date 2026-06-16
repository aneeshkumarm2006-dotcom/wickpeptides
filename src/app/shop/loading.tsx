import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ShopLoading() {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        {/* Page header */}
        <div className="border-t border-border pt-6">
          <Skeleton className="h-3 w-20 rounded-none" />
          <div className="mt-6 flex flex-col gap-4">
            <Skeleton className="h-12 w-72 max-w-full rounded-none" />
            <Skeleton className="h-4 w-full max-w-2xl rounded-none" />
            <Skeleton className="h-4 w-2/3 max-w-md rounded-none" />
          </div>
        </div>

        {/* Search */}
        <div className="mt-12 border-t border-border">
          <Skeleton className="h-14 w-full rounded-none" />
        </div>

        {/* Two-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="hidden flex-col bg-white lg:flex">
            <Skeleton className="h-12 w-full rounded-none" />
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="mx-5 my-3 h-4 w-40 rounded-none" />
            ))}
            <div className="mt-auto flex gap-px bg-border p-px">
              <Skeleton className="h-11 flex-1 rounded-none" />
              <Skeleton className="h-11 flex-1 rounded-none" />
            </div>
          </div>

          {/* Product grid */}
          <div className="flex flex-col gap-px bg-border">
            {Array.from({ length: 2 }).map((_, group) => (
              <div key={group} className="flex flex-col bg-white">
                <div className="border-b border-border px-5 py-4 lg:px-8">
                  <Skeleton className="h-7 w-56 rounded-none" />
                </div>
                <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProductCardSkeleton key={i} className="border-0" />
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
