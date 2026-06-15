import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Wick Peptides about product questions, order issues, COA requests, and general inquiries. We reply within 24 hours, 7 days a week.",
};

const INFO_CARDS = [
  {
    icon: Mail,
    title: "Email",
    body: (
      <a
        href="mailto:support@wickpeptides.com"
        className="text-foreground underline-offset-4 hover:underline"
      >
        support@wickpeptides.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Response Time",
    body: "Inside 24 hours, every day of the week.",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="border-b">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <p className="text-eyebrow mb-3">CONTACT</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-muted-foreground">
            Have a question about a product, an order, or a Certificate of
            Analysis? Our team is ready to help — drop us a message and
            we&apos;ll reply within a day.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12">
          {/* Left column — info cards */}
          <div className="flex flex-col gap-6">
            {INFO_CARDS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-lg border bg-surface p-6">
                <Icon
                  className="mb-3 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h2 className="font-display font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
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
