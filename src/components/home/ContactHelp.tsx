import { Mail, Clock } from "lucide-react";

export function ContactHelp() {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Need Help With Your Research?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Our team is here for product questions, orders and guidance.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email card */}
          <a
            href="mailto:support@kingbiolabs.com"
            className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
              <Mail className="size-5" />
            </span>
            <h3 className="text-base font-semibold text-brand-navy">Email Us</h3>
            <span className="text-sm font-medium text-brand-blue">
              support@kingbiolabs.com
            </span>
          </a>

          {/* Response card */}
          <div className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
              <Clock className="size-5" />
            </span>
            <h3 className="text-base font-semibold text-brand-navy">
              Response Within 24 Hours
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-blue" />
                Real-time community support
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-blue" />
                Guidance on products and orders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHelp;
