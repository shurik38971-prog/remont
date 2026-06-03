"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/lib/data";
import { useScrollHeader } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-[72px] transition-all duration-250",
        scrolled && "border-b border-white/10 bg-bg/95 backdrop-blur-xl",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Link
          href="#hero"
          className="flex shrink-0 items-center gap-2.5 text-cream"
          onClick={closeMenu}
        >
          <span
            className="h-9 w-9 shrink-0 bg-gradient-to-br from-accent to-[#8a7340]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
            aria-hidden
          />
          <span className="font-display text-xl font-semibold tracking-wide">
            {SITE.brand.slice(0, 6)}
            <span className="text-accent">{SITE.brand.slice(6)}</span>
          </span>
        </Link>

        <nav
          className={cn(
            "flex gap-7 max-md:fixed max-md:left-0 max-md:right-0 max-md:top-[72px] max-md:flex-col max-md:gap-0 max-md:border-b max-md:border-white/10 max-md:bg-bg max-md:p-6 max-md:transition-all max-md:duration-250",
            menuOpen
              ? "max-md:visible max-md:translate-y-0 max-md:opacity-100"
              : "max-md:invisible max-md:-translate-y-full max-md:opacity-0",
          )}
          aria-label="Основная навигация"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-sm font-medium text-cream/75 transition-colors hover:text-accent max-md:border-b max-md:border-white/10 max-md:py-3.5 max-md:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-medium text-cream/50 lg:inline">
            Демо · портфолио
          </span>
          <Button scrollTo="calculator" size="sm" className="max-md:hidden">
            Рассчитать стоимость
          </Button>
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-0.5 w-[22px] bg-cream transition-all",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-[22px] bg-cream transition-all",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-[22px] bg-cream transition-all",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>
    </header>
  );
}
