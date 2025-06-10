"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Lock, Database, Code, AlertTriangle, ArrowRight } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"

const services = [
  {
    title: "2FA Authentication",
    description: "Implement multi-factor authentication to secure user accounts and prevent unauthorized access.",
    icon: Lock,
    features: ["SMS OTP", "Email Verification", "Authenticator Apps", "Biometric Auth"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Website Security",
    description: "Comprehensive website security solutions including SSL, firewall, and malware protection.",
    icon: Shield,
    features: ["SSL Certificates", "Web Firewall", "Malware Scanning", "Security Headers"],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Database Security",
    description: "Secure your databases with encryption, access controls, and monitoring solutions.",
    icon: Database,
    features: ["Data Encryption", "Access Control", "Audit Logging", "Backup Security"],
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Network Security",
    description: "Protect your network infrastructure with firewalls, VPN, and intrusion detection.",
    icon: Shield,
    features: ["Firewall Setup", "VPN Configuration", "Intrusion Detection", "Network Monitoring"],
    gradient: "from-yellow-500/20 to-lime-500/20",
  },
  {
    title: "Code Audit",
    description: "Comprehensive code review to identify security vulnerabilities and performance issues.",
    icon: Code,
    features: ["Security Review", "Performance Analysis", "Best Practices", "Documentation"],
    gradient: "from-lime-500/20 to-green-500/20",
  },
  {
    title: "DDoS Protection",
    description: "Advanced DDoS protection to keep your services online during attacks.",
    icon: AlertTriangle,
    features: ["Traffic Analysis", "Attack Mitigation", "Real-time Monitoring", "Emergency Response"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

const securityStats = [
  { label: "Security Audits Completed", value: "500+" },
  { label: "Vulnerabilities Fixed", value: "2,000+" },
  { label: "Uptime Guaranteed", value: "99.9%" },
  { label: "Response Time", value: "<1 Hour" },
]

export default function SecurityPage() {
  return (
    <div>
      <ServiceHero
        title="Security & Auditing Services"
        description="Protect your digital assets with our comprehensive security solutions. From vulnerability assessments to ongoing monitoring, we keep your business secure."
        icon={Shield}
        accentColor="bg-red-600"
        gradientFrom="rgba(239,68,68,0.2)"
        gradientTo="rgba(185,28,28,0.1)"
      />

      {/* Stats Section */}
      <section className="py-16 px-12 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityStats.map((stat, index) => (
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
              Our <span className="">Security Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive security solutions to protect your business from evolving cyber threats
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
                        <div className="rounded-lg bg-red-100 dark:bg-red-900/20 p-2 group-hover:bg-red-900/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
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
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white group" asChild>
                          <Link href="/contact">
                            <span>Get Security Audit</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-900/10 via-red-800/5 to-red-900/10 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]"></div>
            <div className="relative z-10">
              <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-red-900 dark:text-red-100">Security Emergency?</h2>
              <p className="text-red-700 dark:text-red-300 mb-6 max-w-2xl mx-auto">
                If you're experiencing a security incident, contact our emergency response team immediately. We provide
                24/7 support for critical security issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Emergency Hotline: +91 9876543210
                </Button>
                <Button variant="outline" size="lg" asChild className="border-red-600/20 hover:bg-red-600/5">
                  <Link href="/contact">Schedule Security Assessment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
