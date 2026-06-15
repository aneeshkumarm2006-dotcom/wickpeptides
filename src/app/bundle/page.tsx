import type { Metadata } from "next";

import { BundleBuilder } from "@/components/bundle/BundleBuilder";

export const metadata: Metadata = {
  title: "Build Your Bundle",
  description:
    "Choose any 5 research-grade peptides and save 10% automatically. Every compound is third-party tested with a lot-specific COA on each batch.",
};

export default function BundlePage() {
  return (
    <main className="flex-1 bg-brand-light">
      <BundleBuilder />
    </main>
  );
}
