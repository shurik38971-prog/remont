import { cn } from "@/lib/cn";

export function Container({
  children,
  narrow,
  className,
}: {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-6",
        narrow && "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
