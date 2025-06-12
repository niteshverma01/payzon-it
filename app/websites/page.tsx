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

const gamingFintechs = [
  {
    title: "E-commerce Website",
    icon: ShoppingCart,
    process:
      "Protecting user data (credit card details, personal information) during checkout.",
    security:
      "Implement SSL/TLS encryption to secure all communication between users and the server, ensuring payment data is encrypted. Also, use a WAF to protect the website from SQL injection and XSS attacks.",
  },
  {
    title: "Banking Website",
    icon: Banknote,
    process: "Preventing unauthorized access to users’ bank accounts.",
    security:
      "Enforce two-factor authentication (2FA) for all user logins, secure customer data using AES encryption, and regularly update banking software to fix vulnerabilities.",
  },
  {
    title: "Healthcare Website",
    icon: HeartPulse,
    process: "Ensuring patient privacy and HIPAA compliance.",
    security:
      "Encrypt patient data both in transit and at rest, implement strict access controls for authorized personnel, and use secure authentication mechanisms like biometric verification.",
  },
  {
    title: "News Website",
    icon: Newspaper,
    process: "Preventing defacement or unauthorized content submission.",
    security:
      "Use strong input validation to prevent XSS attacks, employ firewalls to prevent unauthorized access to admin panels, and regularly back up website content to ensure it can be restored after an attack.",
  },
  {
    title: "Social Media Platform",
    icon: Users,
    process:
      "Securing user login credentials and preventing fake account creation.",
    security:
      "Enforce strong password policies, implement CAPTCHA verification to prevent bot registrations, and use session management tools to log users out after inactivity.",
  },
  {
    title: "Educational Portal",
    icon: GraduationCap,
    process: "Protecting students' personal information and grades.",
    security:
      "Use SSL/TLS encryption to secure login and grade data, apply strict role-based access control for admins and teachers, and implement two-factor authentication for access to sensitive student data.",
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
    title: "SSL/TLS Encryption (HTTPS)",
    items: [
      {
        label: "What It Is",
        text: "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) protocols encrypt data between a user's browser and the server, ensuring data integrity and confidentiality.",
      },
      {
        label: "How It Works",
        text: 'When a user visits a secure site, the "HTTPS" in the URL indicates an encrypted connection. This prevents data interception during transmission.',
      },
      {
        label: "Use Case Example",
        text: "A banking website encrypts login credentials and transaction data using SSL/TLS to protect customer information from being intercepted by attackers.",
      },
    ],
  },
  {
    title: "Regular Software Updates",
    items: [
      {
        label: "What It Is",
        text: "Regularly updating the website’s platform (such as CMS like WordPress, plugins, or server software) to patch security vulnerabilities.",
      },
      {
        label: "How It Works",
        text: "Software developers release security patches to address newly discovered vulnerabilities. Keeping all systems up-to-date minimizes the risk of exploitation.",
      },
      {
        label: "Use Case Example",
        text: "A WordPress website that installs regular security patches for plugins, themes, and core software to prevent hackers from exploiting known vulnerabilities.",
      },
    ],
  },
  {
    title: "Firewall Protection",
    items: [
      {
        label: "What It Is",
        text: "A website firewall (WAF) filters out malicious traffic and protects the website from common web threats such as SQL injection, XSS, and DDoS attacks.",
      },
      {
        label: "How It Works",
        text: "A web application firewall sits between the server and the user, blocking potentially harmful traffic before it reaches the website.",
      },
      {
        label: "Use Case Example",
        text: "An e-commerce site uses a WAF to protect user data and transaction pages from SQL injection and XSS attacks.",
      },
    ],
  },
  {
    title: "Two-Factor Authentication (2FA)",
    items: [
      {
        label: "What It Is",
        text: "An additional layer of security where users are required to provide two forms of verification (something they know and something they have) to access their account.",
      },
      {
        label: "How It Works",
        text: "After entering the password, users receive an OTP (One-Time Password) via SMS, email, or authentication apps, which they must enter to complete the login process.",
      },
      {
        label: "Use Case Example",
        text: "A secure admin panel of a content management system (CMS) uses 2FA for administrators to access backend data and settings.",
      },
    ],
  },
  {
    title: "Data Encryption",
    items: [
      {
        label: "What It Is",
        text: "Encrypt sensitive data both at rest (stored data) and in transit (data being transferred) using algorithms like AES (Advanced Encryption Standard).",
      },
      {
        label: "How It Works",
        text: "Sensitive information, such as credit card details, passwords, and personal data, is encrypted to make it unreadable to anyone except authorized parties.",
      },
      {
        label: "Use Case Example",
        text: "An online store encrypts customer payment information during checkout to prevent data theft in the event of a server breach.",
      },
    ],
  },
  {
    title: "Input Validation",
    items: [
      {
        label: "What It Is",
        text: "Validating user inputs to ensure that only expected, secure data is entered into web forms (e.g., login, registration, search forms).",
      },
      {
        label: "How It Works",
        text: "Input fields should filter out unexpected characters or malicious code, preventing attackers from exploiting form fields (e.g., SQL injection).",
      },
      {
        label: "Use Case Example",
        text: "An online forum prevents users from submitting JavaScript code in their posts, protecting against XSS attacks.",
      },
    ],
  },
  {
    title: "Session Management",
    items: [
      {
        label: "What It Is",
        text: "Securing user sessions, including setting proper session timeouts, using secure cookies, and ensuring that session IDs are random and unique.",
      },
      {
        label: "How It Works",
        text: "Session tokens should be securely stored and should expire after a certain period of inactivity. Secure cookies prevent session hijacking.",
      },
      {
        label: "Use Case Example",
        text: "A social media platform ensures that users are automatically logged out after a period of inactivity to prevent session hijacking.",
      },
    ],
  },
  {
    title: "Backup and Recovery Plan",
    items: [
      {
        label: "What It Is",
        text: "Regularly backing up website data and having a disaster recovery plan in place to restore the website in case of attack or data loss.",
      },
      {
        label: "How It Works",
        text: "The website maintains periodic backups of its files and databases. In the event of a breach, these backups are used to restore the website to its previous secure state.",
      },
      {
        label: "Use Case Example",
        text: "An e-commerce website takes daily backups of its product catalog and user data, allowing it to recover quickly if a hacker compromises the website.",
      },
    ],
  },
  {
    title: "Monitoring and Logging",
    items: [
      {
        label: "What It Is",
        text: "Continuously monitoring website activity and maintaining logs of user actions to detect and respond to suspicious behavior.",
      },
      {
        label: "How It Works",
        text: "Intrusion detection systems (IDS) and log management tools identify potential threats by analyzing abnormal patterns and flagging unusual activities.",
      },
      {
        label: "Use Case Example",
        text: "A financial services website uses log monitoring to detect multiple failed login attempts (potential brute force attack) and takes action to lock accounts temporarily.",
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

export default function WebSite() {
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
              Web Sitge Security Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Web Sitge Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
            >
              Website Security Overview
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
            Website Security Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Website security involves protecting websites from cyber threats,
            data breaches, and malicious activities that could harm the site,
            its users, or its data. Ensuring robust website security is crucial
            for businesses to protect customer information, maintain trust, and
            comply with various regulations. Security vulnerabilities in
            websites can lead to data theft, loss of user trust, and financial
            losses. Website security typically involves protecting both the
            front-end (visible website) and back-end (server-side and database)
            aspects. Common methods include encryption, user authentication,
            securing communication channels, and maintaining software updates. A
            holistic security strategy includes multiple layers of defense
            against various threats.
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
              Website Security Best Practices:
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
                        <span className="text-white">Challenge : </span>
                        {gamingFintech.process}
                      </p>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        <span className="text-white">Solution : </span>{" "}
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
            Website security is a critical component of online business,
            ensuring that sensitive data is protected and that users can trust
            the platform. By implementing a combination of encryption, input
            validation, authentication protocols, firewalls, and regular
            monitoring, businesses can protect themselves from the ever-evolving
            threat landscape. Robust security practices not only prevent data
            breaches but also foster user trust and ensure compliance with
            privacy regulations.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
