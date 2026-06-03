"use client";

import { scrollToSection } from "@/lib/hooks";
import type { RepairType } from "@/lib/calculator";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-accent to-[#a88b4a] text-bg shadow-glow hover:from-accent-hover hover:to-accent hover:-translate-y-px",
  ghost:
    "border border-white/25 bg-white/10 text-cream backdrop-blur-md hover:bg-white/20",
  outline:
    "border border-ink/10 bg-transparent text-ink hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-[18px] py-2.5 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  scrollTo?: string;
  preset?: RepairType;
  onPreset?: (preset: RepairType) => void;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  full,
  scrollTo,
  preset,
  onPreset,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    if (preset && onPreset) onPreset(preset);
    if (scrollTo) scrollToSection(scrollTo);
    onClick?.();
  };

  return (
    <button
      type={type}
      onClick={scrollTo || preset || onClick ? handleClick : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-250",
        variants[variant],
        sizes[size],
        full && "w-full",
        className,
      )}
    >
      {children}
    </button>
  );
}
