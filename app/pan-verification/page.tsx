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
  MonitorSmartphone
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Banking Sector",
    icon: Banknote,
    process:
      "Banks and financial institutions require PAN verification as part of the KYC process for opening accounts, applying for loans, and making large transactions. PAN helps confirm the identity of customers and ensures compliance with Anti-Money Laundering (AML) regulations.",
    example:
      "A customer applying for a personal loan at a bank will be asked to provide their PAN. The bank will verify the PAN to ensure the customer’s identity is valid and that they meet the KYC requirements.",
  },
  {
    title: "Tax Filing and Income Tax Department",
    icon: FileText,
    process:
      "Individuals and businesses must use their PAN to file income tax returns (ITR). Verification of the PAN ensures that the tax records match the individual’s or business’s reported income and that taxes are being paid correctly.",
    example:
      "When an individual files their tax returns, the Income Tax Department verifies the PAN against the records of the individual’s income and tax paid. This ensures accuracy in reporting and tax compliance.",
  },
  {
    title: "Real Estate and Property Transactions",
    icon: Home,
    process:
      "PAN verification is required in real estate transactions, especially for purchasing property or making large payments. It helps confirm the identity of the buyer or seller and prevents fraudulent property deals.",
    example:
      "Property Purchase: When purchasing a property above a certain value, the buyer must provide their PAN. The verification ensures the authenticity of the transaction and protects both parties involved.",
  },
  {
    title: "Telecom Services",
    icon: Smartphone,
    process:
      "Telecom companies require PAN verification for issuing new mobile connections or SIM cards, particularly for postpaid plans. This helps prevent fraud and ensures that the person registering the SIM card is genuine.",
    example:
      "A customer applying for a postpaid connection with a mobile carrier needs to provide PAN. The service provider verifies the PAN to ensure compliance with KYC regulations and prevent misuse of the service.",
  },
  {
    title: "Government Subsidy Programs",
    icon: Gift,
    process:
      "PAN verification is used by the government to ensure that only eligible individuals or businesses receive government subsidies and benefits. It is essential in schemes like Pradhan Mantri Awas Yojana (PMAY) and Pradhan Mantri Jan Dhan Yojana (PMJDY).",
    example:
      "A beneficiary applying for a government subsidy under the PMAY program will need to verify their PAN. This ensures that the subsidy is granted to the right individual, preventing fraud or misallocation of funds.",
  },
  {
    title: "E-commerce and Online Platforms",
    icon: ShoppingCart,
    process:
      "E-commerce platforms may require PAN verification for users who engage in high-value transactions or register as sellers on the platform. This helps prevent fraudulent sellers from using fake identities to engage in illegal activities.",
    example:
      "Seller Registration: When a seller registers on an e-commerce platform like Amazon or Flipkart, they are required to verify their PAN to ensure their legitimacy and maintain trust in the platform.",
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
    id:1,
    title: "Enhanced Security and Fraud Prevention",
    icon: ShieldCheck, // Replace with your imported icon
    process:
      "PAN verification helps ensure that only the rightful owner of a PAN can engage in financial transactions, preventing fraud and identity theft. The authentication process ensures that unauthorized individuals cannot misuse someone else's PAN.",
    example:
      "If a bank customer wants to open an account or initiate a high-value transaction, the bank will verify the PAN to ensure the individual is not using someone else's identity for illegal activities.",
  },
  {
    id:2,
    title: "Faster and More Efficient Processes",
    icon: Timer, // Replace with your imported icon
    process:
      "PAN verification streamlines processes in sectors like banking, finance, insurance, and real estate. With a verified PAN, customers can quickly access services like loans, insurance policies, or property transactions without delays caused by manual checks or paperwork.",
    example:
      "Online Loan Applications: PAN verification enables online loan platforms to authenticate applicants swiftly, leading to faster processing and disbursal of loans.",
  },
  {
    id:3,
    title: "Prevents Tax Evasion",
    icon: BadgePercent, // Replace with your imported icon
    process:
      "By linking financial transactions and earnings to a verified PAN, the Income Tax Department can monitor and track income and taxes, helping reduce tax evasion. Verification ensures that every PAN is linked to genuine income records, and individuals or businesses are paying taxes accordingly.",
    example:
      "Businesses involved in high-value transactions must provide a valid PAN for each transaction. Verification ensures that tax evasion does not occur in such cases.",
  },
  {
    id:4,
    title: "Supports Financial Inclusion",
    icon: Users, // Replace with your imported icon
    process:
      "PAN verification aids in the financial inclusion of individuals by providing them access to formal financial systems. PAN is often required for opening a bank account or applying for a credit card. Verified PAN numbers ensure that individuals are not excluded from accessing essential financial services.",
    example:
      "A low-income individual in rural India can use a verified PAN to open a bank account and gain access to government welfare schemes like subsidies, thus participating in formal financial activities.",
  },
  {
    id:5,
    title: "Improved Accuracy and Data Integrity",
    icon: FileCheck2, // Replace with your imported icon
    process:
      "PAN verification ensures that the correct details of individuals or businesses are recorded in financial institutions' databases. This leads to accurate tracking of financial activities, reduces errors, and ensures the integrity of the data provided to tax authorities.",
    example:
      "Income Tax Filings: PAN verification helps ensure that the tax returns filed by individuals or businesses are accurate and complete. It allows the Income Tax Department to identify discrepancies between reported income and actual financial activity.",
  },
  {
    id:6,
    title: "Global Acceptance of PAN as an Identity Proof",
    icon: Globe, // Replace with your imported icon
    process:
      "PAN verification has become widely accepted in India and globally as a standard means of verifying an individual’s financial identity. It is often used by foreign companies or institutions to verify the financial identity of Indian clients or partners.",
    example:
      "Cross-Border Transactions: International companies can verify the PAN of Indian clients to ensure legitimacy in transactions and to meet regulatory requirements when engaging in business dealings in India.",
  },
  {
    id:1,
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

export default function PanVerification() {
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
              Pan Verification Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Pan Verification
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
            PAN Verification: Need and Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            PAN (Permanent Account Number) is a unique 10-digit alphanumeric
            identifier issued by the Income Tax Department of India. It serves
            as a means of identifying taxpayers and tracking their financial
            activities, including income and tax filings. PAN is widely used in
            various financial and legal processes across India, such as opening
            bank accounts, filing tax returns, and engaging in financial
            transactions. PAN verification refers to the process of validating
            the authenticity of a PAN number provided by an individual or
            entity. This can be done through the official PAN verification
            system provided by the Income Tax Department or third-party
            verification services..
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
              Need for PAN Verification
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
            Benefits of PAN Verification:

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

                      <h3 className="text-xl md:text-2xl text-center font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"><span >{item.id}   </span>
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
              Examples of PAN Verification Use Cases
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
      <section className="relative py-24 px-6 md:px-12 bg-secondary/30 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Challenges of PAN Verification:
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
            PAN verification is an essential process that ensures compliance
            with tax laws, helps prevent fraud, and promotes transparency in
            financial transactions. It provides a secure and reliable method for
            identifying individuals and businesses and plays a critical role in
            KYC compliance, tax evasion prevention, and regulatory enforcement.
            The benefits of PAN verification, such as enhanced security, quicker
            processes, and improved financial transparency, make it an integral
            part of the financial and legal ecosystem in India. By verifying PAN
            numbers, businesses, government agencies, and financial institutions
            can ensure that transactions are legitimate and in compliance with
            regulations.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
