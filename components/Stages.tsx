import { STAGES } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { CtaBar } from "./ui/CtaBar";
import { FadeIn } from "./ui/FadeIn";

export function Stages() {
  return (
    <section id="stages" className="scroll-mt-[72px] py-24 lg:py-[100px]">
      <Container>
        <FadeIn>
          <SectionHead
            label="Процесс"
            title="Этапы сотрудничества"
            description="Прозрачная структура проекта — типичный блок для лендинга ремонтной компании."
          />
        </FadeIn>

        <ol className="relative">
          <div
            className="absolute bottom-0 left-7 top-0 w-0.5 bg-gradient-to-b from-accent to-surface-muted"
            aria-hidden
          />
          {STAGES.map((stage, i) => (
            <FadeIn key={stage.num} delay={i * 0.08}>
              <li className="relative grid grid-cols-[56px_1fr] gap-8 py-8 max-sm:grid-cols-[40px_1fr] max-sm:gap-5">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-xl font-semibold text-accent max-sm:h-10 max-sm:w-10 max-sm:text-base">
                  {stage.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-ink-muted">{stage.text}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        <CtaBar text="Проверьте сценарий расчёта — ключевой UX-элемент демо." />
      </Container>
    </section>
  );
}
