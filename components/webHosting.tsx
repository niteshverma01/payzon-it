"use client"
import { motion } from "framer-motion"
import { Check, Star, Zap, Shield, Clock, Globe, Server, Users, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import * as React from "react"


interface Feature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
}

interface HostingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    popular: boolean;
    color: string;
}

interface Stat {
    number: string;
    label: string;
}

export function WebHosting() {
    const [isOpen, setIsOpen] = React.useState(false)



    const hostingTypes: HostingPlan[] = [

        {
            name: "VPS 6 vCPU",
            price: "Rs. 8000/- + tax / Monthly",
            period: "/month",
            description: "Dedicated resources for growing businesses",
            features: ["4GB RAM", "100GB SSD Storage", "750GB Bandwidth", "Bandwidth", "Includes Linux server license & setup support"],
            icon: Server,
            popular: true,
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "VPS 6 vCPU",
            price: "Rs. 10000/-     + tax / Monthly",
            period: "/month",
            description: "Full control with enterprise-grade performance",
            features: ["8GB RAM", "100GB SSD Storage", "750GB Bandwidth", "Bandwidth", "Includes Windows server license & technical support"],
            icon: Globe,
            popular: true,
            color: "from-orange-500 to-red-500"
        }
    ]




    return (
        <section className="min-h-screen bg-gradient-to-br from-[#210d04] via-[#210d04] to-[#210d04] relative overflow-hidden">





            <div className="container mx-auto px-4 py-24 relative z-10 ">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border-border/50 hover:border-primary/30"
                    >
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-white/90 font-medium">Web Hosting</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-primary"
                    >
                        VPS Hosting

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed"
                    >
                        VPS Server hosting offers a scalable and secure environment for businesses to store and manage their website data. With dedicated resources and fast performance, it’s the ideal solution for websites needing more control and speed. <br />Make your website hosting powerful and reliable. Ensure faster loading, high uptime, and enhanced data security with our VPS hosting plans.
                    </motion.p>

                </div>




                {/* Hosting Plans */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Choose Your Perfect Plan
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto just">
                        {hostingTypes.map((plan: HostingPlan, index: number) => {
                            const IconComponent = plan.icon
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, y: -10 }}

                                    className={`relative rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 bg-white/10
  ${plan.popular
                                            ? 'border-[#1e0a02] shadow-lg shadow-[#1e0a02]/25'
                                            : 'border-[#1e0a02]/20 hover:border-[#1e0a02] hover:shadow-[0_0_20px_4px_#1e0a02]'}
`}

                                >

                                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-white/70 mb-6">{plan.description}</p>

                                    <div className="flex items-baseline mb-6">
                                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                                        <span className="text-white/60 ml-2">{plan.period}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature: string, featureIndex: number) => (
                                            <li key={featureIndex} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                <span className="text-white/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button

                                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25'
                                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                                            }`}
                                    >
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Get In Touch
                                        </Link>
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>


            </div>
        </section>
    )
}