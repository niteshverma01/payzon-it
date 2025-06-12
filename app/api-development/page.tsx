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
  BookText,
  ShieldCheck,
  CheckCircle,
  BarChart3,
  RefreshCw,
  CreditCard,
  Handshake,
  Bell,
  Focus,
  CircleCheck,
  Wallet,
  Shield,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";
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
    title: "API Types",
    icon: Layers,
    description:
      "Different types of APIs cater to different needs. Here's a quick look:",
    items: [
      {
        label: "RESTful APIs:",
        text: "Simple, scalable, and use HTTP methods to perform CRUD operations.",
      },
      {
        label: "SOAP APIs:",
        text: "Strict protocol-based APIs for enterprise applications requiring high security.",
      },
      {
        label: "GraphQL APIs:",
        text: "Flexible, query-based APIs that allow clients to request only necessary data.",
      },
      {
        label: "WebSocket APIs:",
        text: "Two-way real-time communication for applications like chat or stock tracking.",
      },
    ],
  },
  {
    title: "API Architecture and Design",
    icon: Code2,
    description:
      "When building an API, keep scalability, maintainability, and security in mind:",
    items: [
      {
        label: "Endpoints:",
        text: "URLs where users interact with the API.",
      },
      {
        label: "Methods:",
        text: "HTTP methods (GET, POST, PUT, DELETE) to interact with data.",
      },
      {
        label: "Request and Response Formats:",
        text: "Typically JSON or XML data exchange formats.",
      },
      {
        label: "Authentication & Authorization:",
        text: "Secure APIs via OAuth, API keys, or JWT.",
      },
    ],
  },
  {
    title: "API Documentation",
    icon: BookText,
    description: "Documentation makes it easier for smooth integration.",
    items: [
      {
        label: "Endpoint Descriptions:",
        text: "Clear details such as base URL, path, and methods.",
      },
      {
        label: "Request and Response Examples:",
        text: "Show sample payloads for clarity.",
      },
      {
        label: "Status Codes:",
        text: "Include explanations of all relevant HTTP status codes.",
      },
      {
        label: "Code Samples:",
        text: "Provide for common languages and usage guidelines.",
      },
    ],
  },
  {
    title: "Security and Authentication",
    icon: ShieldCheck,
    description: "Common practices for securing APIs include:",
    items: [
      {
        label: "API Keys:",
        text: "Unique keys for secure access.",
      },
      {
        label: "OAuth:",
        text: "Allows token-based user authentication.",
      },
      {
        label: "HTTPS:",
        text: "Encrypts all communications between client and server.",
      },
      {
        label: "Rate Limiting:",
        text: "Controls the number of requests to a certain time frame.",
      },
    ],
  },
  {
    title: "API Testing",
    icon: CheckCircle,
    description: "Testing ensures the API is working correctly.",
    items: [
      {
        label: "Unit Testing:",
        text: "Tests individual functions.",
      },
      {
        label: "Integration Testing:",
        text: "Ensures proper working of modules together.",
      },
      {
        label: "Load Testing:",
        text: "Simulates heavy traffic to test scalability.",
      },
      {
        label: "Security Testing:",
        text: "Identifies vulnerabilities and ensures security.",
      },
    ],
  },
  {
    title: "API Gateway",
    icon: Network,
    description: "An API gateway handles requests and enforces API policies.",
    items: [
      {
        label: "Request Routing:",
        text: "Routes client requests to appropriate services.",
      },
      {
        label: "Rate Limiting & Quotas:",
        text: "Controls traffic and prevents abuse.",
      },
      {
        label: "Authentication:",
        text: "Manages access control and security.",
      },
      {
        label: "Caching:",
        text: "Improves response time and reduces load.",
      },
    ],
  },
  {
    title: "API Monitoring and Analytics",
    icon: BarChart3,
    description: "Monitor and analyze API usage and performance.",
    items: [
      {
        label: "Logs:",
        text: "Track API behavior and detect issues.",
      },
      {
        label: "Analytics:",
        text: "Gain insights into how the APIs are used.",
      },
      {
        label: "Alerts:",
        text: "Notify when performance drops or failures occur.",
      },
      {
        label: "Reports:",
        text: "Summarize API performance and diagnosis insights.",
      },
    ],
  },
  {
    title: "Versioning",
    icon: RefreshCw,
    description: "Maintain backward compatibility as APIs evolve.",
    items: [
      {
        label: "URI Versioning:",
        text: "e.g., /api/v1/resource",
      },
      {
        label: "Query Parameter Versioning:",
        text: "e.g., /resource?version=1",
      },
      {
        label: "Header Versioning:",
        text: "e.g., Accept: application/vnd.api+json; version=1",
      },
      {
        label: "Deprecation Policy:",
        text: "Inform users before removing old versions.",
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
    title: "Enhanced Integration and Interoperability",
    Objective:
      "APIs allow different applications to communicate with each other, regardless of their underlying technology stacks. This makes it easy to integrate third-party services, expand functionality, or connect different systems.",
  },
  {
    id: 2,
    title: " Scalability",
    Objective:
      " APIs can enable businesses to scale their systems by allowing external services or applications to interact with their backend without the need for direct code changes, promoting flexibility in growth.",
  },
  {
    id: 3,
    title: " Faster Development",
    Objective:
      "By offering pre-built services, APIs allow developers to focus on specific areas of an application rather than reinventing the wheel. This accelerates development timelines and encourages innovation",
  },
  {
    id: 4,
    title: " Security and Access Control",
    Objective:
      "APIs provide a structured way to manage access to resources. Authentication and authorization mechanisms ensure that only authorized users or systems can access sensitive data or functionality.",
  },
  {
    id: 5,
    title: "Reusability",
    Objective:
      "Well-designed APIs enable reuse of business logic and services across multiple applications, promoting modularity and reducing duplication of effort.",
  },
  {
    id: 6,
    title: "Ecosystem Growth",
    Objective:
      "Public APIs allow businesses to open up their platforms for developers to create new applications or services, thereby growing their ecosystem and driving innovation in the community.",
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

export default function ApiDevelopment() {
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
            API Development Description :-
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            API Development refers to the process of designing and building
            Application Programming Interfaces (APIs) that enable different
            software applications to communicate and interact with each other.
            An API defines the methods and data formats that applications use to
            request and exchange information, allowing systems to integrate
            seamlessly, share functionality, and operate together efficiently.
            APIs are critical to modern software ecosystems, serving as the
            building blocks for connecting services, data, and systems, whether
            it's within a single application or across distributed platforms.
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
              Key Aspects of API Development:
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
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        {feature.description}
                      </p>
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
      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 from-background  overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Benefits of API Development:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground  mx-auto text-lg md:text-xl leading-relaxed"
          >
            Explore the different blockchain models used in development, from
            public to private, and more.
          </motion.p>
        </div>
        <section className="py-20 px-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {Stages.map((Stage, index) => {
                return (
                  <motion.div>
                    <Card className="bg-background/50 border-border/50 h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                      <div
                        className={` inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                      <CardHeader className="relative z-10">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-xl text-primary">
                            {Stage.id}
                          </span>
                          <CardTitle className="text-xl ">
                            {Stage.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {Stage.Objective}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <section className=" py-24 px-6 md:px-12  to-background/80 overflow-hidden">
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

   
    </div>
  );
}
