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

import {
  Search,
  ListFilter,
  HandCoins,
  LayoutTemplate,
  Tag,
  Megaphone,
  RefreshCw,
} from "lucide-react";

const messagingSolutions = [
  {
    title: "Influencers and Content Creators",
    process:
      "Verified badges help influencers build credibility, increase trust with followers, and attract better brand deals and collaborations.",
  },
  {
    title: "Businesses and Brands",
    process:
      "Local businesses and e-commerce brands can enhance visibility, gain customer trust, and prevent impersonation with verified profiles.",
  },
  {
    title: "Public Figures and Celebrities",
    process:
      "Meta Verified protects public personalities from impersonation, ensuring fans and followers engage with genuine, authorized accounts.",
  },
  {
    title: "Customer Service and Large-Scale Enterprises",
    process:
      "Verified status adds professionalism to customer support accounts, reducing fraud risk and improving user confidence in online interactions.",
  },
];
const Eligibilities = [
  {
    title: "Eligibility",
    process:
      "To be eligible for Meta Verified, users must meet certain requirements, such as being a real person, a public figure, a business, or an organization. You’ll need to submit government-issued ID to prove your identity, and the account should be active and in good standing.",
  },
  {
    title: "Pricing",
    process:
      "The subscription cost of Meta Verified can vary by region, but it generally involves a monthly fee. As of now, it’s typically around $11.99 per month if subscribed through a web browser, and slightly higher through mobile apps (e.g., $14.99 per month via iOS or Android). Pricing may differ based on the country and any ongoing promotional offers",
  },
 
];
const Services = [
  {
    id: 1,
    title: "Identity Verification",
    description:
      "Meta Verified allows individuals and businesses to confirm their identity using government-issued ID, adding credibility and authenticity to their profiles.",
  },
  {
    id: 2,
    title: "Blue Checkmark Badge",
    description:
      "A verified badge on Facebook and Instagram profiles distinguishes genuine users from bots and impersonators, boosting trust among audiences.",
  },
  {
    id: 3,
    title: "Priority Customer Support",
    description:
      "Subscribers receive faster and dedicated customer support for issues related to accounts, ads, or platform features—vital for businesses and influencers.",
  },
  {
    id: 4,
    title: "Increased Visibility and Reach",
    description:
      "Meta Verified users enjoy higher chances of appearing in search results and trending sections, improving content visibility and audience engagement.",
  },
  {
    id: 5,
    title: "Protection Against Impersonation",
    description:
      "Verification helps prevent identity theft by deterring fake accounts, giving users peace of mind and enhancing account security.",
  },
  {
    id: 6,
    title: "Access to Exclusive Features",
    description:
      "Verified accounts may get early access to experimental tools, enhanced analytics, and new content features not available to regular users.",
  },
];

const myServices = [
  {
    id: 1,
    title: "Authenticity and Trust",
    description:
      "The blue checkmark builds user trust and distinguishes genuine accounts—especially useful for brands and public figures to establish credibility.",
  },
  {
    id: 2,
    title: "Enhanced Security",
    description:
      "Verification adds a layer of security, reducing risks of impersonation or account takeovers with strong identity checks and quicker recovery support.",
  },
  {
    id: 3,
    title: "Better Engagement and Visibility",
    description:
      "Verified accounts benefit from higher visibility in algorithms, gaining more likes, shares, and reach—boosting audience growth and conversions.",
  },
  {
    id: 4,
    title: "Improved Support for Account Issues",
    description:
      "Priority customer support ensures faster resolution of issues like fake account reports, ad troubles, and security concerns—vital for businesses.",
  },
  {
    id: 5,
    title: "Exclusive Tools and Features",
    description:
      "Access to new platform features, deeper analytics, and early updates gives verified users an edge in content strategy and audience engagement.",
  },
  {
    id: 6,
    title: "Brand Protection",
    description:
      "Meta Verified protects brands from impersonation, ensuring customers engage with the official account—especially valuable for large or high-competition businesses.",
  },
];

const googleAdsGuide = [
  {
    title: "Setting Up a Google Ads Campaign",
    description:
      "Google Ads allows businesses to create and manage PPC campaigns across multiple platforms like Search, Display, Shopping, Video, and Apps.",
    points: [
      {
        label: "Search Network Campaigns",
        example:
          "Ads appear when users search for specific keywords on Google.",
      },
      {
        label: "Display Network Campaigns",
        example:
          "Ads appear on a network of partner websites (blogs, news sites, etc.).",
      },
      {
        label: "Shopping Campaigns",
        example:
          "Showcase product images and prices, especially for e-commerce businesses.",
      },
      {
        label: "Video Campaigns",
        example: "Ads placed on YouTube.",
      },
      {
        label: "App Campaigns",
        example: "Promote mobile apps across Google properties.",
      },
    ],
  },
  {
    title: "Keyword Research and Selection",
    description:
      "Identify cost-effective, relevant keywords to drive traffic and reduce cost per click.",
    points: [
      {
        label: "Broad Match",
        example:
          "Ads show for related searches including synonyms and variations.",
      },
      {
        label: "Phrase Match",
        example:
          "Ads show when the search contains the exact phrase or close variation.",
      },
      {
        label: "Exact Match",
        example: "Ads show when search query exactly matches the keyword.",
      },
      {
        label: "Negative Match",
        example: "Exclude specific terms to avoid irrelevant traffic.",
      },
      {
        label: "Long-Tail Keywords",
        example:
          "Specific phrases with lower competition and better targeting.",
      },
    ],
  },
  {
    title: "Bidding Strategy",
    description:
      "Choose the right bidding model to optimize ad performance based on campaign goals.",
    points: [
      {
        label: "Manual CPC",
        example: "Set bids manually for each keyword.",
      },
      {
        label: "Automated Bidding",
        example: "Google adjusts bids to meet your goals (e.g., conversions).",
      },
      {
        label: "Enhanced CPC",
        example:
          "Hybrid model where Google adjusts your manual bids for performance.",
      },
      {
        label: "Target CPA",
        example: "Aim to acquire customers at a set cost per acquisition.",
      },
      {
        label: "Target ROAS",
        example: "Optimize for the best return on ad spend.",
      },
    ],
  },
  {
    title: "Quality Score",
    description:
      "Google measures ad quality based on relevance, user experience, and performance to influence CPC and ad rank.",
    points: [
      {
        label: "Ad Relevance",
        example: "How closely your ad matches user intent.",
      },
      {
        label: "Landing Page Experience",
        example: "The relevance and quality of the destination page.",
      },
      {
        label: "Click-Through Rate (CTR)",
        example: "Higher CTR usually means higher quality and lower CPC.",
      },
    ],
  },
  {
    title: "Ad Auction and Ad Rank",
    description:
      "Google determines which ads to show and in what order using ad rank, combining bid and quality score.",
    points: [
      {
        label: "Bid Amount",
        example: "Your max CPC bid impacts ad placement.",
      },
      {
        label: "Quality Score",
        example: "High-quality ads can rank higher at lower costs.",
      },
      {
        label: "Ad Rank Formula",
        example: "Ad Rank = Bid × Quality Score.",
      },
    ],
  },
  {
    title: "Ad Creation and Display",
    description:
      "Create compelling, relevant ad copy with strong CTAs and appealing formatting.",
    points: [
      {
        label: "Headlines",
        example: "Use up to 3 engaging 30-character headlines.",
      },
      {
        label: "Descriptions",
        example:
          "Include 90-character descriptions with clear value propositions.",
      },
      {
        label: "Display URL",
        example: "Show users the final URL or landing page path.",
      },
      {
        label: "Call-to-Action (CTA)",
        example: "Encourage users to act (e.g., Buy Now, Get a Quote).",
      },
    ],
  },
  {
    title: "Measuring Campaign Performance",
    description: "Track ad metrics to assess ROI and campaign effectiveness.",
    points: [
      {
        label: "Impressions",
        example: "Number of times your ad was shown.",
      },
      {
        label: "Clicks",
        example: "Number of user clicks on your ad.",
      },
      {
        label: "CTR",
        example: "Click-through rate (Clicks ÷ Impressions).",
      },
      {
        label: "Conversions",
        example:
          "Actions taken after clicking the ad (e.g., sign-up, purchase).",
      },
      {
        label: "CPA & ROAS",
        example: "Cost per acquisition and return on ad spend.",
      },
    ],
  },
  {
    title: "Continuous Optimization",
    description:
      "Improve campaign results over time with testing, targeting, and bid adjustments.",
    points: [
      {
        label: "A/B Testing",
        example: "Compare different ad versions and landing pages.",
      },
      {
        label: "Negative Keywords",
        example: "Block irrelevant queries to save budget.",
      },
      {
        label: "Adjusting Bids",
        example: "Increase bids for high-converting keywords.",
      },
      {
        label: "Geo-Targeting",
        example: "Focus on high-conversion geographic regions.",
      },
      {
        label: "Device Targeting",
        example: "Optimize for mobile, desktop, or tablet usage patterns.",
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

export default function Meta() {
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
              Meta Verified Services Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Meta Verified Services
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
            Meta Verified Services: Overview, Features, and Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Meta Verified is a premium subscription service offered by Meta
            Platforms, which includes platforms like Facebook and Instagram.
            This service provides users with additional tools to verify their
            identity and enhance their social media experience. It offers a
            variety of benefits, mainly focused on improving account security,
            user authenticity, and credibility on Meta platforms.
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
              Key Features of Meta Verified:
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
            {googleAdsGuide.map((item, index) => {
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
              Meta Verified Use Cases and Examples:
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {messagingSolutions.map((item, index) => {
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="relative bg-secondary/30  h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Dynamic Fields Rendering */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        {item.process}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
 <section className="py-24 px-12 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold mb-4 text-primary"
            >
              Eligibility and Pricing:
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {Eligibilities.map((eligibility, index) => {
              return (
                <motion.div
                  key={eligibility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background/50  h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <CardTitle className="text-xl">
                          {eligibility.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {eligibility.process}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 px-12 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold mb-4 text-primary"
            >
              Benefits of Meta Verified Services:
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {myServices.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background/50  h-full hover:border-primary/30 transition-all duration-300 group overflow-hidden">
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
              Key Features of Meta Verified:
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
            Meta Verified provides several benefits for individuals, businesses,
            and organizations, particularly those seeking enhanced authenticity,
            credibility, and security on Facebook and Instagram. While the
            subscription cost may be prohibitive for some, the additional
            features such as priority support, increased visibility, and
            protection against impersonation make it a valuable tool for many
            users who rely on social media to build their brand, audience, or
            online presence. By subscribing to Meta Verified, users can unlock
            more opportunities to enhance their social media experience, foster
            trust with their audience, and improve their overall business
            performance online.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
