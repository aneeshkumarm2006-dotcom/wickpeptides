import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { AuthForms } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in or create an account to manage your Wick Peptides orders, download COAs, and track your research compound history.",
};

export default function AuthPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="flex min-h-[calc(100vh-4rem)] items-start justify-center px-6 py-16 lg:py-24">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="mb-4 flex justify-center">
              <span className="flex size-14 items-center justify-center rounded-full border-2 border-brand-navy/20 bg-white text-brand-navy shadow-sm">
                <ShieldCheck className="size-7" />
              </span>
            </span>
            <SectionLabel>Account Access</SectionLabel>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">
              Wick Peptides
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Sign in to manage orders, download COAs, and track your research
              history.
            </p>
          </div>

          {/* Auth forms (client — tabs for login / register) */}
          <AuthForms />

          {/* Research use disclaimer */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            This platform is for qualified researchers only. All products are
            for in-vitro laboratory research use only.{" "}
            <a
              href="/legal/research-disclaimer"
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              Learn more
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
