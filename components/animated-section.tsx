"use client"

import { motion, type HTMLMotionProps } from "framer-motion" // 1. Importe o tipo aqui
import type { ReactNode } from "react"

// 2. Altere a interface para usar HTMLMotionProps
interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}