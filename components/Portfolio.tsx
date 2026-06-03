"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS, type PortfolioCategory } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { CtaBar } from "./ui/CtaBar";
import { FadeIn } from "./ui/FadeIn";
import { cn } from "@/lib/cn";

export function Portfolio() {
  const [filter, setFilter] = useState<string>("all");

  const visible = PORTFOLIO_ITEMS.filter(
    (item) =>
      filter === "all" ||
      item.categories.includes(filter as PortfolioCategory),
  );

  return (
    <section
      id="portfolio"
      className="scroll-mt-[72px] bg-bg py-24 text-cream lg:py-[100px]"
    >
      <Container>
        <FadeIn>
          <SectionHead
            label="Портфолио"
            title="Визуальный блок работ"
            description="Стоковые фото для демонстрации сетки, фильтров и hover-состояний. На боевом сайте — съёмка объектов заказчика."
            light
          />
        </FadeIn>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Фильтр проектов"
        >
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                filter === f.id
                  ? "border-accent bg-accent-dim text-accent"
                  : "border-white/10 text-cream/60 hover:border-accent/50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3">
          {visible.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.04}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                item.wide && "lg:col-span-2",
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                sizes={item.wide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg/95 via-bg/20 to-transparent p-6 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {item.meta}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-cream/70">{item.caption}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <CtaBar
          dark
          text="Калькулятор — следующий шаг воронки после просмотра визуальных кейсов."
        />
      </Container>
    </section>
  );
}
