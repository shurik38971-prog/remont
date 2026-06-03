"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateEstimate,
  formatPrice,
  type MaterialLevel,
  type ObjectType,
  type RepairType,
} from "@/lib/calculator";
import { CALCULATOR_DEMO_NOTE } from "@/lib/data";
import { useModal } from "./ModalContext";
import { SectionHead } from "./ui/SectionHead";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { FadeIn } from "./ui/FadeIn";
import { formatPhoneInput } from "@/lib/hooks";
import { cn } from "@/lib/cn";

type CalculatorProps = {
  preset: RepairType;
};

const REPAIR_OPTIONS: { value: RepairType; label: string }[] = [
  { value: "cosmetic", label: "Косметический" },
  { value: "newbuild", label: "Новостройка" },
  { value: "capital", label: "Капитальный" },
  { value: "design", label: "Дизайнерский" },
];

export function Calculator({ preset }: CalculatorProps) {
  const { openSuccess } = useModal();
  const [area, setArea] = useState(65);
  const [type, setType] = useState<RepairType>("capital");
  const [object, setObject] = useState<ObjectType>("apartment");
  const [level, setLevel] = useState<MaterialLevel>("standard");

  useEffect(() => {
    setType(preset);
  }, [preset]);

  const estimate = useMemo(
    () => calculateEstimate(area, type, object, level),
    [area, type, object, level],
  );

  const syncArea = (value: number) => {
    const v = Math.min(300, Math.max(10, value));
    setArea(v);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    openSuccess();
    e.currentTarget.reset();
    setArea(65);
    setType("capital");
    setObject("apartment");
    setLevel("standard");
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-bg-card px-4 py-3.5 text-cream outline-none transition-colors focus:border-accent";

  return (
    <section
      id="calculator"
      className="scroll-mt-[72px] bg-bg py-24 text-cream lg:py-[100px]"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHead
              label="Калькулятор"
              title="Рассчитайте стоимость ремонта"
              description={`${CALCULATOR_DEMO_NOTE} Цифры условные и не являются коммерческим предложением.`}
              light
            />
            <ul className="mt-8 space-y-3.5 text-cream/70">
              {[
                "Площадь, тип ремонта и уровень отделки",
                "Диапазон «от — до» на клиенте",
                "Форма заявки после расчёта",
              ].map((item) => (
                <li key={item} className="relative pl-7 text-[15px]">
                  <span className="absolute left-0 font-bold text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-panel border border-white/10 bg-bg-elevated p-6 sm:p-10"
            >
              <div className="mb-6">
                <label htmlFor="calc-area" className="form-label">
                  Площадь, м²
                </label>
                <input
                  id="calc-area"
                  type="number"
                  min={10}
                  max={2000}
                  value={area}
                  onChange={(e) => syncArea(Number(e.target.value))}
                  className={inputClass}
                  required
                />
                <input
                  type="range"
                  min={10}
                  max={300}
                  value={Math.min(area, 300)}
                  onChange={(e) => syncArea(Number(e.target.value))}
                  className="mt-3 w-full accent-accent"
                  aria-label="Площадь ползунком"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="calc-type" className="form-label">
                  Тип ремонта
                </label>
                <select
                  id="calc-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as RepairType)}
                  className={inputClass}
                  required
                >
                  {REPAIR_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="calc-object" className="form-label">
                  Объект
                </label>
                <select
                  id="calc-object"
                  value={object}
                  onChange={(e) => setObject(e.target.value as ObjectType)}
                  className={inputClass}
                >
                  <option value="apartment">Квартира</option>
                  <option value="house">Дом / коттедж</option>
                  <option value="commercial">Коммерция</option>
                </select>
              </div>

              <fieldset className="mb-6">
                <legend className="form-label">Уровень материалов</legend>
                <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                  {(
                    [
                      ["standard", "Стандарт"],
                      ["comfort", "Комфорт"],
                      ["premium", "Премиум"],
                    ] as const
                  ).map(([value, label]) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="level"
                        value={value}
                        checked={level === value}
                        onChange={() => setLevel(value)}
                        className="peer sr-only"
                      />
                      <span
                        className={cn(
                          "block rounded-lg border border-white/10 bg-bg-card py-3 text-center text-sm font-medium transition-all",
                          "peer-checked:border-accent peer-checked:bg-accent-dim peer-checked:text-accent",
                        )}
                      >
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div
                className="mb-6 rounded-xl border border-accent/30 bg-accent-dim p-6 text-center"
                aria-live="polite"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                  Ориентир в демо
                </span>
                <p className="mt-2 font-display text-3xl font-semibold text-accent sm:text-4xl">
                  {formatPrice(estimate.from)}
                  <span className="mx-2 opacity-60">—</span>
                  {formatPrice(estimate.to)}
                  <span className="ml-1 text-xl">₽</span>
                </p>
                <span className="mt-2 block text-xs text-cream/50">
                  Условные коэффициенты для демонстрации UX
                </span>
              </div>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="calc-name" className="form-label">
                    Имя (демо)
                  </label>
                  <input
                    id="calc-name"
                    name="name"
                    type="text"
                    placeholder="Как в форме"
                    className={inputClass}
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="calc-phone" className="form-label">
                    Телефон (демо)
                  </label>
                  <input
                    id="calc-phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className={inputClass}
                    required
                    autoComplete="tel"
                    onChange={(e) => {
                      e.target.value = formatPhoneInput(e.target.value);
                    }}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" full>
                Рассчитать стоимость
              </Button>
              <p className="mt-3 text-center text-xs text-cream/50">
                Отправка отключена — только демонстрация сценария
              </p>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
