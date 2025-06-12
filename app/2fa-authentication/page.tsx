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

const gamingFintechs = [
  {
    title: "SMS-Based Authentication",
    icon: Smartphone,
    process:
      "The system sends a one-time passcode (OTP) via SMS to the user's phone.",
    security:
      "While convenient, it is considered less secure than other 2FA methods due to risks like SIM swapping or intercepting SMS messages.",
  },
  {
    title: "Authenticator App (TOTP)",
    icon: KeyRound,
    process:
      "The user installs an authenticator app (e.g., Google Authenticator, Authy), which generates a unique, time-sensitive passcode that refreshes every 30 seconds.",
    security:
      "More secure than SMS, as it doesn’t rely on a phone number and doesn’t have the same vulnerabilities as SMS-based authentication.",
  },
  {
    title: "Push Notification Authentication",
    icon: BellRing,
    process:
      "The user receives a push notification from a mobile authentication app and approves or denies the login attempt by tapping the notification.",
    security:
      "Highly secure, as it’s based on the user’s mobile device and requires physical possession of the device.",
  },
  {
    title: "Hardware Tokens (e.g., USB Security Keys)",
    icon: ShieldCheck,
    process:
      "The user inserts a physical security token (e.g., YubiKey) into their device or taps it on a mobile phone to authenticate the login.",
    security:
      "Very secure, as the token is a physical device, and it’s impossible for an attacker to steal or replicate it remotely.",
  },
  {
    title: "Biometric Authentication",
    icon: Fingerprint,
    process:
      "The user provides a biometric scan (fingerprint, facial recognition, etc.) as the second factor of authentication.",
    security:
      "Secure, as biometric data is unique to the user and typically very difficult to spoof.",
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
    title: "User Login Attempt",
    items: [
      {
        label: "User Inputs Username and Password",
        text: "The process starts when a user enters their credentials into a login form.",
      },
      {
        label: "Credential Check",
        text: "The system verifies the entered username and password.",
      },
    ],
  },
  {
    title: "Second Authentication Factor Request",
    items: [
      {
        label: "Prompt for Second Factor",
        text: "Once credentials are verified, a second verification method is requested.",
      },
      {
        label: "Possible Factors",
        text: "Something you have (e.g., phone), or something you are (biometric data).",
      },
    ],
  },
  {
    title: "User Provides Second Authentication Factor",
    items: [
      {
        label: "SMS Code",
        text: "A one-time passcode is sent via SMS to the user’s registered number.",
      },
      {
        label: "Authenticator App",
        text: "App like Google Authenticator generates time-based OTP.",
      },
      {
        label: "Push Notification",
        text: "User approves login by tapping on a push notification.",
      },
      {
        label: "Hardware Token",
        text: "A physical key like YubiKey is used for authentication.",
      },
      {
        label: "Biometric",
        text: "User provides fingerprint or facial scan.",
      },
    ],
  },
  {
    title: "System Verifies the Second Factor",
    items: [
      {
        label: "Validation",
        text: "The submitted second factor is checked against system records.",
      },
      {
        label: "TOTP Check",
        text: "The time-based OTP is validated within the correct time window.",
      },
    ],
  },
  {
    title: "Successful Authentication",
    items: [
      {
        label: "Access Granted",
        text: "If both credentials are valid, access is granted.",
      },
      {
        label: "Session Creation",
        text: "A session may be created to keep the user logged in.",
      },
    ],
  },
  {
    title: "Failure",
    items: [
      {
        label: "Access Denied",
        text: "If any factor is incorrect, access is denied.",
      },
      {
        label: "Alternate Verification",
        text: "The system may prompt for account recovery or alternate verification.",
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
    title: "Enhanced Security",
    objectives: [
      "2FA significantly reduces the likelihood of unauthorized access by requiring something the user knows (password) and something the user has (second factor).",
      "Even if a password is compromised, the attacker cannot access the account without the second factor.",
    ],
  },
  {
    id: 2,
    title: "Protection Against Phishing and Data Breaches",
    objectives: [
      "Even if an attacker gains access to login credentials through phishing or data breaches, they still need the second factor to complete the authentication process.",
    ],
  },
  {
    id: 3,
    title: "Regulatory Compliance",
    objectives: [
      "Even if an attacker gains access to login credentials through phishing or data breaches, they still need the second factor to complete the authentication process.",
    ],
  },
  {
    id: 4,
    title: "Reduced Fraud:",
    objectives: [
      "2FA helps prevent fraud by ensuring that only legitimate users with access to the second factor can log in and access their accounts.",
    ],
  },
  {
    id: 5,
    title: "Improved Customer Trust:",
    objectives: [
      "Users feel more confident knowing that additional measures are in place to protect their personal and financial information.",
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

export default function Authentication() {
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
              2FA Authentication Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              2FA Authentication
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
            2FA Authentication – Working Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Two-Factor Authentication (2FA) is a security mechanism that adds an
            extra layer of protection to the traditional username and password
            authentication method. Instead of relying solely on a password
            (something the user knows), 2FA combines it with a second factor
            (something the user has or is), making unauthorized access much
            harder. Here's how 2FA Authentication works in detail:{" "}
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
              Step-by-Step Process of 2FA Authentication
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
              Types of 2FA Methods:
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
                        <span className="text-white">Process : </span>
                        {gamingFintech.process}
                      </p>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        <span className="text-white">Security : </span>{" "}
                        {gamingFintech.security}
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
            Advantages of 2FA Authentication:
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
                        <span className="text-white text-xl">* </span>{" "}
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
              Common Challenges with 2FA:
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
            2FA Authentication provides an added layer of security by combining
            two factors of authentication—something the user knows (password)
            and something the user has (second factor). By utilizing methods
            like SMS codes, authenticator apps, push notifications, hardware
            tokens, or biometric data, 2FA enhances security, helps prevent
            unauthorized access, and ensures the privacy and protection of
            sensitive information.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
