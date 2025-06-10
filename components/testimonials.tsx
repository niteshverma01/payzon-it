"use client"

import { Card, CardContent } from "@/components/ui/card"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "2FA Authentication",
    content:
      "Two-Factor Authentication (2FA) adds an extra layer of security to user logins by requiring a second form of verification. This helps prevent unauthorized access, safeguards sensitive data, and enhances trust across your digital platforms.",

  },
  {
    name: "Website Security Audit",
    content:
      "Website security audits help identify vulnerabilities, fix bugs, and protect against potential threats. By securing your site, you improve performance, build user trust, and boost your Google ranking through enhanced safety and compliance with best practices.",

  },
  {
    name: "Database Security",
    content:
      "Robust database security solutions to protect sensitive data from leaks, breaches, and unauthorized access. Using encryption, access controls, and regular monitoring, these measures ensure data integrity, confidentiality, and compliance with security standards.",

  },
  {
    name: "Network Security",
    content:
      "Comprehensive network security solutions to protect your business from cyber threats. Implementing firewalls, continuous monitoring, and vulnerability assessments ensures safe data flow, prevents attacks, and maintains the integrity and availability of your network infrastructure.",

  },
  {
    name: "Code Audit",
    content:
      "Thorough code audits to detect errors, loopholes, and security vulnerabilities. This process ensures clean, optimized, and secure code, enhancing application performance and reducing risks before deployment.",

  },
  {
    name: "DDOS Protection",
    content:
      "Advanced DDoS protection to defend your servers from traffic overload and malicious attacks. Our mitigation solutions ensure uninterrupted service, safeguard your infrastructure, and maintain website availability even during large-scale cyberattacks.",

  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,72,0,0.05),transparent_70%)]"></div>
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
            <span className="">Securit And Auditing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from our satisfied clients
          </motion.p>
        </div>
        <div><h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary underline"></h1></div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-secondary/50 border-border/50 h-full relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">


                        <div className="font-semibold ">{testimonial.name}</div>


                      </div>
                      <blockquote className="text-sm text-muted-foreground mt-6 mb-6 relative z-10">"{testimonial.content}"</blockquote>

                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className=" static translate-y-0 mr-2" />
            <CarouselNext className=" static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
