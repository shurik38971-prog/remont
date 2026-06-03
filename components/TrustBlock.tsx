"use client";

import { TRUST_BLOCKS } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { CtaBar } from "./ui/CtaBar";
import { FadeIn } from "./ui/FadeIn";

export function TrustBlock() {
  return (
    <section id="trust" className="scroll-mt-[72px] py-24 lg:py-[100px]">
      <Container>
        <FadeIn>
          <SectionHead
            label="Доверие"
            title="Как может выглядеть блок доверия"
            description="Заготовки секций без фейковых имён, фото и оценок — только логика размещения контента."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {TRUST_BLOCKS.map((block, i) => (
            <FadeIn key={block.title} delay={i * 0.06}>
              <article className="rounded-card border border-dashed border-ink/20 bg-white p-8">
                <div className="mb-4 h-10 w-10 rounded-lg bg-accent-dim" aria-hidden />
                <h3 className="text-lg font-bold text-ink">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {block.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <CtaBar
          text="Форма заявки завершает сценарий — проверьте демо-отправку."
          buttonLabel="Перейти к форме"
          scrollTo="contacts"
        />
      </Container>
    </section>
  );
}
