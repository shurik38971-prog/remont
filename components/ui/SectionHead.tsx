import { cn } from "@/lib/cn";

type SectionHeadProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHead({
  label,
  title,
  description,
  light,
  className,
}: SectionHeadProps) {
  return (
    <div className={cn("mb-12 max-w-xl", className)}>
      <span
        className={cn(
          "mb-3 inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent",
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
          light ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[1.05rem] leading-relaxed",
            light ? "text-cream/75" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
