"use client"

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

// Clean structured service data
const services = [
  {
    category: "Web Development",
    icon: Code,
    gradient: "from-blue-500 to-purple-500",
    description: "Custom-built websites, portals, and APIs with the latest technologies.",
    items: [
      "Web Portals",
      "Landing Websites",
      "Recharge Portals",
      "Marketing / Sales Funnels",
      "Blockchain Development",
      "API Development"
    ]
  },
  {
    category: "Product Platforms",
    icon: Package,
    gradient: "from-green-400 to-emerald-600",
    description: "End-to-end product platforms for fintech, travel, gaming, and more.",
    items: [
      "Fintech Portals",
      "Shopping Portals",
      "Recharge Portals",
      "Travel Portals",
      "Gaming Portals",
      "Grocery / Mart Portals",
      "e‑KYC Portals",
      "Web Hosting"
    ]
  },
  {
    category: "Security & Auditing",
    icon: Shield,
    gradient: "from-red-400 to-pink-500",
    description: "Ensure your digital assets are secure with advanced auditing and protection.",
    items: [
      "2‑Factor Authentication (2FA)",
      "Website Security",
      "Database Audits",
      "Network Audits",
      "Code Audits",
      "DDoS Protection"
    ]
  },
  {
    category: "Verification Services",
    icon: CheckCircle,
    gradient: "from-indigo-500 to-blue-600",
    description: "Fast and reliable user verification solutions.",
    items: [
      "Aadhaar Verification",
      "PAN Verification",
      "Bank Account Verification",
      "GST Verification",
      "Live Face Verification"
    ]
  },
  {
    category: "Sales & Marketing",
    icon: TrendingUp,
    gradient: "from-yellow-400 to-orange-500",
    description: "Boost your visibility and sales with effective digital marketing strategies.",
    items: [
      "Paid Advertising Campaigns",
      "SEO / SME Optimization",
      "Google PPC",
      "Bulk Email / SMS Campaigns",
      "Meta‑Verified WhatsApp"
    ]
  }
]

export function AllServices() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden">
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
            Our All Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We offer a wide range of services to help your business thrive in the digital landscape.
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
                className="group relative overflow-hidden cursor-pointer p-6 rounded-2xl border border-border/10 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
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

                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {category.description}
                  </p>

                  <ul className="space-y-2 text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </EnhancedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
