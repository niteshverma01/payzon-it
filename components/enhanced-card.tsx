"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "glass" | "glow"
  hover?: boolean
  delay?: number
}

export function EnhancedCard({ children, className, variant = "default", hover = true, delay = 0 }: EnhancedCardProps) {
  const variants = {
    default: "service-card",
    glass: "glass-card",
    glow: "glow-effect",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(variants[variant], className)}
    >
      <Card className="h-full border-0 bg-transparent">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
