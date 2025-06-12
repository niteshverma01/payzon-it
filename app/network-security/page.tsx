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
  Banknote,
  HeartPulse,
  Newspaper,
  Users,
  GraduationCap,
} from "lucide-react";

import { Server, Gauge, Layers, Headset, Globe, Settings2 } from "lucide-react";

const hostingFeatures = [
  {
    title: "Comprehensive Hosting Services",
    icon: Server,
    description:
      "Our web hosting network provides reliable hosting solutions, including shared, VPS, dedicated, and cloud hosting, catering to businesses of all sizes.",
  },
  {
    title: "High-Speed Performance",
    icon: Gauge,
    description:
      "Our hosting infrastructure is optimized for lightning-fast speeds, ensuring quick loading times and a seamless browsing experience.",
  },
  {
    title: "Scalable and Flexible",
    icon: Layers,
    description:
      "Easily scale your hosting plan as your business grows, with flexible options to upgrade bandwidth, storage, and processing power.",
  },
  {
    title: "Reliable & Secure",
    icon: ShieldCheck,
    description:
      "With advanced DDoS protection, SSL encryption, and automated backups, our hosting solutions guarantee the highest level of security.",
  },
  {
    title: "24/7 Customer Support",
    icon: Headset,
    description:
      "Our expert support team is available around the clock to help you with any hosting-related queries or technical issues.",
  },
  {
    title: "Global Data Centers",
    icon: Globe,
    description:
      "Our hosting network is powered by strategically located data centers worldwide, ensuring maximum uptime and reliability.",
  },
  {
    title: "Customizable Hosting Plans",
    icon: Settings2,
    description:
      "Tailor your hosting plan to meet your specific needs with flexible resources, add-ons, and customization options.",
  },
];

const Services = [
  {
    title: "User Inconvenience:",
    description:
      "Some users find the process of entering a second factor inconvenient, especially when using SMS codes or apps that require manual entry.",
  },
  {
    title: "Lost or Stolen Devices:",
    description:
      "If a user loses their mobile device or security token, they may be locked out of their account until they verify their identity through other means.",
  },
  {
    title: "Phishing Attacks Targeting 2FA:",
    description:
      "Phishing attacks can sometimes trick users into entering their second factor on a fake website, though this can be mitigated by using apps like Google Authenticator or U2F keys",
  },
];
const features = [
  {
    title: "High-Speed Performance",
    items: [
      {
        label: "Optimized Servers",
        text: "Our web hosting network ensures lightning-fast speed with SSD storage and high-performance processors.",
      },
      {
        label: "CDN Integration",
        text: "Reduce latency and improve page load times with a globally distributed content delivery network.",
      },
    ],
  },
  {
    title: "Scalable Hosting Solutions",
    items: [
      {
        label: "Shared, VPS & Dedicated Hosting",
        text: "Choose from flexible hosting options based on your website’s needs.",
      },
      {
        label: "Cloud Hosting",
        text: "Seamlessly scale your resources with cloud-based hosting for high-traffic websites.",
      },
    ],
  },
  {
    title: "Secure Hosting Environment",
    items: [
      {
        label: "SSL & DDoS Protection",
        text: "Safeguard your website with SSL encryption and advanced DDoS protection.",
      },
      {
        label: "Firewall & Malware Scanning",
        text: "Ensure secure hosting with proactive security measures.",
      },
    ],
  },
  {
    title: "24/7 Technical Support",
    items: [
      {
        label: "Expert Assistance",
        text: "Our support team is available 24/7 to resolve any hosting issues.",
      },
      {
        label: "Live Chat & Ticket System",
        text: "Get instant help through multiple support channels.",
      },
    ],
  },
  {
    title: "Easy Website Management",
    items: [
      {
        label: "cPanel & Plesk",
        text: "User-friendly control panels for easy website and server management.",
      },
      {
        label: "One-Click Installers",
        text: "Quickly install WordPress, Joomla, and other CMS platforms.",
      },
    ],
  },
  {
    title: "Reliable Uptime Guarantee",
    items: [
      {
        label: "99.9% Uptime SLA",
        text: "Keep your website online with our high-availability infrastructure.",
      },
      {
        label: "Multiple Data Centers",
        text: "Host your site in globally distributed data centers for better redundancy.",
      },
    ],
  },
  {
    title: "Automated Backups & Recovery",
    items: [
      {
        label: "Daily Backups",
        text: "Prevent data loss with automatic daily backups.",
      },
      {
        label: "Disaster Recovery",
        text: "Restore your website quickly in case of any failures or cyber-attacks.",
      },
    ],
  },
  {
    title: "Custom Hosting Solutions",
    items: [
      {
        label: "Enterprise Solutions",
        text: "Tailored hosting plans for businesses with complex needs.",
      },
      {
        label: "Developer-Friendly",
        text: "Full root access, SSH, Git integration, and staging environments.",
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
    title: "Web Hosting Providers",
    objectives: [
      "Companies offering web hosting services can utilize our platform to manage customer accounts, hosting plans, and domain registrations seamlessly.",
    ],
  },
  {
    id: 2,
    title: "Cloud Service Providers",
    objectives: [
      "Enable businesses to deploy, manage, and scale cloud-based applications with a reliable and secure hosting infrastructure.",
    ],
  },
  {
    id: 3,
    title: "Data Centers & Infrastructure Management",
    objectives: [
      "Organizations managing large-scale data centers can streamline resource allocation, server monitoring, and client support using our platform.",
    ],
  },
  {
    id: 4,
    title: "Enterprise IT Solutions",
    objectives: [
      "Businesses requiring robust IT infrastructure can use our hosting solutions to ensure high performance, security, and scalability.",
    ],
  },
  {
    id: 5,
    title: "Startups & Developers",
    objectives: [
      "New businesses and independent developers can quickly deploy websites and applications with our flexible and cost-effective hosting solutions.",
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

export default function NetworkSecurity() {
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
              Network Security Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Network Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
            >
              Empowering Your Network Future
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
            Web Hosting Network – Reliable & Secure Hosting Solutions Product
            Overview:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Web Hosting Network is a robust, scalable platform designed to
            provide seamless hosting solutions for businesses, developers, and
            individuals. Whether you're running a personal blog, an e-commerce
            store, or a large enterprise website, our hosting services offer
            speed, security, and reliability. <br />
            With high-performance servers, global data center coverage, and
            99.9% uptime, our Web Hosting Network ensures that your website
            remains online and responsive. We provide secure hosting with SSL
            encryption, DDoS protection, automatic backups, and easy scalability
            to accommodate growing traffic and resource needs. <br /> Our
            platform supports multiple hosting options, including shared
            hosting, VPS, dedicated servers, and cloud hosting, allowing users
            to choose the best solution for their needs. With 24/7 technical
            support and user-friendly control panels, managing your web hosting
            has never been easier.
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
              Key Features of Web Hosting Network:
            </motion.h2>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="relative bg-secondary/30 border border-border/30 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-2 list-disc">
                      {feature.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground  text-sm leading-relaxed"
                        >
                          <span className="text-primary font-semibold">
                            {item.label}:
                          </span>{" "}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Why Choose Our Web Hosting Network?
            </motion.h2>
          </div>

          {/* Features Grid */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hostingFeatures.map((hostingFeature, index) => {
              const IconComponent = hostingFeature.icon;
              return (
                <motion.div
                  key={hostingFeature.title}
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
                        {hostingFeature.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {hostingFeature.description}
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
            Use Cases{" "}
          </motion.h2>
        </div>

        <section className="py-20 px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
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
                       
                        {Stage.objectives}
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
            Networking plays a crucial role in web hosting by ensuring seamless
            communication between servers, users, and the internet. A
            well-structured network enhances website performance, security, and
            reliability. Key networking components in web hosting include data
            centers, content delivery networks (CDNs), DNS, and load balancers,
            all of which contribute to efficient data transfer and uptime.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
