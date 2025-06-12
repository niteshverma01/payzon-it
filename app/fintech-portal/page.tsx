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
  ShieldCheck,
  CheckCircle,
  BarChart3,
  ChartSpline,
  Router,
  Users,
  Bell,
  Focus,
  CircleCheck,
  Wallet,
  Shield,
  Rocket,
  Workflow,
  Globe,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";

const fintechs = [
  {
    title: "Comprehensive Financial Management",
    icon: ChartSpline,
    description:
      "Whether you’re a bank, credit union, insurance provider, or fintech startup, our portal offers a complete suite of services that cater to all your financial needs—helping you provide more value to your customers and enhancing their financial well-being.",
  },
  {
    title: "Seamless Integration",
    icon: Link2,
    description:
      "The platform is designed for easy integration with existing systems, third-party tools, and legacy software, allowing businesses to upgrade without disrupting their current operations. APIs are available to seamlessly connect with other systems, ensuring smooth data flow and interoperability.",
  },
  {
    title: "Scalability and Flexibility",
    icon: Router,
    description:
      "The FinTech Portal is built on scalable cloud infrastructure that can grow with your business. Whether you’re dealing with thousands or millions of users, the platform is flexible enough to adapt to growing demands.",
  },
  {
    title: "Enhanced Customer Engagement",
    icon: Users,
    description:
      "With features like personalized financial recommendations, automated investing, and intuitive user interfaces, you can keep customers engaged, increase satisfaction, and boost loyalty by providing them with convenient, innovative financial services.",
  },
  {
    title: "Global Reach",
    icon: Globe,
    description:
      "Our FinTech Portal can serve a global user base, supporting multiple currencies, languages, and payment systems. This opens the door for businesses to expand their reach across regions and markets.",
  },
  {
    title: "Robust Security",
    icon: Shield,
    description:
      "Security is our top priority. Our platform follows industry-leading security protocols to protect sensitive customer data, prevent fraud, and comply with financial regulations, providing both businesses and end-users with peace of mind.",
  },
  {
    title: "Future-Proof Solution",
    icon: Rocket,
    description:
      "With blockchain integration, cryptocurrency support, and continuous updates to ensure compliance with evolving regulations, our FinTech Portal is designed to be future-proof, ensuring your business stays ahead in the rapidly evolving financial technology landscape.",
  },
];

const services = [
  {
    title: "Social Media Integration",
    description:
      "APIs allow third-party applications to integrate with social media platforms (e.g., Facebook, Twitter, Instagram) to post updates, share content, or analyze social data.",
  },
  {
    title: "Payment Systems",
    description:
      "Payment gateways like PayPal, Stripe, and Square provide APIs to facilitate secure transactions for e-commerce and mobile applications.",
  },
  {
    title: "Mobile App Development",
    description:
      "APIs enable mobile applications to interact with back-end systems, access databases, and integrate with other services (e.g., location services, cloud storage).",
  },
  {
    title: "Cloud Services",
    description:
      "Cloud platforms such as AWS, Google Cloud, and Microsoft Azure offer APIs to interact with their services, including storage, machine learning, and data analytics.",
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "APIs are fundamental for connecting and managing IoT devices, allowing them to send data and receive commands from central platforms or applications.",
  },
  {
    title: "SaaS (Software as a Service)",
    description:
      "Many SaaS providers offer APIs that allow users to integrate their services into custom workflows or applications.",
  },
];
import { Layers, Code2, Book } from "lucide-react";

const features = [
  {
    title: "Digital Banking Services",

    items: [
      {
        label: "Account Management",
        text: " Manage multiple accounts (checking, savings, etc.), view transaction history, and perform transfers.",
      },
      {
        label: "Payments & Fund Transfers",
        text: "Seamless local and international transfers, bill payments, and peer-to-peer transactions via a user-friendly interface",
      },
      {
        label: "Card Management",
        text: "View and manage debit/credit card information, check balance, and perform transactions.",
      },
    ],
  },
  {
    title: "Investment Management",

    items: [
      {
        label: "Portfolio Tracking:",
        text: " Real-time tracking of investments across various asset classes like stocks, bonds, ETFs, and cryptocurrencies.",
      },
      {
        label: "Robo-Advisory Services:",
        text: "AI-driven portfolio management providing personalized investment strategies based on user goals.",
      },
      {
        label: "Advanced Analytics:",
        text: " Access detailed market insights, stock analysis, trends, and risk assessment tools.",
      },
      {
        label: "Authentication & Authorization:",
        text: "Secure APIs via OAuth, API keys, or JWT.",
      },
    ],
  },
  {
    title: " Lending and Borrowing",

    items: [
      {
        label: "Loan Management ",
        text: "Apply for personal, business, or mortgage loans with instant eligibility checks and calculators..",
      },
      {
        label: "Peer-to-Peer Lending",
        text: "Facilitate lending and borrowing within the platform.",
      },
      {
        label: "Credit Scoring:",
        text: "Integrated credit rating system to check credit scores and loan eligibility.",
      },
    ],
  },
  {
    title: "Insurance Services",

    items: [
      {
        label: "Digital Insurance Marketplace",
        text: " Compare and access health, life, auto, and home insurance products with instant quotes.",
      },
      {
        label: "Claims Tracking :",
        text: "Manage and track insurance claims with real-time updates.",
      },
    ],
  },
  {
    title: "Payment Gateway Integration",

    items: [
      {
        label: "Secure Transactions ",
        text: "A robust payment gateway for businesses to accept credit/debit card, wallet, and bank transfers..",
      },
      {
        label: "Mobile Payments:",
        text: "Enable mobile-based payments, including contactless and QR code scanning.",
      },
      {
        label: "Recurring Billing ",
        text: "Automate subscription-based services with recurring billing and invoicing.",
      },
    ],
  },
  {
    title: "Blockchain Integration for Transparency",

    items: [
      {
        label: "Distributed Ledger",
        text: " Secure transaction recording using blockchain for transparency and fraud prevention.",
      },
      {
        label: "Cryptocurrency Support",
        text: "Integrated wallet for buying, selling, and managing digital assets.",
      },
    ],
  },
  {
    title: " Compliance and Security",

    items: [
      {
        label: "Data Encryption:",
        text: "High-level encryption to protect sensitive financial data.",
      },
      {
        label: "Regulatory Compliance :",
        text: " Adheres to GDPR, PSD2, KYC, and AML regulations.",
      },
      {
        label: "Two-Factor Authentication :",
        text: " Secure login with 2FA and biometric security options.",
      },
    ],
  },
  {
    title: "Advanced Reporting and Analytics",

    items: [
      {
        label: "Financial Dashboards",
        text: "Custom dashboards displaying key financial metrics.",
      },
      {
        label: "Automated Reports:",
        text: "Generate reports for tax filing, auditing, or business tracking.",
      },
      {
        label: "Risk Management Tools",
        text: "Real-time monitoring and alerts for risk assessment.",
      },
    ],
  },
  {
    title: "Customizable User Experience",

    items: [
      {
        label: "White-Labeling",
        text: "Customize branding with logo, colors, and domain integration.",
      },
      {
        label: "User-Friendly Interface ",
        text: "Intuitive and responsive design across all devices.",
      },
      {
        label: "Multi-Language Support",
        text: "Platform support for multiple languages and currencies.",
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
    title: " Financial Institutions",
    Objective:
      "Banks, credit unions, and other financial service providers can use the portal to digitize services, offer new products, and improve customer engagement.",
  },
  {
    id: 2,
    title: "  FinTech Startups",
    Objective:
      " New fintech companies can leverage the portal to launch and scale their business without the need for complex infrastructure and development resources.",
  },
  {
    id: 3,
    title: "Insurance Companies",
    Objective:
      "The portal can be used by insurance providers to manage policies, claims, and customer data while offering seamless digital experiences.",
  },
  {
    id: 4,
    title: " Investment Firms",
    Objective:
      "Investment firms and wealth managers can offer their clients real-time portfolio management, personalized financial advice, and automatic investment strategies.",
  },
  {
    id: 5,
    title: " E-Commerce Platforms",
    Objective:
      "Businesses can integrate the portal’s secure payment gateway to enable smooth and secure transactions on their websites.",
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

export default function Fintech() {
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
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              API Development{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Here's a detailed description of API Development that can be used
              for your project proposal or documentation:
            </motion.p>
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
            Fintech Product Overview: :-
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The FinTech Portal is a comprehensive, customizable platform
            designed to empower financial institutions, businesses, and
            individuals with innovative tools for managing, investing, and
            transacting. Built using cutting-edge technology, this portal is a
            one-stop solution that brings a suite of financial services,
            including digital banking, investment management, lending,
            insurance, and payment processing, into a single, seamless platform.
            Our FinTech Portal is crafted to meet the demands of modern
            financial systems, offering secure, efficient, and scalable
            solutions for both businesses and end-users. Whether you are a
            financial institution looking to enhance customer engagement or a
            tech-savvy user seeking better control over your financial
            activities, the FinTech Portal is designed to simplify your
            experience while ensuring robust compliance with industry standards.
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

      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Use Cases:
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
            Get Started with Our FinTech Portal Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Unlock the potential of your business with our cutting-edge FinTech
            Portal. Whether you're looking to enhance your customer’s financial
            experience, streamline operations, or tap into new revenue streams,
            our platform provides everything you need to succeed in the
            fast-paced world of finance. <br />
            Reach out to us for a demo or a custom proposal, and let’s explore
            how our FinTech Portal can transform your business.
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
              This description positions the FinTech Portal as a powerful and
              scalable product that caters to a variety of financial needs,
              making it an appealing solution for businesses looking to innovate
              and streamline their services while ensuring compliance, security,
              and a top-tier user experience.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
