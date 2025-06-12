"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Search, Clock, Eye, Heart } from "lucide-react"
import { ServiceHero } from "@/components/service-hero"
import { useState } from "react"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development in India, from AI integration to progressive web apps and the technologies that will define the next generation of digital experiences.",
    author: "Arjun Sharma",
    date: "December 15, 2024",
    readTime: "8 min read",
    views: "2.4k",
    likes: "156",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-web-development-2024",
    featured: true,
  },
  {
    title: "Cybersecurity Best Practices for Indian Small Businesses",
    excerpt:
      "Essential security measures every small business in India should implement to protect against evolving cyber threats and ensure data protection compliance.",
    author: "Rahul Kumar",
    date: "December 10, 2024",
    readTime: "6 min read",
    views: "1.8k",
    likes: "89",
    category: "Security",
    image: "/placeholder.svg?height=300&width=500",
    slug: "cybersecurity-best-practices",
    featured: false,
  },
  {
    title: "Building Scalable Fintech Applications in India",
    excerpt:
      "Key considerations and architectural patterns for developing robust financial technology solutions that comply with Indian regulations and scale effectively.",
    author: "Priya Patel",
    date: "December 5, 2024",
    readTime: "10 min read",
    views: "3.2k",
    likes: "234",
    category: "Fintech",
    image: "/placeholder.svg?height=300&width=500",
    slug: "scalable-fintech-applications",
    featured: true,
  },
  {
    title: "Digital Marketing Strategies That Actually Work in 2024",
    excerpt:
      "Proven digital marketing tactics specifically tailored for the Indian market that drive real results for businesses in today's competitive landscape.",
    author: "Sneha Reddy",
    date: "November 28, 2024",
    readTime: "7 min read",
    views: "2.1k",
    likes: "178",
    category: "Marketing",
    image: "/placeholder.svg?height=300&width=500",
    slug: "digital-marketing-strategies",
    featured: false,
  },
  {
    title: "The Rise of No-Code Development Platforms in India",
    excerpt:
      "How no-code platforms are democratizing software development in India and what it means for businesses and developers in the evolving tech landscape.",
    author: "Arjun Sharma",
    date: "November 20, 2024",
    readTime: "5 min read",
    views: "1.5k",
    likes: "92",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    slug: "no-code-development-platforms",
    featured: false,
  },
  {
    title: "API Security: Protecting Your Digital Assets",
    excerpt:
      "Essential strategies for securing APIs and protecting sensitive data in modern applications, with focus on Indian compliance requirements.",
    author: "Rahul Kumar",
    date: "November 15, 2024",
    readTime: "9 min read",
    views: "2.7k",
    likes: "145",
    category: "Security",
    image: "/placeholder.svg?height=300&width=500",
    slug: "api-security-guide",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Security", "Fintech", "Marketing", "Technology"]

const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <ServiceHero
        title="Insights & Expertise"
        description="Stay updated with the latest trends, best practices, and insights from our team of experts in technology, security, and digital innovation across India."
        icon={Search}
        accentColor="bg-indigo-600"
        gradientFrom="rgba(99,102,241,0.2)"
        gradientTo="rgba(79,70,229,0.1)"
      />

      {/* Search and Filter */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 card-simple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      category === selectedCategory
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "border-border hover:bg-secondary/50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured <span className="">Article</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="card-simple overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredPost.image})` }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {featuredPost.likes}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-12 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Latest <span className="">Articles</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Discover insights, tutorials, and industry updates from our experts
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-simple overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">{post.category}</Badge>
                    </div>
                    
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Button asChild variant="outline" size="sm" className="border-border hover:bg-secondary/50">
                        <Link href={`/blog/${post.slug}`}>
                          <span>Read</span>
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary/50">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

 
    </div>
  )
}
