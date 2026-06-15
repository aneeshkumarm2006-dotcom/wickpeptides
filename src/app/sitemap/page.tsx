import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "A full index of every page on the King Bio Labs website — shop, products, legal documents, and account pages.",
};

type SitemapLink = { label: string; href: string; description?: string };
type SitemapSection = { title: string; links: SitemapLink[] };

const SITEMAP: SitemapSection[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/", description: "Research-grade compounds, verified purity." },
      { label: "About", href: "/about", description: "Our standard and why we set it." },
      { label: "Contact", href: "/contact", description: "Get in touch with our team." },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Shop All Compounds", href: "/shop", description: "Full catalog of 27 research compounds." },
      { label: "Build a Bundle", href: "/bundle", description: "Choose any 5 peptides and save 10%." },
    ],
  },
  {
    title: "Research & Testing",
    links: [
      {
        label: "COAs & Testing",
        href: "/coas",
        description: "Every batch tested, every result published.",
      },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In / Register", href: "/auth", description: "Access your account." },
      { label: "My Account", href: "/account", description: "Orders, COAs, and settings." },
      { label: "Affiliate Program", href: "/affiliates", description: "Partner with us and earn 15%." },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Refund & Return Policy", href: "/legal/refunds" },
      { label: "Research Use Disclaimer", href: "/legal/research-disclaimer" },
    ],
  },
];

function LinkRow({ label, href, description }: SitemapLink) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-brand-light"
      >
        <ChevronRight className="mt-0.5 size-4 shrink-0 text-brand-blue transition-transform group-hover:translate-x-0.5" />
        <div className="min-w-0">
          <span className="font-medium text-brand-navy">{label}</span>
          {description && (
            <span className="ml-2 text-sm text-muted-foreground">
              — {description}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
}

export default function SitemapPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Navigation</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Sitemap
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A complete index of every page on the King Bio Labs website.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <div className="flex flex-col gap-10">
            {SITEMAP.map(({ title, links }) => (
              <div key={title}>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {title}
                </h2>
                <ul className="rounded-2xl border border-brand-border bg-white py-1">
                  {links.map((link) => (
                    <LinkRow key={link.href} {...link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
