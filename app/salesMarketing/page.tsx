"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Rocket, Settings, Cog, Book, PaintRoller, ChartPie, Search, Users, Smartphone, Lightbulb, CreditCard, Handshake, Bell, Focus, CircleCheck, Wallet, Shield, LayoutDashboard, Workflow } from "lucide-react"


import image1 from "../../public/01.png"
import image2 from "../../public/02.png"
import image3 from "../../public/03.png"
import image4 from "../../public/04.png"
import image5 from "../../public/05.png"
const services = [
    {
        title: "Improved Customer Targeting",
        description: "By understanding the different stages of the funnel, businesses can tailor their messaging and content to address the specific needs of prospects at each stage.",
      

    },
    {
        title: "Higher Conversion Rates",
        description: "A well-optimized funnel guides leads through each step of the decision-making process, making it easier to convert them into paying customers.",
    

    },
    {
        title: "Better Resource Allocation",
        description: "With a clear funnel strategy, businesses can allocate resources more effectively, focusing on the tactics that work best at each stage of the funnel.",
      
    },
    {
        title: "Increased Customer Retention",
        description: "By nurturing leads after they’ve made a purchase, businesses can turn one-time customers into repeat buyers, enhancing customer lifetime value..",
    
    },
   

]

const features = [
    {
        icon: Rocket,
        title: "Lead Generation",
        description: "Use various channels to attract leads into the top of the funnel, including SEO, content marketing, paid ads, social media, and partnerships. This helps increase visibility and drive traffic to your site, initiating interest from potential prospects.",
    },
    {
        icon: Settings,
        title: "Lead Nurturing",
        description: "Utilize email marketing automation, retargeting ads, and lead scoring to nurture leads through the middle of the funnel. Providing relevant, timely, and personalized content helps keep prospects engaged and guides them closer to conversion.",
    },
    {
        icon: PaintRoller,
        title: "Personalization",
        description: "Personalization is crucial to moving leads toward a purchase decision. Tailor content and offers based on the lead's behaviors, preferences, and stage in the funnel. This ensures that the communication feels relevant and builds trust with the prospect.",
    },
    {
        icon: Cog,
        title: "Conversion Optimization",
        description: "Ensure that your website or landing page is optimized for conversions, with clear CTAs, easy navigation, and an efficient checkout process. Removing obstacles from the conversion process increases the likelihood of turning leads into paying customers.",
    },
    {
        icon: ChartPie,
        title: "Analytics & Testing",
        description: "Regularly monitor funnel metrics such as conversion rates, bounce rates, and lead-to-customer ratios. A/B testing content, offers, and CTAs helps optimize the funnel’s performance and identify what resonates best with prospects, improving overall results.",
    },

]

const landingwebsites = [
    {
        image: image1,
        title: "Telecommunications",
        description: "Mobile phone providers or broadband companies can offer an easy way for customers to recharge their prepaid accounts or add additional services (data, voice plans, etc.).",



    },
    {
        image: image2,
        title: "Utility Companies",
        description: "Providers of electricity, water, gas, or other utilities can use the portal to allow customers to pay bills or recharge prepaid meters, providing a seamless payment experience.",



    },
    {
        image: image3,
        title: "Entertainment & Streaming Services",
        description: "Subscription-based platforms (such as music, video, or gaming services) can enable users to quickly top-up their accounts or manage subscription renewals through the portal.",



    },
    {
        image: image4,
        title: "Gift Cards and Vouchers",
        description: "Businesses offering digital gift cards or promotional vouchers can implement the portal to allow customers to recharge their prepaid balances.    ",



    },
    {
        image: image5,
        title: "E-Commerce and Retail",
        description: "Online retailers and e-commerce platforms can integrate a recharge portal to allow users to top-up their accounts for purchases or to add balance to wallets.",



    },
]
const Stages = [
    {
        id: 1,
        title: "Awareness Stage (TOFU)",
        Objective: " The goal at this stage is to create awareness and attract potential leads to your business. Visitors may not yet know about your product or service.",
        Strategy: "To capture attention, businesses use tactics like blog posts, social media, SEO, paid advertising, video content, and influencer marketing.",
        Content: "Informative blog articles, social media posts, and awareness-building campaigns.",



    },
    {
        id: 2,
        title: " Interest Stage (MOFU)",
        Objective: " Once leads are aware of your brand, nurture their interest and start engaging them more directly as they explore different options.",
        Strategy: "Build trust by offering value. Tactics include email marketing, webinars, lead magnets (eBooks, guides), case studies, and comparison charts.",
        Content: "Product pages, demo videos, newsletters that address pain points and educate prospects.",


    },
    {
        id: 3,
        title: "Consideration Stage (BOFU)",
        Objective: "The lead is considering making a purchase decision. They are comparing solutions, evaluating prices, and seeking out reviews and testimonials.",
        Strategy: "Provide targeted offers, discounts, free trials, consultations, and showcase compelling content like product demos, customer reviews, and comparisons.",
        Content: "Case studies, client testimonials, product features, and pricing guides to make it easier for leads to make a final purchase decision.",

    },
    {
        id: 4,
        title: "Action Stage (Conversion)",
        Objective: "The goal is to convert the lead into a paying customer or prompt them to take the desired action, such as filling out a form, making a purchase, or subscribing.",
        Strategy: "Use time-sensitive promotions, clear CTAs (call-to-action), simplify the purchasing process, and offer excellent customer support.",
        Content: '"Buy Now" offers, retargeting ads, and promotional emails to push for conversion.',

    },
    {
        id: 5,
        title: " Post-Purchase Stage (Retention and Loyalty)",
        Objective: "The goal here is to retain the customer, encourage repeat purchases, and turn them into loyal advocates for your brand.",
        Strategy: "Provide excellent customer service, ask for feedback, offer loyalty programs, and maintain engagement through email newsletters or exclusive offers.",
        Content: " Post-purchase emails, product tutorials, surveys, and referral programs to keep customers engaged and loyal to your brand.",

    },


]
const Actions = [
    {
        id: 1,
        title: "Awareness",
        Objective: ' A user searches for "how to reduce stress" and comes across your blog post on stress-relieving techniques (TOFU).',




    },
    {
        id: 2,
        title: " Interest",
        Objective: " The user signs up for your email newsletter to get more tips and information (MOFU).",


    },
    {
        id: 3,
        title: "Consideration",
        Objective: "They receive a follow-up email about your stress management program and download a free eBook that explains the benefits (BOFU).",
    

    },
    {
        id: 4,
        title: "Action",
        Objective: "The user purchases your full stress management course at a discounted price (Conversion).",
  

    },
    {
        id: 5,
        title: " Post-Purchas",
        Objective: "After the purchase, they are invited to join a loyalty program for further discounts on future courses and are sent personalized content to continue their stress management journey (Retention).",
       

    },


]

export default function SalesMarketing() {



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
                            Recharge Portal  Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Marketing & Sales Funnel Description
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            A Marketing & Sales Funnel is a strategic model used to guide potential customers through a series of stages, from initial awareness to the final purchase and beyond. This funnel represents the journey that a lead takes as they move through different phases of engagement with a brand or business. The goal of the funnel is to convert prospects into loyal customers by nurturing them at each stage with the right messaging, offers, and touchpoints.




                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="relative py-24 px-6 md:px-12 bg-secondary/30 from-background  overflow-hidden">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Marketing & Sales Funnel Stages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-muted-foreground  mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Detailed breakdown of each stage in the funnel with strategies and content.
                    </motion.p>
                </div>
                <section className="py-20 px-12">
                    <div className="container">


                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                            {Stages.map((Stage, index) => {

                                return (
                                    <motion.div

                                    >
                                        <Card className="bg-background/50 border-border/50 h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                            <div
                                                className={` inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            ></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="text-xl">{Stage.id}</span>
                                                    <CardTitle className="text-xl">{Stage.title}</CardTitle>
                                                </div>
                                                <CardDescription className="text-base"><span className="text-primary">Objective : </span>{Stage.Objective}</CardDescription>
                                                <CardDescription className="text-base"><span className="text-primary">Strategy : </span>{Stage.Strategy}</CardDescription>
                                                <CardDescription className="text-base"><span className="text-primary">Content : </span>{Stage.Content}</CardDescription>

                                            </CardHeader>

                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <div className="bg-background/50 p-8 border rounded-xl ">
                    <motion.h1 className="text-xl md:text-xl font-bold mb-6   ">How the Funnel Works -</motion.h1>

                    <motion.p className="text-muted-foreground  mx-auto text-sm md:text-sm leading-relaxed">The marketing and sales funnel operates as a gradual progression. The process starts broad at the top (awareness) and narrows as prospects are moved
                        through the stages based on their level of interest and engagement. Not all leads will make it to the bottom of the funnel (conversion), but the goal is to
                        continuously optimize each stage to maximize the chances of turning leads into customers.</motion.p>
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
                            Optimizing Your Sales Funnel
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
                        >
                            KEY STRATEGIES FOR OPTIMIZING THE FUNNEL
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
                            Benefits of a Marketing & Sales Funnel

                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            Maximize your business efficiency with these key advantages.


                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            
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
                                            className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        ></div>
                                        <CardHeader className="relative z-10">
                                            <div className="flex items-center space-x-3 mb-4">
                                                
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


            <section className="relative py-24 px-6 md:px-12   overflow-hidden">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Marketing & Sales Funnel in Action
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-muted-foreground  mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Follow the journey of a user through the stages of your funnel.
                    </motion.p>
                </div>
                <section className="py-20 px-12  ">
                    <div className="container">


                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                            {Actions.map((Action, index) => {

                                return (
                                    <motion.div

                                    >
                                        <Card className="bg-background/50 border-border/50 h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                            <div
                                                className={` inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                            ></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="text-xl">{Action.id}</span>
                                                    <CardTitle className="text-xl">{Action.title}</CardTitle>
                                                </div>
                                                <CardDescription className="text-base">{Action.Objective}</CardDescription>
                                              

                                            </CardHeader>

                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>
              
            </section>

        </div>
    )
}
