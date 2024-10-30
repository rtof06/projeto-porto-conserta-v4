"use client";
import { motion } from 'framer-motion';

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ bounce: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}