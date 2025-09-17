"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const generateMockPosts = (page: number, limit = 6) => {
  const posts = []
  const categories = ["Teknoloji", "Tasarım", "Geliştirme", "AI", "Web", "Mobil"]
  const titles = [
    "Modern Web Geliştirme Teknikleri",
    "React 18 Yenilikleri ve Özellikleri",
    "TypeScript ile Güvenli Kod Yazma",
    "Next.js 14 App Router Rehberi",
    "CSS Grid ve Flexbox Karşılaştırması",
    "JavaScript ES2024 Özellikleri",
    "Responsive Tasarım İpuçları",
    "API Geliştirme Best Practices",
    "Database Optimizasyon Teknikleri",
    "Mobil Uygulama Geliştirme",
  ]

  for (let i = 0; i < limit; i++) {
    const index = (page - 1) * limit + i
    posts.push({
      id: index + 1,
      title: titles[index % titles.length] + ` - Sayfa ${page}`,
      excerpt:
        "Bu yazıda modern web geliştirme tekniklerini ve en iyi uygulamaları inceleyeceğiz. Güncel teknolojiler ve araçlar hakkında detaylı bilgiler.",
      category: categories[index % categories.length],
      date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString("tr-TR"),
      readTime: Math.floor(Math.random() * 10) + 3,
      author: "Yazar " + ((index % 3) + 1),
      image: `/placeholder.svg?height=200&width=400&query=blog-post-${index + 1}`,
    })
  }

  return posts
}

export function InfiniteScrollPosts() {
  const [posts, setPosts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const initialPosts = generateMockPosts(1)
    setPosts(initialPosts)
  }, [])

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newPosts = generateMockPosts(page + 1)

    if (newPosts.length === 0 || page >= 10) {
      // Limit to 10 pages for demo
      setHasMore(false)
    } else {
      setPosts((prev) => [...prev, ...newPosts])
      setPage((prev) => prev + 1)
    }

    setLoading(false)
  }, [page, loading, hasMore])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMorePosts()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [loadMorePosts])

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Blog Yazıları</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknoloji, tasarım ve geliştirme hakkında güncel yazılar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} dk</span>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full group bg-transparent">
                  <Link href={`/blog/${post.id}`}>
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="loading-spinner"></div>
            <span className="ml-3 text-muted-foreground">Yeni yazılar yükleniyor...</span>
          </div>
        )}

        {!hasMore && posts.length > 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Tüm yazıları görüntülediniz 🎉</p>
          </div>
        )}

        {hasMore && !loading && (
          <div className="text-center mt-12">
            <Button onClick={loadMorePosts} size="lg" className="bg-primary hover:bg-primary/90">
              Daha Fazla Yükle
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
