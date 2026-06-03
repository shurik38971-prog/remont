"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  className?: string;
};

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
