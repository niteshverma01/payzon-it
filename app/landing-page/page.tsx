"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Book, User, Search, Users, Smartphone, Lightbulb, CreditCard, Handshake, Bell, Focus, CircleCheck, Wallet, Shield, LayoutDashboard, Workflow } from "lucide-react"


import image1 from "../../public/01.png"
import image2 from "../../public/02.png"
import image3 from "../../public/03.png"
import image4 from "../../public/04.png"
import image5 from "../../public/05.png"
const services = [
    {
        title: "Lead Capture Forms",
        description: "Many landing pages include forms to capture leads, such as email addresses or contact information. These forms are simple and easy to fill out, reducing friction for visitors and increasing the chances of conversion.",
        icon: Book,
        features: ["User Authentication", "Admin Dashboard", "API Integration", "Responsive Design"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Value Proposition",
        description: "The landing page clearly outlines the value proposition, explaining why the visitor should take action. This could include unique selling points (USPs), benefits, or a brief explanation of the offer or product.",
        icon: Lightbulb,
        features: ["SEO Optimized", "Fast Loading", "Mobile Responsive", "Analytics Integration"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Trust Elements",
        description: "To increase credibility and build trust, the landing page may feature elements such as testimonials, customer reviews, case studies, or trusted brand logos. Trust signals help visitors feel confident about taking action.",
        icon: Shield,
        features: ["Multi-operator Support", "Payment Gateway", "Commission Management", "Real-time API"],
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Social Proof and Testimonials",
        description: "Displaying testimonials, success stories, or user-generated content can reinforce the value of the offer. It shows that others have had positive experiences, encouraging potential customers to engage.",
        icon: Users,
        features: ["Product Catalog", "Inventory Management", "Delivery Tracking", "Payment Integration"],
        gradient: "from-orange-500/20 to-red-500/20",
    },
    {
        title: "SEO Optimization",
        description: "The landing website is optimized for search engines, ensuring that relevant keywords are incorporated in titles, headings, meta tags, and content. This helps the page rank higher in search results, driving organic traffic.",
        icon: Search,
        features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
        gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
        title: "A/B Testing Capabilities",
        description: "Many landing pages include A/B testing features that allow the page owner to experiment with different headlines, CTAs, or design layouts to determine which elements work best for conversion.",
        icon: Activity,
        features: ["Payment Processing", "KYC Integration", "Compliance", "Security Audit"],
        gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
        title: "Mobile Optimization",
        description: "The landing page is optimized for mobile users, providing a seamless experience on smartphones and tablets. This ensures that users can easily interact with the page and convert on smaller screens.",
        icon: Smartphone,
        features: ["Smart Contracts", "DApp Development", "Token Creation", "Web3 Integration"],
        gradient: "from-teal-500/20 to-blue-500/20",
    },

]

const features = [
    {
        icon: Focus,
        title: "Focused Goal",
        description: "All relevant tools, services, and information are housed in one place, reducing the need for users to access multiple platforms or interfaces.",
    },
    {
        icon: CircleCheck,
        title: "Increased Conversions",
        description: "With a clear CTA and persuasive content, landing pages are highly effective at turning visitors into customers, subscribers, or leads.",
    },
    {
        icon: User,
        title: "Better User Experience",
        description: "The design of the landing page is streamlined to minimize distractions, making it easy for visitors to take the desired action without being overwhelmed by too much information.",
    },
    {
        icon: Wallet,
        title: "Cost-Effective Marketing",
        description: "Landing pages are an essential component of digital marketing campaigns, often used for paid advertising (e.g., Google Ads, Facebook Ads) to ensure that visitors are directed to a page tailored to their interests.",
    },
    {
        icon: LayoutDashboard,
        title: "Measurable Results",
        description: "Landing pages are an essential component of digital marketing campaigns, often used for paid advertising (e.g., Google Ads, Facebook Ads) to ensure that visitors are directed to a page tailored to their interests.",
    },
]

const landingwebsites = [
    {
        image: image1,
        title: "Product Launches",
        description: "Announce new products or services with a dedicated landing page designed to capture early interest or pre-orders.",



    },
    {
        image: image2,
        title: "Special Offers & Promotions",
        description: "Promote limited-time discounts, sales, or exclusive deals to drive immediate action",



    },
    {
        image: image3,
        title: "Event Registration",
        description: "Create landing pages to encourage users to register for events, webinars, or conferences.",



    },
    {
        image: image4,
        title: "Lead Generation Campaigns",
        description: "Capture email addresses or other contact information through targeted offers, like free trials, eBooks, or newsletters.",



    },
    {
        image: image5,
        title: "Advertising Campaigns",
        description: "Direct visitors from PPC ads, social media posts, or affiliate marketing to a specific, high-converting page.",



    },
]



export default function Landingpage() {



    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }
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
                            Landing Website Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Landing Website
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Here's a description of a landing website that can be used for a proposal, project brief, or marketing purposes:




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
                                    variants={itemVariants}
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

            {/* landing websites */}


            <section className="py-24 px-12 ">
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
                        {landingwebsites.map((landingwebsite, index) => {
                            return (
                                <motion.div
                                    key={landingwebsite.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className=" border-border/0 h-full border rounded-lg hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                        <div
                                            className={` inset-0   opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        ></div>
                                        <CardHeader className="relative z-10">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className="rounded-lg  p-3  transition-colors w-24 h-24 relative">
                                                    <Image
                                                        src={landingwebsite.image} // This should be a valid URL or imported image
                                                        alt={landingwebsite.title}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <CardTitle className="text-xl">{landingwebsite.title}</CardTitle>
                                            </div>
                                            <CardDescription className="text-base">{landingwebsite.description}</CardDescription>
                                        </CardHeader>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </section>

        </div>
    )
}
