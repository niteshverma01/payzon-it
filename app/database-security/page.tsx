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

import { ShieldAlert, ServerCrash, Cloud } from "lucide-react";

const gamingFintechs = [
  {
    title: "Capital One Data Breach (2019)",
    icon: ShieldAlert,
    incident:
      "A hacker exploited a vulnerability in Amazon Web Services (AWS) infrastructure to access Capital One's database, which contained over 100 million customer records, including credit card applications.",
    securityGaps:
      "Insufficient network segmentation and misconfigured firewall rules allowed the attacker to gain access to the database.",
    solution:
      "Capital One applied stricter access control mechanisms, improved network segmentation, and conducted regular vulnerability scans to enhance database security.",
  },
  {
    title: "Yahoo Data Breach (2013–2014)",
    icon: ServerCrash,
    incident:
      "A massive data breach at Yahoo exposed 3 billion user accounts, including names, email addresses, and security questions. The breach was attributed to a state-sponsored actor.",
    securityGaps:
      "Yahoo failed to properly encrypt user passwords, which were later found to be stored in an unencrypted format.",
    solution:
      "Yahoo enforced MFA, implemented stronger encryption algorithms, and improved password hashing techniques to prevent similar incidents in the future.",
  },

  {
    title: "Equifax Data Breach (2017)",
    icon: ShieldCheck,
    incident:
      "Hackers exploited a vulnerability in Apache Struts, a web application framework, to access sensitive information in Equifax's databases, including Social Security numbers, birth dates, and addresses of 147 million individuals.",
    securityGaps:
      "Equifax failed to patch a known vulnerability in the Apache Struts software despite prior knowledge and public disclosure.",
    solution:
      "Equifax enhanced its patch management lifecycle, ensured timely updates, implemented stronger encryption for sensitive data, and adopted continuous vulnerability scanning.",
  },
  {
    title: "Dropbox Security Improvements",
    icon: Cloud,
    incident:
      "Dropbox, a major file hosting service, stores user files in a centralized infrastructure and proactively addresses security to prevent breaches.",
    securityGaps:
      "Potential risks included unauthorized access and data leaks from improper access controls and lack of advanced threat detection.",
    solution:
      "Dropbox uses encryption both at rest and in transit, enforces strong password policies with MFA, and implements real-time database activity monitoring and anomaly detection systems.",
  },
];

const Services = [
  {
    title: "SQL Injection",
    description:
      "Attackers exploit vulnerabilities in web applications to insert malicious SQL code into a database query, which can lead to unauthorized access or data manipulation.",
  },
  {
    title: "Insider Threats",
    description:
      "Employees or contractors with access to a database can misuse their privileges to steal, modify, or destroy sensitive data.",
  },
  {
    title: "Data Breaches",
    description:
      "External attackers who breach database security can access, steal, or expose sensitive information such as credit card numbers, Social Security numbers, and login credentials.",
  },
  {
    title: "Weak Authentication",
    description:
      "Poor or misconfigured authentication methods make it easier for attackers to gain unauthorized access to databases.",
  },
  {
    title: "Lack of Encryption",
    description:
      "Storing sensitive data without proper encryption increases the risk of exposure if a breach occurs.",
  },
  {
    title: "Unpatched Vulnerabilities",
    description:
      "Failure to apply security patches to databases and software can leave them vulnerable to attacks that exploit known weaknesses.",
  },
  {
    title: "Data Loss",
    description:
      "Database corruption, natural disasters, or hardware failures can result in the loss of critical data if proper backup and recovery measures are not in place.",
  },
];

import { Activity, CodeSquare, Wrench, FileText } from "lucide-react"; // or your preferred icon set

const features = [
  {
    title: "Encryption",
    icon: Lock,
    items: [
      {
        label: "At-Rest Encryption",
        text: "Encrypts data stored in the database, protecting it in case of unauthorized access.",
      },
      {
        label: "In-Transit Encryption",
        text: "Protects data as it is transferred between the database and the client (e.g., through SSL/TLS).",
      },
      {
        label: "Use Case Example",
        text: "PayPal uses encryption to protect sensitive customer payment data both when it's stored and transmitted during online transactions.",
      },
    ],
  },
  {
    title: "Access Control",
    icon: ShieldCheck,
    items: [
      {
        label: "Role-Based Access Control (RBAC)",
        text: "Defines roles and assigns permissions accordingly. Only authorized users can access data.",
      },
      {
        label: "Principle of Least Privilege (PoLP)",
        text: "Ensures users have only the necessary access for their tasks.",
      },
      {
        label: "Use Case Example",
        text: "Facebook uses RBAC for controlling access to sensitive user data and actions in its database.",
      },
    ],
  },
  {
    title: "Database Activity Monitoring (DAM)",
    icon: Activity,
    items: [
      {
        label: "What It Is",
        text: "DAM tools monitor real-time database activity to detect abnormal behaviors, like unauthorized access or large-scale data exports.",
      },
      {
        label: "How It Works",
        text: "It analyzes queries, alerts on anomalies, and supports compliance efforts.",
      },
      {
        label: "Use Case Example",
        text: "Target implemented DAM after its 2013 breach to track all database queries and prevent unauthorized access.",
      },
    ],
  },
  {
    title: "SQL Injection Prevention",
    icon: CodeSquare,
    items: [
      {
        label: "What It Is",
        text: "Input validation, parameterized queries, and WAFs prevent malicious SQL code injection into queries.",
      },
      {
        label: "How It Works",
        text: "By restricting input to expected formats and using secure query execution methods, it blocks exploit attempts.",
      },
      {
        label: "Use Case Example",
        text: "Amazon uses parameterized queries and input validation to prevent SQL injection on their platform.",
      },
    ],
  },
  {
    title: "Backup and Disaster Recovery",
    icon: RefreshCcw,
    items: [
      {
        label: "What It Is",
        text: "Regular backups and a disaster recovery plan ensure data restoration in case of corruption, loss, or a breach.",
      },
      {
        label: "How It Works",
        text: "Backups are stored in multiple secure locations and are periodically tested for restoration reliability.",
      },
      {
        label: "Use Case Example",
        text: "Netflix maintains geographically separated backups to ensure data can be recovered in case of a failure.",
      },
    ],
  },
  {
    title: "Patch Management",
    icon: Wrench,
    items: [
      {
        label: "What It Is",
        text: "Regularly applying patches prevents attackers from exploiting known vulnerabilities.",
      },
      {
        label: "How It Works",
        text: "Vendors release updates that close security loopholes, and applying them promptly reduces exposure.",
      },
      {
        label: "Use Case Example",
        text: "Microsoft SQL Server releases security patches, which are critical for organizations storing sensitive data.",
      },
    ],
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    icon: KeyRound,
    items: [
      {
        label: "What It Is",
        text: "MFA adds an extra layer of security, requiring more than one form of authentication (e.g., password + OTP).",
      },
      {
        label: "How It Works",
        text: "Users enter their credentials and then verify using a second factor such as a mobile app or SMS code.",
      },
      {
        label: "Use Case Example",
        text: "Google Cloud SQL uses MFA for administrators to protect access to cloud databases.",
      },
    ],
  },
  {
    title: "Audit Trails and Logging",
    icon: FileText,
    items: [
      {
        label: "What It Is",
        text: "Keeping logs of database access and activities is vital to detect suspicious activity and ensure accountability.",
      },
      {
        label: "How It Works",
        text: "Logs are stored securely and can be reviewed to trace back actions by users and detect patterns.",
      },
      {
        label: "Use Case Example",
        text: "U.S. Financial Institutions maintain detailed logs for PCI-DSS compliance and security auditing.",
      },
    ],
  },
  {
    title: "Database Firewalls",
    icon: Shield,
    items: [
      {
        label: "What It Is",
        text: "Database Firewalls protect against unauthorized access and SQL injection attempts by sitting between the database and web.",
      },
      {
        label: "How It Works",
        text: "The firewall filters traffic, identifies malicious queries, and blocks unauthorized access in real-time.",
      },
      {
        label: "Use Case Example",
        text: "Alibaba Cloud uses database firewalls to protect their databases from malicious attacks.",
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

export default function Database() {
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
              Data Base Security Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Data Base Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
            >
              Database Security Overview
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
            Database Security and Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Database security refers to the measures and strategies implemented
            to protect databases from unauthorized access, misuse, modification,
            or destruction. It encompasses a variety of practices aimed at
            safeguarding sensitive data stored within databases and ensuring
            that the data remains confidential, intact, and accessible only to
            authorized users. With the growing volume of cyber threats, database
            security has become a critical concern for organizations worldwide.
            The protection of personal information, financial records, and other
            sensitive data is essential for compliance, customer trust, and
            business integrity.
          </motion.p>
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
              Key Database Security Solutions
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
                    <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon && (
                        <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2 list-disc">
                      {feature.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
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
                        {gamingFintech.securityGaps}
                      </p>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {" "}
                        <span className="text-white">Solution : </span>{" "}
                        {gamingFintech.solution}
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
            Database security is a critical aspect of overall IT security, as
            databases store some of the most valuable and sensitive data for
            businesses. By implementing strong encryption, access control
            policies, regular patching, activity monitoring, and comprehensive
            backup and recovery plans, organizations can mitigate the risk of
            data breaches and ensure that their databases are protected. <br />
            Real-world examples from companies like Capital One, Yahoo, and
            Equifax highlight the importance of maintaining strong database
            security practices to prevent catastrophic consequences and protect
            both company and customer data.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
