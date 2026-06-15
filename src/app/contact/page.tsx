import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with King Bio Labs for product questions, order issues, COA requests, and general inquiries. We respond within 24 hours, 7 days a week.",
};

const INFO_CARDS = [
  {
    icon: Mail,
    title: "Email",
    body: (
      <a
        href="mailto:support@kingbiolabs.com"
        className="text-brand-blue underline-offset-4 hover:underline"
      >
        support@kingbiolabs.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Response Time",
    body: "Within 24 hours, 7 days a week.",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Questions about a product, an order, or a Certificate of Analysis?
            Our team is here to help — send us a message and we&apos;ll get back
            to you within a day.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left column — info cards */}
          <div className="flex flex-col gap-5">
            {INFO_CARDS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <Icon className="size-5" />
                </span>
                <h2 className="text-base font-semibold text-brand-navy">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Right column — contact form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
