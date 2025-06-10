import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import logo from "../public/logo.png"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Payzon IT Pvt. Ltd. - Complete Digital Solutions",
  description:
    "Leading provider of web development, fintech solutions, security services, and digital marketing in India",
 
  icons: {
    icon: "/logo.png",       // browser tab icon (favicon)
    shortcut: "/logo.png",   // for pinned shortcuts
    apple: "/logo.png",      // for Apple devices
  },
  openGraph: {
    title: "Payzon IT Pvt. Ltd.",
    description:
      "Leading provider of web development, fintech solutions, security services, and digital marketing in India",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Payzon IT Pvt. Ltd. Logo",
      },
    ],
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <Suspense fallback={null}>

          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
