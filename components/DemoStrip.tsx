import { SITE } from "@/lib/data";

/** Постоянная пометка: сайт — концепт для портфолио, не реальная компания */
export function DemoStrip() {
  return (
    <div
      className="fixed inset-x-0 top-[72px] z-[999] border-b border-accent/25 bg-bg/95 py-2.5 text-center backdrop-blur-md"
      role="note"
      aria-label="Пометка о демонстрационном проекте"
    >
      <p className="mx-auto max-w-3xl px-4 text-xs leading-snug text-cream/85 sm:text-sm">
        <span className="mr-2 inline-block rounded bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
          Демо
        </span>
        {SITE.disclaimer}
      </p>
    </div>
  );
}
