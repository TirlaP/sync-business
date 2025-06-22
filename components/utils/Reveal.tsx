'use client'

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  className?: string
  variant?: "default" | "teal"
  delay?: number
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  className = "", 
  variant = "default", 
  delay = 0 
}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const overlayGradient = variant === "teal" 
    ? "from-blue-400 to-blue-600" 
    : "from-blue-500 to-blue-700"

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.25 + delay }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : {}}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
        className={`absolute inset-y-1 left-0 right-0 bg-gradient-to-r ${overlayGradient} z-20`}
      />
    </div>
  )
}
