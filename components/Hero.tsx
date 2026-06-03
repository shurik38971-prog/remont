"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_FEATURES, SITE } from "@/lib/data";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-dvh items-center pt-[118px] text-cream">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(12,14,16,0.92) 0%, rgba(12,14,16,0.75) 45%, rgba(12,14,16,0.4) 100%)",
          }}
        />
      </div>

      <Container className="relative py-20 pb-28 lg:py-24 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex max-w-2xl items-start gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium leading-snug text-cream/90 backdrop-blur-md sm:text-sm"
        >
          <span className="mt-1.5 h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
          {SITE.disclaimer}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]"
        >
          Сайт для компании по ремонту квартир с удобным{" "}
          <em className="text-accent not-italic">расчётом стоимости</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-2xl text-lg text-cream/85 sm:text-xl"
        >
          Демонстрационный проект: лендинг с услугами, примерами работ, этапами
          и калькулятором заявки.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button scrollTo="calculator" size="lg">
            Рассчитать стоимость
          </Button>
          <Button scrollTo="portfolio" variant="ghost" size="lg">
            Посмотреть работы
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HERO_FEATURES.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm"
            >
              <span className="block text-sm font-medium leading-snug text-cream/90">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-cream/50 md:flex"
        aria-hidden
      >
        <span>Листайте</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
