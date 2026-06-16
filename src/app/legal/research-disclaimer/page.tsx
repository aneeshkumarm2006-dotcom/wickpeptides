import type { Metadata } from "next";

import { LegalArticle } from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Research Use Disclaimer",
  description:
    "All products sold by Magic Peptides are for in-vitro laboratory research use only and are not intended for human or veterinary use.",
};

export default function ResearchDisclaimerPage() {
  return (
    <LegalArticle title="Research Use Disclaimer">
      <p>
        <strong>
          All products sold by Magic Peptides are for in-vitro laboratory
          research use only.
        </strong>
      </p>

      <p className="leading-relaxed text-muted-foreground">
        Products are not intended for human or veterinary use, consumption,
        application, food additive, cosmetic, drug, or any other use other than
        scientific research conducted by qualified individuals or institutions.
      </p>

      <p className="leading-relaxed text-muted-foreground">
        By purchasing, the buyer affirms they are a qualified researcher and
        accept all responsibility for proper handling and use of these
        materials.
      </p>
    </LegalArticle>
  );
}
