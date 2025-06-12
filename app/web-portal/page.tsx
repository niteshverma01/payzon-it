"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Scaling, User, Smartphone, Database, CreditCard, Handshake, Bell, ArrowRight, Code, Zap, Shield, LayoutDashboard, Workflow } from "lucide-react"

const services = [
  {
    title: "User Accounts & Authentication",
    description: "Secure login, role-based access, and personalized accounts to ensure users can access only relevant content and features.",
    icon: Globe,
    features: ["User Authentication", "Admin Dashboard", "API Integration", "Responsive Design"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Dashboard & Analytics",
    description: "Real-time insights with key metrics, performance statistics, and activity summaries to keep track of important data.",
    icon: LayoutDashboard,
    features: ["SEO Optimized", "Fast Loading", "Mobile Responsive", "Analytics Integration"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Content Management",
    description: "Efficient content creation, editing, and organizing with a comprehensive CMS for keeping your portal content fresh and relevant.",
    icon: CreditCard,
    features: ["Multi-operator Support", "Payment Gateway", "Commission Management", "Real-time API"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Communication & Collaboration",
    description: "Facilitate effective communication with messaging, forums, document sharing, and collaborative tools for enhanced teamwork.",
    icon: Handshake,
    features: ["Product Catalog", "Inventory Management", "Delivery Tracking", "Payment Integration"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Integration with External Systems",
    description: "The portal can be integrated with other business systems or third-party applications, enabling the seamless exchange of data between the portal .",
    icon: Workflow,
    features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Security & Compliance",
    description: "Ensure data protection with SSL encryption, multi-factor authentication (MFA), and compliance with industry standards and regulations.",
    icon: Shield,
    features: ["Payment Processing", "KYC Integration", "Compliance", "Security Audit"],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Mobile Responsiveness",
    description: "Designed for all devices, ensuring a smooth experience on smartphones, tablets, and desktops, without compromising functionality.",
    icon: Smartphone,
    features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Customizable User Experience",
    description: "Personalize your experience by adjusting dashboard layouts, setting preferences, and choosing the content you want to interact with.",
    icon: Database,
    features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Notifications and Alerts",
    description: "The portal supports automated notifications, alerts, and reminders. Users can stay informed about system updates, important activities, and deadlines, ensuring they never miss critical information.",
    icon: Bell,
    features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Search Functionality",
    description: "A robust search engine within the portal allows users to quickly find information, documents, or services. Advanced filters and search options make it easy to narrow down results based on specific criteria.",
    icon: Database,
    features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
    gradient: "from-teal-500/20 to-blue-500/20",
  },
]

const features = [
  {
    icon: Code,
    title: "Centralized Access",
    description: "All relevant tools, services, and information are housed in one place, reducing the need for users to access multiple platforms or interfaces.",
  },
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Automation and integration streamline workflows, enabling users to complete tasks quickly and effectively.",
  },
  {
    icon: User,
    title: "Enhanced User Engagement",
    description: "Interactive features, such as personalized dashboards, notifications, and communication tools, drive active participation and improve user satisfaction.",
  },
  {
    icon: Database,
    title: "Data Security & Compliance",
    description: "With robust security protocols, the portal ensures that all user data and content are protected, complying with privacy regulations.",
  },
  {
    icon: Scaling,
    title: "Scalability & Flexibility",
    description: "The portal is designed to scale with the growing needs of the organization, offering room for additional features or user groups in the future.",
  },
]



export default function Webportal() {
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
              Web Portal Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Web Portal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Here's a description of a web portal that you can use as part of your proposal or project documentation:


            </motion.p>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-background to-background/80 overflow-hidden">
                     {/* Subtle background pattern */}
                     <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
     
                     <div className="container mx-auto relative z-10">
                         {/* Header Section */}
                         <div className="text-center mb-16">
                             <motion.h2
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, ease: 'easeOut' }}
                                 viewport={{ once: true }}
                                 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                             >
                                 Benefits of a Web Portal
                             </motion.h2>
                             <motion.p
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                                 viewport={{ once: true }}
                                 className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                             >
                                 Your personalized gateway to seamless services, applications, and data management—all in one intuitive platform.
                             </motion.p>
                         </div>
     
                         {/* Features Grid */}
                         <motion.div
                             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                             
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true }}
                         >
                             {features.map((feature, index) => {
                                 const IconComponent = feature.icon
                                 return (
                                     <motion.div
                                         key={feature.title}
                                         
                                         className="group"
                                     >
                                         <Card className="relative bg-secondary/30 border-border/30 h-full text-center transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                                             {/* Hover effect overlay */}
                                             <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
     
                                             <CardContent className="p-8 relative z-10">
                                                 <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                     <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                                 </div>
                                                 <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                                     {feature.title}
                                                 </h3>
                                                 <p className="text-muted-foreground text-base leading-relaxed">
                                                     {feature.description}
                                                 </p>
                                             </CardContent>
                                         </Card>
                                     </motion.div>
                                 )
                             })}
                         </motion.div>
     
                      
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
              Key Features of the Web Portal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A web portal is your personalized gateway to a world of services, applications, and data management. Seamlessly access and manage everything you need in one place.

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

                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


    </div>
  )
}
