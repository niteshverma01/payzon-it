"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronDown, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ParticleBackground } from "@/components/particle-background"

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center hero-pattern pt-16 overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,72,0,0.08),transparent_50%)]"></div>
      </div>

      <div className="container relative z-10 pt-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 glow-effect">
              <Sparkles className="h-4 w-4" />
              Transforming Businesses Digitally in India
              <Zap className="h-4 w-4" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center mb-8 leading-tight"
          >
            <span className="block">Innovative</span>
            <span className=" block">Digital Solutions</span>
            <span className="block">For Your</span>
            <div className="inline-block">
              <TypeAnimation
                sequence={["Business", 2000, "Enterprise", 2000, "Startup", 2000, "Brand", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-primary text-glow"
              />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From web development to security auditing, Payzon IT provides comprehensive digital solutions to transform
            your business and accelerate growth in the digital landscape across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 rounded-full shadow-2xl">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="/products">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Solutions
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center mt-16 gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full pulse"></div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full pulse" style={{ animationDelay: "0.5s" }}></div>
              <span>200+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full pulse" style={{ animationDelay: "1s" }}></div>
              <span>10+ Years Experience</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={scrollToServices}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="group-hover:text-primary transition-colors"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  )
}
