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

const fintechs = [
  {
    title: "All-in-One E-commerce Solution",
    icon: ShoppingCart,
    description:
      "The Shopping Portal provides everything you need to run a successful online store, from product management to customer support, payment processing, and marketing.",
  },

  {
    title: "Customizable and Scalable",
    icon: Settings2,
    description:
      "Our platform is flexible and can be easily customized to match your business’s unique needs, growing with you as your store expands.",
  },
  {
    title: "Mobile-Optimized",
    icon: Smartphone,
    description:
      "Our Shopping Portal is fully responsive and optimized for mobile devices, ensuring a seamless shopping experience.",
  },

  {
    title: "Secure and Reliable",
    icon: Shield,
    description:
      "Security is a top priority. Our platform follows industry-leading security protocols to protect customer data and payments.",
  },
  {
    title: "Easy to Use",
    icon: ChartSpline,
    description:
      "With an intuitive interface, anyone can set up and manage their online store—no technical expertise required.",
  },
  {
    title: "Customer Support",
    icon: Headphones,
    description:
      "Access 24/7 customer support for technical and operational assistance, ensuring smooth business operations.",
  },
];

const services = [
  {
    title: "Retail Businesses",
    description:
      "Whether you sell clothing, electronics, or home goods, the Shopping Portal is perfect for brick-and-mortar retailers looking to expand their reach online.",
  },
  {
    title: "Niche Products",
    description:
      "Startups or niche businesses can build a highly customized shopping experience to cater to their target audience’s specific needs.",
  },
  {
    title: "Subscription-Based Models",
    description:
      "If you run a subscription box service or offer subscription-based products, our portal is equipped with subscription management tools.",
  },
  {
    title: "Marketplaces",
    description:
      "Create a multi-vendor marketplace where third-party sellers can list their products, making it easy to manage transactions, commissions, and product listings.",
  },
  {
    title: "B2B E-commerce",
    description:
      "Our portal also supports business-to-business transactions, allowing wholesalers and suppliers to sell products in bulk to other businesses.",
  },
];

const features = [
  {
    title: "User-Friendly Storefront Design",
    items: [
      {
        label: "Customizable Themes:",
        text: "Choose from a wide range of beautifully designed, mobile-responsive themes that you can customize to match your brand.",
      },
      {
        label: "Drag-and-Drop Builder:",
        text: "Easily create and edit pages with a drag-and-drop interface for intuitive store setup and management.",
      },
    ],
  },
  {
    title: "Product Management",
    items: [
      {
        label: "Unlimited Product Listings:",
        text: "Add, edit, and manage an unlimited number of products across multiple categories.",
      },
      {
        label: "Advanced Search and Filters:",
        text: "Provide customers with powerful search options including price, size, color, and brand.",
      },
      {
        label: "Product Variants:",
        text: "Sell products with multiple variations and manage stock and pricing efficiently.",
      },
    ],
  },
  {
    title: "Seamless Shopping Experience",
    items: [
      {
        label: "Shopping Cart & Checkout:",
        text: "Secure checkout with multiple payment options including credit/debit cards and digital wallets.",
      },
      {
        label: "Guest Checkout:",
        text: "Allow customers to purchase without account creation.",
      },
      {
        label: "Saved Carts:",
        text: "Let customers save items for future purchase.",
      },
    ],
  },
  {
    title: "Customer Account Management",
    items: [
      {
        label: "Personalized Dashboards:",
        text: "Customers can view order history, track shipments, and manage payment methods.",
      },
      {
        label: "Order Tracking:",
        text: "Real-time tracking updates for customer orders.",
      },
    ],
  },
  {
    title: "Multi-Currency and Multi-Language Support",
    items: [
      {
        label: "Expand Globally:",
        text: "Offer multi-currency support and language localization.",
      },
    ],
  },
  {
    title: "Payment Gateway Integration",
    items: [
      {
        label: "Secure Payments:",
        text: "Integrate with PayPal, Stripe, and other gateways.",
      },
      {
        label: "Subscription Payments:",
        text: "Enable automated recurring billing.",
      },
    ],
  },
  {
    title: "Inventory and Order Management",
    items: [
      {
        label: "Stock Management:",
        text: "Track availability, set low-stock alerts, and manage backorders.",
      },
      {
        label: "Order Fulfillment:",
        text: "Integrate with third-party logistics providers.",
      },
      {
        label: "Automated Notifications:",
        text: "Send order confirmations and shipping updates.",
      },
    ],
  },
  {
    title: "Marketing and Promotion Tools",
    items: [
      {
        label: "Discounts & Coupons:",
        text: "Create promotions, discount codes, and flash sales.",
      },
      {
        label: "Email Marketing Integration:",
        text: "Sync customer data and send email campaigns.",
      },
      {
        label: "Affiliate Program:",
        text: "Encourage influencers and affiliates to promote your store.",
      },
    ],
  },
  {
    title: "Mobile App Integration",
    items: [
      {
        label: "Native Apps:",
        text: "Enable shopping on the go with iOS and Android integration.",
      },
    ],
  },
  {
    title: "Customer Reviews & Ratings",
    items: [
      {
        label: "Product Reviews:",
        text: "Allow customers to leave reviews and ratings.",
      },
      {
        label: "Q&A Section:",
        text: "Dedicated space for customer inquiries and responses.",
      },
    ],
  },
  {
    title: "Security Features",
    items: [
      {
        label: "SSL Encryption:",
        text: "Secure transactions with end-to-end encryption.",
      },
      {
        label: "Fraud Prevention:",
        text: "Built-in fraud detection tools.",
      },
      {
        label: "PCI DSS Compliance:",
        text: "Ensure secure payment data handling.",
      },
    ],
  },
  {
    title: "Analytics and Reporting",
    items: [
      {
        label: "Sales Dashboard:",
        text: "Detailed analytics on sales, customers, and products.",
      },
      {
        label: "Performance Reports:",
        text: "Generate reports on sales and marketing campaigns.",
      },
      {
        label: "Conversion Optimization:",
        text: "Monitor KPIs to improve customer retention.",
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

export default function Shopping() {
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
              API Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl mx-auto"
            >
              Shopping Portal Development{" "}
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
            Shopping Portal – Your Ultimate E-commerce Solution :-
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Shopping Portal is a powerful and customizable e-commerce
            platform designed to help businesses launch and scale their online
            stores with ease. Whether you're a small boutique or a large retail
            enterprise, our Shopping Portal is equipped with all the features
            you need to create a seamless shopping experience, boost sales, and
            enhance customer satisfaction. Our portal allows businesses to build
            and manage a dynamic online store, offer personalized shopping
            experiences, manage inventories, handle secure transactions, and
            track customer data—everything required to succeed in the
            ever-growing e-commerce world. From product listings to order
            fulfillment, marketing, and customer support, the Shopping Portal
            gives you the tools to operate and thrive in the competitive digital
            marketplace.
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
              Key Features:
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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
              Why Choose Our FinTech Portal?
            </motion.h2>
          </div>

          {/* Features Grid */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fintechs.map((fintech, index) => {
              const IconComponent = fintech.icon;
              return (
                <motion.div
                  key={fintech.title}
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
                        {fintech.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        {fintech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

  
      <section className="py-24 px-12 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold mb-4 text-primary"
            >
              Use Cases:
            </motion.h2>
      
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
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
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
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
            className="text-3xl md:text-3xl font-bold mb-6 bg-clip-text"
          >
           Start Selling Online Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
         Take your business to the next level with the Shopping Portal, your all-in-one e-commerce platform that provides everything you need to start, manage, and grow your online store. With its powerful features, ease of use, and secure environment, the Shopping Portal is the ultimate tool for businesses looking to thrive in the digital world.<br />
           Contact us today for a demo or to get started with a personalized setup for your online store!
          </motion.p>
          <div
            className="mb-16 mt-8 p-4 rounded-xl"
            style={{ backgroundColor: "#24130cCC" }}
          >
            {" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
            >
        This Shopping Portal description emphasizes the product's versatility, features, and benefits, making it a compelling offer for businesses looking to expand into the e-commerce space.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
