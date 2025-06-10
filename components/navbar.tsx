"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"

const services = [
  {
    title: "Web Development",
    href: "/web-development",
    items: [
      "Web Portal",
      "Landing Websites",
      "Recharge Portal",
      "Grocery Portal",
      "App Development",
      "Fintech Development",
      "Blockchain Development",
    ],
  },
  {
    title: "Our Products",
    href: "/products",
    items: [
      "Fintech Portal",
      "Shopping Portal",
      "Grocery Portal",
      "Travel Portal",
      "Gaming Portal",
      "eKYC Portal",
      "Web Hosting",
    ],
  },
  {
    title: "Security & Auditing",
    href: "/security",
    items: [
      "2FA Authentication",
      "Website Security",
      "Database Security",
      "Network Security",
      "Code Audit",
      "DDoS Protection",
    ],
  },
  {
    title: "Verification Services",
    href: "/verification",
    items: [
      "Aadhar Verification",
      "PAN Verification",
      "GST Verification",
      "Bank Account Verification",
      "Live Face Detection",
    ],
  },
  {
    title: "Sales & Marketing",
    href: "/marketing",
    items: ["Paid Ad Campaigns", "SEO/SME", "Google PPC", "Bulk Email and SMS", "Meta Verified WhatsApp"],
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-12 navbar-blur"
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center space-x-1">
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
                    "px-4 py-2 text-sm font-medium relative group transition-all duration-300 rounded-lg",
                    pathname.startsWith(service.href)
                      ? "text-primary bg-primary/10 orange-glow"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {service.title}
                  {pathname.startsWith(service.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full orange-glow"
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
                      key={item}
                      href={service.href}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-2"
                    >
                      {item}
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
                : "text-foreground/80 hover:text-primary hover:bg-primary/5",
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
                : "text-foreground/80 hover:text-primary hover:bg-primary/5",
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

        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild className="btn-primary rounded-full px-6 shadow-lg orange-glow-hover">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] dark-card border-l dark-border">
              <div className="flex flex-col space-y-4 mt-8">
                {services.map((service) => (
                  <div key={service.title} className="space-y-2">
                    <Link
                      href={service.href}
                      className={cn(
                        "block text-lg font-medium transition-colors duration-200 rounded-lg p-2",
                        pathname.startsWith(service.href)
                          ? "text-primary bg-primary/10 orange-glow"
                          : "text-foreground hover:text-primary hover:bg-primary/5",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                    <div className="pl-4 space-y-1 border-l dark-border">
                      {service.items.map((item) => (
                        <Link
                          key={item}
                          href={service.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 p-1 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
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
                      : "text-foreground hover:text-primary hover:bg-primary/5",
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
                      : "text-foreground hover:text-primary hover:bg-primary/5",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Button asChild className="btn-primary w-full mt-4 rounded-full orange-glow-hover">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
