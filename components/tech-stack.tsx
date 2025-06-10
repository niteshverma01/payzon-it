"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Ay from "../public/1.png"
import By from "../public/2.png"
import Cy from "../public/3.png"
import Ey from "../public/4.png"
import GY from "../public/6.png"
import Hy from "../public/7.png"
import Iy from "../public/8.png"
import Jy from "../public/9.png"
import Ky from "../public/10.jpeg"
import Ly from "../public/11.png"
import My from "../public/12.png"

import ad from "../public/ad-campaign.jpg"
import seo from "../public/seo.avif"
import ppc from "../public/ppc.jpg"
import sms from "../public/sms.png"
import meta from "../public/meta.avif"



const technologies = [
  {
    title: "PAID AD Campaign",
    description:
      "High-impact paid ad campaigns designed to drive traffic, increase sales, and enhance brand visibility quickly and effectively. Targeted strategies ensure maximum ROI and measurable growth across digital platforms.",
    image: ad,
    link: "#",
  },
  {
    title: "SEO/SME Optimization",
    description:
      "Expert SEO and local SME optimization to boost your search engine rankings organically. Enhance online visibility, attract targeted traffic, and grow your local business presence with proven strategies tailored to your market.",
    image: seo,
    link: "#",
  },
  {
    title: "Google PPC",
    description:
      "Targeted Google Pay-Per-Click (PPC) campaigns designed to deliver fast, measurable business growth. Optimize ad spend to attract quality leads, increase conversions, and maximize your return on investment efficiently.",
    image: ppc,
    link: "#",
  },
  {
    title: "BULK Email/SMS",
    description:
      "Powerful bulk Email and SMS campaigns to instantly reach thousands of customers. Perfect for lead generation, promotions, and timely updates—ensuring your message connects quickly and effectively with your target audience.",
    image: sms,
    link: "#",
  },
  {
    title: "Meta Verified Whatsapps",
    description:
      "Boost your brand's credibility with Meta Verification and connect directly with customers through WhatsApp Marketing—enhancing trust, engagement, and conversions with personalized messaging and verified social presence to drive business growth and audience loyalty.",
    image: meta,
    link: "#",
  },

]

const companies = [
  { title: "CAB", image: Ay, link: "#" },
  { title: "IWAY", image: By, link: "#" },
  { title: "IWAY Shoppe", image: Cy, link: "#" },
  { title: "Food Excellencia", image: Hy, link: "#" },
  { title: "Smart Tax Idea", image: Ey, link: "#" },
  { title: "CASCAB", image: Ky, link: "#" },
  { title: "CASCAB", image: Iy, link: "#" },
  { title: "CASCAB", image: Hy, link: "#" },
  { title: "CASCAB", image: Jy, link: "#" },
  { title: "CASCAB", image: My, link: "#" },
  { title: "CASCAB", image: GY, link: "#" },
  { title: "CASCAB", image: Ly, link: "#" },
]

export function TechStack() {
  return (
    <section className="py-24 px-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,72,0,0.1),transparent_70%)]"></div>
      <div className="container mx-auto relative">
        {/* Header */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sales And Marketing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore some of our most successful projects and see how we've helped businesses grow.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-secondary/50 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${typeof tech.image === "string" ? tech.image : tech.image.src})`,
                    }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logo Marquee Section */}
        <div className="mt-16 overflow-hidden">
          <h1 className="text-center pb-12 text-primary text-4xl font-bold underline">All trusted brands</h1>
          <div className="flex animate-marquee space-x-16 whitespace-nowrap items-center">
            {companies.concat(companies).map((company, index) => (
              <a
                key={index}
                href={company.link}
                className="flex items-center flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-28 bg-contain bg-no-repeat bg-center shadow-md"
                  style={{
                    width: "auto",
                    minWidth: "120px", // fallback for consistent spacing
                    backgroundImage:
                      typeof company.image === "string"
                        ? `url(${company.image})`
                        : `url(${company.image.src})`,
                  }}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
