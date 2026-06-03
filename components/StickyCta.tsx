"use client";

import { useStickyCta } from "@/lib/hooks";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

export function StickyCta() {
  const visible = useStickyCta();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[999] border-t border-white/10 bg-bg/95 p-3 backdrop-blur-xl transition-transform duration-250 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Button scrollTo="calculator" full>
        Рассчитать стоимость
      </Button>
    </div>
  );
}
