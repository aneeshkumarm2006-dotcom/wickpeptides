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
    "Manage your Wick Peptides account, view order history, and download Certificates of Analysis.",
};

const ACCOUNT_SECTIONS = [
  {
    icon: Package,
    title: "Order History",
    description: "View and track all your past and current orders.",
    href: "#",
  },
  {
    icon: FileText,
    title: "My COAs",
    description: "Download Certificates of Analysis for your purchases.",
    href: "/coas",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Update your email, password, and shipping address.",
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
            Manage your orders, download COAs, and update your account details.
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
                Sign in to your account
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                You must be signed in to view your account details.
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
