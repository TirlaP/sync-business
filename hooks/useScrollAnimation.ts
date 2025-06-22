'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(once = true, margin = '-100px') {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: margin as any })
  
  return { ref, isInView }
}