"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {  Sparkles } from "lucide-react"
import Image from "next/image"
import adhar from "../public/adhar.jpeg" // Ensure this file exists in the public folder
import pan from "../public/pan.jpeg"
import bank from "../public/bank.png"
import gst from "../public/gst.jpeg";
import face from "../public/face.jpeg";

const stats = [
  {
    label:
      "Instant Aadhaar verification services to validate identity accurately and enable secure, compliant customer onboarding. Designed for speed and reliability, these solutions help reduce fraud, ensure data integrity, and streamline verification processes across digital platforms.",
    value: "Aadhaar Verification",
    image: adhar,
  },
  {
    label:
      "Real-time PAN verification services to ensure legal compliance and prevent identity fraud. These secure solutions validate PAN details instantly, supporting accurate onboarding, streamlined financial processes, and trustworthy data management for businesses and institutions.",
    value: "PAN Verification",
    image:pan,
  },
  {
    label:
      "Secure bank account verification services to confirm account ownership and validate details before transactions or payouts. These solutions reduce payment failures, prevent fraud, and ensure accurate, seamless financial operations for businesses and platforms.",
    value: "Bank Account Verification",
    image: bank,
  },
  {
    label:
      "GST verification services to instantly validate GST numbers, ensuring business authenticity and preventing tax-related fraud. These solutions support regulatory compliance, build trust, and streamline onboarding and financial workflows for seamless business operations.",
    value: "GST Verification",
    image: gst,
  },
  {
    label:
      "AI-powered live face verification for real-time, contactless identity checks. Ensures secure onboarding and authentication by matching facial features instantly, reducing fraud and enhancing user trust across digital platforms and services.",
    value: "Live Face Verification",
    image: face,
  },
]

export function Stats() {
  return (
    <section className="py-24 px-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,72,0,0.1),transparent_70%)]"></div>
      <div className="container relative">
        <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Verification Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our track record of success speaks for itself
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary/50 border-border/50 h-full hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={typeof stat.image === "string" ? stat.image : stat.image}
                      alt={stat.value}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
