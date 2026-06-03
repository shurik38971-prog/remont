import { ABOUT_PROJECT, SITE } from "@/lib/data";
import { Container } from "./ui/Container";
import { FadeIn } from "./ui/FadeIn";

export function AboutProject() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] border-t border-ink/10 bg-surface py-24 lg:py-[100px]"
    >
      <Container narrow>
        <FadeIn>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent">
            Портфолио
          </span>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {ABOUT_PROJECT.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {ABOUT_PROJECT.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {SITE.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-accent/25 bg-accent-dim px-5 py-4 text-sm text-ink-muted">
            {SITE.disclaimer}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
