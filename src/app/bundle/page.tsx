import type { Metadata } from "next";

import { BundleBuilder } from "@/components/bundle/BundleBuilder";

export const metadata: Metadata = {
  title: "Build Your Bundle",
  description:
    "Pick any 5 research-grade peptides and a 10% discount applies on its own. Each compound is third-party tested, with a lot-specific COA accompanying every batch.",
};

export default function BundlePage() {
  return (
    <main className="flex-1 bg-brand-light">
      <BundleBuilder />
    </main>
  );
}
