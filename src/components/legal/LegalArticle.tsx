type Props = {
  title: string;
  children: React.ReactNode;
};

export function LegalArticle({ title, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-eyebrow mb-3">LEGAL</p>
      <h1 className="font-display text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated: June 2026
      </p>
      <div className="prose mt-8 max-w-none space-y-4 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-6 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_strong]:text-foreground">
        {children}
        <p className="text-xs text-muted-foreground">
          Placeholder text. Replace with reviewed legal copy before launch.
        </p>
      </div>
    </article>
  );
}

type SectionProps = {
  heading: string;
  children: React.ReactNode;
};

export function LegalSection({ heading, children }: SectionProps) {
  return (
    <>
      <h2>{heading}</h2>
      {children}
    </>
  );
}

export default LegalArticle;
