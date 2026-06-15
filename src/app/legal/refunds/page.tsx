import type { Metadata } from "next";

import { LegalArticle, LegalSection } from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description:
    "Due to the nature of research-grade compounds we cannot accept returns of opened product. Damaged or incorrectly shipped items will be replaced or refunded.",
};

export default function RefundsPage() {
  return (
    <LegalArticle title="Refund & Return Policy">
      <p className="leading-relaxed text-muted-foreground">
        Due to the nature of research-grade compounds we cannot accept returns
        of opened product. Damaged or incorrectly shipped items will be replaced
        or refunded.
      </p>

      <LegalSection heading="Damaged or Defective">
        <p>
          Notify us within 7 days of delivery at{" "}
          <a
            href="mailto:support@kingbiolabs.com"
            className="text-brand-blue underline-offset-4 hover:underline"
          >
            support@kingbiolabs.com
          </a>{" "}
          with order number and photos.
        </p>
      </LegalSection>

      <LegalSection heading="Refunds">
        <p>
          Approved refunds are processed to the original payment method within
          5–10 business days.
        </p>
      </LegalSection>
    </LegalArticle>
  );
}
