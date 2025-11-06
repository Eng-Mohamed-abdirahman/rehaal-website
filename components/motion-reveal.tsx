"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
} & Omit<MotionProps, "initial" | "whileInView" | "transition" | "viewport">;

export function FadeIn({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: delay / 1000 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: delay / 1000 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function MotionItem({
  children,
  className,
  variants = itemVariant,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
} & Omit<MotionProps, "initial" | "animate" | "whileInView" | "viewport">) {
  return (
    <motion.div variants={variants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}