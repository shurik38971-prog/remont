"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { CtaBar } from "./ui/CtaBar";
import { FadeIn } from "./ui/FadeIn";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-[72px] bg-surface-muted py-24 lg:py-[100px]">
      <Container narrow>
        <FadeIn>
          <SectionHead label="FAQ" title="Частые вопросы о демо" />
        </FadeIn>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <FadeIn key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-ink"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    {item.q}
                    <span
                      className={cn(
                        "text-xl text-accent transition-transform",
                        open && "rotate-45",
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p className="border-t border-ink/5 px-5 pb-5 pt-0 text-[15px] leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <CtaBar text="Попробуйте калькулятор — главный интерактивный элемент проекта." />
      </Container>
    </section>
  );
}
