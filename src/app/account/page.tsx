import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  FileText,
  Settings,
  ChevronRight,
  LogIn,
} from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Oversee your Wick Peptides account, review your order history, and retrieve Certificates of Analysis.",
};

const ACCOUNT_SECTIONS = [
  {
    icon: Package,
    title: "Order History",
    description: "Browse and follow every one of your past and active orders.",
    href: "#",
  },
  {
    icon: FileText,
    title: "My COAs",
    description: "Retrieve the Certificate of Analysis for each of your purchases.",
    href: "/coas",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Edit your email, password, and shipping address.",
    href: "#",
  },
];

export default function AccountPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Account</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            My Account
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Handle your orders, pull down COAs, and keep your account details current.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          {/* Login prompt */}
          <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl border border-brand-border bg-white p-8 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-brand-navy/5 text-brand-navy">
              <LogIn className="size-7" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-brand-navy">
                Log in to your account
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Signing in is required before you can see your account details.
              </p>
            </div>
            <Link
              href="/auth"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
            >
              <LogIn className="size-4" />
              Sign In
            </Link>
          </div>

          {/* Section cards */}
          <div className="flex flex-col gap-4">
            {ACCOUNT_SECTIONS.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-brand-navy">{title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
