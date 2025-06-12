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

const fintechs = [
  {
    title: "All-in-One Solution for Travel Businesses",
    icon: ShoppingCart,
    description:
      "The Travel Portal offers everything you need to run a successful online travel business, from flight bookings and hotel reservations to car rentals, tours, and customer management.",
  },
  {
    title: "Seamless User Experience",
    icon: Smartphone,
    description:
      "Customers can easily browse, compare, and book all their travel needs in one place, making the entire process simple, quick, and enjoyable.",
  },
  {
    title: "Scalable and Flexible",
    icon: Settings2,
    description:
      "Whether you're a small travel agency or a large-scale operator, our Travel Portal can grow with your business, supporting increasing traffic, more services, and customized features.",
  },
  {
    title: "Reliable & Secure",
    icon: Shield,
    description:
      "With SSL encryption, secure payment gateways, and robust fraud prevention systems, our Travel Portal ensures that customer data and transactions are always safe and secure.",
  },
  {
    title: "Boost Customer Satisfaction",
    icon: Headphones,
    description:
      "The portal’s user-friendly design, real-time booking engine, and comprehensive customer support options help you provide exceptional service to your customers, enhancing their experience and encouraging repeat business.",
  },
  {
    title: "Global Reach",
    icon: ChartSpline,
    description:
      "Expand your business globally by offering services in multiple languages and currencies, making your travel offerings accessible to international customers.",
  },
  {
    title: "Customizable & White-Label",
    icon: Settings2,
    description:
      "Customize the portal to reflect your branding and target audience, giving you full control over the look, feel, and functionality of your platform.",
  },
];

const services = [
  {
    title: "Retail Businesses",
    description:
      "Whether you sell clothing, electronics, or home goods, the Shopping Portal is perfect for brick-and-mortar retailers looking to expand their reach online.",
  },
  {
    title: "Niche Products",
    description:
      "Startups or niche businesses can build a highly customized shopping experience to cater to their target audience’s specific needs.",
  },
  {
    title: "Subscription-Based Models",
    description:
      "If you run a subscription box service or offer subscription-based products, our portal is equipped with subscription management tools.",
  },
  {
    title: "Marketplaces",
    description:
      "Create a multi-vendor marketplace where third-party sellers can list their products, making it easy to manage transactions, commissions, and product listings.",
  },
  {
    title: "B2B E-commerce",
    description:
      "Our portal also supports business-to-business transactions, allowing wholesalers and suppliers to sell products in bulk to other businesses.",
  },
];

const features = [
  {
    title: "Comprehensive Travel Services",
    items: [
      {
        label: "Flight Booking:",
        text: "Search, compare, and book flights from all major airlines with real-time availability and pricing.",
      },
      {
        label: "Hotel Booking:",
        text: "Offer customers a wide selection of accommodations, including hotels, resorts, hostels, and vacation rentals worldwide.",
      },
      {
        label: "Car Rentals:",
        text: "Allow customers to book rental cars at their destination, with a variety of options from economy to luxury vehicles.",
      },
      {
        label: "Tour Packages:",
        text: "Provide exclusive packages for group tours, excursions, and experiences, all available for instant booking.",
      },
    ],
  },
  {
    title: "Multi-Channel Booking System",
    items: [
      {
        label: "Seamless Booking Experience:",
        text: "Customers can easily search for and book flights, hotels, cars, and tours in one convenient location.",
      },
      {
        label: "Mobile-Optimized:",
        text: "The portal is mobile-friendly, allowing customers to access and book services from smartphones and tablets.",
      },
      {
        label: "Multi-Language & Multi-Currency Support:",
        text: "Expand your global reach with multiple language and currency options.",
      },
    ],
  },
  {
    title: "Integrated Payment Gateway",
    items: [
      {
        label: "Secure Payment Solutions:",
        text: "Accept payments via credit/debit cards, PayPal, and other secure methods.",
      },
      {
        label: "Customizable Payment Plans:",
        text: "Allow customers to pay in full or opt for flexible installment plans.",
      },
    ],
  },
  {
    title: "Customizable White-Label Solution",
    items: [
      {
        label: "Branding & Design:",
        text: "Customize themes, logos, and colors to reflect your brand.",
      },
      {
        label: "Tailored Experience:",
        text: "Adjust the user interface and booking flow to fit your business model.",
      },
    ],
  },
  {
    title: "Real-Time Availability & Booking Engine",
    items: [
      {
        label: "Instant Confirmation:",
        text: "Real-time availability for flights, hotels, and travel services with instant booking confirmation.",
      },
      {
        label: "Dynamic Pricing:",
        text: "Competitive pricing with real-time updates based on demand.",
      },
    ],
  },
  {
    title: "Customer Account Management",
    items: [
      {
        label: "Profile Creation:",
        text: "Customers can create and manage accounts, view booking history, and store preferences.",
      },
      {
        label: "Booking Modifications & Cancellations:",
        text: "Allow customers to modify or cancel bookings based on your policies.",
      },
    ],
  },
  {
    title: "Advanced Search & Filters",
    items: [
      {
        label: "Smart Search Engine:",
        text: "Powerful filters to help customers search by destination, price range, amenities, star ratings, airlines, car models, and more.",
      },
      {
        label: "Custom Recommendations:",
        text: "Provide personalized travel recommendations based on user preferences and previous bookings.",
      },
    ],
  },
  {
    title: "Travel Packages & Offers",
    items: [
      {
        label: "Customized Travel Packages:",
        text: "Design custom travel packages including flights, hotels, tours, and transfers.",
      },
      {
        label: "Discounts & Promotions:",
        text: "Offer time-sensitive discounts, flash sales, and special promotions.",
      },
      {
        label: "Loyalty Program:",
        text: "Reward program for repeat customers with points or discounts.",
      },
    ],
  },
  {
    title: "Customer Support Tools",
    items: [
      {
        label: "Live Chat Integration:",
        text: "Provide instant support with live chat functionality.",
      },
      {
        label: "Ticketing System:",
        text: "Built-in support system for handling queries and complaints.",
      },
      {
        label: "Multilingual Support:",
        text: "Offer customer service in multiple languages.",
      },
    ],
  },
  {
    title: "Travel Insurance & Add-ons",
    items: [
      {
        label: "Travel Insurance:",
        text: "Offer customers the option to purchase travel insurance for trip cancellations, health emergencies, and lost luggage.",
      },
      {
        label: "Optional Add-Ons:",
        text: "Let users add extra services like airport transfers, travel guides, or event tickets to their bookings.",
      },
    ],
  },
  {
    title: "Analytics and Reporting",
    items: [
      {
        label: "Sales & Booking Analytics:",
        text: "Track customer bookings, sales trends, and revenue generation with detailed reporting tools.",
      },
      {
        label: "Customer Behavior Insights:",
        text: "Gain insights into customer preferences, booking habits, and popular destinations to refine marketing strategies.",
      },
      {
        label: "Performance Dashboards:",
        text: "Access customizable dashboards for managing bookings, cancellations, revenue, and customer satisfaction metrics.",
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
    title: "Travel Agencies",
    Objective:
      "Traditional travel agents can digitize their operations, offering customers an easy-to-use online platform for booking flights, hotels, and tours.",
  },
  {
    id: 2,
    title: "Tour Operators",
    Objective:
      "Design and sell tour packages directly to customers with a seamless booking experience.",
  },
  {
    id: 3,
    title: "Corporate Travel",
    Objective:
      "Businesses can use the Travel Portal to manage employee travel arrangements, offering easy booking, invoicing, and corporate discounts.",
  },
  {
    id: 4,
    title: "Destination Management Companies",
    Objective:
      "Promote specific destinations by offering packaged travel services such as guided tours, excursions, and local experiences.",
  },
  {
    id: 5,
    title: "Startups in Travel Industry",
    Objective:
      "New businesses in the travel space can quickly launch a fully functional and branded travel portal without the need for extensive technical resources.",
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

export default function Travelportal() {
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
              Travel Portal Development Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Travel Portal Development
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Empowering Your Financial Future
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
            Travel Portal – Your All-in-One Travel Solutio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            The Travel Portal is a powerful, customizable platform designed to
            cater to the needs of travel agencies, tour operators, and
            individual travelers. Whether you're running a small travel agency
            or a large-scale online travel business, our Travel Portal offers a
            complete and seamless solution for booking flights, hotels, car
            rentals, tours, and more—everything your customers need for their
            travel experience, all in one place. With user-friendly features,
            real-time availability, secure payment gateways, and multi-currency
            support, the Travel Portal ensures both businesses and travelers
            have a smooth, enjoyable experience. Our platform is tailored to
            help businesses offer a wide range of travel services to customers
            worldwide, while providing advanced tools for managing bookings,
            payments, and customer support.
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
              Why Choose Our FinTech Portal?
            </motion.h2>
          </div>

          {/* Features Grid */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fintechs.map((fintech, index) => {
              const IconComponent = fintech.icon;
              return (
                <motion.div
                  key={fintech.title}
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
                        {fintech.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        {fintech.description}
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
            Use Cases:
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
            Get Started with Our Travel Portal Today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Empower your travel business with the Travel Portal, a powerful,
            scalable, and secure platform that simplifies the booking process
            for your customers. Whether you’re selling flights, hotels, car
            rentals, or full vacation packages, our Travel Portal provides all
            the tools you need to deliver an exceptional travel experience.
            <br />
            Contact us today for a personalized demo, and start your journey
            toward success in the thriving travel industry!
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
              This Travel Portal description emphasizes the platform’s ability
              to simplify and streamline the travel booking process for both
              businesses and customers. It highlights a wide range of features
              designed to create a seamless experience while showcasing how the
              portal can be customized to fit the needs of various travel
              service providers.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
