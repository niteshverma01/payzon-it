"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "10+ years of experience in digital transformation and business strategy.",
  },
  {
    name: "Priya Patel",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in full-stack development and cloud architecture with 8+ years experience.",
  },
  {
    name: "Rahul Kumar",
    role: "Head of Security",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Cybersecurity specialist with expertise in penetration testing and compliance.",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Digital marketing strategist with proven track record in growth marketing.",
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build long-term partnerships based on trust and results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We help businesses worldwide transform digitally and compete in the global marketplace.",
  },
]

const milestones = [
  { year: "2019", event: "Company Founded", description: "Started with a vision to democratize digital solutions" },
  {
    year: "2020",
    event: "First 50 Clients",
    description: "Reached our first major milestone during challenging times",
  },
  { year: "2021", event: "Team Expansion", description: "Grew our team to 25+ talented professionals" },
  { year: "2022", event: "International Reach", description: "Expanded services to clients across 10+ countries" },
  { year: "2023", event: "500+ Projects", description: "Successfully delivered over 500 digital solutions" },
  {
    year: "2024",
    event: "Industry Recognition",
    description: "Received multiple awards for innovation and excellence",
  },
]

export default function AboutPage() {
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
              About TechSolutions Pro
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transforming Ideas Into <span className="">Digital Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We are a team of passionate developers, designers, and strategists dedicated to helping businesses thrive
              in the digital age through innovative solutions and exceptional service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2019, TechSolutions Pro began with a simple mission: to make advanced digital solutions
                accessible to businesses of all sizes. What started as a small team of developers has grown into a
                comprehensive digital agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that every business deserves access to cutting-edge technology and expert guidance to succeed
                in today's digital landscape. Our journey has been marked by continuous learning, innovation, and an
                unwavering commitment to our clients' success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  500+ Projects Delivered
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  200+ Happy Clients
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  50+ Team Members
                </Badge>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">5+</div>
                  <div className="text-xl font-semibold">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary/30 px-12">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background/50 border-border/50 h-full text-center">
                    <CardContent className="p-6">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="">Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Key milestones in our growth and evolution
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <div className="text-xl font-semibold mb-2">{milestone.event}</div>
                  <div className="text-muted-foreground">{milestone.description}</div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="">Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The talented individuals behind our success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 border-border/50 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Work <span className="">With Us?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Let's discuss how we can help transform your business with our digital solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
