import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  count?: number;
  showValue?: boolean;
  size?: number;
  className?: string;
  starClassName?: string;
};

function Star({ fill, size }: { fill: number; size: number }) {
  // fill: 0 = empty, 1 = full, 0.5 = half
  const id = `star-${Math.round(fill * 100)}-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#f5a623" />
          <stop offset={`${fill * 100}%`} stopColor="#d4d4d8" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.02l-5.9 3.11 1.13-6.57L2.45 8.94l6.6-.96L12 2z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

export function StarRating({
  rating,
  count,
  showValue = false,
  size = 16,
  className,
  starClassName,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className={cn("flex items-center gap-0.5", starClassName)}>
        {Array.from({ length: 5 }, (_, i) => {
          const fill = Math.max(0, Math.min(1, rating - i));
          return <Star key={i} fill={fill} size={size} />;
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-brand-navy">
          {rating.toFixed(1)}
        </span>
      )}
      {typeof count === "number" && (
        <span className="text-sm text-muted-foreground">
          {showValue ? `· ${count} reviews` : `${rating.toFixed(1)} · ${count} reviews`}
        </span>
      )}
    </div>
  );
}

export default StarRating;
