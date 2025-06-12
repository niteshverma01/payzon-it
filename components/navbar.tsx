"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const services = [
  {
    title: "Web Development",
    href: "/web-development",
    items: [
      { label: "Web Portal", href: "/web-portal" },
      { label: "Landing Websites", href: "/landing-page" },
      { label: "Recharge Portal", href: "/recharge-portal" },
      { label: "Marketing/Sales Funnel", href: "/salesMarketing" },
      { label: "API Development", href: "/api-development" },
      { label: "App Development", href: "#" },
      { label: "Fintech Development", href: "#" },
      { label: "Blockchain Development", href: "/blockchain" },
    ],
  },
  {
    title: "Our Products",
    href: "/products",
    items: [
      { label: "Fintech Portal", href: "/fintech-portal" },
      { label: "Shopping Portal", href: "/shopping-portal" },
      { label: "Recharge Portal", href: "/productReacharge-portal" },
      { label: "Travel Portal", href: "/travel-portal" },
      { label: "Gaming Portal", href: "/gaming-portal" },
      { label: "Grocery/Mart Portal", href: "/grocery-portal" },
      { label: "eKYC Portal", href: "/kyc-portal" },
      { label: "Web Hosting", href: "/webhosting-portal" },
    ],
  },
  {
    title: "Security & Auditing",
    href: "/security",
    items: [
      { label: "2FA Authentication", href: "/2fa-authentication" },
      { label: "Website Security", href: "/websites" },
      { label: "Database Security", href: "/database-security" },
      { label: "Network Security", href: "/network-security" },
      { label: "Code Audit", href: "/code-Audit" },
      { label: "DDoS Protection", href: "/ddos" },
    ],
  },
  {
    title: "Verification Services",
    href: "/verification",
    items: [
      { label: "Aadhar Verification", href: "/adhar-verification" },
      { label: "PAN Verification", href: "/pan-verification" },
      { label: "GST Verification", href: "/gst-verification" },
      { label: "Bank Account Verification", href: "/bank-verification" },
      { label: "Live Face Detection", href: "/face-detecation" },
    ],
  },
  {
    title: "Sales & Marketing",
    href: "/marketing",
    items: [
      { label: "Paid Ad Campaigns", href: "/paid-campaigns" },
      { label: "SEO/SME", href: "/seo-sme" },
      { label: "Google PPC", href: "/googlePpc" },
      { label: "Bulk Email and SMS", href: "/sms" },
      { label: "Meta Verified WhatsApp", href: "/meta" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-12 navbar-blur"
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {services.map((service, index) => (
            <div key={service.title} className="relative group">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium relative group transition-all duration-300 rounded-lg flex items-center gap-1",
                    pathname.startsWith(service.href)
                      ? "text-primary bg-primary/10 orange-glow"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {service.title}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      "group-hover:rotate-180"
                    )}
                  />
                  {pathname.startsWith(service.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5  rounded-full orange-glow"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              </motion.div>

              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="py-2 rounded-xl bg-black shadow-2xl orange-glow"
                >
                  {service.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}

          <Link
            href="/about"
            className={cn(
              "px-4 py-2 text-sm font-medium relative transition-all duration-300 rounded-lg",
              pathname === "/about"
                ? "text-primary bg-primary/10 orange-glow"
                : "text-foreground/80 hover:text-primary hover:bg-primary/5"
            )}
          >
            About Us
            {pathname === "/about" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full orange-glow"
                layoutId="navbar-indicator"
              />
            )}
          </Link>

          <Link
            href="/blog"
            className={cn(
              "px-4 py-2 text-sm font-medium relative transition-all duration-300 rounded-lg",
              pathname === "/blog"
                ? "text-primary bg-primary/10 orange-glow"
                : "text-foreground/80 hover:text-primary hover:bg-primary/5"
            )}
          >
            Blog
            {pathname === "/blog" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full orange-glow"
                layoutId="navbar-indicator"
              />
            )}
          </Link>
        </div>

        {/* Right section: Contact + Mobile Menu */}
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              asChild
              className="btn-primary rounded-full px-6 shadow-lg orange-glow-hover"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          {/* Mobile Sheet Menu - visible only below 1024px */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] dark-card border-l dark-border overflow-y-auto max-h-screen"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {services.map((service) => (
                    <div key={service.title} className="space-y-2">
                      <Link
                        href={service.href}
                        className={cn(
                          "block text-lg font-medium transition-colors duration-200 rounded-lg p-2",
                          pathname.startsWith(service.href)
                            ? "text-primary bg-primary/10 orange-glow"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                      <div className="pl-4 space-y-1 border-l dark-border">
                        {service.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 p-1 rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <Link
                    href="/about"
                    className={cn(
                      "block text-lg font-medium transition-colors duration-200 rounded-lg p-2",
                      pathname === "/about"
                        ? "text-primary bg-primary/10 orange-glow"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/blog"
                    className={cn(
                      "block text-lg font-medium transition-colors duration-200 rounded-lg p-2",
                      pathname === "/blog"
                        ? "text-primary bg-primary/10 orange-glow"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>

                  <Button
                    asChild
                    className="btn-primary w-full mt-4 rounded-full orange-glow-hover"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
