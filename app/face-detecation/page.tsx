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
  Timer,
  LockKeyhole,
  Server,
  Scale,
  Banknote,
  EyeOff,
  Users,
  AlertTriangle,
  UserX,
  Sun,
} from "lucide-react";

const gamingFintechs = [
  {
    title: "Environmental Factors and Lighting Conditions",
    icon: Sun,
    process:
      "Lighting plays a crucial role in face recognition. Poor or inconsistent lighting can degrade image quality, leading to errors or failed detection.",
    example:
      "Infrared (IR) cameras and advanced algorithms enhance visibility in low-light scenarios, improving recognition accuracy in night-time surveillance systems.",
  },
  {
    title: "Face Spoofing (Impersonation Attacks)",
    icon: UserX,
    process:
      "Attackers may use photos, videos, or masks to spoof the system and impersonate real users, which compromises the integrity of face recognition.",
    example:
      "Liveness detection techniques like blink detection and head movement tracking help differentiate a real person from a photo or video.",
  },
  {
    title: "Diversity of Faces and Variations",
    icon: Users,
    process:
      "Facial variations due to aging, makeup, facial hair, or medical changes can reduce recognition accuracy if models are not robust.",
    example:
      "Deep learning models trained on diverse datasets can effectively handle facial variations, ensuring fair performance across all demographics.",
  },
  {
    title: "Occlusions (Obstacles on the Face)",
    icon: EyeOff,
    process:
      "Objects like sunglasses, masks, or scarves can obscure facial features, making recognition difficult.",
    example:
      "Multi-angle cameras and image reconstruction algorithms allow systems to recognize faces even when partially covered.",
  },
  {
    title: "Privacy and Data Security Concerns",
    icon: Lock,
    process:
      "Handling biometric data introduces privacy risks. Unauthorized access or data breaches can result in identity theft.",
    example:
      "Implementing end-to-end encryption and secure biometric templates protects users' facial data and ensures compliance with privacy laws like GDPR.",
  },
  {
    title: "False Positives and False Negatives",
    icon: AlertTriangle,
    process:
      "Face recognition systems can sometimes wrongly identify or fail to identify individuals, especially in uncontrolled environments.",
    example:
      "Training models on real-world datasets and using ensemble models can significantly reduce error rates.",
  },
  {
    title: "Real-Time Processing and Latency",
    icon: Timer,
    process:
      "Face recognition systems must deliver results instantly in real-time use cases like access control, but high-resolution data can cause delays.",
    example:
      "Edge computing allows data to be processed locally, reducing latency and enabling faster recognition.",
  },
  {
    title: "Scalability in Large Databases",
    icon: Server,
    process:
      "Managing large biometric datasets efficiently is crucial for performance in systems like airports or city surveillance.",
    example:
      "Cloud-based systems with distributed databases enable scalable storage and quick retrieval of facial data for millions of users.",
  },
  {
    title: "Bias and Fairness",
    icon: Scale,
    process:
      "Face recognition algorithms may exhibit bias against certain skin tones, genders, or age groups if not trained with diverse data.",
    example:
      "Auditing algorithms and using balanced datasets ensures fair and accurate recognition for all demographics.",
  },
];

const Services = [
  {
    title: "Liveness Detection Algorithms",
    description:
      "These algorithms detect natural movements such as blinking or head shifts to distinguish a live person from photos or video spoofing, enhancing authentication accuracy.",
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Combining facial recognition with other methods like OTPs, voice recognition, or fingerprints significantly increases security and reduces the risk of identity spoofing.",
  },
  {
    title: "AI and Deep Learning Models",
    description:
      "Advanced deep learning models, especially CNNs, enhance face recognition accuracy even in challenging conditions like aging, makeup, or partial occlusions.",
  },
  {
    title: "Biometric Data Encryption",
    description:
      "Encrypting biometric data during storage and transmission ensures that sensitive face data is secure and inaccessible to unauthorized entities.",
  },
  {
    title: "Edge Computing for Real-Time Processing",
    description:
      "Edge computing allows facial data to be processed locally on devices, reducing latency, offloading server stress, and enabling faster real-time verification.",
  },
  {
    title: "Use of Multi-Spectral and 3D Imaging",
    description:
      "3D and multi-spectral imaging captures deeper facial features, improving recognition reliability in poor lighting or complex environments.",
  },
  {
    title: "Regular Model Updates",
    description:
      "Constant training and updating of recognition models ensures they remain resilient against new spoofing methods and evolving facial characteristics.",
  },
  {
    title: "Bias Mitigation in Algorithms",
    description:
      "Using diverse datasets and conducting regular fairness audits reduces demographic bias in face recognition systems, ensuring equitable performance.",
  },
  {
    title: "Scalable Cloud Infrastructure",
    description:
      "Cloud-based solutions allow facial recognition systems to scale efficiently while managing large datasets without compromising performance or speed.",
  },
];

const features = [
  {
    title: "Security and Surveillance",
    icon: ShieldCheck, // Replace with a suitable icon
    process:
      "Live face detection enhances public safety by identifying criminals, unauthorized individuals, or threats in real-time in areas like airports, stadiums, or cities.",
    example:
      "Airports use facial recognition for automated boarding pass verification or to track suspicious individuals in high-security zones.",
  },
  {
    title: "Banking and Financial Services",
    icon: Banknote, // Replace with a suitable icon
    process:
      "Banks use live face detection for secure logins, ATM verifications, and digital KYC processes, ensuring secure and convenient authentication.",
    example:
      "A banking app lets customers log in by scanning their face for real-time authentication, replacing traditional passwords or OTPs.",
  },
  {
    title: "Mobile Device Unlocking",
    icon: Smartphone, // Replace with a suitable icon
    process:
      "Face recognition enables secure and fast unlocking of smartphones and tablets, protecting personal data and preventing unauthorized access.",
    example:
      "iPhones use Face ID, a form of live face detection, to unlock the device and approve Apple Pay transactions securely.",
  },
  {
    title: "Retail and E-Commerce",
    icon: ShoppingCart, // Replace with a suitable icon
    process:
      "Retailers utilize face detection to recognize returning customers, prevent fraud, and personalize shopping experiences in physical or digital stores.",
    example:
      "Smart retail stores use facial recognition at self-checkout to verify customer identity for high-value purchases.",
  },
  {
    title: "Access Control Systems",
    icon: LockKeyhole, // Replace with a suitable icon
    process:
      "Corporate buildings and secure facilities use live face detection for access control, eliminating the need for physical ID cards or passwords.",
    example:
      "Employees enter office premises by scanning their face at smart gates, ensuring only authorized individuals gain access.",
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

export default function faceVerification() {
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
              Live Face Verification Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 "
            >
              Live Face Verification
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
            Live Face Deduction: Challenges and Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-muted-foreground   text-lg md:text-xl leading-relaxed"
          >
            Live Face Deduction or Live Face Recognition is a technology used
            for identifying or verifying a person’s identity based on their
            facial features. It typically involves capturing a live image or
            video stream of a person's face and matching it to a database of
            known faces. This technology is used in various industries,
            including security, banking, retail, and access control, to enhance
            authentication and reduce fraud. However, despite its rapid growth
            and potential, live face deduction comes with a variety of
            challenges that need to be addressed to ensure it is accurate,
            efficient, and secure.
          </motion.p>
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
              Challenges in Live Face Deduction
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
                          Solution:
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
              Solutions for Effective Live Face Detection
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
              Use Cases for Live Face Detection
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
            Live face deduction technology has significant potential for
            enhancing security, convenience, and user experience across various
            industries. However, challenges related to lighting, spoofing,
            privacy, bias, and scalability must be addressed to maximize its
            effectiveness and reliability. By implementing advanced solutions
            like liveness detection, multi-factor authentication, and regular
            system updates, organizations can mitigate these challenges and
            provide a secure and efficient face recognition system for users.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
