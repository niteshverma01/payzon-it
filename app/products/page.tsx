"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { CreditCard, Package, Globe, Smartphone, CheckCircle, Database, ArrowRight, Star } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"

const products = [
  {
    title: "Fintech Portal",
    description:
      "Complete financial technology platform with payment processing, digital wallets, and banking integrations.",
    icon: CreditCard,
    features: [
      "Payment Gateway",
      "Digital Wallet",
      "KYC Integration",
      "Multi-currency Support",
      "API Documentation",
      "Admin Dashboard",
    ],
    rating: 4.9,
    clients: "50+ Banks",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Shopping Portal",
    description:
      "Full-featured e-commerce platform with inventory management, order processing, and customer analytics.",
    icon: Package,
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Integration",
      "Order Management",
      "Customer Analytics",
      "Mobile App",
    ],
    rating: 4.8,
    clients: "200+ Stores",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Grocery Portal",
    description: "Specialized grocery e-commerce solution with delivery management and inventory tracking.",
    icon: Package,
    features: [
      "Fresh Product Management",
      "Delivery Scheduling",
      "Inventory Tracking",
      "Customer App",
      "Vendor Portal",
      "Analytics",
    ],
    rating: 4.7,
    clients: "100+ Grocers",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Travel Portal",
    description: "Comprehensive travel booking platform with flight, hotel, and package booking capabilities.",
    icon: Globe,
    features: [
      "Flight Booking",
      "Hotel Reservation",
      "Package Tours",
      "Payment Gateway",
      "Customer Portal",
      "Agent Dashboard",
    ],
    rating: 4.9,
    clients: "75+ Agencies",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Gaming Portal",
    description: "Interactive gaming platform with user management, tournaments, and reward systems.",
    icon: Smartphone,
    features: [
      "Game Integration",
      "Tournament System",
      "User Profiles",
      "Leaderboards",
      "Reward System",
      "Social Features",
    ],
    rating: 4.6,
    clients: "30+ Gaming",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "eKYC Portal",
    description: "Digital identity verification platform with document verification and biometric authentication.",
    icon: CheckCircle,
    features: [
      "Document Verification",
      "Biometric Auth",
      "Live Face Detection",
      "API Integration",
      "Compliance Reports",
      "Admin Panel",
    ],
    rating: 4.8,
    clients: "80+ Enterprises",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Web Hosting",
    description: "Reliable web hosting solutions with high uptime, security, and scalable infrastructure.",
    icon: Database,
    features: [
      "99.9% Uptime",
      "SSL Certificates",
      "Daily Backups",
      "24/7 Support",
      "Scalable Resources",
      "Control Panel",
    ],
    rating: 4.9,
    clients: "500+ Websites",
    gradient: "from-teal-500/20 to-blue-500/20",
  },
]

const stats = [
  { label: "Products Deployed", value: "1000+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Support Response", value: "<1 Hour" },
]

export default function ProductsPage() {
  return (
    <div>
      <ServiceHero
        title="Our Products"
        description="Ready-to-deploy digital solutions that have been tested and proven across various industries in India. Get your business online faster with our pre-built platforms."
        icon={Package}
        accentColor="bg-blue-600"
        gradientFrom="rgba(59,130,246,0.2)"
        gradientTo="rgba(37,99,235,0.1)"
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-12">
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

      {/* Products Section */}
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
              Ready-to-Deploy <span className="">Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Accelerate your digital transformation with our proven products
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{product.title}</CardTitle>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-secondary/80">
                          Popular
                        </Badge>
                      </div>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        

                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 6).map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          
                           
                        </div>

                
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>
                  Need something specific? We can customize any of our products to match your exact requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Customization
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardHeader>
                <CardTitle>Enterprise Solutions</CardTitle>
                <CardDescription>
                  Looking for enterprise-grade solutions? Contact us for volume pricing and dedicated support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Enterprise Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
