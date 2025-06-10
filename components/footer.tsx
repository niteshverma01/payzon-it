import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"
import Image from "next/image"
import sadaiv from "../public/7.png"
import yuva from "../public/10.jpeg"
import dun from "../public/11.png"
import spark from "../public/12.png"
import smart from "../public/8.png"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40 px-12">
      <div className="container py-12 md:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Address : B1, Patel Nagar,Raisen road Near HP Petrol Pump, Bhopal (MP) Pin: 462022 <br />

              Email : info@payzonindia.com <br />

              Contact No. : +91 755 485 9540, <br />
              +91 7554923296
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/PAYZONINDIA/" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/PayzonIndia" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/payzonindiabhopal/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/thepayzonindia/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@payzonindiadigitalsolutions" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">USEFULL MENU</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">
                  Fintech Solutions
                </Link>
              </li>
              <li>
                <Link href="/verification" className="text-muted-foreground hover:text-primary transition-colors">
                  Shopping Portal API
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Articles & Blogs
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Details
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">TRENDING SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  REST API Developments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  VPS Server Hosting
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Portal Developments
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  VPS Server Hosting
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Security
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Verification API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">OUR ONLINE VERSATILITY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  www.payzonindia.com
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  www.payzonapi.com
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  www.payzonmarketing.com
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  www.payzonshoppy.com
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  www.payzonitservices.com
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  www.sadaivsatya.com
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  www.sadaivyuvafoundation.com
                </Link>
              </li>
            </ul>
          </div>


        </div>
        <div className="mt-12 text-center">
          <h4 className="font-semibold mb-6 text-lg">
            OUR BUSINESS <br className="hidden sm:block" /> COLLABORATION
          </h4>

          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 overflow-x-auto">
            <Image src={sadaiv} alt="Sadaiv Satya" width={160} height={64} />
            <Image src={yuva} alt="Yuva Foundation" width={120} height={64} />
            <Image src={dun} alt="Dun Logo" width={120} height={64} />
            <Image src={spark} alt="Spark Logo" width={120} height={64} />
            <Image src={smart} alt="Smart Solutions" width={120} height={64} />
          </div>
        </div>




      </div>

      <div className="w-full border-t border-border/40 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white">

          {/* Left Text */}
          <div className="text-center md:text-left mb-2 md:mb-0 text-muted-foreground hover:text-primary transition-colors">
            Copyright © {new Date().getFullYear()} PAYZONINDIA PVT LTD | All Rights Reserved.
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-4 ">
            <Link href="/support" className="hover:underline text-muted-foreground hover:text-primary transition-colors">Support</Link>
            <span className="text-white">|</span>
            <Link href="/privacy" className="hover:underline text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-white">|</span>
            <Link href="/terms" className="hover:underline text-muted-foreground hover:text-primary transition-colors" > Terms & Conditions</Link>
          </div>
        </div>
      </div>


    </footer>
  )
}
