"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Mail, Target, ArrowRight, BarChart, LineChart, PieChart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"

const services = [
  {
    title: "Paid Ad Campaigns",
    description: "Strategic paid advertising campaigns across Google, Facebook, and other platforms for maximum ROI.",
    icon: Target,
    features: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Tracking"],
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    title: "SEO/SME Services",
    description: "Comprehensive search engine optimization to improve your website's visibility and organic traffic.",
    icon: Search,
    features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"],
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
  {
    title: "Google PPC",
    description: "Expert Google Ads management to drive qualified traffic and maximize your advertising budget.",
    icon: LineChart,
    features: ["Keyword Bidding", "Ad Optimization", "Landing Pages", "Conversion Tracking"],
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Bulk Email and SMS",
    description: "Reach your customers directly with targeted email and SMS marketing campaigns.",
    icon: Mail,
    features: ["Email Templates", "SMS Gateway", "Automation", "Analytics"],
    gradient: "from-blue-500/20 to-sky-500/20",
  },
  {
    title: "Meta Verified WhatsApp",
    description: "Official WhatsApp Business API integration for customer communication and marketing.",
    icon: BarChart,
    features: ["Business Verification", "Automated Messages", "Customer Support", "Broadcast Lists"],
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
]

const marketingStats = [
  { label: "Campaigns Managed", value: "500+" },
  { label: "Average ROI Increase", value: "250%" },
  { label: "Leads Generated", value: "50K+" },
  { label: "Client Retention", value: "95%" },
]

export default function MarketingPage() {
  return (
    <div>
      <ServiceHero
        title="Sales & Marketing Services"
        description="Accelerate your business growth with our data-driven marketing strategies. From SEO to paid advertising, we help you reach your target audience effectively across India."
        icon={PieChart}
        accentColor="bg-purple-600"
        gradientFrom="rgba(147,51,234,0.2)"
        gradientTo="rgba(126,34,206,0.1)"
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketingStats.map((stat, index) => (
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
              Our <span className="">Marketing Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Data-driven marketing strategies to boost your online presence and drive conversions
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
                        <div className="rounded-lg bg-purple-100 dark:bg-purple-900/20 p-2 group-hover:bg-purple-900/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 h-full">
                <CardHeader>
                  <CardTitle>Free Marketing Audit</CardTitle>
                  <CardDescription>
                    Get a comprehensive analysis of your current marketing efforts and discover growth opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/contact">
                      Get Free Audit
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
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 h-full">
                <CardHeader>
                  <CardTitle>Custom Marketing Strategy</CardTitle>
                  <CardDescription>
                    Need a tailored approach? We create custom marketing strategies based on your specific goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600/20 hover:bg-purple-600/5 text-purple-600"
                  >
                    <Link href="/contact">
                      Discuss Strategy
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
