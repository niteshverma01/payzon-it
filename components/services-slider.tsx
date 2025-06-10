"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Smartphone, CreditCard, Package, Shield, Search } from "lucide-react"

const featuredServices = [
  {
    title: "Fintech Development",
    description:
      "Complete financial technology solutions with secure payment gateways, digital wallets, and banking integrations.",
    icon: CreditCard,
    features: ["Payment Gateway", "Digital Wallet", "Banking API", "Compliance"],
    href: "/web-development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with inventory management, payment processing, and customer analytics.",
    icon: Package,
    features: ["Shopping Cart", "Inventory", "Analytics", "Mobile App"],
    href: "/products",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Security Auditing",
    description: "Comprehensive security assessment and penetration testing to protect your digital assets.",
    icon: Shield,
    features: ["Penetration Testing", "Code Review", "Compliance", "Monitoring"],
    href: "/security",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence and drive conversions.",
    icon: Search,
    features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Analytics"],
    href: "/marketing",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps with modern UI/UX and robust backend integration.",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "API Integration", "Push Notifications"],
    href: "/web-development",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function ServicesSlider() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and innovative digital solutions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
