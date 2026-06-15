import type { Metadata } from "next";

import { LegalArticle, LegalSection } from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This Privacy Policy describes how Wick Peptides collects, uses and protects information about you when you visit our website or place an order.",
};

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy">
      <p className="leading-relaxed text-muted-foreground">
        This Privacy Policy describes how Wick Peptides collects, uses and
        protects information about you when you visit our website or place an
        order.
      </p>

      <LegalSection heading="Information We Collect">
        <p>
          We collect account information, order information, and standard
          analytics/log data when you interact with our site.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Information">
        <p>
          We use your information to fulfill orders, provide support, send
          transactional messages, and improve our service.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          You can access, correct or delete your account information at any time
          by contacting{" "}
          <a
            href="mailto:support@wickpeptides.com"
            className="text-foreground underline-offset-4 hover:underline"
          >
            support@wickpeptides.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalArticle>
  );
}
