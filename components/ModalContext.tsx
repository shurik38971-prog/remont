"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SuccessModal } from "./SuccessModal";

type ModalContextValue = {
  openSuccess: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openSuccess = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openSuccess }), [openSuccess]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <SuccessModal open={open} onClose={close} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
