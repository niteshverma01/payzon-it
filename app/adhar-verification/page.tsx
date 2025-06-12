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
  Brain,
  Wallet,
  Activity,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";

import { Smartphone, Stethoscope } from "lucide-react";

import { Banknote, Gift, Fingerprint } from "lucide-react";
import {
  Tractor,
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  TimerReset,
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Banking and Financial Services",
    icon: Banknote, // Updated icon
    process:
      "Aadhaar-based eKYC is used by banks and financial institutions to instantly verify the identity of customers. It helps in the opening of bank accounts, processing loans, and other financial services.",
    Example:
      "A bank uses Aadhaar to authenticate the identity of a customer applying for a loan. After verification, the loan can be processed quickly and with minimal documentation.",
  },
  {
    title: "Telecommunications",
    icon: Smartphone, // Updated icon
    process:
      "Telecom companies are required to verify a customer's identity through Aadhaar before activating a mobile connection or issuing a new SIM card.",
    Example:
      "A customer visiting a telecom store for a new SIM card presents their Aadhaar card, which is verified using biometric authentication. The SIM card is then activated instantly.",
  },
  {
    title: "Welfare Schemes (Government Services)",
    icon: Gift, // Updated icon
    process:
      "Aadhaar is used in India’s Direct Benefit Transfer (DBT) schemes to ensure subsidies and benefits are transferred to the rightful beneficiaries.",
    Example:
      "A person applying for a subsidy under the Pradhan Mantri Jan Dhan Yojana (PMJDY) uses Aadhaar verification to authenticate their identity and receive the subsidy directly into their bank account.",
  },
  {
    title: "Health and Medical Services",
    icon: Stethoscope, // Updated icon
    process:
      "Government health services use Aadhaar to verify patients' identities to provide medical services, track health records, and prevent fraudulent claims.",
    Example:
      "A patient visits a government hospital for treatment. Their Aadhaar is verified to ensure they receive the correct health benefits under government health schemes.",
  },
  {
    title: "Rural Services",
    icon: Tractor, // Updated icon
    process:
      "In rural India, where many people lack traditional documents like voter IDs, Aadhaar provides a robust verification tool for accessing services like banking, government benefits, and mobile connectivity.",
    Example:
      "A farmer in a rural area accesses government agricultural subsidies or loans by providing their Aadhaar number, which is verified to ensure they are eligible.",
  },
];

const Services = [
  {
    title: "Better SEO Performance",
    description:
      "Identifying technical SEO issues like broken links, duplicate content, and incorrect meta tags can improve rankings in search engine results pages (SERPs).",
  },
  {
    title: "Enhanced Security",
    description:
      "Auditing security vulnerabilities helps safeguard sensitive data (e.g., customer information, payment details) and prevents hacking attempts or data breaches.",
  },
  {
    title: "Increased Website Speed",
    description:
      "Website speed is a ranking factor for search engines and a critical element of user experience. An audit helps identify performance issues and recommends improvements like image compression or reducing server response time.",
  },
  {
    title: "Mobile Optimization",
    description:
      "With the majority of internet traffic coming from mobile devices, ensuring that a website is mobile-responsive is essential for retaining users and improving SEO.",
  },
  {
    title: "Improved User Experience",
    description:
      "A website audit helps improve navigation, usability, and design, which translates into a better user experience and higher user engagement.",
  },
  {
    title: "Cost-Effective Strategy for Website Improvement",
    description:
      "Rather than guessing which areas need improvement, a detailed website audit provides data-driven insights to prioritize changes that will provide the highest ROI.",
  },
];

const features = [
  {
    title: "Enhanced Security and Reduced Fraud",
    process:
      "By verifying identity through biometric data (fingerprints, iris scans), Aadhaar verification significantly reduces the possibility of fraudulent access to services. Only the authorized individual can verify their identity, making unauthorized access difficult.",
    example:
      "Banking Sector: When a customer uses Aadhaar-based biometric verification to access their account or approve transactions, it ensures that no one else can impersonate them.",
  },
  {
    title: "Faster Service Delivery",
    process:
      "Aadhaar verification accelerates service delivery by eliminating lengthy paperwork and manual processes. It enables instant KYC for services like opening a bank account, getting a mobile number, or receiving government subsidies.",
    example:
      "Telecom Industry: Telecom operators can verify users through their Aadhaar number to activate SIM cards immediately without requiring traditional forms of identification and long delays.",
  },
  {
    title: "Cost-Effective",
    process:
      "Aadhaar verification is a cost-effective alternative to other verification methods, such as physical document checks or manual processes. By reducing the need for paperwork and in-person verification, it also minimizes administrative overheads.",
    example:
      "Government Welfare Programs: Aadhaar verification helps ensure that only eligible individuals receive welfare benefits (like subsidies, pensions, etc.), reducing misallocation of resources and fraud.",
  },
  {
    title: "Accessible to All",
    process:
      "Aadhaar is available to all Indian residents, including those in remote or rural areas. The biometric nature of the verification ensures inclusivity, especially for those without formal documentation, as it can be used even by illiterate or non-tech-savvy individuals.",
    example:
      "Healthcare Services: In rural areas, where traditional forms of identity might not be available, Aadhaar-based verification ensures that everyone can access essential government health schemes.",
  },
  {
    title: "Real-Time Verification",
    process:
      "Aadhaar verification allows real-time identity checks through online portals or mobile apps, ensuring immediate validation. This is particularly useful in situations requiring instant confirmation.",
    example:
      "Online Financial Services: Aadhaar-based eKYC for online financial services like loan applications, insurance, and mutual funds provides a quick, secure, and paperless process, speeding up approval.",
  },
  {
    title: "Streamlined Government Services",
    process:
      "Aadhaar verification simplifies access to government services and welfare schemes. By linking Aadhaar to government databases, verification ensures that subsidies, pensions, and social welfare programs reach the right individuals.",
    example:
      "Public Distribution System (PDS): Aadhaar helps to ensure that food and subsidies under PDS are delivered only to the genuine beneficiaries, reducing pilferage and ensuring transparency.",
  },
  {
    title: "Biometric Authentication for Digital Transactions",
    process:
      "Aadhaar’s biometric-based authentication system (like Aadhaar Enabled Payment System or AEPS) allows secure access to digital financial transactions. This is particularly helpful in a cashless economy and ensures transaction authenticity.",
    example:
      "Mobile Payments and eCommerce: Consumers can authenticate payments using their Aadhaar biometric data instead of remembering complex PINs or passwords, improving both security and user convenience.",
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
    title: "Preventing Identity Fraud",
    icon: ShieldCheck, // Aadhaar ensures only the rightful person can access services
    process:
      "Aadhaar verification ensures that the person accessing a service is the rightful individual associated with the Aadhaar number. It helps prevent the misuse of someone else's Aadhaar details, reducing the potential for identity theft and fraud.",
  },
  {
    title: "Ensuring Authenticity in Transactions",
    icon: BadgeCheck, // Signifies verified and trustworthy activity
    process:
      "Whether it's opening a bank account, applying for government services, or making an online payment, verifying the identity of individuals through Aadhaar ensures that transactions are secure and authentic. This builds trust in digital transactions.",
  },
  {
    title: "Compliance with Regulations",
    icon: FileCheck2, // Represents legal/documentary compliance
    process:
      "Many sectors in India, such as banking, telecom, and government services, require Aadhaar-based verification due to regulatory frameworks (e.g., Know Your Customer (KYC) norms, Anti-Money Laundering (AML) laws). Aadhaar verification helps businesses comply with these regulations.",
  },
  {
    title: "Efficient Service Delivery",
    icon: TimerReset, // Signifies speed and efficiency
    process:
      "Aadhaar verification helps streamline processes in various sectors, such as banking, healthcare, and welfare programs. It ensures that beneficiaries of schemes are genuine and receive services without any leakage or misallocation.",
  },
  {
    title: "Financial Inclusion",
    icon: Wallet, // Represents access to financial services
    process:
      "Aadhaar verification is an essential tool for bringing people into the formal financial system, enabling them to open bank accounts, access government subsidies, and apply for loans. It reduces paperwork and facilitates financial inclusion, especially in rural areas.",
  },
  {
    title: "Digital Identity Verification",
    icon: Fingerprint, // Represents biometric authentication
    process:
      "With the rise of digital transactions and services, Aadhaar verification serves as a key digital identity tool for individuals in both urban and rural areas. It is used for secure eKYC (electronic Know Your Customer) processes.",
  },
];

const ddosCaseStudies = [
  {
    title: "Privacy Concerns",
    incident:
      "The sharing of biometric data for Aadhaar verification raises concerns over privacy and data security. Proper measures need to be in place to protect personal data from misuse.",
  },
  {
    title: "Technological Issues in Rural Areas",
    incident:
      "In some rural areas, the lack of proper infrastructure (e.g., internet connectivity, electricity, or devices for biometric verification) can hinder the implementation of Aadhaar-based verification.",
  },
  {
    title: "Technical Failures",
    incident:
      "Biometric verification may sometimes fail due to issues like poor fingerprints or iris scans, especially for elderly individuals or those with worn-out biometric data.",
  },
  {
    title: "Exclusion",
    incident:
      "Certain individuals, particularly those without an Aadhaar card or facing issues with enrollment, may be excluded from services requiring Aadhaar-based verification.",
  },
];

export default function Aadhar() {
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
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Aadhar verification Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Aadhar verification
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              DDoS Protection and Solutions
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
            Aadhaar Verification: Need and Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Aadhaar is the world’s largest biometric identification system,
            issued by the Unique Identification Authority of India (UIDAI). It
            serves as a unique identity for every Indian resident, linked to a
            12-digit unique Aadhaar number. Aadhaar verification refers to the
            process of confirming the authenticity of an individual’s Aadhaar
            details through various methods, including biometric data, OTP
            (One-Time Password), and QR code scanning. Aadhaar verification has
            become increasingly important in a variety of applications, ranging
            from financial services to government welfare schemes and telecom
            services. It ensures that the person using the Aadhaar number is the
            legitimate owner and helps prevent fraud.
          </motion.p>
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
            Need for Aadhaar Verification{" "}
          </motion.h2>
        </div>

        <section className="py-20 px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
              {Stages.map((item, index) => {
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
            </div>
          </div>
        </section>
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
              Benefits of Aadhaar Verification:
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
                    <CardDescription className="text-base">
                      {feature.process}
                    </CardDescription>
                    <CardDescription className="text-base">
                      <span className="text-primary">Example : </span>{" "}
                      {feature.example}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Examples of Aadhaar Verification Use Cases
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

                      <p className="text-muted-foreground text-base leading-relaxed mb-2">
                        <span className="text-white font-semibold">
                          Example:
                        </span>{" "}
                        {item.Example}
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
              Challenges of Aadhaar Verification:
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ddosCaseStudies.map((item, index) => {
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
                        {item.incident}
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
            Aadhaar verification is a cornerstone for secure, efficient, and
            inclusive service delivery across various sectors in India. By
            providing a secure, universal, and cost-effective method for
            verifying identities, Aadhaar verification has become indispensable
            for financial services, welfare schemes, telecom, healthcare, and
            beyond. While challenges such as privacy concerns and infrastructure
            issues exist, Aadhaar’s benefits in streamlining processes,
            preventing fraud, and ensuring equitable service delivery far
            outweigh these drawbacks. As India moves towards digital
            transformation, Aadhaar-based verification will continue to play a
            critical role in enabling a secure and efficient ecosystem for both
            individuals and businesses.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
