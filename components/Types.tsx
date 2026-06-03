"use client";

import Image from "next/image";
import { SERVICE_TYPES } from "@/lib/data";
import type { RepairType } from "@/lib/calculator";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { CtaBar } from "./ui/CtaBar";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
import { cn } from "@/lib/cn";

type TypesProps = {
  onPreset: (type: RepairType) => void;
};

export function Types({ onPreset }: TypesProps) {
  return (
    <section id="types" className="scroll-mt-[72px] py-24 lg:py-[100px]">
      <Container>
        <FadeIn>
          <SectionHead
            label="Услуги"
            title="Виды ремонта"
            description="Сценарий выбора типа работ — карточки с описанием и переходом в калькулятор."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICE_TYPES.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <article
                className={cn(
                  "group relative overflow-hidden rounded-card border bg-white transition-all duration-250 hover:-translate-y-1 hover:shadow-lift",
                  item.featured
                    ? "border-accent shadow-glow"
                    : "border-ink/10",
                )}
              >
                {item.featured && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-bg">
                    Акцент в демо
                  </span>
                )}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <span className="mt-4 block text-sm font-semibold text-accent">
                    {item.priceNote}
                  </span>
                  <Button
                    className="mt-4"
                    variant={item.featured ? "primary" : "outline"}
                    size="sm"
                    scrollTo="calculator"
                    preset={item.id}
                    onPreset={onPreset}
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <CtaBar
          text="В демо карточки ведут в калькулятор — так показан путь от выбора услуги к заявке."
          buttonLabel="Открыть калькулятор"
        />
      </Container>
    </section>
  );
}
