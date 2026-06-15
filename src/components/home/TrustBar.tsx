const STATS = [
  { label: "Purity floor", value: "99%+" },
  { label: "COA", value: "Every batch" },
  { label: "Dispatch", value: "Same day" },
  { label: "Support", value: "24h reply" },
];

export function TrustBar() {
  return (
    <section className="border-b border-brand-border bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 py-8 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-white/60">
              {stat.label}
            </span>
            <span className="text-xl font-bold text-white sm:text-2xl">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
