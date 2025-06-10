"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),rgba(0,0,0,0.9))]"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Ready to Transform Your <span className="text-glow">Digital Presence?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-10"
          >
            Get in touch with Payzon IT experts and discover how we can help you achieve your digital goals in India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-6 text-white/80"
          >
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-white" />
              <span>info@payzonit.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
