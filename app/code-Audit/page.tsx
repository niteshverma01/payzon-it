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
  LayoutTemplate,
  HeartPulse,
  Newspaper,
  UtensilsCrossed,
  GraduationCap,
} from "lucide-react";

const gamingFintechs = [
  {
    title: "E-commerce Website (Amazon)",
    icon: ShoppingCart,
    process:
      "Amazon's website had slow load times during peak seasons, leading to a poor customer experience and potential loss of sales.",
    auditFindings:
      "A website audit revealed several performance bottlenecks, including large product images and unnecessary scripts loading on the home page.",
    solution:
      "Amazon's development team compressed images, optimized server-side code, and introduced a content delivery network (CDN) to serve assets faster.",
    outcome:
      "Website speed improved, resulting in a better user experience, higher customer retention, and increased sales.",
  },
  {
    title: "News Website (BBC)",
    icon: Newspaper,
    process:
      "The BBC's website was experiencing security vulnerabilities and slow performance, impacting user engagement and trust.",
    auditFindings:
      "The audit identified unencrypted data transfers, broken links, outdated plugins, and lack of proper SSL certificates.",
    solution:
      "They implemented spaner SSL encryption, fixed broken links, updated all plugins, and conducted a thorough vulnerability scan to address security flaws.",
    outcome:
      "With enhanced security and improved website performance, the BBC's website saw increased traffic and higher user satisfaction.",
  },
  {
    title: "SaaS Website (HubSpot)",
    icon: LayoutTemplate,
    process:
      "HubSpot wanted to optimize its website to increase free trial signups and improve SEO rankings for their inbound marketing tools.",
    auditFindings:
      "The audit highlighted issues with meta tags, content duplication, slow page load times, and a weak internal linking structure.",
    solution:
      "They improved content quality, optimized metadata for better SEO performance, and enhanced the site’s speed through caching and image optimization.",
    outcome:
      "HubSpot saw an increase in free trial signups by 25% and a significant improvement in their organic search rankings.",
  },
  {
    title: "Healthcare Website (Cleveland Clinic)",
    icon: HeartPulse,
    process:
      "The Cleveland Clinic website had poor navigation and lacked mobile optimization, leading to a decrease in appointment bookings.",
    auditFindings:
      "A usability audit showed that the website had a cluttered design and lacked clear calls-to-action. The mobile experience was also difficult to navigate.",
    solution:
      "The design was revamped to focus on clean navigation and mobile optimization. Prominent CTAs were placed to guide users to book appointments easily.",
    outcome:
      "After the changes, the Cleveland Clinic reported a 30% increase in appointment bookings and improved patient satisfaction.",
  },
  {
    title: "Local Business Website (Restaurant)",
    icon: UtensilsCrossed, // You can import or replace with a relevant icon
    process:
      "A local restaurant website had low online visibility, leading to reduced foot traffic and online orders.",
    auditFindings:
      "The audit identified poor local SEO practices, such as missing Google My Business listing, lack of local keywords, and outdated menu content.",
    solution:
      "The restaurant updated its Google My Business profile, optimized content for local SEO, and ensured the menu was always up to date on the site.",
    outcome:
      "The restaurant experienced a 40% increase in local search visibility and a 20% growth in online orders.",
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
    title: "Improving Website Performance",
    objectives: [
      "Over time, websites can become slow or inefficient due to outdated plugins, large image files, or poor server configurations.",
      "A website audit helps pinpoint performance bottlenecks.",
    ],
  },
  {
    id: 2,
    title: "Enhancing SEO Rankings",
    objectives: [
      "Search engines like Google continuously change their algorithms.",
      "An audit helps ensure your website aligns with the latest SEO best practices and improves visibility.",
    ],
  },
  {
    id: 3,
    title: "Identifying Security Vulnerabilities",
    objectives: [
      "A website audit can uncover weak points such as outdated SSL certificates or missing software patches.",
      "This helps prevent potential cyber threats.",
    ],
  },
  {
    id: 4,
    title: "Ensuring Compliance",
    objectives: [
      "Websites must adhere to regulations like GDPR and accessibility standards.",
      "A website audit ensures legal and regulatory compliance is maintained.",
    ],
  },
  {
    id: 5,
    title: "Improving User Experience",
    objectives: [
      "An audit evaluates navigation, mobile responsiveness, content readability, and overall UX.",
      "This helps make the site more intuitive and engaging for users.",
    ],
  },
  {
    id: 6,
    title: "Improving Conversion Rates",
    objectives: [
      "Audits identify obstacles like poor CTAs, slow page loads, or confusing layouts.",
      "Fixing these can significantly boost user conversion and sales.",
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

export default function COdeAudit() {
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
              Code Audit Security Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Code Audit Security
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
            Website Audit: Need, Benefits, and Live Use Case Examples
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            A website audit is a comprehensive review of a website’s
            performance, usability, and overall effectiveness. The audit process
            helps identify issues related to technical SEO, user experience
            (UX), content quality, security, speed, and more. By evaluating all
            aspects of the website, businesses can optimize their site for
            better search engine rankings, enhanced user experience, and
            improved conversion rates.
          </motion.p>
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
            Need for a Website Audit
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
              Benefits of a Website Audit
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
              Real-World Use Case Examples of Website Audits
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
                          Challenge:
                        </span>{" "}
                        {item.process}
                      </p>
                      {item.auditFindings && (
                        <p className="text-muted-foreground text-base leading-relaxed mb-2">
                          <span className="text-white font-semibold">
                            Audit Findings:
                          </span>{" "}
                          {item.auditFindings}
                        </p>
                      )}
                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Solution:
                        </span>{" "}
                        {item.solution}
                      </p>
                      {item.outcome && (
                        <p className="text-muted-foreground text-base leading-relaxed">
                          <span className="text-white font-semibold">
                            Outcome:
                          </span>{" "}
                          {item.outcome}
                        </p>
                      )}
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
            A website audit is a crucial process for maintaining a website's
            effectiveness and ensuring it performs optimally. By performing
            regular audits, businesses can stay ahead of potential issues,
            improve their SEO rankings, optimize user experience, secure
            sensitive data, and increase conversion rates. The insights from a
            detailed website audit lead to better website performance, higher
            customer satisfaction, and ultimately, increased revenue. Whether
            it's a large e-commerce platform like Amazon, a SaaS business like
            HubSpot, or a local restaurant, every business can benefit from
            periodic website audits to maintain competitive advantage and ensure
            a seamless online experience.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
