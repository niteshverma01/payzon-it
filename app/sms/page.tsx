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

import { Smartphone, ShieldCheck } from "lucide-react";

import { KeyRound, BellRing, Fingerprint } from "lucide-react";
import {
  ShoppingCart,
  Gift,
  Timer,
  Home,
  FileText,
  Banknote,
  BadgePercent,
  Users,
  FileCheck2,
  Globe,
  MonitorSmartphone,
} from "lucide-react";

import {
  Mail,
  Send,
  ServerCog,
  Headphones,
  Globe2,
  BarChart3,
} from "lucide-react";

const messagingSolutions = [
  {
    title: "Comprehensive Messaging Solutions",
    icon: Mail,
    process:
      "Our platform provides bulk email and SMS services with high deliverability, automation, and analytics.",
    example:
      "Launch targeted campaigns, automate customer notifications, and track performance — all from a unified dashboard.",
  },
  {
    title: "High Deliverability",
    icon: Send,
    process:
      "We use optimized routing, SPF, DKIM, and DMARC authentication to ensure messages reach inboxes successfully.",
    example:
      "Marketing emails and OTPs land directly in inboxes without being flagged as spam, increasing customer engagement.",
  },
  {
    title: "Scalable & Flexible",
    icon: ServerCog,
    process:
      "Easily scale your messaging campaigns with flexible API integrations, custom workflows, and cloud-based infrastructure.",
    example:
      "Integrate messaging into your CRM or ERP and trigger automated alerts based on customer behavior or system events.",
  },
  {
    title: "Reliable & Secure",
    icon: ShieldCheck,
    process:
      "GDPR-compliant messaging with encryption, opt-in/opt-out management, and secure APIs.",
    example:
      "Customer data is protected with end-to-end encryption, ensuring privacy in every communication.",
  },
  {
    title: "24/7 Customer Support",
    icon: Headphones,
    process:
      "Our expert support team is available around the clock for technical assistance and troubleshooting.",
    example:
      "Need help setting up a campaign or resolving delivery issues? Our support team is just a call or chat away.",
  },
  {
    title: "Global Reach",
    icon: Globe2,
    process:
      "Send SMS and emails across the world with multiple carrier integrations and localized delivery options.",
    example:
      "A retail brand can notify customers about flash sales in multiple countries, tailored to local languages and time zones.",
  },
  {
    title: "Advanced Analytics & Reports",
    icon: BarChart3,
    process:
      "Get real-time reports on open rates, click-through rates, bounces, and SMS delivery rates.",
    example:
      "Marketing teams can analyze which campaigns drive the most engagement and optimize future messaging accordingly.",
  },
];

const Services = [
  {
    id: 1,
    title: "E-commerce & Retail",
    description:
      "Online stores and retail businesses can send promotional emails, order updates, and personalized SMS offers to engage customers effectively.",
  },
  {
    id: 2,
    title: "Financial Services & Banks",
    description:
      "Banks and financial institutions can enhance customer communication through secure OTPs, transaction alerts, and marketing campaigns.",
  },
  {
    id: 3,
    title: "Healthcare & Telemedicine",
    description:
      "Hospitals, clinics, and telehealth platforms can send appointment reminders, test reports, and patient notifications via SMS and email.",
  },
  {
    id: 4,
    title: "Educational Institutions",
    description:
      "Schools, universities, and coaching centers can notify students and parents about exams, results, and important announcements.",
  },
  {
    id: 5,
    title: "Travel & Hospitality",
    description:
      "Airlines, hotels, and tour agencies can send booking confirmations, travel alerts, and promotional deals through bulk messaging.",
  },
  {
    id: 6,
    title: "Political & Non-Profit Campaigns",
    description:
      "Political parties and NGOs can use SMS and email to raise awareness, send donation requests, and mobilize supporters for events.",
  },
  {
    id: 7,
    title: "Real Estate Agencies",
    description:
      "Property dealers and real estate firms can reach potential buyers with property listings, open house invitations, and price alerts.",
  },
  {
    id: 8,
    title: "Event Management & Ticketing",
    description:
      "Concert organizers, sports events, and ticketing platforms can notify attendees about event schedules, venue changes, and exclusive offers.",
  },
];

const messagingStrategies = [
  {
    title: "High Deliverability",
    description:
      "Ensure your emails and SMS reach recipients without delays and land in the inbox reliably.",
    points: [
      {
        label: "Optimized Routing",
        example:
          "Ensure your emails and SMS reach recipients without delays through smart message routing.",
      },
      {
        label: "SPF, DKIM & DMARC",
        example:
          "Secure email authentication for improved inbox placement and protection against spoofing.",
      },
    ],
  },
  {
    title: "Scalable Messaging Solutions",
    description:
      "Send messages at scale with robust infrastructure and integrations.",
    points: [
      {
        label: "Bulk Email & SMS",
        example:
          "Send thousands of messages instantly to your target audience.",
      },
      {
        label: "API Integration",
        example:
          "Seamlessly integrate messaging with your CRM, websites, and mobile apps.",
      },
    ],
  },
  {
    title: "Secure & Compliant Communication",
    description:
      "Follow global regulations and respect user preferences for ethical communication.",
    points: [
      {
        label: "GDPR & CAN-SPAM Compliance",
        example:
          "Ensure your messaging practices adhere to global email and SMS regulations.",
      },
      {
        label: "Opt-in & Opt-out Management",
        example:
          "Handle user preferences and unsubscribe requests efficiently.",
      },
    ],
  },
  {
    title: "24/7 Technical Support",
    description:
      "Get expert help anytime to ensure smooth operations and troubleshooting.",
    points: [
      {
        label: "Expert Assistance",
        example:
          "Our support team is available round the clock for any technical queries.",
      },
      {
        label: "Live Chat & Ticket System",
        example:
          "Use live chat or raise tickets for quick and effective resolutions.",
      },
    ],
  },
  {
    title: "Advanced Analytics & Reports",
    description: "Track performance in real-time and make informed decisions.",
    points: [
      {
        label: "Real-Time Tracking",
        example:
          "Monitor email opens, SMS deliveries, and campaign performance.",
      },
      {
        label: "Detailed Reports",
        example:
          "Get insights on bounce rates, click-through rates, and conversions.",
      },
    ],
  },
  {
    title: "Reliable Uptime Guarantee",
    description:
      "Ensure your campaigns are never interrupted with high availability systems.",
    points: [
      {
        label: "99.9% Uptime",
        example: "Execute your email and SMS campaigns without interruption.",
      },
      {
        label: "Global Infrastructure",
        example:
          "Deliver messages quickly with distributed server networks across the globe.",
      },
    ],
  },
  {
    title: "Automated Messaging & Scheduling",
    description:
      "Automate workflows and send messages at the best time for user engagement.",
    points: [
      {
        label: "Drip Campaigns",
        example:
          "Set up automated follow-ups to nurture leads and engage users.",
      },
      {
        label: "Scheduled Messaging",
        example:
          "Plan and send messages at times when your audience is most active.",
      },
    ],
  },
  {
    title: "Custom Messaging Solutions",
    description:
      "Tailored features for enterprises and targeted communication.",
    points: [
      {
        label: "Enterprise-Grade Solutions",
        example:
          "Scalable messaging plans for businesses with high-volume needs.",
      },
      {
        label: "Personalization & Segmentation",
        example:
          "Target users based on demographics, behavior, and preferences.",
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
    title: "Errors in PAN Database",
    objectives: [
      "Inaccuracies in the PAN database, such as incorrect names, addresses, or mismatched details, can result in failed verification attempts. This can cause delays in processes like loan approvals or tax filings.",
    ],
  },
  {
    id: 2,
    title: "Privacy Concerns",
    objectives: [
      "PAN verification involves sensitive personal and financial information. There is a risk of unauthorized access to PAN data, leading to privacy violations or misuse of information.",
    ],
  },
  {
    id: 3,
    title: "Technical Issues",
    objectives: [
      "PAN verification may fail if there is a mismatch between the details provided and the records in the government database or if the verification system is not working properly.",
    ],
  },
];

const methods = [
  {
    icon: <Smartphone className="text-primary w-6 h-6" />,
    title: "SMS-Based Authentication",
    description:
      "OTP sent via SMS to your registered number. Convenient but vulnerable to SIM swapping.",
  },
  {
    icon: <KeyRound className="text-primary w-6 h-6" />,
    title: "Authenticator App",
    description:
      "Use apps like Google Authenticator for time-based OTPs that refresh every 30 seconds.",
  },
  {
    icon: <BellRing className="text-primary w-6 h-6" />,
    title: "Push Notification",
    description:
      "Get a push notification on your phone and approve login requests instantly.",
  },
  {
    icon: <ShieldCheck className="text-primary w-6 h-6" />,
    title: "Hardware Tokens",
    description:
      "Insert a USB security key like YubiKey to complete authentication securely.",
  },
  {
    icon: <Fingerprint className="text-primary w-6 h-6" />,
    title: "Biometric Authentication",
    description:
      "Authenticate using fingerprint, facial recognition, or retina scan.",
  },
];

export default function Sms() {
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
              Bulk Email/SMS Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Bulk Email/SMS
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
            Bulk Email & SMS – Efficient & Scalable Messaging Solutions Product
            Overview:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Bulk Email & SMS platform is a powerful communication solution
            designed for businesses, marketers, and organizations looking to
            reach their audience instantly. Whether you need to send promotional
            campaigns, transactional alerts, or personalized messages, our
            platform offers high deliverability and scalability. With advanced
            automation, real-time analytics, and integration with multiple APIs,
            our messaging service ensures that your emails and SMS reach the
            right people at the right time. We provide secure, GDPR-compliant
            communication with features like contact segmentation, scheduled
            messaging, and AI-driven insights.
          </motion.p>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-background to-background/80 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              Key Features of Bulk Email & SMS:
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              SEO is the practice of optimizing a website to improve its
              visibility on search engine results pages (SERPs), such as Google,
              Bing, and Yahoo. The goal of SEO is to increase organic (non-paid)
              traffic to a website by ensuring that it ranks higher for relevant
              keywords.
            </motion.p>{" "}
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {messagingStrategies.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="relative bg-secondary/30 border-border/30 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-4 text-center">
                        {item.description}
                      </p>

                      {/* Points */}
                      {item.points?.length > 0 && (
                        <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                          {item.points.map((point, idx) => (
                            <li key={idx}>
                              <span className="text-white font-medium">
                                {point.label}:
                              </span>{" "}
                              {point.example}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b to-background/80 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              Why Choose Our Bulk Email & SMS Services?
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {messagingSolutions.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="relative bg-secondary/30 border-border/30 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>

                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Dynamic Fields Rendering */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        {item.process}
                      </p>

                      <p className="text-muted-foreground text-base leading-relaxed">
                        <span className="text-white font-semibold">
                          Example:
                        </span>{" "}
                        {item.example}
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
            PAN verification is an essential process that ensures compliance
            with tax laws, helps prevent fraud, and promotes transparency in
            financial transactions. It provides a secure and reliable method for
            identifying individuals and businesses and plays a critical role in
            KYC compliance, tax evasion prevention, and regulatory enforcement.
            The benefits of PAN verification, such as enhanced security, quicker
            processes, and improved financial transparency, make it an integral
            part of the financial and legal ecosystem in India. By verifying PAN
            numbers, businesses, government agencies, and financial institutions
            can ensure that transactions are legitimate and in compliance with
            regulations.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
