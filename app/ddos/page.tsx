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
  Brain,
  Wallet,
  Activity,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";

import { Smartphone, ShieldCheck } from "lucide-react";

import { KeyRound, BellRing, Fingerprint } from "lucide-react";
import { Server, LifeBuoy, Globe, Share2 } from "lucide-react";

const gamingFintechs = [
  {
    title: "Traffic Filtering and Rate Limiting",
    icon: ShieldCheck,
    process:
      "Traffic Filtering: Use firewalls, Intrusion Prevention Systems (IPS), and specialized DDoS protection devices to filter malicious traffic before it reaches the target server.",
    auditFindings:
      "Rate Limiting: Apply rate-limiting rules to restrict the number of requests a user or IP address can make in a given time frame. This prevents overloading the server by a single attacker or botnet.",
    solution:
      "Example: Cloudflare and Akamai provide DDoS protection services that automatically detect and filter out malicious traffic using traffic filtering rules and rate-limiting.",
    outcome: "",
  },
  {
    title: "Content Delivery Networks (CDNs)",
    icon: Server,
    process:
      "CDN Distribution: A CDN distributes web content across multiple geographically dispersed servers, effectively mitigating DDoS attacks by offloading traffic and reducing the load on the main server.",
    auditFindings:
      "Traffic Load Absorption: CDNs help absorb and distribute the traffic load, making it difficult for attackers to overwhelm the network.",
    solution:
      "Example: Cloudflare’s CDN is a popular tool that not only helps with faster delivery of content but also provides robust DDoS protection by distributing incoming traffic across their global network and filtering out malicious requests.",
    outcome: "",
  },
  {
    title: "Scrubbing Centers",
    icon: LifeBuoy,
    process:
      "Traffic Scrubbing: Scrubbing centers are remote locations that 'scrub' incoming traffic by filtering out malicious data and only sending legitimate traffic to the target server.",
    auditFindings:
      "Collaboration with Hosting Provider: This solution works in collaboration with your hosting provider or CDN.",
    solution:
      "Example: Prolexic (an Akamai company) operates scrubbing centers that provide a comprehensive DDoS mitigation service by cleaning the incoming traffic before it reaches the client’s infrastructure.",
    outcome: "",
  },
  {
    title: "Geo-Blocking",
    icon: Globe,
    process:
      "Geographic Restrictions: This involves blocking traffic from specific geographic locations or IP address ranges that are not relevant to your business or customer base.",
    auditFindings:
      "Attack Surface Reduction: By blocking traffic from regions known for launching DDoS attacks, you can reduce the attack surface and prevent some attacks.",
    solution:
      "Example: Amazon Web Services (AWS) allows you to configure Geo-blocking using AWS WAF (Web Application Firewall) to block traffic from regions that you don't typically serve.",
    outcome: "",
  },
  {
    title: "Anycast Routing",
    icon: Share2,
    process:
      "Distributed Traffic Routing: Anycast is a routing technique where incoming traffic is distributed to multiple locations that are geographically dispersed.",
    auditFindings:
      "Traffic Load Dispersion: This helps to mitigate DDoS attacks by dispersing traffic load, preventing it from overwhelming a single point of failure.",
    solution:
      "Example: Google Cloud Platform uses Anycast for its global load balancing to distribute incoming traffic across different servers worldwide and absorb traffic spikes, including DDoS attacks.",
    outcome: "",
  },
  {
    title: "Web Application Firewalls (WAFs)",
    icon: Activity,
    process:
      "Protection at Layer 7: A WAF is specifically designed to protect web applications from attacks that target vulnerabilities at the application layer (Layer 7).",
    auditFindings:
      "Blocking Attack Vectors: WAFs can block common attack vectors like SQL injection, cross-site scripting (XSS), and HTTP flood DDoS attacks.",
    solution:
      "Example: AWS WAF protects web applications from application layer DDoS attacks and malicious bots by filtering out harmful traffic based on predefined rules.",
    outcome: "",
  },
  {
    title: "DDoS Mitigation Services",
    icon: Activity,
    process:
      "Proactive DDoS Detection: Many specialized services are available to help mitigate DDoS attacks.",
    auditFindings:
      "Real-Time Response: These providers often offer proactive DDoS detection and mitigation services that respond to attacks in real time.",
    solution:
      "Examples: Cloudflare offers real-time DDoS protection for websites. Imperva Incapsula provides cloud-based DDoS protection using advanced algorithms.",
    outcome: "",
  },
  {
    title: "AI-Based DDoS Protection",
    icon: Brain,
    process:
      "Machine Learning Algorithms: AI and ML are used to detect and mitigate DDoS attacks more effectively.",
    auditFindings:
      "Accurate Attack Detection: AI systems can differentiate between legitimate traffic and DDoS traffic more accurately.",
    solution:
      "Example: F5 Networks provides AI-powered DDoS protection that analyzes traffic patterns and blocks malicious requests in real time.",
    outcome: "",
  },
  {
    title: "Redundancy and Load Balancing",
    icon: Brain,
    process:
      "Infrastructure Redundancy: Redundant systems and load balancing ensure that your infrastructure can handle traffic surges.",
    auditFindings:
      "Traffic Distribution: By distributing traffic across multiple servers, you can mitigate DDoS impact.",
    solution:
      "Example: Google Cloud Load Balancing automatically distributes traffic, helping withstand high load and DDoS attacks.",
    outcome: "",
  },
];

const Services = [
  {
    title: "Better SEO Performance",
    description:
      "Identifying technical SEO issues like broken links, duplicate content, and incorrect meta tags can improve rankings in search engine results pages (SERPs).",
  },
  {
    title: "Enhanced Security",
    description:
      "Auditing security vulnerabilities helps safeguard sensitive data (e.g., customer information, payment details) and prevents hacking attempts or data breaches.",
  },
  {
    title: "Increased Website Speed",
    description:
      "Website speed is a ranking factor for search engines and a critical element of user experience. An audit helps identify performance issues and recommends improvements like image compression or reducing server response time.",
  },
  {
    title: "Mobile Optimization",
    description:
      "With the majority of internet traffic coming from mobile devices, ensuring that a website is mobile-responsive is essential for retaining users and improving SEO.",
  },
  {
    title: "Improved User Experience",
    description:
      "A website audit helps improve navigation, usability, and design, which translates into a better user experience and higher user engagement.",
  },
  {
    title: "Cost-Effective Strategy for Website Improvement",
    description:
      "Rather than guessing which areas need improvement, a detailed website audit provides data-driven insights to prioritize changes that will provide the highest ROI.",
  },
];

const features = [
  {
    title: "Technical SEO Audit",
    items: [
      {
        label: "Site Speed and Performance Analysis",
        text: "Use tools like Google PageSpeed Insights to identify slow-loading pages and suggest improvements.",
      },
      {
        label: "Mobile Friendliness",
        text: "Check for mobile optimization using Google’s Mobile-Friendly Test.",
      },
      {
        label: "Indexing and Crawlability",
        text: "Ensure the site is indexed correctly by search engines and there are no crawl issues.",
      },
      {
        label: "Broken Links and Errors",
        text: "Use tools like Screaming Frog or Ahrefs to identify 404 errors, redirects, and broken internal or external links.",
      },
    ],
  },
  {
    title: "On-Page SEO Audit",
    items: [
      {
        label: "Keyword Optimization",
        text: "Evaluate whether the website’s pages are optimized for the right keywords.",
      },
      {
        label: "Meta Tags and Descriptions",
        text: "Ensure that meta titles and descriptions are optimized, unique, and relevant.",
      },
      {
        label: "Image Optimization",
        text: "Ensure all images are properly tagged with alt text and optimized for fast loading.",
      },
    ],
  },
  {
    title: "Content Audit",
    items: [
      {
        label: "Content Quality",
        text: "Check for duplicate content, outdated information, and opportunities for content updates or new content creation.",
      },
      {
        label: "Internal Linking",
        text: "Ensure the site has a strong internal linking structure that facilitates easy navigation and enhances SEO.",
      },
    ],
  },
  {
    title: "Security Audit",
    items: [
      {
        label: "SSL Certificate Check",
        text: "Ensure the website has an active SSL certificate (HTTPS) for secure connections.",
      },
      {
        label: "Vulnerability Scan",
        text: "Run scans to detect vulnerabilities such as outdated plugins or insecure web application code.",
      },
    ],
  },
  {
    title: "User Experience (UX) Audit",
    items: [
      {
        label: "Navigation and Usability",
        text: "Evaluate how easy it is for users to find information, make purchases, or complete other desired actions.",
      },
      {
        label: "CTAs (Calls-to-Action)",
        text: "Ensure buttons and links are prominent and effective in guiding users to complete actions (e.g., purchase, sign up).",
      },
      {
        label: "Accessibility",
        text: "Ensure the website is accessible to users with disabilities (e.g., alt text for images, color contrast, keyboard navigation).",
      },
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO) Audit",
    items: [
      {
        label: "Conversion Funnel Analysis",
        text: "Evaluate how well your website moves visitors from awareness to purchase. Look for barriers that may prevent users from completing purchases or signing up.",
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
    title: "Volume-Based Attacks",
    objectives: [
      "These attacks focus on overwhelming the target with massive amounts of traffic, such as UDP floods or ICMP floods.",
    ],
    example:
      "A botnet floods a web server with billions of requests, causing it to exceed its bandwidth limit and crash.",
  },
  {
    id: 2,
    title: "Protocol-Based Attacks",
    objectives: [
      "These attacks aim to consume server resources or network devices, such as firewalls and load balancers, by sending malformed packets.",
    ],
    example:
      "An SYN flood sends a series of connection requests, leaving half-open connections that cause the server to exhaust its resources.",
  },
  {
    id: 3,
    title: "Application Layer Attacks",
    objectives: [
      "These attacks target specific application services or processes, like HTTP requests, to overwhelm a server with complex, resource-intensive traffic.",
    ],
    example:
      "An attacker sends a large number of seemingly legitimate HTTP requests to a website’s application, consuming server resources and leading to slowdowns or crashes.",
  },
];

const ddosCaseStudies = [
  {
    title: "GitHub DDoS Attack (2018)",
    incident:
      "GitHub was the target of a massive DDoS attack in 2018, peaking at 1.35 terabits per second. It was one of the largest DDoS attacks ever recorded.",
    solution:
      "GitHub used Cloudflare’s DDoS protection services, which absorbed and filtered out malicious traffic.",
    outcome:
      "GitHub experienced minimal downtime and avoided major disruptions.",
    line: "GitHub leveraged Cloudflare to mitigate the attack.",
  },
  {
    title: "AWS DDoS Attack (2020)",
    incident:
      "AWS faced a large-scale DDoS attack in 2020, reaching 2.3 terabits per second, the largest DDoS attack recorded at the time.",
    solution:
      "AWS utilized AWS Shield and Amazon CloudFront to provide automatic detection, mitigation, and traffic distribution.",
    outcome:
      "AWS absorbed the traffic and protected customer applications without significant disruptions.",
    line: "Protected by AWS Shield and CloudFront.",
  },
  {
    title: "Dyn DNS DDoS Attack (2016)",
    incident:
      "The Dyn DNS attack in 2016 took down major websites such as Twitter, Spotify, and Reddit due to DNS service disruptions.",
    solution:
      "Dyn used scrubbing services and rate-limiting techniques to mitigate the attack.",
    outcome:
      "The attack was mitigated successfully after some downtime, improving future defenses.",
    line: "Dyn improved defense after the attack.",
  },
];

export default function Ddos() {
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
              DDOS Security Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              DDOS Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              DDoS Protection and Solutions
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
            DDoS Protection and Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            A DDoS (Distributed Denial of Service) attack is a malicious attempt
            to disrupt the normal traffic of a targeted server, service, or
            network by overwhelming the target or its infrastructure with a
            flood of internet traffic. DDoS attacks are often conducted by large
            groups of compromised computers, often referred to as a botnet,
            which work in unison to send massive amounts of traffic to a single
            target, causing it to become slow, unresponsive, or even crash
            entirely. DDoS attacks can cause significant disruptions, financial
            losses, and reputational damage to businesses. As such, implementing
            robust DDoS protection is essential for organizations that rely on
            their online presence for business operations.
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
              Key Components of a Website Audit
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
      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Understanding DDoS Attacks
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
                      <CardDescription className="text-base">
                        {Stage.example}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
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
              DDoS Protection Solutions
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {gamingFintechs.map((item, index) => {
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
                        <span className="text-white font-semibold">
                          Traffic Filtering: :
                        </span>{" "}
                        {item.process}
                      </p>
                      {item.auditFindings && (
                        <p className="text-muted-foreground text-base leading-relaxed mb-2">
                          <span className="text-white font-semibold">
                            Rate Limiting
                          </span>{" "}
                          {item.auditFindings}
                        </p>
                      )}
                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Example:
                        </span>{" "}
                        {item.solution}
                      </p>
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
              DDoS Protection Solutions
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ddosCaseStudies.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="relative bg-secondary/30 border-border/30 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Dynamic Fields Rendering */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Incident :
                        </span>{" "}
                        {item.incident}
                      </p>

                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Solution :
                        </span>{" "}
                        {item.solution}
                      </p>

                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Outcome:
                        </span>{" "}
                        {item.outcome}
                      </p>
                      <p className="text-orange-100 text-sm leading-relaxed mb-2">
                        {item.line}
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
            DDoS attacks are a growing threat to online businesses, and having
            effective DDoS protection solutions in place is essential for
            mitigating these risks. Solutions like traffic filtering, rate
            limiting, CDNs, scrubbing centers, WAFs, AI-based protection, and
            third-party DDoS mitigation services offer multiple layers of
            defense to safeguard websites and online services from disruption.
            By employing a combination of these tools, organizations can
            minimize the impact of DDoS attacks, reduce downtime, and ensure
            business continuity in the face of malicious cyber threats.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
