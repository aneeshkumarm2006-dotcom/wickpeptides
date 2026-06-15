import {
  Activity,
  FlaskConical,
  BadgeCheck,
  RefreshCw,
  HelpCircle,
  Beaker,
  ClipboardCheck,
  Microscope,
  FileText,
  Package,
  Truck,
} from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

const METRICS = [
  {
    icon: Activity,
    value: "99.7%",
    label: "Average Purity",
    sub: "Last 12 months, all batches",
  },
  {
    icon: FlaskConical,
    value: "2,400+",
    label: "Batches Tested",
    sub: "Independent third-party COAs",
  },
  {
    icon: BadgeCheck,
    value: "4",
    label: "Labs Verified",
    sub: "ISO-17025 accredited partners",
  },
  {
    icon: RefreshCw,
    value: "94%",
    label: "Reorder Rate",
    sub: "Within 90 days of first order",
  },
];

const PURITY_COMPARISON = [
  { name: "King Bio Labs", value: 99.7, highlight: true },
  { name: "Supplier A", value: 96.2 },
  { name: "Supplier B", value: 94.8 },
  { name: "Supplier C", value: 92.1 },
  { name: "Industry Average", value: 89.4 },
];

const TREND = [
  { label: "Q1 2023", value: 99.1 },
  { label: "Q2", value: 99.2 },
  { label: "Q3", value: 99.3 },
  { label: "Q4", value: 99.2 },
  { label: "Q1 2024", value: 99.4 },
  { label: "Q2", value: 99.5 },
  { label: "Q3", value: 99.4 },
  { label: "Q4", value: 99.6 },
  { label: "Q1 2025", value: 99.5 },
  { label: "Apr", value: 99.6 },
  { label: "May", value: 99.7 },
  { label: "Jun", value: 99.7 },
];

const STEPS = [
  {
    icon: Beaker,
    n: "01",
    title: "Synthesis",
    text: "Compound is produced at a cGMP-aligned facility under documented standard operating procedures.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "In-House QC",
    text: "Identity and concentration confirmed by HPLC-UV and mass spectrometry before any batch leaves the synthesis floor.",
  },
  {
    icon: Microscope,
    n: "03",
    title: "Third-Party Assay",
    text: "Sealed samples shipped blind to an ISO-17025 accredited lab. Purity, residual solvents, and endotoxin screened.",
  },
  {
    icon: FileText,
    n: "04",
    title: "COA Published",
    text: "Lot-specific Certificate of Analysis attached to the product page and matched to the lot number on your vial.",
  },
  {
    icon: Package,
    n: "05",
    title: "Cold-Chain Pack",
    text: "Tamper-evident, climate-aware packaging assembled and sealed under camera before handoff.",
  },
  {
    icon: Truck,
    n: "06",
    title: "Same-Day Ship",
    text: "Orders before 5PM PST leave the warehouse same day with tracked, signature-required delivery.",
  },
];

const INSTITUTIONS = [
  "Stanford",
  "Johns Hopkins",
  "Naval Health",
  "ETH Zürich",
  "NUS",
];

function PurityTrendChart() {
  const width = 600;
  const height = 220;
  const padX = 40;
  const padY = 30;
  const min = 98.9;
  const max = 99.9;

  const points = TREND.map((d, i) => {
    const x = padX + (i / (TREND.length - 1)) * (width - padX * 2);
    const y =
      height - padY - ((d.value - min) / (max - min)) * (height - padY * 2);
    return { ...d, x, y };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  const areaPath =
    `M ${points[0].x.toFixed(1)} ${(height - padY).toFixed(1)} ` +
    points.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") +
    ` L ${points[points.length - 1].x.toFixed(1)} ${(height - padY).toFixed(1)} Z`;

  const xLabels = ["Q1 2024", "Q2", "Q3", "Q4", "Q1 2025", "Q2"];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Purity trend over 24 months, rising from 99.1% to 99.7%"
    >
      {[99.0, 99.3, 99.6, 99.9].map((g) => {
        const y =
          height - padY - ((g - min) / (max - min)) * (height - padY * 2);
        return (
          <g key={g}>
            <line
              x1={padX}
              x2={width - padX}
              y1={y}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
            <text x={4} y={y + 4} fontSize={10} fill="#9ca3af">
              {g.toFixed(1)}
            </text>
          </g>
        );
      })}
      <path d={areaPath} fill="#1e3a8a" fillOpacity={0.08} />
      <path
        d={linePath}
        fill="none"
        stroke="#0d1b4d"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {points.map((p) => (
        <circle key={p.label + p.x} cx={p.x} cy={p.y} r={3} fill="#0d1b4d" />
      ))}
      {xLabels.map((label, i) => {
        const x = padX + (i / (xLabels.length - 1)) * (width - padX * 2);
        return (
          <text
            key={label + i}
            x={x}
            y={height - 8}
            fontSize={10}
            fill="#9ca3af"
            textAnchor="middle"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export function StatsSection() {
  return (
    <section className="border-b border-brand-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-3">
          <SectionLabel>The Numbers Back It Up</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Documentation discipline, measured
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Every claim on this page is backed by lot-level data and independent
            third-party verification. Here is what the last twelve months look
            like.
          </p>
        </div>

        {/* Metric cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="flex flex-col gap-2 rounded-2xl border border-brand-border bg-brand-light p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <Icon className="size-5" />
              </span>
              <span className="mt-2 text-3xl font-bold text-brand-navy">
                {value}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                {label}
                <button
                  type="button"
                  title={sub}
                  aria-label={`More info about ${label}`}
                  className="text-muted-foreground hover:text-brand-blue"
                >
                  <HelpCircle className="size-3.5" />
                </button>
              </span>
              <span className="text-xs text-muted-foreground">{sub}</span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Purity comparison */}
          <div className="rounded-2xl border border-brand-border bg-brand-light p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-brand-navy">
                Purity Comparison
              </h3>
              <span className="rounded-full bg-brand-navy/5 px-2.5 py-1 text-[11px] font-semibold text-brand-navy">
                Latest Batch
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {PURITY_COMPARISON.map((row) => (
                <div key={row.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span
                      className={
                        row.highlight
                          ? "font-semibold text-brand-navy"
                          : "text-muted-foreground"
                      }
                    >
                      {row.name}
                    </span>
                    <span
                      className={
                        row.highlight
                          ? "font-semibold text-brand-navy"
                          : "text-muted-foreground"
                      }
                    >
                      {row.value.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-brand-border">
                    <div
                      className={
                        row.highlight ? "h-full bg-brand-navy" : "h-full bg-brand-blue/40"
                      }
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <HelpCircle className="size-3.5" />
              Source: independent ISO-17025 assay, latest released lots.
            </p>
          </div>

          {/* Purity trend */}
          <div className="rounded-2xl border border-brand-border bg-brand-light p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-brand-navy">
                Purity Trend — 24 Months
              </h3>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                +0.4% YoY
              </span>
            </div>
            <div className="mt-6">
              <PurityTrendChart />
            </div>
            <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <HelpCircle className="size-3.5" />
              Source: aggregated lot COAs, Q1 2023 – Jun 2025.
            </p>
          </div>
        </div>

        {/* 6-step testing process */}
        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <SectionLabel>How We Test</SectionLabel>
              <h3 className="text-2xl font-bold tracking-tight text-brand-navy">
                Six checkpoints between synthesis and your bench.
              </h3>
            </div>
            <span className="w-fit rounded-full bg-brand-navy/5 px-3 py-1.5 text-xs font-semibold text-brand-navy">
              ISO-17025 verified
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ icon: Icon, n, title, text }) => (
              <div
                key={n}
                className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-brand-light p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand-blue">
                    {n}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-brand-navy">
                  {title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institution logos */}
        <div className="mt-14 border-t border-brand-border pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            As Specified By
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {INSTITUTIONS.map((name) => (
              <span
                key={name}
                className="text-sm font-bold uppercase tracking-wider text-brand-navy/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
