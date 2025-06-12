"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Network, Lock, RefreshCcw, Settings, ThumbsUp, Link2, ChartPie, Search, Users, Smartphone, Lightbulb, CreditCard, Handshake, Bell, Focus, CircleCheck, Wallet, Shield, LayoutDashboard, Workflow } from "lucide-react"


import image1 from "../../public/01.png"
import image2 from "../../public/02.png"
import image3 from "../../public/03.png"
import image4 from "../../public/04.png"
import image5 from "../../public/05.png"
const services = [
    {
        title: "Security and Transparency",
        description: "Blockchain ensures that data is encrypted, transparent, and immutable, providing higher levels of security and trust.",


    },
    {
        title: "Decentralization",
        description: "No single party controls the system, reducing risks of censorship, fraud, or downtime",


    },
    {
        title: "Cost-Effectiveness",
        description: "By eliminating intermediaries and automating processes (such as payments or contract enforcement), blockchain can reduce operational costs.",

    },
    {
        title: "Faster Transactions",
        description: "Blockchain can speed up processes that typically require manual verification or third-party intermediaries, such as cross-border payments.",

    },


]
import { Layers, Code2, Book } from "lucide-react";

const features = [
    {
        title: "Blockchain Platforms",
        icon: Layers,
        description: "Popular blockchain platforms that developers use for building decentralized applications (dApps) and smart contracts include:",
        items: [
            { label: "Ethereum", text: "A platform for creating smart contracts and decentralized applications." },
            { label: "Hyperledger", text: "A blockchain framework used for building private and permissioned blockchains." },
            { label: "Solana", text: "A high-performance blockchain known for scalability and low transaction fees." },
            { label: "Polkadot", text: "A multi-chain platform designed to connect different blockchains and enable cross-chain interoperability." },
        ],
    },
    {
        title: "Programming Languages",
        icon: Code2,
        description: "Blockchain development relies on various programming languages, including:",

        items: [
            { label: "Solidity", text: "A language used to write smart contracts on Ethereum." },
            { label: "Rust", text: "Used for building decentralized applications, particularly on platforms like Solana." },
            { label: "Go", text: "A language commonly used for building blockchain networks like Hyperledger Fabric." },
            { label: "JavaScript", text: "Used for building dApps and interacting with blockchain networks via web browsers." },
        ],
    },
    {
        title: "Development Frameworks",
        icon: Book,
        description: "Blockchain development frameworks help developers create blockchain applications faster and more efficiently. Popular frameworks include:",

        items: [
            { label: "Truffle", text: "A popular development framework for building Ethereum-based applications." },
            { label: "Web3.js", text: "A JavaScript library that interacts with the Ethereum blockchain, allowing developers to build decentralized applications." },
            { label: "Ganache", text: "A personal blockchain used for testing Ethereum smart contracts." },
        ],
    },
];

const blockchains = [
    {
        icon: Network,
        title: "Decentralization",
        description: "Blockchain operates on a decentralized network of computers (nodes), where no single entity has control over the entire system. This ensures trust, transparency, and accountability by distributing control and verification across multiple participants.",
    },
    {
        icon: RefreshCcw,
        title: "Distributed Ledger",
        description: "The blockchain is essentially a distributed ledger where records, known as blocks, are linked together in a chain. Each block contains data about transactions or other types of information, and the blocks are cryptographically secured, making the ledger immutable.",
    },
    {
        icon: Lock,
        title: "Cryptography",
        description: "Cryptography plays a crucial role in blockchain development, ensuring that data stored in the blockchain is secure, encrypted, and only accessible by authorized parties. Each block is encrypted with a cryptographic hash, and users' transactions are protected by digital signatures.",
    },
    {
        icon: Settings,
        title: "Smart Contracts",
        description: "Blockchain development also includes the creation of smart contracts, which are self-executing contracts with predefined rules encoded directly onto the blockchain. Smart contracts automatically enforce agreements when certain conditions are met, eliminating the need for intermediaries and reducing the risk of human error or fraud.",
    },
    {
        icon: ThumbsUp,
        title: "Consensus Algorithms",
        description: "Consensus mechanisms ensure that all the nodes on the blockchain network agree on the validity of transactions. Popular consensus algorithms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS), each offering different methods to validate and add transactions to the blockchain.",
    },
    {
        icon: Wallet,
        title: "Tokenization",
        description: "Blockchain development can include the creation of digital assets or tokens, which can represent ownership or access to services. Tokens can be used for various purposes, including cryptocurrencies (like Bitcoin or Ethereum), security tokens, or utility tokens within decentralized applications (dApps).",
    },
    {
        icon: Link2,
        title: "Interoperability",
        description: "Blockchain development often involves ensuring that different blockchain systems can communicate with each other, enabling interoperability between separate blockchains. This is especially important in multi-chain ecosystems where assets and data need to flow seamlessly between platforms.",
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
        title: "Public Blockchain Development",
        Objective: " A public blockchain is open to everyone and allows anyone to participate in the network. It is fully decentralized and secure, with transparency being a core feature. Examples include Bitcoin and Ethereum. Developers build applications and tokens on top of public blockchains, which are accessible to all users.",




    },
    {
        id: 2,
        title: "Private Blockchain Development",
        Objective: " A private blockchain is a closed, permissioned network where only authorized users can join. It is typically used by businesses or organizations for internal applications, such as supply chain management or financial transactions. While private blockchains offer more control and speed, they sacrifice some of the decentralized qualities of public blockchains.",



    },
    {
        id: 3,
        title: "Consortium Blockchain Development",
        Objective: "A consortium blockchain is a hybrid model where multiple organizations control the blockchain network. It is more decentralized than private blockchains but still allows for governance by a select group. Consortium blockchains are often used in industries like finance, healthcare, and supply chains, where collaboration between entities is needed.",


    },
    {
        id: 4,
        title: " Sidechains and Layer-2 Solutions",
        Objective: "Sidechains are secondary blockchains that are attached to the main blockchain and allow for off-chain transactions. Layer-2 solutions are protocols built on top of existing blockchains to improve scalability, reduce transaction fees, and speed up transaction processing. Examples include the Lightning Network for Bitcoin or Optimistic Rollups for Ethereum.",


    },


]
const Actions = [
    {
        id: 1,
        title: " Cryptocurrencies",
        Objective: 'Blockchain serves as the foundation for digital currencies such as Bitcoin, Ethereum, and altcoins. It enables decentralized and secure peer-to-peer transactions without the need for intermediaries.',




    },
    {
        id: 2,
        title: " Supply Chain Management",
        Objective: " Blockchain can be used to track the movement of goods in supply chains, ensuring transparency, traceability, and reducing fraud or inefficiencies.",


    },
    {
        id: 3,
        title: "Healthcare",
        Objective: "Blockchain can secure patient data, ensure the integrity of medical records, and streamline the process of sharing medical information between different healthcare providers..",


    },
    {
        id: 4,
        title: "Finance and Payments",
        Objective: "Blockchain is revolutionizing the finance industry by enabling faster, more secure, and cost-effective financial transactions, as well as creating decentralized finance (DeFi) applications for lending, borrowing, and asset management.",


    },
    {
        id: 5,
        title: "Voting Systems",
        Objective: "Blockchain can be used to build secure and transparent voting systems, ensuring that election results are accurate, tamper-proof, and verifiable.",


    },
    {
        id: 6,
        title: ". Real Estate",
        Objective: "Blockchain can streamline property transactions by eliminating intermediaries, improving transparency, and reducing fraud in real estate deals.",


    },
    {
        id: 7,
        title: " Intellectual Property Protection",
        Objective: "Blockchain provides an immutable ledger for protecting intellectual property rights, ensuring that digital content, art, and inventions are properly credited and protected from unauthorized use.",


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
                            Block Chain Development  Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Block Chain Development                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Here’s a description of Blockchain Development that you can use for your proposal, project documentation, or business overview:





                        </motion.p>
                    </div>
                </div>
            </section>
            <section className="relative py-24 px-6 md:px-12   overflow-hidden">
                <div className="bg-background/100 mb-16 p-8 rounded-xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-3xl font-bold mb-6 bg-clip-text text-primary"
                    >
                        Blockchain Development Description
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
                    >Blockchain Development refers to the process of creating decentralized digital systems that enable secure, transparent, and immutable transactions through a distributed ledger technology (DLT). It is at the core of many innovative technologies like cryptocurrencies, smart contracts, decentralized applications (dApps), and more. Blockchain technology enables the recording of data in a way that ensures its integrity and security, making it resistant to fraud and tampering..
                    </motion.p>
                </div></section>



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
                            Key Aspects of Blockchain Development:
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
                        {blockchains.map((blockchain, index) => {
                            const IconComponent = blockchain.icon
                            return (
                                <motion.div
                                    key={blockchain.title}
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
                                                {blockchain.title}
                                            </h3>
                                            <p className="text-muted-foreground text-base leading-relaxed">
                                                {blockchain.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>


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
                        Types of Blockchain Development
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-muted-foreground  mx-auto text-lg md:text-xl leading-relaxed"
                    >
                        Explore the different blockchain models used in development, from public to private, and more.

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
                                                    <CardTitle className="text-xl text-primary">{Stage.title}</CardTitle>
                                                </div>
                                                <CardDescription className="text-base">{Stage.Objective}</CardDescription>


                                            </CardHeader>

                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

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
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    className="group"
                                >
                                    <Card className="relative bg-secondary/30 border-border/30 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                                        {/* Hover effect overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <CardContent className="p-8 relative z-10">
                                            <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground text-base leading-relaxed"> {feature.description}</p>
                                            {/* Bullet Points */}
                                            <ul className="space-y-2">
                                                {feature.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-muted-foreground text-sm leading-relaxed"
                                                    >
                                                        <span className="text-primary font-semibold">{item.label}: </span>
                                                        {item.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>


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


        </div>
    )
}
