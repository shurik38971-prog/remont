"use client";

import { CONTACT_PLACEHOLDERS } from "@/lib/data";
import { useModal } from "./ModalContext";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
import { formatPhoneInput } from "@/lib/hooks";

export function Contacts() {
  const { openSuccess } = useModal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    openSuccess();
    e.currentTarget.reset();
  };

  const fieldClass =
    "w-full rounded-lg border border-ink/10 bg-surface px-4 py-3.5 text-ink outline-none focus:border-accent";

  return (
    <section id="contacts" className="scroll-mt-[72px] py-24 lg:py-[100px]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHead
              label="Контакты"
              title="Форма заявки"
              description="Макет экрана контактов: в продакшене сюда подставляются данные заказчика, в демо — заглушки."
            />
            <ul className="mt-8 space-y-5">
              {CONTACT_PLACEHOLDERS.map((item) => (
                <li key={item.label}>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-ink/80">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {["WA", "TG"].map((m) => (
                <span
                  key={m}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-ink/25 text-xs font-bold text-ink-muted"
                  title="Заглушка мессенджера"
                >
                  {m}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-panel border border-ink/10 bg-white p-6 shadow-sm sm:p-10"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                Оставить заявку (демо)
              </h3>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="form-label-dark">
                    Имя
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="form-label-dark">
                    Телефон
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                    onChange={(e) => {
                      e.target.value = formatPhoneInput(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label-dark">
                    Комментарий
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Площадь, тип ремонта, пожелания…"
                    className={fieldClass}
                  />
                </div>
              </div>
              <Button type="submit" size="lg" full className="mt-6">
                Рассчитать стоимость
              </Button>
              <p className="mt-3 text-center text-xs text-ink-muted">
                Демо: данные не сохраняются и не отправляются
              </p>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
