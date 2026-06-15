import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Features } from "@/components/home/Features";
import { CatalogPreview } from "@/components/home/CatalogPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyKing } from "@/components/home/WhyKing";
import { BundleCTA } from "@/components/home/BundleCTA";
import { ContactHelp } from "@/components/home/ContactHelp";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Features />
      <CatalogPreview />
      <StatsSection />
      <Testimonials />
      <WhyKing />
      <BundleCTA />
      <ContactHelp />
    </main>
  );
}
