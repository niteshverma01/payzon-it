"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users } from "lucide-react"

export default function PrivacyPage() {
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
              Privacy Policy
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Your Privacy <span className="">Matters</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
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
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We collect information you provide directly to us, such as when you create an account, contact us,
                      or use our services. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, and contact information</li>
                      <li>Business information and project requirements</li>
                      <li>Payment and billing information</li>
                      <li>Communications with our team</li>
                      <li>Technical information about your use of our services</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Communicate with you about products, services, and events</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Information Security</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We take reasonable measures to help protect information about you from loss, theft, misuse, and
                      unauthorized access, disclosure, alteration, and destruction. These measures include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication measures</li>
                      <li>Employee training on data protection</li>
                      <li>Secure data centers and infrastructure</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Information Sharing</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We may share information about you in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With your consent or at your direction</li>
                      <li>With vendors, consultants, and other service providers</li>
                      <li>To comply with laws, regulations, or legal requests</li>
                      <li>To protect rights, property, or safety</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We store the information we collect about you for as long as is necessary for the purpose(s) for
                      which we originally collected it. We may retain certain information for legitimate business
                      purposes or as required by law.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have certain rights regarding your personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The right to access and update your information</li>
                      <li>The right to request deletion of your information</li>
                      <li>The right to object to processing of your information</li>
                      <li>The right to data portability</li>
                      <li>The right to withdraw consent</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies and similar tracking technologies to collect and use personal information about
                      you. You can control cookies through your browser settings and other tools.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may change this privacy policy from time to time. If we make changes, we will notify you by
                      revising the date at the top of the policy and, in some cases, provide additional notice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have any questions about this privacy policy, please contact us at:
                      <br />
                      Email: privacy@techsolutionspro.com
                      <br />
                      Phone: +91 9876543210
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
