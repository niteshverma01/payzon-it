import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Code, Package, Shield, CheckCircle, TrendingUp, Globe, Smartphone, Database, Lock, Search, Mail, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    category: "Web Development",
    icon: Code,
    href: "/web-development",
    services: [
      { name: "Web Portal", icon: Globe, href: "/services/web-portal" },
      { name: "Landing Websites", icon: Globe, href: "/services/landing-websites" },
      { name: "Recharge Portal", icon: CreditCard, href: "/services/recharge-portal" },
      { name: "Grocery Portal", icon: Package, href: "/services/grocery-portal" },
      { name: "App Development", icon: Smartphone, href: "/services/app-development" },
      { name: "Fintech Development", icon: CreditCard, href: "/services/fintech-development" },
      { name: "Blockchain Development", icon: Database, href: "/services/blockchain-development" },
    ],
  },
  {
    category: "Our Products",
    icon: Package,
    href: "/products",
    services: [
      { name: "Fintech Portal", icon: CreditCard, href: "/services/fintech-portal" },
      { name: "Shopping Portal", icon: Package, href: "/services/shopping-portal" },
      { name: "Grocery Portal", icon: Package, href: "/services/grocery-portal" },
      { name: "Travel Portal", icon: Globe, href: "/services/travel-portal" },
      { name: "Gaming Portal", icon: Smartphone, href: "/services/gaming-portal" },
      { name: "eKYC Portal", icon: CheckCircle, href: "/services/ekyc-portal" },
      { name: "Web Hosting", icon: Database, href: "/services/web-hosting" },
    ],
  },
  {
    category: "Security & Auditing",
    icon: Shield,
    href: "/security",
    services: [
      { name: "2FA Authentication", icon: Lock, href: "/services/2fa-authentication" },
      { name: "Website Security", icon: Shield, href: "/services/website-security" },
      { name: "Database Security", icon: Database, href: "/services/database-security" },
      { name: "Network Security", icon: Shield, href: "/services/network-security" },
      { name: "Code Audit", icon: Code, href: "/services/code-audit" },
      { name: "DDoS Protection", icon: Shield, href: "/services/ddos-protection" },
    ],
  },
  {
    category: "Verification Services",
    icon: CheckCircle,
    href: "/verification",
    services: [
      { name: "Aadhar Verification", icon: CheckCircle, href: "/services/aadhar-verification" },
      { name: "PAN Verification", icon: CheckCircle, href: "/services/pan-verification" },
      { name: "GST Verification", icon: CheckCircle, href: "/services/gst-verification" },
      { name: "Bank Account Verification", icon: CreditCard, href: "/services/bank-account-verification" },
      { name: "Live Face Detection", icon: CheckCircle, href: "/services/live-face-detection" },
    ],
  },
  {
    category: "Sales & Marketing",
    icon: TrendingUp,
    href: "/marketing",
    services: [
      { name: "Paid Ad Campaigns", icon: TrendingUp, href: "/services/paid-ads" },
      { name: "SEO/SME", icon: Search, href: "/services/seo-sme" },
      { name: "Google PPC", icon: Search, href: "/services/google-ppc" },
      { name: "Bulk Email and SMS", icon: Mail, href: "/services/bulk-email-sms" },
      { name: "Meta Verified WhatsApp", icon: Mail, href: "/services/meta-whatsapp" },
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our All Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We offer a wide range of services to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0">
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div className="relative rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 p-3 shadow-lg">
                          <IconComponent className="h-7 w-7 text-primary" />
                          <div className="absolute inset-0 rounded-xl bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                            {category.category}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {category.services.length} services available
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0">
                    <div className="space-y-4 mb-6">
                      {category.services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <Link key={service.name} href={service.href}>
                            <motion.div
                              className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer group/item"
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover/item:from-primary/20 group-hover/item:to-primary/10 transition-all duration-300">
                                <ServiceIcon className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors duration-300" />
                              </div>
                              <span className="text-sm font-medium text-foreground/90 group-hover/item:text-foreground transition-colors duration-200">
                                {service.name}
                              </span>
                              <div className="flex-1" />
                              <motion.div
                                className="w-2 h-2 rounded-full bg-primary/40 opacity-0 group-hover/item:opacity-100"
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              />
                            </motion.div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
