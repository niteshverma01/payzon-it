"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import fitech from "../public/fintech.jpg"
import shoping from "../public/shoping.jpeg"
import recharge from "../public/Recharge.png"
import travel from "../public/travel.jpg"
import gaming from "../public/gaming.jpeg"
import grocery from "../public/grocery.jpeg"
import ekyc from "../public/kyc.jpg"
import webhosting from "../public/web-hosting.jpeg"

const projects = [
  {
    title: "Fintech Portal",
    description: "Advanced fintech portals delivering secure, fast, and efficient financial transactions and digital payment services. Designed for reliability and scalability, these platforms simplify complex processes, enhance user experience, and ensure compliance with industry standards.",
    image: fitech,
    tags: ["Fintech", "Security", "API"],
    link: "/case-studies/fintech-payment",
  },
  {
    title: "Shopping Portal",
    description: "Custom eCommerce portals designed to boost online sales, streamline inventory management, and enhance user experience. Built for scalability and ease of use, these platforms offer seamless browsing, secure payments, and efficient order processing to grow your digital storefront effectively.",
    image: shoping,
    tags: ["E-commerce", "Web Development", "Mobile App"],
    link: "/case-studies/ecommerce-platform",
  },
  {
    title: "Recharge Portal",
    description: "Multi-operator recharge portals featuring secure payment gateway integration for mobile, DTH, and utility services. Designed for reliability and ease of use, these portals offer fast transactions, real-time updates, and seamless user experiences across multiple service providers.",
    image:recharge,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
  {
    title: "Travel Portal",
    description: "Feature-rich travel portals enabling effortless booking of flights, hotels, buses, and holiday packages. Designed for intuitive navigation and real-time availability, these portals deliver seamless user experiences, secure payments, and comprehensive options to simplify travel planning and bookings.",
    image:travel,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
  {
    title: "Gaming Portal",
    description: "Engaging gaming portals featuring real-time multiplayer support and intuitive user interfaces. Designed for smooth gameplay, fast loading, and interactive experiences, these platforms foster community engagement and deliver immersive entertainment across devices.",
    image: gaming,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
  {
    title: "Grocery/Mart Portal",
    description: "Smart grocery portals designed for easy online ordering, efficient delivery management, and real-time inventory tracking. These platforms enhance customer convenience, streamline operations, and ensure timely updates for a seamless shopping experience.",
    image: grocery,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
  {
    title: "e-KYC Portal",
    description: "Secure e-KYC portals enabling seamless digital customer onboarding and reliable identity verification. Built with advanced encryption and compliance standards, these systems ensure fast, accurate, and fraud-resistant verification processes for trusted user access.",
    image: ekyc,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
  {
    title: "Web Hosting ",
    description: "Reliable web hosting services offering high uptime, fast loading speeds, and round-the-clock support. Designed to ensure your websites run smoothly, securely, and efficiently, providing a seamless online presence for your business.",
    image:webhosting,
    tags: ["Verification", "Security", "API"],
    link: "/case-studies/kyc-verification",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 px-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,72,0,0.1),transparent_70%)]"></div>
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
            <span className="">Our Product</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore some of our most successful projects and see how we've helped businesses grow
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-secondary/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${typeof project.image === "string" ? project.image : project.image.src})`,
                    }}
                  ></div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
