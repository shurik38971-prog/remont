import type { ReactNode } from "react";
import { SHOWCASE_TOPICS } from "@/lib/data";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { FadeIn } from "./ui/FadeIn";

const icons: Record<string, ReactNode> = {
  list: (
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  steps: <path d="M12 3v18M3 12h18" />,
  chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  calc: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h8M8 14h4" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
};

export function ShowcaseTopics() {
  return (
    <section id="topics" className="scroll-mt-[72px] bg-white py-24 lg:py-[100px]">
      <Container>
        <FadeIn>
          <SectionHead
            label="Структура"
            title="Что важно показать на сайте ремонтной компании"
            description="Вместо неподтверждённых обещаний — блоки, которые заказчик заполняет реальными данными."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_TOPICS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="rounded-card border border-ink/10 bg-surface p-8 transition-all hover:border-accent hover:shadow-glow">
                <svg
                  className="mb-5 h-12 w-12 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  {icons[item.icon]}
                </svg>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
