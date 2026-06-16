import type { Metadata } from "next";

import { LegalArticle, LegalSection } from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "These Terms of Service govern your use of the Magic Peptides website and the purchase of research-grade compounds listed on it.",
};

export default function TermsPage() {
  return (
    <LegalArticle title="Terms of Service">
      <p className="leading-relaxed text-muted-foreground">
        These Terms of Service govern your use of the Magic Peptides website and
        the purchase of research-grade compounds listed on it. By accessing this
        site you agree to these terms.
      </p>

      <LegalSection heading="Eligibility">
        <p>
          You must be 18 years or older and a qualified researcher to access
          this site. All products are sold strictly for in-vitro laboratory
          research and are not for human or animal consumption.
        </p>
      </LegalSection>

      <LegalSection heading="Orders & Acceptance">
        <p>
          All orders are subject to acceptance and product availability. We
          reserve the right to refuse or cancel any order at our sole
          discretion.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Magic Peptides is not liable
          for misuse of any product. Buyer assumes all responsibility for proper
          handling, storage and disposal.
        </p>
      </LegalSection>
    </LegalArticle>
  );
}
