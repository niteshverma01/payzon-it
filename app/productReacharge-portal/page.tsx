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
  Activity,
  Book,
  User,
  Search,
  Users,
  Smartphone,
  Lightbulb,
  CreditCard,
  Handshake,
  Bell,
  Focus,
  CircleCheck,
  Wallet,
  Shield,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

import image1 from "../../public/01.png";
import image2 from "../../public/02.png";
import image3 from "../../public/03.png";
import image4 from "../../public/04.png";
import image5 from "../../public/05.png";
const services = [
  {
    title: "User-Friendly Interface",
    description:
      "The recharge portal is designed with simplicity in mind, offering an intuitive interface that allows users to quickly navigate through the recharge process. Whether on a desktop or mobile device, the layout ensures an optimal experience.",
    icon: Book,
  
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Multiple Payment Options",
    description:
      "The portal supports a variety of payment methods, allowing users to recharge their accounts using credit/debit cards, digital wallets (like PayPal or Google Pay), bank transfer, depending on the available options.",
    icon: Lightbulb,
  
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Real-Time Recharge Processing",
    description:
      "Users can complete recharge transactions in real-time, ensuring that their balance is updated immediately after payment confirmation. This quick processing minimizes delays and enhances user satisfaction.",
    icon: Shield,
  
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Recharge History and Transactions",
    description:
      "Users can view their recharge history, including past transactions, payment amounts, and dates. This feature allows customers to track their spending and manage their account balances more effectively.",
    icon: Users,
 
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Service Selection",
    description:
      "The portal supports a wide range of recharge options, allowing users to select the service they wish to top up—such as mobile phone balances, broadband plans, utility bills, or subscription services. The selection process is simple and clearly laid out.",
    icon: Search,
    
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Security Features",
    description:
      "Payment security is a top priority. The portal implements industry-standard encryption (SSL/TLS) to protect users’ personal and financial information. Additionally, secure authentication methods (like OTPs or 2FA) are used to ensure that only authorized users can access their accounts.",
    icon: Activity,
  
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Subscription and Auto-Recharge Options",
    description:
      "Users can opt for subscription-based recharges or set up auto-recharge functionality, ensuring that their services are always topped up at regular intervals, reducing the risk of service interruptions.",
    icon: Smartphone,
 
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Multi-Methods Support",
    description:
      "The recharge portal can support multiple Methods, enabling users to recharge their accounts or services regardless of their location. Currency conversion is handled automatically to ensure users pay the correct amount.",
    icon: Smartphone,
    
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Notifications and Alerts",
    description:
      "The portal sends out notifications or alerts to users when their recharge is successful, when their balance is low, or when auto-recharge is about to occur. This helps keep users informed and in control of their recharge needs.",
    icon: Smartphone,
  
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Personalized User Accounts",
    description:
      "The portal allows users to create and manage personal accounts, where they can save payment information, recharge preferences, and service details. This creates a more customized experience and speeds up future recharge transactions.",
    icon: Smartphone,
  
    gradient: "from-teal-500/20 to-blue-500/20",
  },
];

const features = [
  {
    icon: Focus,
    title: "Convenience",
    description:
      "Users can recharge anytime and from anywhere, eliminating the need to visit physical stores or wait for assistance. This 24/7 access improves customer satisfaction and retention.",
  },
  {
    icon: CircleCheck,
    title: "Time-Saving",
    description:
      "The portal streamlines the recharge process, reducing transaction time and providing users with a fast, hassle-free way to manage their services.",
  },
  {
    icon: User,
    title: "Security",
    description:
      "With robust encryption, multi-layered security features, and safe payment processing, the portal ensures that all transactions are secure and that users’ data is protected.",
  },
  {
    icon: Wallet,
    title: "Flexibility",
    description:
      "The portal offers multiple payment methods, service options, and currency support, catering to a wide variety of user needs, both locally and internationally.",
  },
  {
    icon: LayoutDashboard,
    title: "Improved User Engagement",
    description:
      "With features like auto-recharge, transaction history, and personalized accounts, the portal enhances user engagement and loyalty, encouraging repeat use.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Growth",
    description:
      "For businesses, the recharge portal provides a new revenue stream, allowing companies to offer customers an easy way to recharge products or services, helping them expand their customer base and increase sales.",
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

export default function ProductRechargeportal() {
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
              Recharge Portal Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Recharge Portal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Here's a description of a landing website that can be used for a
              proposal, project brief, or marketing purposes:
            </motion.p>
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
              Benefits of a Web Portal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              Your personalized gateway to seamless services, applications, and
              data management—all in one intuitive platform.
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
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="relative bg-secondary/30 border-border/30 h-full text-center transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/50 group-hover:bg-secondary/50 overflow-hidden">
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {feature.description}
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
      <section className="py-24 px-12 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Key Features of the Web Portal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A web portal is your personalized gateway to a world of services,
              applications, and data management. Seamlessly access and manage
              everything you need in one place.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
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
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
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

      {/* landing websites */}

      <section className="py-24 px-12 ">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Key Features of the Web Portal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A web portal is your personalized gateway to a world of services,
              applications, and data management. Seamlessly access and manage
              everything you need in one place.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingwebsites.map((landingwebsite, index) => {
              return (
                <motion.div
                  key={landingwebsite.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className=" border-border/0 h-full border rounded-lg hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                    <div
                      className={` inset-0   opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="rounded-lg  p-3  transition-colors w-24 h-24 relative">
                          <Image
                            src={landingwebsite.image} // This should be a valid URL or imported image
                            alt={landingwebsite.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <CardTitle className="text-xl">
                          {landingwebsite.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {landingwebsite.description}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
