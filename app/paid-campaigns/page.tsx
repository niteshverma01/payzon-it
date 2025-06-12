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
  Zap,
  LineChart,
  Target,
  MapPin,
  Trophy,
  Repeat,
  BarChart,
  Users,
  DollarSign,
  Megaphone,
  Rocket,LayoutGrid
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Quick Traffic and Lead Generation",
    icon: Zap, // Replace with your imported icon
    process:
      "Paid ad campaigns can drive immediate traffic to your website, landing pages, or product pages, leading to an increase in leads, conversions, and ultimately sales. Whether you're running ads for an e-commerce store or a service-based business, paid ads can quickly bring in interested customers.",
    example:
      "A restaurant running a local Google search ad can immediately attract people in the area searching for places to eat, boosting foot traffic and orders.",
  },
  {
    title: "Precise Performance Tracking and Optimization",
    icon: LineChart, // Replace with your imported icon
    process:
      "Paid ads allow businesses to closely monitor the performance of their campaigns. This data can be used to adjust and optimize campaigns in real-time. If certain ads are underperforming, they can be tweaked, tested, or paused, while high-performing ads can be scaled up.",
    example:
      "A clothing brand running an Instagram ad campaign may notice that ads featuring certain products have higher engagement and conversions, leading them to allocate more budget to those ads.",
  },
  {
    title: "Cost Control and Flexibility",
    icon: Wallet, // Replace with your imported icon
    process:
      "Paid campaigns allow businesses to set their budget and adjust it according to their needs. Businesses can choose from different bidding strategies (e.g., cost-per-click, cost-per-impression, or cost-per-conversion) that align with their marketing goals, ensuring they stay within budget.",
    example:
      "A nonprofit organization running a Google Ads campaign can start with a low budget but gradually scale up as they see an increase in donations and awareness.",
  },
  {
    title: "Geographic and Contextual Targeting",
    icon: MapPin, // Replace with your imported icon
    process:
      "With paid ads, businesses can target specific geographic locations (down to a zip code or radius) and tailor ads to different contexts, such as the user’s device type or even the time of day. This allows for highly targeted campaigns that are more likely to generate qualified leads.",
    example:
      "A plumbing company may run ads only in a specific geographic area to target people who need plumbing services in their local vicinity.",
  },
  {
    title: "Competitor Advantage",
    icon: Trophy, // Replace with your imported icon
    process:
      "If competitors are bidding for the same keywords or targeting similar audiences, paid ads give you the opportunity to outbid or create better-targeted campaigns. This can help you gain a competitive advantage and drive more qualified leads to your website.",
    example:
      "A travel agency running a paid campaign targeting vacation packages might outbid competitors for popular search terms, ensuring they appear at the top of search results.",
  },
  {
    title: "Remarketing and Retargeting",
    icon: Repeat, // Replace with your imported icon
    process:
      "Paid ad campaigns allow you to retarget people who have already interacted with your website or brand. This tactic, known as remarketing, helps you remind potential customers about your business and can increase conversion rates.",
    example:
      "A retailer who has visitors leave items in their shopping cart can run remarketing ads to encourage those visitors to come back and complete their purchase.",
  },
  {
    title: "Builds Trust and Credibility",
    icon: ThumbsUp, // Replace with your imported icon
    process:
      "When users see your ads repeatedly on trusted platforms like Google or Facebook, they start to associate your brand with credibility. This consistent presence builds trust and familiarity, making them more likely to engage with your business.",
    example:
      "A financial advisory firm running LinkedIn ads targeting professionals may see their brand become recognized and trusted by potential clients who have seen their ads multiple times.",
  },
  {
    title: "Flexibility in Ad Formats and Platforms",
    icon: LayoutGrid, // Replace with your imported icon
    process:
      "Paid ads offer flexibility in terms of ad formats (text, display, video, etc.) and platforms (Google, Facebook, Instagram, YouTube, etc.). Businesses can choose which format and platform best suits their audience and goals, and can even run cross-platform campaigns for maximum reach.",
    example:
      "A fitness influencer might run Instagram story ads to engage with followers visually and run YouTube ads for longer video content, showcasing workouts and health tips.",
  },
  {
    title: "Enhanced Customer Segmentation",
    icon: Users, // Replace with your imported icon
    process:
      "Paid ads allow businesses to create highly specific audience segments for their campaigns. This means you can create ads for specific customer groups based on criteria like demographics, interests, behaviors, and past actions on your website.",
    example:
      "An online pet store could target people who have recently purchased pet food and show them ads for pet toys or accessories, increasing the chances of an additional sale.",
  },
  {
    title: "Improved Brand Control and Customization",
    icon: Settings, // Replace with your imported icon
    process:
      "Paid ad campaigns give businesses complete control over their messaging, ad creatives, and targeting strategies. Businesses can adjust their ads based on the response they are receiving and optimize for maximum impact, ensuring their marketing efforts align with their goals.",
    example:
      "A luxury watch brand may run customized ads with high-quality imagery and targeting aimed at affluent consumers, ensuring they appeal directly to the right audience.",
  },
];


const Services = [
  {
    title: "Taxpayer Identification and Compliance",
    description:
      "PAN verification is crucial for identifying individuals and businesses who are required to pay taxes in India. Ensuring the validity of PAN helps in maintaining compliance with tax laws and preventing tax evasion.",
  },
  {
    title: "Preventing Fraud and Identity Theft",
    description:
      "PAN verification ensures that the person or entity using the PAN number is the legitimate owner. This prevents fraudulent activities such as the use of fake or stolen PAN numbers for financial transactions or tax evasion.",
  },
  {
    title: "Ensuring Financial Transparency",
    description:
      "PAN verification ensures that individuals or entities engaging in significant financial transactions are genuine and compliant with tax regulations, helping maintain financial transparency.",
  },
  {
    title: "KYC Compliance (Know Your Customer)",
    description:
      "Financial institutions and service providers require PAN verification during onboarding to meet KYC norms. It helps prevent fraud and confirms the customer's identity.",
  },
  {
    title: "Regulatory Compliance in Business Transactions",
    description:
      "PAN verification supports AML and CFT regulations in sectors like banking and real estate, ensuring that high-value transactions are conducted by legitimate entities.",
  },
  {
    title: "Avoiding Tax Evasion",
    description:
      "Linking income and financial transactions to a verified PAN reduces the risk of tax evasion by preventing the concealment of income or misreporting of financial data.",
  },
];

const features = [
  {
    title: "Immediate Visibility and Results",
    icon: Rocket, // Replace with your imported icon
    process:
      "Unlike organic marketing efforts, which take time to gain traction, paid ad campaigns provide instant visibility. As soon as the campaign goes live, the ads appear to the targeted audience, helping businesses achieve immediate exposure and results.",
    example:
      "A new e-commerce store running Facebook ads can immediately appear in front of potential customers, gaining instant traffic, sales, and brand awareness.",
  },
  {
    title: "Targeted Audience Reach",
    icon: Target, // Replace with your imported icon
    process:
      "Paid ads allow for precise audience targeting based on factors like demographics (age, gender, location), interests, behaviors, keywords, and even specific devices. This ensures your ad is seen by people who are most likely to be interested in your products or services.",
    example:
      "A fitness brand can target people who have shown interest in health and wellness, ensuring the ad reaches an audience that's more likely to make a purchase.",
  },
  {
    title: "Scalability",
    icon: BarChart, // Replace with your imported icon
    process:
      "Paid ad campaigns are easily scalable. Whether you want to start with a modest budget and increase it gradually or scale up for a major launch, paid advertising offers flexibility in budget allocation. Businesses can adjust their campaigns based on real-time performance data.",
    example:
      "A startup might begin with a limited ad budget on Google Ads and increase their spend as they observe a return on investment (ROI) and their customer base grows.",
  },
  {
    title: "Enhanced Brand Awareness",
    icon: Megaphone, // Replace with your imported icon
    process:
      "Even if a user doesn't immediately convert after seeing your ad, paid campaigns help increase brand awareness. Consistent exposure to your ads can create recognition, making users more likely to engage with your business later.",
    example:
      "A new software company running display ads on LinkedIn can increase awareness of its product to professionals in their target market, even if those users don't click on the ad immediately.",
  },
  {
    title: "Measurable ROI",
    icon: DollarSign, // Replace with your imported icon
    process:
      "One of the most significant benefits of paid ad campaigns is the ability to track metrics and measure the return on investment (ROI). Platforms like Google Ads and Facebook Ads offer in-depth analytics on impressions, clicks, conversions, and revenue, helping businesses optimize campaigns for the best results.",
    example:
      "A real estate agency can track how many leads are generated from their paid ads and calculate how much revenue was generated from those leads, allowing them to determine the ROI of their advertising efforts.",
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

export default function PaidCampaign() {
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
              Paid Campaigns Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Paid Campaigns
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
            Paid Ad Campaign: Importance and Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Paid ad campaigns, commonly referred to as paid advertising or
            pay-per-click (PPC) campaigns, are a powerful tool for businesses to
            drive targeted traffic, increase brand visibility, and achieve
            measurable results. These campaigns allow businesses to reach their
            ideal audience through various platforms such as Google Ads,
            Facebook Ads, LinkedIn Ads, and more.
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
             Importance of Paid Ad Campaigns
            </motion.h2>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((item, index) => {
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
              Benefits of Paid Ad Campaigns
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
            Paid ad campaigns are crucial for businesses that want to increase
            visibility, drive immediate traffic, and generate leads. They offer
            a range of benefits, from precise targeting and real-time
            performance tracking to scalability and cost control. Paid ads are a
            versatile tool that helps businesses achieve their marketing goals
            across various channels, including search engines, social media
            platforms, and display networks By leveraging the power of paid ads,
            businesses can increase brand awareness, drive sales, and gain a
            competitive edge in their industry. Whether you're a small business
            looking to grow your customer base or a large enterprise launching a
            new product, paid ad campaigns are a key driver of digital marketing
            success.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
