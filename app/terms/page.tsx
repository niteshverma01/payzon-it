"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsPage() {
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
              Terms & Conditions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Terms of <span className="">Service</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Please read these terms and conditions carefully before using our services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <div className="mb-8 text-sm text-muted-foreground">
                <strong>Last updated:</strong> December 15, 2024
              </div>

              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      By accessing and using TechSolutions Pro services, you accept and agree to be bound by the terms
                      and provision of this agreement. If you do not agree to abide by the above, please do not use this
                      service.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Scale className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Service Description</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>TechSolutions Pro provides digital solutions including but not limited to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Web development and application development services</li>
                      <li>Security auditing and cybersecurity services</li>
                      <li>Digital marketing and SEO services</li>
                      <li>Verification and KYC services</li>
                      <li>Consulting and technical support</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">User Responsibilities</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the confidentiality of your account credentials</li>
                      <li>Use our services in compliance with applicable laws</li>
                      <li>Not engage in any activity that could harm our systems or other users</li>
                      <li>Respect intellectual property rights</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Payment terms are specified in individual service agreements. Generally, payments are due within
                      30 days of invoice date unless otherwise agreed. Late payments may incur additional charges.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      All content, features, and functionality of our services are owned by TechSolutions Pro and are
                      protected by copyright, trademark, and other intellectual property laws. Custom developments
                      created for clients remain the property of the client upon full payment.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      TechSolutions Pro shall not be liable for any indirect, incidental, special, consequential, or
                      punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                      intangible losses.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We strive to maintain high service availability but do not guarantee uninterrupted access. We may
                      suspend or terminate services for maintenance, updates, or other operational reasons.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We maintain strict confidentiality regarding client information and project details. We may
                      require separate non-disclosure agreements for sensitive projects.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Either party may terminate services with appropriate notice as specified in individual service
                      agreements. Termination does not relieve parties of obligations incurred prior to termination.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These terms shall be governed by and construed in accordance with the laws of India. Any disputes
                      shall be subject to the jurisdiction of courts in Mumbai, India.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                      posting. Continued use of our services constitutes acceptance of modified terms.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      For questions about these terms, please contact us at:
                      <br />
                      Email: legal@techsolutionspro.com
                      <br />
                      Phone: +91 9876543210
                      <br />
                      Address: 123 Business District, Mumbai, Maharashtra 400001, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
