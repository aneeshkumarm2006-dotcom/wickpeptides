export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-1 bg-brand-light">{children}</main>;
}
