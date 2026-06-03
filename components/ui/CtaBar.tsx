import { Button } from "./Button";
import { cn } from "@/lib/cn";

type CtaBarProps = {
  text: string;
  buttonLabel?: string;
  scrollTo?: string;
  dark?: boolean;
};

export function CtaBar({
  text,
  buttonLabel = "Рассчитать стоимость",
  scrollTo = "calculator",
  dark,
}: CtaBarProps) {
  return (
    <div
      className={cn(
        "mt-14 flex flex-col items-start justify-between gap-5 rounded-card p-7 sm:flex-row sm:items-center",
        dark
          ? "border border-white/10 bg-white/[0.06] text-cream"
          : "bg-bg-card text-cream",
      )}
    >
      <p className="max-w-md text-[1.05rem] leading-relaxed">{text}</p>
      <Button scrollTo={scrollTo} className="shrink-0">
        {buttonLabel}
      </Button>
    </div>
  );
}
