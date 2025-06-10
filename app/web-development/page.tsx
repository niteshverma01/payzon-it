"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Smartphone, Database, CreditCard, Package, ArrowRight, Code, Zap, Shield } from "lucide-react"

const services = [
  {
    title: "Web Portal Development",
    description: "Custom web portals with user management, dashboards, and advanced functionality.",
    icon: Globe,
    features: ["User Authentication", "Admin Dashboard", "API Integration", "Responsive Design"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Landing Websites",
    description: "High-converting landing pages optimized for performance and user experience.",
    icon: Globe,
    features: ["SEO Optimized", "Fast Loading", "Mobile Responsive", "Analytics Integration"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Recharge Portal",
    description: "Complete recharge solutions with multiple payment gateways and operator APIs.",
    icon: CreditCard,
    features: ["Multi-operator Support", "Payment Gateway", "Commission Management", "Real-time API"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Grocery Portal",
    description: "Full-featured grocery e-commerce platform with inventory and delivery management.",
    icon: Package,
    features: ["Product Catalog", "Inventory Management", "Delivery Tracking", "Payment Integration"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Fintech Development",
    description: "Secure financial technology solutions with compliance and advanced security.",
    icon: CreditCard,
    features: ["Payment Processing", "KYC Integration", "Compliance", "Security Audit"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Blockchain Development",
    description: "Decentralized applications and smart contracts on various blockchain platforms.",
    icon: Database,
    features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
    gradient: "from-teal-500/20 to-blue-500/20",
  },
]

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code following industry best practices",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed and performance across all devices",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security-first approach and robust architecture",
  },
]

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Years Experience", value: "10+" },
  { label: "Team Members", value: "50+" },
]

export default function WebDevelopmentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Web Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Building <span className="">Digital Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              From simple websites to complex web applications, we deliver cutting-edge solutions that drive business
              growth and enhance user experience with modern technologies and best practices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-12 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 border-border/50 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-12">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose <span className="">Our Development</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We combine technical expertise with creative design to deliver exceptional web solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-secondary/50 border-border/50 h-full text-center hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-12 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="">Development Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive web development solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background/50 border-border/50 h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs bg-secondary/80">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white group" asChild>
                          <Link href="/contact">
                            <span>Get Quote</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,72,0,0.1),transparent_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a <span className="">Custom Solution?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                We specialize in creating tailored web solutions that meet your specific business requirements. Let's
                discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary/20 hover:bg-primary/5"
                >
                  <Link href="/products">View Our Products</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
