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

import {
  Gamepad,
  Users,
  MonitorSmartphone,
  ShieldCheck,
  LayoutTemplate,
  ShoppingBag,
  CreditCard,
  Megaphone,
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Seamless Integration",
    icon: LayoutTemplate, // you can change this icon if needed
    description:
      "The KYC Portal integrates easily with your existing platforms, payment systems, and CRM tools, providing a unified solution for customer onboarding and verification.",
  },
  {
    title: "Global Compliance",
    icon: ShoppingBag, // swap for something more suitable like 'ShieldCheck' if using lucide-react
    description:
      "Our KYC platform adheres to international standards and regulations, including GDPR, AML, and KYC guidelines, ensuring your business remains compliant across borders.",
  },
  {
    title: "Enhanced Security",
    icon: Smartphone, // could change to 'Lock' or 'Shield' icon for better context
    description:
      "With multiple layers of security, including encrypted data storage, biometric verification, and two-factor authentication, your customers' data is always protected.",
  },
  {
    title: "Automated & Scalable",
    icon: CreditCard, // could change to 'ServerCog' or 'Settings'
    description:
      "The platform is designed to handle large volumes of KYC checks with minimal manual intervention, enabling you to scale your business without compromising efficiency.",
  },
  {
    title: "Improved Customer Experience",
    icon: Megaphone, // optionally replace with 'Smile' or 'UserCheck'
    description:
      "The user-friendly interface and quick verification process provide a positive experience for customers, reducing friction and increasing conversion rates.",
  },
  {
    title: "Cost & Time Savings",
    icon: Headphones, // optionally use 'Clock' or 'Wallet'
    description:
      "Automating the KYC process significantly reduces the time and costs involved in manual verification, improving operational efficiency and reducing errors.",
  },
  {
    title: "Risk Reduction",
    icon: ShieldCheck, // suitable icon from lucide-react
    description:
      "With comprehensive AML checks, watchlist screening, and risk scoring, you can easily identify high-risk customers and mitigate potential fraud.",
  },
];

const Services = [
  {
    title: "Financial Institutions",
    description:
      "Banks, credit unions, and fintech companies can leverage the KYC Portal to verify customers before offering services such as loans, credit cards, and investments.",
  },
  {
    title: "Cryptocurrency Platforms",
    description:
      "Use the KYC Portal to verify users before allowing them to trade or exchange digital assets, ensuring compliance with financial regulations.",
  },
  {
    title: "Insurance Providers",
    description:
      "Insurance companies can utilize the platform for customer onboarding, verifying identities before issuing policies.",
  },
  {
    title: "E-commerce & Marketplaces",
    description:
      "Online retailers and marketplaces can confirm customer identities before processing high-value transactions or offering specific products or services.",
  },
  {
    title: "Healthcare Providers",
    description:
      "Medical institutions and telemedicine platforms can use the portal for verifying patient identities before offering healthcare services online.",
  },
];

const features = [
  {
    title: "Identity Verification",
    items: [
      {
        label: "Document Upload:",
        text: "Customers can upload government-issued identification documents (e.g., passports, national ID cards, driver’s licenses) for verification.",
      },
      {
        label: "Automated Document Verification:",
        text: "The portal uses AI and machine learning algorithms to verify the authenticity of documents in real-time.",
      },
      {
        label: "Barcode Scanning:",
        text: "Scan barcodes or QR codes on documents to validate customer data efficiently.",
      },
    ],
  },
  {
    title: "Facial Recognition Technology",
    items: [
      {
        label: "Real-Time Facial Matching:",
        text: "Perform facial recognition against the uploaded document photo to verify that the person submitting the ID is the same person in the document.",
      },
      {
        label: "Liveness Detection:",
        text: "Prevent fraud by detecting liveness in facial recognition, ensuring that the customer is physically present for verification.",
      },
      {
        label: "Multi-Layered Security:",
        text: "Use a combination of biometric and document validation to ensure high levels of security and accuracy.",
      },
    ],
  },
  {
    title: "AML Compliance and Screening",
    items: [
      {
        label: "AML Checks:",
        text: "Run automatic Anti-Money Laundering (AML) checks to ensure your customers are not listed on global watchlists or sanctions lists.",
      },
      {
        label: "Watchlist Screening:",
        text: "Validate customer identity against global lists such as PEP (Politically Exposed Persons) and other high-risk individuals and entities.",
      },
      {
        label: "Risk Scoring:",
        text: "Assign a risk score to each customer based on AML screening results, helping businesses identify potentially suspicious activities.",
      },
    ],
  },
  {
    title: "Data Protection & Privacy",
    items: [
      {
        label: "Encrypted Data Storage:",
        text: "Store sensitive customer data securely with end-to-end encryption to protect personal information and prevent data breaches.",
      },
      {
        label: "GDPR & Global Compliance:",
        text: "Compliant with GDPR, CCPA, and other data protection regulations, ensuring the privacy and security of customer data.",
      },
      {
        label: "Secure Authentication:",
        text: "Implement multi-factor authentication (MFA) and other advanced security features to secure user access to the portal.",
      },
    ],
  },
  {
    title: "Customizable KYC Workflows",
    items: [
      {
        label: "Automated Workflow:",
        text: "Customize KYC verification workflows based on specific business requirements, such as document submission or manual verification for high-risk cases.",
      },
      {
        label: "Approval/Rejection Process:",
        text: "Enable manual or automated approvals, allowing staff to review flagged submissions and approve or reject customer accounts in real-time.",
      },
      {
        label: "Real-Time Notifications:",
        text: "Send automatic notifications to customers throughout the verification process, including status updates and document requests.",
      },
    ],
  },
  {
    title: "User-Friendly Interface",
    items: [
      {
        label: "Simple Onboarding:",
        text: "Customers can quickly and easily submit their KYC information via an intuitive, step-by-step interface.",
      },
      {
        label: "Mobile Compatibility:",
        text: "Fully responsive platform design that works seamlessly on both desktop and mobile devices.",
      },
      {
        label: "Language Support:",
        text: "Multi-language support for global users, enabling you to offer the KYC process in various languages.",
      },
    ],
  },
  {
    title: "Integration with Third-Party Services",
    items: [
      {
        label: "Third-Party Data Verification:",
        text: "Integrate with global third-party databases and services to verify customer details, such as addresses, phone numbers, and emails.",
      },
      {
        label: "Payment Gateway Integration:",
        text: "Enable verification of payment methods like bank accounts or credit card information.",
      },
      {
        label: "CRM & API Integration:",
        text: "Integrate the KYC Portal with your CRM system and other business applications for seamless data transfer and management.",
      },
    ],
  },
  {
    title: "Audit Trail & Reporting",
    items: [
      {
        label: "Audit Logs:",
        text: "Keep a detailed log of all KYC actions and verifications for compliance auditing purposes.",
      },
      {
        label: "Reporting & Analytics:",
        text: "Generate comprehensive reports on verification status, risk scores, and application outcomes.",
      },
      {
        label: "Customizable Reports:",
        text: "Create custom reports based on business or regulatory requirements to meet industry standards.",
      },
    ],
  },
  {
    title: "Customer Support & Assistance",
    items: [
      {
        label: "Help Center:",
        text: "Provide customers with access to a self-service help center for KYC documentation and troubleshooting.",
      },
      {
        label: "24/7 Support:",
        text: "Offer round-the-clock support for businesses and users to address verification-related queries.",
      },
      {
        label: "Live Chat Support:",
        text: "Integrate live chat to resolve customer concerns in real time during the KYC process.",
      },
    ],
  },
  {
    title: "Admin Dashboard",
    items: [
      {
        label: "Centralized Control:",
        text: "Manage KYC verifications and monitor real-time progress via an admin dashboard.",
      },
      {
        label: "Custom User Roles:",
        text: "Create staff roles with specific access rights to review, approve, or reject customer data.",
      },
      {
        label: "Risk Management Tools:",
        text: "Identify high-risk users using automated risk scoring and take timely actions.",
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

export default function Kyc() {
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
              e-Kyc Portal Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              e-Kyc Portall Development
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
            KYC Portal – Streamlined Identity Verification and Compliance
            Solution Product Overview:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Our KYC Portal is a comprehensive, secure, and user-friendly
            platform designed to streamline Know Your Customer (KYC) processes
            for businesses across industries. This solution helps businesses
            meet regulatory compliance requirements by efficiently verifying the
            identity of their customers, reducing fraud risk, and enhancing user
            experience. With advanced document verification, facial recognition,
            and automated workflows, the KYC Portal provides an easy-to-use
            system for businesses to collect and manage customer information
            securely. <br />
            Whether you're a financial institution, fintech startup, healthcare
            provider, or any other industry requiring customer verification, the
            KYC Portal ensures that your identity verification process is quick,
            reliable, and fully compliant with global regulations.
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
            Get Started with Our KYC Portal Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Ensure compliance, reduce fraud, and streamline your customer
            onboarding process with our KYC Portal. Whether you're in finance,
            healthcare, e-commerce, or any other regulated industry, this portal
            will help you meet KYC and AML requirements while providing a smooth
            experience for your customers.
            <br />
            Contact us today to request a demo, learn more about how our
            solution works, or begin your subscription to our KYC verification
            platform.
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
              This KYC Portal description emphasizes its security, regulatory
              compliance, and ease of use, showcasing the platform as a powerful
              tool for businesses in various sectors needing to verify their
              customers' identities securely and efficiently.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
