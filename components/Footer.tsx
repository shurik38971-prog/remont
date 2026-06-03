import Link from "next/link";
import { SITE } from "@/lib/data";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="bg-bg py-10 text-cream/60">
      <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg text-cream">
            {SITE.brand}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed">
            {SITE.disclaimer}
          </p>
          <p className="mt-3 text-xs">
            © {new Date().getFullYear()} · демонстрационный лендинг
          </p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-6 text-sm"
          aria-label="Подвал"
        >
          <Link href="#types" className="hover:text-accent">
            Услуги
          </Link>
          <Link href="#portfolio" className="hover:text-accent">
            Работы
          </Link>
          <Link href="#calculator" className="hover:text-accent">
            Калькулятор
          </Link>
          <Link href="#about" className="hover:text-accent">
            О проекте
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
