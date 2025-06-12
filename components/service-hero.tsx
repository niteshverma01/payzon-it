"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceHeroProps {
  title: string
  description: string
  icon: LucideIcon
  accentColor: string
  gradientFrom: string
  gradientTo: string
}

export function ServiceHero({
  title,
  description,
  icon: Icon,
  accentColor,
  gradientFrom,
  gradientTo,
}: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-24 relative hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${gradientFrom},transparent_70%)]`}></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-full ${accentColor} p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
          >
            <Icon className="h-10 w-10 text-white" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-3 py-1 rounded-full ${accentColor} text-white text-sm font-medium mb-6`}
          >
            Payzon IT India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className={`bg-clip-text  bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
              {title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
