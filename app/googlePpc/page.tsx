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

const smeUseCases = [
  {
    title: "Cost-Effective Marketing Solutions",
    description:
      "SMEs typically have a smaller budget for marketing. SME optimization focuses on affordable digital marketing channels such as SEO, social media marketing, and email marketing.",
    points: [
      {
        label: "SEO",
        example:
          "Organic search is one of the most cost-effective ways to drive traffic, playing a significant role in SME optimization.",
      },
      {
        label: "Social Media Marketing",
        example:
          "Platforms like Facebook, Instagram, and LinkedIn provide low-cost or free options for promoting content, interacting with customers, and building brand awareness.",
      },
      {
        label: "Email Marketing",
        example:
          "A highly cost-effective strategy for SMEs to engage with customers, promote products, and share content.",
      },
    ],
  },
  {
    title: "Local SEO for SMEs",
    description:
      "Many SMEs serve local customers, so focusing on local SEO is critical to appear in nearby search results and reach a relevant audience.",
    points: [
      {
        label: "Google My Business",
        example:
          "Creating and optimizing a Google My Business profile helps local businesses appear on Google Maps and local search results.",
      },
      {
        label: "Local Citations",
        example:
          "Ensuring the business is listed accurately on local directories and platforms.",
      },
      {
        label: "Targeting Local Keywords",
        example:
          "Optimizing content with location-specific keywords to attract customers from a specific geographic area.",
      },
    ],
  },
  {
    title: "Streamlined Website Design and User Experience",
    description:
      "SME websites should be easy to navigate, mobile-friendly, and fast-loading to cater to customers' needs and improve search engine rankings.",
    points: [],
  },
  {
    title: "Content Creation and Marketing",
    description:
      "SMEs can leverage content marketing—blogs, articles, infographics, videos—to attract customers, answer their questions, and establish their expertise in the industry.",
    points: [],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "SMEs need to optimize their website to convert visitors into customers through better CTAs and optimized landing pages.",
    points: [
      {
        label: "Clear Calls-to-Action (CTAs)",
        example:
          "Ensuring CTAs are prominent and encourage visitors to take the next step, such as contacting the business or making a purchase.",
      },
      {
        label: "Optimizing Landing Pages",
        example:
          "Ensuring landing pages are relevant, user-friendly, and optimized to increase conversions.",
      },
    ],
  },
];

const Services = [
  {
    id: 1,
    title: "SEO Drives Organic Traffic, Which Reduces Dependence on Paid Ads",
    description:
      "For SMEs with limited marketing budgets, SEO provides an organic way to drive traffic, reducing reliance on paid advertisements. Optimizing the website for search engines ensures that businesses can still gain visibility without having to spend extensively on ads.",
  },
  {
    id: 2,
    title: "SME Optimization Helps SMEs Compete with Larger Businesses",
    description:
      "By focusing on local SEO, affordable marketing channels, and conversion optimization, SMEs can level the playing field against larger competitors with bigger marketing budgets.",
  },
  {
    id: 3,
    title: "Content Marketing and SEO Go Hand in Hand",
    description:
      "Content creation is a key aspect of SEO. By creating relevant, keyword-rich content, SMEs can not only optimize for search engines but also build their reputation as industry experts and engage their target audience.",
  },
  {
    id: 4,
    title: "Analytics and Performance Tracking",
    description:
      "SEO tools (like Google Analytics, Ahrefs, SEMrush) can be used to track website traffic, rankings, and conversions. SMEs can then use these insights to optimize their website, content, and overall marketing strategy to further boost performance.",
  },
  {
    id: 5,
    title: "Long-Term Results with SEO and SME Optimization",
    description:
      "While paid ads can provide instant results, SEO provides long-term benefits. By combining SEO with effective SME optimization, small businesses can continue to see increasing traffic, conversions, and sales over time.",
  },
];

const Optimizations = [
  {
    title: "Increased Website Traffic and Visibility",
    description:
      "Effective SEO practices help businesses rank higher in search engine results, leading to increased website traffic, which is crucial for growth, especially for SMEs competing against larger organizations.",
  },
  {
    title: "Better User Engagement and Experience",
    description:
      "Both SEO and SME optimization prioritize improving the user experience, resulting in better engagement. A well-optimized website is faster, easier to navigate, and more likely to convert visitors into customers.",
  },
  {
    title: "Cost-Effective Marketing",
    description:
      "SEO and SME optimization provide an affordable and sustainable way to promote a business. SMEs can achieve strong results without relying heavily on paid advertisements, making it an attractive option for budget-conscious businesses.",
  },
  {
    title: "Higher Conversion Rates",
    description:
      "Through conversion rate optimization (CRO), SMEs can increase their chances of turning website visitors into leads or customers. SEO, along with tailored SME strategies, allows businesses to refine their marketing efforts to generate more sales.",
  },
  {
    title: "Competitive Edge",
    description:
      "SMEs can differentiate themselves from competitors by focusing on their local market, creating unique content, and optimizing their website for specific keywords. SEO and SME optimization allow smaller businesses to enhance their online presence and compete more effectively with larger companies.",
  },
  {
    title: "Building Trust and Credibility",
    description:
      "Appearing on the first page of search results builds trust with potential customers. A well-optimized website, coupled with a strong local SEO presence, also makes a business seem more professional and credible.",
  },
];
const googleAdsStrategies = [
  {
    title: "Setting Up a Google Ads Campaign",
    description:
      "Google Ads is the platform where businesses can create and manage PPC campaigns. The process begins with setting up an account and selecting a campaign type based on goals.",
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
          "Ads that show product images and prices, ideal for e-commerce businesses.",
      },
      {
        label: "Video Campaigns",
        example: "Ads placed on YouTube for wider engagement.",
      },
      {
        label: "App Campaigns",
        example:
          "Ads designed to promote mobile apps across various platforms.",
      },
    ],
  },
  {
    title: "Keyword Research and Selection",
    description:
      "Successful Google PPC campaigns depend on effective keyword research and selection, ensuring relevance and cost-efficiency.",
    points: [
      {
        label: "Broad Match",
        example:
          "Ads show for searches related to your keyword, including synonyms.",
      },
      {
        label: "Phrase Match",
        example:
          "Ads appear when the query contains the exact phrase or close variations.",
      },
      {
        label: "Exact Match",
        example: "Ads show only when the query exactly matches the keyword.",
      },
      {
        label: "Negative Match",
        example: "Prevents ads from appearing for unwanted terms.",
      },
      {
        label: "Long-Tail Keywords",
        example:
          "Longer phrases with lower competition, ideal for targeted PPC campaigns.",
      },
    ],
  },
  {
    title: "Bidding Strategy",
    description:
      "Advertisers select a bidding strategy to determine how much to pay per click, optimizing for conversions or visibility.",
    points: [
      {
        label: "Manual CPC",
        example: "Set bids manually for each keyword.",
      },
      {
        label: "Automated Bidding",
        example:
          "Google adjusts bids automatically based on performance goals.",
      },
      {
        label: "Enhanced CPC",
        example: "Combines manual control with Google’s automation.",
      },
      {
        label: "Target CPA",
        example: "Aims to get conversions at a target cost per acquisition.",
      },
      {
        label: "Target ROAS",
        example: "Optimizes bids for the best return on ad spend.",
      },
    ],
  },
  {
    title: "Quality Score",
    description:
      "A Google metric that measures the relevance of your ads, keywords, and landing pages, impacting cost and ranking.",
    points: [
      {
        label: "Ad Relevance",
        example: "Alignment between ad content and user search query.",
      },
      {
        label: "Landing Page Experience",
        example: "The quality and relevance of your destination URL.",
      },
      {
        label: "Click-Through Rate (CTR)",
        example: "Higher CTRs indicate better ad performance.",
      },
    ],
  },
  {
    title: "Ad Auction and Ad Rank",
    description:
      "Google runs an ad auction every time a user searches. Ad Rank determines position and cost based on bid and Quality Score.",
    points: [
      {
        label: "Bid Amount",
        example: "Higher bids improve chances of being displayed.",
      },
      {
        label: "Quality Score",
        example: "Better scores can lower CPC while improving position.",
      },
      {
        label: "Ad Rank",
        example: "Calculated by multiplying bid by Quality Score.",
      },
    ],
  },
  {
    title: "Ad Creation and Display",
    description:
      "After setup, create engaging text or rich media ads tailored for the chosen network.",
    points: [
      {
        label: "Headlines",
        example: "Up to 3 titles of 30 characters each.",
      },
      {
        label: "Descriptions",
        example: "Up to 90 characters to describe offers or services.",
      },
      {
        label: "Display URL",
        example: "The visible link shown in the ad.",
      },
      {
        label: "Call-to-Action (CTA)",
        example:
          "Encourages the user to take action, e.g., 'Buy Now' or 'Learn More'.",
      },
    ],
  },
  {
    title: "Measuring Campaign Performance",
    description:
      "Google Ads provides metrics to evaluate and optimize ad performance regularly.",
    points: [
      {
        label: "Impressions",
        example: "How often your ad is shown.",
      },
      {
        label: "Clicks",
        example: "How often users click your ad.",
      },
      {
        label: "CTR",
        example: "The ratio of clicks to impressions.",
      },
      {
        label: "Conversions",
        example: "Number of desired actions (sign-ups, purchases).",
      },
      {
        label: "CPC",
        example: "Average cost per click.",
      },
      {
        label: "CPA",
        example: "Cost per acquisition.",
      },
      {
        label: "ROAS",
        example: "Return on ad spend.",
      },
    ],
  },
  {
    title: "Continuous Optimization",
    description:
      "To maximize ROI, campaigns must be optimized regularly using strategic insights.",
    points: [
      {
        label: "A/B Testing",
        example: "Test variations of ad copy, visuals, and landing pages.",
      },
      {
        label: "Negative Keywords",
        example: "Prevent showing ads for irrelevant or unprofitable terms.",
      },
      {
        label: "Adjusting Bids",
        example: "Raise bids for high-performing keywords.",
      },
      {
        label: "Geo-Targeting",
        example: "Target locations with higher conversion rates.",
      },
      {
        label: "Device Targeting",
        example: "Optimize for desktop, tablet, or mobile performance.",
      },
    ],
  },
];

const features = [
  {
    id: 1,
    title: "Enhanced Security and Fraud Prevention",
    icon: ShieldCheck, // Replace with your imported icon
    process:
      "PAN verification helps ensure that only the rightful owner of a PAN can engage in financial transactions, preventing fraud and identity theft. The authentication process ensures that unauthorized individuals cannot misuse someone else's PAN.",
    example:
      "If a bank customer wants to open an account or initiate a high-value transaction, the bank will verify the PAN to ensure the individual is not using someone else's identity for illegal activities.",
  },
  {
    id: 2,
    title: "Faster and More Efficient Processes",
    icon: Timer, // Replace with your imported icon
    process:
      "PAN verification streamlines processes in sectors like banking, finance, insurance, and real estate. With a verified PAN, customers can quickly access services like loans, insurance policies, or property transactions without delays caused by manual checks or paperwork.",
    example:
      "Online Loan Applications: PAN verification enables online loan platforms to authenticate applicants swiftly, leading to faster processing and disbursal of loans.",
  },
  {
    id: 3,
    title: "Prevents Tax Evasion",
    icon: BadgePercent, // Replace with your imported icon
    process:
      "By linking financial transactions and earnings to a verified PAN, the Income Tax Department can monitor and track income and taxes, helping reduce tax evasion. Verification ensures that every PAN is linked to genuine income records, and individuals or businesses are paying taxes accordingly.",
    example:
      "Businesses involved in high-value transactions must provide a valid PAN for each transaction. Verification ensures that tax evasion does not occur in such cases.",
  },
  {
    id: 4,
    title: "Supports Financial Inclusion",
    icon: Users, // Replace with your imported icon
    process:
      "PAN verification aids in the financial inclusion of individuals by providing them access to formal financial systems. PAN is often required for opening a bank account or applying for a credit card. Verified PAN numbers ensure that individuals are not excluded from accessing essential financial services.",
    example:
      "A low-income individual in rural India can use a verified PAN to open a bank account and gain access to government welfare schemes like subsidies, thus participating in formal financial activities.",
  },
  {
    id: 5,
    title: "Improved Accuracy and Data Integrity",
    icon: FileCheck2, // Replace with your imported icon
    process:
      "PAN verification ensures that the correct details of individuals or businesses are recorded in financial institutions' databases. This leads to accurate tracking of financial activities, reduces errors, and ensures the integrity of the data provided to tax authorities.",
    example:
      "Income Tax Filings: PAN verification helps ensure that the tax returns filed by individuals or businesses are accurate and complete. It allows the Income Tax Department to identify discrepancies between reported income and actual financial activity.",
  },
  {
    id: 6,
    title: "Global Acceptance of PAN as an Identity Proof",
    icon: Globe, // Replace with your imported icon
    process:
      "PAN verification has become widely accepted in India and globally as a standard means of verifying an individual’s financial identity. It is often used by foreign companies or institutions to verify the financial identity of Indian clients or partners.",
    example:
      "Cross-Border Transactions: International companies can verify the PAN of Indian clients to ensure legitimacy in transactions and to meet regulatory requirements when engaging in business dealings in India.",
  },
  {
    id: 1,
    title: "Real-Time Verification and Convenience",
    icon: MonitorSmartphone, // Replace with your imported icon
    process:
      "PAN verification can be conducted in real-time through online systems, providing instant results. This improves user experience and reduces delays associated with manual verification processes.",
    example:
      "E-commerce Platforms: When customers make large purchases or payments on e-commerce platforms, PAN verification ensures that the buyer is authorized to make the purchase, enabling smoother transactions.",
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
    title: "Increased Organic Traffic",
    objectives: [
      "SEO helps your website rank higher on SERPs, leading to more visitors and potential customers without relying on paid ads.",
    ],
  },
  {
    id: 2,
    title: "Better User Experience",
    objectives: [
      "SEO involves improving site navigation and content, which leads to a better experience for visitors.",
    ],
  },
  {
    id: 3,
    title: "Cost-Effective Marketing",
    objectives: [
      "Unlike paid advertising, SEO delivers long-term results at a fraction of the cost, making it especially beneficial for small businesses.",
    ],
  },
  {
    id: 4,
    title: "Building Brand Authority",
    objectives: [
      "A high-ranking website tends to build trust and authority in the eyes of both users and search engines.",
    ],
  },
];

const seoStrategies = [
  {
    title: "On-Page SEO",
    description:
      "Optimization of elements on the website itself to improve search engine visibility and enhance user experience.",
    points: [
      {
        label: "Keyword Research and Optimization",
        example:
          "Identifying the right keywords for the business and ensuring they appear in titles, meta descriptions, headings, and content.",
      },
      {
        label: "Content Optimization",
        example:
          "Creating high-quality, relevant content that is valuable to the user.",
      },
      {
        label: "Site Structure and Navigation",
        example:
          "Ensuring the website is user-friendly, easy to navigate, and has a clean structure.",
      },
      {
        label: "Mobile Optimization",
        example:
          "Ensuring that the website is mobile-friendly, as search engines prioritize mobile-optimized websites.",
      },
    ],
  },
  {
    title: "Off-Page SEO",
    description:
      "External activities that improve a website’s domain authority and search engine rankings.",
    points: [
      {
        label: "Backlink Building",
        example:
          "Acquiring high-quality backlinks from authoritative websites to improve domain authority.",
      },
      {
        label: "Social Media Engagement",
        example:
          "Using social platforms to promote content, build relationships, and drive traffic.",
      },
      {
        label: "Brand Mentions",
        example:
          "Getting your brand mentioned on other websites to improve visibility and authority.",
      },
    ],
  },
  {
    title: "Technical SEO",
    description:
      "Optimizing the backend of your site to ensure search engines can efficiently crawl, index, and rank your pages.",
    points: [
      {
        label: "Page Speed",
        example:
          "Making sure the website loads quickly to improve user experience and SEO rankings.",
      },
      {
        label: "Schema Markup",
        example:
          "Adding structured data to enhance how your website appears in search results (e.g., rich snippets).",
      },
      {
        label: "XML Sitemap",
        example:
          "Creating and submitting an XML sitemap to ensure that search engines can crawl all pages.",
      },
    ],
  },
];

export default function GooglePpc() {
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
              Google PPC Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Google PPC
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
            SEO and SME Optimization: Overview, Importance, and Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            SEO (Search Engine Optimization) and SME (Small and Medium
            Enterprises) Optimization are two crucial aspects of digital
            marketing that can significantly impact a business's visibility and
            performance online. While SEO focuses on optimizing a website to
            rank higher on search engines, SME optimization focuses on the
            unique needs and challenges faced by small and medium-sized
            enterprises in leveraging digital marketing strategies, including
            SEO.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
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
              Overview and Importance
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
              keywords.{" "}
            </motion.p>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {googleAdsStrategies.map((item, index) => (
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

                    <p className="text-muted-foreground text-base leading-relaxed mb-4 text-center">
                      {item.description}
                    </p>

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
            Solutions for Effective Live Face Detection
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
              SEO and SME Optimization: Working Together for Success
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
            In today's competitive digital landscape, both SEO and SME
            optimization are essential for small and medium-sized businesses to
            increase their visibility, attract targeted traffic, and convert
            leads into customers. By focusing on effective SEO techniques and
            optimizing their online marketing strategies, SMEs can build a
            sustainable and cost-effective presence that will enable them to
            compete with larger businesses and achieve long-term success. For
            SMEs, embracing SEO and focusing on optimization strategies that are
            both budget-friendly and effective is a powerful way to grow their
            business, enhance user experience, and build brand authority online.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
