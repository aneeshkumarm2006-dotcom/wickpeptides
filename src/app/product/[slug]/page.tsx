import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/ProductCard";
import { SectionLabel } from "@/components/SectionLabel";
import { StarRating } from "@/components/StarRating";
import { ProductPurchasePanel } from "@/components/product/ProductPurchasePanel";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: `${product.name}: research-grade ${product.category.toLowerCase()}, third-party tested to 99%+ purity with a lot-specific COA on every batch. Rated ${product.rating} across ${product.reviewCount} verified reviews.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, 4);

  return (
    <main className="flex-1 bg-brand-light">
      {/* Product detail */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column — product image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-brand-border bg-white">
            {product.bestSelling && (
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Best Selling
              </span>
            )}
            <Image
              src={product.image ?? "/vial-product.svg"}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain p-10"
            />
            <div className="absolute bottom-4 right-4 rounded-xl border border-brand-border bg-white/90 px-4 py-2 backdrop-blur">
              <p className="text-lg font-bold leading-none text-brand-navy">
                99%+
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                HPLC verified purity
              </p>
            </div>
          </div>

          {/* Right column — purchase panel */}
          <ProductPurchasePanel product={product} />
        </div>
      </div>

      {/* Reviews anchor target */}
      <section
        id="reviews"
        className="scroll-mt-24 border-t border-brand-border bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-12">
          <SectionLabel>Verified Reviews</SectionLabel>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <span className="text-5xl font-bold text-brand-navy">
                {product.rating.toFixed(1)}
              </span>
              <div className="flex flex-col gap-1">
                <StarRating rating={product.rating} size={20} />
                <p className="text-sm text-muted-foreground">
                  Based on {product.reviewCount} verified reviews
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every rating is tied to a verified purchase from our order ledger.
              A lot-matched Certificate of Analysis accompanies each shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-brand-border bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Related Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              More from {product.category}.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
