import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue",
        className
      )}
    >
      {children}
    </span>
  );
}

export default SectionLabel;
