"use client";

import { useEffect, useState } from "react";

export function useScrollHeader(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function useStickyCta(heroId = "hero") {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById(heroId);
      const heroBottom = hero?.offsetHeight ?? 600;
      setVisible(window.scrollY > heroBottom * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroId]);

  return visible;
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function formatPhoneInput(value: string): string {
  let v = value.replace(/\D/g, "");
  if (v.startsWith("8")) v = "7" + v.slice(1);
  if (v.length && !v.startsWith("7")) v = "7" + v;
  v = v.slice(0, 11);
  let formatted = "+7";
  if (v.length > 1) formatted += " (" + v.slice(1, 4);
  if (v.length >= 4) formatted += ") " + v.slice(4, 7);
  if (v.length >= 7) formatted += "-" + v.slice(7, 9);
  if (v.length >= 9) formatted += "-" + v.slice(9, 11);
  return formatted;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}

export function useEscapeKey(handler: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, enabled]);
}
