"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import logo from "../public/logo.png"

interface LogoProps {
  variant?: "default" | "white"
}

export function Logo({ variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-foreground"
  const accentColor = variant === "white" ? "text-white" : "text-primary"

  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 overflow-hidden">
          <Image src={logo} alt="Payzon Logo" width={24} height={24} />
        </div>
        <div>
          <span className={`font-bold text-2xl tracking-tight ${textColor}`}>
            <span className={accentColor}>Payzon</span>
          </span>
          <span className="text-xs block -mt-1 text-muted-foreground">
            India
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
