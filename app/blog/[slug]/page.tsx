"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock, Eye, Heart, Share2, BookOpen } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
        <p>The web development landscape in India is evolving rapidly, with new technologies and methodologies emerging that promise to reshape how we build digital experiences. As we move through 2024, several key trends are becoming increasingly important for developers and businesses alike.</p>
        
        <h2>AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. In India, companies are increasingly adopting AI-powered solutions to accelerate development cycles and improve code quality.</p>
        
        <h2>Progressive Web Apps (PWAs)</h2>
        <p>With India's mobile-first approach to internet usage, PWAs are becoming crucial for businesses looking to provide app-like experiences without the overhead of native app development. PWAs offer offline functionality, push notifications, and fast loading times - perfect for India's diverse connectivity landscape.</p>
        
        <h2>Serverless Architecture</h2>
        <p>The adoption of serverless computing is growing rapidly in India, allowing developers to focus on code rather than infrastructure management. This approach is particularly beneficial for startups and small businesses looking to scale efficiently.</p>
        
        <h2>Enhanced Security Measures</h2>
        <p>With increasing cyber threats, security-first development is no longer optional. Indian businesses are prioritizing secure coding practices, regular security audits, and compliance with data protection regulations.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development in India is bright, with emerging technologies offering new possibilities for creating innovative, secure, and user-friendly digital experiences. Staying updated with these trends is crucial for developers and businesses looking to remain competitive in the digital landscape.</p>
      `,
      author: "Arjun Sharma",
      date: "December 15, 2024",
      readTime: "8 min read",
      views: "2.4k",
      likes: "156",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=800",
      slug: "future-web-development-2024",
    },
    // Add more posts as needed
  ]

  return posts.find((post) => post.slug === slug)
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Button asChild variant="outline" size="sm" className="glass-effect">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Badge className="bg-primary/90 text-white mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button size="sm" variant="outline" className="glass-effect">
                  <Heart className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button size="sm" variant="outline" className="glass-effect">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm" variant="outline" className="glass-effect">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="glass-effect border-border/50">
                <CardContent className="p-8 md:p-12">
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-muted-foreground">Continue reading with these related articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* This would typically show related posts */}
            <Card className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="bg-primary/90 text-white mb-3">Web Development</Badge>
                <h3 className="text-lg font-semibold mb-2">Building Modern React Applications</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn the latest React patterns and best practices for building scalable applications.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/blog/modern-react-applications">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
