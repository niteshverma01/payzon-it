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
    title: "Fully Customizable & Scalable",
    icon: LayoutTemplate,
    description:
      "Build a unique online store that reflects your brand identity with customizable templates. The platform scales with your growth.",
  },
  {
    title: "Comprehensive E-Commerce Solution",
    icon: ShoppingBag,
    description:
      "Manage products, payments, marketing, and customer relationships—all from one powerful and integrated platform.",
  },
  {
    title: "Mobile-First & SEO Optimized",
    icon: Smartphone,
    description:
      "Responsive design ensures excellent performance on all devices, with built-in SEO tools to help you rank and grow organically.",
  },
  {
    title: "Flexible Payment & Shipping Options",
    icon: CreditCard,
    description:
      "Support for multiple payment gateways, tax calculations, and international shipping ensures global accessibility.",
  },
  {
    title: "Boost Sales with Marketing Tools",
    icon: Megaphone,
    description:
      "Use promotional features like coupons, email campaigns, and affiliate marketing to drive traffic and conversions.",
  },
  {
    title: "24/7 Support",
    icon: Headphones,
    description:
      "Round-the-clock technical and business support ensures your store and portal are always running smoothly.",
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
    title: "User-Friendly Store Builder",
    items: [
      {
        label: "Drag-and-Drop Interface:",
        text: "Easily create and design your online store with a simple drag-and-drop builder. No coding knowledge required.",
      },
      {
        label: "Pre-Designed Themes:",
        text: "Choose from a wide variety of professional, responsive themes optimized for mobile devices.",
      },
      {
        label: "Customizable Layouts:",
        text: "Tailor the store layout with full flexibility over colors, fonts, logos, and structure to match your brand.",
      },
    ],
  },
  {
    title: "Product Management",
    items: [
      {
        label: "Unlimited Product Listings:",
        text: "Add unlimited products with descriptions, high-quality images, prices, and inventory levels.",
      },
      {
        label: "Product Variants:",
        text: "Offer size, color, or style options for your products.",
      },
      {
        label: "Product Categories:",
        text: "Organize items into categories to simplify browsing for your customers.",
      },
    ],
  },
  {
    title: "Secure Payment Gateways",
    items: [
      {
        label: "Multiple Payment Methods:",
        text: "Accept credit/debit cards, PayPal, Stripe, Apple Pay, and cryptocurrency.",
      },
      {
        label: "Fraud Protection:",
        text: "Built-in fraud prevention ensures safe transactions.",
      },
      {
        label: "Multi-Currency Support:",
        text: "Enable purchases in different currencies for international customers.",
      },
    ],
  },
  {
    title: "Shopping Cart & Checkout",
    items: [
      {
        label: "Abandoned Cart Recovery:",
        text: "Send reminders or discounts to users who abandon their carts.",
      },
      {
        label: "One-Page Checkout:",
        text: "Streamlined one-page checkout for faster purchases.",
      },
      {
        label: "Guest Checkout:",
        text: "Let customers buy without signing up.",
      },
    ],
  },
  {
    title: "Order Management System",
    items: [
      {
        label: "Real-Time Order Tracking:",
        text: "Monitor order status with updates for you and your customers.",
      },
      {
        label: "Inventory Management:",
        text: "Track stock levels and get alerts when items are low.",
      },
      {
        label: "Shipping & Tax Calculation:",
        text: "Auto-calculate shipping fees and taxes based on location.",
      },
    ],
  },
  {
    title: "Customer Management & CRM",
    items: [
      {
        label: "Customer Profiles:",
        text: "Manage profiles, order history, and preferences.",
      },
      {
        label: "Loyalty Programs:",
        text: "Reward customers with points, discounts, and special offers.",
      },
      {
        label: "Customer Segmentation:",
        text: "Target users based on behavior and demographics.",
      },
    ],
  },
  {
    title: "Marketing & Promotion Tools",
    items: [
      {
        label: "Discount Coupons & Promotions:",
        text: "Create promo codes and run flash sales.",
      },
      {
        label: "Email Marketing Integration:",
        text: "Connect with email platforms to send campaigns and newsletters.",
      },
      {
        label: "Social Media Integration:",
        text: "Share products on Facebook, Instagram, and Pinterest.",
      },
      {
        label: "Affiliate Marketing Program:",
        text: "Let affiliates promote your store and earn commissions.",
      },
    ],
  },
  {
    title: "SEO & Analytics",
    items: [
      {
        label: "SEO Optimized:",
        text: "Includes meta tag editing, clean URLs, and product SEO.",
      },
      {
        label: "Google Analytics Integration:",
        text: "Track traffic, conversions, and user behavior in-depth.",
      },
      {
        label: "Reporting & Insights:",
        text: "Access dashboards for sales, inventory, and engagement.",
      },
    ],
  },
  {
    title: "Mobile Compatibility",
    items: [
      {
        label: "Mobile-Responsive Design:",
        text: "Deliver a flawless experience on phones and tablets.",
      },
      {
        label: "Mobile App Integration:",
        text: "Optionally connect with a mobile app for your store.",
      },
    ],
  },
  {
    title: "Customer Support & Engagement",
    items: [
      {
        label: "Live Chat Support:",
        text: "Answer customer queries in real-time.",
      },
      {
        label: "Help Center & FAQs:",
        text: "Provide order tracking, shipping policies, and self-help tools.",
      },
      {
        label: "24/7 Customer Service Integration:",
        text: "Offer round-the-clock support via email, phone, or chat.",
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

export default function GroceryPortal() {
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
              Grocery/Mart Portal Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Grocery/Mart Portall Development
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
            Ecommerce Store – Build Your Online Retail Business with Ease
            Product Overview:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Ecommerce Store is a fully integrated, customizable platform
            designed to help businesses of all sizes create a professional,
            user-friendly online store. Whether you’re selling physical
            products, digital goods, or services, this solution provides
            everything you need to start, grow, and manage your online retail
            business. With advanced features for product management, secure
            payments, order tracking, and customer engagement, our Ecommerce
            Store platform ensures a seamless shopping experience for both you
            and your customers. <br />
            Built with scalability in mind, the Ecommerce Store platform is
            perfect for startups looking to make their mark in the digital
            world, as well as established businesses aiming to expand their
            online presence.
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
                        {gamingFintech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Why Choose Our Shopping Portal?
          </motion.h2>
        </div>

        <section className="py-20 px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {Stages.map((Stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background/50 border border-border/50 h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                    <div className="inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xl text-primary">{Stage.id}</span>
                        <CardTitle className="text-xl">{Stage.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {Stage.Objective}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
            {Services.map((service, index) => {
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
           Get Started with Your Ecommerce Store Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
          Unlock the potential of your online business with our Ecommerce Store platform, designed to help you succeed in the world of digital retail. Whether you're launching your first online store or looking to expand your existing business, our easy-to-use platform provides everything you need to get started.
            <br />
            Contact us today to schedule a demo, learn more about our customizable options, and take the next step in building your gaming empire.
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
            >Contact us for a demo, or sign up today to begin building your custom online store and start selling in no time! <br /> This Ecommerce Store description emphasizes the versatility and comprehensive features of the platform, making it appealing to a wide range of businesses, from small startups to large enterprises. It highlights how easy it is to set up and manage an online store while providing powerful tools to increase sales, improve customer engagement, and track performance.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
