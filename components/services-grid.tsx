import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Code,
  Package,
  Shield,
  CheckCircle,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
  Lock,
  Search,
  Mail,
  CreditCard,
} from "lucide-react"

const services = [
  {
    category: "Web Development",
    icon: Code,
    href: "/web-development",
    services: [
      { name: "Web Portal", icon: Globe },
      { name: "Landing Websites", icon: Globe },
      { name: "Recharge Portal", icon: CreditCard },
      { name: "Grocery Portal", icon: Package },
      { name: "App Development", icon: Smartphone },
      { name: "Fintech Development", icon: CreditCard },
      { name: "Blockchain Development", icon: Database },
    ],
  },
  {
    category: "Our Products",
    icon: Package,
    href: "/products",
    services: [
      { name: "Fintech Portal", icon: CreditCard },
      { name: "Shopping Portal", icon: Package },
      { name: "Grocery Portal", icon: Package },
      { name: "Travel Portal", icon: Globe },
      { name: "Gaming Portal", icon: Smartphone },
      { name: "eKYC Portal", icon: CheckCircle },
      { name: "Web Hosting", icon: Database },
    ],
  },
  {
    category: "Security & Auditing",
    icon: Shield,
    href: "/security",
    services: [
      { name: "2FA Authentication", icon: Lock },
      { name: "Website Security", icon: Shield },
      { name: "Database Security", icon: Database },
      { name: "Network Security", icon: Shield },
      { name: "Code Audit", icon: Code },
      { name: "DDoS Protection", icon: Shield },
    ],
  },
  {
    category: "Verification Services",
    icon: CheckCircle,
    href: "/verification",
    services: [
      { name: "Aadhar Verification", icon: CheckCircle },
      { name: "PAN Verification", icon: CheckCircle },
      { name: "GST Verification", icon: CheckCircle },
      { name: "Bank Account Verification", icon: CreditCard },
      { name: "Live Face Detection", icon: CheckCircle },
    ],
  },
  {
    category: "Sales & Marketing",
    icon: TrendingUp,
    href: "/marketing",
    services: [
      { name: "Paid Ad Campaigns", icon: TrendingUp },
      { name: "SEO/SME", icon: Search },
      { name: "Google PPC", icon: Search },
      { name: "Bulk Email and SMS", icon: Mail },
      { name: "Meta Verified WhatsApp", icon: Mail },
    ],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.category} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service) => {
                      const ServiceIcon = service.icon
                      return (
                        <div key={service.name} className="flex items-center space-x-2">
                          <ServiceIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{service.name}</span>
                        </div>
                      )
                    })}
                  </div>
                  <Button asChild className="w-full mt-6" variant="outline">
                    <Link href={category.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
