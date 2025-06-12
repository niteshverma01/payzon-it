"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code,
  Package,
  Shield,
  CheckCircle,
  TrendingUp,
  Webhook,

  Sparkles,
} from "lucide-react"
import { EnhancedCard } from "@/components/enhanced-card"

const services = [
  {
    category: "Web Portal",
    icon: Code,
    href: "/web-development",
    description: "Streamline your business with Pyazon India’s custom web portals—designed for seamless user experience, efficient operations, and robust backend solutions. Empower your team, simplify workflows, and drive growth with our reliable and scalable digital platform services",
    gradient: "from-orange-500/20 to-red-500/20",

  },
  {
    category: "Landing Website",
    icon: Package,
    href: "/products",
    description: "High-converting landing websites designed to capture attention, increase user engagement, and generate quality leads. Built for speed, clarity, and impact, these pages align with your marketing goals to maximize conversions and support effective digital campaigns across all devices.",
    gradient: "from-red-500/20 to-pink-500/20",

  },
  {
    category: "Recharge Portal",
    icon: Shield,
    href: "/security",
    description: "Recharge portals built for secure, real-time transactions across mobile, DTH, and utility payments. Designed to be scalable and user-friendly, they ensure seamless payment experiences, efficient processing, and robust backend support to handle high volumes with complete reliability",
    gradient: "from-pink-500/20 to-purple-500/20",

  },
  {
    category: "Marketing/Sales Funnel",
    icon: CheckCircle,
    href: "/verification",
    description: "Smart marketing and sales funnels designed to automate lead generation, nurture prospects, and boost conversions. With optimized touchpoints and data-driven strategies, these funnels streamline your customer journey and enhance overall marketing efficiency for better business growth.",
    gradient: "from-purple-500/20 to-indigo-500/20",

  },
  {
    category: "Block-Chain Development",
    icon: TrendingUp,
    href: "/marketing",
    description: "Cutting-edge blockchain development services delivering secure, transparent, and decentralized digital solutions. From smart contracts to custom blockchain applications, ensure data integrity, trust, and efficiency across industries with innovative technology built for the future of digital transactions.",
    gradient: "from-indigo-500/20 to-blue-500/20",

  }, {
    category: "API Developmentt",
    icon: Webhook,
    href: "/marketing",
    description: "Reliable API development and seamless integration to boost system connectivity, streamline data exchange, and improve overall performance. Customized APIs ensure smooth communication between applications, enabling scalable, efficient, and secure digital ecosystems tailored to your business needs.",
    gradient: "from-indigo-500/20 to-blue-500/20",

  },
]

export function ServicesShowcase() {
  return (
    <section id="services" className="py-24 px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,72,0,0.1),transparent_70%)]"></div>

      <div className="container relative z-10">
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
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
           Web Development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We offer a wide range of services to help your business thrive in the digital landscape
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, index) => {
            const IconComponent = category.icon
            return (
              <EnhancedCard
                key={category.category}
                variant="glass"
                delay={index * 0.1}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.category}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {category.description}
                  </p>

                </div>
              </EnhancedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
