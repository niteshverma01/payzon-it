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

import { Gamepad, Users, MonitorSmartphone, DollarSign } from "lucide-react";

const gamingFintechs = [
  {
    title: "Diverse Game Selection",
    icon: Gamepad,
    description:
      "The Gaming Portal offers an extensive collection of games across various genres, catering to a wide audience of gamers—from AAA titles to indie gems.",
  },
  {
    title: "Enhanced Social Experience",
    icon: Users,
    description:
      "Build a thriving community with forums, groups, chat rooms, and live streaming, helping gamers connect, share, and engage with each other.",
  },
  {
    title: "Customizable & White-Label Solution",
    icon: Settings2,
    description:
      "Fully customize the portal's design and features to match your brand identity and create a unique user experience.",
  },
  {
    title: "Seamless Cross-Platform Experience",
    icon: MonitorSmartphone,
    description:
      "Let users access and play games across devices—desktop, console, and mobile—for a truly unified gaming experience.",
  },
  {
    title: "Real-Time Updates",
    icon: RefreshCcw,
    description:
      "Keep your community engaged with frequent updates, game releases, in-game events, and promotions delivered in real time.",
  },
  {
    title: "Monetization Opportunities",
    icon: DollarSign,
    description:
      "Generate revenue through game sales, in-game purchases, subscriptions, advertisements, and sponsorships for tournaments and live events.",
  },
];

const Services = [
  {
    title: "Gaming Retailers",
    description:
      "Sell digital copies of games and in-game items, along with exclusive bundles and offers to attract more customers.",
  },
  {
    title: "Gaming Communities",
    description:
      "Create a space for gamers to connect, share tips, and enjoy events, tournaments, and live streams.",
  },
  {
    title: "Game Developers",
    description:
      "Use the portal as a distribution platform for your games, reaching a wide audience with direct digital sales and promotional tools.",
  },
  {
    title: "Streamers & Content Creators",
    description:
      "Monetize live streaming content by integrating with the portal for easier audience engagement, donation options, and in-game giveaways.",
  },
  {
    title: "Gaming Events & Tournaments",
    description:
      "Organize large-scale competitive gaming events, reaching global audiences and driving engagement for your portal.",
  },
];

const features = [
  {
    title: "Comprehensive Game Catalog",
    items: [
      {
        label: "Game Library:",
        text: "Access a wide variety of video games across genres such as action, adventure, RPG, strategy, simulation, sports, and multiplayer games from top developers and publishers.",
      },
      {
        label: "Downloadable Content (DLC):",
        text: "Offer additional content for popular games, including expansion packs, skins, maps, and in-game items.",
      },
      {
        label: "Indie & Exclusive Games:",
        text: "Feature unique indie titles and exclusive games not available on other platforms.",
      },
    ],
  },
  {
    title: "Seamless Game Purchase & Downloads",
    items: [
      {
        label: "Instant Game Purchases:",
        text: "Let users buy and instantly download games directly from the portal.",
      },
      {
        label: "Payment Options:",
        text: "Accept payments via credit/debit cards, PayPal, e-wallets, and cryptocurrencies.",
      },
      {
        label: "Gift Cards & Vouchers:",
        text: "Offer digital gift cards and promo codes redeemable for games or in-game content.",
      },
    ],
  },
  {
    title: "User Profiles & Game Libraries",
    items: [
      {
        label: "Customizable Profiles:",
        text: "Let users manage personal profiles, game collections, and track achievements.",
      },
      {
        label: "Game Library Management:",
        text: "Allow cloud-based game storage accessible from any device.",
      },
      {
        label: "Wishlist & Recommendations:",
        text: "Enable wishlists and recommend games based on user behavior.",
      },
    ],
  },
  {
    title: "Multiplayer & Social Features",
    items: [
      {
        label: "Multiplayer Integration:",
        text: "Support co-op play, matchmaking, and leaderboards.",
      },
      {
        label: "Gaming Communities:",
        text: "Build forums, chat rooms, and groups for user interaction.",
      },
      {
        label: "Live Streaming:",
        text: "Allow users to broadcast gameplay directly from the portal.",
      },
    ],
  },
  {
    title: "In-Portal Events & Tournaments",
    items: [
      {
        label: "Live Events:",
        text: "Host tournaments, contests, and exclusive game launches with giveaways.",
      },
      {
        label: "Gaming Tournaments:",
        text: "Organize competitions with registration, brackets, and rewards.",
      },
      {
        label: "Event Calendar:",
        text: "Display upcoming game releases and community events.",
      },
    ],
  },
  {
    title: "Game Reviews & Ratings",
    items: [
      {
        label: "User Reviews:",
        text: "Let users rate and review games based on their experience.",
      },
      {
        label: "Editor’s Picks & Featured Games:",
        text: "Highlight top-rated games and seasonal editor recommendations.",
      },
    ],
  },
  {
    title: "Mobile & Cross-Platform Support",
    items: [
      {
        label: "Cross-Device Play:",
        text: "Enable gaming across PC, console, and mobile devices.",
      },
      {
        label: "Mobile-Friendly Interface:",
        text: "Ensure smooth browsing, buying, and playing on mobile.",
      },
    ],
  },
  {
    title: "Digital Goods & In-Game Items Marketplace",
    items: [
      {
        label: "Virtual Goods Store:",
        text: "Offer an integrated marketplace for skins, weapons, and in-game currency.",
      },
      {
        label: "Trading System:",
        text: "Let users buy, sell, or trade items within the community.",
      },
    ],
  },
  {
    title: "Secure & Reliable Transactions",
    items: [
      {
        label: "Secure Payment Gateway:",
        text: "SSL-encrypted transactions for safe payments and data.",
      },
      {
        label: "Fraud Prevention:",
        text: "Detect and prevent unauthorized purchases.",
      },
    ],
  },
  {
    title: "Admin Panel for Business Owners",
    items: [
      {
        label: "Content Management System:",
        text: "Easily manage game listings, pricing, and events from an admin dashboard.",
      },
      {
        label: "Analytics & Reporting:",
        text: "Monitor sales, user behavior, and game performance.",
      },
      {
        label: "Customer Support:",
        text: "Use ticketing and live chat to handle user queries.",
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

export default function GamingPortal() {
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
              Gaming Portal Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Gaming Portal Development
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
            Gaming Portal – Your Ultimate Gaming Destination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Gaming Portal is an all-in-one platform designed for gamers,
            gaming communities, and gaming businesses. Whether you're a gaming
            company, online retailer, or gaming enthusiast, our Gaming Portal
            provides a seamless, interactive, and customizable platform for
            discovering, purchasing, and playing video games. Offering an
            immersive user experience, secure payment options, and
            community-driven features, the portal is built to cater to the needs
            of modern gamers and businesses in the gaming industry. With a wide
            selection of games, downloadable content (DLC), virtual goods, and
            live events, the Gaming Portal is your ultimate gateway to the world
            of gaming, ensuring that players, streamers, and businesses stay
            engaged, entertained, and connected.
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
              Why Choose Our Gaming Portal?
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

      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Why Choose Our Gaming Portal?
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
            Get Started with Our Gaming Portal Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Launch your Gaming Portal today and unlock the full potential of
            your gaming business. Whether you're a developer, retailer, or
            community builder, our platform provides all the tools you need to
            create an engaging, interactive, and secure gaming experience.
            Empower your audience with easy game purchases, social features,
            exclusive events, and much more!
            <br />
            Contact us today to schedule a demo, learn more about our
            customizable options, and take the next step in building your gaming
            empire.
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
              This Gaming Portal description highlights the platform's
              versatility, offering a full suite of features that cater to
              businesses, gamers, and gaming communities. It positions the
              portal as both a business solution and a destination for gaming
              entertainment, making it attractive to a wide range of potential
              customers.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
