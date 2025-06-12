"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Network,
  Lock,
  RefreshCcw,
  Settings,
  ThumbsUp,
  Link2,
  ChartSpline,
  Wallet,
  Shield,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";

import { ShoppingCart, Smartphone, Settings2, Headphones } from "lucide-react";


import { Gamepad, Users,  MonitorSmartphone,  DollarSign, LayoutTemplate, ShoppingBag,  CreditCard, Megaphone,  } from "lucide-react";

const gamingFintechs = [
  
 
  {
    title: "E-commerce Website",
    icon: LayoutTemplate,
    Challenge:
      "Ensuring high uptime and fast loading speeds for online shoppers.",
      Solution:"Use dedicated or cloud hosting with a content delivery network (CDN) to handle high traffic and ensure optimal performance."
  },
  {
    title: "Banking Website",
    icon: ShoppingBag,
   Challenge:
      "Providing secure and reliable hosting for sensitive financial data.",
      Solution:"Choose a VPS or dedicated server with DDoS protection, SSL encryption, and regular backups to ensure data integrity."
  },
  {
    title: "Healthcare Website",
    icon: Smartphone,
Challenge:
      "Ensuring compliance with healthcare data protection regulations.",
      Solution:"Opt for HIPAA-compliant hosting with span access controls, encrypted storage, and regular security audits."
  },
  {
    title: "News Website",
    icon: CreditCard,
Challenge:
      "Handling high traffic spikes during breaking news events.",
      Solution:"Use cloud hosting with auto-scaling capabilities and a CDN to distribute content globally and manage traffic surges efficiently."
  },
  {
    title: "Social Media Platform",
    icon: Megaphone,
Challenge:
      "Supporting real-time interactions and high user engagement.",
      Solution:"Use a combination of cloud hosting, load balancing, and database replication to ensure smooth performance and data consistency."
  },
  {
    title: "Educational Portal",
    icon: Headphones,
Challenge:
      "Providing stable hosting for online courses and learning management systems.",
      Solution:"Use cloud or VPS hosting with scalability options and a CDN to ensure smooth access for students worldwide."
  },
];


const Services = [
 
  {
    title: "Small & Medium Businesses",
    description:
      "Perfect for entrepreneurs and small businesses looking to start selling products online with minimal setup time.",
  },
  {
    title: "Large Enterprises",
    description:
      "For established businesses seeking a scalable, fully-featured platform to manage large product catalogs and international operations.",
  },
  {
    title: "Niche Marketplaces",
    description:
      "Create a specialized marketplace focused on specific products or communities, offering a curated and unique shopping experience.",
  },
  {
    title: "Digital Products & Services",
    description:
      "Sell downloadable goods like eBooks, software, or online courses easily without the hassle of physical logistics.",
  },
];


const features = [
  {
    title: "Shared Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Shared hosting is a type of web hosting where multiple websites share the same server resources.",
      },
      {
        label: "How It Works:",
        text: "A single server hosts multiple websites, distributing CPU, RAM, and storage among them.",
      },
      {
        label: "Use Case Example:",
        text: "A small business website uses shared hosting as a cost-effective solution for hosting its website.",
      },
    ],
  },
  {
    title: "VPS Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Virtual Private Server (VPS) hosting provides dedicated resources within a shared server through virtualization.",
      },
      {
        label: "How It Works:",
        text: "The server is divided into virtual sections, giving users more control and dedicated resources compared to shared hosting.",
      },
      {
        label: "Use Case Example:",
        text: "A growing e-commerce store upgrades to VPS hosting to handle increased traffic and performance needs.",
      },
    ],
  },
  {
    title: "Dedicated Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Dedicated hosting provides an entire server exclusively for a single user or business.",
      },
      {
        label: "How It Works:",
        text: "The user gets full control over the server's resources, security, and configurations without sharing them with other users.",
      },
      {
        label: "Use Case Example:",
        text: "A large enterprise website with high traffic uses dedicated hosting to ensure optimal performance and security.",
      },
    ],
  },
  {
    title: "Cloud Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Cloud hosting utilizes multiple connected servers to balance load and maximize uptime.",
      },
      {
        label: "How It Works:",
        text: "Instead of relying on a single server, cloud hosting distributes resources across a network of interconnected servers.",
      },
      {
        label: "Use Case Example:",
        text: "A media streaming website uses cloud hosting to handle fluctuating traffic demands and prevent downtime.",
      },
    ],
  },
  {
    title: "Managed Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Managed hosting provides a fully maintained hosting solution where the provider handles server management tasks.",
      },
      {
        label: "How It Works:",
        text: "Hosting providers take care of updates, security, backups, and technical support, allowing users to focus on their websites.",
      },
      {
        label: "Use Case Example:",
        text: "A blogger uses managed WordPress hosting to ensure optimal performance and security without technical expertise.",
      },
    ],
  },
  {
    title: "Reseller Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Reseller hosting allows users to sell hosting services to their clients under their own brand.",
      },
      {
        label: "How It Works:",
        text: "A hosting provider allocates server resources to a reseller, who can create and manage multiple hosting accounts.",
      },
      {
        label: "Use Case Example:",
        text: "A web development agency offers hosting services to its clients through reseller hosting.",
      },
    ],
  },
  {
    title: "Colocation Hosting",
    items: [
      {
        label: "What It Is:",
        text: "Colocation hosting involves renting space in a data center to house privately owned servers.",
      },
      {
        label: "How It Works:",
        text: "Users provide their own hardware while the data center ensures power, cooling, and internet connectivity.",
      },
      {
        label: "Use Case Example:",
        text: "A tech startup colocates its servers in a data center for better infrastructure and network stability.",
      },
    ],
  },
  {
    title: "WordPress Hosting",
    items: [
      {
        label: "What It Is:",
        text: "WordPress hosting is optimized specifically for WordPress websites, offering enhanced performance and security.",
      },
      {
        label: "How It Works:",
        text: "Hosting providers optimize server settings, caching, and security measures for WordPress-based sites.",
      },
      {
        label: "Use Case Example:",
        text: "A blogger chooses WordPress hosting to get pre-installed WordPress and automatic updates.",
      },
    ],
  },
  {
    title: "E-commerce Hosting",
    items: [
      {
        label: "What It Is:",
        text: "E-commerce hosting is designed for online stores, providing essential tools like SSL certificates and payment gateways.",
      },
      {
        label: "How It Works:",
        text: "This hosting type includes features like fast servers, security enhancements, and compatibility with e-commerce platforms.",
      },
      {
        label: "Use Case Example:",
        text: "An online store selling fashion products uses e-commerce hosting to ensure secure transactions and smooth user experience.",
      },
    ],
  },
];



const blockchains = [
  {
    icon: Network,
    title: "Decentralization",
    description:
      "Blockchain operates on a decentralized network of computers (nodes), where no single entity has control over the entire system. This ensures trust, transparency, and accountability by distributing control and verification across multiple participants.",
  },
  {
    icon: RefreshCcw,
    title: "Distributed Ledger",
    description:
      "The blockchain is essentially a distributed ledger where records, known as blocks, are linked together in a chain. Each block contains data about transactions or other types of information, and the blocks are cryptographically secured, making the ledger immutable.",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description:
      "Cryptography plays a crucial role in blockchain development, ensuring that data stored in the blockchain is secure, encrypted, and only accessible by authorized parties. Each block is encrypted with a cryptographic hash, and users' transactions are protected by digital signatures.",
  },
  {
    icon: Settings,
    title: "Smart Contracts",
    description:
      "Blockchain development also includes the creation of smart contracts, which are self-executing contracts with predefined rules encoded directly onto the blockchain. Smart contracts automatically enforce agreements when certain conditions are met, eliminating the need for intermediaries and reducing the risk of human error or fraud.",
  },
  {
    icon: ThumbsUp,
    title: "Consensus Algorithms",
    description:
      "Consensus mechanisms ensure that all the nodes on the blockchain network agree on the validity of transactions. Popular consensus algorithms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS), each offering different methods to validate and add transactions to the blockchain.",
  },
  {
    icon: Wallet,
    title: "Tokenization",
    description:
      "Blockchain development can include the creation of digital assets or tokens, which can represent ownership or access to services. Tokens can be used for various purposes, including cryptocurrencies (like Bitcoin or Ethereum), security tokens, or utility tokens within decentralized applications (dApps).",
  },
  {
    icon: Link2,
    title: "Interoperability",
    description:
      "Blockchain development often involves ensuring that different blockchain systems can communicate with each other, enabling interoperability between separate blockchains. This is especially important in multi-chain ecosystems where assets and data need to flow seamlessly between platforms.",
  },
];

const landingwebsites = [
  {
    image: image1,
    title: "Telecommunications",
    description:
      "Mobile phone providers or broadband companies can offer an easy way for customers to recharge their prepaid accounts or add additional services (data, voice plans, etc.).",
  },
  {
    image: image2,
    title: "Utility Companies",
    description:
      "Providers of electricity, water, gas, or other utilities can use the portal to allow customers to pay bills or recharge prepaid meters, providing a seamless payment experience.",
  },
  {
    image: image3,
    title: "Entertainment & Streaming Services",
    description:
      "Subscription-based platforms (such as music, video, or gaming services) can enable users to quickly top-up their accounts or manage subscription renewals through the portal.",
  },
  {
    image: image4,
    title: "Gift Cards and Vouchers",
    description:
      "Businesses offering digital gift cards or promotional vouchers can implement the portal to allow customers to recharge their prepaid balances.    ",
  },
  {
    image: image5,
    title: "E-Commerce and Retail",
    description:
      "Online retailers and e-commerce platforms can integrate a recharge portal to allow users to top-up their accounts for purchases or to add balance to wallets.",
  },
];
const Stages = [
  {
    id: 1,
    title: "All-in-One E-commerce Solution",
    Objective:
      "The Shopping Portal provides everything you need to run a successful online store, from product management to customer support, payment processing, and marketing.",
  },
  {
    id: 2,
    title: "Customizable and Scalable",
    Objective:
      "Our platform is flexible and can be easily customized to match your business’s unique needs, growing with you as you scale.",
  },
  {
    id: 3,
    title: "Mobile-Optimized",
    Objective:
      "With most shopping happening on mobile devices, our Shopping Portal is fully responsive and ensures a seamless user experience.",
  },
  {
    id: 4,
    title: "Secure and Reliable",
    Objective:
      "Our platform adheres to the highest security standards, protecting customer data and payment transactions at all times.",
  },
  {
    id: 5,
    title: "Easy to Use",
    Objective:
      "Our intuitive interface makes store management easy, requiring no technical expertise to set up or operate.",
  },
  {
    id: 6,
    title: "Customer Support",
    Objective:
      "Access 24/7 customer support for any technical or operational issues, ensuring your store runs smoothly.",
  },
];

const Actions = [
  {
    id: 1,
    title: " Cryptocurrencies",
    Objective:
      "Blockchain serves as the foundation for digital currencies such as Bitcoin, Ethereum, and altcoins. It enables decentralized and secure peer-to-peer transactions without the need for intermediaries.",
  },
  {
    id: 2,
    title: " Supply Chain Management",
    Objective:
      " Blockchain can be used to track the movement of goods in supply chains, ensuring transparency, traceability, and reducing fraud or inefficiencies.",
  },
  {
    id: 3,
    title: "Healthcare",
    Objective:
      "Blockchain can secure patient data, ensure the integrity of medical records, and streamline the process of sharing medical information between different healthcare providers..",
  },
  {
    id: 4,
    title: "Finance and Payments",
    Objective:
      "Blockchain is revolutionizing the finance industry by enabling faster, more secure, and cost-effective financial transactions, as well as creating decentralized finance (DeFi) applications for lending, borrowing, and asset management.",
  },
  {
    id: 5,
    title: "Voting Systems",
    Objective:
      "Blockchain can be used to build secure and transparent voting systems, ensuring that election results are accurate, tamper-proof, and verifiable.",
  },
  {
    id: 6,
    title: ". Real Estate",
    Objective:
      "Blockchain can streamline property transactions by eliminating intermediaries, improving transparency, and reducing fraud in real estate deals.",
  },
  {
    id: 7,
    title: " Intellectual Property Protection",
    Objective:
      "Blockchain provides an immutable ledger for protecting intellectual property rights, ensuring that digital content, art, and inventions are properly credited and protected from unauthorized use.",
  },
];

export default function WebHosting() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
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
              Web Hosting Portal Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Web Hosting Portal Development
            </motion.h1>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 md:px-12   overflow-hidden">
        <div className="bg-background/100 mb-16 p-8 rounded-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-3xl font-bold mb-6 bg-clip-text"
          >
           Web Hosting Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
         Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. Hosting providers offer various types of hosting, such as shared, VPS, dedicated, and cloud hosting, each catering to different needs. Choosing the right web hosting service is crucial for website performance, security, and reliability.
          </motion.p>
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              Types of Web Hosting:
            </motion.h2>
          
          </div>

          {/* Features Grid */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
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
                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Bullet Points */}
                      <ul className="space-y-2">
                        {feature.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm leading-relaxed"
                          >
                            <span className="text-primary font-semibold">
                              {item.label}:{" "}
                            </span>
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

      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b  to-background/80 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              Why Choose Our Ecommerce Store Platform?
            </motion.h2>
          </div>

          {/* Features Grid */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {gamingFintechs.map((gamingFintech, index) => {
              const IconComponent = gamingFintech.icon;
              return (
                <motion.div
                  key={gamingFintech.title}
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
                        {gamingFintech.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        <span className="text-white">Challenge : </span>{gamingFintech.Challenge}
                      </p>
                       <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                       <span className="text-white">Solution : </span> {gamingFintech.Solution}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 px-6 md:px-12   overflow-hidden">
        <div className="bg-background/100 mb-16 p-8 rounded-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-3xl font-bold mb-6 bg-clip-text text-primary text-center"
          >
          Conclusion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
Web hosting is a fundamental component of establishing an online presence, providing the necessary infrastructure for websites to be accessible on the internet.            <br />
Choosing the right hosting solution depends on factors such as website size, traffic expectations, security requirements, and budget.          </motion.p>
         
        </div>
      </section>
    </div>
  );
}
