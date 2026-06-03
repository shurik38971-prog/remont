import { ABOUT_PROJECT, SITE, UX_HIGHLIGHTS } from "@/lib/data";
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
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted">
              UX-решения в демо
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {UX_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[15px] text-ink"
                >
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
