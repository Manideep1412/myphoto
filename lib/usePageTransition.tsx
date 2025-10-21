"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

const transition = {
  duration: 0.6,
  ease: [0.6, 0.01, 0.2, 0.95]
};

export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(16px)" }}
          transition={transition}
          className="relative min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
