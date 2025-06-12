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
  IdCard,
  BriefcaseBusiness,
  Timer,
  Contact2,
  FileBarChart2,
  BarChart4,
  BadgePercent,
  Users,
  FileCheck2,
  Globe,
  MonitorSmartphone,
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Fraudulent or Fake Accounts",
    process:
      "Criminals can use stolen or fabricated documents to open bank accounts, which are then used for money laundering, financing illegal activities, or fraud.",
    example:
      "Solution: Implement biometric verification and multi-factor authentication (MFA). Use AI-driven fraud detection systems to identify suspicious activity early on.",
  },
  {
    title: "Data Accuracy and Inconsistencies",
    process:
      "Incorrect or outdated customer data (like name or address) can delay onboarding or cause KYC compliance issues.",
    example:
      "Solution: Use robust data validation tools and cross-check information with government databases or credit bureaus. Regularly clean and update customer data.",
  },
  {
    title: "Manual Verification Delays",
    process:
      "Paper-based or manual verification processes are slow and prone to errors, frustrating customers and slowing operations.",
    example:
      "Solution: Use automated systems and eKYC methods with government-issued IDs, biometrics, or OTPs to streamline and speed up verification.",
  },
  {
    title:
      "Lack of Access to Verification Infrastructure (Especially in Rural Areas)",
    process:
      "People in rural areas may lack internet or biometric devices, making it difficult to verify bank accounts.",
    example:
      "Solution: Use mobile banking apps with document scanning and biometric verification. Provide support through local agents or branches.",
  },
  {
    title: "Security and Privacy Concerns",
    process:
      "Customers must share sensitive data during verification, which raises concerns about data breaches or identity theft.",
    example:
      "Solution: Ensure end-to-end encryption, follow data protection laws (like GDPR), conduct regular security audits, and train staff in privacy compliance.",
  },
  {
    title: "Cross-Border Verification Challenges",
    process:
      "International customers and transactions are difficult to verify due to jurisdiction and regulatory differences.",
    example:
      "Solution: Use SWIFT GPI standards and enhanced KYC/AML protocols. Employ global verification platforms for cross-border data aggregation.",
  },
  {
    title: "Challenges with Account Linking",
    process:
      "Linking multiple or joint accounts can cause delays, especially when account holder details don’t exactly match.",
    example:
      "Solution: Implement identity resolution technologies and dynamic verification that can handle multiple or joint account scenarios.",
  },
  {
    title: "Lack of Standardization Across Institutions",
    process:
      "Different banks have different verification requirements, confusing customers and slowing down account linking.",
    example:
      "Solution: Push for standardized KYC and open banking practices, creating consistent and interoperable verification systems.",
  },
  {
    title: "Customer Resistance to Digital Verification",
    process:
      "Some users hesitate to use biometrics or digital tools due to privacy concerns or unfamiliarity with technology.",
    example:
      "Solution: Educate users on the benefits and security of digital verification. Offer both digital and manual options to build trust.",
  },
  {
    title: "Regulatory Compliance",
    process:
      "Banks must follow changing rules (like AML, FATCA, KYC), making it difficult to stay fully compliant at all times.",
    example:
      "Solution: Use RegTech tools that update with regulations in real time. Work with compliance service providers to stay aligned with laws.",
  },
];

const Services = [
  {
    title: "Automated Verification Systems",
    description:
      "Adopting automation in verification processes can help banks reduce human errors, speed up the verification process, and improve accuracy. These systems use AI and machine learning to verify documents and detect inconsistencies in real-time.",
  },
  {
    title: "Biometric Authentication",
    description:
      "Biometric authentication (such as fingerprints, facial recognition, or iris scans) enhances security and ensures that the person completing the verification is the legitimate account holder.",
  },
  {
    title: "eKYC (Electronic KYC)",
    description:
      "eKYC allows individuals to verify their identity remotely using government-issued IDs, selfies, and OTPs. This eliminates the need for customers to visit a bank branch physically, speeding up the account opening process and improving customer satisfaction.",
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "MFA enhances security by requiring more than one form of verification, such as an OTP sent to a registered mobile number or email, along with PIN or biometric authentication. This ensures that only the legitimate account holder can verify the account.",
  },
  {
    title: "Data Validation and Cross-Checking",
    description:
      "Banks can use third-party services to validate and cross-check customer data against reliable databases, such as national identity databases or credit bureaus, to ensure that the details provided are accurate.",
  },
  {
    title: "Blockchain-Based Verification",
    description:
      "The use of blockchain technology for account verification can offer decentralized, immutable records of financial transactions, preventing fraud and enhancing transparency. Banks can leverage smart contracts and distributed ledger technology for secure verification.",
  },
  {
    title: "AI-Powered Fraud Detection",
    description:
      "Banks can deploy AI-powered fraud detection tools to analyze patterns in account activities and flag suspicious behavior. Machine learning models can identify anomalies that human verification may miss, thus reducing the risk of fraud.",
  },
  {
    title: "Mobile Verification Solutions",
    description:
      "Mobile banking apps can leverage features like document scanning, face recognition, and OCR (optical character recognition) to verify bank account details quickly and efficiently, making it accessible for customers in rural or remote areas.",
  },
  {
    title: "Customer Education and Awareness",
    description:
      "Educating customers about the importance and benefits of bank account verification, as well as the security features in place to protect their data, will increase trust in the system and encourage more widespread adoption of digital verification methods.",
  },
  {
    title: "Regulatory Technology (RegTech)",
    description:
      "Banks can integrate RegTech solutions that offer automated compliance tools, helping them stay updated on changing regulatory requirements and ensuring that their account verification processes comply with national and international laws.",
  },
];

const features = [
 
  {
    title: "Taxpayer Identification and Compliance",
    icon: IdCard, // Placeholder - Replace with an appropriate icon
    process:
      "PAN verification identifies tax-eligible individuals/businesses, ensuring compliance and reducing evasion.",
  },
  {
    title: "Preventing Fraud and Identity Theft",
    icon: Lock, // Placeholder
    process:
      "Confirms rightful ownership of PAN, preventing use of fake/stolen identities for financial crimes.",
  },
  {
    title: "Ensuring Financial Transparency",
    icon: BarChart4, // Placeholder
    process:
      "Verifies participants in high-value financial transactions are genuine and tax-compliant, promoting accountability.",
  },
  {
    title: "KYC Compliance (Know Your Customer)",
    icon: Contact2, // Placeholder
    process:
      "Banks and financial services use PAN during KYC to validate customer identities and reduce fraud.",
  },
  {
    title: "Regulatory Compliance in Business Transactions",
    icon: BriefcaseBusiness, // Placeholder
    process:
      "Ensures AML/CFT compliance in sectors like banking and real estate, by verifying high-value participants.",
  },
  {
    title: "Avoiding Tax Evasion",
    icon: FileBarChart2, // Placeholder
    process:
      "By tying all transactions to a PAN, it becomes harder to hide income or manipulate tax data.",
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

export default function BankVerification() {
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
              Bank Account Verification Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Bank Account Verification
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
            Bank Account Verification: Challenges and Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Bank account verification is a crucial process for financial
            institutions, ensuring that the information provided by account
            holders or applicants is accurate, legitimate, and valid. This
            verification process is used for various purposes, such as
            onboarding new customers, preventing fraud, ensuring compliance with
            KYC (Know Your Customer) regulations, and processing payments or
            transactions. However, several challenges can arise during the bank
            account verification process, especially with the growing use of
            digital banking and online transactions.
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
              Need for BANK Verification
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
              Challenges in Bank Account Verification:
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
              Solutions for Effective Bank Account Verification
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
            While bank account verification plays a pivotal role in ensuring
            security, compliance, and fraud prevention, it also faces
            significant challenges. By leveraging modern technologies such as
            AI, biometric authentication, automation, and blockchain, financial
            institutions can streamline the verification process, enhance
            customer experience, and minimize fraud risks. Addressing challenges
            like fraudulent accounts, data inaccuracies, manual delays, and
            regulatory compliance requires a multi-layered approach that
            combines technological innovation with strong security protocols. By
            continually evolving and adapting to new challenges, banks can
            ensure efficient, secure, and customer-friendly verification
            processes.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
