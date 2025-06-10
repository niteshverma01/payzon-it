"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, CreditCard, FileText, Building, User, ArrowRight } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"

const services = [
  {
    title: "Aadhar Verification",
    description: "Real-time Aadhar card verification with UIDAI integration for instant identity validation.",
    icon: User,
    features: ["UIDAI Integration", "Real-time Verification", "OTP Validation", "Demographic Data"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "PAN Verification",
    description: "Instant PAN card verification with Income Tax Department database integration.",
    icon: FileText,
    features: ["ITD Integration", "Name Matching", "Status Check", "Instant Response"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "GST Verification",
    description: "Verify GST registration details and business information through official GST portal.",
    icon: Building,
    features: ["GST Portal Integration", "Business Details", "Registration Status", "Compliance Check"],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Bank Account Verification",
    description: "Verify bank account details and validate account holder information securely.",
    icon: CreditCard,
    features: ["Account Validation", "IFSC Verification", "Name Matching", "Penny Drop"],
    gradient: "from-cyan-500/20 to-sky-500/20",
  },
  {
    title: "Live Face Detection",
    description: "Advanced biometric face detection and liveness verification for secure authentication.",
    icon: CheckCircle,
    features: ["Liveness Detection", "Face Matching", "Anti-spoofing", "Real-time Processing"],
    gradient: "from-sky-500/20 to-blue-500/20",
  },
]

const verificationStats = [
  { label: "Verifications Processed", value: "10M+" },
  { label: "Accuracy Rate", value: "99.8%" },
  { label: "API Response Time", value: "<2 Seconds" },
  { label: "Uptime", value: "99.9%" },
]

export default function VerificationPage() {
  return (
    <div>
      <ServiceHero
        title="Verification Services"
        description="Streamline your KYC process with our comprehensive verification APIs. Instant, accurate, and secure identity verification solutions for businesses across India."
        icon={CheckCircle}
        accentColor="bg-green-600"
        gradientFrom="rgba(22,163,74,0.2)"
        gradientTo="rgba(21,128,61,0.1)"
      />

      {/* Stats Section */}
      <section className="py-16  bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {verificationStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-background/50 border-border/50">
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

      {/* Services Section */}
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
              Our <span className="">Verification APIs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Fast, reliable, and secure verification services for businesses of all sizes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  <Card className="h-full group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="rounded-lg bg-green-100 dark:bg-green-900/20 p-2 group-hover:bg-green-900/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs bg-secondary/80">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white group" asChild>
                          <Link href="/contact">
                            <span>Get API Access</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 h-full">
                <CardHeader>
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>
                    Comprehensive API documentation with code examples and integration guides.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/docs">
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 h-full">
                <CardHeader>
                  <CardTitle>Bulk Verification</CardTitle>
                  <CardDescription>
                    Need to verify large volumes? Contact us for special pricing and dedicated support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="border-green-600/20 hover:bg-green-600/5 text-green-600">
                    <Link href="/contact">
                      Enterprise Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
