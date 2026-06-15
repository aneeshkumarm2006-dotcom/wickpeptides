import { SectionLabel } from "@/components/SectionLabel";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function LegalArticle({ title, children }: Props) {
  return (
    <>
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
          <article className="flex flex-col gap-8">{children}</article>
        </div>
      </section>
    </>
  );
}

type SectionProps = {
  heading: string;
  children: React.ReactNode;
};

export function LegalSection({ heading, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-brand-navy">{heading}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export default LegalArticle;
