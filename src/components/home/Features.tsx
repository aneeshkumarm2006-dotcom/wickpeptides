import Link from "next/link";
import { ShieldCheck, Truck, FlaskConical, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "99% Purity Verified",
    text: "Every compound tested to 99%+ purity before it ships.",
  },
  {
    icon: Truck,
    title: "Same Day Shipping",
    text: "All orders ship same day before 5PM PST.",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Tested",
    text: "Independent lab verification on every product we carry.",
  },
  {
    icon: Clock,
    title: "Fast Support",
    text: "We respond within 24 hours, 7 days a week.",
    href: "mailto:support@kingbiolabs.com",
  },
];

export function Features() {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text, href }) => {
          const inner = (
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-light p-6 transition-shadow hover:shadow-md">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-semibold text-brand-navy">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          );
          return href ? (
            <Link key={title} href={href} className="block">
              {inner}
            </Link>
          ) : (
            <div key={title}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
