import type { Metadata } from "next";

import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Browse Every Compound",
  description:
    "Explore the full Magic Peptides lineup of research-grade compounds. Independently verified, with a lot-specific COA accompanying every batch.",
};

export default function ShopPage() {
  return (
    <main className="flex-1">
      <ShopCatalog />
    </main>
  );
}
