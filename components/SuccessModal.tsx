"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useBodyScrollLock, useEscapeKey } from "@/lib/hooks";
import { Button } from "./ui/Button";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  useBodyScrollLock(open);
  useEscapeKey(onClose, open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
            aria-label="Закрыть"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-md rounded-panel bg-white px-8 pb-8 pt-12 text-center shadow-lift"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-2xl leading-none text-ink-muted hover:text-ink"
              aria-label="Закрыть"
            >
              ×
            </button>
            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-dim text-2xl font-bold text-accent"
              aria-hidden
            >
              ✓
            </div>
            <h3 id="modal-title" className="font-display text-3xl font-semibold text-ink">
              Сценарий заявки
            </h3>
            <p className="mt-3 text-ink-muted">
              Демо: данные никуда не отправляются. В продакшене здесь будет
              интеграция с CRM, почтой или API заказчика.
            </p>
            <Button onClick={onClose} className="mt-6">
              Понятно
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
